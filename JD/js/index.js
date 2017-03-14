/**
 * Created by xpc on 2017/3/6.
 */
window.onload = function () {
    search();
    run();
    secondKill();
};
var search = function () {
    var searchBox = document.getElementsByClassName('jd_header_box')[0];
    var banner = document.getElementsByClassName("jd_banner")[0];
    var height = banner.offsetHeight;
    //console.log(height);
    window.onscroll = function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if (top > height) {
            searchBox.style.background = 'rgba(201,21,35, 0.85)';
        }
        else {
            var op = top / height * 0.85;
            searchBox.style.background = 'rgba(201,21,35,' + op + ')'
        }
    }
};
//轮播图
var run = function () {
    var banner = document.getElementsByClassName('jd_banner')[0];
    var box = banner.getElementsByTagName('ul')[0];
    var lis = box.children;
    //console.log(banner);
    //console.log(box);
    var width = banner.offsetWidth;
    var index = 1;
    var timer = null;
    var startX = 0, endX = 0, moveX =0;
    var box2 = banner.getElementsByTagName('ul')[1];
    var lis2 = box2.children;
    //轮播图定时器
    timer = setInterval(function lunbo() {
        index++;
        box.style.transform = "translateX(" + (-index * width) + "px)";
        box.style.transition = "all 0.9s ease 0s";
        //轮播图小点
        for(var i = 0;i<lis2.length;i++){
            lis2[i].className = "none"
        }
        lis2[index-1].className = "col";
    }, 3000);
    //轮播每次过渡一次就判断是否为最后一张
    box.addEventListener('webkitTransitionEnd', function () {
        //console.log("过渡完了");
        console.log(index+"完成");
        if (index == 8) {
            index = 0;
            //box.style.transform = "none";
            box.style.transition = "none";
            //box.style.webkitTransition = "none";
            box.style.transform = "translateX(" + (-index * width) + "px)";
        }
    });
    //手指触摸到屏幕时
    banner.addEventListener('touchstart',function(e){
        clearInterval(timer);
        startX = e.touches[0].clientX;
        //console.log(startX)
        console.log(index+"完成");
    });
    //手指触摸屏幕移动时
    banner.addEventListener('touchmove',function(e){
        //e.preventDefault();
        endX = e.touches[0].clientX;
        moveX = startX - endX;
        //console.log(moveX);
        //if(box.offsetLeft == 0 && moveX < 0){
        //    index = 1
        //}
        //判断向左或者向右移动
        if(moveX>0){
            box.style.transform = "translateX(" + (-moveX-index*width) + "px)";
            box.style.transition = "none";
        }
        if(moveX<0){
            box.style.transform = "translateX(" + (-moveX-index*width) + "px)";
            box.style.transition = "none";
        }
        //滑动时判断index是否等于8，也就是说是否滑到最后一张，虽然前面的webkitTransitionEnd也有判断，但是那是每次动画过渡完成才执行的，要是一直滑动屏幕的话就不会执行，所以在滑动的情况下还得写一次判断
        if (index == 9) {
            index = 1;
            box.style.transition = "none";
            box.style.webkitTransition = "none";
            box.style.transform = "translateX(" + (-index * width) + "px)";
        }
        //同时满足当前为第一张图片和像右滑的情况，那么执行代码跳到最后一张
        if (index == 0 && moveX < 0) {
            index = 8;
            box.style.transition = "none";
            //box.style.webkitTransition = "none";
            box.style.transform = "translateX(" + (-index * width) + "px)";
        }
    });
    //手指离开屏幕时
    banner.addEventListener('touchend',function(e){
        //向左滑的情况
        console.log(index);
        if(moveX > 0){
            //如果滑动的距离大于三分之二，那么index+1，否则，弹回去
            if(moveX>width/3){
                index = index +1;
                box.style.transform = "translateX(" + (-index* width) + "px)";
                box.style.transition = "all 0.9s ease 0s";
            }else{
                box.style.transform = "translateX(" + (-index* width) + "px)";
                box.style.transition = "all 0.9s ease 0s";
            }
        }
        //向右滑的情况
        else{
            //如果滑动的距离大于三分之二，那么index-1，否则，弹回去
            if(Math.abs(moveX)>width/3){
                index = index -1;
                box.style.transform = "translateX(" + (-index* width) + "px)";
                box.style.transition = "all 0.9s ease 0s";
            }else{
                box.style.transform = "translateX(" + (-index* width) + "px)";
                box.style.transition = "all 0.9s ease 0s";
            }
        }
        //滑动结束时轮播图小点
        for(var i = 0;i<lis2.length;i++){
            lis2[i].className = "none"
        }
        // 小圆点的设置：判断第一张和最后一张，因为可能出现index为-1 或者 9的情况导致小圆点找不到这个值
        if(index == 0){
            lis2[7].className = "col";
        }else if(index == 1 || index == 9){
            lis2[0].className = "col";
        }else{
            lis2[index -1].className = "col";
        }
        //滑动结束时开启定时器
        timer = setInterval(function lunbo() {
            index++;
            box.style.transform = "translateX(" + (-index * width) + "px)";
            box.style.transition = "all 0.9s ease 0s";
            //轮播图小点
            for(var i = 0;i<lis2.length;i++){
                lis2[i].className = "none"
            }
            lis2[index-1].className = "col";
        }, 3000);
        //每次滑动完成后就清除，避免上次的值存在，导致下次点击就滑动
        startX = 0;
        endX = 0;
        moveX = 0;
    });
    console.log(index)
};

//秒杀倒计时
var secondKill = function(){
    var parentTime = document.getElementsByClassName('sk_time')[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('num');
    //var times = 7   * 60 * 60;
    var date1=new Date().getTime();    //开始时间 获取时间戳
    var date2=new Date(2017,3,10).getTime();    //结束时间 月份从0开始计算
    var times=(date2 - date1)/1000; //之间的秒数
    console.log(times);
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;
        //console.log(h+'-'+m+"-"+s);

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = Math.floor(s%10);
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

};