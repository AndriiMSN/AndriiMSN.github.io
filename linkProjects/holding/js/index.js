$(document).ready(function(){
    $('input, textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input, textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });
     
     
    
})
$(window).load(function(){
        $(".phone-mask").inputmask({
            "mask": "+7 (999) 999-99-99",
            "showMaskOnHover": false,
        });
    });


    $(".mobile-buter").click(function(){
      $(this).toggleClass("open-buter");
      $(".header-menu").slideToggle(200);
      $(".mobile-text").hide();
      $("body > header > nav:nth-child(1) > div > div > div:nth-child(2)").hide();
    });
    
    $(document).mouseup(function (e) {
      if($(window).width() < '1340'){
        var container = $(".header-block");
          if (!container.is(e.target) && container.has(e.target).length === 0){
            $(".mobile-buter").removeClass("open-buter");
              $(".header-menu").slideUp(200);
                $(".mobile-text").show(200);
                  $("body > header > nav:nth-child(1) > div > div > div:nth-child(2)").show(200)
          }
      }
    });	
    $(".mobile-buter").click(function(){
      if($(window).width() < '575'){
        $("body > header > nav:nth-child(1) > div > div > div.column").hide();
      }
    });
    $(document).mouseup(function (e) {
      if($(window).width() < '575'){
        var container = $(".header-block");
          if (!container.is(e.target) && container.has(e.target).length === 0){
            $("body > header > nav:nth-child(1) > div > div > div:nth-child(2)").show()
            $("body > header > nav:nth-child(1) > div > div > div.column").show();
          }
      }
    });	
    $(document).mouseup(function (e) {
      if($(window).width() < '355'){
        var container = $(".header-block");
          if (!container.is(e.target) && container.has(e.target).length === 0){
            $("body > header > nav:nth-child(1) > div > div > div:nth-child(2)").hide()
            $("body > header > nav:nth-child(1) > div > div > div.column").show();
          }
      }
    });	

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
                    slidesPerView:1,
                    spaceBetween: 0
                },
                320:{
                  slidesPerView:2,
                    spaceBetween: 0
                },
                575:{
                  slidesPerView:2
                },
  
                768:{
                    slidesPerView:3,
                    spaceBetween: 10
                },
                992:{
                  slidesPerView:4,
                  spaceBetween: 10
              },
                1300:{
                    slidesPerView:5,
                    spaceBetween: 0
                }
      }
      
    });
    
  