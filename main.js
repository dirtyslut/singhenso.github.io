$(document).ready(function(){
 });

  $('#name').hover(function() {
    $main_text=$(this).text();
    $(this).text("Welcome to my Website").fadeIn();
  }, function() {
    $(this).text($main_text);

  });

  $('nav a').click(function () {
   var $href = $(this).attr('href');
   $('body').stop().animate({
     scrollTop: $($href).offset().top
   }, 1000);
   return false;
  });



$('.carousel').Carousel();
