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