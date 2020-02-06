// 原生js轮播
// 头部轮播图(自动播放)
var slide = document.getElementById("slide");
var ols = slide.children[1].children;
var uls = slide.children[0].children;

// 第一步: 第一张图片拷贝ul最后面(深度拷贝)
slide.children[0].appendChild(uls[0].cloneNode(true))
var ul = slide.children[0];//获取经过拷贝后的ul（所以有8张图）

// 计算ul总宽度 ul里面li个数8个
ul.style.width = ul.children.length * uls[0].offsetWidth + "px";

for(var i=0; i< ols.length; i++){
	ols[i].index =i;
	ols[i].onmouseover = function(){
		for(var j=0; j<ols.length; j++){
			ols[j].className = "";
		}
		this.className = "con";

		// 调用base.js
		animate1(ul,-this.index * uls[0].offsetWidth);
		key = spe = this.index;
		clearInterval(setclear);
	}
	// 调用定时器和移动方法
	ols[i].onmouseout = function(){
		setclear = setInterval(timer,5000);//3秒自动播放
	}
}


// 缓动公式(设计ul图片也随之切换)
var key = 0; //起始位置 全局变量
var spe = 0; //目标位置 全局变量
var setclear = setInterval(timer,5000);// 定时器

// 向右移动
function timer(){
	key++;
	if(key >uls.length-1){
		ul.style.left = "0px";//瞬间切换第一张图的位置
		key = 1;//接着移动到第二张图片
	}
	animate1(ul,-key * uls[0].offsetWidth);
	spe++;
	if(spe > ols.length-1){
		spe =0;//小圆点正常切换
	}
	for(var i=0; i<ols.length; i++){
		ols[i].className = "";
	}
	ols[spe].className = "con";
}

// 问题：！！！！！！！！！！！！！！！！！！！！！！！
// 自动播放到时好了，但是点击时小圆点不对劲
// 啊哦
// 在了html中的ul li也是要给特殊类con的，一开始没有给在html里
// 又开始不正确了!!!!!!!!


// // 导航栏
// var nav = document.getElementById("nav");
// var lis = nav. getElementsByTagName("li");
// var nline = document.getElementById("nline");

// // 修改之后我的lis获取也包含了ol下的li（不给单独的id要怎么获取
// // ul下的第一次的li）

// for(var i = 0; i<lis.length; i++){
// 	lis[i].onmouseover = function(){
// 		navtarget = this.offsetLeft;
// 	}

// 	// 回去太快了，该怎么限制时间
// 	// lis[i].onmouseout = function(){
// 	// 	var data = 0;
// 	// 	navtarget = data;
// 	// }

// 	for(var j = 0; j<lis.length; j++){
// 		lis[i].className = "";
// 	}
// 	this.className = "con";
// }

// //缓动公式
// var navleader = 0;
// var navtarget = 0;
// setInterval(function(){
// 	navleader = navleader +( navtarget - navleader)/10;
// 	nline.style.left = navleader + "px";
// },30)

// // 固定top盒子显示、隐藏
// window.onscroll = function(){
// 	// console.log(scroll().top);
// 	if(scroll().top >= 800){
// 		$("#scroll").style.display = "block";
// 	}else{
// 		$("#scroll").style.display = "none";
// 	}

// 	$("#scroll").onclick = function(){
// 		document.top = "0px";
// 	}

// 	// 直接（快速返回头部）
// 	// $("#scroll").onclick = function() {
// 	// 	document.body.scrollTop = 0;
// 	// 	document.documentElement.scrollTop = 0;
// 	// }

// // 运动返回头部
//    	$("#scroll").onclick=function(){
//        timer=setInterval(function(){
//             //获取滚动条的滚动高度
//            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// 		   //用于设置速度差，产生缓动的效果
// 		   var speed=Math.floor(-scrollTop/6);
// 		   	// Math.floor() 返回小于或等于一个给定数字的最大整数。
// 			// Note:  Math.floor() === 向下取整

//            console.log(speed)
//            if(scrollTop==0){
//                clearInterval(timer);
//            }
//            document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed;
//        },30)
//    };
// }

