/* Revisión 2026-10-30 de las plantillas quirúrgicas (estructura tipo «Apendicectomía laparoscópica»).
 * Cada entrada sustituye preparación, protocolo, material y recomendaciones de la plantilla.
 * Solo se aplica si la plantilla sigue tal y como estaba antes de la revisión (huella BASE_FP),
 * para no pisar cambios hechos después desde la app. */

/* ---------- bloques comunes ---------- */
export const PROF_LIMPIA = 'Cefazolina 2 g iv (3 g si peso > 120 kg) 30-60 min antes de la incisión. Alergia a betalactámicos: Clindamicina 900 mg iv';
export const PROF_COLON = 'Cefuroxima 1,5 g + Metronidazol 15 mg/kg\nCefuroxima 1,5 g + Metronidazol 15 mg/kg + Gentamicina 5 mg/kg\nCefuroxima 1,5 g + Gentamicina 5 mg/kg';
export const PROF_NO = 'No indicada de rutina';

export const ANALG = '- Si tiene dolor, tome paracetamol 650mg 1 comprimido cada 8h (desayuno, comida y cena). Si es insuficiente, altérnelo con metamizol 575mg (Nolotil) 1 comprimido cada 8h (almuerzo y merienda).';
export const MED = 'MEDICACIÓN:\n- Puede continuar con su medicación domiciliaria habitual.\n' + ANALG;

export const HERIDAS = (n, plazo, que) => n === 1
  ? `CUIDADOS DE LA HERIDA:
- Mantenga la herida limpia y seca. Puede ducharse diariamente y lavarla con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre la misma. Puede dejarla descubierta o taparla con un apósito si mancha la ropa o molesta al roce.` + (plazo ? `\n- Solicite cita con enfermería de su Centro de Salud en ${plazo} (desde la intervención) para valorar la retirada de ${que}.` : '')
  : `CUIDADOS DE LAS HERIDAS:
- Mantenga las heridas limpias y secas. Puede ducharse diariamente y lavarlas con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre las mismas. Puede dejarlas descubiertas o taparlas con apósitos si manchan la ropa o molestan al roce.` + (plazo ? `\n- Solicite cita con enfermería de su Centro de Salud en ${plazo} (desde la intervención) para valorar la retirada de ${que}.` : '');

export const DRENAJES_CUIDADOS = `CUIDADOS DE LOS DRENAJES:
- Anote o marque diariamente el nivel de los drenajes.
- En caso de pérdida del vacío, llenado, fuga o caída de los drenajes, acuda a Urgencias.
- Con enfermería en menos de 1 semana para valorar la retirada de los drenajes.`;

export const ESFUERZO_ABD = '- Evite esfuerzos físicos intensos que comprometan la región abdominal (coger peso o subir escaleras, por ejemplo) durante el 1º mes postoperatorio.';
export const ESTRENIMIENTO = `EVITE EL ESTREÑIMIENTO:
- Dieta rica en fibra e hidratación abundante (>2 litros/día).
- Plantago ovata (Plantaben): 1 sobre con 2 vasos de agua diariamente.
- Macrogol (Movicol): 1 sobre cada 12h o 24h durante los primeros días.`;
export const HIGIENE_ANAL = `MEDIDAS HIGIÉNICAS:
- Mantenga una buena higiene íntima. Tras cada deposición lávese con agua y jabón y seque la zona suavemente sin arrastrar.
- Evite el papel higiénico y las toallitas húmedas.
- Realice baños de asiento con agua tibia durante 5-10 minutos, sin añadir ninguna sustancia, hasta 2 veces al día y tras cada deposición.`;

export const ALARMA = (items) => 'ACUDA A URGENCIAS SI PRESENTA:\n' + items.map(x => '- ' + x).join('\n');
export const A_FIEBRE = 'Fiebre superior a 38 ºC.';
export const A_HERIDA = 'Enrojecimiento, calor, supuración o sangrado de las heridas.';
export const A_HERIDA1 = 'Enrojecimiento, calor, supuración o sangrado de la herida.';
export const A_ABD = ['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o imposibilidad para comer.', A_HERIDA];
export const A_ANAL = [A_FIEBRE, 'Sangrado abundante o con coágulos.', 'Dolor intenso que no cede con la analgesia.', 'Imposibilidad para orinar.'];

export const LAP_ACCESO_NEUMO = 'Neumoperitoneo a {{Presión del neumoperitoneo: 12 | 14 | 15}} mmHg.';
export const REV_LAP = 'REVISIÓN: Hemostasia satisfactoria. Retirada de trócares bajo visión directa, sin sangrado en los orificios. Recuento correcto de material quirúrgico, confirmado por enfermería.';
export const REV_ABIERTA = 'REVISIÓN: Hemostasia satisfactoria. Recuento correcto de material quirúrgico, confirmado por enfermería.';
export const PERDIDA = 'PÉRDIDA HEMÁTICA ESTIMADA: {{Pérdida hemática (cc)}} cc.';
export const CONVERSION = '[[- Conversión a laparotomía por {{Motivo de la conversión}}.]]';

/* ---------- plantillas ---------- */
export const REVISION = {

/* ============================ CCP ============================ */

'sd-cierre-de-ileostomia': {
prep: `ANESTESIA:
General + Local (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Decúbito supino. Piernas juntas. Brazos en abducción.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente`,
body: `ACCESO: Incisión {{Incisión: periestomal elíptica | periestomal circular}} alrededor de la ileostomía.

HALLAZGOS: Ileostomía en asa en fosa ilíaca derecha. {{Adherencias: Sin adherencias significativas | Adherencias laxas | Adherencias firmes}} del asa al peritoneo parietal.

TÉCNICA:
- Disección del tejido celular subcutáneo y del saco peritoneal hasta alcanzar la aponeurosis.
- Desinserción del asa intestinal ostomizada y liberación de sus adherencias a peritoneo parietal para su exteriorización.
- Comprobación de la viabilidad y del calibre de ambos cabos.
- Disección y sección entre ligaduras (Novosyn 2/0) del mesenterio adyacente.

ANASTOMOSIS:
- {{Anastomosis: Confección de anastomosis aniso-peristáltica latero-lateral mecánica con grapadora lineal (ECHELON LINEAR, 80mm, 2 cargas azules). Descarga de tensión en final de línea de grapas con 1 punto de Novosyn 2/0. | Confección de anastomosis término-terminal manual en un plano con sutura continua de PDS 4/0. | Resección del segmento ostomizado y anastomosis latero-lateral mecánica con grapadora lineal (ECHELON LINEAR, 80mm, 2 cargas azules).}}
- Comprobación de la permeabilidad y la estanqueidad de la anastomosis.
- Reintroducción del asa anastomosada en cavidad abdominal.
[[- Envío del segmento resecado a Anatomía Patológica.]]

${REV_ABIERTA}

CIERRE:
- Aponeurosis: transversalmente con sutura continua de Monomax 1.
- Tejido celular subcutáneo: en jareta con suturas continuas de Novosyn 3/0 y Vicryl Rapid 2/0.
- Mechado con gasa bañada en clorhexidina y apósito no compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía abdominal x1
Bisturí eléctrico x1

GRAPADORAS Y CLIPS:
ECHELON LINEAR 80 mm x1
Cargas azules 80 mm x2

SUTURAS:
Novosyn 2/0 x1
Monomax 1 x1
Novosyn 3/0 x1
Vicryl Rapid 2/0 x1
PDS 4/0 ?

OTROS:
Gasas x1
Apósito no compresivo x1`,
recs: `CUIDADOS DE LA HERIDA:
- Mantenga la herida limpia y seca. Puede ducharse diariamente y lavarla con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre la misma y cúbrala con una gasa y un apósito durante las primeras 2 semanas. Posteriormente, puede dejarla descubierta o taparla con un apósito si mancha la ropa o molesta al roce.

${MED}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.
- Es habitual que durante las primeras semanas las deposiciones sean frecuentes y blandas, y que se normalicen progresivamente.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Más de 8-10 deposiciones líquidas al día o signos de deshidratación.', 'Enrojecimiento, calor o supuración de la herida.'])}`
},

'sd-hemicolectomia-derecha-abierta': {
prep: `ANESTESIA:
General ± catéter epidural / bloqueo de pared (TAP)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Decúbito supino. Brazos en abducción. Piernas juntas / separadas con perneras.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Preparación mecánica y antibiótica oral según protocolo`,
body: `ACCESO: Laparotomía media {{Laparotomía: suprainfraumbilical | supraumbilical | transversa derecha}}.

HALLAZGOS: Tumoración y tatuaje en {{Localización: ciego | colon ascendente | ángulo hepático | colon transverso}}. {{Extensión: Sin metástasis hepáticas ni carcinomatosis peritoneal | Metástasis hepáticas … | Carcinomatosis peritoneal (PCI …)}}.

TÉCNICA:
- Apertura del peritoneo parietocólico y fascia de Toldt derechas, movilizando ciego y colon ascendente.
- Disección de lateral a medial sobre el retroperitoneo hasta alcanzar la fascia de Fredet, identificando y respetando uréter y vasos gonadales derechos, y duodeno.
- Sección del ligamento frenocólico y apertura de la transcavidad de los epiplones para movilizar el ángulo hepático del colon.
- Identificación y sellado-sección (Ligasure Maryland) en su origen de los vasos ileocólicos, cólicos derechos[[ y {{Cólicos medios: ramas derechas de los cólicos medios | cólicos medios}}]].
- Sellado-sección del mesocolon y epiplón mayor hasta el área de futura sección del colon transverso, sobrepasando con margen de seguridad la tumoración y el tatuaje.
- Sellado-sección del mesenterio hasta el área de futura sección del íleon terminal (a 10cm de la válvula ileocecal).
- Evaluación de la adecuada movilización y vascularización[[ (verde de indocianina)]] de las zonas anastomosables.
- Envío de la pieza a Anatomía Patológica.

ANASTOMOSIS:
- Confección de anastomosis aniso-peristáltica latero-lateral mecánica con grapadora lineal (ECHELON LINEAR, 80mm, 2 cargas azules). Descarga de tensión en final de línea de grapas con 1 punto de Novosyn 2/0.
- Cierre del defecto mesentérico.

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: No | Penrose en gotiera parietocólica derecha, exteriorizado por fosa ilíaca derecha y fijado a piel con seda 1}}.

CIERRE:
- Aponeurosis: 2 suturas continuas de Monomax 1 (técnica de puntos pequeños, relación sutura/herida ≥ 4:1).
- Piel: grapas y apósitos compresivos.`,
mat: `INSTRUMENTAL:
Caja de laparotomía x1
Separador autoestático x1
Ligasure Maryland x1

GRAPADORAS Y CLIPS:
ECHELON LINEAR 80 mm x1
Cargas azules 80 mm x2

SUTURAS:
Novosyn 2/0 x1
Monomax 1 x2
Seda 1 ?

DRENAJES:
Penrose ?

OTROS:
Verde de indocianina ?
Compresas x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Enoxaparina 40mg 1 pinchazo cada día durante 30 días.
${ANALG}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Sangrado por el ano en cantidad abundante.', A_HERIDA])}`
},

'sd-hemicolectomia-derecha-laparoscopica': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Decúbito supino. Piernas juntas con cincha. Brazo derecho en abducción e izquierdo pegado al cuerpo. Topes en hombros. Trendelenburg y lateralización izquierda.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Preparación mecánica y antibiótica oral según protocolo`,
body: `ACCESO:
- Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 12 mm en flanco izquierdo y de 5 mm en hipogastrio y epigastrio.
- Incisión {{Incisión de extracción: púbica (Pfannenstiel) | periumbilical | transversa en flanco derecho}} para extracción de la pieza.

HALLAZGOS: Tatuaje en {{Tatuaje: ciego | colon ascendente | ángulo hepático | colon transverso …}}. {{Extensión: Sin metástasis hepáticas ni carcinomatosis peritoneal | Metástasis hepáticas … | Carcinomatosis peritoneal (PCI …)}}.

TÉCNICA:
- Identificación y sellado-sección (Ligasure Maryland) de los vasos ileocólicos en su origen.
- Disección del mesocolon sobre el retroperitoneo, siguiendo la fascia de Toldt, hasta alcanzar la fascia de Fredet y el ángulo hepático del colon, asegurando una correcta visualización y preservación del duodeno.
- Identificación y sellado-sección en su origen de los vasos cólicos derechos[[ y {{Cólicos medios: ramas derechas de los cólicos medios | cólicos medios}}]].
- Sección del mesocolon y epiplón mayor hasta el área de futura sección del colon transverso, sobrepasando con margen de seguridad el tatuaje.
- Apertura de la transcavidad de los epiplones y sección craneocaudal del ligamento frenocólico y parietocólico derechos, consiguiendo la liberación del colon.
- Sellado-sección del mesenterio hasta el área de futura sección del íleon terminal (a 10cm de la válvula ileocecal).
- Evaluación de la adecuada movilización y vascularización[[ (verde de indocianina)]] de las zonas anastomosables.
${CONVERSION}

ANASTOMOSIS:
- Sección cólica e ileal con grapadora lineal ({{Grapadora lineal: ECHELON 3000, 60 mm, x2 cargas azules | SIGNIA, 60 mm, x2 cargas moradas}}).
- Descarga de tensión en final de línea de grapas con 1 punto de Novosyn 3/0.
- Confección de anastomosis intracorpórea isoperistáltica laterolateral mecánica con grapadora lineal ({{Grapadora lineal: ECHELON 3000, 60 mm, x2 cargas azules | SIGNIA, 60 mm, x2 cargas moradas}}).
- Suspensión del asa desde el borde superior de la enterotomía al peritoneo parietal con V-Loc (15 cm).
- Cierre de enterotomía con V-Loc (23 cm) desde el borde inferior, anudándolo al V-Loc superior.
- Extracción de la pieza en endobolsa por la incisión de asistencia y envío a Anatomía Patológica.

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: No | Penrose desde flanco derecho hacia pelvis, exteriorizado por hipogastrio y fijado a piel con seda 1}}.

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Aponeurosis flanco izquierdo: punto de Monomax 1.
- Incisión de extracción: sutura continua de Novosyn 3/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Ligasure Maryland x1
Portaagujas laparoscópico x1
Cánula de aspiración-irrigación x1 ?
Protector de herida (Alexis) x1

GRAPADORAS Y CLIPS:
ECHELON 3000 60 mm ?
Cargas azules 60 mm ?
SIGNIA 60 mm ?
Cargas moradas 60 mm ?

SUTURAS:
V-Loc 15 cm x1
V-Loc 23 cm x1
Novosyn 3/0 x1
Monomax 1 x2
Seda 1 ?

DRENAJES:
Penrose ?

OTROS:
Endobolsa x1
Verde de indocianina ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Enoxaparina 40mg 1 pinchazo cada día durante 30 días.
${ANALG}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Sangrado por el ano en cantidad abundante.', A_HERIDA])}`
},

'sd-sigmoidectomia-laparoscopica': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}

POSICIÓN:
Litotomía-Trendelenburg (Lloyd-Davies). Brazos pegados al cuerpo. Topes en hombros. Trendelenburg y lateralización derecha.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Preparación mecánica y antibiótica oral según protocolo`,
body: `ACCESO: Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 5mm en flancos derecho e izquierdo, y de 12mm en fosa ilíaca derecha.

HALLAZGOS: {{Hallazgos: Tatuaje a nivel de sigma proximal | Tatuaje a nivel de sigma distal | Enfermedad diverticular de sigma}}. {{Extensión: Sin metástasis hepáticas ni carcinomatosis peritoneal | Metástasis hepáticas … | Carcinomatosis peritoneal (PCI …) | Sin signos inflamatorios agudos}}.

TÉCNICA:
- Creación de una ventana en el mesocolon, a nivel de la unión rectosigmoidea, visualizando y respetando uréter izquierdo y nervios hipogástricos.
- Identificación y sección (Hem-o-lok) de {{Ligadura vascular: vasos mesentéricos inferiores en su origen (ligadura alta) | arteria rectal superior preservando la arteria cólica izquierda | vasos sigmoideos}}.
- Disección del mesocolon sobre el retroperitoneo hacia craneal (sin llegar a ángulo esplénico) y hacia caudal (promontorio sacro).
[[- Movilización del ángulo esplénico para asegurar una anastomosis sin tensión.]]
- Movilización del sigma despegándolo de la gotiera parietocólica izquierda.
- Sección del mesocolon hasta área de futura sección proximal.
- Sección del mesorrecto y sección distal {{Sección distal: del sigma salvando el tatuaje con margen de seguridad | en la unión rectosigmoidea (recto superior)}} mediante grapadora lineal endoscópica (Signia, 60mm, morada, x2).
- Incisión de Pfannenstiel para exteriorización de la pieza a través de un anillo retractor.
- Sección proximal del sigma en área marcada, comprobando la adecuada vascularización[[ (verde de indocianina)]]. Introducción del yunque y fijación a cabo seccionado con sutura en bolsa de tabaco de Prolene 2/0.
- Envío de la pieza a Anatomía Patológica.
${CONVERSION}

ANASTOMOSIS:
- Confección de anastomosis termino-terminal mecánica con grapadora circular {{Grapadora circular: EEA Tri-Staple, negra, 28 mm | EEA Tri-Staple, negra, 31 mm | EEA Tri-Staple, azul, 28 mm | EEA Tri-Staple, azul, 31 mm | EEA Tri-Staple, verde, 28 mm | EEA Tri-Staple, verde, 31 mm | ECHELON CIRCULAR, 29 mm | ECHELON CIRCULAR, 33 mm}}, sin tensión.
- Comprobación de la integridad de los anillos (donuts).
- Test de estanqueidad neumático y con povidona yodada negativos.
[[- Ileostomía de protección en fosa ilíaca derecha.]]

${REV_LAP}

${PERDIDA}

DRENAJES: {{Drenajes: No | Jackson-Pratt en lecho quirúrgico fijado a piel con seda 1 | Martí Palanca en pelvis fijado a piel con seda 1}}.

CIERRE:
- Pfannenstiel en dos planos: sutura continua de Novosyn 2/0 para peritoneo y sutura continua de Monomax 1 para aponeurosis.
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
Ligasure Maryland x1
Clipadora Hem-o-lok x1
Protector de herida (Alexis) x1
Endo Close x1
Cánula de aspiración-irrigación x1 ?

GRAPADORAS Y CLIPS:
Signia 60 mm x1
Cargas moradas 60 mm x2
Grapadora circular (EEA Tri-Staple / ECHELON CIRCULAR) x1
Clips Hem-o-lok x1

SUTURAS:
Prolene 2/0 x1
Novosyn 2/0 x1
Monomax 1 x3
Seda 1 ?

DRENAJES:
Jackson-Pratt ?
Martí Palanca ?

OTROS:
Povidona yodada x1
Verde de indocianina ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Enoxaparina 40mg 1 pinchazo cada día durante 30 días.
${ANALG}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes, distensión abdominal o ausencia de gases y deposiciones.', 'Sangrado por el ano en cantidad abundante.', A_HERIDA])}`
},

'sd-intervencion-de-hartmann': {
prep: `ANESTESIA:
General

PROFILAXIS ANTIBIÓTICA:
${PROF_COLON}
En peritonitis: tratamiento antibiótico empírico ya iniciado

POSICIÓN:
Litotomía-Trendelenburg (Lloyd-Davies).

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente
Marcaje preoperatorio del estoma`,
body: `ACCESO: Laparotomía media {{Laparotomía: infraumbilical | suprainfraumbilical}}.

HALLAZGOS: {{Hallazgos: Diverticulitis perforada con peritonitis purulenta (Hinchey III) | Diverticulitis perforada con peritonitis fecaloidea (Hinchey IV) | Absceso pélvico (Hinchey II) | Neoplasia de sigma obstructiva | Neoplasia de sigma perforada | Vólvulo de sigma con signos de isquemia}}. {{Peritonitis: localizada en pelvis | generalizada en cuatro cuadrantes | ausente}}.
[[Toma de muestra de líquido peritoneal para cultivo.]]

TÉCNICA:
- Aspirado y lavado de la cavidad abdominal con suero fisiológico.
- Movilización del sigma despegándolo de la gotiera parietocólica izquierda.
- Disección del mesocolon sobre el retroperitoneo hacia craneal (sin llegar a ángulo esplénico) y hacia caudal (promontorio sacro).
- Identificación de uréter y vasos gonadales izquierdos.
- Identificación y sellado-sección (LigaSure Maryland) de vasos {{Vasos: sigmoideos (cerca de la pared en patología benigna) | mesentéricos inferiores en su origen (en neoplasia)}}.
- Sección del mesocolon hasta área de futura sección proximal. Sección proximal del sigma con {{Grapadora proximal: grapadora lineal endoscópica (Endo GIA, 45mm, morada, x1) | grapadora lineal endoscópica (Endo GIA, 60mm, morada, x1) | grapadora lineal (NTLC, 55mm, dorada, x1) | grapadora lineal (NTLC, 75mm, dorada, x1)}}.
- Disección del mesorrecto superior, consiguiendo margen de seguridad. Identificación y sellado-sección (LigaSure Maryland) de vasos rectales superiores.
- Sección distal del sigma mediante {{Grapadora distal: grapadora lineal endoscópica (Endo GIA, 45mm, morada, x1) | grapadora lineal endoscópica (Endo GIA, 60mm, morada, x1) | grapadora curva (CONTOUR, 40mm, verde) | grapadora curva (CONTOUR, 40mm, azul)}}. Referenciación del muñón rectal con punto de Prolene 2/0 (2 cabos largos).
- Envío de la pieza a Anatomía Patológica.

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: No | Jackson-Pratt en pelvis fijado a piel con seda 1}}.

CIERRE:
- Aponeurosis: 2 suturas continuas de Monomax 1.
- Piel: grapas y apósito compresivo.

ESTOMA:
- Confección de colostomía terminal en flanco izquierdo (lugar de marcaje previo) fijándola a piel con 12 puntos de Novosyn 3/0. Colocación de bolsa de colostomía.`,
mat: `INSTRUMENTAL:
Caja de laparotomía x1
Separador autoestático x1
LigaSure Maryland x1
Cánula de aspiración x1

GRAPADORAS Y CLIPS:
Endo GIA 45 / 60 mm ?
Cargas moradas ?
NTLC 55 / 75 mm ?
CONTOUR 40 mm ?

SUTURAS:
Prolene 2/0 x1
Monomax 1 x2
Novosyn 3/0 x1
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Suero para lavado x1
Bolsa de colostomía x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

CUIDADOS DE LA COLOSTOMÍA:
- Vacíe o cambie la bolsa cuando esté llena hasta un tercio y limpie la piel de alrededor con agua y jabón neutro, secándola bien.
- Ajuste el orificio del disco al tamaño del estoma para proteger la piel.
- Siga las indicaciones de la enfermera estomaterapeuta.

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Enoxaparina 40mg 1 pinchazo cada día durante 30 días.
${ANALG}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta blanda durante las primeras 2 semanas, recuperando progresivamente la normalidad.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', 'Estoma de color oscuro o negro, hundido, o ausencia de gases y heces por la colostomía durante más de 24 horas.', 'Salida de pus o sangre abundante por el ano.', A_HERIDA])}`
},

'sd-drenaje-de-absceso-anorrectal-sin-fistulas': {
prep: `ANESTESIA:
Raquídea / General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Litotomía.

OTROS:`,
body: `HALLAZGOS: Abombamiento, fluctuación y signos inflamatorios externos en {{Localización: margen anal … | fosa isquiorrectal … | región interesfinteriana …}} sugestivos de absceso {{Tipo de absceso: perianal | isquiorrectal | interesfinteriano | supraelevador}}. Tacto rectal y anoscopia sin objetivar orificios fistulosos internos.

TÉCNICA:
- Incisión {{Incisión: radial | curvilínea}} sobre la zona de mayor fluctuación, lo más próxima posible al margen anal, con salida de abundante material purulento.
[[- Toma de muestra de pus para cultivo.]]
- Desbridamiento digital de la cavidad abscesal y de sus tabiques, que mide {{Diámetro (cm)}} cm de diámetro aproximadamente.
- Instilación de agua oxigenada diluida con suero fisiológico sin evidenciar salida endoanal.
- Resección de los bordes cutáneos para favorecer el drenaje.
- Limpieza con suero fisiológico y clorhexidina.
[[- Colocación de drenaje {{Drenaje: Penrose | catéter de Pezzer}} en la cavidad, fijado a piel con seda 2/0.]]

${REV_ABIERTA}

CIERRE:
- Herida abierta. Mechado con gasa. Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor proctológica x1
Anoscopio x1
Estilete x1

DRENAJES:
Penrose ?
Pezzer ?

OTROS:
Agua oxigenada x1
Clorhexidina x1
Gasas x1
Torunda para cultivo ?`,
recs: `CUIDADOS DE LA HERIDA:
- Solicite cita con enfermería en su Centro de Salud para realizarse diariamente curas mechadas con una gasa bañada en clorhexidina (Cristalmina).
- Mantenga la herida limpia y seca. Puede ducharse, pero evite bañarse hasta su cicatrización completa.

${HIGIENE_ANAL}

${MED}

${ALARMA([A_FIEBRE, 'Reaparición de dolor, hinchazón o enrojecimiento en la zona.', 'Sangrado abundante por la herida.', 'Imposibilidad para orinar.'])}`
},

'sd-esfinterotomia-lateral-interna-abierta': {
prep: `ANESTESIA:
Raquídea / General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Navaja.

OTROS:`,
body: `HALLAZGOS: Fisura anal crónica en {{Localización fisura: rafe medio posterior | rafe medio anterior | localización lateral …}}. Hipertonía del esfínter anal interno. [[Asocia {{Hallazgos asociados: un pliegue cutáneo indurado distal (hemorroide centinela) | una papila hipertrófica proximal | un pliegue cutáneo indurado distal (hemorroide centinela) y una papila hipertrófica proximal}}.]]

TÉCNICA:
- Incisión en el surco interesfinteriano a nivel de margen {{Margen: izquierdo | derecho}}.
- Disección del esfínter anal interno y esfinterotomía adaptada a la extensión de la fisura (sin sobrepasar su vértice).
[[- Exéresis de la hemorroide centinela.]]
[[- Exéresis de la papila hipertrófica y remisión a Anatomía Patológica.]]
[[- Legrado del lecho de la fisura.]]

${REV_ABIERTA}

CIERRE:
- {{Cierre: Herida abierta | Cierre de la incisión con un punto de Vicryl Rapid 3/0}}. Mechado con gasa bañada en clorhexidina. Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor proctológica x1
Separador anal (Parks / Eisenhammer) x1
Bisturí eléctrico x1

SUTURAS:
Vicryl Rapid 3/0 ?

OTROS:
Gasas x1
Clorhexidina x1`,
recs: `${ESTRENIMIENTO}

${MED}

${HIGIENE_ANAL}

${ALARMA(A_ANAL)}`
},

'sd-hemorroidectomia-abierta-milligan-morgan': {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Navaja.

OTROS:`,
body: `HALLAZGOS: Hemorroides de grado {{Grado: III | IV}} con paquetes {{Paquetes*: lateral izquierdo | anterolateral derecho | posterolateral derecho}}. {{Hallazgos exploración}}.

TÉCNICA:
- Infiltración perianal con {{Anestésico local: levobupivacaína 0.25% | ropivacaína 0.3% | mepivacaína 2%}}.
- Hemorroidectomía mediante {{Energía: sellador de vasos | electrocauterio}} y sección-ligadura del pedículo del paquete hemorroidal {{Paquetes*: lateral izquierdo | anterolateral derecho | posterolateral derecho}} con Vicryl 2/0, preservando puentes cutaneomucosos entre las heridas.
[[- Hemorroidectomía de hemorroide accesoria en {{Localización hemorroide accesoria}}.]]
- Remisión de los paquetes a Anatomía Patológica.

${REV_ABIERTA}

CIERRE:
- Heridas abiertas.
[[- Taponamiento anal con Espongostan.]]
- Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor proctológica x1
Separador anal (Parks / Eisenhammer) x1
Sellador de vasos (LigaSure Small Jaw) ?
Bisturí eléctrico x1

SUTURAS:
Vicryl 2/0 x1

OTROS:
Anestésico local x1
Espongostan ?
Gasas x1`,
recs: `${ESTRENIMIENTO}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
${ANALG}
[[- Metronidazol 500 mg 1 comprimido cada 8h durante 7 días.]]

${HIGIENE_ANAL}

${ALARMA(A_ANAL)}`
},

'sd-puesta-a-plano-curetaje-y-herida-abierta-sinus-pilonidal': {
prep: `ANESTESIA:
Raquídea / General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Navaja. Separación de glúteos con esparadrapo.

OTROS:
Rasurado de la zona con maquinilla eléctrica`,
body: `HALLAZGOS: Sinus pilonidal sacrocoxígeo con {{Orificios (n.º)}} orificios en línea media[[ y orificio lateral]]. {{Hallazgos exploración}}.

TÉCNICA:
- Tutorización de los trayectos con estilete[[ y tinción con azul de metileno]].
- Puesta a plano de todos los trayectos.
- Curetaje del lecho quirúrgico, retirando pelo y tejido de granulación.
- Marsupialización de los bordes a la base con puntos de {{Sutura marsupialización: Vicryl 2/0 | Vicryl Rapid 2/0}}.
[[- Remisión del tejido a Anatomía Patológica.]]

${REV_ABIERTA}

CIERRE:
- Herida abierta. Mechado con gasa. Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Estilete x1
Cucharilla de legrado x1
Bisturí eléctrico x1

SUTURAS:
Vicryl 2/0 ?
Vicryl Rapid 2/0 ?

OTROS:
Azul de metileno ?
Gasas x1`,
recs: `CUIDADOS DE LA HERIDA:
- Solicite cita con enfermería en su Centro de Salud para realizarse diariamente curas mechadas con una gasa bañada en clorhexidina (Cristalmina).
- Mantenga la herida limpia y seca. Puede ducharse, pero evite bañarse hasta su cicatrización completa.
- Mantenga la zona y los bordes de la herida libres de pelo (depilación periódica) hasta su cicatrización.

${MED}

CUIDADOS PERSONALES:
- Evite esfuerzos físicos intensos que comprometan la región intervenida durante el 1º mes postoperatorio para garantizar la correcta cicatrización.
- Evite permanecer sentado durante periodos prolongados.

${ALARMA([A_FIEBRE, 'Sangrado abundante por la herida.', 'Enrojecimiento, hinchazón o supuración alrededor de la herida.'])}`
},

'sd-reseccion-en-bloque-y-herida-abierta-sinus-pilonidal': {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Navaja. Separación de glúteos con esparadrapo.

OTROS:
Rasurado de la zona con maquinilla eléctrica`,
body: `HALLAZGOS: Sinus pilonidal sacrocoxígeo con {{Orificios (n.º)}} orificios en línea media[[ y orificio lateral]]. {{Hallazgos exploración}}.

TÉCNICA:
- Tutorización de los trayectos con estilete[[ y tinción con azul de metileno]].
- Incisión elíptica englobando todos los orificios y trayectos.
- Resección en bloque del tejido afecto hasta la fascia presacra, sin abrir los trayectos.
- Remisión de la pieza a Anatomía Patológica.

${REV_ABIERTA}

CIERRE:
- Herida abierta. Mechado con gasa. Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Estilete x1
Bisturí eléctrico x1

OTROS:
Azul de metileno ?
Gasas x1
Bote de Anatomía Patológica x1`,
recs: `CUIDADOS DE LA HERIDA:
- Solicite cita con enfermería en su Centro de Salud para realizarse diariamente curas mechadas con una gasa bañada en clorhexidina (Cristalmina).
- Mantenga la herida limpia y seca. Puede ducharse, pero evite bañarse hasta su cicatrización completa.
- Mantenga la zona y los bordes de la herida libres de pelo (depilación periódica) hasta su cicatrización.

${MED}

CUIDADOS PERSONALES:
- Evite esfuerzos físicos intensos que comprometan la región intervenida durante el 1º mes postoperatorio para garantizar la correcta cicatrización.
- Evite permanecer sentado durante periodos prolongados.

${ALARMA([A_FIEBRE, 'Sangrado abundante por la herida.', 'Enrojecimiento, hinchazón o supuración alrededor de la herida.'])}`
},

/* ============================ CHP ============================ */

'sd-colecistectomia-laparoscopica-urgente-programada': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
Programada de bajo riesgo: no indicada de rutina
Urgente o alto riesgo: Cefazolina 2 g iv (alergia a betalactámicos: Clindamicina 900 mg iv + Gentamicina 5 mg/kg iv)
Colecistitis aguda: tratamiento antibiótico ya iniciado

POSICIÓN:
Francesa. Antitrendelenburg y lateralización izquierda.

OTROS:`,
body: `ACCESO: Trócar de Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 5mm en flanco derecho y subxifoideo, y de 12mm en hipocondrio izquierdo.

HALLAZGOS: Vesícula {{Vesícula: normal | escleroatrófica | con colecistitis aguda | con colecistitis gangrenosa | con plastrón inflamatorio}}[[, con {{Adherencias: epiplón mayor adherido | adherencias firmes a duodeno y colon}}]]. [[Grado de colecistitis según Tokio 2018: {{Grado Tokio: I (leve) | II (moderada) | III (grave)}}.]]

TÉCNICA:
[[- Liberación de epiplón y adherencias de la vesícula mediante maniobras romas y electrocauterio.]]
[[- Punción y vaciado vesicular con aguja de Veress remitiendo muestra a Microbiología.]]
- Tracción del fundus hacia el hombro derecho y del infundíbulo hacia lateral. Apertura del peritoneo anterior y posterior del triángulo hepatocístico.
- Disección del triángulo hepatocístico obteniendo la visión crítica de seguridad: solo dos estructuras (conducto y arteria císticos) entran en la vesícula y el tercio inferior del lecho vesicular está separado del hígado.
- Sección entre clips (Hem-o-lok) de la arteria y del conducto císticos.
[[- Colangiografía intraoperatoria a través del conducto cístico: {{Colangiografía: sin defectos de repleción y con paso de contraste a duodeno | con defectos de repleción en colédoco …}}.]]
[[- Colecistectomía subtotal {{Subtotal: reconstituyente | fenestrada}} por imposibilidad de obtener la visión crítica de seguridad.]]
- Colecistectomía anterógrada y extracción de la vesícula mediante endobolsa.
- Envío de la vesícula a Anatomía Patológica.
[[- Lavado y aspirado del lecho y del espacio subhepático.]]
${CONVERSION}

${REV_LAP}

DRENAJES: {{Drenajes: No | Penrose en lecho quirúrgico fijado a piel con seda 1 | Jackson-Pratt en espacio subhepático fijado a piel con seda 1}}.

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
[[- Aponeurosis de hipocondrio izquierdo: punto de Monomax 1 con Endo Close.]]
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Gancho monopolar x1
Pinza disectora (Maryland) x1
Tijera laparoscópica x1
Clipadora Hem-o-lok x1
Cánula de aspiración-irrigación x1 ?
Aguja de Veress ?

GRAPADORAS Y CLIPS:
Clips Hem-o-lok x1

SUTURAS:
Monomax 1 x1
Seda 1 ?

DRENAJES:
Penrose ?
Jackson-Pratt ?

OTROS:
Endobolsa x1
Material de colangiografía ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
[[- Amoxicilina/Ácido clavulánico 875/125mg 1 comprimido cada 8 horas durante {{Días de antibiótico}} días.]]
${ANALG}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Realice una dieta sin grasas ni fritos durante 2 meses.

${ALARMA(['Fiebre superior a 38 ºC.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Coloración amarilla de la piel o de los ojos, orina oscura o heces blanquecinas.', 'Vómitos persistentes o distensión abdominal.', A_HERIDA])}`
},

/* ============================ CEG ============================ */

'sd-funduplicatura-de-nissen-laparoscopica': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Francesa. Antitrendelenburg pronunciado.

OTROS:
Sonda nasogástrica / bujía de calibración
Medias de compresión neumática intermitente`,
body: `ACCESO: Trócar de Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 5mm en flanco derecho y subxifoideo (separador hepático), y de 11mm en hipocondrio izquierdo.

HALLAZGOS: {{Hallazgos hiato: Hiato sin hernia significativa | Hernia de hiato tipo I (deslizamiento) | Hernia de hiato tipo II (paraesofágica) | Hernia de hiato tipo III (mixta) | Hernia de hiato tipo IV (con otras vísceras)}}. Orificio hiatal de {{Tamaño del hiato (cm)}} cm.

TÉCNICA:
- Separación del lóbulo hepático izquierdo.
- Apertura de la pars flácida del epiplón menor, preservando[[ la arteria hepática izquierda accesoria y]] el nervio vago.
- Disección y exposición de ambos pilares diafragmáticos.
- Sección de los vasos cortos gástricos para movilizar el fundus.
[[- Liberación de adherencias mediastínicas al saco herniario, exéresis del saco y reducción del contenido herniado a cavidad abdominal, preservando la integridad pleural.]]
- Movilización esofágica mediastínica obteniendo al menos 3 cm de esófago intraabdominal sin tensión, y creación de una amplia ventana retroesofágica preservando ambos troncos vagales.
- Cierre posterior de los pilares diafragmáticos con {{Puntos pilares (n.º)}} puntos de {{Sutura pilares: Ethibond 0 | Ethibond 2/0 | V-Loc}}[[ y refuerzo con malla {{Malla hiato}}]].
- Confección de funduplicatura posterior de 360º según Nissen, corta (2 cm) y holgada, sobre {{Calibración: bujía de 50 Fr | bujía de 56 Fr | sonda nasogástrica}}, comprobando la maniobra de «shoe-shine». Fijación de ambos extremos de la válvula entre ellos y a esófago con {{Puntos válvula (n.º)}} puntos de {{Sutura válvula: Ethibond 2/0 | Ethibond 0}}.
[[- Fijación de la parte posterior de la válvula al pilar derecho con {{Puntos fijación (n.º)}} puntos de {{Sutura fijación: Ethibond 2/0 | Ethibond 0}}.]]
${CONVERSION}

${REV_LAP}

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Aponeurosis de hipocondrio izquierdo: Monomax 1 con Endo Close.
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
11 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Separador hepático x1
Pinzas de agarre atraumáticas de 5 mm x2
Sellador de vasos (Ligasure / Harmonic) x1
Portaagujas laparoscópico x1
Endo Close x1
Cinta de tracción esofágica (Penrose) ?

SUTURAS:
Ethibond 0 / 2/0 x2
V-Loc ?
Monomax 1 x2

OTROS:
Bujía de calibración x1
Malla de hiato ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual. Si toma comprimidos grandes, consulte si pueden triturarse o sustituirse por formas líquidas durante las primeras semanas.
- Si tiene dolor, tome paracetamol 650mg 1 sobre cada 8h (desayuno, comida y cena). Si es insuficiente, altérnelo con ibuprofeno 400mg 1 sobre cada 8h (almuerzo y merienda).

MEDIDAS DIETÉTICAS:
- Siga una dieta líquida clara durante dos semanas. Después, agregue progresivamente alimentos más consistentes.
- Realice 5 o 6 comidas al día con porciones pequeñas o moderadas. Coma hasta saciarse, pero no hasta llenarse. Hágalo lentamente y mastique bien la comida. Evite alimentos que producen gases.
- Beba sorbos de agua para ayudarse a tragar, evitando el uso de pajitas. No consuma bebidas heladas, calientes, carbonatadas o con gas. No fuerce el eructo.
- Siéntese con la espalda recta cuando coma. No se acueste ni se recline durante al menos 30 minutos después de comer.
- Es normal notar cierta dificultad para tragar y sensación de hinchazón durante las primeras semanas.

CUIDADOS PERSONALES:
${ESFUERZO_ABD}

${ALARMA(['Fiebre superior a 38 ºC.', 'Imposibilidad para tragar líquidos o la propia saliva.', 'Vómitos, dolor torácico intenso o dificultad para respirar.', 'Dolor abdominal que aumenta o no cede con la analgesia.', A_HERIDA])}`
},

'sd-hernioplastia-inguinal-lichtenstein': {
prep: `ANESTESIA:
Raquídea / General / Local + sedación (bloqueo ilioinguinal-iliohipogástrico)

PROFILAXIS ANTIBIÓTICA:
No indicada de rutina en pacientes de bajo riesgo
Factores de riesgo o hernia recidivada: ${PROF_LIMPIA}

POSICIÓN:
Decúbito supino.

OTROS:
Rasurado de la zona con maquinilla eléctrica`,
body: `ACCESO: Incisión inguinal anterior {{Lado: derecha | izquierda}} y apertura del tejido celular subcutáneo y la fascia de Scarpa.

HALLAZGOS: Hernia inguinal {{Tipo de hernia: indirecta (lateral) | directa (medial) | mixta (pantalón) | femoral}} {{Clasificación EHS: L1 | L2 | L3 | M1 | M2 | M3 | F}}[[, recidivada]]. {{Contenido: Saco vacío | Contenido epiploico | Contenido intestinal sin signos de isquemia | Lipoma del cordón}}.

TÉCNICA:
- Sección de la aponeurosis del músculo oblicuo mayor hasta el orificio inguinal externo, identificando y preservando los nervios ilioinguinal, iliohipogástrico y la rama genital del genitofemoral.
- {{Contenido del canal: Apertura del músculo cremáster y disección del cordón espermático respetando las estructuras que lo recorren | Disección del ligamento redondo}}.
[[- Identificación, disección y reintroducción en cavidad abdominal de saco herniario lateral. Estrechamiento del orificio inguinal interno con un punto de Novosyn 3/0.]]
[[- Identificación, disección y plicatura de saco herniario medial con sutura continua de Novosyn 3/0.]]
[[- Exéresis del lipoma del cordón.]]
- Colocación de malla de polipropileno ({{Malla (modelo)}}, 6 x 11 cm) ajustada al suelo inguinal, sobrepasando 2 cm el tubérculo púbico y 3-4 cm el triángulo de Hesselbach, y orificio inguinal profundo. Fijación con puntos de Novosyn 3/0 a tejido sobre el pubis (sin periostio), ligamento inguinal (sutura continua), oblicuo menor y tendón conjunto. Cierre de las pestañas de la malla con un punto de Novosyn 3/0, rodeando el cordón sin estrecharlo.
[[- Neurectomía del nervio {{Nervio: ilioinguinal | iliohipogástrico}} por lesión o atrapamiento.]]

${REV_ABIERTA}

CIERRE:
- Aponeurosis del músculo oblicuo mayor: sutura continua de Novosyn 3/0.
- Infiltración con {{Anestésico local: ropivacaína 0.3% | levobupivacaína 0.25%}}.
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de pared x1
Separadores de Farabeuf x2
Cinta de Penrose para el cordón x1
Bisturí eléctrico x1

SUTURAS:
Novosyn 3/0 x3

OTROS:
Malla de polipropileno 6 x 11 cm x1
Anestésico local x1
Grapadora de piel x1`,
recs: `${HERIDAS(1, '2 semanas', 'las grapas')}

${MED}

CUIDADOS PERSONALES:
- Puede caminar y realizar su actividad cotidiana desde el primer día, según tolerancia.
- Evite esfuerzos físicos intensos que comprometan la región abdominal (coger peso, por ejemplo) durante las primeras 2-4 semanas.
- Es frecuente cierta hinchazón o un pequeño hematoma en la zona o en el escroto, que desaparece progresivamente.

${ALARMA([A_FIEBRE, 'Dolor que aumenta o no cede con la analgesia.', 'Hinchazón importante y progresiva de la herida o del escroto.', 'Imposibilidad para orinar.', A_HERIDA1])}`
},

'sd-hernioplastia-inguinal-nyhus': {
prep: `ANESTESIA:
Raquídea / General

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino.

OTROS:
Vaciamiento vesical
Rasurado de la zona con maquinilla eléctrica`,
body: `ACCESO: Incisión transversa {{Lado: izquierda | derecha}} dos traveses de dedo por encima del pubis.

HALLAZGOS: Hernia inguinal {{Tipo de hernia: indirecta (lateral) | directa (medial) | mixta (pantalón) | femoral}}[[, recidivada]]. {{Contenido: Saco vacío | Contenido epiploico | Contenido intestinal sin signos de isquemia}}.

TÉCNICA:
- Disección del tejido celular subcutáneo y sección de la aponeurosis anterior del recto abdominal.
- Abordaje preperitoneal a través de la línea semilunar, rechazando medialmente la musculatura del recto abdominal junto con los vasos epigástricos, y lateralmente los músculos oblicuo menor y transverso.
- Disección inferomedial del espacio preperitoneal hasta localizar el ligamento pectíneo (de Cooper) y el pubis.
- Separación del saco herniario de la fascia transversalis y de los elementos del cordón.
- Disección amplia del peritoneo parietal de los elementos del cordón y parietalización de los mismos.
- Interposición de malla de polipropileno ({{Malla (modelo)}}, 15 x 15 cm) abrazando por completo el peritoneo y cubriendo el orificio miopectíneo. Fijación de la malla al ligamento pectíneo con un punto de Novosyn 2/0.

${REV_ABIERTA}

CIERRE:
- Aponeurosis: sutura continua de Novosyn 3/0.
- Infiltración con ropivacaína 0.3%.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de pared x1
Separadores de Farabeuf x2
Valvas maleables x1
Bisturí eléctrico x1

SUTURAS:
Novosyn 2/0 x1
Novosyn 3/0 x1

OTROS:
Malla de polipropileno 15 x 15 cm x1
Anestésico local x1
Grapadora de piel x1`,
recs: `${HERIDAS(1, '2 semanas', 'las grapas')}

${MED}

CUIDADOS PERSONALES:
- Puede caminar y realizar su actividad cotidiana desde el primer día, según tolerancia.
- Evite esfuerzos físicos intensos que comprometan la región abdominal (coger peso, por ejemplo) durante las primeras 2-4 semanas.

${ALARMA([A_FIEBRE, 'Dolor que aumenta o no cede con la analgesia.', 'Hinchazón importante y progresiva de la herida o del escroto.', 'Imposibilidad para orinar.', A_HERIDA1])}`
},

'sd-hernioplastia-inguinal-laparoscopica-total-extraperitoneal-t': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
No indicada de rutina en pacientes de bajo riesgo
Factores de riesgo: ${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazos pegados al cuerpo. Trendelenburg.

OTROS:
Vaciamiento vesical`,
body: `ACCESO: Incisión paraumbilical {{Lado: derecha | izquierda}} y apertura de la aponeurosis anterior del recto. Exploración digital inicial y creación del espacio preperitoneal para su disección con balón. Insuflación a baja presión (10-12 mmHg). Cambio por trócar de Hasson. Colocación de trócares de 5mm en línea media (hipogastrio y suprapúbico).

HALLAZGOS: Hernia inguinal {{Lado de la hernia: derecha | izquierda | bilateral}} {{Tipo de hernia: indirecta (lateral) | directa (medial) | mixta (pantalón) | femoral}} {{Clasificación EHS: L1 | L2 | L3 | M1 | M2 | M3 | F}}[[, recidivada]].

TÉCNICA:
- Disección medial, exponiendo la sínfisis púbica e identificando el ligamento de Cooper. Identificación del pedículo epigástrico, situado lateralmente y cruzando la arcada de Douglas.
- Apertura del espacio de Retzius, respetando la vejiga.
- Disección del espacio de Bogros en profundidad desplazando cranealmente los vasos epigástricos, alcanzando el espacio del psoas. Se respeta la capa adiposa que recubre los nervios femorocutáneo lateral y genitofemoral para evitar el contacto posterior con la malla.
- Identificación del cordón espermático e individualización de sus elementos (vasos espermáticos y conducto deferente).
- Reducción de la hernia y tracción del saco, con parietalización de los elementos del cordón hasta su divergencia.
[[- Rescate del lipoma del cordón y colocación encima de la malla.]]
- Colocación de malla de polipropileno ({{Malla (modelo y medida): 15 x 15 cm | 10 x 15 cm | anatómica 3D …}}) cubriendo todo el orificio miopectíneo, sin pliegues. {{Fijación de la malla: Sin fijación | Fijada con pegamento de cianoacrilato | Fijada con tackers absorbibles al ligamento de Cooper}}.
[[- Reparación contralateral con la misma técnica.]]
- Evacuación controlada del CO2 bajo visión directa, comprobando que el saco peritoneal queda por encima del borde inferior de la malla.
[[- Conversión a técnica TAPP / abierta por {{Motivo de la conversión}}.]]

${REV_LAP}

CIERRE:
- Aponeurosis paraumbilical: punto de Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Trócar balón de disección x1
Hasson 10-12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Tijera laparoscópica x1
Tackers absorbibles ?

SUTURAS:
Monomax 1 x1

OTROS:
Malla de polipropileno 15 x 15 cm x1
Pegamento de cianoacrilato ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

${MED}

CUIDADOS PERSONALES:
- Puede caminar y realizar su actividad cotidiana desde el primer día, según tolerancia.
- Evite esfuerzos físicos intensos que comprometan la región abdominal (coger peso, por ejemplo) durante las primeras 2 semanas.
- Es frecuente cierta hinchazón o un pequeño hematoma en la ingle o en el escroto, que desaparece progresivamente.

${ALARMA([A_FIEBRE, 'Dolor que aumenta o no cede con la analgesia.', 'Hinchazón importante y progresiva de la ingle o del escroto.', 'Imposibilidad para orinar.', A_HERIDA])}`
},

'sd-hernioplastia-umbilical-epigastrica': {
prep: `ANESTESIA:
Raquídea / General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
No indicada de rutina en pacientes de bajo riesgo
Factores de riesgo: ${PROF_LIMPIA}

POSICIÓN:
Decúbito supino.

OTROS:`,
body: `ACCESO: {{Incisión: Incisión vertical sobre la tumoración | Incisión periumbilical inferior | Incisión periumbilical superior}}.

HALLAZGOS: Hernia {{Tipo de hernia: umbilical | paraumbilical | epigástrica}} con defecto aponeurótico de {{Defecto (cm)}} cm. {{Contenido: Contenido preperitoneal | Contenido epiploico | Contenido intestinal sin signos de isquemia}}. [[Diástasis de rectos asociada.]]

TÉCNICA:
- Disección del tejido celular subcutáneo hasta aislar el saco herniario.
- Liberación del cuello fibroso, {{Quelotomía: precisando quelotomía | sin precisar quelotomía}}.
[[- Apertura del saco herniario visualizando {{Contenido del saco: epiplón | intestino delgado}} en su interior sin signos de isquemia, por lo que se reintroduce en cavidad abdominal. Cierre del saco herniario con sutura continua de Novosyn 3/0.]]
- Reintroducción del saco herniario en cavidad abdominal y disección del espacio preperitoneal circunferencialmente, al menos 3 cm alrededor del defecto.
- {{Reparación: Colocación de malla de polipropileno (Ventralex) en espacio preperitoneal y fijación a aponeurosis mediante 4 puntos cardinales de Prolene 2/0 | Colocación de malla plana de polipropileno en espacio preperitoneal, con solapamiento de al menos 3 cm, fijada con puntos de Prolene 2/0 | Herniorrafia simple con puntos sueltos de Monomax 1 (defecto < 1 cm)}}.[[ Malla de tamaño {{Tamaño de la malla: Ventralex S | Ventralex M | Ventralex L | … cm}}.]]
- Cierre del defecto aponeurótico con {{Cierre del defecto: sutura continua de Monomax 1 | puntos sueltos de Prolene 0}}.
[[- Fijación umbilical a aponeurosis con punto de Novosyn 3/0.]]

${REV_ABIERTA}

CIERRE:
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de pared x1
Separadores de Farabeuf x2
Bisturí eléctrico x1

SUTURAS:
Prolene 2/0 x1
Monomax 1 x1
Novosyn 3/0 x1

OTROS:
Malla Ventralex (S / M / L) ?
Malla plana de polipropileno ?
Grapadora de piel x1`,
recs: `${HERIDAS(1, '2 semanas', 'las grapas')}

${MED}

CUIDADOS PERSONALES:
- Puede caminar y realizar su actividad cotidiana desde el primer día, según tolerancia.
${ESFUERZO_ABD}
[[- Utilice una faja abdominal durante el día en las primeras semanas.]]

${ALARMA([A_FIEBRE, 'Dolor que aumenta o no cede con la analgesia.', 'Hinchazón importante y progresiva de la herida.', 'Vómitos persistentes o distensión abdominal.', A_HERIDA1])}`
},

'sd-eventroplastia-anterior-chevrel': {
prep: `ANESTESIA:
General ± catéter epidural / bloqueo de pared (TAP)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazos en abducción.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente`,
body: `ACCESO: Incisión de línea media resecando antigua cicatriz.

HALLAZGOS: Eventración {{Localización EHS: M1 subxifoidea | M2 epigástrica | M3 umbilical | M4 infraumbilical | M5 suprapúbica}} con defecto de {{Anchura del defecto (cm)}} cm de anchura y {{Longitud del defecto (cm)}} cm de longitud (clasificación EHS {{Anchura EHS: W1 (< 4 cm) | W2 (4-10 cm) | W3 (> 10 cm)}}). {{Contenido: Contenido epiploico | Contenido intestinal sin signos de isquemia}}.

TÉCNICA:
- Disección del saco herniario separándolo del tejido celular subcutáneo.
- Tallado del orificio herniario y apertura del saco realizando liberación de adherencias viscerales.
[[- Cierre del peritoneo/saco herniario y aponeurosis posterior con 2 suturas continuas de Monomax 1.]]
- Disección subcutánea dejando expuesta ampliamente la aponeurosis anterior de los rectos, preservando en lo posible las perforantes.
- Incisión bilateral de la aponeurosis anterior de los rectos a unos 2 centímetros de su borde medial.
- Liberación de la aponeurosis medialmente y sutura de ambos colgajos cerrando la línea media con 2 suturas continuas de Monomax 1.
- Colocación de una malla de polipropileno ({{Malla (modelo y medida)}}) recortada a unas dimensiones de {{Dimensiones finales (cm)}} cm aproximadamente para cubrir el cierre medial y los músculos expuestos, con solapamiento de al menos 5 cm. Sutura de la prótesis a los extremos laterales de la aponeurosis anterior con puntos de Prolene 2/0.
[[- Fijación de la malla con {{Fijación adicional: material adhesivo (…, x1) | puntos sueltos de Novosyn 3/0}}.]]

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: 2 drenajes de Redón en espacio subcutáneo fijados a piel con seda 1 | 1 drenaje de Redón en espacio subcutáneo fijado a piel con seda 1 | No}}.

CIERRE:
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de laparotomía x1
Separadores de Farabeuf x2
Bisturí eléctrico x1

SUTURAS:
Monomax 1 x2
Prolene 2/0 x2
Novosyn 3/0 x1
Seda 1 x1

DRENAJES:
Redón x2

OTROS:
Malla de polipropileno x1
Adhesivo de fijación ?
Faja abdominal x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '2 semanas', 'las grapas')}

${DRENAJES_CUIDADOS}

${MED}

CUIDADOS PERSONALES:
- Utilice una faja abdominal durante el día en las primeras 4-6 semanas.
- Evite esfuerzos físicos que comprometan la región abdominal (coger peso o subir escaleras, por ejemplo) durante los 2 primeros meses.

${ALARMA([A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', 'Hinchazón o acumulación de líquido bajo la herida.', A_HERIDA])}`
},

'sd-eventroplastia-retromuscular-rives-stoppa': {
prep: `ANESTESIA:
General ± catéter epidural / bloqueo de pared (TAP)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazos en abducción.

OTROS:
Sondaje vesical
Medias de compresión neumática intermitente`,
body: `ACCESO: Incisión de línea media resecando antigua cicatriz.

HALLAZGOS: Eventración {{Localización EHS: M1 subxifoidea | M2 epigástrica | M3 umbilical | M4 infraumbilical | M5 suprapúbica}} con defecto de {{Anchura del defecto (cm)}} cm de anchura y {{Longitud del defecto (cm)}} cm de longitud (clasificación EHS {{Anchura EHS: W1 (< 4 cm) | W2 (4-10 cm) | W3 (> 10 cm)}}). {{Contenido: Contenido epiploico | Contenido intestinal sin signos de isquemia}}.

TÉCNICA:
- Disección del saco herniario separándolo del tejido celular subcutáneo.
- Tallado del orificio herniario y apertura del saco realizando liberación de adherencias viscerales.
- Incisión longitudinal bilateral sobre la aponeurosis posterior del músculo recto, junto a la línea alba.
- Disección del espacio retromuscular {{Extensión de la disección: desde los ligamentos de Cooper hasta el espacio subxifoideo | sobrepasando ampliamente el defecto}} hasta la línea semilunar, identificando y preservando los paquetes neurovasculares intercostales y los vasos epigástricos.
[[- Liberación del músculo transverso (TAR) {{Lado TAR: bilateral | derecho | izquierdo}} por imposibilidad de cierre sin tensión.]]
- Cierre del colgajo aponeurótico posterior con 2 suturas continuas de Monomax 1.
- Colocación de una malla de polipropileno ({{Malla (modelo y medida)}}) en espacio retromuscular recortada a unas dimensiones de {{Dimensiones finales (cm)}} cm aproximadamente, con solapamiento de al menos 5 cm sobre el defecto. {{Fijación de la malla: Fijación con puntos de Prolene 2/0 a la aponeurosis posterior | Sin fijación | Fijación con adhesivo}}.

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: 2 drenajes de Redón en espacios retromuscular y subcutáneo fijados a piel con seda 1 | 1 drenaje de Redón retromuscular fijado a piel con seda 1 | No}}.

CIERRE:
- {{Aponeurosis anterior: Cierre de la aponeurosis anterior con 2 suturas continuas de Monomax 1 | Imposibilidad para el cierre de la aponeurosis anterior, por lo que se aproxima hacia la línea media fijándola a la malla con 2 suturas continuas de Monomax 1}}.
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de laparotomía x1
Separadores de Farabeuf x2
Separadores de Richardson x2
Bisturí eléctrico x1

SUTURAS:
Monomax 1 x4
Prolene 2/0 ?
Novosyn 3/0 x1
Seda 1 x1

DRENAJES:
Redón x2

OTROS:
Malla de polipropileno x1
Adhesivo de fijación ?
Faja abdominal x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '2 semanas', 'las grapas')}

${DRENAJES_CUIDADOS}

${MED}

CUIDADOS PERSONALES:
- Utilice una faja abdominal durante el día en las primeras 4-6 semanas.
- Evite esfuerzos físicos que comprometan la región abdominal (coger peso o subir escaleras, por ejemplo) durante los 2 primeros meses.

${ALARMA([A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', 'Hinchazón o acumulación de líquido bajo la herida.', A_HERIDA])}`
},

'sd-yeyunostomia-laparoscopica': {
prep: `ANESTESIA:
General + Local preincisional (levobupivacaína 0.25% / ropivacaína 0.3%)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Francesa.

OTROS:`,
body: `ACCESO: Trócar de Hasson supraumbilical. ${LAP_ACCESO_NEUMO} Trócares de 5mm en flanco derecho y fosa ilíaca derecha.

HALLAZGOS: Exploración sistemática de la cavidad abdominal (PCI = {{PCI}}). {{Hallazgos: Sin otros hallazgos | Carcinomatosis peritoneal … | Ascitis …}}.

TÉCNICA:
- Identificación del ángulo de Treitz y selección de asa yeyunal a 30 cm del mismo, fijada al peritoneo parietal del cuadrante superior izquierdo con 2 puntos de Monosyn 3/0, comprobando ausencia de tensión.
- Bolsa de tabaco con Monosyn 3/0, introducción del catéter de yeyunostomía ({{Calibre del catéter (Fr): 12 | 14 | 16}} Fr) en dirección distal y cierre.
- Catéter aislado con dos suturas continuas de V-Loc, una a cada lado del asa, fijándola al peritoneo y avanzando desde los puntos previos hasta unirse distalmente.
- Fijación distal del asa al peritoneo con Monosyn 3/0 para evitar acodamiento o vólvulo.
- Verificación de permeabilidad y estanqueidad con instilación y aspiración de suero fisiológico.
- Fijación del catéter a piel con seda 2/0.
[[- Toma de biopsia peritoneal y envío a Anatomía Patológica.]]
${CONVERSION}

${REV_LAP}

CIERRE:
- Aponeurosis supraumbilical: punto colchonero horizontal de Monomax 1.
- Piel: grapas y apósitos compresivos.`,
mat: `TRÓCARES:
Hasson 10-12 mm x1
5 mm x2

ÓPTICA:
Óptica de 30º (10 mm) x1

INSTRUMENTAL:
Pinzas de agarre atraumáticas de 5 mm x2
Portaagujas laparoscópico x1

SUTURAS:
Monosyn 3/0 x2
V-Loc x2
Monomax 1 x1
Seda 2/0 x1

OTROS:
Kit de yeyunostomía (12-16 Fr) x1
Jeringa de 50 ml x1
Grapadora de piel x1`,
recs: `${HERIDAS(2, '10 días', 'las grapas')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Si tiene dolor, tome paracetamol 650mg 1 sobre cada 8h (desayuno, comida y cena). Si es insuficiente, altérnelo con ibuprofeno 400mg 1 sobre cada 8h (almuerzo y merienda).

CUIDADOS DEL CATÉTER:
- Puede iniciarse la nutrición enteral entre las 6–24 horas posteriores, comenzando con volúmenes bajos y progresivos.
- Lave el catéter con 20 ml de suero fisiológico después de cada uso o al menos una vez al día para evitar obstrucciones.
- Evite tracciones o torsiones del catéter. No retire los puntos de fijación a la piel.

CUIDADOS PERSONALES:
${ESFUERZO_ABD}

${ALARMA([A_FIEBRE, 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Enrojecimiento, secreción purulenta o mal olor alrededor del catéter.', 'Salida accidental del catéter, fuga de alimentación o dificultad para la perfusión.', 'Vómitos persistentes, distensión abdominal o diarrea abundante.'])}`
},

/* ============================ CEM ============================ */

'sd-tumorectomia-mamaria-bsgc-vaciamiento-axilar': {
prep: `ANESTESIA:
General ± bloqueo PECS

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazo homolateral en abducción a 90º.

OTROS:
Marcaje cutáneo preoperatorio
Inyección del radiotrazador para BSGC
Arpón / semilla magnética de localización (si lesión no palpable)`,
body: `HALLAZGOS: Lesión {{Lesión: palpable | no palpable marcada con arpón | no palpable marcada con semilla magnética}} en {{Localización: cuadrante superoexterno | cuadrante superointerno | cuadrante inferoexterno | cuadrante inferointerno | región retroareolar | unión de cuadrantes …}} de la mama {{Mama: derecha | izquierda}}.

TUMORECTOMÍA MAMARIA:
- Incisión {{Incisión: periareolar | radial | circular | en surco submamario}} en mama {{Mama: derecha | izquierda}}.
- {{Exéresis: Localización de la tumoración, extirpación con margen macroscópico de tejido sano | Localización del arpón y extirpación del tejido mamario marcado con márgenes de seguridad | Localización de la semilla magnética con sonda (Sentimag) y extirpación del tejido marcado con márgenes de seguridad}}.
- Referenciación de la pieza con seda: {{Referenciación de bordes: hilo corto superior, hilo largo lateral | según protocolo de Anatomía Patológica}}.
[[- Comprobación radiológica de la pieza, confirmando la inclusión de la lesión y del marcador.]]
[[- Ampliación del margen {{Margen ampliado: superior | inferior | medial | lateral | profundo | anterior}}.]]
- Remisión de la pieza a Anatomía Patológica para estudio diferido.
- Marcaje del lecho con clips.
- Revisión de la hemostasia.
- Remodelación glandular con puntos de Novosyn 3/0.
- Cierre: aproximación del tejido subcutáneo con puntos de Novosyn 3/0 y sutura intradérmica de Monoderm 3/0. Apósito compresivo.

[[BSGC / VACIAMIENTO AXILAR:
- Incisión paralela a pliegue axilar ipsilateral.
- Localización del ganglio centinela mediante sonda gamma ({{Ganglios centinela (n.º)}} ganglio/s), extirpándose y remitiéndose a estudio {{Estudio del ganglio: extemporáneo (OSNA) | diferido}}, con resultado {{Ganglio centinela: negativo | de afectación tumoral macroscópica | de afectación tumoral microscópica (… copias)}}.
]]
[[- Linfadenectomía axilar de los niveles I y II de Berg respetando la vena axilar, el pedículo toracodorsal y el nervio torácico largo.]]
[[- Drenaje de Jackson-Pratt axilar fijado a piel con seda 1.]]
[[- Revisión de la hemostasia. Aproximación del tejido subcutáneo con puntos de Novosyn 3/0 y cierre con sutura intradérmica de Monoderm 3/0. Apósito compresivo.
]]`,
mat: `INSTRUMENTAL:
Caja de cirugía de mama x1
Separadores de Farabeuf x2
Bisturí eléctrico x1
Sonda gamma ?
Sonda magnética (Sentimag) ?

GRAPADORAS Y CLIPS:
Clips de titanio para el lecho x1

SUTURAS:
Seda 2/0 para referenciar x1
Novosyn 3/0 x2
Monoderm 3/0 x1
Seda 1 ?

DRENAJES:
Jackson-Pratt ?

OTROS:
Sujetador deportivo x1
Tiras adhesivas x1`,
recs: `CUIDADOS DE LAS HERIDAS:
- Mantenga el apósito compresivo 24 horas. Posteriormente utilice un sujetador deportivo (alta sujeción) día y noche durante 4 semanas.
- Mantenga las heridas limpias y secas. Puede ducharse diariamente y lavarlas con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre las mismas. Puede dejarlas descubiertas o taparlas con apósitos si manchan la ropa o molestan al roce.
- Las tiras adhesivas caerán solas o pueden ser retiradas a partir de la 1ª semana.

[[${DRENAJES_CUIDADOS}

]]MEDICACIÓN:
- Continúe con su medicación domiciliaria habitual.
${ANALG}

[[CUIDADOS DEL BRAZO:
- Movilice el brazo con normalidad para las actividades cotidianas y realice los ejercicios de rehabilitación indicados.
- Evite cargar peso con el brazo del lado operado durante las primeras semanas.

]]${ALARMA([A_FIEBRE, 'Hinchazón, endurecimiento o dolor progresivo de la mama o de la axila.', A_HERIDA])}`
},

'sd-mastectomia-simple-radical-modificada': {
prep: `ANESTESIA:
General ± bloqueo PECS

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazo homolateral en abducción a 90º.

OTROS:
Marcaje cutáneo preoperatorio
Inyección del radiotrazador para BSGC (si procede)`,
body: `HALLAZGOS: {{Hallazgos: Carcinoma de mama … | Lesión … en mama}} {{Mama: derecha | izquierda}}.

TÉCNICA:
- Incisión elíptica de Stewart en mama {{Mama: derecha | izquierda}} incluyendo el complejo areola-pezón[[ y la cicatriz de biopsia previa]].
- Disección de colgajos cutáneos en el plano de la fascia superficial hasta clavícula, esternón, surco submamario y borde anterior del dorsal ancho.
- Extirpación de todo el tejido glandular mamario incluyendo la aponeurosis del músculo pectoral mayor.
- Referenciación de la pieza con seda y remisión a Anatomía Patológica.
[[- Localización del ganglio centinela en nivel I mediante sonda gamma, extirpándose y remitiéndose a estudio extemporáneo, con resultado {{Ganglio centinela: negativo | de afectación tumoral macroscópica | de afectación tumoral microscópica (… copias)}}.]]
[[- Linfadenectomía axilar de los niveles I y II de Berg respetando la vena axilar, el pedículo toracodorsal y el nervio torácico largo.]]

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: Drenaje de Redón medial fijado a piel con seda 1 | Drenajes de Redón medial y axilar fijados a piel con seda 1 | No}}.

CIERRE:
- Aproximación del tejido subcutáneo con puntos de Novosyn 3/0 y cierre con sutura intradérmica de Monoderm 3/0.
- Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de mama x1
Separadores de Farabeuf x2
Bisturí eléctrico x1
Sonda gamma ?

SUTURAS:
Seda 2/0 para referenciar x1
Novosyn 3/0 x2
Monoderm 3/0 x1
Seda 1 x1

DRENAJES:
Redón x2

OTROS:
Sujetador deportivo / vendaje compresivo x1`,
recs: `CUIDADOS DE LAS HERIDAS:
- Mantenga el apósito compresivo 24 horas. Posteriormente utilice un sujetador deportivo (alta sujeción) o una prenda compresiva.
- Mantenga las heridas limpias y secas. Puede ducharse diariamente y lavarlas con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre las mismas. Puede dejarlas descubiertas o taparlas con apósitos si manchan la ropa o molestan al roce.

${DRENAJES_CUIDADOS}

MEDICACIÓN:
- Continúe con su medicación domiciliaria habitual.
${ANALG}

CUIDADOS DEL BRAZO:
- Movilice el brazo con normalidad para las actividades cotidianas y realice los ejercicios de rehabilitación indicados.
- Evite cargar peso con el brazo del lado operado durante las primeras semanas.

${ALARMA([A_FIEBRE, 'Hinchazón, endurecimiento o dolor progresivo del tórax o de la axila.', 'Coloración oscura de la piel de la herida.', A_HERIDA])}`
},

'sd-mastectomia-subcutanea-ginecomastia': {
prep: `ANESTESIA:
General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazos en abducción.

OTROS:
Marcaje cutáneo preoperatorio de la ginecomastia`,
body: `HALLAZGOS: Ginecomastia {{Lado: derecha | izquierda | bilateral}} grado {{Grado de Simon: I | IIa | IIb | III}}.

TÉCNICA:
- Incisión periareolar inferior (semicircular) en mama {{Mama: derecha | izquierda | derecha e izquierda}}.
[[- Infiltración tumescente y liposucción periférica para remodelar el contorno.]]
- Extirpación del tejido glandular mamario conservando una pequeña pastilla retroareolar (aprox. 1 cm) para evitar la retracción del complejo areola-pezón.
- Remisión del tejido a Anatomía Patológica.
- Remodelación del tejido subcutáneo con puntos de Novosyn 3/0.

${REV_ABIERTA}

DRENAJES: {{Drenajes: No | Drenaje de Redón fijado a piel con seda 1}}.

CIERRE:
- Aproximación del tejido subcutáneo con puntos de Novosyn 3/0 y cierre con sutura intradérmica de Monoderm 3/0.
- Apósito y vendaje compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de mama x1
Separadores de Farabeuf x2
Bisturí eléctrico x1
Cánulas de liposucción ?

SUTURAS:
Novosyn 3/0 x1
Monoderm 3/0 x1
Seda 1 ?

DRENAJES:
Redón ?

OTROS:
Faja / chaleco compresivo x1`,
recs: `CUIDADOS DE LA HERIDA:
- Mantenga el vendaje compresivo 24-48 horas. Posteriormente utilice una prenda compresiva (chaleco) día y noche durante 4 semanas.
- Mantenga la herida limpia y seca. Puede ducharse diariamente y lavarla con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre la misma. Puede dejarla descubierta o taparla con un apósito si mancha la ropa o molesta al roce.
- Las tiras adhesivas caerán solas o pueden ser retiradas a partir de la 1ª semana.

MEDICACIÓN:
- Continúe con su medicación domiciliaria habitual.
${ANALG}

CUIDADOS PERSONALES:
- Evite el ejercicio físico intenso con los brazos y el pectoral durante 3-4 semanas.

${ALARMA([A_FIEBRE, 'Hinchazón, endurecimiento o dolor progresivo del pecho (posible hematoma).', A_HERIDA1])}`
},

'sd-fistulectomia-mamaria': {
prep: `ANESTESIA:
General / Local + sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Brazo homolateral en abducción.

OTROS:`,
body: `HALLAZGOS: Fístula mamaria periareolar (absceso subareolar recurrente) en mama {{Mama: derecha | izquierda}}, con orificio externo en {{Localización del orificio: … horas}}.

TÉCNICA:
- Tutorización con estilete del trayecto fistuloso hasta el conducto galactóforo afecto[[ y tinción con azul de metileno]].
- Incisión lanceolada incluyendo el orificio periareolar y el trayecto hasta el pezón.
- Exéresis en bloque del trayecto fistuloso y del conducto galactóforo afecto[[ (escisión de conductos centrales retroareolares)]].
- Remisión de la pieza a Anatomía Patológica[[ y toma de muestra para cultivo]].
- Reconstrucción glandular con puntos de Novosyn 3/0[[ y eversión del pezón]].

${REV_ABIERTA}

CIERRE:
- {{Cierre: Aproximación de la piel con puntos de Novosyn 3/0 y cierre con sutura intradérmica de Monoderm 3/0 | Herida abierta para cierre por segunda intención}}.
- Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía de mama x1
Estilete x1
Bisturí eléctrico x1

SUTURAS:
Novosyn 3/0 x1
Monoderm 3/0 x1

OTROS:
Azul de metileno ?
Torunda para cultivo ?`,
recs: `CUIDADOS DE LA HERIDA:
- Mantenga el apósito compresivo 24 horas. Posteriormente utilice un sujetador deportivo (alta sujeción).
- Mantenga la herida limpia y seca. Puede ducharse diariamente y lavarla con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre la misma. Puede dejarla descubierta o taparla con un apósito si mancha la ropa o molesta al roce.
- Las tiras adhesivas caerán solas o pueden ser retiradas a partir de la 1ª semana.

MEDICACIÓN:
- Continúe con su medicación domiciliaria habitual.
${ANALG}

CUIDADOS PERSONALES:
- El tabaco favorece la recurrencia de esta enfermedad. Se recomienda abandonar su consumo.

${ALARMA([A_FIEBRE, 'Hinchazón, endurecimiento o dolor progresivo de la mama.', A_HERIDA1])}`
},

/* ============================ General ============================ */

'sd-amputacion-supracondilea': {
prep: `ANESTESIA:
Raquídea / General ± bloqueo nervioso periférico (femoral-ciático)

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}
Infección o necrosis del miembro: tratamiento antibiótico ya iniciado

POSICIÓN:
Decúbito supino. Elevación del muslo sobre un rodillo.

OTROS:
Isquemia con manguito neumático (si no hay contraindicación vascular)`,
body: `HALLAZGOS: Miembro inferior {{Lado: derecho | izquierdo}} con {{Indicación: isquemia crónica no revascularizable | gangrena húmeda | gangrena seca | infección grave del pie | traumatismo}}. Nivel de amputación supracondílea con tejidos {{Tejidos: bien vascularizados | con sangrado escaso}} en el nivel de sección.

TÉCNICA:
- Incisión en boca de pez a 10 cm de la línea articular de la rodilla, con colgajos anterior y posterior de longitud similar.
- Sección de los planos musculares y desinserción hacia proximal con electrocauterio.
- Identificación, doble ligadura con seda 1 (transfixiante en la arteria) y sección de los vasos femorales superficiales.
- Identificación del nervio ciático, tracción suave, ligadura y sección alta para que se retraiga en la musculatura[[ con infiltración de anestésico local]].
- Sección del fémur con sierra {{Sierra: Gigli | oscilante}} unos centímetros por encima del nivel cutáneo, limado de sus bordes y aplicación de cera.
- Remisión de la pieza a Anatomía Patológica.

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: No | Drenaje de Redón fijado a piel con seda 1}}.

CIERRE:
- Mioplastia: aproximación de los colgajos musculares y aponeurosis sobre el muñón óseo con puntos sueltos de Novosyn 3/0.
- Piel: puntos colchoneros horizontales de Prolene 2/0, sin tensión.
- Vendaje almohadillado no compresivo del muñón.`,
mat: `INSTRUMENTAL:
Caja de amputación x1
Sierra de Gigli / oscilante x1
Lima de hueso x1
Bisturí eléctrico x1
Manguito de isquemia ?

SUTURAS:
Seda 1 x2
Novosyn 3/0 x2
Prolene 2/0 x1

DRENAJES:
Redón ?

OTROS:
Cera de hueso x1
Vendaje almohadillado x1`,
recs: `CUIDADOS DE LA HERIDA:
- Mantenga la herida limpia y seca. Puede ducharse diariamente y lavarla con agua y jabón (sin frotar), pero evite bañarse hasta su cicatrización completa.
- Aplique clorhexidina (Cristalmina) diariamente sobre la misma. Puede dejarla descubierta o taparla con un apósito si mancha la ropa o molesta al roce.
- Solicite cita con enfermería de su Centro de Salud en 3 semanas (desde la intervención) para valorar la retirada de los puntos.

CUIDADOS DEL MUÑÓN:
- Evite colocar almohadas bajo el muñón y mantenga la cadera extendida para prevenir contracturas.
- Siga las indicaciones de Rehabilitación para el vendaje del muñón y la futura adaptación de prótesis.
- Es habitual notar sensaciones en el miembro amputado (miembro fantasma), que suelen mejorar con el tiempo.

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
${ANALG}
[[- Enoxaparina {{Dosis de enoxaparina: 40 mg | 60 mg}} 1 pinchazo cada día durante {{Días de enoxaparina}} días.]]

${ALARMA([A_FIEBRE, 'Sangrado abundante por la herida.', 'Coloración oscura, mal olor o apertura de la herida.', 'Dolor intenso en el muñón que no cede con la analgesia.'])}`
},

'sd-biopsia-ungueal-lamina-lecho-matriz-o-unidad-completa': {
prep: `ANESTESIA:
Local (bloqueo digital con mepivacaína 2%)

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Decúbito supino.

OTROS:
Torniquete digital`,
body: `HALLAZGOS: Lesión ungueal en el {{Dedo (n.º)}}º dedo {{Extremidad: del pie | de la mano}} {{Lateralidad: derecho/a | izquierdo/a}}: {{Hallazgos ungueales: melanoniquia longitudinal | distrofia ungueal | tumoración subungueal | onicólisis …}}.

TÉCNICA:
- Bloqueo digital con mepivacaína 2%.
- Torniquete digital.
- {{Tipo de biopsia: Lámina ungueal: biopsia de lámina ungueal con punch. | Lecho ungueal: doble punch de lámina y lecho ungueales. | Matriz ungueal: doble incisión y retracción del pliegue ungueal proximal. Biopsia de matriz ungueal con punch de 3 mm, orientada longitudinalmente. | Matriz ungueal: biopsia tangencial (shave) de la matriz tras avulsión parcial de la lámina. | Unidad ungueal completa: incisión fusiforme y resección longitudinal englobando matriz, pliegue ungueal, lecho e hiponiquio. Sutura del pliegue ungueal lateral al lecho con puntos de Monosyn 5/0.}}
- Remisión de la biopsia a Anatomía Patológica para estudio diferido.
- Hemostasia del lecho.
- Retirada del torniquete comprobando la revascularización del dedo.

CIERRE:
[[- Reposición de la lámina ungueal como apósito biológico.]]
- Vendaje compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Punch de 3 mm x1
Punch de 4 mm ?
Elevador ungueal x1
Torniquete digital x1

SUTURAS:
Monosyn 5/0 ?

OTROS:
Mepivacaína 2% x1
Bote de Anatomía Patológica x1
Vendaje compresivo x1`,
recs: `CUIDADOS DE LAS HERIDAS:
- Mantenga el vendaje compresivo durante 48 horas y el miembro elevado en reposo.
- Tras su retirada, mantenga la herida limpia y seca y aplique clorhexidina (Cristalmina) diariamente sobre la misma.
- Tras cada cura, es recomendable cubrirla con un apósito o un vendaje no compresivo durante la 1ª semana para evitar su contaminación.
[[- Solicite cita con enfermería de su Centro de Salud en 7 días (desde la intervención) para valorar la retirada de los puntos.]]

${MED}

${ALARMA([A_FIEBRE, 'Dolor intenso o creciente que no cede con la analgesia.', 'Coloración pálida, azulada u oscura del dedo.', 'Enrojecimiento, calor o supuración de la herida.'])}`
},

'sd-onicectomia-total-parcial': {
prep: `ANESTESIA:
Local (bloqueo digital con mepivacaína 2%)

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Decúbito supino.

OTROS:
Torniquete digital`,
body: `HALLAZGOS: {{Hallazgos: Uña incarnata | Onicogrifosis | Onicomicosis distrófica | Uña dolorosa recurrente}} en el {{Dedo (n.º)}}º dedo {{Extremidad: del pie | de la mano}} {{Lateralidad: derecho/a | izquierdo/a}}[[ {{Granuloma: con granuloma periungueal | con infección periungueal}}]].

TÉCNICA:
- Bloqueo digital con mepivacaína 2%.
- Torniquete digital.
- Onicectomía {{Onicectomía: total | parcial del borde lateral | parcial del borde medial | parcial de ambos bordes}}.
[[- Matricectomía {{Matricectomía: química con fenol al 88% durante 3 aplicaciones de 30 segundos | quirúrgica (resección de la matriz germinal del borde)}} para evitar la recidiva.]]
[[- Exéresis del granuloma periungueal.]]
- Hemostasia del lecho.
- Retirada del torniquete comprobando la revascularización del dedo.

CIERRE:
- Vendaje compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Elevador ungueal x1
Tijera de uñas / alicate x1
Cucharilla de legrado ?
Torniquete digital x1

OTROS:
Mepivacaína 2% x1
Fenol al 88% ?
Vendaje compresivo x1`,
recs: `CUIDADOS DE LAS HERIDAS:
- Mantenga el vendaje compresivo durante 48 horas y el pie elevado en reposo.
- Tras su retirada, mantenga la herida limpia y seca y aplique clorhexidina (Cristalmina) diariamente sobre la misma.
- Tras cada cura, es recomendable cubrirla con un apósito o un vendaje no compresivo durante la 1ª semana para evitar su contaminación.
- Utilice calzado ancho y abierto durante las primeras semanas.

${MED}

CONTROL DEL CRECIMIENTO UNGUEAL POR PODÓLOGO.

${ALARMA([A_FIEBRE, 'Dolor intenso o creciente que no cede con la analgesia.', 'Enrojecimiento, calor o supuración de la herida.'])}`
},

'sd-exeresis-de-quiste-epidermoide-lipoma-alta-ambulatoria': {
prep: `ANESTESIA:
Local (mepivacaína 2%)

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Según la localización de la lesión

OTROS:`,
body: `HALLAZGOS: {{Lesión: Quiste epidermoide | Lipoma | Quiste triquilemal | Lesión subcutánea …}} de {{Tamaño (cm)}} cm en {{Localización}}, {{Inflamación: sin signos inflamatorios | con signos inflamatorios}}.

TÉCNICA:
- Infiltración con anestesia local (mepivacaína 2%).
- {{Incisión: Incisión elíptica incluyendo el punctum del quiste | Incisión lineal sobre la lesión siguiendo las líneas de tensión cutánea}}.
- Exéresis completa de la lesión {{Exéresis: con cápsula íntegra | por disección roma}}.
- Remisión de la pieza a Anatomía Patológica.
- Revisión de la hemostasia.

CIERRE:
[[- Tejido celular subcutáneo: puntos de Novosyn 3/0.]]
- Piel: puntos colchoneros verticales de {{Sutura: nylon 3/0 | seda 3/0 | nylon 4/0}}.
- Apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Bisturí frío x1
Bisturí eléctrico ?

SUTURAS:
Nylon 3/0 x1
Seda 3/0 ?
Novosyn 3/0 ?

OTROS:
Mepivacaína 2% x1
Bote de Anatomía Patológica x1`,
recs: `${HERIDAS(1, '12 días', 'los puntos')}

MEDICACIÓN:
- Puede continuar con su medicación domiciliaria habitual.
- Si tiene dolor, tome paracetamol 650mg 1 comprimido cada 8h (desayuno, comida y cena). Si es insuficiente, altérnelo con ibuprofeno 400 mg 1 comprimido cada 8h (almuerzo y merienda).

CUIDADOS PERSONALES:
- Evite esfuerzos físicos intensos que aumenten la tensión en la zona intervenida durante 2 semanas.

${ALARMA([A_FIEBRE, 'Hinchazón progresiva de la zona (posible hematoma).', A_HERIDA1])}`
},

'sd-esplenectomia-abierta': {
prep: `ANESTESIA:
General ± catéter epidural

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino. Elevación del flanco izquierdo con rodillo.

OTROS:
Sondaje vesical
Sonda nasogástrica
Reserva de hemoderivados
Vacunación frente a gérmenes encapsulados (cirugía programada: al menos 2 semanas antes)`,
body: `ACCESO: Laparotomía {{Laparotomía: media supraumbilical | media suprainfraumbilical | subcostal izquierda}}.

HALLAZGOS: {{Indicación: Traumatismo esplénico | Púrpura trombocitopénica inmune | Esplenomegalia … | Lesión esplénica …}}. {{Hallazgos esplénicos: Bazo de tamaño normal | Esplenomegalia | Rotura esplénica grado … (AAST)}}. [[Hemoperitoneo de {{Hemoperitoneo (ml)}} ml.]]

TÉCNICA:
[[- Aspirado del hemoperitoneo y empaquetamiento del cuadrante superior izquierdo.]]
- Compresión y rotación anterior del bazo.
- Sección de adherencias peritoneales inferiores (ligamentos frenocólico y esplenocólico).
- Exposición y sección del peritoneo parietal posterior (ligamento esplenorrenal), movilización del bazo y del cuerpo-cola pancreático hacia la línea media y colocación de compresas en celda esplénica.
- Sellado-sección del ligamento gastroesplénico y de los vasos cortos (LigaSure Maryland), sin lesionar la curvatura mayor gástrica.
- Disección del hilio esplénico, identificando y respetando la cola del páncreas, y {{Hilio: sellado-sección de los vasos esplénicos (LigaSure Maryland) | ligadura y sección por separado de la arteria y de la vena esplénicas con seda 1 | sección del hilio con grapadora lineal vascular}}.
- Extracción de la pieza y remisión a Anatomía Patológica para estudio diferido.
[[- Búsqueda y exéresis de bazos accesorios (indicación hematológica).]]
- Lavado de cavidad abdominal con suero fisiológico.

${REV_ABIERTA}

${PERDIDA}

DRENAJES: {{Drenajes: Penrose en celda esplénica fijado a piel con seda 1 | Jackson-Pratt en celda esplénica fijado a piel con seda 1 | No}}.

CIERRE:
- Aponeurosis: 2 suturas continuas de Monomax 1.
- Piel: grapas y apósito compresivo.`,
mat: `INSTRUMENTAL:
Caja de laparotomía x1
Separador autoestático x1
LigaSure Maryland x1
Cánula de aspiración x1

GRAPADORAS Y CLIPS:
Grapadora lineal vascular ?

SUTURAS:
Seda 1 x2
Monomax 1 x2

DRENAJES:
Penrose ?
Jackson-Pratt ?

OTROS:
Compresas x1
Hemostático tópico ?
Grapadora de piel x1`,
recs: `${HERIDAS(2, '2 semanas', 'las grapas')}

${MED}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}

VACUNACIÓN Y RIESGO DE INFECCIÓN:
- Tras extirpar el bazo tiene un riesgo aumentado de infecciones graves. Complete las vacunas frente a neumococo, meningococo, Haemophilus influenzae tipo b y la vacuna anual de la gripe según le indiquen.
- Informe siempre de que no tiene bazo a cualquier profesional sanitario que le atienda.

${ALARMA(['Fiebre superior a 38 ºC, aunque sea el único síntoma: consulte de forma inmediata.', 'Dolor abdominal que aumenta o no cede con la analgesia.', 'Vómitos persistentes o distensión abdominal.', A_HERIDA])}`
},

'sd-implantacion-de-cateter-peritoneal': {
prep: `ANESTESIA:
Local (mepivacaína 2%) + sedación / General

PROFILAXIS ANTIBIÓTICA:
${PROF_LIMPIA}

POSICIÓN:
Decúbito supino.

OTROS:
Vaciamiento vesical
Marcaje preoperatorio del orificio de salida`,
body: `ACCESO: Incisión pararrectal {{Lado: izquierda | derecha}} infraumbilical previa infiltración con anestesia local (mepivacaína 2%).

TÉCNICA:
- Disección del tejido celular subcutáneo, apertura de la vaina anterior del recto abdominal, dilaceración muscular y apertura de la vaina posterior y peritoneo.
- Introducción del catéter ({{Catéter: Tenckhoff recto de 2 cuffs | Tenckhoff en espiral de 2 cuffs}}) sobre guía dirigido hacia el fondo de saco de Douglas, extracción de la guía y comprobación de su adecuado funcionamiento (entrada y salida libres de suero).
- Cierre de la vaina posterior y peritoneo a nivel del primer cuff mediante una bolsa de tabaco de Novosyn 3/0.
- Aproximación de fibras musculares con 2 puntos colchoneros horizontales de Novosyn 3/0.
- Cierre de la vaina anterior con sutura continua de Monomax 1.
- Tunelización subcutánea del catéter hasta el segundo cuff (situado a unos 2 cm del orificio de salida) y salida por piel en dirección caudal, ajustada al calibre del catéter.
- Comprobación final de la permeabilidad y sellado del catéter con suero heparinizado.

${REV_ABIERTA}

CIERRE:
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas. Apósito. Sin puntos de sutura en el orificio de salida.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Separadores de Farabeuf x2
Tunelizador x1

SUTURAS:
Novosyn 3/0 x2
Monomax 1 x1

OTROS:
Catéter de Tenckhoff de 2 cuffs x1
Mepivacaína 2% x1
Suero heparinizado x1
Grapadora de piel x1`,
recs: `${HERIDAS(1, '2 semanas', 'las grapas')}

CUIDADOS DEL CATÉTER:
- No retire ni moje el apósito del orificio de salida hasta que se lo indique la Unidad de Diálisis Peritoneal.
- Mantenga el catéter inmovilizado y evite tracciones.
- Siga las indicaciones de la Unidad de Diálisis Peritoneal para el inicio de la diálisis y los lavados del catéter.

${MED}

CUIDADOS PERSONALES:
${ESFUERZO_ABD}
- Evite el estreñimiento y los esfuerzos al defecar.

${ALARMA([A_FIEBRE, 'Dolor abdominal o líquido de diálisis turbio.', 'Enrojecimiento, supuración o dolor en el orificio de salida del catéter.', 'Fuga de líquido por la herida o el orificio de salida.', 'Salida o desplazamiento del catéter.'])}`
},

'sd-implantacion-de-reservorio-via-percutanea': {
prep: `ANESTESIA:
Local (mepivacaína 2%) ± sedación

PROFILAXIS ANTIBIÓTICA:
${PROF_NO}

POSICIÓN:
Decúbito supino con ligero Trendelenburg. Brazo derecho pegado, brazo izquierdo abierto y cabeza girada hacia el lado izquierdo.

OTROS:
Radioscopia / ecógrafo
Comprobación de coagulación y plaquetas`,
body: `ACCESO: Punción {{Vena: subclavia derecha | yugular interna derecha | subclavia izquierda | yugular interna izquierda}} {{Guía de la punción: mediante referencias anatómicas | ecoguiada}}.

TÉCNICA:
- Infiltración con anestesia local (mepivacaína 2%) de la región infraclavicular y pectoral, así como del trayecto de la punción.
- Punción venosa aspirando hasta obtener reflujo venoso {{Intentos: al primer intento | tras … intentos}}.
- Extracción de la jeringa e introducción de la guía a través de la aguja realizando comprobación con radioscopia.
- Retirada de la aguja, incisión sobre la guía e inserción del dilatador y la vaina introductora.
- Retirada del dilatador de vasos y la guía para introducir el catéter (purgado con suero heparinizado) a través de la vaina. Comprobación mediante radioscopia de la punta del catéter en la unión cavoauricular, extracción de la vaina pelable y tunelización del catéter.
- Incisión sobre la región infraclavicular anestesiada y disección de un bolsillo subcutáneo para colocación del reservorio (Celsite Safety). Ensamblaje a catéter tunelizado, comprobando que no se acoda, y fijación a fascia subyacente con 2 puntos de Novosyn 2/0.
- Comprobación de su permeabilidad (aspiración de sangre y lavado) y sellado con suero heparinizado.
[[- Radiografía de tórax de control descartando neumotórax.]]

${REV_ABIERTA}

CIERRE:
- Tejido celular subcutáneo: puntos de Novosyn 3/0.
- Piel: grapas. Apósito.`,
mat: `INSTRUMENTAL:
Caja de cirugía menor x1
Separadores de Farabeuf x2
Sonda de ecografía con funda estéril ?

SUTURAS:
Novosyn 2/0 x1
Novosyn 3/0 x1

OTROS:
Reservorio (Celsite Safety) con kit de introducción x1
Aguja Huber x1
Mepivacaína 2% x1
Suero heparinizado x1
Grapadora de piel x1`,
recs: `${HERIDAS(1, '2 semanas', 'las grapas')}

CUIDADOS DEL RESERVORIO:
- El reservorio puede utilizarse desde el mismo día de la implantación.
- Debe lavarse con suero (y heparinizarse si así se indica) tras cada uso y al menos una vez cada 4-8 semanas si no se utiliza.

${MED}

CUIDADOS PERSONALES:
- Evite presión o golpes sobre el reservorio. Absténgase de realizar esfuerzos intensos con el brazo del lado intervenido durante 2 semanas.

${ALARMA([A_FIEBRE, 'Dificultad para respirar o dolor en el pecho.', 'Hinchazón del brazo, del cuello o de la cara del lado del reservorio.', 'Enrojecimiento, hinchazón o supuración sobre el reservorio o la herida.'])}`
}

};

/* huella FNV-1a (32 bits) de prep|body|mat|recs */
export function huella(o) {
  const s = [o.prep || '', o.body || '', o.mat || '', o.recs || ''].join('\u0001');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}

export function aplicarRevision(items, BASE_FP) {
  let n = 0;
  for (const [id, nueva] of Object.entries(REVISION)) {
    const o = items[id];
    if (!o) continue;
    if (BASE_FP[id] && huella(o) !== BASE_FP[id]) continue;   // editada después: no se toca
    Object.assign(o, nueva, { updatedAt: new Date().toISOString() });
    n++;
  }
  return n;
}
