/**
 * Created by Macxp on 16/12/8.
 */
var uls =document.querySelector('#active');
// 图片切换
$(function () {
    $('#prev').click(function () {
        $('#active').stop().animate({'left':0},'slow');
    });
    $('#next').click(function () {
        $('#active').stop().animate({'left':'-1240px'},'slow');
    });



    //当鼠标放在图片上产生的触发与停止事件
    $('#banner').stop().mouseover(function () {
        clearInterval(timer);
    });
    $('#banner').stop().mouseout(function () {
        timer = setInterval(autoplay,5000);
    });
    // 当鼠标放在按钮上产生的触发与停止事件
    $('#ctrls').stop().mouseover(function () {
        clearInterval(timer);
    });
    $('#ctrls').stop().mouseout(function () {
        timer = setInterval(autoplay,5000);
    });

    //  自动轮播动画
    var timer = null;
    timer = setInterval(autoplay,5000);
    function autoplay() {
        if(uls.offsetLeft == 0){
            $('#active').stop().animate({'left':'-1240px'},'slow');
        }else{
            $('#active').stop().animate({'left':'0px'},'slow');
        }
    };

});