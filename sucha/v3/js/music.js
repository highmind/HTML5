var ids = document.getElementById("media");

function play() {
    ids.play();
    document.removeEventListener("touchstart", play, false)
}
$("#btn").click(function(a) {
    if (ids.paused) {
        $(this).removeClass("off").addClass("on");
        $("#pic").removeClass("image");
        ids.play()
    } else {
        $("#pic").addClass("image");
        $(this).removeClass("on").addClass("off");
        ids.pause()
    }
    a.stopPropagation()
});

document.addEventListener("touchstart", play, false);
document.addEventListener("WeixinJSBridgeReady", function() {
    var a = window.document.getElementById("media");
    a.play()
}, false);