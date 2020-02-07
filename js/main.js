let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints : {
    540: {
      slidesPerView: 2,
    }
  },
});

let menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('header-active');
  document.querySelector('.menu-btn').classList.toggle('menu-button-active');
});

