/**
 * Created by mac on 16/12/7.
 */
$(function () {
    var ckqb = $('#ckqb');
    var circle = $('#circle');
    ckqb.mouseenter(function () {
        circle.removeClass('circle').addClass('zmh_circle');
    });
    ckqb.mouseleave(function () {
        circle.removeClass('zmh_circle').addClass('circle');
    });

    $('#left_img a img').hover((function () {
            $('#left_img a img').stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0');})
        ,(function (){
            $('#left_img a img').stop().animate({top:'0'}).css('box-shadow','none');
        }));
//			$('#left_img a').mouseenter(function () {
//				console.log($(this));
//				$('#left_img a').stop().animate({top:'-5px'}).css('box-shadow','10px 10px 10px g')
//			});
//			$('#left_img a').mouseleave(function () {
//				$('#left_img a').stop().animate({top: '-0px'}).removeClass('zmh_shadow');
//			});


    $('.right_imgs ul li').hover((function () {
        zmh_i = $(this).index();
        $('.right_imgs ul li').eq(zmh_i).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.right_imgs ul li').eq(zmh_i).stop().animate({top:'0'}).css('box-shadow','none');
    }));


    $('.box2_left_img ul li').hover((function () {
        zmh_i2 = $(this).index();
        $('.box2_left_img ul li').eq(zmh_i2).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.box2_left_img ul li').eq(zmh_i2).stop().animate({top:'0'}).css('box-shadow','none');
    }));


    $('.box2_hd .nav li').mouseenter(function () {
        zmh_i3 = $(this).index();
        $('.box2_hd .nav li').eq(zmh_i3).addClass('nav_active').siblings('li').removeClass('nav_active');
        $('.box2_right_imgs ul').eq(zmh_i3).css('display','block').siblings('.box2_right_imgs ul').css('display','none');
    });

    $('.box2_right_imgs ul.zmh_ul1 li').hover((function () {
        zmh_i4 = $(this).index();
//				console.log(111)
//				console.log(zmh_i4)
//				console.log($('.box2_right_imgs ul li').eq(zmh_i4))
        $('.box2_right_imgs ul.zmh_ul1 li').eq(zmh_i4).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.box2_right_imgs ul.zmh_ul1 li').eq(zmh_i4).stop().animate({top:'0'}).css('box-shadow','none');
    }));

    $('.box2_right_imgs ul.zmh_ul2 li').hover((function () {
        zmh_i4 = $(this).index();
//				console.log(111)
//				console.log(zmh_i4)
//				console.log($('.box2_right_imgs ul li').eq(zmh_i4))
        $('.box2_right_imgs ul.zmh_ul2 li').eq(zmh_i4).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.box2_right_imgs ul.zmh_ul2 li').eq(zmh_i4).stop().animate({top:'0'}).css('box-shadow','none');
    }));
    $('.box2_right_imgs ul.zmh_ul3 li').hover((function () {
        zmh_i4 = $(this).index();
//				console.log(111)
//				console.log(zmh_i4)
//				console.log($('.box2_right_imgs ul li').eq(zmh_i4))
        $('.box2_right_imgs ul.zmh_ul3 li').eq(zmh_i4).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.box2_right_imgs ul.zmh_ul3 li').eq(zmh_i4).stop().animate({top:'0'}).css('box-shadow','none');
    }));
    $('.box2_right_imgs ul.zmh_ul4 li').hover((function () {
        zmh_i4 = $(this).index();
//				console.log(111)
//				console.log(zmh_i4)
//				console.log($('.box2_right_imgs ul li').eq(zmh_i4))
        $('.box2_right_imgs ul.zmh_ul4 li').eq(zmh_i4).stop().animate({top:'-5px'}).css('box-shadow','0px 10px 30px 4px #c0c0c0').siblings('li').stop().animate({top:'0'}).css('box-shadow','none');
    }),(function (){
        $('.box2_right_imgs ul.zmh_ul4 li').eq(zmh_i4).stop().animate({top:'0'}).css('box-shadow','none');
    }));

})