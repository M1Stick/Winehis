$(document).ready(function() {
  $('.header__order').click(function() {
    $('body').toggleClass('lock');
  })
});
$(document).ready(function() {
  $('.price__content-order').click(function() {
    $('body').toggleClass('lock');
  })
});
$(document).ready(function() {
  $('.header__popup-close').click(function() {
    $('body').removeClass('lock');
  })
});
$(document).bind( 'mousewheel', function (e) { 
  let nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
  e.preventDefault(); 
  e.stopPropagation(); 
  $(document.body).stop().animate( { 
       scrollTop : nt 
   } , 500 , 'easeInOutCubic' );  
});



@@include('_slider.js')