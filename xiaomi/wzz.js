/**
 * Created by MD on 16/12/5.
 */
$(function () {
    var ctrls=$('.wzz-xm-papers');
    var contents=$('.wzz-content-item');
    var displays=$('.wzz-content-list');
    var sideCtrls=$('.wzz-sideCtrl');
    var leftCtrls=$('.wzz-leftCtrl');
    var rightCtrls=$('.wzz-rightCtrl');
    var videoItem=$('.wzz-video-item');
    var count=0;
    for(var i=0;i<ctrls.length;i++){
        ctrls[i].count=0;
        $(ctrls[i].children).each(function (index,ele) {
            ele.children[0].num=i;
           $(ele.children[0]).mouseenter(function () {
               // count=index;
               var countP=$(this).parent().parent().get(0);
               countP.count=index;
               $(this).parent().siblings().each(function (index, element) {
                  $(element.children[0]).removeClass('wzz-active');
               });
               $(this).addClass('wzz-active');
               $(displays[ele.children[0].num]).animate({left:-296*index+'px'});


           })
        })
        contents[i].index=i;
        leftCtrls[i].index=i;
        rightCtrls[i].index=i;
        $(contents[i]).mouseenter(function () {
            $(sideCtrls[this.index]).fadeIn('3000');
            $(this)
                .stop()
                .animate({top:'-5px'});
            $(this).addClass('wzz-shadow');
        })
        $(contents[i]).mouseleave(function () {
            $(sideCtrls[this.index]).fadeOut('3000');
            $(this).removeClass('wzz-shadow');
            $(this)
                .stop()
                .animate({top:'0'});
        })
        $(videoItem[i]).mouseenter(function () {
            $(this).addClass('wzz-shadow');
            $(this)
                .stop()
                .animate({top:'-5px'});
        })
        $(videoItem[i]).mouseleave(function () {
            $(this).removeClass('wzz-shadow');
            $(this)
                .stop()
                .animate({top:'0'});
        })
        $(leftCtrls[i]).mouseenter(function () {
            $(this).css('background','rgba(66,66,66,0.6)');
        })
        $(rightCtrls[i]).mouseenter(function () {
            $(this).css('background','rgba(66,66,66,0.6)');
        })
        $(leftCtrls[i]).mouseleave(function () {
            $(this).css('background','rgba(66,66,66,0.2)');
        })
        $(rightCtrls[i]).mouseleave(function () {
            $(this).css('background','rgba(66,66,66,0.2)');
        })
        $(leftCtrls[i]).click(function () {
            ctrls[this.index].count--;

            if (ctrls[this.index].count<0){
                ctrls[this.index].count=0;
            }
            var num=this.index;
           $(displays[this.index])
               .stop()
               .animate({left:-298*ctrls[this.index].count+'px'},function () {
               });
            $(ctrls[this.index].children[ctrls[this.index].count].children).addClass('wzz-active');
            $(ctrls[this.index].children[ctrls[this.index].count]).siblings().each(function (index,element) {
                $(element.children[0]).removeClass('wzz-active');
            });


        })
        $(rightCtrls[i]).click(function () {
            ctrls[this.index].count++;
            if (ctrls[this.index].count>$(ctrls[this.index].children).length-1){
                ctrls[this.index].count=$(ctrls[this.index].children).length-1;
            }
            var num=this.index;
            $(displays[this.index])
                .stop()
                .animate({left:-298*ctrls[this.index].count+'px'},function () {
                });
            $(ctrls[this.index].children[ctrls[this.index].count].children).addClass('wzz-active');
            $(ctrls[this.index].children[ctrls[this.index].count]).siblings().each(function (index,element) {
                $(element.children[0]).removeClass('wzz-active');
            });



        })

    }






})