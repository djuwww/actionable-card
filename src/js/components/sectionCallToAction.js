import Parallax from 'parallax-js';

export default {
	when() {
			return $('#perspective').length > 0;
	},

	mounted() {
		var scene = document.getElementById('perspective');
		var parallaxInstance = new Parallax(scene);
	},
};
