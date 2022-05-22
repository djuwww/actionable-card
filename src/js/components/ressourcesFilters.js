

export default {
	when() {
			return $('.ressources__taxonomy').length > 0;
	},

	mounted() {
		console.log('ressources')
		console.log($('.ressources__taxonomy a'));

		$('.ressources__taxonomy').on('click', 'a', function(e) {
			e.preventDefault();
			let $this = $(this);
			let href = $this.attr('href');

			$('.ressources__taxonomy a').removeClass('actif');
			
			$this.addClass('actif');
			
			$.ajax(href)
					.done(function(data) {
						//get next article and push at the end
						let targetArticle = $(data).find('.section--ressources .container').html();
						$('.section--ressources .container').html('');
						$('.section--ressources .container').append( targetArticle );
						
				})
				.fail(function(jqxhr) {
						alert(jqxhr.responseText);
				});
		});
	},
};
