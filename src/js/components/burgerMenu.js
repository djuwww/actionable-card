export default {
	when() {
			return $('.burger__menu').length > 0;
	},

	mounted() {
		$('.burger__menu').on('click', function(e) {
			e.preventDefault();

			$('body').toggleClass('menu--open');

			// $('.section--tab').each(function( index ) {
			// 	if($(this).hasClass("section--tab-" + id)) {
			// 		$(this).removeClass('d-none');
			// 	} else {
			// 		$(this).addClass('d-none');
			// 	}
			// });

			var is_mobile = false;

			if( $('#sm').css('display')=='none') {
				is_mobile = true;
			}

			if (is_mobile == true) {
				//Conditional script here
				console.log('mobile');
				$('.menu-item-has-children').on('click', function(e) {
					$(this).toggleClass('open');
					$(this).on('click', 'a', function(e) {

					});
				});
			}
		});
	},
};
