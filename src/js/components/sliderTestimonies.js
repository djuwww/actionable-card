export default {
	when() {
			return $('.slider--testimonies').length > 0;
	},

	mounted() {
		$('.slider--testimonies').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<div class="btn--arrow btn--arrow--prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="white"/><path d="M35.9531 25C35.9531 25.6562 35.4375 26.1719 34.8281 26.1719H18.8906L25.125 32.0781C25.5938 32.5 25.5938 33.25 25.1719 33.6719C24.75 34.1406 24.0469 34.1406 23.5781 33.7188L15.3281 25.8438C15.0938 25.6094 15 25.3281 15 25C15 24.7188 15.0938 24.4375 15.3281 24.2031L23.5781 16.3281C24.0469 15.9062 24.75 15.9062 25.1719 16.375C25.5938 16.7969 25.5938 17.5469 25.125 17.9688L18.8906 23.875H34.8281C35.4844 23.875 35.9531 24.3906 35.9531 25Z" fill="#2881FF"/></svg></div>',
			nextArrow: '<div class="btn--arrow btn--arrow--next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="white"/><path d="M27.375 16.3281L35.625 24.2031C35.8594 24.4375 36 24.7188 36 25.0469C36 25.3281 35.8594 25.6094 35.625 25.8438L27.375 33.7188C26.9531 34.1406 26.2031 34.1406 25.7812 33.6719C25.3594 33.25 25.3594 32.5 25.8281 32.0781L32.0625 26.1719H16.125C15.4688 26.1719 15 25.6562 15 25.0469C15 24.3906 15.4688 23.9219 16.125 23.9219H32.0625L25.8281 17.9688C25.3594 17.5469 25.3594 16.7969 25.7812 16.375C26.2031 15.9062 26.9062 15.9062 27.375 16.3281Z" fill="#2881FF"/></svg></div>',
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						arrows: true,
						centerMode: true,
						centerPadding: '14px',
						slidesToShow: 1,
					},
				},
			],
		});
	},
};
