// 品牌轮播图
var slide = document.getElementById("slide");
var ul = slide.children[0];
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//缓动公式
var leader = 0;
var target = 0;
setInterval(function(){
	// 限制图片移动
	if(target <= -1004){
		target = -1004;
	}else if(target >=0 ){
		target = 0;
	}
	leader = leader +(target - leader)/10;
		// 改变ul位置
		ul.style.left = leader + "px";
	},10)


next.onclick = function(){
	target -=1004;
}

prev.onclick = function(){
	target +=1004;
}




		