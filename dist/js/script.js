$(document).ready(function() {
    var windowWidth = $(window).width();
    if(windowWidth <= 1024)
    $("#connect").remove('.header__connect')
});

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

$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger').toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'), 
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $('#up').click(function() {  
        $('body,html').animate({scrollTop:0},1000); 
      })  
});

$(document).ready(function(){
    $('.slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
		variableWidth: true,
        responsive: [
	    {
	      breakpoint: 769,
	      settings: {
			slidesToShow: 2,
			arrow: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
      });
  });