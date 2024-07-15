const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

function updateMetaTags(section) {
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const title = document.querySelector('title');

  switch(section) {
    case 'about':
      metaDescription.setAttribute('content', 'Learn more about Relyzers, your reliable digital service provider.');
      metaKeywords.setAttribute('content', 'Relyzers, about us, digital services');
      title.textContent = 'About Us - Relyzers';
      break;
    case 'services':
      metaDescription.setAttribute('content', 'Discover the range of services offered by Relyzers.');
      metaKeywords.setAttribute('content', 'Relyzers, services, digital solutions');
      title.textContent = 'Our Services - Relyzers';
      break;
    case 'contact':
      metaDescription.setAttribute('content', 'Get in touch with Relyzers for top-notch digital services.');
      metaKeywords.setAttribute('content', 'Relyzers, contact, digital services');
      title.textContent = 'Contact Us - Relyzers';
      break;
    default:
      metaDescription.setAttribute('content', 'Relyzers offers top-notch digital services including logo design, product designing, content writing, web development, and more.');
      metaKeywords.setAttribute('content', 'digital services, logo design, product designing, content writing, web development, graphic design, app development, social media growth, ad running, Relyzers');
      title.textContent = 'Relyzers - Expert Digital Services for Your Brand';
  }
}

window.addEventListener('hashchange', () => {
  const section = window.location.hash.substring(1);
  updateMetaTags(section);
});
