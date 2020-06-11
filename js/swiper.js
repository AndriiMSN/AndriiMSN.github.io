var sliders = [];

$(".swiper-container").each(function (index, element) {
  var $this = $(this);
  $this.addClass("instance-" + index);
  $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
  $this.find(".swiper-button-next").addClass("btn-next-" + index);
  console.log(index);
  var swiper = new Swiper(".instance-" + index, {
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.btn-next-' + index,
      prevEl: '.btn-prev-' + index,
    },
    breakpoints: {
      0: {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 0
      },
      320: {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 0
      },
      575: {
        effect: 'slide',
        slidesPerView: 1
      },

      768: {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }

  });
});
