
// 笔记
// 小圆点的切换(与类似table选项卡)
// 名创优品首页
// var slide = document.getElementById("slide");
// var ols = slide.children[1].children;
// 
// for(var i=0; i< ols.length; i++){
// 	ols[i].index =i;
// 	ols[i].onclick = function(){
// 		for(var j=0; j<ols.length; j++){
// 			ols[j].className = "";
// 		}
// 		this.className = "con";
// 	}
// }

// (设计ul图片也随之切换)
// var slide = document.getElementById("slide");
// var ols = slide.children[1].children;
// var ul = slide.children[0];
// 
// for(var i=0; i< ols.length; i++){
// 	ols[i].index =i;
// 	ols[i].onclick = function(){
// 		for(var j=0; j<ols.length; j++){
// 			ols[j].className = "";
// 		}
// 		this.className = "con";
// 		ul.style.left = this.index * -1200 +"px";//将这段改为使用缓动公式
// 	}
// }


// 完整版添加缓动
// var slide = document.getElementById("slide");
// var ols = slide.children[1].children;
// var ul = slide.children[0];
// var num =0;
// 
// for(var i=0; i< ols.length; i++){
// 	ols[i].index =i;
// 	ols[i].onclick = function(){
// 		for(var j=0; j<ols.length; j++){
// 			ols[j].className = "";
// 		}
// 		this.className = "con";
// 		target = this.index * -1200;
// 		num = this.index;
// 	}
// }
// // 缓动公式(设计ul图片也随之切换)
// var leader = 0; //起始位置 全局变量
// var target = 0; //目标位置 全局变量
// setInterval(function(){
// 	leader = leader +(target - leader)/10;
// 	// 改变ul位置
// 	ul.style.left = leader +"px";
// },10)



// 左右两边的按钮切换效果
// 名创优品品牌界面
// var slide = document.getElementById("slide");
// var ul = slide.children[0];
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");
// 
// //缓动公式
// var leader = 0;
// var target = 0;
// setInterval(function(){
// 	// 限制图片移动
// 	if(target <= -1004){
// 		target = -1004;
// 	}else if(target >=0 ){
// 		target = 0;
// 	}
// 	leader = leader +(target - leader)/10;
// 		// 改变ul位置
// 		ul.style.left = leader + "px";
// 	},10)
// 
// 
// next.onclick = function(){
// 	target -=1004;
// }
// 
// prev.onclick = function(){
// 	target +=1004;
// }
// 

// 如果我只要两边的按钮然后不加缓动的话我的ul.style.left该怎么做???
 //  prev.onclick = function(){
 //  	 ul.style.left = 1200 +"px";
 //  }
 //  
 //   next.onclick = function(){
 //  	 ul.style.left = -1200 +"px";
 //  }

//  修复
// 将js相同功能抽出合并放入common.js里（如：导航栏以及Top固定块）