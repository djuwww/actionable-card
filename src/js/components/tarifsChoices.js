export default {
	when() {
			return $('.form__choices').length > 0;
	},

	mounted() {
		$('.form__choices').on('click', 'a', function(e) {
			e.preventDefault();

			let id = $(this).attr('href');
			id = id.substring(1);

			$('.form__choices a').each(function( index ) {
				$( this ).removeClass('actif');
			});

			$(this).addClass('actif');

			$('.form__container .tarifs__form').each(function( index ) {
				if($(this).hasClass(id)) {
					$(this).removeClass('d-none');
				} else {
					$(this).addClass('d-none');
				}
			});


		});
	},
};
