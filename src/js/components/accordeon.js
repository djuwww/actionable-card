export default {
	when() {
			return $('.accordeon').length > 0;
	},

	mounted() {
		$('.accordeon').on('click', function(e) {
			
			$(this).toggleClass('actif');

		});
	},
};
