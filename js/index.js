$(document).ready(function () {
  const burger = $('.burger');
  const menu = $('.nav');
  const item = $('.nav__href');

  item.click((e) => {
    menu.removeClass("active");
    burger.removeClass("active");
    $("body").removeClass("lock");
  })

  burger.click((e) => {
    menu.toggleClass("active");
    burger.toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".nav__href").select(function () { 
    $(".nav__href").toggleClass("active");
  });



  $('.slider').slick({
    arrows: true,
    prevArrow:'<button class="scroll-bar__left fas fa-angle-left"></button>',
    nextArrow: '<button class="scroll-bar__right fas fa-angle-right"></button>'
  });
});

