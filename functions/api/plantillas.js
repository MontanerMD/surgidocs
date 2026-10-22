/* Plantillario CGAD · API de plantillas (Cloudflare Pages Functions)
 *
 * GET  /api/plantillas           → { rev, items:[...] }   (público, solo lectura)
 * GET  /api/plantillas?check     → { ok, configured }      (comprueba la contraseña de edición)
 * POST /api/plantillas           → { ok, rev }             (requiere cabecera X-Edit-Key)
 *      body: { ops:[ {op:'set', item}, {op:'patch', id, patch}, {op:'delete', id} ] }
 *
 * Necesita en Cloudflare:
 *   - un espacio KV vinculado con el nombre PLANTILLAS
 *   - una variable secreta EDIT_KEY con la contraseña de edición
 * Si el KV está vacío, sirve las plantillas iniciales de /plantillas.json.
 */
import { MIGRATIONS } from '../_lib/migrations.js';

const KEY = 'data';
const PREV = 'data:prev';
const TYPES = ['urgencias', 'quirurgica', 'consulta', 'comun'];

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
});

async function load(env, request) {
  const stored = await env.PLANTILLAS.get(KEY, 'json');
  if (stored && stored.items) {
    const done = Array.isArray(stored.migrations) ? stored.migrations : [];
    const pending = MIGRATIONS.filter(m => !done.includes(m.id));
    if (pending.length) {                        // cambios de contenido pendientes: se aplican una vez y se guardan
      await env.PLANTILLAS.put(PREV, JSON.stringify(stored));
      pending.forEach(m => { m.run(stored.items); done.push(m.id); });
      stored.migrations = done;
      stored.rev = (stored.rev || 0) + 1;
      stored.savedAt = new Date().toISOString();
      await env.PLANTILLAS.put(KEY, JSON.stringify(stored));
    }
    return stored;
  }
  const items = {};
  try {
    const r = await env.ASSETS.fetch(new URL('/plantillas.json', request.url));
    if (r.ok) {
      const d = await r.json();
      (d.plantillas || []).forEach(o => { if (o && o.id) items[o.id] = o; });
    }
  } catch (e) { /* sin plantillas iniciales */ }
  return { rev: 0, items, migrations: MIGRATIONS.map(m => m.id) };
}

function authorized(request, env) {
  const given = request.headers.get('x-edit-key') || '';
  const secret = env.EDIT_KEY || '';
  if (!secret || given.length !== secret.length) return false;
  let diff = 0;
  for (let i = 0; i < secret.length; i++) diff |= secret.charCodeAt(i) ^ given.charCodeAt(i);
  return diff === 0;
}

const str = (v, max) => String(v == null ? '' : v).slice(0, max);
function cleanItem(o) {
  return {
    id: str(o.id, 120).replace(/[^\w.:@+-]/g, '') || 'p-' + Date.now().toString(36),
    title: str(o.title, 300),
    type: TYPES.includes(o.type) ? o.type : 'quirurgica',
    section: str(o.section || 'General', 40),
    tags: Array.isArray(o.tags) ? o.tags.slice(0, 20).map(t => str(t, 60)) : [],
    body: str(o.body, 200000),
    recs: str(o.recs, 200000),
    mat: str(o.mat, 100000),
    prep: str(o.prep, 100000),
    approach: ['abierta', 'laparoscopica', 'robotica'].includes(o.approach) ? o.approach : '',
    fav: !!o.fav,
    uses: Math.max(0, Math.min(1e7, Number(o.uses) || 0)),
    createdAt: str(o.createdAt, 40),
    updatedAt: str(o.updatedAt, 40),
    lastUsed: o.lastUsed ? str(o.lastUsed, 40) : undefined
  };
}
function cleanPatch(p) {
  const out = {};
  if (!p || typeof p !== 'object') return out;
  if ('fav' in p) out.fav = !!p.fav;
  if ('uses' in p) out.uses = Math.max(0, Math.min(1e7, Number(p.uses) || 0));
  if ('lastUsed' in p) out.lastUsed = str(p.lastUsed, 40);
  return out;
}

export async function onRequestGet({ env, request }) {
  if (!env.PLANTILLAS) return json({ error: 'kv_missing' }, 503);
  const url = new URL(request.url);
  if (url.searchParams.has('check')) return json({ ok: authorized(request, env), configured: !!env.EDIT_KEY });
  const d = await load(env, request);
  return json({ rev: d.rev || 0, items: Object.values(d.items) });
}

export async function onRequestPost({ env, request }) {
  if (!env.PLANTILLAS) return json({ error: 'kv_missing' }, 503);
  if (!env.EDIT_KEY) return json({ error: 'not_configured' }, 503);
  if (!authorized(request, env)) return json({ error: 'unauthorized' }, 401);
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'bad_json' }, 400); }
  const ops = Array.isArray(body && body.ops) ? body.ops : [];
  if (!ops.length || ops.length > 500) return json({ error: 'bad_ops' }, 400);
  const d = await load(env, request);
  for (const op of ops) {
    if (op.op === 'set' && op.item && op.item.id) { const it = cleanItem(op.item); d.items[it.id] = it; }
    else if (op.op === 'patch' && op.id) { if (d.items[op.id]) Object.assign(d.items[op.id], cleanPatch(op.patch)); }
    else if (op.op === 'delete' && op.id) { delete d.items[op.id]; }
    else return json({ error: 'bad_op' }, 400);
  }
  d.rev = (d.rev || 0) + 1;
  d.savedAt = new Date().toISOString();
  const text = JSON.stringify(d);
  if (text.length > 20 * 1024 * 1024) return json({ error: 'too_large' }, 413);
  const old = await env.PLANTILLAS.get(KEY);
  if (old && ops.some(o => o.op !== 'patch')) await env.PLANTILLAS.put(PREV, old);   // copia de la versión anterior
  await env.PLANTILLAS.put(KEY, text);
  return json({ ok: true, rev: d.rev });
}
