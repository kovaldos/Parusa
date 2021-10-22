const swiper = new Swiper(".reviews__slider", {
  loop: false,
  speed: 800,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  watchOverflow: false,
  navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },
});

new Accordion(".faq__accordion");
