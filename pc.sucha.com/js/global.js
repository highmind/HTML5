$(document).ready(function(){
    /*导航*/
    $('.userSe').hover(function(){
        $(this).addClass('cur');
        $('.userSe dd').show();
    },function(){
        $(this).removeClass('cur');
        $('.userSe dd').hide();
    });

});