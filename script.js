'use strict';
const translations = {
  fr: {
    offline:'HORS LIGNE',
    consoleScreenshot:'Aperçu de la bibliothèque et de l’enquête éducative de Console CIEL',
    skip:'Aller au contenu',
    navigation:'Navigation principale',
    language:'Langue',
    navAbout:'À propos',
    navProjects:'Projets',
    navContact:'Discutons',
    heroEyebrow:'PORTFOLIO PERSONNEL — VOL. 01',
    heroKicker:'Étudiant en informatique · Développeur',
    profileLabel:'Profil Loghan',
    profileRole:'Étudiant en informatique · Développeur',
    profileDescription:'Créer des logiciels. Explorer les systèmes.<br>Apprendre à travers des projets et des CTFs.',
    heroBottom:'Des idées aux lignes de code.<br>Et tout ce qu’il reste à explorer.',
    scroll:'DÉFILER POUR EXPLORER',
    aboutLabel:'01 — DERRIÈRE L’ÉCRAN',
    aboutTitle:'La curiosité<br>comme <em>moteur.</em>',
    aboutLead:'Moi, c’est Loghan. Sur le web, its lizhy. J’aime comprendre comment les choses fonctionnent. Puis leur donner ma propre forme.',
    aboutText:'Étudiant en informatique, je construis mes compétences en créant : des logiciels, des expériences web et de petits projets qui répondent à une idée simple. Les systèmes, Linux et la cybersécurité font aussi partie du terrain de jeu.',
    discover:'Découvrir mes projets',
    toolbox:'DANS MA BOÎTE À OUTILS',
    projectsLabel:'02 — SÉLECTION DE PROJETS',
    projectsEyebrow:'PENSER. CONSTRUIRE. AMÉLIORER.',
    projectsTitle:'De l’idée<br>au <em>concret.</em>',
    projectsIntro:'Deux projets, une même envie : créer des outils simples et comprendre ce qu’il y a derrière.',
    consoleVisualLabel:'EXPLORATION / APPRENDRE EN JOUANT',
    consoleCategory:'LOGICIEL / ENQUÊTE ÉDUCATIVE',
    consoleTitle:'Console CIEL.',
    consoleDescription:'Une enquête éducative et une bibliothèque de jeux, créées avec Godot. Explorer, résoudre des pannes et découvrir l’informatique en jouant, hors ligne.',
    consoleTag:'Godot / Windows / Raspberry Pi',
    consoleMore:'En savoir plus sur Console CIEL',
    passwordVisualLabel:'PETIT OUTIL / GRANDE UTILITÉ',
    copyPassword:'Copier le mot de passe',
    length:'Longueur',
    generate:'Générer un mot de passe',
    demoNote:'Démo locale · rien n’est enregistré',
    passwordCategory:'WEB / OUTIL',
    passwordTitle:'Simple. Et imprévisible.',
    passwordDescription:'Un générateur de mots de passe avec une longueur et des caractères personnalisables. Un petit projet web, pensé pour être utile.',
    openPassword:'Ouvrir le générateur de mots de passe (nouvel onglet)',
    projectsFootnote:'Toujours une nouvelle idée dans un coin de la tête.',
    approachLabel:'Ma démarche',
    interludeLabel:'LE FIL CONDUCTEUR',
    interludeTitle:'Toujours<br>en <em>mouvement.</em>',
    interludeCaption:'Une idée. Un essai. Une nouvelle version.<br>C’est comme ça que j’avance.',
    contactLabel:'03 — ET LA SUITE ?',
    contactKicker:'Un projet, une question, ou simplement envie d’échanger ?',
    contactTitle:'On en <em>parle ?</em>',
    newTab:' (nouvel onglet)',
    backTop:'Retour en haut',
    footer:'FAIT AVEC CURIOSITÉ — © 2026',
    close:'Fermer',
    dialogTitle:'Apprendre en explorant.',
    dialogText:'Console CIEL est une application Godot qui mêle enquête éducative et bibliothèque de jeux. On y explore des pièces, répare des pannes simulées et relève des défis de code, de réseau et de cybersécurité. L’application fonctionne hors ligne, au clavier ou à la manette, avec une progression sauvegardée localement. Des versions Windows et Raspberry Pi sont disponibles sur le dépôt.',
    dialogLink:'Voir Console CIEL sur GitHub',
    copied:'Mot de passe copié.',
    copyError:'Copie indisponible. Sélectionne le mot de passe pour le copier.',
    meta:'its lizhy · Loghan — Étudiant en informatique et développeur. Logiciels, web et exploration des systèmes.'
  },
  en: {
    offline:'OFFLINE',
    consoleScreenshot:'Preview of the Console CIEL library and educational adventure',
    skip:'Skip to content',
    navigation:'Main navigation',
    language:'Language',
    navAbout:'About',
    navProjects:'Projects',
    navContact:'Let’s talk',
    heroEyebrow:'PERSONAL PORTFOLIO — VOL. 01',
    heroKicker:'Computer science student · Developer',
    profileLabel:'Loghan’s profile',
    profileRole:'Computer science student · Developer',
    profileDescription:'Building software. Exploring systems.<br>Learning through real projects and CTFs.',
    heroBottom:'From ideas to lines of code.<br>And everything still left to explore.',
    scroll:'SCROLL TO EXPLORE',
    aboutLabel:'01 — BEHIND THE SCREEN',
    aboutTitle:'Driven by<br><em>curiosity.</em>',
    aboutLead:'I’m Loghan. Online, its lizhy. I like understanding how things work. Then giving them a shape of my own.',
    aboutText:'As a computer science student, I build my skills by making things: software, web experiences and small projects that start with a simple idea. Systems, Linux and cybersecurity are part of the playground, too.',
    discover:'Explore my projects',
    toolbox:'IN MY TOOLBOX',
    projectsLabel:'02 — SELECTED PROJECTS',
    projectsEyebrow:'THINK. BUILD. IMPROVE.',
    projectsTitle:'From idea<br>to <em>reality.</em>',
    projectsIntro:'Two projects, one shared goal: building simple tools and understanding what makes them work.',
    consoleVisualLabel:'EXPLORATION / LEARNING THROUGH PLAY',
    consoleCategory:'SOFTWARE / EDUCATIONAL ADVENTURE',
    consoleTitle:'Console CIEL.',
    consoleDescription:'An educational adventure and game library, built with Godot. Explore, fix simulated faults and discover computing through play, entirely offline.',
    consoleTag:'Godot / Windows / Raspberry Pi',
    consoleMore:'Learn more about Console CIEL',
    passwordVisualLabel:'SMALL TOOL / REAL PURPOSE',
    copyPassword:'Copy password',
    length:'Length',
    generate:'Generate a password',
    demoNote:'Local demo · nothing is stored',
    passwordCategory:'WEB / TOOL',
    passwordTitle:'Simple. Unpredictable.',
    passwordDescription:'A password generator with customizable length and character options. A small web project, built to be useful.',
    openPassword:'Open the password generator (new tab)',
    projectsFootnote:'There’s always another idea in the back of my mind.',
    approachLabel:'My approach',
    interludeLabel:'THE COMMON THREAD',
    interludeTitle:'Always<br>in <em>motion.</em>',
    interludeCaption:'An idea. An attempt. A new version.<br>That’s how I move forward.',
    contactLabel:'03 — WHAT’S NEXT?',
    contactKicker:'A project, a question, or just feel like saying hello?',
    contactTitle:'Let’s <em>talk.</em>',
    newTab:' (new tab)',
    backTop:'Back to top',
    footer:'MADE WITH CURIOSITY — © 2026',
    close:'Close',
    dialogTitle:'Learning by exploring.',
    dialogText:'Console CIEL is a Godot application combining an educational adventure and a game library. Explore rooms, repair simulated faults and tackle coding, networking and cybersecurity challenges. It runs offline with keyboard or controller input and locally saved progress. Windows and Raspberry Pi versions are available in the repository.',
    dialogLink:'View Console CIEL on GitHub',
    copied:'Password copied.',
    copyError:'Copy unavailable. Select the password to copy it manually.',
    meta:'its lizhy · Loghan — Computer science student and developer. Software, web and systems exploration.'
  }
};
let language = 'fr';
try { const saved = localStorage.getItem('lizhy-language'); if (Object.hasOwn(translations, saved)) language = saved; } catch { /* Storage can be disabled. */ }
function setLanguage(next) {
  if (!(Object.hasOwn(translations, next))) return;
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = translations[next][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value; // Only trusted, local translation strings.
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', translations[next][element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => element.alt = translations[next][element.dataset.i18nAlt]);
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === next)));
  document.querySelector('.wordmark').setAttribute('aria-label', next === 'fr' ? 'its lizhy — accueil' : 'its lizhy — home');
  document.querySelector('meta[name="description"]').content = translations[next].meta;
  document.getElementById('toast').classList.remove('visible');
  try { localStorage.setItem('lizhy-language', next); } catch { /* Translation works without storage. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(language);

// One scheduled update per frame; no scroll interception or scroll hijacking.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero-scroll');
const interlude = document.querySelector('.interlude');
let frame = null;
function progress(section) {
  const bounds = section.getBoundingClientRect();
  const distance = section.offsetHeight - window.innerHeight;
  return distance > 0 ? Math.min(1, Math.max(0, -bounds.top / distance)) : 0;
}
function updateScene() {
  frame = null;
  if (motionPreference.matches) {
    hero.style.setProperty('--hero-progress', 0);
    interlude.style.setProperty('--interlude-progress', 0);
    return;
  }
  hero.style.setProperty('--hero-progress', progress(hero).toFixed(4));
  interlude.style.setProperty('--interlude-progress', progress(interlude).toFixed(4));
}
function scheduleScene() { if (frame === null) frame = requestAnimationFrame(updateScene); }
window.addEventListener('scroll', scheduleScene, { passive:true });
window.addEventListener('resize', scheduleScene);
motionPreference.addEventListener('change', scheduleScene);
scheduleScene();

const lengthInput = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');
lengthInput.addEventListener('input', () => { document.getElementById('length-value').textContent = lengthInput.value; });
function randomIndex(limit) {
  const random = new Uint32Array(1);
  const ceiling = Math.floor(4294967296 / limit) * limit;
  do { crypto.getRandomValues(random); } while (random[0] >= ceiling);
  return random[0] % limit;
}
function generatePassword() {
  const groups = ['abcdefghijkmnopqrstuvwxyz', 'ABCDEFGHJKLMNPQRSTUVWXYZ', '23456789', '!@#$%&*?'];
  const alphabet = groups.join('');
  const characters = groups.map(group => group[randomIndex(group.length)]);
  while (characters.length < Number(lengthInput.value)) characters.push(alphabet[randomIndex(alphabet.length)]);
  for (let i = characters.length - 1; i > 0; i--) { const j = randomIndex(i + 1); [characters[i],characters[j]] = [characters[j],characters[i]]; }
  passwordOutput.value = characters.join('');
}
document.getElementById('generate-password').addEventListener('click', generatePassword);
generatePassword();
let toastTimeout;
function toast(key) {
  const element = document.getElementById('toast');
  element.textContent = translations[language][key];
  element.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => element.classList.remove('visible'), 4000);
}
document.getElementById('copy-password').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(passwordOutput.value); toast('copied'); }
  catch { const selection=window.getSelection(); const range=document.createRange(); range.selectNodeContents(passwordOutput); selection.removeAllRanges(); selection.addRange(range); toast('copyError'); }
});
const dialog = document.getElementById('project-dialog');
document.querySelector('[data-project="console"]').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds=dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
