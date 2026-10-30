/* Nuevas plantillas de coloproctología (2026-10-30). Se añaden a la nube solo si aún no existen. */
import {
  PROF_COLON, PROF_NO, PROF_LIMPIA, ANALG, MED, HERIDAS, DRENAJES_CUIDADOS, ESFUERZO_ABD, ESTRENIMIENTO, HIGIENE_ANAL,
  ALARMA, A_FIEBRE, A_HERIDA, A_HERIDA1, A_ANAL, LAP_ACCESO_NEUMO, REV_LAP, REV_ABIERTA, PERDIDA, CONVERSION
} from './revision-2026-10-30.js';

/* ---------- bloques comunes de cirugía colorrectal ---------- */
const PREP_LAP_PELVIS = (extra = '') => `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%) ± bloqueo de pared (TAP)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Litotomía-Trendelenburg (Lloyd-Davies). Brazos pegados al cuerpo. Topes en hombros. Trendelenburg y lateralización derecha.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Preparación mecánica y antibiótica oral según protocolo` + extra;

const ENOX_ONCO = '- Enoxaparina 40mg 1 pinchazo cada día durante 30 días.';
const ENOX_OPC = '[[- Enoxaparina 40mg 1 pinchazo cada día durante {{Días de enoxaparina: 30 | 7}} días.]]';

const MED_COLON = (enox) => `MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
${enox}
${ANALG}`;

const CUIDADOS_COLON = `CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.`;

const ILEOSTOMIA_CUIDADOS = `CUIDADOS DE LA ILEOSTOMÍA:
- Vacíe la bolsa cuando esté llena hasta un tercio y limpie la piel de alrededor con agua y jabón neutro, secándola bien.
- Ajuste el orificio del disco al tamaño del estoma para proteger la piel.
- Beba al menos 2 litros de líquido al día, preferentemente soluciones de rehidratación oral, y anote la cantidad aproximada que elimina por la bolsa.
- Siga las indicaciones de la enfermera estomaterapeuta.`;

const COLOSTOMIA_CUIDADOS = `CUIDADOS DE LA COLOSTOMÍA:
- Vacíe o cambie la bolsa cuando esté llena hasta un tercio y limpie la piel de alrededor con agua y jabón neutro, secándola bien.
- Ajuste el orificio del disco al tamaño del estoma para proteger la piel.
- Siga las indicaciones de la enfermera estomaterapeuta.`;

const A_COLON = [A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Sangrado por el ano en cantidad abundante.', A_HERIDA];
const A_ESTOMA = 'Estoma de color oscuro o negro, hundido, o ausencia de gases y heces por el estoma durante más de 24 horas.';
const A_ILEO_ALTO = 'Más de 1,5 litros al día por la ileostomía, sed intensa, mareo o disminución de la orina.';

const ACCESO_LAP_COLON = (troc) => `ACCESO: Hasson supraumbilical. ${LAP_ACCESO_NEUMO} ${troc}`;

const ESTADIAJE = '{{Extensión: Sin metástasis hepáticas ni carcinomatosis peritoneal | Metástasis hepáticas … | Carcinomatosis peritoneal (PCI …)}}';

const MAT_LAP_BASE = `TRÓCARES:
Hasson 10-12 mm x1
12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Ligasure Maryland x1
Clipadora Hem-o-lok x1
Protector de herida (Alexis) x1
Endo Close x1
Cánula de aspiración-irrigación x1 ?`;

const proctoPrep = (pos = 'Navaja.', extra = '') => `ANESTESIA:
Raquídea / General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
${pos}

OTROS:` + extra;

const MAT_PROCTO = `INSTRUMENTAL:
Caja de cirugía menor proctológica x1
Separador anal (Parks / Eisenhammer) x1
Anoscopio x1
Estilete x1
Bisturí eléctrico x1`;

/* ---------- plantillas ---------- */
const T = (id, title, approach, tags, x) => ({ id, title, type: 'quirurgica', section: 'CCP', approach, tags: ['coloproctología', ...tags], ...x });

export const NUEVAS_CCP = [

T('ccp-hemicolectomia-izquierda-laparoscopica', 'Hemicolectomía izquierda laparoscópica', 'laparoscopica', ['colon', 'laparoscopia', 'neoplasia'], {
prep: PREP_LAP_PELVIS(),
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en flanco derecho y flanco izquierdo.')}

HALLAZGOS: Tumoración y tatuaje en {{Localización: colon descendente | ángulo esplénico | unión descendente-sigma}}. ${ESTADIAJE}.

TÉCNICA:
- Abordaje medial: apertura del peritoneo a nivel del promontorio, identificando y preservando el uréter y los vasos gonadales izquierdos y los nervios hipogástricos.
- Identificación y sección (Hem-o-lok) de {{Ligadura vascular: la arteria mesentérica inferior en su origen | la arteria cólica izquierda preservando la arteria rectal superior}} y de la vena mesentérica inferior en el borde inferior del páncreas.
- Disección del mesocolon izquierdo sobre la fascia de Toldt hasta el borde inferior del páncreas.
- Movilización completa del ángulo esplénico: apertura de la transcavidad de los epiplones, sección del ligamento esplenocólico y despegamiento parietocólico izquierdo.
- Sección del mesocolon hasta las áreas de futura sección proximal (colon transverso distal) y distal (sigma), con margen de seguridad sobre la tumoración y el tatuaje.
- Sección distal con grapadora lineal endoscópica ({{Grapadora lineal: Signia, 60 mm, morada, x2 | ECHELON 3000, 60 mm, azul, x2}}).
- Extracción de la pieza a través de incisión {{Incisión de extracción: de Pfannenstiel | periumbilical | en fosa ilíaca izquierda}} protegida con anillo retractor y sección proximal comprobando la adecuada vascularización[[ (verde de indocianina)]].
- Envío de la pieza a Anatomía Patológica.
${CONVERSION}

ANASTOMOSIS:
- {{Anastomosis: Anastomosis colo-sigmoidea término-terminal mecánica con grapadora circular (EEA Tri-Staple, 28 mm) tras introducción del yunque con bolsa de tabaco de Prolene 2/0 | Anastomosis colo-cólica latero-lateral isoperistáltica mecánica con grapadora lineal y cierre de la enterotomía con V-Loc}}, sin tensión.
- Comprobación de la integridad de los anillos y test de estanqueidad neumático negativo.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: No | Jackson-Pratt en lecho quirúrgico fijado a piel con seda 1}}.

CIERRE:
- Incisión de extracción: sutura continua de Novosyn 2/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Aponeurosis de fosa ilíaca derecha: Endo Close y Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Signia / ECHELON 3000 60 mm x1
Cargas 60 mm x2
Grapadora circular (EEA Tri-Staple 28 mm) ?
Clips Hem-o-lok x1

SUTURAS:
Prolene 2/0 ?
V-Loc ?
Novosyn 2/0 x1
Monomax 1 x3
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Verde de indocianina ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

${MED_COLON(ENOX_ONCO)}

${CUIDADOS_COLON}

${ALARMA(A_COLON)}`
}),

T('ccp-reseccion-anterior-baja-recto-laparoscopica', 'Resección anterior baja de recto laparoscópica (ETM)', 'laparoscopica', ['recto', 'laparoscopia', 'neoplasia', 'ETM'], {
prep: PREP_LAP_PELVIS('\nMarcaje preoperatorio del estoma'),
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en flanco derecho, flanco izquierdo y suprapúbico.')}

HALLAZGOS: Neoplasia de recto {{Localización: superior (10-15 cm del margen anal) | medio (5-10 cm del margen anal) | inferior (< 5 cm del margen anal)}}[[ tras neoadyuvancia {{Neoadyuvancia: con quimiorradioterapia | con radioterapia de ciclo corto | total (TNT)}}]]. ${ESTADIAJE}.

TÉCNICA:
- Abordaje medial: apertura del peritoneo a nivel del promontorio, identificando y preservando el uréter y los vasos gonadales izquierdos y los nervios hipogástricos.
- Identificación y sección (Hem-o-lok) de la arteria mesentérica inferior en su origen y de la vena mesentérica inferior en el borde inferior del páncreas.
- Disección del mesocolon izquierdo sobre la fascia de Toldt.
[[- Movilización del ángulo esplénico para asegurar una anastomosis sin tensión.]]
- Escisión total del mesorrecto (ETM) en el plano avascular de la fascia propia del mesorrecto, preservando los nervios hipogástricos y los plexos pélvicos, hasta el suelo pélvico.
- Calidad del mesorrecto: {{Calidad del mesorrecto: completo (plano mesorrectal) | casi completo (plano intramesorrectal) | incompleto (plano muscular)}}.
- Lavado rectal con suero fisiológico[[ y povidona yodada]] por debajo del tumor.
- Sección distal del recto con grapadora lineal endoscópica ({{Grapadora distal: Signia, 60 mm, morada, x2 | Signia, 45 mm, morada, x2 | ECHELON 3000, 60 mm, verde, x2}}), con margen distal de {{Margen distal (cm)}} cm.
- Extracción de la pieza a través de incisión de Pfannenstiel protegida con anillo retractor, sección proximal comprobando la adecuada vascularización[[ (verde de indocianina)]] e introducción del yunque con bolsa de tabaco de Prolene 2/0.
- Envío de la pieza a Anatomía Patológica.
${CONVERSION}

ANASTOMOSIS:
- Anastomosis colorrectal {{Tipo de anastomosis: término-terminal | látero-terminal | con reservorio colónico en J}} mecánica con grapadora circular {{Grapadora circular: EEA Tri-Staple, 28 mm | EEA Tri-Staple, 31 mm | ECHELON CIRCULAR, 29 mm | ECHELON CIRCULAR, 31 mm}}, a {{Altura de la anastomosis (cm)}} cm del margen anal, sin tensión.
- Comprobación de la integridad de los anillos y test de estanqueidad neumático negativo.
- {{Estoma: Ileostomía lateral de protección en fosa ilíaca derecha | Sin estoma de protección}}.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: Jackson-Pratt en pelvis fijado a piel con seda 1 | No}}.

CIERRE:
- Pfannenstiel: sutura continua de Novosyn 2/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.
[[- Maduración de la ileostomía con puntos de Novosyn 3/0 y colocación de bolsa.]]`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Signia 60 / 45 mm x1
Cargas moradas x2
Grapadora circular (EEA Tri-Staple / ECHELON CIRCULAR) x1
Clips Hem-o-lok x1

SUTURAS:
Prolene 2/0 x1
Novosyn 2/0 x1
Novosyn 3/0 ?
Monomax 1 x3
Seda 1 x1

DRENAJES:
Jackson-Pratt x1 ?

OTROS:
Verde de indocianina ?
Povidona yodada x1
Bolsa de ileostomía ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

[[${ILEOSTOMIA_CUIDADOS}

]]${MED_COLON(ENOX_ONCO)}

${CUIDADOS_COLON}
- Tras la reconstrucción del tránsito es habitual que las deposiciones sean frecuentes y fraccionadas durante meses; su equipo le indicará cómo manejarlo.

${ALARMA([...A_COLON.slice(0, 4), A_ESTOMA, A_ILEO_ALTO, A_HERIDA])}`
}),

T('ccp-amputacion-abdominoperineal-laparoscopica', 'Amputación abdominoperineal laparoscópica (Miles)', 'laparoscopica', ['recto', 'ano', 'laparoscopia', 'neoplasia', 'colostomía'], {
prep: PREP_LAP_PELVIS('\nMarcaje preoperatorio del estoma'),
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en flanco derecho y suprapúbico.')}

HALLAZGOS: {{Indicación: Neoplasia de recto inferior con afectación del aparato esfinteriano | Carcinoma epidermoide de canal anal persistente o recidivado tras quimiorradioterapia | Neoplasia de recto inferior no candidata a anastomosis}}[[ tras neoadyuvancia]]. ${ESTADIAJE}.

TIEMPO ABDOMINAL:
- Abordaje medial: apertura del peritoneo a nivel del promontorio, identificando y preservando el uréter y los vasos gonadales izquierdos y los nervios hipogástricos.
- Identificación y sección (Hem-o-lok) de la arteria mesentérica inferior en su origen y de la vena mesentérica inferior.
- Disección del mesocolon sigmoide y escisión total del mesorrecto hasta el plano de los elevadores, preservando los plexos pélvicos.
- Sección proximal del colon sigmoide con grapadora lineal endoscópica (Signia, 60 mm, morada, x1).
${CONVERSION}

TIEMPO PERINEAL:
- Cambio a posición {{Posición perineal: de navaja (prono) | de litotomía}}. Cierre del ano con bolsa de tabaco de seda 1.
- Incisión elíptica perianal y disección de las fosas isquiorrectales.
- {{Técnica perineal: Amputación extraelevadora (cilíndrica) con sección de los elevadores en su inserción en la pared pélvica | Amputación convencional con sección de los elevadores próxima al mesorrecto | Amputación interesfinteriana}}, desinsertando el ligamento anococcígeo[[ y resecando el cóccix]].
- Disección anterior cuidadosa respetando {{Estructuras anteriores: la próstata y las vesículas seminales | la pared vaginal posterior}}.
- Extracción de la pieza por el periné y envío a Anatomía Patológica, con calidad del mesorrecto {{Calidad del mesorrecto: completo | casi completo | incompleto}}[[ y perforación intraoperatoria del tumor]].

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: Jackson-Pratt en pelvis exteriorizado por el periné y fijado a piel con seda 1 | Jackson-Pratt en pelvis exteriorizado por fosa ilíaca derecha y fijado a piel con seda 1 | No}}.

CIERRE:
- Periné: {{Cierre perineal: cierre primario por planos (tejido isquiorrectal con Novosyn 0 y piel con puntos de nylon 2/0) | colocación de malla biológica en el defecto del suelo pélvico y cierre por planos | colgajo miocutáneo …}}.
- Aponeurosis supraumbilical y de trócares: Monomax 1.
- Piel abdominal: grapas y apósitos compresivos.

ESTOMA:
- Colostomía terminal en fosa ilíaca izquierda (lugar de marcaje previo), {{Colostomía: transperitoneal | extraperitoneal}}, madurada con puntos de Novosyn 3/0. Colocación de bolsa de colostomía.`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Signia 60 mm x1
Cargas moradas x1
Clips Hem-o-lok x1

SUTURAS:
Seda 1 x2
Novosyn 0 x2
Novosyn 3/0 x1
Nylon 2/0 x1
Monomax 1 x2

DRENAJES:
Jackson-Pratt x1

OTROS:
Separador perineal (Lone Star) ?
Malla biológica ?
Bolsa de colostomía x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}
- Herida perineal: manténgala limpia y seca, lávela tras cada micción con agua y jabón y evite estar sentado directamente sobre ella durante periodos prolongados (puede usar un cojín en forma de anillo).

${COLOSTOMIA_CUIDADOS}

${MED_COLON(ENOX_ONCO)}

${CUIDADOS_COLON}

${ALARMA([A_FIEBRE, 'Dolor abdominal o perineal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', A_ESTOMA, 'Supuración, apertura o sangrado de la herida perineal.', 'Dificultad para orinar o retención de orina.'])}`
}),

T('ccp-colectomia-total-subtotal-laparoscopica', 'Colectomía total / subtotal laparoscópica', 'laparoscopica', ['colon', 'laparoscopia', 'colitis ulcerosa', 'poliposis'], {
prep: PREP_LAP_PELVIS('\nMarcaje preoperatorio del estoma'),
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en fosa ilíaca izquierda, flanco izquierdo y epigastrio.')}

HALLAZGOS: {{Indicación: Colitis ulcerosa refractaria | Colitis aguda grave / megacolon tóxico | Poliposis adenomatosa familiar | Neoplasias sincrónicas de colon | Inercia cólica}}. {{Hallazgos: Sin perforación ni peritonitis | Perforación cólica con peritonitis …}}.

TÉCNICA:
- Movilización del colon derecho con abordaje medial: sección de los vasos ileocólicos y cólicos derechos, preservando el duodeno.
- Sección de los vasos cólicos medios y del mesocolon transverso[[ preservando el epiplón mayor]], con apertura de la transcavidad de los epiplones.
- Movilización del ángulo esplénico y del colon izquierdo con sección de los vasos cólicos izquierdos y sigmoideos {{Ligadura: cerca de la pared cólica (patología benigna) | en su origen (patología neoplásica)}}.
- Sección del íleon terminal con grapadora lineal endoscópica (Signia, 60 mm, morada).
- Sección distal {{Sección distal: en la unión rectosigmoidea (colectomía total) | en el sigma (colectomía subtotal, dejando muñón sigmoideo largo)}} con grapadora lineal endoscópica.
- Extracción de la pieza a través de incisión {{Incisión de extracción: de Pfannenstiel | en el orificio de la ileostomía | periumbilical}} protegida con anillo retractor y envío a Anatomía Patológica.
${CONVERSION}

RECONSTRUCCIÓN:
- {{Reconstrucción: Ileostomía terminal en fosa ilíaca derecha (lugar de marcaje previo), madurada según técnica de Brooke con puntos de Novosyn 3/0. Muñón rectosigmoideo cerrado y fijado a la pared abdominal | Anastomosis ileorrectal término-terminal mecánica con grapadora circular (EEA Tri-Staple, 28 mm), sin tensión, con test de estanqueidad negativo}}.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: Jackson-Pratt en pelvis fijado a piel con seda 1 | No}}.

CIERRE:
- Incisión de extracción: sutura continua de Novosyn 2/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Signia 60 mm x1
Cargas moradas x3
Grapadora circular (EEA Tri-Staple 28 mm) ?
Clips Hem-o-lok x1

SUTURAS:
Novosyn 2/0 x1
Novosyn 3/0 x1
Monomax 1 x2
Prolene 2/0 ?
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Bolsa de ileostomía ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

[[${ILEOSTOMIA_CUIDADOS}

]]${MED_COLON(ENOX_OPC)}

${CUIDADOS_COLON}

${ALARMA([A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', A_ESTOMA, A_ILEO_ALTO, 'Sangrado por el ano en cantidad abundante.', A_HERIDA])}`
}),

T('ccp-proctocolectomia-restauradora-reservorio-ileal', 'Proctocolectomía restauradora con reservorio ileal en J', 'laparoscopica', ['colon', 'recto', 'laparoscopia', 'colitis ulcerosa', 'poliposis', 'reservorio'], {
prep: PREP_LAP_PELVIS('\nMarcaje preoperatorio del estoma'),
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en fosa ilíaca izquierda, flanco izquierdo y suprapúbico.')}

HALLAZGOS: {{Indicación: Colitis ulcerosa | Poliposis adenomatosa familiar}}. {{Tiempo quirúrgico: Proctocolectomía en un tiempo | Segundo tiempo tras colectomía subtotal previa (proctectomía y reservorio)}}.

TÉCNICA:
[[- Colectomía total con sección de los vasos ileocólicos, cólicos derechos, cólicos medios e izquierdos.]]
- Proctectomía en el plano {{Plano de proctectomía: mesorrectal (escisión total del mesorrecto) | perirrectal (próximo a la pared, en patología benigna)}}, preservando los nervios hipogástricos y los plexos pélvicos, hasta el suelo pélvico.
- Sección del recto a nivel de la unión anorrectal con grapadora lineal ({{Grapadora distal: Signia, 45 mm, morada | CONTOUR curva, 40 mm}}), dejando un manguito rectal de menos de 2 cm.
- Extracción de la pieza y envío a Anatomía Patológica.
- Movilización del mesenterio hasta la raíz para asegurar el alcance del reservorio a la pelvis[[, con sección de la arcada ileocólica]].
- Confección de reservorio ileal en J de {{Longitud del reservorio (cm): 15 | 20}} cm con grapadora lineal (2-3 cargas de 80 mm) e introducción del yunque en el vértice con bolsa de tabaco de Prolene 2/0.
${CONVERSION}

ANASTOMOSIS:
- Anastomosis reservorio-anal mecánica con grapadora circular (EEA Tri-Staple, 28 mm), sin tensión y sin torsión del mesenterio.
- Comprobación de la integridad de los anillos y test de estanqueidad neumático negativo.
- {{Estoma: Ileostomía lateral de protección en fosa ilíaca derecha | Sin estoma de protección}}.

${REV_LAP}

${PERDIDA}

DRENAJES: Jackson-Pratt en pelvis, detrás del reservorio, fijado a piel con seda 1.

CIERRE:
- Incisión de extracción: sutura continua de Novosyn 2/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.
[[- Maduración de la ileostomía con puntos de Novosyn 3/0 y colocación de bolsa.]]`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Signia 60 / 45 mm x1
Cargas moradas x2
ECHELON LINEAR 80 mm x1
Cargas azules 80 mm x3
Grapadora circular (EEA Tri-Staple 28 mm) x1
CONTOUR 40 mm ?
Clips Hem-o-lok x1

SUTURAS:
Prolene 2/0 x1
Novosyn 2/0 x1
Novosyn 3/0 x1
Monomax 1 x2
Seda 1 x1

DRENAJES:
Jackson-Pratt x1

OTROS:
Bolsa de ileostomía x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

${ILEOSTOMIA_CUIDADOS}

${MED_COLON(ENOX_OPC)}

${CUIDADOS_COLON}

${ALARMA([A_FIEBRE, 'Dolor abdominal o pélvico que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', A_ESTOMA, A_ILEO_ALTO, 'Salida de pus o sangre abundante por el ano.', A_HERIDA])}`
}),

T('ccp-reseccion-ileocecal-laparoscopica', 'Resección ileocecal laparoscópica (enfermedad de Crohn)', 'laparoscopica', ['íleon', 'colon', 'laparoscopia', 'Crohn'], {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Decúbito supino. Piernas juntas con cincha. Brazo derecho en abducción e izquierdo pegado al cuerpo. Topes en hombros. Trendelenburg y lateralización izquierda.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Optimización nutricional y retirada de corticoides según protocolo`,
body: `${ACCESO_LAP_COLON('Trócares de 12 mm en fosa ilíaca izquierda y de 5 mm en hipogastrio.')}

HALLAZGOS: Enfermedad de Crohn ileocecal con {{Patrón: estenosis fibrótica | fístula enteroentérica | fístula a sigma / vejiga … | plastrón inflamatorio | absceso …}} de unos {{Longitud afecta (cm)}} cm de íleon terminal. [[Otras lesiones: {{Otras lesiones de Crohn}}.]] Revisión de todo el intestino delgado desde el ángulo de Treitz.

TÉCNICA:
- Movilización del ciego y del íleon terminal desde lateral, liberando el plastrón y preservando el uréter y los vasos gonadales derechos y el duodeno.
[[- Desconexión de la fístula a {{Órgano fistulizado}} y cierre del orificio con sutura de Novosyn 3/0.]]
- Exteriorización a través de incisión {{Incisión de extracción: periumbilical | de Pfannenstiel}} protegida con anillo retractor.
- Sección del mesenterio próxima al intestino (sin linfadenectomía) con Ligasure.
- Resección ileocecal con márgenes macroscópicamente sanos (sin necesidad de márgenes amplios) y envío a Anatomía Patológica.
[[- Estricturoplastia de {{Estricturoplastia: Heineke-Mikulicz | Finney}} en {{Localización de la estenosis}}.]]
${CONVERSION}

ANASTOMOSIS:
- {{Anastomosis: Anastomosis ileocólica latero-lateral anisoperistáltica mecánica con grapadora lineal (ECHELON LINEAR, 80 mm, 2 cargas azules) y cierre del orificio con grapadora | Anastomosis ileocólica Kono-S | Anastomosis ileocólica término-terminal manual con sutura continua de PDS 4/0}}.
- {{Estoma: Sin estoma | Ileostomía terminal y fístula mucosa por riesgo elevado de dehiscencia}}.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: No | Jackson-Pratt en fosa ilíaca derecha fijado a piel con seda 1}}.

CIERRE:
- Incisión de extracción: sutura continua de Monomax 1 para aponeurosis.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
ECHELON LINEAR 80 mm x1
Cargas azules 80 mm x2
Clips Hem-o-lok ?

SUTURAS:
Novosyn 3/0 x1
PDS 4/0 ?
Monomax 1 x2
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

${MED_COLON(ENOX_OPC)}
- Su equipo de Enfermedad Inflamatoria Intestinal le indicará el tratamiento de mantenimiento para prevenir la recurrencia.

${CUIDADOS_COLON}
- Evite el tabaco: aumenta de forma importante el riesgo de recurrencia de la enfermedad.

${ALARMA(A_COLON)}`
}),

T('ccp-reconstruccion-transito-tras-hartmann', 'Reconstrucción del tránsito tras Hartmann', 'laparoscopica', ['colon', 'recto', 'laparoscopia', 'colostomía'], {
prep: PREP_LAP_PELVIS(),
body: `ACCESO: {{Acceso: Laparoscópico: Hasson supraumbilical, neumoperitoneo y trócares de 12 mm en fosa ilíaca derecha y de 5 mm en flanco derecho | Laparotomía media infraumbilical}}.

HALLAZGOS: Muñón rectal {{Muñón rectal: largo (por encima del promontorio) | corto (en pelvis)}}, identificado con ayuda de {{Identificación del muñón: los puntos de referencia previos | bujía / sonda introducida por vía anal | rectoscopia intraoperatoria}}. {{Adherencias: Adherencias laxas | Adherencias firmes que requieren adhesiolisis extensa}}.

TÉCNICA:
- Adhesiolisis y liberación del colon descendente de la pared abdominal.
- Desinserción de la colostomía, cierre temporal del cabo con bolsa de tabaco e introducción del yunque con Prolene 2/0.
[[- Movilización del ángulo esplénico para asegurar una anastomosis sin tensión.]]
- Disección y liberación del muñón rectal de las asas, la vejiga[[ y la vagina]] y la pelvis, preservando los uréteres.
[[- Resección del extremo proximal del muñón rectal y nueva sección con grapadora lineal.]]
${CONVERSION}

ANASTOMOSIS:
- Anastomosis colorrectal término-terminal mecánica con grapadora circular {{Grapadora circular: EEA Tri-Staple, 28 mm | EEA Tri-Staple, 31 mm | ECHELON CIRCULAR, 29 mm}}, sin tensión, comprobando la adecuada vascularización[[ (verde de indocianina)]].
- Comprobación de la integridad de los anillos y test de estanqueidad neumático negativo.
- {{Estoma: Sin estoma de protección | Ileostomía lateral de protección en fosa ilíaca derecha}}.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: No | Jackson-Pratt en pelvis fijado a piel con seda 1}}.

CIERRE:
- Orificio de la colostomía: cierre de la aponeurosis con Monomax 1 y cierre de la piel en jareta con Novosyn 3/0.
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `${MAT_LAP_BASE}

GRAPADORAS Y CLIPS:
Grapadora circular (EEA Tri-Staple / ECHELON CIRCULAR) x1
Signia 60 mm ?
Cargas moradas ?

SUTURAS:
Prolene 2/0 x1
Novosyn 3/0 x1
Monomax 1 x2
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Bujías de Hegar / sonda rectal x1
Rectoscopio ?
Verde de indocianina ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

[[${ILEOSTOMIA_CUIDADOS}

]]${MED_COLON(ENOX_OPC)}

${CUIDADOS_COLON}

${ALARMA(A_COLON)}`
}),

T('ccp-estoma-derivacion-laparoscopico', 'Ileostomía / colostomía de derivación laparoscópica', 'laparoscopica', ['estoma', 'ileostomía', 'colostomía', 'laparoscopia'], {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Decúbito supino. Brazos pegados al cuerpo.

OTROS:
Sondaje vesical
Marcaje preoperatorio del estoma`,
body: `ACCESO: Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 5 mm según necesidad.

HALLAZGOS: {{Indicación: Neoplasia de recto obstructiva | Fístula rectovaginal / perianal compleja | Enfermedad perianal grave | Incontinencia fecal refractaria | Lesión perineal …}}. Exploración de la cavidad abdominal {{Hallazgos: sin otros hallazgos | con …}}.

TÉCNICA:
- Identificación del asa a exteriorizar: {{Asa: íleon terminal a unos 20-30 cm de la válvula ileocecal | colon transverso derecho | colon sigmoide}}, comprobando su orientación (cabo proximal / distal).
- Incisión circular en el lugar de marcaje, exéresis de un disco de piel y tejido celular subcutáneo, apertura cruciforme de la aponeurosis y disección del músculo recto.
- Exteriorización del asa sin tensión ni torsión[[ sobre varilla de soporte]].
${CONVERSION}

${REV_LAP}

ESTOMA:
- Apertura del asa y maduración del estoma {{Tipo de estoma: en asa (ileostomía lateral) con eversión del cabo proximal (técnica de Brooke) | en asa (colostomía lateral) | terminal}} con puntos de Novosyn 3/0. Colocación de bolsa.

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Bisturí eléctrico x1

SUTURAS:
Novosyn 3/0 x1
Monomax 1 x1

OTROS:
Varilla de soporte del estoma ?
Bolsa de ostomía x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

[[${ILEOSTOMIA_CUIDADOS}

]][[${COLOSTOMIA_CUIDADOS}

]]${MED}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}

${ALARMA([A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', A_ESTOMA, A_ILEO_ALTO, A_HERIDA])}`
}),

T('ccp-rectopexia-ventral-laparoscopica', 'Rectopexia ventral laparoscópica con malla', 'laparoscopica', ['recto', 'prolapso', 'suelo pélvico', 'laparoscopia', 'malla'], {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Litotomía-Trendelenburg (Lloyd-Davies). Brazos pegados al cuerpo. Topes en hombros.

OTROS:
Sondaje vesical
Enema de limpieza preoperatorio
Medias de compresión neumática intermitente`,
body: `ACCESO: Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 12 mm en fosa ilíaca derecha y de 5 mm en flanco derecho[[ y fosa ilíaca izquierda]].

HALLAZGOS: {{Indicación: Prolapso rectal completo (externo) | Intususcepción rectoanal de alto grado | Rectocele con intususcepción | Enterocele}}. [[Fondo de saco de Douglas profundo con enterocele.]]

TÉCNICA:
- Suspensión del útero a la pared abdominal[[ (histeropexia temporal con punto transparietal)]] y del sigma hacia la izquierda.
- Apertura del peritoneo sobre el promontorio, a la derecha del mesorrecto, identificando y preservando el uréter derecho y los nervios hipogástricos.
- Extensión de la incisión peritoneal en forma de «J invertida» por el borde derecho del recto hasta el fondo de saco de Douglas.
- Disección del tabique rectovaginal / rectovesical hasta el periné, sin movilización posterior ni lateral del recto.
- Colocación de malla de {{Malla: polipropileno | biológica | PVDF}} de 3 x {{Longitud de la malla (cm): 15 | 17 | 20}} cm sobre la cara anterior del recto distal, fijada con {{Fijación distal: puntos sueltos de PDS 2/0 | puntos de Ethibond 2/0}} y al promontorio sacro con {{Fijación al promontorio: tackers | puntos de Ethibond 0}}, sin tensión excesiva.
- Cierre del peritoneo sobre la malla con sutura continua barbada (V-Loc), cubriéndola por completo[[ y elevando el fondo de saco de Douglas]].
${CONVERSION}

${REV_LAP}

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Aponeurosis de fosa ilíaca derecha: Endo Close y Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Gancho / tijera monopolar x1
Portaagujas laparoscópico x1
Fijador de tackers ?
Endo Close x1

SUTURAS:
PDS 2/0 / Ethibond 2/0 x2
Ethibond 0 ?
V-Loc x1
Monomax 1 x2

OTROS:
Malla de 3 x 15-20 cm x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

${MED}

${ESTRENIMIENTO}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Evite los esfuerzos defecatorios prolongados. Siga las indicaciones de fisioterapia del suelo pélvico si se le indican.

${ALARMA([A_FIEBRE, 'Dolor abdominal o pélvico que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Sangrado por el ano o la vagina en cantidad abundante.', A_HERIDA])}`
}),

/* ----------------------------- proctología ----------------------------- */

T('ccp-fistulotomia-fistula-perianal', 'Fistulotomía (fístula perianal)', 'abierta', ['proctología', 'fístula'], {
prep: proctoPrep(),
body: `HALLAZGOS: Fístula perianal {{Tipo de fístula (Parks): interesfinteriana | transesfinteriana baja (< 1/3 del esfínter externo) | submucosa | subcutánea}}, con orificio externo a {{Orificio externo (horas, distancia)}} y orificio interno a {{Orificio interno (horas)}} en la línea pectínea. [[Trayectos secundarios: {{Trayectos secundarios}}.]]

TÉCNICA:
- Exploración bajo anestesia con tacto rectal y anoscopia.
- Canalización del trayecto con estilete desde el orificio externo hasta el interno[[, ayudada con instilación de agua oxigenada]].
- Fistulotomía sobre el estilete, seccionando la porción de esfínter incluida ({{Esfínter seccionado: esfínter interno | menos de 1/3 del esfínter externo | sin esfínter (submucosa/subcutánea)}}).
- Legrado del trayecto[[ y toma de biopsia para Anatomía Patológica]].
- {{Bordes: Marsupialización de los bordes con puntos de Vicryl Rapid 3/0 | Herida abierta sin marsupialización}}.

${REV_ABIERTA}

CIERRE:
- Herida abierta. Mechado con gasa bañada en clorhexidina. Apósito compresivo.`,
mat: `${MAT_PROCTO}

SUTURAS:
Vicryl Rapid 3/0 ?

OTROS:
Agua oxigenada x1
Cucharilla de legrado x1
Gasas x1`,
recs: `CUIDADOS DE LA HERIDA:
- Solicite cita con enfermería en su Centro de Salud para realizarse curas mechadas con una gasa bañada en clorhexidina (Cristalmina) durante los primeros días.
- Mantenga la herida limpia y seca. Puede ducharse, pero evite bañarse hasta su cicatrización completa.

${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

${ALARMA(A_ANAL)}`
}),

T('ccp-colocacion-sedal-fistula-perianal', 'Colocación de sedal (fístula perianal)', 'abierta', ['proctología', 'fístula', 'sedal'], {
prep: proctoPrep(),
body: `HALLAZGOS: Fístula perianal {{Tipo de fístula (Parks): transesfinteriana alta | transesfinteriana media | supraesfinteriana | extraesfinteriana | compleja (enfermedad de Crohn)}}, con orificio externo a {{Orificio externo (horas, distancia)}} y orificio interno a {{Orificio interno (horas)}}. [[Absceso asociado drenado en el mismo acto.]]

TÉCNICA:
- Exploración bajo anestesia con tacto rectal y anoscopia.
- Canalización del trayecto con estilete desde el orificio externo hasta el interno[[, ayudada con instilación de agua oxigenada]].
[[- Legrado del trayecto y apertura de la porción subcutánea.]]
- Colocación de sedal {{Sedal: laxo (drenaje) de vessel loop | laxo de seda 1 | cortante}} a través del trayecto, anudado sin tensión.
[[- Drenaje de absceso asociado y colocación de sedal en trayecto secundario.]]

${REV_ABIERTA}

CIERRE:
- Apósito.`,
mat: `${MAT_PROCTO}

OTROS:
Vessel loop / seda 1 x1
Agua oxigenada x1
Gasas x1`,
recs: `CUIDADOS DE LA HERIDA:
- El hilo (sedal) debe permanecer colocado hasta que su cirujano decida retirarlo o cambiar de técnica. No tire de él.
- Es normal una pequeña secreción por el orificio de la fístula. Mantenga la zona limpia y seca y puede proteger la ropa con una gasa.

${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

${ALARMA([A_FIEBRE, 'Dolor intenso, hinchazón o enrojecimiento progresivo de la zona.', 'Salida accidental del sedal.', 'Sangrado abundante.'])}`
}),

T('ccp-colgajo-avance-endorrectal', 'Colgajo de avance endorrectal (fístula perianal)', 'abierta', ['proctología', 'fístula', 'colgajo'], {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
Metronidazol 500 mg iv ± Cefazolina 2 g iv según protocolo

POSICIÓN:
{{Posición según la localización del orificio interno}}

OTROS:
Enema de limpieza preoperatorio`.replace('{{Posición según la localización del orificio interno}}', 'Navaja (orificio interno anterior) / Litotomía (orificio interno posterior)'),
body: `HALLAZGOS: Fístula perianal {{Tipo de fístula (Parks): transesfinteriana alta | transesfinteriana media | supraesfinteriana | rectovaginal baja}}, con orificio externo a {{Orificio externo (horas, distancia)}} y orificio interno a {{Orificio interno (horas)}}. [[Sedal previo retirado.]]

TÉCNICA:
- Exploración bajo anestesia y canalización del trayecto con estilete.
- Legrado del trayecto fistuloso desde el orificio externo, ampliando el orificio externo para el drenaje.
- Infiltración submucosa con suero adrenalizado.
- Tallado de un colgajo {{Colgajo: mucoso | mucoso-submucoso | de espesor completo (con fibras de esfínter interno)}} de base amplia (base al menos el doble que el vértice), desde la línea pectínea hacia proximal, con buena vascularización.
- Exéresis del orificio interno y cierre del defecto del esfínter interno con puntos sueltos de Vicryl 2/0.
- Avance del colgajo sin tensión sobre el orificio interno, resecando su extremo distal con el orificio, y fijación con puntos sueltos de Vicryl 3/0.

${REV_ABIERTA}

CIERRE:
- Orificio externo abierto para drenaje. Apósito.`,
mat: `${MAT_PROCTO}

SUTURAS:
Vicryl 2/0 x1
Vicryl 3/0 x1

OTROS:
Suero adrenalizado x1
Cucharilla de legrado x1
Gasas x1`,
recs: `CUIDADOS DE LA HERIDA:
- Es normal una pequeña secreción por el orificio externo. Mantenga la zona limpia y seca y puede proteger la ropa con una gasa.

${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

CUIDADOS PERSONALES:
- Evite esfuerzos defecatorios y periodos prolongados sentado durante las primeras semanas.

${ALARMA(A_ANAL)}`
}),

T('ccp-lift-fistula-perianal', 'LIFT (ligadura interesfinteriana del trayecto fistuloso)', 'abierta', ['proctología', 'fístula', 'LIFT'], {
prep: proctoPrep('Navaja / Litotomía según la localización de la fístula.'),
body: `HALLAZGOS: Fístula perianal transesfinteriana {{Altura: media | alta}}, con orificio externo a {{Orificio externo (horas, distancia)}} y orificio interno a {{Orificio interno (horas)}}, de trayecto único y maduro. [[Sedal previo retirado.]]

TÉCNICA:
- Exploración bajo anestesia y canalización del trayecto con estilete.
- Incisión curvilínea de unos 2-3 cm en el surco interesfinteriano sobre el trayecto.
- Disección del espacio interesfinteriano hasta identificar y aislar el trayecto fistuloso.
- Doble ligadura del trayecto con Vicryl 3/0 próxima al esfínter interno y al esfínter externo, y sección entre ambas.
- Comprobación con instilación de suero por el orificio externo de la ausencia de fuga.
- Legrado de la porción externa del trayecto[[ y exéresis del orificio externo]].

${REV_ABIERTA}

CIERRE:
- Incisión interesfinteriana: puntos sueltos de Vicryl Rapid 3/0.
- Orificio externo abierto para drenaje. Apósito.`,
mat: `${MAT_PROCTO}

SUTURAS:
Vicryl 3/0 x1
Vicryl Rapid 3/0 x1

OTROS:
Cucharilla de legrado x1
Gasas x1`,
recs: `CUIDADOS DE LA HERIDA:
- Es normal una pequeña secreción por el orificio externo durante unas semanas. Mantenga la zona limpia y seca y puede proteger la ropa con una gasa.

${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

${ALARMA(A_ANAL)}`
}),

T('ccp-desarterializacion-hemorroidal-thd', 'Desarterialización hemorroidal transanal (THD) con mucopexia', 'abierta', ['proctología', 'hemorroides', 'THD'], {
prep: proctoPrep('Litotomía.'),
body: `HALLAZGOS: Hemorroides de grado {{Grado: II | III | IV}} con paquetes {{Paquetes*: lateral izquierdo | anterolateral derecho | posterolateral derecho}}.

TÉCNICA:
- Introducción del anoscopio con sonda Doppler (THD).
- Identificación mediante Doppler de las ramas de la arteria rectal superior a unos 6 cm del margen anal y desarterialización de {{Número de arterias ligadas}} ramas con puntos en «Z» de Vicryl 2/0 (aguja 5/8).
- Mucopexia de los paquetes prolapsados con sutura continua de Vicryl 2/0 desde la ligadura hasta unos 5 mm por encima de la línea pectínea, en {{Mucopexias*: lateral izquierdo | anterolateral derecho | posterolateral derecho}}.
- Anudado de las mucopexias comprobando la reducción del prolapso.
[[- Exéresis de pliegue cutáneo / hemorroide externa en {{Localización del pliegue}}.]]

${REV_ABIERTA}

CIERRE:
- Sin taponamiento. Apósito.`,
mat: `INSTRUMENTAL:
Anoscopio Doppler THD (kit) x1
Sonda Doppler / ProctoStation x1
Portaagujas largo x1
Bajanudos x1

SUTURAS:
Vicryl 2/0 (aguja 5/8) x3

OTROS:
Gel lubricante x1`,
recs: `${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

CUIDADOS PERSONALES:
- Es frecuente notar sensación de peso o ganas de defecar durante los primeros días, así como un pequeño sangrado con las deposiciones.

${ALARMA(A_ANAL)}`
}),

T('ccp-exeresis-condilomas-perianales', 'Exéresis de condilomas perianales', 'abierta', ['proctología', 'condilomas', 'VPH'], {
prep: proctoPrep('Litotomía / Navaja.'),
body: `HALLAZGOS: Condilomas acuminados {{Localización: perianales | perianales y endoanales | perianales, endoanales y genitales}}, {{Extensión: escasos y aislados | múltiples | confluentes / extensos}}.[[ Lesión sospechosa de displasia en {{Localización de la lesión sospechosa}}.]]

TÉCNICA:
- Exploración bajo anestesia con anoscopia[[ y aplicación de ácido acético al 5%]].
- Infiltración subcutánea con suero adrenalizado para elevar las lesiones.
- Exéresis tangencial de los condilomas con tijera y {{Técnica: electrofulguración de la base | fulguración con bisturí eléctrico de las lesiones pequeñas}}, preservando puentes de piel sana entre las lesiones.
- Remisión de muestras a Anatomía Patológica[[ (lesiones sospechosas por separado)]].
- Hemostasia.

${REV_ABIERTA}

CIERRE:
- Heridas abiertas. Apósito con vaselina.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor proctológica x1
Anoscopio x1
Bisturí eléctrico x1
Aspirador de humos x1

OTROS:
Ácido acético 5% ?
Suero adrenalizado x1
Bote de Anatomía Patológica x1`,
recs: `CUIDADOS DE LAS HERIDAS:
- Lave la zona con agua tibia y jabón neutro tras cada deposición y séquela sin frotar.
- Aplique vaselina o la crema que se le indique sobre las heridas hasta su cicatrización.

${MED}

${HIGIENE_ANAL}

PREVENCIÓN:
- Los condilomas están causados por el virus del papiloma humano (VPH) y pueden reaparecer. Utilice preservativo y consulte sobre la vacunación frente al VPH.

${ALARMA(A_ANAL)}`
}),

T('ccp-sinus-pilonidal-colgajo', 'Sinus pilonidal: exéresis y colgajo (Limberg / Karydakis)', 'abierta', ['sinus pilonidal', 'colgajo'], {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Navaja. Separación de glúteos con esparadrapo.

OTROS:
Rasurado de la zona con maquinilla eléctrica`,
body: `HALLAZGOS: Sinus pilonidal sacrocoxígeo {{Tipo: primario | recidivado}} con {{Orificios (n.º)}} orificios en línea media[[ y orificio lateral]].

TÉCNICA:
- Tutorización de los trayectos con estilete[[ y tinción con azul de metileno]].
- {{Técnica: Exéresis romboidal del tejido afecto hasta la fascia presacra y cobertura con colgajo romboidal de transposición fasciocutáneo de Limberg desde el glúteo | Exéresis elíptica asimétrica lateralizada (Karydakis), con avance del colgajo medial fijado a la fascia presacra, dejando la cicatriz fuera de la línea media | Exéresis elíptica y colgajo de avance de Bascom (cleft lift) aplanando el surco interglúteo}}.
- Remisión de la pieza a Anatomía Patológica.
- Revisión de la hemostasia.

${REV_ABIERTA}

DRENAJES: {{Drenajes: Drenaje de Redón bajo el colgajo fijado a piel con seda 1 | No}}.

CIERRE:
- Tejido celular subcutáneo: puntos sueltos de Vicryl 2/0, sin espacio muerto.
- Piel: puntos sueltos de nylon 3/0 / grapas.
- Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Estilete x1
Bisturí eléctrico x1

SUTURAS:
Vicryl 2/0 x2
Nylon 3/0 x1
Seda 1 ?

DRENAJES:
Redón ?

OTROS:
Azul de metileno ?
Grapadora de piel ?`,
recs: `${HERIDAS(1, '2 semanas', 'los puntos')}
- Mantenga la zona y los bordes de la herida libres de pelo (depilación periódica).

[[${DRENAJES_CUIDADOS}

]]${MED}

CUIDADOS PERSONALES:
- Evite permanecer sentado durante periodos prolongados durante las primeras 2-3 semanas y los esfuerzos intensos durante el 1º mes.

${ALARMA([A_FIEBRE, 'Hinchazón, enrojecimiento o supuración de la herida.', 'Apertura de la herida.', 'Sangrado abundante.'])}`
}),

T('ccp-delorme-prolapso-rectal', 'Prolapso rectal: técnica de Delorme', 'abierta', ['recto', 'prolapso', 'suelo pélvico'], {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
Metronidazol 500 mg iv ± Cefazolina 2 g iv según protocolo

POSICIÓN:
Navaja / Litotomía.

OTROS:
Enema de limpieza preoperatorio`,
body: `HALLAZGOS: Prolapso rectal completo de {{Longitud del prolapso (cm)}} cm[[ con mucosa ulcerada]].

TÉCNICA:
- Exteriorización del prolapso mediante tracción con pinzas de Babcock.
- Infiltración submucosa con suero adrenalizado.
- Incisión circunferencial de la mucosa 1-1,5 cm por encima de la línea pectínea.
- Disección y exéresis del cilindro mucoso del prolapso en el plano submucoso hasta su vértice.
- Plicatura de la capa muscular en acordeón con {{Puntos de plicatura (n.º): 8 | 10 | 12}} puntos longitudinales de Vicryl 2/0.
- Anastomosis mucosa-mucosa con puntos sueltos de Vicryl 3/0 y reducción del prolapso.
- Remisión de la mucosa a Anatomía Patológica.

${REV_ABIERTA}

CIERRE:
- Apósito.`,
mat: `${MAT_PROCTO}

INSTRUMENTAL:
Pinzas de Babcock x4

SUTURAS:
Vicryl 2/0 x3
Vicryl 3/0 x2

OTROS:
Suero adrenalizado x1`,
recs: `${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

CUIDADOS PERSONALES:
- Evite los esfuerzos defecatorios prolongados y los esfuerzos físicos intensos durante el 1º mes.

${ALARMA([...A_ANAL, 'Reaparición del prolapso.'])}`
}),

T('ccp-altemeier-prolapso-rectal', 'Prolapso rectal: rectosigmoidectomía perineal (Altemeier)', 'abierta', ['recto', 'prolapso', 'suelo pélvico'], {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Litotomía / Navaja.

OTROS:
Sondaje vesical
Enema de limpieza preoperatorio`,
body: `HALLAZGOS: Prolapso rectal completo de {{Longitud del prolapso (cm)}} cm[[ incarcerado / con signos de isquemia]].

TÉCNICA:
- Exteriorización del prolapso mediante tracción con pinzas de Babcock.
- Incisión circunferencial de espesor completo de la pared rectal 1-2 cm por encima de la línea pectínea.
- Apertura del fondo de saco peritoneal anterior y exteriorización del recto y del sigma redundante.
- Sellado-sección del mesorrecto y del mesosigma (Ligasure) hasta que no se puede exteriorizar más intestino sin tensión.
[[- Levatorplastia anterior con puntos de Prolene 0.]]
- Sección del colon y {{Anastomosis: anastomosis coloanal manual con puntos sueltos de Vicryl 3/0 | anastomosis coloanal mecánica con grapadora circular (EEA Tri-Staple, 28 mm)}}.
- Remisión de la pieza a Anatomía Patológica.

${REV_ABIERTA}

${PERDIDA}

CIERRE:
- Apósito.`,
mat: `${MAT_PROCTO}

INSTRUMENTAL:
Pinzas de Babcock x4
Ligasure x1

GRAPADORAS Y CLIPS:
Grapadora circular (EEA Tri-Staple 28 mm) ?

SUTURAS:
Vicryl 3/0 x3
Prolene 0 ?
Prolene 2/0 ?`,
recs: `${ESTRENIMIENTO}

${MED_COLON(ENOX_OPC)}

${HIGIENE_ANAL}

CUIDADOS PERSONALES:
- Evite los esfuerzos defecatorios prolongados y los esfuerzos físicos intensos durante el 1º mes.
- Es habitual que las deposiciones sean más frecuentes durante las primeras semanas.

${ALARMA([A_FIEBRE, 'Dolor abdominal o anal intenso que no cede con la analgesia.', 'Sangrado abundante por el ano.', 'Vómitos o distensión abdominal.', 'Imposibilidad para orinar.'])}`
}),

T('ccp-reseccion-transanal-tamis', 'Resección transanal de lesión rectal (TAMIS)', 'laparoscopica', ['recto', 'TAMIS', 'transanal', 'pólipo'], {
prep: `ANESTESIA:
General

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
{{Posición según la localización de la lesión}}

OTROS:
Enema de limpieza preoperatorio
Sondaje vesical`.replace('{{Posición según la localización de la lesión}}', 'Litotomía (lesión posterior) / Navaja (lesión anterior)'),
body: `ACCESO: Plataforma transanal (GelPOINT Path) con neumorrecto a {{Presión del neumorrecto (mmHg): 12 | 15}} mmHg.

HALLAZGOS: Lesión {{Lesión: adenoma velloso | lesión con sospecha de carcinoma precoz (T1) | lesión tras respuesta a neoadyuvancia | tumor neuroendocrino}} de {{Tamaño (cm)}} cm en la cara {{Cara: anterior | posterior | lateral derecha | lateral izquierda}} del recto, a {{Distancia al margen anal (cm)}} cm del margen anal.

TÉCNICA:
- Marcaje circunferencial con electrocauterio con margen de 1 cm alrededor de la lesión.
- Resección {{Resección: de espesor completo hasta la grasa mesorrectal | submucosa}} con electrocauterio[[ y sellador de vasos]].
- Extensión de la pieza sobre corcho, orientación y remisión a Anatomía Patológica.
- Cierre del defecto {{Cierre del defecto: con sutura continua barbada (V-Loc) transversal | defecto abierto}}.
- Comprobación de la permeabilidad de la luz rectal.

REVISIÓN: Hemostasia satisfactoria. Recuento correcto de material quirúrgico, confirmado por enfermería.

CIERRE:
- Retirada de la plataforma transanal.`,
mat: `INSTRUMENTAL:
Plataforma transanal (GelPOINT Path) x1
Óptica de 30º (10 mm) x1
Pinzas de agarre laparoscópicas x2
Gancho / espátula monopolar x1
Portaagujas laparoscópico x1
Insuflador de CO2 (AirSeal) ?

SUTURAS:
V-Loc x1

OTROS:
Corcho y alfileres para la pieza x1`,
recs: `${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

CUIDADOS PERSONALES:
- Es habitual un pequeño sangrado con las deposiciones durante los primeros días.

${ALARMA([A_FIEBRE, 'Sangrado abundante o con coágulos por el ano.', 'Dolor abdominal o pélvico intenso.', 'Imposibilidad para orinar.'])}`
})

];

export function anadirNuevasCCP(items) {
  let n = 0; const now = new Date().toISOString();
  for (const t of NUEVAS_CCP) {
    if (items[t.id]) continue;
    items[t.id] = { ...t, fav: false, uses: 0, createdAt: now, updatedAt: now };
    n++;
  }
  return n;
}
