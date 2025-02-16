// Smooth Scroll: zapewnia płynne przewijanie po kliknięciu w linki z kotwicami
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer: dodaje klasę fade-in, gdy sekcja wchodzi w widoczny obszar
const faders = document.querySelectorAll('section');
const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});

// Inicjalizacja biblioteki Vanilla Tilt dla efektu 3D na kafelkach projektów
VanillaTilt.init(document.querySelectorAll(".project-tile"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});
