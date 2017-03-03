/**
 * Created by Macxp on 16/12/7.
 */
$(function () {
//        nav导航栏的事件
    $('#accessories #nav ul li').on('mouseenter',function () {
        var $this = $(this);
        $(this).addClass('col').siblings().removeClass('col');
        $('#accessories #accessories_content ul').eq($this.index()).addClass('show').siblings().removeClass('show');
    });

    var that=$(this);
    var arr = ['红米手机3高配版 红米3S 标准钢化玻璃膜(0.33mm)','小米指环支架','小米5s Plus 标准高透贴膜','红米Note4 标准高透贴膜','红米4高配版 标准高透贴膜','小米5s 标准高透贴膜','小米Max 标准高透贴膜','小米5 户外防护套'];
    var arr2 = ['小米手机5 智能翻盖保护套','小米Max 智能显示保护套','红米Pro 智能显示保护套','红米3高配版 炫彩翻盖保护套','红米Note3 炫彩翻页保护套', '红米3标准版 炫彩翻盖保护套', '红米4标准版 翻盖保护套', '平板2保护套'];
    var arr3 = ['小米手机5 极薄防蓝光贴膜','小米Max 标准高透贴膜','小米平板2 标准高透贴膜','红米Note3 钢化玻璃膜','红米4标准版 标准高透贴膜','小米手机5 钢化玻璃贴膜','红米Pro 标准高透贴膜','小米手机5 标准高透贴膜'
    ];
    var arr4 = ['小米USB快速充电数据线','小米指环支','小米蓝牙手柄','蓝牙语音体感遥控器','指环式防滑手机支架','小米千兆网线','USB Type-C 转接头','青米USB快速充电数据线'];
    var price = ['19元','19元','19元','19元','19元','19元','19元','39元'];
    var price2 = ['49元','59元','29元','39元','39元','39元','49元','69元'];
    var price3 = ['49元','19元','29元','19元','19元','29元','9.9元','19元'];
    var price4 = ['19元','19元','99元','99元','12.5元','14.9元','5元','24.9元'];
    var evaluate = ['1223人评价','2313人评价','2143人评价','4123人评价','2313人评价','1209人评价','900人评价'];
    var evaluate2 = ['2.2万人评价','7731人评价','1156人评价','6891人评价','2.6万人评价','7268人评价','54人评价'];
    var evaluate3 = ['7916人评价','1万人评价','1481人评价','3.9万人评价','95人评价','4.1万人评价','1905人评价'];
    var evaluate4 = ['1296人评价','982人评价','2.9万人评价','2792人评价','9072人评价','3.2万人评价','3.6万人评价'];
//        遍历给li添加img图片
    $('#accessories #accessories_content #bd_1 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/'+(index+1)+'.jpg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr[index]);
        span.html(price[index]);
        p2.html(evaluate[index]);
    });
    $('#accessories #accessories_content #bd_2 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/0'+(index+1)+'.jpg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr2[index]);
        span.html(price2[index]);
        p2.html(evaluate2[index]);
    });
    $('#accessories #accessories_content #bd_3 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/00'+(index+1)+'.jpg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr3[index]);
        span.html(price3[index]);
        p2.html(evaluate3[index]);
    });
    $('#accessories #accessories_content #bd_4 li').each(function(index,element){
        var img = $('<img>');
        var p = $('<h3></h3>');
        var p1 = $('<p></p>');
        var p2 = $('<div></div>');
        var span = $('<span></span>');
        img.attr('src','imagesx/000'+(index+1)+'.jpg');
        $(this).append(img);
        $(this).append(p);
        $(this).append(p1);
        $(this).append(p2);
        p1.append(span);
        p.html(arr4[index]);
        span.html(price4[index]);
        p2.html(evaluate4[index]);
    });
    $('#accessories #box_bd li').mouseenter(function () {
        $(this).stop().animate({top:'-3px'},'fast').css('box-shadow','0 15px 30px rgb(192,192,192)');
    });
    $('#accessories #box_bd li').mouseleave(function () {
        $(this).stop().animate({top:'0'},'fast').css('box-shadow','none');
    });
    
    $('#accessories #box_bd #accessories_content li').hover(function () {
        $('.qqw').eq($(this).index()).animate({bottom:"0"},'fast');
    },(function () {
        $('.qqw').eq($(this).index()).animate({bottom:'-75px'});
    }))
})