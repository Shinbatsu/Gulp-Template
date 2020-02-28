const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
  });