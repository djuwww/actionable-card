export default {
	when() {
			return $('.nav__element').length > 0;
	},

	mounted() {
		$('.nav__element').on('click', 'a', function(e) {
			e.preventDefault();

			let id = $(this).attr('href');
			id = id.substring(1).split('=')[1];

			$('.nav__element a').each(function( index ) {
				$( this ).removeClass('actif');
			});
			$(this).addClass('actif');

			$('.header--tabulations .img').each(function( index ) {
				if($(this).hasClass("img--" + id)) {
					$(this).removeClass('d-none');
				} else {
					$(this).addClass('d-none');
				}
			});

			$('.section--tab').each(function( index ) {
				if($(this).hasClass("section--tab-" + id)) {
					$(this).removeClass('d-none');
				} else {
					$(this).addClass('d-none');
				}
			});

		});
	},
};
