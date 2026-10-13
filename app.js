'use strict';

const copy = {
  es: {
    skip:'Saltar al contenido',brandSub:'Diversidad en Ciencias de la Salud',navProject:'El proyecto',navPartners:'Socios',navActivities:'Encuentros',navResources:'Recursos',navContact:'Contacto',
    heroEyebrow:'UN PROYECTO EUROPEO. UN COMPROMISO COMÚN.',heroTitle:'La diversidad también <em>se aprende.</em>',heroDesc:'Transformar la educación en Ciencias de la Salud para cuidar desde el respeto a la diversidad afectivo-sexual y de género.',discover:'Conoce EqualEdu',explore:'Explora los recursos',fundingSub:'Cooperación para la inclusión<br>en la educación superior',heroSticker:'Aprender juntos.<br>Cuidar mejor.',heroCaption:'Personas, encuentros y nuevas perspectivas.<br>EqualEdu · Praga',photoBadge:'6 países.<br>Una misma visión.',
    statInstitutions:'instituciones europeas',statCountries:'países conectados',statMonths:'meses de cooperación',statPeriod:'1 septiembre 2023 · 30 junio 2026',
    projectKicker:'EL PROYECTO',projectTitle:'Una educación más abierta.<br>Una salud <em>más inclusiva.</em>',projectIntro:'EqualEdu conecta a estudiantes, docentes e instituciones para incorporar la diversidad afectivo-sexual y de género en los entornos universitarios de Ciencias de la Salud.',projectCaption:'La inclusión empieza en nuestros espacios.',objective1Title:'Comprender para transformar',objective1Desc:'Investigar las necesidades formativas y dar visibilidad a la diversidad en la comunidad universitaria.',objective2Title:'Integrar la diversidad en el aula',objective2Desc:'Promover su incorporación en los programas docentes y formar al profesorado y al estudiantado.',objective3Title:'Compartir lo que aprendemos',objective3Desc:'Crear materiales, intercambiar experiencias y acercar buenas prácticas a la educación y al ámbito sanitario.',officialProject:'Ficha oficial del proyecto · Universidad de Málaga',
    partnersKicker:'LA RED EUROPEA',partnersTitle:'Seis instituciones.<br><em>Un horizonte compartido.</em>',partnersDesc:'Una alianza que reúne distintas culturas, disciplinas y experiencias para construir conocimiento en común.',coordinator:'Coordinación',
    activitiesKicker:'SEIS ENCUENTROS EN EUROPA',activitiesTitle:'Seis sedes.<br><em>Aprendizajes compartidos.</em>',activitiesDesc:'Celebramos un encuentro en la sede de cada institución socia: Málaga, Malta, Praga, Lisboa, Roma y Kaunas. Seis etapas de formación, diálogo y cooperación para una educación sanitaria más inclusiva.',eventMore:'Leer sobre el encuentro',eventRecap:'Crónica en Instagram',eventProgramme:'Ver programa · PDF',meetingSocial:'Imágenes, experiencias y reflexiones del proyecto.',meetingReflection:'Reflexiones en LinkedIn',meetingResource:'Encuentro de',meetingReport:'INFORMACIÓN DEL ENCUENTRO',meetingDownload:'Descargar programa',
    galleryTitle:'Una comunidad que aprende junta',galleryHint:'Imágenes de Praga · 2025',galleryTeam:'Nuestra comunidad',galleryWorkshop:'Aprender haciendo',galleryMeeting:'Compartir perspectivas',
    resourcesKicker:'CONOCIMIENTO PARA COMPARTIR',resourcesTitle:'Ideas que se convierten<br><em>en herramientas.</em>',resourcesDesc:'Descubre el manual, consulta los programas de los encuentros y explora la información publicada por las instituciones socias.',filterAll:'Todos',filterMaterials:'Materiales',filterMeetings:'Encuentros',filterProject:'El proyecto',resourceCount:'recursos mostrados',
    contactKicker:'SIGAMOS LA CONVERSACIÓN',contactTitle:'Más perspectivas.<br><em>Más posibilidades.</em>',contactDesc:'¿Quieres conocer los materiales o saber más sobre EqualEdu? Contacta con la coordinación del proyecto.',contactButton:'Escríbenos',coordination:'COORDINACIÓN DEL PROYECTO',coordinatorInstitution:'Universidad de Málaga · España',
    fullTitle:'Inclusión de contenidos sobre diversidad afectivo-sexual y de género en entornos universitarios de Ciencias de la Salud.',privacy:'Información de navegación',backTop:'Volver arriba',privacyDesc:'El contenido de esta página no incorpora analítica ni formularios de recogida de datos. La preferencia de idioma se guarda en tu navegador. Los enlaces externos y el servicio de alojamiento tienen sus propias políticas de privacidad.',privacyContact:'Para consultas sobre los materiales del proyecto: mgsa23@uma.es.',
    openMenu:'Abrir menú',closeMenu:'Cerrar menú',close:'Cerrar',viewPhoto:'Ampliar imagen',navAria:'Navegación principal',languageAria:'Idioma',factsAria:'El proyecto en cifras',journeyAria:'Encuentros del proyecto',filterAria:'Filtrar recursos',
    title:'EqualEdu · Diversidad y educación en Ciencias de la Salud',description:'EqualEdu une a seis instituciones europeas para integrar la diversidad afectivo-sexual y de género en la educación en Ciencias de la Salud.',
    alts:{heroPhoto:'Estudiantes y docentes participan en un taller al aire libre en Praga',projectPhoto:'Escalera con peldaños de colores y las letras LGTBIQ en Málaga',galleryTeam:'Grupo de estudiantes y docentes del proyecto EqualEdu en Praga',galleryWorkshop:'Taller participativo de EqualEdu al aire libre en Praga',galleryMeeting:'Estudiantes y docentes reunidos durante una actividad en Praga'}
  },
  en: {
    skip:'Skip to content',brandSub:'Diversity in Health Sciences',navProject:'The project',navPartners:'Partners',navActivities:'Meetings',navResources:'Resources',navContact:'Contact',
    heroEyebrow:'A EUROPEAN PROJECT. A SHARED COMMITMENT.',heroTitle:'Diversity is something <em>we learn.</em>',heroDesc:'Transforming health sciences education to provide care that respects sexual and gender diversity.',discover:'Discover EqualEdu',explore:'Explore the resources',fundingSub:'Cooperation for inclusion<br>in higher education',heroSticker:'Learn together.<br>Care better.',heroCaption:'People, encounters and new perspectives.<br>EqualEdu · Prague',photoBadge:'6 countries.<br>One shared vision.',
    statInstitutions:'European institutions',statCountries:'connected countries',statMonths:'months of cooperation',statPeriod:'1 September 2023 · 30 June 2026',
    projectKicker:'THE PROJECT',projectTitle:'More open education.<br><em>More inclusive</em> healthcare.',projectIntro:'EqualEdu connects students, educators and institutions to integrate sexual and gender diversity into university health sciences education.',projectCaption:'Inclusion begins in the spaces we share.',objective1Title:'Understand to make a difference',objective1Desc:'Research training needs and raise awareness of diversity within the university community.',objective2Title:'Bring diversity into the classroom',objective2Desc:'Promote its inclusion in teaching programmes and provide training for educators and students.',objective3Title:'Share what we learn',objective3Desc:'Develop materials, exchange experiences and share good practices in education and healthcare.',officialProject:'Official project information · University of Málaga',
    partnersKicker:'THE EUROPEAN NETWORK',partnersTitle:'Six institutions.<br><em>A shared horizon.</em>',partnersDesc:'An alliance bringing different cultures, disciplines and experiences together to build knowledge collaboratively.',coordinator:'Coordinator',
    activitiesKicker:'SIX MEETINGS ACROSS EUROPE',activitiesTitle:'Six hosts.<br><em>Shared learning.</em>',activitiesDesc:'We held a meeting at each partner institution: Málaga, Malta, Prague, Lisbon, Rome and Kaunas. Six stages of training, dialogue and cooperation for more inclusive health sciences education.',eventMore:'Read about the meeting',eventRecap:'Meeting recap on Instagram',eventProgramme:'View programme · PDF',meetingSocial:'Images, experiences and reflections from the project.',meetingReflection:'Reflections on LinkedIn',meetingResource:'Meeting in',meetingReport:'MEETING INFORMATION',meetingDownload:'Download programme',
    galleryTitle:'A community that learns together',galleryHint:'Images from Prague · 2025',galleryTeam:'Our community',galleryWorkshop:'Learning by doing',galleryMeeting:'Sharing perspectives',
    resourcesKicker:'KNOWLEDGE TO SHARE',resourcesTitle:'Turning ideas<br><em>into useful tools.</em>',resourcesDesc:'Discover the manual, browse meeting programmes and explore information published by the partner institutions.',filterAll:'All',filterMaterials:'Materials',filterMeetings:'Meetings',filterProject:'The project',resourceCount:'resources shown',
    contactKicker:'LET’S KEEP THE CONVERSATION GOING',contactTitle:'More perspectives.<br><em>More possibilities.</em>',contactDesc:'Would you like to explore the materials or learn more about EqualEdu? Contact the project coordinator.',contactButton:'Get in touch',coordination:'PROJECT COORDINATION',coordinatorInstitution:'University of Málaga · Spain',
    fullTitle:'Inclusion of content on affective-sexual and gender diversity in health sciences university environments.',privacy:'Browsing information',backTop:'Back to top',privacyDesc:'This page’s content does not include analytics or data collection forms. Your language preference is stored in your browser. External links and the hosting service have their own privacy policies.',privacyContact:'For questions about project materials: mgsa23@uma.es.',
    openMenu:'Open menu',closeMenu:'Close menu',close:'Close',viewPhoto:'Enlarge image',navAria:'Main navigation',languageAria:'Language',factsAria:'Project facts',journeyAria:'Project meetings',filterAria:'Filter resources',
    title:'EqualEdu · Diversity and education in Health Sciences',description:'EqualEdu brings six European institutions together to integrate sexual and gender diversity into health sciences education.',
    alts:{heroPhoto:'Students and educators participate in an outdoor workshop in Prague',projectPhoto:'A staircase with colourful steps and the letters LGTBIQ in Málaga',galleryTeam:'Students and educators of the EqualEdu project together in Prague',galleryWorkshop:'An outdoor participatory EqualEdu workshop in Prague',galleryMeeting:'Students and educators gathered for an activity in Prague'}
  }
};
const richKeys = new Set(['heroTitle','fundingSub','heroSticker','heroCaption','photoBadge','projectTitle','partnersTitle','activitiesTitle','resourcesTitle','contactTitle']);
Object.assign(copy.es, {
  home:'Inicio',selectLanguage:'Elegir idioma',manualMeta:'MANUAL · SOLICITUD POR EMAIL',manualTitle:'Manual EqualEdu',manualDesc:'Orientaciones para integrar diversidad, equidad e inclusión en la educación en Ciencias de la Salud. Contacta con la coordinación para consultar los materiales.',manualAction:'Solicitar el manual',manualSubject:'Solicitud del manual EqualEdu',projectResourceMeta:'INFORMACIÓN INSTITUCIONAL · ES',projectResourceTitle:'El proyecto, en detalle',projectResourceDesc:'Ficha de la Universidad de Málaga con la referencia Erasmus+, el periodo de ejecución, las instituciones socias y la coordinación.',projectResourceAction:'Consultar ficha oficial',programmeMetaSpanish:'PROGRAMA · PDF · ESPAÑOL',programmeMetaEnglish:'PROGRAMA · PDF · INGLÉS',euLogoAlt:'Unión Europea · Erasmus+'
});
Object.assign(copy.en, {
  home:'Home',selectLanguage:'Choose language',manualMeta:'MANUAL · REQUEST BY EMAIL',manualTitle:'EqualEdu Manual',manualDesc:'Guidance on integrating diversity, equity and inclusion into health sciences education. Contact the coordinator to enquire about the materials.',manualAction:'Request the manual',manualSubject:'EqualEdu manual request',projectResourceMeta:'INSTITUTIONAL INFORMATION · ES',projectResourceTitle:'The project in detail',projectResourceDesc:'University of Málaga project page with the Erasmus+ reference, project dates, partner institutions and coordination details.',projectResourceAction:'View official project page',programmeMetaSpanish:'PROGRAMME · PDF · SPANISH',programmeMetaEnglish:'PROGRAMME · PDF · ENGLISH',euLogoAlt:'European Union · Erasmus+'
});
const languageNames={es:'Español',en:'English',it:'Italiano',cs:'Čeština',lt:'Lietuvių',pt:'Português'};
const localeTags={es:'es',en:'en',it:'it',cs:'cs',lt:'lt',pt:'pt-PT'};
const partners = [
  {name:{es:'Universidad de Málaga',en:'University of Málaga'},country:{es:'España',en:'Spain'},city:'Málaga',logo:'uma',url:'https://www.uma.es/',coordinator:true},
  {name:{es:'Sapienza Università di Roma',en:'Sapienza University of Rome'},country:{es:'Italia',en:'Italy'},city:{es:'Roma',en:'Rome'},logo:'sapienza',url:'https://www.uniroma1.it/en'},
  {name:{es:'Kauno Kolegija',en:'Kauno Kolegija'},country:{es:'Lituania',en:'Lithuania'},city:'Kaunas',logo:'kaunas',url:'https://kaunokolegija.lt/english/'},
  {name:{es:'University of Malta',en:'University of Malta'},country:{es:'Malta',en:'Malta'},city:'Msida',logo:'malta',url:'https://www.um.edu.mt/'},
  {name:{es:'Univerzita Karlova',en:'Charles University'},country:{es:'Chequia',en:'Czechia'},city:{es:'Praga',en:'Prague'},logo:'charles',url:'https://cuni.cz/UKEN-1.html'},
  {name:{es:'Politécnico de Lisboa',en:'Polytechnic Institute of Lisbon'},country:{es:'Portugal',en:'Portugal'},city:{es:'Lisboa',en:'Lisbon'},logo:'lisbon',url:'https://www.ipl.pt/'}
];
const events = [
  {id:'malaga',partner:0,host:{es:'Universidad de Málaga',en:'University of Málaga'},city:{es:'Málaga',en:'Málaga'},date:{es:'10–12 diciembre 2024',en:'10–12 December 2024'},title:{es:'Cuidados y comunicación inclusiva',en:'Inclusive care and communication'},description:{es:'Formación sobre cuidados de enfermería en el entorno hospitalario, comunicación inclusiva y aulas seguras. El programa combinó trabajo con estudiantes y docentes, reflexión sobre espacios inclusivos y actividades con entidades comunitarias.',en:'Training on nursing care in hospital settings, inclusive communication and safe classrooms. The programme combined student and educator workshops, reflection on inclusive spaces and activities with community organisations.'},hostUrl:'https://www.uma.es/facultad-de-ciencias-de-la-salud/',url:'https://www.instagram.com/equaledueu/reel/DEFI6ELOLoi/',recap:true,programme:'https://www.uma.es/media/files/Programa_EQUALEDU_detallado.pdf'},
  {"id":"malta","partner":3,"host":{"es":"University of Malta · Facultad de Ciencias de la Salud","en":"University of Malta · Faculty of Health Sciences"},"hostUrl":"https://www.um.edu.mt/healthsciences/","city":{"es":"Malta","en":"Malta"},"date":{"es":"20–21 marzo 2025","en":"20–21 March 2025"},"title":{"es":"Diversidad: la perspectiva maltesa","en":"Diversity: the Maltese perspective"},"description":{"es":"La segunda conferencia EqualEdu fue acogida por la Facultad de Ciencias de la Salud de la University of Malta. Estudiantes y equipos de los socios aprendieron de docentes, doctorandos, profesionales sanitarios, representantes políticos y activistas locales. Las dos jornadas abordaron las necesidades de salud de la comunidad LGBTIQ+, el género y las sexualidades, los sesgos inconscientes y la discriminación, los derechos en Malta y el envejecimiento.","en":"The second EqualEdu conference was hosted by the University of Malta’s Faculty of Health Sciences. Students and partner teams learned from local lecturers, doctoral students, healthcare professionals, policymakers and activists. The two days explored the LGBTIQ+ community’s healthcare needs, gender and sexualities, unconscious bias and discrimination, rights in Malta and ageing."},"url":"https://www.instagram.com/equaledueu/reel/DKbsmxgsjej/","recap":true},
  {"id":"praga","partner":4,"host":{"es":"Charles University · Facultad de Educación Física y Deporte","en":"Charles University · Faculty of Physical Education and Sport"},"hostUrl":"https://www.ftvs.cuni.cz/en/international/international-projects/erasmus-ka2/equaledu","city":{"es":"Praga","en":"Prague"},"date":{"es":"17–19 septiembre 2025","en":"17–19 September 2025"},"title":{"es":"Fisioterapia y cuidados inclusivos","en":"Physiotherapy and inclusive care"},"description":{"es":"Charles University acogió el tercer encuentro en su Facultad de Educación Física y Deporte, con la participación del Departamento de Fisioterapia. Ejercicios prácticos, simulaciones de comunicación con pacientes y debates abordaron los cuidados inclusivos y los derechos LGBTIQ+. El programa trató también la fisioterapia tras cirugía de afirmación de género. Las visitas culturales acercaron al grupo a la historia LGBTIQ+ de Praga. Las sesiones principales se celebraron el 18 y 19 de septiembre, con bienvenida informal el 17.","en":"Charles University hosted the third meeting at its Faculty of Physical Education and Sport, with involvement from the Department of Physiotherapy. Practical exercises, patient communication simulations and discussions explored inclusive care and LGBTIQ+ rights. The programme also addressed physiotherapy following gender-affirming surgery. Cultural visits introduced participants to Prague’s LGBTIQ+ history. The main sessions took place on 18–19 September, with an informal welcome on the 17th."},"url":"https://www.instagram.com/equaledueu/reel/DP6gDieDADt/","recap":true},
  {id:'lisboa',partner:5,host:{es:'Politécnico de Lisboa · Escola Superior de Saúde de Lisboa',en:'Polytechnic Institute of Lisbon · Lisbon School of Health'},city:{es:'Lisboa',en:'Lisbon'},date:{es:'19–20 febrero 2026',en:'19–20 February 2026'},title:{es:'Salud e inclusión LGBTQIA+',en:'LGBTQIA+ health and inclusion'},description:{es:'Un simposio y sesiones de trabajo dedicados al acceso a la salud, la diversidad y la inclusión en la educación superior. El encuentro reunió al consorcio para debatir prácticas inclusivas y avanzar en los materiales formativos del proyecto.',en:'A symposium and working sessions focused on access to healthcare, diversity and inclusion in higher education. The meeting brought the consortium together to discuss inclusive practices and develop the project’s educational materials.'},url:'https://www.essl.ipl.pt/noticias/essl-acolhe-encontro-internacional-do-projeto-equaledu-foco-na-saude-e-inclusao-lgbtqia'},
  {id:'roma',partner:1,host:{es:'Sapienza Università di Roma',en:'Sapienza University of Rome'},city:{es:'Roma',en:'Rome'},date:{es:'21–22 abril 2026',en:'21–22 April 2026'},title:{es:'Identidad de género y acceso a la atención',en:'Gender identity and access to care'},description:{es:'Ponencias y talleres con estudiantes sobre identidad de género, diversidad y acceso a la atención sanitaria. Las jornadas incluyeron intercambio de perspectivas entre los socios y la presentación del manual EqualEdu para una formación más inclusiva.',en:'Talks and student workshops on gender identity, diversity and access to healthcare. The two-day meeting included exchanges between the partners and a presentation of the EqualEdu manual for more inclusive education.'},url:'https://kaunokolegija.lt/english/news/erasmus-project-equaledu-meeting-in-rome/',programme:'assets/equaledu-rome-programme.pdf'},
  {id:'kaunas',partner:2,host:{es:'Kauno Kolegija',en:'Kauno Kolegija'},city:{es:'Kaunas',en:'Kaunas'},date:{es:'17–19 junio 2026',en:'17–19 June 2026'},title:{es:'Compartir resultados, construir futuro',en:'Sharing outcomes, shaping the future'},description:{es:'El encuentro final combinó talleres, una conferencia internacional y la presentación del manual EqualEdu. Docentes, estudiantes y profesionales compartieron resultados y propuestas para incorporar la diversidad y la inclusión en la formación en Ciencias de la Salud.',en:'The final meeting combined workshops, an international conference and a presentation of the EqualEdu manual. Educators, students and professionals shared outcomes and proposals for integrating diversity and inclusion into health sciences education.'},url:'https://kaunokolegija.lt/english/news/equaledu-final-conference-in-lithuania-highlights-the-future-of-inclusive-health-education/',programme:'assets/equaledu-kaunas-programme.pdf'}
];
events.forEach(event=>{event.resourceTitle={es:`Encuentro de ${event.city.es}`,en:`Meeting in ${event.city.en}`};});
for(const [code,translation] of Object.entries(extraLocales)){
  copy[code]=translation.copy;
  partners.forEach((partner,index)=>{
    for(const key of ['name','country','city']){
      if(typeof partner[key]==='string')partner[key]={es:partner[key],en:partner[key]};
      partner[key][code]=translation.partners[index][key];
    }
  });
  events.forEach((event,index)=>{
    for(const key of ['host','city','date','title','description','resourceTitle'])event[key][code]=translation.events[index][key];
  });
}
const accessTranslations = {
  "es": {
    "accessTitle": "Acceso Universal y Gratuito",
    "accessBody": "El acceso a esta plataforma y a sus contenidos es universal, libre y gratuito, sin necesidad de registro ni pago, en consonancia con los principios de acceso abierto, inclusión y difusión del conocimiento promovidos por los programas europeos Erasmus+, Creative Europe y European Solidarity Corps y sus respectivas plataformas de resultados (E+/CE/ESC PRP).",
    "accessResources": "Los recursos están disponibles para facilitar su consulta y aprovechamiento por parte de la comunidad educativa, científica y la sociedad en general.",
    "cofundedAlt": "Cofinanciado por la Unión Europea"
  },
  "en": {
    "accessTitle": "Universal and Free Access",
    "accessBody": "Access to this platform and its contents is universal, open and free of charge, with no registration or payment required, in line with the principles of open access, inclusion and knowledge dissemination promoted by the European programmes Erasmus+, Creative Europe and European Solidarity Corps and their respective project results platforms (E+/CE/ESC PRP).",
    "accessResources": "The resources are available to facilitate their consultation and use by the educational and scientific communities and society at large.",
    "cofundedAlt": "Co-funded by the European Union"
  },
  "it": {
    "accessTitle": "Accesso Universale e Gratuito",
    "accessBody": "L’accesso a questa piattaforma e ai suoi contenuti è universale, libero e gratuito, senza necessità di registrazione o pagamento, in linea con i principi di accesso aperto, inclusione e diffusione della conoscenza promossi dai programmi europei Erasmus+, Creative Europe ed European Solidarity Corps e dalle rispettive piattaforme dei risultati dei progetti (E+/CE/ESC PRP).",
    "accessResources": "Le risorse sono disponibili per facilitarne la consultazione e l’utilizzo da parte della comunità educativa e scientifica e della società in generale.",
    "cofundedAlt": "Cofinanziato dall’Unione europea"
  },
  "cs": {
    "accessTitle": "Univerzální a Bezplatný Přístup",
    "accessBody": "Přístup k této platformě a jejímu obsahu je univerzální, volný a bezplatný, bez nutnosti registrace či platby, v souladu se zásadami otevřeného přístupu, inkluze a šíření znalostí podporovanými evropskými programy Erasmus+, Creative Europe a European Solidarity Corps a jejich příslušnými platformami výsledků projektů (E+/CE/ESC PRP).",
    "accessResources": "Zdroje jsou k dispozici vzdělávací a vědecké komunitě i široké veřejnosti, aby usnadnily jejich prohlížení a využívání.",
    "cofundedAlt": "Spolufinancováno Evropskou unií"
  },
  "lt": {
    "accessTitle": "Visuotinė ir Nemokama Prieiga",
    "accessBody": "Prieiga prie šios platformos ir jos turinio yra visuotinė, laisva ir nemokama, nereikalaujant registracijos ar mokėjimo, laikantis atvirosios prieigos, įtraukties ir žinių sklaidos principų, kuriuos skatina Europos programos Erasmus+, Creative Europe ir European Solidarity Corps bei jų atitinkamos projektų rezultatų platformos (E+/CE/ESC PRP).",
    "accessResources": "Ištekliai prieinami švietimo ir mokslo bendruomenėms bei plačiajai visuomenei, siekiant palengvinti susipažinimą su jais ir jų naudojimą.",
    "cofundedAlt": "Bendrai finansuoja Europos Sąjunga"
  },
  "pt": {
    "accessTitle": "Acesso Universal e Gratuito",
    "accessBody": "O acesso a esta plataforma e aos seus conteúdos é universal, livre e gratuito, sem necessidade de registo ou pagamento, em consonância com os princípios de acesso aberto, inclusão e difusão do conhecimento promovidos pelos programas europeus Erasmus+, Creative Europe e European Solidarity Corps e pelas respetivas plataformas de resultados dos projetos (E+/CE/ESC PRP).",
    "accessResources": "Os recursos estão disponíveis para facilitar a sua consulta e utilização pela comunidade educativa e científica e pela sociedade em geral.",
    "cofundedAlt": "Cofinanciado pela União Europeia"
  }
};
for (const [code, translation] of Object.entries(accessTranslations)) Object.assign(copy[code], translation);
// Extended meeting stories share their card content across all six languages.
for(const [code,translation] of Object.entries(meetingStories)){
  for(const id of ['malaga','malta']){
    const event=events.find(item=>item.id===id);
    const story=translation[id];
    event.host[code]=story.host;
    event.title[code]=story.title;
    event.description[code]=story.summary;
  }
}
const translated=(key)=>Object.fromEntries(Object.keys(copy).map(code=>[code,copy[code][key]]));
const resources = [
  {category:'materials',icon:'book-open',meta:translated('manualMeta'),title:translated('manualTitle'),description:translated('manualDesc'),action:translated('manualAction'),url:Object.fromEntries(Object.keys(copy).map(code=>[code,`mailto:mgsa23@uma.es?subject=${encodeURIComponent(copy[code].manualSubject)}`]))},
  ...events.map(event=>({category:'meetings',icon:event.programme?'document':'external-link',meta:translated(event.programme?(event.id==='malaga'?'programmeMetaSpanish':'programmeMetaEnglish'):'meetingReport'),title:event.resourceTitle,description:Object.fromEntries(Object.keys(copy).map(code=>[code,`${event.date[code]}. ${event.host[code]}. ${event.title[code]}.`])),action:translated(event.programme?'meetingDownload':event.recap?'eventRecap':'eventMore'),url:event.programme||event.url,download:Boolean(event.programme&&!event.programme.startsWith('http'))})),
  {category:'project',icon:'external-link',meta:translated('projectResourceMeta'),title:translated('projectResourceTitle'),description:translated('projectResourceDesc'),action:translated('projectResourceAction'),url:'https://www.uma.es/relaciones-internacionales/noticias/equaledu/'}
];

let lang = 'es';
let currentFilter = 'all';
let activePhoto = null;
let activeMeeting = null;
const local = (value) => typeof value === 'string' ? value : value[lang];
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const t = (key) => copy[lang][key];
const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="assets/icons.svg#${name}"></use></svg>`;

function renderPartners(){
  document.getElementById('partner-grid').innerHTML = partners.map(p => `<a class="partner-card" href="${p.url}" target="_blank" rel="noopener noreferrer"><div class="partner-meta"><span>${local(p.country)}</span>${p.coordinator ? `<span class="coordinator">${t('coordinator')}</span>` : ''}</div><div class="partner-logo"><img src="assets/${p.logo}-logo.png" alt="${escapeHTML(local(p.name))}" loading="lazy"></div><h3>${local(p.name)}</h3><p>${local(p.city)}</p><span class="partner-arrow">${icon('arrow-up-right')}</span></a>`).join('');
}
function renderJourney(){
  document.getElementById('meeting-grid').innerHTML = events.map((event,index) => {
    const host=partners[event.partner];
    const links=[{url:event.url,label:t(event.recap?'eventRecap':'eventMore')}];
    const hostName=escapeHTML(local(event.host));
    const hostContent=event.hostUrl?`<a href="${escapeHTML(event.hostUrl)}" target="_blank" rel="noopener noreferrer">${hostName}${icon('arrow-up-right')}</a>`:hostName;
    if(event.programme)links.push({url:event.programme,label:t('eventProgramme')});
    return `<article class="meeting-card" role="listitem" id="meeting-${event.id}"><div class="meeting-meta"><span>${String(index+1).padStart(2,'0')} / ${escapeHTML(local(host.country))}</span><span>${escapeHTML(local(event.date))}</span></div><h3>${escapeHTML(local(event.city))}</h3><p class="meeting-host">${hostContent}</p><h4>${escapeHTML(local(event.title))}</h4><p class="meeting-description">${escapeHTML(local(event.description))}</p><div class="meeting-links">${links.map(link=>`<a class="text-link" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer"><span>${link.label}</span>${icon('arrow-up-right')}</a>`).join('')}${meetingStories[lang][event.id]?`<button class="text-link meeting-details-button" type="button" data-meeting="${event.id}" aria-haspopup="dialog"><span>${escapeHTML(meetingStories[lang].detailsLabel)}</span>${icon('plus')}</button>`:''}</div></article>`;
  }).join('');
}
function renderMeetingStory(id){
  const event=events.find(item=>item.id===id);
  const story=meetingStories[lang][id];
  if(!event||!story)return;
  document.getElementById('meeting-story-content').innerHTML=`<header class="meeting-story-header"><p class="meeting-story-date">${escapeHTML(local(event.date))}</p><h2 id="meeting-story-title">${escapeHTML(local(event.city))} · EqualEdu</h2><a class="meeting-story-host" href="${escapeHTML(event.hostUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(story.host)} ${icon('arrow-up-right')}</a></header>${story.sections.map(section=>`<section class="meeting-story-section"><h3>${escapeHTML(section.title)}</h3><p>${escapeHTML(section.body)}</p></section>`).join('')}<section class="meeting-story-sources"><h3>${escapeHTML(meetingStories[lang].sourcesTitle)}</h3><ul>${story.publications.map(publication=>`<li><a href="${escapeHTML(publication.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(publication.label)}</span>${icon('arrow-up-right')}</a></li>`).join('')}</ul></section>`;
}
function renderResources(){
  const filtered = resources.filter(r => currentFilter==='all' || r.category===currentFilter);
  document.getElementById('resource-grid').innerHTML = filtered.map(r => `<article class="resource-card"><div class="resource-meta"><span>${local(r.meta)}</span><span class="resource-icon">${icon(r.icon)}</span></div><h3>${local(r.title)}</h3><p>${local(r.description)}</p><a class="text-link" href="${local(r.url)}" ${r.download ? 'download' : local(r.url).startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}><span>${local(r.action)}</span>${icon(r.download?'arrow-down':local(r.url).startsWith('mailto:')?'mail':'arrow-up-right')}</a></article>`).join('');
  document.getElementById('resource-status').textContent = `${t('navResources')}: ${filtered.length}`;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed',button.dataset.filter===currentFilter));
}
function setLanguage(next, updateURL=false){
  if(!copy[next]) return;
  lang=next;
  document.documentElement.lang=localeTags[lang];
  document.title=t('title');
  document.querySelector('meta[name="description"]').content=t('description');
  document.querySelector('meta[property="og:title"]').content=t('title');
  document.querySelector('meta[property="og:description"]').content=t('description');
  const publicPage = new URL(window.location.href);
  publicPage.hash = '';
  publicPage.search = lang === 'es' ? '' : `?lang=${lang}`;
  document.querySelector('link[rel="canonical"]').href = publicPage.href;
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => {
    const alternatePage = new URL(publicPage.href);
    const alternateLanguage = link.hreflang === 'pt-PT' ? 'pt' : link.hreflang;
    alternatePage.search = alternateLanguage === 'x-default' ? '' : `?lang=${alternateLanguage}`;
    link.href = alternatePage.href;
  });
  document.querySelector('meta[property="og:image"]').content = new URL('assets/prague-team.webp', publicPage).href;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key=element.dataset.i18n;
    if(richKeys.has(key)) element.innerHTML=t(key);
    else element.textContent=t(key);
  });
  document.querySelectorAll('[data-alt]').forEach(element => element.alt=copy[lang].alts[element.dataset.alt]||t(element.dataset.alt));
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',button.dataset.lang===lang));
  document.querySelector('.navigation').setAttribute('aria-label',t('navAria'));
  document.querySelector('.languages').setAttribute('aria-label',t('languageAria'));
  document.querySelector('.facts').setAttribute('aria-label',t('factsAria'));
  document.querySelector('.journey').setAttribute('aria-label',t('journeyAria'));
  document.querySelector('.filters').setAttribute('aria-label',t('filterAria'));
  document.querySelectorAll('.brand').forEach(brand=>brand.setAttribute('aria-label',`EqualEdu — ${t('home')}`));
  document.querySelector('.hero-project-logo').alt=`EqualEdu · ${t('brandSub')}`;
  document.querySelector('.languages summary').setAttribute('aria-label',`${t('selectLanguage')}: ${languageNames[lang]}`);
  document.getElementById('language-name').textContent=languageNames[lang];
  document.getElementById('language-name').lang=localeTags[lang];
  document.getElementById('language-code').textContent=lang.toUpperCase();
  document.querySelector('.languages').open=false;
  document.querySelector('.menu-button').setAttribute('aria-label',t(document.querySelector('.navigation').classList.contains('is-open') ? 'closeMenu' : 'openMenu'));
  document.querySelectorAll('[data-close]').forEach(button => button.setAttribute('aria-label',t('close')));
  document.querySelectorAll('.gallery-item').forEach(button => button.setAttribute('aria-label',`${t('viewPhoto')}: ${t(button.dataset.caption)}`));
  if(activePhoto){document.querySelector('#photo-dialog img').alt=copy[lang].alts[activePhoto];document.querySelector('#photo-dialog p').textContent=t(activePhoto);}
  renderPartners();renderJourney();renderResources();
  if(activeMeeting&&document.getElementById('meeting-dialog').open)renderMeetingStory(activeMeeting);
  try{localStorage.setItem('equaledu-language',lang);}catch(error){/* Storage can be unavailable in private contexts. */}
  if(updateURL){const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',()=>{setLanguage(button.dataset.lang,true);document.querySelector('.languages summary').focus();}));
const menu=document.querySelector('.menu-button');
function closeMenu(){document.querySelector('.navigation').classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',t('openMenu'));}
menu.addEventListener('click',()=>{const opened=document.querySelector('.navigation').classList.toggle('is-open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',t(opened?'closeMenu':'openMenu'));});
document.querySelectorAll('.navigation a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();const chooser=document.querySelector('.languages');if(chooser.open){chooser.open=false;chooser.querySelector('summary').focus();}}});
document.addEventListener('click',event=>{if(!event.target.closest('.languages'))document.querySelector('.languages').open=false;});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{currentFilter=button.dataset.filter;renderResources();}));
document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{activePhoto=button.dataset.caption;const dialog=document.getElementById('photo-dialog');dialog.querySelector('img').src=button.dataset.image;dialog.querySelector('img').alt=copy[lang].alts[activePhoto];dialog.querySelector('p').textContent=t(activePhoto);dialog.showModal();}));
document.getElementById('meeting-grid').addEventListener('click',event=>{
  const button=event.target.closest('[data-meeting]');
  if(!button)return;
  activeMeeting=button.dataset.meeting;
  renderMeetingStory(activeMeeting);
  const dialog=document.getElementById('meeting-dialog');
  dialog.showModal();
  dialog.scrollTop=0;
});
document.getElementById('meeting-dialog').addEventListener('close',()=>{activeMeeting=null;});
document.getElementById('privacy-button').addEventListener('click',()=>document.getElementById('privacy-dialog').showModal());
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();});});
let initial='es';
try{initial=new URLSearchParams(location.search).get('lang')||localStorage.getItem('equaledu-language')||'es';}catch(error){/* Use Spanish when browser storage is unavailable. */}
initial=String(initial).toLowerCase().split('-')[0];
setLanguage(copy[initial]?initial:'es');
