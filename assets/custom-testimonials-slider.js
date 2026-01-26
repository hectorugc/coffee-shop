// external js: flickity.pkgd.js
const carrousels = document.querySelectorAll(".carousel-container");
console.log(carrousels);

carrousels.forEach((container) => {
	new Flickity(container, {
		// options
		wrapAround: true,
		pageDots: true,
        pauseAutoPlayOnHover: false,
    	cellAlign: 'center',
        adaptiveHeight: false,
		accessibility: true,
		imagesLoaded: true,
		percentPosition: true
		
});

});