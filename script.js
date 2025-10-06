document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');

  hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
  });

  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      scrollToSection(id);
      navbarLinks.classList.remove('open');
    });
  });
});

function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = 100;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
