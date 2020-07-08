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