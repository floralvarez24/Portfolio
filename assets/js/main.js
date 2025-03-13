/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// Language Toggle Functionality
document.getElementById("btn-es").addEventListener("click", () => setLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));


const translations = {
  en: {
    home: "Home",
    about: "About Me",
    portfolio: "Portfolio",
    contact: "Contact Me",
    services: "The services I offer",
    software: "Information Systems Engineer | Innovation in technology",
    download: "Download CV",
    cv: "assets/pdf/CV Florencia Alvarez EN.pdf",
    servicesDescription:"Attractive and elegant designs for your website,using modern technologies and frameworks.Interfaces are intuitive and easy to use.",
    know: "Know more",
    service1: "I create professional, high-quality websites tailored to meet clients' needs. I enhance your online presence with effective SEO strategies and resolve performance issues to ensure optimal functionality and user experience",
    portfolioLine1: "My portfolio",
    portfolioLine2: "Projects",
    presentationWebsite: "Presentation Website",
    descriptionWebsite1: "Responsive website for a musician",
    descriptionWebsite2: "Basic ecommerce, only includes the shopping cart",
    descriptionWebsite3:"Ecommerce using firebase to generate client's orders",
    descriptionWebsite4:"MVP of a comprehensive improvement system for nautical clubs, for the management of boats, owners, and navigation requests.",
    descriptionWebsite5: "Allows users to create, edit, and update contacts (name and email) in a web-based agenda.",
    workTitle:"Nautical Management System",
    workTogether: "Let's work together",
    allRights: "© All rights reserved",
    aboutDescription: "I am a Systems Engineer with experience in developing web, mobile, and integrated systems applications. I specialize in technologies such as [React, Node.js, PostgreSQL, etc.], focusing on creating scalable, efficient, and user-centric products.My passion for solving complex problems and my commitment to continuous learning have enabled me to collaborate on diverse projects, ranging from e-commerce platforms to data analysis tools. I thrive in dynamic environments where I can combine creativity and technical expertise to deliver impactful solutions.",
    habilidades: "My skills are",
    name: "Name",
    email: "Email",
    namePlaceholder: "Type your name",
    emailPlaceholder: "Type your email",
    message: "Message",
    messagePlaceholder: "Write your message",
    send: "Send Message",
    personalInformation: "My Personal Information",

  },
  es: {
    home: "Inicio",
    about: "Sobre mí",
    portfolio: "Portafolio",
    contact: "Contáctame",
    services: "Mis servicios",
    software: "Ingeniera en Sistemas de Información | Innovación en tecnología",
    download: "Descargar CV",
    cv: "assets/pdf/CV Florencia Alvarez ES.pdf",
    servicesDescription: "Diseños atractivos y elegantes para tu sitio web,utilizando tecnologías y frameworks modernos.Interfaces intuitivas y fáciles de usar.",
    know: "Conoce más",
    service1: "Creo sitios web profesionales y de alta calidad adaptados a las necesidades de los clientes. Mejoro tu presencia en línea con estrategias de SEO efectivas y resuelvo problemas de rendimiento para garantizar una funcionalidad y experiencia de usuario óptimas.",
    portfolioLine1: "Mi portafolio",
    portfolioLine2: "Proyectos",
    presentationWebsite: "Sitio Web de Presentación",
    descriptionWebsite1: "Sitio web responsive para un músico",
    descriptionWebsite2: "Ecommerce básico, solo incluye el carrito de compras",
    descriptionWebsite3:"Ecommerce usando firebase para generar las órdenes de los clientes",
    descriptionWebsite4:"MVP de un sistema de mejora integral de clubes náuticos, para la gestión de embarcaciones, propietarios y solicitudes a navegar.",
    descriptionWebsite5: "Permite crear, editar, actualizar contactos (nombre y email) de una agenda web.",
    workTitle:"Sistema de Gestión de Náuticas",
    workTogether: "Trabajemos juntos",
    allRights: "© Todos los derechos reservados",
    aboutDescription: "Soy Ingeniera en Sistemas de Información con experiencia en el desarrollo de aplicaciones web, móviles y de sistemas integrados. Me especializo en tecnologías como [React, Node.js, PostgreSQL, etc.], centrándome en la creación de productos escalables, eficientes y centrados en el usuario. Mi pasión por resolver problemas complejos y mi compromiso con el aprendizaje continuo me han permitido colaborar en diversos proyectos, que van desde plataformas de comercio electrónico hasta herramientas de análisis de datos. Prospero en entornos dinámicos donde puedo combinar la creatividad y la experiencia técnica para ofrecer soluciones impactantes.",
    habilidades: "Mis habilidades son",
    name: "Nombre",
    namePlaceholder: "Escribe tu nombre",
    emailPlaceholder: "Escribe tu correo",
    message: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje",
    send: "Enviar Mensaje",
    personalInformation: "Mi Información Personal",

  },
};

function setLanguage(language) {
  localStorage.setItem("language", language); // Save preference
  updateTexts(language);
  updateCVDownloadLink(language);
}

function updateCVDownloadLink(language) {
    const cvButton = document.querySelector("#download-cv");
    cvButton.setAttribute("href", translations[language].cv);
  }
function updateTexts(language) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-placeholder");
    element.setAttribute("placeholder", translations[language][key]);
  });
}

// Load saved language on page load
const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);
