
function createPhotoViewer1(sContainer, sImgUrl){

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
			width: '95%',
			height: '282px'
		},

		// No XMP data
		usexmpdata: false,

		// anim_speed:1
		vertical_anim_speed:10000,

		loading_html:'<div class="loadid" data-loader="spinner" id="waha"></div>',

		onready:function(){

			document.getElementById("wufawut1").style.display = "block";
			document.getElementById("wufawut2").style.display = "block";
			document.getElementById("wufawut3").style.display = "block";
			document.getElementById("wufawut4").style.display = "block";
			document.getElementById("wufawut5").style.display = "block";
			document.getElementById("wufawut6").style.display = "block";
			document.getElementById("wufawut7").style.display = "block";
			document.getElementById("wufawut8").style.display = "block";

		}

	});

    return PSV;


}


window.onload = function(){

	// var psv1 = createPhotoViewer('your-pano', 'images/wuzi.jpg');
	var psv2 = createPhotoViewer1('yourpano2', 'images/ykt-qj1.jpg');
	var psv3 = createPhotoViewer1('yourpano3', 'images/wuzi.jpg');
	var psv4 = createPhotoViewer1('yourpano4', 'images/wow.jpg');
	var psv5 = createPhotoViewer1('yourpano5', 'images/bigda.jpg');

	// var openBtn1 = document.getElementById('openBtn1');
	var openBtn2 = document.getElementById('openBtn2');
	var openBtn3 = document.getElementById('openBtn3');
	var openBtn4 = document.getElementById('openBtn4');
	var openBtn5 = document.getElementById('openBtn5');
	

    var isFull = false;


    function FullScreen(sLayerId, sTargetPano, PSV){
    	if(!isFull){

				$(sLayerId).css({
					'position':'static'
				});

				$(sTargetPano).css({
				'width': $(window).width(),
				'height': $(window).height(),
				'position':'fixed',
				'left':0,
				'top':0,
				'zIndex':300
				});
				PSV.fitToContainer();
				PSV.toggleAutorotate();
				isFull = true;
			}else{
				$(sTargetPano).css({
				'width': '95%',
				'height': '282px',
				'position':'static',
				'left':0,
				'top':0,
				'zIndex':100
				})
				PSV.fitToContainer();
				isFull = false;
			}
    }

 

	openBtn2.onclick = function(){		
	  FullScreen('#openBtn2', '#yourpano2', psv2);
	}

	openBtn3.onclick = function(){		
	  FullScreen('#openBtn3', '#yourpano3', psv3);
	}

	openBtn4.onclick = function(){		
	  FullScreen('#openBtn4', '#yourpano4', psv4);
	}
	openBtn5.onclick = function(){		
	  FullScreen('#openBtn5', '#yourpano5', psv5);
	}

	document.getElementById('openBtn2').addEventListener("touchstart", _touch , false);
	document.getElementById('openBtn3').addEventListener("touchstart", _touch1 , false);
	document.getElementById('openBtn4').addEventListener("touchstart", _touch2 , false);
	document.getElementById('openBtn5').addEventListener("touchstart", _touch3 , false);
	function _touch(){
		document.getElementById("wufawut1").style.display = "none";
		document.getElementById("wufawut2").style.display = "none";
	}
	function _touch1(){
		document.getElementById("wufawut3").style.display = "none";
		document.getElementById("wufawut4").style.display = "none";
	}
	function _touch2(){
		document.getElementById("wufawut5").style.display = "none";
		document.getElementById("wufawut6").style.display = "none";
	}
	function _touch3(){
		document.getElementById("wufawut7").style.display = "none";
		document.getElementById("wufawut8").style.display = "none";
	}

    
}
