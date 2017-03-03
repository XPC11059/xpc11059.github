/**
 * Created by mac on 2016/12/7.
 */


$(function () {
    var index = 0;
    // 上一张
    $('#left').on('click',function (e) {
        e = event || window.event;
        e.preventDefault();
        index ++;
        index >0 ? index=0 : index;
        console.log(index);
        $('#content > ul').animate({'left':index*1236},'slow');
    })
    // 下一张
    $('#right').on('click',function (e) {
        e = event || window.event;
        e.preventDefault();
        index --;
        index < -3 ? index=-3 : index;
        console.log(index);

        $('#content > ul').animate({'left':index*1236},'slow');
        console.log($('#content > ul').position());
    })


    $('#content > ul > li').on('mouseover',function () {
        $(this).stop().animate({'top':'-3'},200);
        console.log($(this));
    })
    $('#content > ul > li').on('mouseout',function () {
        $(this).stop().animate({'top':'0'},500);
        console.log($(this));
    })


});


