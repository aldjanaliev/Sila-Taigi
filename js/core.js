$(document).ready(function(){

//  -----fancybox---------
  $(".fancybox").fancybox();

    $('.products_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
							centerMode: true,
							arrows: false,
            }
          }
                
        ]
            
      });

			$('.burger-btn').on('click', function(event){
				$(this).toggleClass('burger-active');
				$('.menu-burger').slideToggle(300);
			})
});