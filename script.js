'use strict';

// Language and accessible labels.
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
  renderCTFResults();
  const generatorError = document.getElementById('generator-error');
  if (generatorError.dataset.error) generatorError.textContent = translations[next][generatorError.dataset.error];
  try { localStorage.setItem('lizhy-language', next); } catch { /* Translation works without storage. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(language);

// Modern browsers animate directly from native CSS scroll timelines.
// Older browsers use paused transform animations with cached scene geometry.
if (!CSS.supports('animation-timeline: view()')) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const selectors = ['.hero-title-wrap,.chrome-orb,.floating-terminal,.profile-card', '.interlude-back,.interlude h2,.silver-loop'];
  let scenes = [], frame = 0;
  function renderScenes() {
    frame = 0;
    for (const scene of scenes) {
      const progress = Math.max(0, Math.min(1, (scrollY - scene.top) / scene.distance));
      if (progress === scene.progress) continue;
      scene.progress = progress;
      scene.animations.forEach(animation => animation.currentTime = progress * 1000);
    }
  }
  function scheduleScenes() { if (!frame) frame = requestAnimationFrame(renderScenes); }
  function refreshScenes() {
    scenes.flatMap(scene => scene.animations).forEach(animation => animation.cancel());
    scenes = reducedMotion.matches ? [] : [...document.querySelectorAll('.hero-scroll,.interlude')].map((section, index) => ({
      top: section.getBoundingClientRect().top + scrollY,
      distance: Math.max(1, section.offsetHeight - innerHeight),
      animations: [...section.querySelectorAll(selectors[index])].map(element => {
        const style = getComputedStyle(element);
        const value = (name, fallback) => style.getPropertyValue(name).trim() || fallback;
        const animation = element.animate([
          { transform: `translate3d(0,0,0) rotate(${value('--start-angle','0deg')})` },
          { transform: `translate3d(${value('--move-x','0px')},${value('--move-y','0px')},0) rotate(${value('--end-angle',value('--start-angle','0deg'))})` }
        ], { duration:1000, fill:'both' });
        animation.pause();
        return animation;
      })
    }));
    scheduleScenes();
  }
  addEventListener('scroll', scheduleScenes, { passive:true });
  addEventListener('resize', refreshScenes);
  reducedMotion.addEventListener('change', refreshScenes);
  new ResizeObserver(refreshScenes).observe(document.body);
  refreshScenes();
}

// Password generation and clipboard.
const lengthInput = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');
const generatorError = document.getElementById('generator-error');
const generateButton = document.getElementById('generate-password');
const copyButton = document.getElementById('copy-password');
const characterGroups = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.?/'
};
function randomIndex(limit) {
  const random = new Uint32Array(1);
  const ceiling = Math.floor(4294967296 / limit) * limit;
  do { crypto.getRandomValues(random); } while (random[0] >= ceiling);
  return random[0] % limit;
}
function generatorFailure(key) {
  generatorError.dataset.error = key;
  generatorError.textContent = translations[language][key];
  generatorError.hidden = false;
  passwordOutput.value = '';
  copyButton.disabled = true;
  generateButton.disabled = true;
}
function generatePassword() {
  const groups = [...document.querySelectorAll('[name="character-group"]:checked')].map(input => {
    const group = characterGroups[input.value];
    return document.getElementById('exclude-ambiguous').checked ? group.replace(/[O0oIl1|]/g, '') : group;
  });
  if (!groups.length) { generatorFailure('noCharacters'); return; }
  if (!globalThis.crypto || typeof crypto.getRandomValues !== 'function') { generatorFailure('cryptoUnavailable'); return; }
  const length = Number(lengthInput.value);
  const alphabet = groups.join('');
  let characters;
  // Rejection sampling gives every valid password the same probability,
  // while ensuring every selected character group is represented.
  try {
    do {
      characters = Array.from({ length }, () => alphabet[randomIndex(alphabet.length)]);
    } while (!groups.every(group => characters.some(character => group.includes(character))));
    passwordOutput.value = characters.join('');
    generatorError.hidden = true;
    delete generatorError.dataset.error;
    copyButton.disabled = false;
    generateButton.disabled = false;
  } catch { generatorFailure('cryptoUnavailable'); }
}
lengthInput.addEventListener('input', () => {
  document.getElementById('length-value').textContent = lengthInput.value;
  generatePassword();
});
document.querySelectorAll('[name="character-group"], #exclude-ambiguous').forEach(input => input.addEventListener('change', generatePassword));
generateButton.addEventListener('click', generatePassword);
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
  if (!passwordOutput.value) return;
  const passwordToCopy = passwordOutput.value;
  try { await navigator.clipboard.writeText(passwordToCopy); toast('copied'); }
  catch { const selection=window.getSelection(); const range=document.createRange(); range.selectNodeContents(passwordOutput); selection.removeAllRanges(); selection.addRange(range); toast('copyError'); }
});

// Project details and CTF results.
const dialog = document.getElementById('project-dialog');
document.querySelector('[data-project="console"]').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds=dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });

function renderCTFResults() {
  const rows = document.getElementById('ctf-rows');
  rows.replaceChildren();
  document.getElementById('ctf-empty').hidden = ctfResults.length > 0;
  document.getElementById('ctf-table-wrap').hidden = ctfResults.length === 0;
  for (const result of ctfResults) {
    const row = document.createElement('tr');
    let dateText = translations[language].notProvided;
    if (/^\d{4}-\d{2}-\d{2}$/.test(result.date || '')) {
      const date = new Date(result.date + 'T00:00:00Z');
      if (!Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === result.date) dateText = new Intl.DateTimeFormat(language, { dateStyle:'medium', timeZone:'UTC' }).format(date);
    }
    for (const value of [dateText, result.event, result.rank, result.score]) {
      const cell = document.createElement('td');
      cell.textContent = value ?? translations[language].notProvided;
      row.append(cell);
    }
    const writeupCell = document.createElement('td');
    try {
      const url = new URL(result.writeup);
      if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Unsupported link');
      const link = document.createElement('a');
      link.href = url.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = translations[language].readWriteup;
      link.setAttribute('aria-label', translations[language].readWriteup + ' — ' + result.event + translations[language].newTab);
      writeupCell.append(link);
    } catch { writeupCell.textContent = '—'; }
    row.append(writeupCell);
    rows.append(row);
  }
}
