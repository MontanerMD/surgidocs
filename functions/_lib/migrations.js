import { aplicarRevision } from './revision-2026-10-30.js';
import { BASE_FP } from './revision-2026-10-30-base.js';
import { anadirNuevasCCP } from './nuevas-ccp-2026-10-30.js';

/* Migraciones de contenido que se aplican una sola vez a las plantillas guardadas en la nube. */

/* 2026-10-20 · Quitar de las recomendaciones al alta las citas de seguimiento con especialistas.
 * Se mantienen las citas con enfermería (curas, retirada de puntos/grapas) y los controles por MAP o podólogo. */
const CITA_LINE = [
  /^\s*(\[\[)?\s*-\s*(Con|Cita con|Solicite (una )?cita con)\s+(Cirugía General|Oncología|Hematología|Medicina Preventiva|Dermatología)\b.*$/i,
  /^\s*(CITA CON|SOLICITE UNA CITA CON) CIRUGÍA GENERAL\b.*$/,
  /^\s*CITAS DE CONTROL:\s*$/i
];
export function quitarCitas(recs) {
  if (!recs) return recs;
  const out = recs.split('\n').filter(l => !CITA_LINE.some(re => re.test(l)));
  return out.join('\n')
    .replace('CITA CON CIRUGÍA GENERAL EN 2 SEMANAS PARA CONTROL EVOLUTIVO E INCLUSIÓN EN LISTA DE ESPERA QUIRÚRGICA', 'INCLUSIÓN EN LISTA DE ESPERA QUIRÚRGICA').replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '').replace(/\n+$/, '');
}


const MAT_APENDICECTOMIA = "Anestésico local (levobupivacaína 0,25% / ropivacaína 0,3%) x1\nTrócar de Hasson 10-12 mm x1\nInsuflador de CO₂ x1\nÓptica de 30º (10 mm) x1\nTrócar de 5 mm x2\nPinza de agarre atraumática de 5 mm x1\nPinza disectora monopolar (Maryland) x1\nTijera laparoscópica x1\nLazos preformados (Surgitie)\nTrócar de 12 mm\nEndo GIA Ultra 45 mm (carga morada)\nEndobolsa x1\nCánula de aspiración-irrigación x1\nPenrose\nSeda 1\nMonomax 1 x1\nGrapadora de piel x1\nApósito compresivo x3";

const MAT_APENDICECTOMIA_2 = "Anestésico local (levobupivacaína 0,25% / ropivacaína 0,3%) x1\nTrócar de Hasson 10-12 mm x1\nInsuflador de CO₂ x1\nÓptica de 30º (10 mm) x1\nTrócar de 5 mm x2\nPinza de agarre atraumática de 5 mm x1\nPinza disectora monopolar (Maryland) x1\nTijera laparoscópica x1\nLazos preformados (Surgitie)\nTrócar de 12 mm x1 ?\nEndo GIA Ultra 45 mm (carga morada) x1 ?\nEndobolsa x1\nCánula de aspiración-irrigación x1 ?\nPenrose\nSeda 1\nMonomax 1 x1\nGrapadora de piel x1\nApósito compresivo x3";

/* 2026-10-21 · «en 10 días» → «en 10 días (desde la intervención)» en la retirada de grapas o puntos */
export function desdeIntervencion(txt) {
  if (!txt) return txt;
  return txt.replace(/(Solicite cita con enfermería (?:de|en) su Centro de Salud en \d+ (?:días|semanas?))(?! \(desde la intervención\))( para valorar la retirada)/g, '$1 (desde la intervención)$2');
}

/* 2026-10-22 · Hojas quirúrgicas: nuevo apartado «Preparación del paciente» (anestesia, profilaxis, posición, otros) */
const PREP_KEYS = ['ANESTESIA', 'PROFILAXIS ANTIBIÓTICA', 'POSICIÓN'];
const PREP_DEFAULT = {
  'ANESTESIA': '{{Anestesia: General | Raquídea | Local | Local con sedación}}',
  'PROFILAXIS ANTIBIÓTICA': '{{Profilaxis antibiótica}}',
  'POSICIÓN': '{{Posición}}'
};
export function separarPreparacion(o) {
  if (!o || o.type !== 'quirurgica' || (o.prep && o.prep.trim())) return false;
  let body = String(o.body || '');
  const got = {};
  for (const k of PREP_KEYS) {
    const re = new RegExp('(^|\\n)(' + k + ':[^\\n]*(?:\\n(?!\\n)[^\\n]*)*)');
    const m = body.match(re);
    if (m) { got[k] = m[2].slice(k.length + 1).trim(); body = body.replace(m[2], ''); }
  }
  if (!got['POSICIÓN']) {           // plantillas sin títulos: «- Posición en decúbito supino.» en las primeras líneas
    const lines = body.split('\n');
    for (let i = 0; i < Math.min(lines.length, 3); i++) {
      const m = lines[i].match(/^\s*-\s*Posición\s+(?:en\s+|de\s+)?(.+?)\s*$/i);
      if (m) { let t = m[1].replace(/\.$/, ''); got['POSICIÓN'] = t.charAt(0).toUpperCase() + t.slice(1) + '.'; lines.splice(i, 1); body = lines.join('\n'); break; }
    }
  }
  const prep = PREP_KEYS.map(k => `${k}: ${got[k] || PREP_DEFAULT[k]}`);
  prep.push('[[OTROS: {{Otros}}]]');
  o.prep = prep.join('\n\n');
  o.body = body.replace(/\n{3,}/g, '\n\n').replace(/^\s*\n+/, '').replace(/\s+$/, '');
  return true;
}

/* 2026-10-22 · La preparación pasa a ser informativa: apartados fijos y elementos de texto, sin campos */
const PREP_SECS = ['ANESTESIA', 'PROFILAXIS ANTIBIÓTICA', 'POSICIÓN', 'OTROS'];
const PREP_JUNK = Object.values(PREP_DEFAULT).concat(['{{Otros}}']);
function prepFlatten(line) {
  PREP_JUNK.forEach(j => { line = line.split(j).join(''); });
  const only = line.match(/^\s*\{\{([^{}:|]+?)\*?\s*:\s*([^{}]*)\}\}\s*\.?\s*$/);
  if (only) return only[2].split('|').map(x => x.trim()).filter(Boolean);
  const t = line.replace(/\{\{([^{}:|]+?)\*?\s*:\s*([^{}]*)\}\}/g, (m, l, o) => o.split('|').map(x => x.trim()).filter(Boolean).join(' / '))
    .replace(/\{\{[^{}]*\}\}/g, '').replace(/\(\s*\)/g, '').replace(/\s{2,}/g, ' ').trim();
  return t && !/^[.,;:\s]*$/.test(t) ? [t] : [];
}
export function normalizarPreparacion(o) {
  if (!o || o.prep == null || o.prep === '') return false;
  const rows = []; let sec = 'OTROS';
  String(o.prep).replace(/\[\[|\]\]/g, '').split('\n').forEach(raw => {
    let l = raw.replace(/^\s*(?:[-•*·]\s*)?/, '').trim(); if (!l) return;
    const m = l.match(/^([A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ0-9 ,./()+-]{1,40}):\s*(.*)$/);
    if (m) { sec = m[1].trim(); l = m[2]; if (!l) return; }
    prepFlatten(l).forEach(n => rows.push({ s: sec, n }));
  });
  const order = [...PREP_SECS]; rows.forEach(r => { if (!order.includes(r.s)) order.splice(order.length - 1, 0, r.s); });
  const out = order.map(k => `${k}:` + rows.filter(r => r.s === k).map(r => '\n' + r.n).join('')).join('\n\n');
  if (out === o.prep) return false;
  o.prep = out; return true;
}

/* 2026-10-30 · Apendicectomía laparoscópica: mejoras de documentación (hallazgos, AP, cultivo, aspirado, conversión,
 * pérdida hemática, neumoperitoneo, vaciamiento vesical, antibiótico y signos de alarma al alta). Solo si aún no se aplicaron. */
function rep(txt, a, b) { return txt.includes(a) ? txt.replace(a, b) : txt; }
export function mejorarApendicectomia(o) {
  if (!o || o.id !== 'sd-apendicectomia-laparoscopica') return false;
  if (/Anatomía Patológica/.test(o.body || '')) return false;
  let b = String(o.body || '');
  b = rep(b, 'ACCESO: Hasson supraumbilical. Trócares',
    'ACCESO: Hasson supraumbilical. Neumoperitoneo a {{Presión del neumoperitoneo: 12 | 14 | 15}} mmHg. Trócares');
  b = b.replace(/HALLAZGOS:\s*(\{\{Clasificación intraoperatoria AAST:[^}]*\}\})/,
    'HALLAZGOS: Apéndice {{Posición del apéndice: ilíaco | pélvico | retrocecal | subhepático | paracecal}}. $1. Base apendicular {{Base apendicular: sana | inflamada | necrótica o perforada}}.\n' +
    '[[Líquido {{Líquido peritoneal: seroso | turbio | purulento | hemático}} en {{Localización del líquido: fosa ilíaca derecha | pelvis | fosa ilíaca derecha y pelvis | cuatro cuadrantes}}.]]\n' +
    '[[Revisión de íleon terminal (sin divertículo de Meckel), anejos y sigma, sin otros hallazgos.]]');
  b = b.replace('. | Grado V:', ' | Grado V:').replace('peritonitis generalizada.}}', 'peritonitis generalizada}}');
  b = rep(b, 'TÉCNICA:\n- Disección', 'TÉCNICA:\n[[- Toma de muestra de líquido peritoneal para cultivo.]]\n- Disección');
  b = rep(b, '- Extracción de la pieza mediante endobolsa.',
    '- Extracción de la pieza mediante endobolsa y envío a Anatomía Patológica.\n[[- Aspirado de fosa ilíaca derecha y pelvis.]]\n[[- Conversión a laparotomía por {{Motivo de la conversión}}.]]');
  b = rep(b, '\n\nDRENAJES:', '\n\nPÉRDIDA HEMÁTICA ESTIMADA: {{Pérdida hemática (cc)}} cc.\n\nDRENAJES:');
  o.body = b;
  let r = String(o.recs || '');
  r = rep(r, '\n\nCUIDADOS PERSONALES:',
    '\n\n[[TRATAMIENTO ANTIBIÓTICO:\n- {{Antibiótico oral}} durante {{Días de antibiótico}} días.\n\n]]CUIDADOS PERSONALES:');
  r = rep(r, '\n\nSI APARECEN COMPLICACIONES, ACUDA A URGENCIAS.',
    '\n\nACUDA A URGENCIAS SI PRESENTA:\n- Fiebre superior a 38 ºC.\n- Dolor abdominal que aumenta o no cede con la analgesia.\n- Vómitos persistentes o imposibilidad para comer.\n- Enrojecimiento, calor o supuración de las heridas.');
  o.recs = r;
  let m = String(o.mat || '');
  m = m.replace(/\n?Anestésico local \([^\n]*\)[^\n]*/, '');
  if (!/Hem-o-lok/i.test(m)) m = rep(m, 'Endo GIA Ultra 45 mm (carga morada) x1 ?', 'Endo GIA Ultra 45 mm (carga morada) x1 ?\nClips Hem-o-lok ?');
  o.mat = m;
  let pr = String(o.prep || '');
  if (!/Vaciamiento vesical/i.test(pr)) pr = /OTROS:\s*$/.test(pr) ? pr.replace(/OTROS:\s*$/, 'OTROS:\nVaciamiento vesical') : pr + (pr ? '\n\n' : '') + 'OTROS:\nVaciamiento vesical';
  o.prep = pr;
  return true;
}

export function inferirAbordaje(o) {
  if (!o || o.type !== 'quirurgica') return '';
  const t = String(o.title || '').toLowerCase();
  if (/robóti|roboti/.test(t)) return 'robotica';
  if (/laparosc/.test(t)) return 'laparoscopica';
  return 'abierta';
}

export const MIGRATIONS = [
  { id: '2026-10-20-sin-citas', run: items => { for (const o of Object.values(items)) { if (o && o.recs) o.recs = quitarCitas(o.recs); } } },
  { id: '2026-10-20-material-apendicectomia', run: items => { const o = items['sd-apendicectomia-laparoscopica']; if (o && !(o.mat && o.mat.trim())) o.mat = MAT_APENDICECTOMIA; } },
  { id: '2026-10-20-material-dudoso', run: items => { const o = items['sd-apendicectomia-laparoscopica']; if (o && o.mat === MAT_APENDICECTOMIA) o.mat = MAT_APENDICECTOMIA_2; } },
  { id: '2026-10-20-abordaje', run: items => { for (const o of Object.values(items)) { if (o && !o.approach) { const a = inferirAbordaje(o); if (a) o.approach = a; } } } },
  { id: '2026-10-21-desde-intervencion', run: items => { for (const o of Object.values(items)) { if (o && o.recs) o.recs = desdeIntervencion(o.recs); } } },
  { id: '2026-10-22-preparacion-paciente', run: items => { for (const o of Object.values(items)) separarPreparacion(o); } },
  { id: '2026-10-22-preparacion-informativa', run: items => { for (const o of Object.values(items)) normalizarPreparacion(o); } },
  { id: '2026-10-30-apendicectomia-mejoras', run: items => { mejorarApendicectomia(items['sd-apendicectomia-laparoscopica']); } },
  { id: '2026-10-30-revision-quirurgicas', run: items => { aplicarRevision(items, BASE_FP); } },
  { id: '2026-10-30-nuevas-ccp', run: items => { anadirNuevasCCP(items); } }
];
