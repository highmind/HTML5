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