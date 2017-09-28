document.addEventListener('touchmove',function(event){
  event.preventDefault(); },false);

document.documentElement.style.height = window.innerHeight+'px';
//通过属性返回数组
//cls 类名或者id名
//attr 属性名
function getArrByAttr(cls, attr){
  var tmpArr = [];
  $(cls).each(function(i, el){
      tmpArr[i] = $(el).attr(attr);
  })
  return tmpArr;
}


//获得索引和导航对应的数组
// 通过swiperslide的长度和 索引对应数组
// return array [0,0,0,0,0,2,2,2]
function getDataArr(dataArr, swiperLength){
  var tmpArr = [];
  var tmpNum = 0;
  for(var i = 0; i < swiperLength; i++){
      tmpArr[i] = 0;
      for(var j = 0; j < dataArr.length; j++){
        tmpNum = (j == dataArr.length - 1) ? swiperLength : dataArr[j+1];//如果是最后一个，则使用最后一个的值
        if(i >= parseInt(dataArr[j]) && i < tmpNum ){
          tmpArr[i] = j;
        }
      }
  }

  return tmpArr;
}

// 设置导航当前样式
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

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          swiperAnimateCache(swiper); //隐藏动画元素 
          swiperAnimate(swiper); //初始化完成开始动画
        }, 
        
        onSlideChangeEnd: function(swiper){ 
          setNavActive('.nav .btn', 'active');//设置导航样式，根据项目可删除
          if(swiper.activeIndex >= 2){
             $('.nav').show();     //滑动到第三屏时，显示底部导航
          }
          else{
            $('.nav').hide();
          }
          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        } 
        ,
        onSlideChangeStart: function(swiper){
          if(swiper.activeIndex < 2){
             $('.nav').hide();      //当滑块将要回到顶部首页时，隐藏底部导航
          }
          else{
             $('.nav').show();
          }
        }
      

    });
    function goToSlide(obj, index){
      swiper.slideTo(index, 1000, true);
    };
     
    $('.nav .btn,.nav-index .btn1').click(function(){
       var i = $(this).attr('data-index');
       goToSlide(swiper, i);
       $('.nav').show("speed",2000);
    });
        
/* Music */
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

