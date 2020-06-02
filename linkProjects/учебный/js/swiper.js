var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
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
                  slidesPerView:2
              },

              1024:{
                  slidesPerView:5
              }
    }
    
  });