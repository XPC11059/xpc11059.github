/**
 * Created by Macxp on 16/12/7.
 */
$(function () {
//        nav导航栏的事件
    $('#around #nav2 ul li').on('mouseenter',function () {
        var $this = $(this);
        $(this).addClass('col').siblings().removeClass('col');
        $('#around #around_content ul').eq($this.index()).addClass('show').siblings().removeClass('show');
    });

    var that=$(this);
    var arr00 = ['小米空气层连帽运动卫衣 男款','经典连帽休闲卫衣','小米摇粒绒加厚保暖外套','小米羊毛围巾','重松DD11V口罩','2017年米兔台历（探索版','米兔福到贴','变形金刚特别版声波'];
    var arr02 = ['小米摇粒绒加厚保暖外套','小米空气层连帽运动卫衣 男款','小米摇粒绒加厚保暖外套 女款','小米空气层连帽运动卫衣 女款','小米羊毛触屏手套 女款','小米短袖T恤 水管工米兔','小米V领短袖T恤 女款','小米短袖T恤 情侣米兔 女款'];
    var arr03 = ['超脑米兔钥匙扣','拳击手米兔','悟空米兔','飞行员米兔屏幕擦挂饰','经典版米兔','文艺版米兔','30cm坐姿米兔','黑猫米兔'];
    var arr04 = ['金属鼠标垫 小号','米家签字笔','米家LED随身灯增强版','指环式防滑手机支架','变形金刚特别版声波','手机自拍补光灯','小米电源线收纳盒','鼠标垫加大号'];
    var arr05 = ['90分旅行箱 20寸','90分旅行箱 24寸','小米轻动系百搭多用背包','90分便携收纳袋','小米经典商务双肩包','小米极简都市双肩包','小米多功能都市休闲胸包','学院风简约双肩包'];
    var price00 = ['199元','109元','99元','99元','29元','12.9元','5.9元','169元'];
    var price02 = ['99元','199元','99元','199元','49元','39元','39元','39元'];
    var price03 = ['29元','49元','49元','29元','29元','49元','49元','39元'];
    var price04 = ['49元','14.9元 ','19.9元','12.5元','169元','49元','49元','19元'];
    var price05 = ['99元','349元','39元','29元','99元','149元','69元','59元'];
    var evaluate00 = ['1048人评价','1260人评价','4642人评价','1186人评价','84人评价','40人评价','16人评价'];
    var evaluate02 = ['4642人评价','1048人评价','555人评价','100人评价','4381人评价','4066人评价','3735人评价'];
    var evaluate03 = ['517评价','143人评价','313人评价','364人评价','134人评价','396人评价','1005人评价'];
    var evaluate04 = ['9637人评价','','','9117人评价','2141人评价','2431人评价','2621人评价'];
    var evaluate05 = ['','','','5089人评价','2875人评价','7355人评价'];
//        遍历给li添加img图片
    $('#around #around_content #bd2_1 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/'+(index+1)+'.jpeg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr00[index]);
        span.html(price00[index]);
        p2.html(evaluate00[index]);
    });
    $('#around #around_content #bd2_2 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/0'+(index+1)+'.jpeg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr02[index]);
        span.html(price02[index]);
        p2.html(evaluate02[index]);
    });
    $('#around #around_content #bd2_3 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/00'+(index+1)+'.jpeg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr03[index]);
        span.html(price03[index]);
        p2.html(evaluate03[index]);
    });
    $('#around #around_content #bd2_4 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/000'+(index+1)+'.jpeg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr04[index]);
        span.html(price04[index]);
        p2.html(evaluate04[index]);
    });
    $('#around #around_content #bd2_5 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/1'+(index+1)+'.jpg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr05[index]);
        span.html(price05[index]);
        p2.html(evaluate05[index]);
    });
    // 图片阴影以及向上移
    $('#around #box2_bd li').mouseenter(function () {
        $(this).stop().animate({top:'-2px'},'fast').css('box-shadow','0px 15px 30px rgb(192,192,192)');
    });
    $('#around #box2_bd li').mouseleave(function () {
        $(this).stop().animate({top:'0'},'fast').css('box-shadow','none');
    });
    
    
    $('#around #box2_bd #around_content li').hover(function () {
        $('.qw').eq($(this).index()).animate({bottom:"0"},'fast');
    },(function () {
        $('.qw').eq($(this).index()).animate({bottom:'-75px'});
    }))
});
