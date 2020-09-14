$(document).ready(function () {
  /* SLIDER SETTING FIRST  */
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 374.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  /* SLIDER SETTING SECOND  */
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    infinite: false,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          arrows: true
        }
      }
    ]
  });

  /* SLIDER-COUNTER AND DISABLED BUTTONS*/
  $('.slick-arrow.slick-prev').addClass('disabled')
  if ($(window).width() < '767.98') {
    $('.slider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

      /* MOBILE */


      /* DISABLED BUTTONS */
      if (nextSlide >= ($('.slider-nav.mob div.slide_first').length) - 2) {
        $('.slick-arrow.slick-next').addClass('disabled')
      } else {
        $('.slick-arrow.slick-next').removeClass('disabled')
      }
      if (nextSlide == 0) {
        $('.slick-arrow.slick-prev').addClass('disabled')
      } else {
        $('.slick-arrow.slick-prev').removeClass('disabled')
      }
      if (nextSlide == ($('.slider-nav.mob div.slide_first').length) - 1) {
        $('.slider_counter').text(nextSlide)
      } else {
        $('.slider_counter').text(nextSlide + 1);
      }
    })


    /* COUNT OF SLIDES */
    $('.slider_countAllSlides')
      .html($('.slider-nav.mob div.slide_first').length - 1)
  } else {


    /* DESKTOP */


    $('.slider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {


      /* DISABLED BUTTONS */
      if (nextSlide >= ($('.slider-nav.mob div.slide_first').length) - 2) {
        $('.slick-arrow.slick-next').addClass('disabled')
      } else {
        $('.slick-arrow.slick-next').removeClass('disabled')
      }
      if (nextSlide == 0) {
        $('.slick-arrow.slick-prev').addClass('disabled')
      } else {
        $('.slick-arrow.slick-prev').removeClass('disabled')
      }
      if (nextSlide == ($('.slider-nav.mob div.slide_first').length) - 1) {
        $('.slider_counter').text(nextSlide)
      } else {
        $('.slider_counter').text(nextSlide + 1);
      }
    })


    /* COUNT OF SLIDES */
    $('.slider_countAllSlides')
      .html($('.slider-nav.mob div.slide_first').length - 1)

  }


});






