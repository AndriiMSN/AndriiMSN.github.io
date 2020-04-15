var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    }, navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
              0:{
                  slidesPerView:1
              },

              600:{
                  slidesPerView:1
              },

              1024:{
                  slidesPerView:1
              }
    }
    
  });