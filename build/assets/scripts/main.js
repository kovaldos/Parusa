const swiper = new Swiper(".reviews__slider", {
  loop: false,
  speed: 800,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  watchOverflow: false,
  navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev"
  },
});

new Accordion('.faq__accordion');
