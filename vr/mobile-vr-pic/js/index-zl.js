
function createPhotoViewer(sContainer, sImgUrl){

   var view = document.getElementById(sContainer);
   var PSV = new PhotoSphereViewer({
		panorama: sImgUrl,

		allow_scroll_to_zoom:true,

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

		navbar:false,

		// anim_speed:1
		vertical_anim_speed:10000,

		tilt_up_max:0,  // 禁止上看

		tilt_down_max:0, // 禁止下看

		loading_html:'<div class="loadid" data-loader="spinner" id="waha"></div>',

		onready:function(){
		 console.log('ready...');
		 document.getElementById("wfff").style.display = "block";
		}

	});

    return PSV;
}

// 必须用ready，否则UC移动端会有问题
$(document).ready(function(){

	var psvindex = createPhotoViewer('yourindex', 'images/yinhe.jpg');
     // psvindex.load();
	setTimeout(function(){ // 300ms以后, 开启重力感应
		psvindex.toggleDeviceOrientation();
	},300);	

 })