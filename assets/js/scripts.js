document.addEventListener('DOMContentLoaded', function() {
  // Funkcjonalność zakładek w sekcji produktów
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tab = this.getAttribute('data-tab');
      // Usuń klasę 'active' ze wszystkich przycisków i treści
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      // Aktywuj kliknięty przycisk i odpowiadającą treść
      this.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });

  // Funkcjonalność sliderów dla każdej karty produktu
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });
  });
});
