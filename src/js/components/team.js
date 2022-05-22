export default {
	when() {
			return $('.team-container').length > 0;
	},

	mounted() {
		
		$('.team-container').each(function () {
			const $container = $(this);
			const $card = $container.find('.team__el');
			const count = $card.length;
	
			$card.on('click', function (e) {
					const $this = $(this);
					if ($this.hasClass('active')) {
							$this.removeClass('active');
							
							$container
									.find('.team-description')
									.slideUp(400, function () {
											$(this).remove();
									});
					} else {
							// get text
							const text = $this.data('text');
							const winW = $(window).width();
							const template = `<div class="team-description row">
							
							<div class="description__container | col-12 col-lg-8 m-auto">
							<svg version="1.1" class="cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="94.926px" height="94.926px" viewBox="0 0 94.926 94.926" style="enable-background:new 0 0 94.926 94.926;"
	 xml:space="preserve">
<g>
	<path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/>
</g>

</svg>
								${text}
							</div> </div>`;
	
							$card.removeClass('active');
							$this.addClass('active');
	
							$container
									.find('.team-description')
									.slideUp(400, function () {
											$(this).remove();
									});
	
							// get the number of columns, to know where to insert template
							let columns = 1;
							if ($('#sm').is(':visible')) {
									columns = 2;
							}
							if ($('#md').is(':visible')) {
									columns = 3;
							}
	
							// append the template after the right column
							setTimeout(function() {
									const index = $this.index() + 1;
									let eq = 0;
									if (index % columns === 0) {
											eq = index - 1;
									} else {
											eq = index + (columns - (index % columns) - 1);
											if (eq >= count) {
													eq = count - 1;
											}
									}
	
									$(template)
											.insertAfter($card.eq(eq))
											.slideDown(400, function() {
													$('html, body').stop(true, true)
															.animate({
																	scrollTop: $this.offset().top
															}, 500);
											});
											$('.cross').on('click', function () {
												$card.removeClass('active');
												$container
													.find('.team-description')
													.slideUp(400, function () {
															$(this).remove();
													});
											});
							},500);
						}
				});
		});
		
	},
};
