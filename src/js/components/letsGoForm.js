export default {
	when() {
			return $('.segments__top .btn').length > 0;
	},

	mounted() {
		function openForm(id) {
			$('body').addClass('modal-form');

			$('.go__form').each(function( index ) {
				if($(this).hasClass("go__form--" + id)) {
					$(this).removeClass('d-none');
				} else {
					$(this).addClass('d-none');
				}
			});

			$('.lets-go__form svg').on('click', function(e) {
				$('body').removeClass('modal-form');
			});
		}

		if(window.location.href.indexOf("?demo=") > -1) {
			let id = window.location.href.split("=").pop();
			openForm(id);
		}

		$('.segments__top').on('click', 'a', function(e) {
			e.preventDefault();
			let id = $(this).attr('href').split("=").pop();
			openForm(id);
		});
	},
};
