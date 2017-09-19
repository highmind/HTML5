document.addEventListener('touchmove',function(event){
  event.preventDefault(); },false);

document.documentElement.style.height = window.innerHeight+'px';

function getArrByAttr(cls, attr){
  var tmpArr = [];
  $(cls).each(function(i, el){
      tmpArr[i] = $(el).attr(attr);
  })
  return tmpArr;
}

function getDataArr(dataArr, swiperLength){
  var tmpArr = [];
  var tmpNum = 0;
  for(var i = 0; i < swiperLength; i++){
      tmpArr[i] = 0;
      for(var j = 0; j < dataArr.length; j++){
        tmpNum = (j == dataArr.length - 1) ? swiperLength : dataArr[j+1];
        if(i >= parseInt(dataArr[j]) && i < tmpNum ){
          tmpArr[i] = j;
        }
      }
  }

  return tmpArr;
}

function setNavActive(elCls, activeCls) {
  $(elCls).eq(data[swiper.activeIndex]).addClass(activeCls).siblings().removeClass(activeCls);
}


var dataIndexArr = getArrByAttr('.btn', 'data-index');
var swiperLength = $('.swiper-slide').length;
var data = getDataArr(dataIndexArr, swiperLength);
var  swiper = new Swiper('.swiper-container', {
        lazyLoading : true,

        lazyLoadingInPrevNext : true,

        lazyLoadingInPrevNextAmount : 2,

        lazyLoadingOnTransitionStart : true,

        pagination: '.swiper-pagination',

        paginationClickable: true,

        direction: 'vertical',
        speed:600,

        onInit: function(swiper){ 
          swiperAnimateCache(swiper); 
          swiperAnimate(swiper); 
        },

        onSlideChangeEnd: function(swiper){
          setNavActive('.nav .btn', 'active');
          if(swiper.activeIndex >= 1){
             $('.nav').show();
          }
          else{
            $('.nav').hide();
          }
          swiperAnimate(swiper);
        }
        ,
        onSlideChangeStart: function(swiper){
          if(swiper.activeIndex < 1){
             $('.nav').hide();
          }
          else{
             $('.nav').show();
          }
        }


    });
    function goToSlide(obj, index){
      swiper.slideTo(index, 1000, true);
    };

    $('.nav .btn,.btn1,.page .btn2').click(function(){
       var i = $(this).attr('data-index');
       goToSlide(swiper, i);
       $('.nav').show("speed",2000);
    });
    $('.page .btn2').click(function(){
       $('.nav').hide(); 
    });



    var ids = document.getElementById('media');
    function play(){
      ids.play();
      document.removeEventListener("touchstart", play, false);
    };

    touch.on('#btn', 'tap', function(e){
        if(ids.paused){
            $(this).removeClass('off').addClass('on');
            $("#pic").removeClass('image');
            ids.play();
        }else{
            $("#pic").addClass('image');
            $(this).removeClass('on').addClass('off');
            ids.pause();
          }
          e.stopPropagation();
    });
    document.addEventListener('touchstart', play, false);
    document.addEventListener("WeixinJSBridgeReady", function () {
            var bgMusic = window.document.getElementById("media");
            bgMusic.play();
        }, false);
