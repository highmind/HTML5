function createPhotoViewer(sContainer, sImgUrl){

   var view = document.getElementById(sContainer);
   var PSV = new PhotoSphereViewer({
		// Panorama, given in base 64
		panorama: sImgUrl,

		// autoload：ture,

		allow_scroll_to_zoom:false,

		// Container
		container: view,

		// Deactivate the animation
		time_anim: false,

		// Display the navigation bar
		navbar: false,

		// Resize the panorama
		size: {
			width: '100%',
			height: '100%'
		},

		// No XMP data
		usexmpdata: false,

		// anim_speed:1
		vertical_anim_speed:10000,

		tilt_up_max:0,

		tilt_down_max:0,

		loading_html:'<div class="loadid" data-loader="spinner" id="waha"></div>',

		onready:function(){
			console.log(PSV)
				// PSVindex.fitToContainer();
			// PSV.toggleDeviceOrientation();
			PSV.toggleAutorotate();
			document.getElementById("wfff").style.display = "block";
		}

	});

    return PSV;


}


window.onload = function(){

	var psvindex = createPhotoViewer('yourindex', 'images/yinhe.jpg');
	


				

 }