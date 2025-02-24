document.addEventListener('DOMContentLoaded', function() {
  // Zakładki w sekcji produktów – tylko aktywny kontener będzie widoczny
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tab = this.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });

  // Slider dla każdej karty produktu
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

    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });

    // Po kliknięciu na zdjęcie otwórz modal
    slides.forEach((slide, index) => {
      slide.addEventListener('click', function(e) {
        openModal(slides, index);
      });
    });
  });

  // Modal dla pełnoekranowego podglądu zdjęcia
  const modal = document.getElementById('modal');
  const modalImg = modal.querySelector('.modal-img');
  const modalPrev = modal.querySelector('.modal-prev');
  const modalNext = modal.querySelector('.modal-next');
  const modalClose = modal.querySelector('.modal-close');
  let modalSlides = [];
  let modalCurrentIndex = 0;

  function openModal(slides, index) {
    modalSlides = Array.from(slides).map(slide => slide.src);
    modalCurrentIndex = index;
    modalImg.src = modalSlides[modalCurrentIndex];
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  modalPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    modalCurrentIndex = (modalCurrentIndex === 0) ? modalSlides.length - 1 : modalCurrentIndex - 1;
    modalImg.src = modalSlides[modalCurrentIndex];
  });

  modalNext.addEventListener('click', function(e) {
    e.stopPropagation();
    modalCurrentIndex = (modalCurrentIndex === modalSlides.length - 1) ? 0 : modalCurrentIndex + 1;
    modalImg.src = modalSlides[modalCurrentIndex];
  });

  modalClose.addEventListener('click', function() {
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if(e.target === modal) {
      closeModal();
    }
  });
});
