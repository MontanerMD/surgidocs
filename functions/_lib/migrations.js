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

export const MIGRATIONS = [
  { id: '2026-10-20-sin-citas', run: items => { for (const o of Object.values(items)) { if (o && o.recs) o.recs = quitarCitas(o.recs); } } }
];
