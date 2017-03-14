/**
 * Created by xpc on 2017/3/11.
 */
window.onload = function(){
    navigation()
};
//µ¼º½À¸
var navigation = function(){
    var ul = document.getElementById("nav_ul");
    var lis = ul.children;
    var cloud = document.getElementById("cloud");
    var target = 0, leader = 0, current = 600;
    var content = document.getElementById("content");
    var contents = content.children;
    for(var i = 0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function(){
           target = this.offsetLeft;
        };
        lis[i].onmouseout = function(){
           target = current - 600;
            //console.log(target)
        };

        lis[i].onclick = function(){
            current = this.offsetLeft + 600;
            for (var j = 0;j<contents.length;j++){
                contents[j].style.display = "none";
                lis[j].className = 'none'
            }
            this.className = 'col';
            contents[this.index].style.display = "block";
        }
    }
    setInterval(function(){
        leader = leader + (target - leader)/10;
        cloud.style.left = leader + 600 +'px';
    },10)
};


