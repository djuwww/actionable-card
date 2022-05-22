/**
 * External Dependencies
 */

import $ from 'jquery';
import 'bootstrap';
import AOS from 'aos';
import Rellax from "rellax";

$(document).ready(() => {
		$(window).scrollTop(0);
		
		aosInit();

		function aosInit() {
			AOS.init({
				// Global settings:
				disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
				startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
				initClassName: 'aos-init', // class applied after initialization
				animatedClassName: 'aos-animate', // class applied on animation
				useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
				disableMutationObserver: false, // disables automatic mutations' detections (advanced)
				debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
				throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
				
				// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
				offset: 140, // offset (in px) from the original trigger point
				delay: 0, // values from 0 to 3000, with step 50ms
				duration: 400, // values from 0 to 3000, with step 50ms
				easing: 'ease', // default easing for AOS animations
				once: true, // whether animation should happen only once - while scrolling down
				mirror: false, // whether elements should animate out while scrolling past them
				anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
			});
		}

		
		// Curseur
		
		var cursor = $('.cursor');
		$(window).scrollTop(0);
		

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

		$('.card--artist h2')
				.mouseenter(function() {
					cursor.addClass('cursor--big');
        })
        .mouseleave(function() {
					cursor.removeClass('cursor--big');
        });
		$('a')
				.mouseenter(function() {
					cursor.addClass('cursor--big');
        })
        .mouseleave(function() {
					cursor.removeClass('cursor--big');
        });
		
		$('.card--artist').on('click', function() {
			let $this = $(this);
			let id = $this.attr('data-artist');
			let video = $this.find('video');

			$(window).scrollTop(0);
			$('body').toggleClass('artist--open');

			unmuteVideo(video, id);

			$this.toggleClass('open');
		});

		$('nav h3').on('click', function() {
			$(window).scrollTop(0);
			$('body').removeClass('artist--open');
			$('.card--artist').each(function () {
				let $this = $(this);
				if($this.hasClass('open')) {
					$this.removeClass('open');
					let video = $this.find('video');
					console.log(video);
					unmuteVideo(video);
				}
			});
		});

		initRellax();

		function initRellax() {
			var rellax;
			if ($('.rellax').length) rellax = new Rellax('.rellax');
			
			if(window.innerWidth > 810) {
				var rellax = new Rellax('.rellax', {
					breakpoints:[576, 768, 1201]
				});
			} else {
				$('.rellax').each(function () {
					console.log('plus petit');
					rellax.destroy(); 
					$(this).removeClass('rellax');
				});
			}
		}

		$(window).resize(function(){
			initRellax();
			aosInit();
		});

		function unmuteVideo(video, id) {
			video[0].pause();
			video.prop('muted', !video.prop('muted'));
			video.html('<source src="images/' + id + '/' + id + '.mp4" type="video/mp4"></source>' );
			video[0].load();
		}


	
});

