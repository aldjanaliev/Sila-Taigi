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


			$('.catalog_burger').on('click', function(event){
        $(this).toggleClass('catalog_burger-active');
        $('.catalog_in-nav-wrap').slideToggle(300);
      })

			$('.catalog_in-link').on('click', function(event){
        if(!$(this).hasClass('catalog_in-link__active')){
					$('.catalog_in-link').removeClass('catalog_in-link__active');
					$(this).addClass('catalog_in-link__active');
				}
      })

			document.querySelector('.order_counter-value').addEventListener('input', 
				function(e){
					this.value = this.value.replace(/[^\d.]/g, '');
				}
			)
			const btns = document.querySelectorAll('.order_couner');
			btns.forEach(btn => {
				btn.addEventListener('click', function(){
					const direction = this.dataset.direction;
					const inp = this.parentElement.querySelector('.order_counter-value');
					const currentValue = +inp.value;
					let newValue;
					if(direction === 'plus'){
						newValue = currentValue + 1
					} else{
						newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
					}
					inp.value = newValue
				})
			})

			
			

});


let selector = document.querySelectorAll('input[type="tel"]');
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);

	const validation = new JustValidate('#form');

	validation
		.addField('#name', [
			{
				rule: 'required',
				errorMessage: 'Введите имя!',
			},
			{
				rule: 'minLength',
				value: 3,
				errorMessage: 'Слишком короткое имя!',
			},
			{
				rule: 'maxLength',
				value: 30,
				errorMessage: 'Слишком длинное имя!',
			},
		])
		.addField('#tel', [
			{
				rule: 'required',
				errorMessage: 'Введите номер телефона!',
			},
			{
				rule: 'minLength',
				value: 12,
				errorMessage: 'Введите корректный номер!',
			},
		])
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Введите адрес почты!',
			},
			{
				rule: 'email',
				errorMessage: 'Неверный адрес почты!',
			},
		]);

// let validateForms = function(selector, rules, successModal, yaGoal){
// 	new window.justValidate(selector, {
// 		rules: rules,
// 		submitHandler: function(form){

// 		}
// 	})
// }
// validateForms('#formValidation', {email: {required: true, email: true}, tel:{required: true}}, '.thanks-popup')