import Rellax from "rellax";

export default {
	when() {
			return $('.rellax').length > 0;
	},

	mounted() {
		var rellax = new Rellax('.rellax', {
			breakpoints:[576, 768, 1201]
		});
	},
};
