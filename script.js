"use strict";

const themeToggle = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("portfolio-theme");

// Aplicamos el tema guardado o usamos oscuro por defecto.
const initialTheme = savedTheme || "dark";
document.documentElement.dataset.theme = initialTheme;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);

    // Actualizamos la etiqueta accesible del botón.
    applyLanguage(document.documentElement.lang);
  });
}


/* ========================================
   IDIOMAS: TRADUCCIONES
   ======================================== */

const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "theme.toggle": "Cambiar tema",
    "logo.label": "Inicio",
    "nav.label": "Navegación principal",
    "page.title": "Portfolio profesional",
    "hero.eyebrow": "Portfolio profesional",
    "hero.title": "Construyendo mi camino en tecnología.",
    "hero.description":
    "Un espacio para presentar mis conocimientos, proyectos y evolución profesional.",
    "hero.projects": "Explorar proyectos",
    "hero.contact": "Contactarme",
    "about.paragraph1": "Me interesa la administración de sistemas, las redes y la infraestructura tecnológica. Actualmente estoy ampliando mis conocimientos mediante el aprendizaje práctico y el desarrollo de proyectos propios.",
    "about.paragraph2": "Trabajo en proyectos que me permiten explorar herramientas, comprender configuraciones técnicas y resolver problemas concretos. También estoy aprendiendo programación, con el objetivo de crear herramientas que faciliten tareas de administración y gestión.",
    "about.paragraph3": "Mi enfoque es aprender haciendo, documentar lo que descubro y construir soluciones cada vez más sólidas.",
    "about.title": "Sobre mí",
    "skills.title": "Tecnologías",
    "projects.title": "Proyectos",
    "contact.title": "Contacto",
    "footer.text": "Portfolio personal. Todos los derechos reservados.",

    "projects.netops.status": "En desarrollo",
    "projects.netops.description":
      "Proyecto orientado a herramientas para tareas de redes y administración de sistemas.",
    "projects.mu.status": "En desarrollo",
    "projects.mu.description":
      "Herramienta en desarrollo para analizar y gestionar configuraciones de servidores MU Online Season 6.",
    "contact.description":
      "¿Querés conocer más sobre mis proyectos o contactarme?",
    "contact.email": "Enviar un correo",
  },

  en: {
    "nav.about": "About me",
    "nav.skills": "Technologies",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "theme.toggle": "Switch theme",
    "hero.eyebrow": "Professional portfolio",
    "page.title": "Professional Portfolio",
    "hero.title": "Building my path in technology.",
    "logo.label": "Home",
    "nav.label": "Main navigation",
    "hero.description":
    "A space to showcase my knowledge, projects, and professional growth.",
    "hero.projects": "Explore projects",
    "hero.contact": "Contact me",
    "about.paragraph1": "I'm interested in systems administration, networking, and IT infrastructure. I'm currently expanding my knowledge through hands-on learning and personal projects.",
    "about.paragraph2": "I work on projects that allow me to explore tools, understand technical configurations, and solve practical problems. I'm also learning programming to build tools that simplify administration and management tasks.",
    "about.paragraph3": "My approach is to learn by doing, document what I discover, and build increasingly reliable solutions.",
    "about.title": "About me",
    "skills.title": "Technologies",
    "projects.title": "Projects",
    "projects.netops.status": "In development",
    "projects.netops.description":
    "A project focused on tools for networking and systems administration tasks.",
    "projects.mu.status": "In development",
    "projects.mu.description":
    "A tool in development for analyzing and managing MU Online Season 6 server configurations.",
    "contact.description":
    "Would you like to learn more about my projects or get in touch?",
    "contact.email": "Send an email",
    "contact.title": "Contact",
    "footer.text": "Personal portfolio. All rights reserved."
  }
};


/* ========================================
   IDIOMAS: CAMBIO DE TRADUCCIONES
   ======================================== */

const languageToggle = document.querySelector("[data-language-toggle]");

function applyLanguage(language) {
  // Evitamos usar un idioma que no esté definido.
  if (!translations[language]) {
    return;
  }

  // Actualizamos el idioma declarado en el HTML.
  document.documentElement.lang = language;

  // Buscamos todos los elementos que tienen una traducción.
  const translatableElements = document.querySelectorAll("[data-i18n]");

  // Actualizamos el texto de cada elemento.
  translatableElements.forEach((element) => {
    const translationKey = element.dataset.i18n;
    const translatedText = translations[language][translationKey];

    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  
  // Actualizamos los nombres accesibles según el idioma.
  const accessibleElements = document.querySelectorAll("[data-i18n-aria-label]");

  accessibleElements.forEach((element) => {
    const translationKey = element.dataset.i18nAriaLabel;
    const translatedLabel = translations[language][translationKey];

    if (translatedLabel !== undefined) {
      element.setAttribute("aria-label", translatedLabel);
    }
  });
  // Actualizamos la etiqueta accesible del botón de tema.

    
    if (themeToggle) {
      const currentTheme = document.documentElement.dataset.theme;
      const isSpanish = language === "es";

      const themeIcon = currentTheme === "dark" ? "☀" : "☾";

      const themeLabel =
        currentTheme === "dark"
          ? (isSpanish ? "Cambiar al tema claro" : "Switch to light theme")
          : (isSpanish ? "Cambiar al tema oscuro" : "Switch to dark theme");

      themeToggle.textContent = themeIcon;
      themeToggle.setAttribute("aria-label", themeLabel);
      themeToggle.setAttribute("title", themeLabel);
    }

  // El botón indica el idioma al que podemos cambiar.
  if (languageToggle) {
    languageToggle.textContent = language === "es" ? "EN" : "ES";
    languageToggle.setAttribute(
      "aria-label",
      language === "es"
        ? "Switch language to English"
        : "Cambiar idioma a español"
    );
  }
}
// Escuchamos los clics del selector de idioma.
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang;
    const nextLanguage = currentLanguage === "es" ? "en" : "es";

    applyLanguage(nextLanguage);
    localStorage.setItem("portfolio-language", nextLanguage);
  });
}

// Iniciamos el portfolio en español.

const savedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage = savedLanguage || "es";

applyLanguage(initialLanguage);