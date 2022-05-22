import Parallax from 'parallax-js';

export default {
	when() {
			return $('.fade').length > 0;
	},

	mounted() {
		$('.fade').slick({
			infinite: true,
			speed: 300,
			fade: true,
			autoplay: true,
  		autoplaySpeed: 4000,
			cssEase: 'linear',
			dots: false,
    	prevArrow: false,
    	nextArrow: false
		});

		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);
		
		var test = document.getElementById('test');
		var parallaxInstanceTest = new Parallax(test);

		var rotation = 0, 
		scrollLoc = $(document).scrollTop();

		$(window).scroll(function() {
				var newLoc = $(document).scrollTop();
				var diff = scrollLoc - newLoc;
				rotation -= diff, scrollLoc = newLoc;

				var rotationStr = "rotate(" + (rotation / 10) + "deg)";
				$(".slider__decoration").css({
						"-webkit-transform": rotationStr,
						"-moz-transform": rotationStr,
						"transform": rotationStr
				});
		});

	},
};
