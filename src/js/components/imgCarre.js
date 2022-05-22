export default {
	when() {
			return $('.img--carre').length > 0;
	},

	mounted() {
		
		resizePictures();

		$( window ).resize(function() {
			resizePictures();
		});
		
		function resizePictures(){
			if ($('#lg').is(':visible')) {
		
				let pictures = document.querySelectorAll(".img--carre");
				if (pictures.length != 0) {
					
					for(let i = 1; i <= pictures.length; i++){
							let picturesWidth = pictures[i - 1];
							let widthPictures = picturesWidth.clientWidth ;
							console.log(widthPictures);
								if ((i - 1) == pictures.length) {
										pictures[i].style.height = (widthPictures)+"px";
								}else {
										pictures[i - 1].style.height = (widthPictures)+"px";
								}
						}
				}
			}
		}


	},
};
