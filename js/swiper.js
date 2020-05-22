var sliders = [];

$(".swiper-container").each(function(index, element){
  var $this = $(this);
  $this.addClass("instance-" + index);
  $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
  $this.find(".swiper-button-next").addClass("btn-next-" + index);
  console.log(index);
  var swiper = new Swiper(".instance-" + index, {
    slidesPerView:1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.btn-next-' + index,
      prevEl: '.btn-prev-' + index,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
        spaceBetween: 0
      },
      320:{
        slidesPerView:1,
        spaceBetween: 0
      },
      575:{
        slidesPerView:1
      },

      768:{
        slidesPerView:1,
        spaceBetween: 10
      },
      992:{
        slidesPerView:1,
        spaceBetween: 10
      },
      1300:{
        slidesPerView:1,
        spaceBetween: 0
      }
    }
    
  });
});
