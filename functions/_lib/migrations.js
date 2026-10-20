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

export const MIGRATIONS = [
  { id: '2026-10-20-sin-citas', run: items => { for (const o of Object.values(items)) { if (o && o.recs) o.recs = quitarCitas(o.recs); } } },
  { id: '2026-10-20-material-apendicectomia', run: items => { const o = items['sd-apendicectomia-laparoscopica']; if (o && !(o.mat && o.mat.trim())) o.mat = MAT_APENDICECTOMIA; } }
];
