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
  { id: '2026-10-22-preparacion-paciente', run: items => { for (const o of Object.values(items)) separarPreparacion(o); } }
];
