

export default {
	when() {
			return $('nav').length > 0;
	},

	mounted() {
		var prevScrollpos = window.pageYOffset;
		$('body').addClass('nav--show nav--top');
		window.onscroll = function() {
			var st = $(this).scrollTop();
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
				if(currentScrollPos < 500 || st === 0) {
					$('body').addClass('nav--show nav--top');
				} else {
					$('body').addClass('nav--show');
				}
			} else {
				if(currentScrollPos > 500) {
					$('body').removeClass('nav--show nav--top');
				}
			}
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
				$('body').addClass('nav--show');
			}, 2000));
			prevScrollpos = currentScrollPos;
		}
		
		$('.wpml-ls-current-language > a').on('click', function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('actif');
		});
	},
};
