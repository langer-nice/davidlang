const translations = {
  en: {
    title: 'Welcome',
    intro: 'This is a responsive one-page site.',
    learn: 'Learn more',
    copyright: '© 2026 Your Name'
  },
  fr: {
    title: 'Bienvenue',
    intro: 'Ceci est un site d\'une seule page, réactif.',
    learn: 'En savoir plus',
    copyright: '© 2026 Votre nom'
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem('site-lang', lang);
  document.getElementById('btn-en').setAttribute('aria-pressed', String(lang==='en'));
  document.getElementById('btn-fr').setAttribute('aria-pressed', String(lang==='fr'));
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('site-lang') || (navigator.language && navigator.language.startsWith('fr')? 'fr' : 'en');
  applyLang(saved);

  document.getElementById('btn-en').addEventListener('click', ()=>applyLang('en'));
  document.getElementById('btn-fr').addEventListener('click', ()=>applyLang('fr'));
});
