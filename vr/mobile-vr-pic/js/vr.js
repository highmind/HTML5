// vr 插件 依赖于 zepto或者 jquery
/**
	@params 
	sContainer 外层容器  id 
	sImageUrl  图片路径
	sWidth     全景图 最终宽度
	sHeight    全景图 最终高度              
**/
function createPhotoViewer(sContainer, sImgUrl, sWidth, sHeight){
   var vrWrap = $(sContainer);
   var vrBox = vrWrap.find('.vr-box');  //vr生成需要的容器
   var vrTip = vrWrap.find('.vr-tip');        // 获取主容器下的 提示容器 
   var closeBtn = vrWrap.find('.vr-fullscreen-close');   
   var isFull = false;                        // 是否全屏 标识

   var PSV = new PhotoSphereViewer({
		panorama: sImgUrl,
		allow_scroll_to_zoom:false,
		container: vrBox.get(0),          // 使用原生DOM
		// tilt_up_max: 0,                // 打开注释 则 关闭上下旋转
		// tilt_down_max: 0,
		time_anim: false,
		navbar: false,
		size: {
			width: sWidth,
			height: sHeight
		},
		usexmpdata: false,
		vertical_anim_speed:10000,
		loading_html:'<div class="vr-loader" data-loader="spinner"></div>',
		onready:function(){
			vrTip.show();
		}

	});
  

  vrWrap.click(function(){
  	 FullScreen($(this), vrBox, closeBtn, PSV);
  });

  closeBtn.click(function(e){
  	PSV.toggleAutorotate();
  })

	vrWrap.on("touchstart", hideLayer , false);
  
  $(window).resize(function(){  //窗口缩放，即屏幕旋转时
  	if(isFull){
  		vrBox.css({
					'width': $(window).width(),
					'height': $(window).height(),
					'position':'fixed',
					'left':0,
					'top':0,
					'zIndex':300
				});
  	}
  });

	function hideLayer(){
		vrTip.hide();
	}

	function FullScreen(oLayer, oTargetPano, oCloseBtn, PSV){
    	if(!isFull){

				// oLayer.css({
				// 	'position':'static'
				// });

				oTargetPano.css({
					'width': $(window).width(),
					'height': $(window).height(),
					'position':'fixed',
					'left':0,
					'top':0,
					'zIndex':300
				});

        closeBtn.show();

				PSV.fitToContainer();
				PSV.toggleAutorotate();    //开启自动旋转
				isFull = true;
			}else{

				oTargetPano.css({
					'width': sWidth,
					'height': sHeight,
					'position':'static',
					'left':0,
					'top':0,
					'zIndex':100
				});

				closeBtn.hide();
				setTimeout(function(){ //300ms 以后 显示 tip提示框
					vrTip.show();
				}, 300);

				PSV.fitToContainer();
				isFull = false;
			}
    }

  return PSV;

}

