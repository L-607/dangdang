// ..............图书轮播图...............
lun();
function lun(){
	// .......循环遍历服装 运动户外 图书下面的body22.........
	$('.floorNav .body22').each(function(){
		var n=0;//定义一个初始变量 n
		var timer;//定义一个全局变量timer 用于定时器
		var so=$(this)//把遍历出来的body22对象用一个变量存储起来
		var len=$(this).find('.lo').find('img').length;//获取每个body下面img的个数
		//初始化下面的小方块，让n=0,的时候。它的颜色为灰色
		$(this).find('.squ span').eq(n).addClass('spanHov1').siblings().removeClass('spanHov1');
		
		
		nowSet();
		// 定时器函数
		function nowSet(){
			timer=setInterval(lunbo,1000);//lunbo函数每1秒重复一次
		}
		
		
		//图片和下面小方块的变化函数
		function show(){
			so.find('.lo a').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
			so.find('.squ span').eq(n).addClass('spanHov1').siblings().removeClass('spanHov1');
		}
		
		//轮播函数，N自增
		function lunbo(){
			n++;
			show();
			if(n==len-1){
				n=-1;
				}
		}
		
	// .......左右箭头的点击事件......
	so.find('.arrow span').click(function(){
		// ...........判断是不是左箭头.....
		if($(this).attr('class')=="arrLeft spanHov"){
			n--;
			show();//左箭头。n的值递减，调用图片和下面小方块的变化函数
			if(n==-1){
				n=len-1;
			}
		}else{
			n++;
			show();//左箭头。n的值递增，调用图片和下面小方块的变化函数
			if(n==len-1){
				n=-1;
			}
		}
})
	
	
	// ..............下面小方块的触发函数................
	so.find('.squ span').mouseover(function(){
	var index=$(this).index();
		n=index;
		show();})

	// ...........大的div触发箭头函数........
$('.floorNav .loop').hover(
	function(){
		clearInterval(timer);//当触发最外面的父级元素的时候清除定时器
		//当触发父级元素的时候。让箭头的span的宽度变为34px
		$('.floorNav .loop .arrow span').animate({'width':'34px'},100);
	},
	function(){//当离开最外面的父级元素的时候调用计时器函数，实现轮播效果
		nowSet();
		// 当离开父级元素的时候。让箭头的span的宽度变为0px
		$('.floorNav .loop .arrow span').animate({'width':'0px'},100);
	})


// ............左右箭头的触发...............
$('.floorNav .loop .arrow span').hover(
	function(){
		$(this).addClass('spanHov');//当触发左右箭头的时候。让他们的颜色变深
	},
	function(){
		// $(this).removeClass('spanHov');//当离开箭头的时候，让他们的颜色变浅
	})
	})
}



// 标签下面body切换效果
book();
function book(){
	$('.book').each(function(){
		var so=$(this);
		so.find('.header li').mouseover(function(){
			var index=$(this).index();
			$(this).addClass('li11Hov').siblings().removeClass('li11Hov');
			so.find('.body1').eq(index).show().siblings().hide();//对应下标的书身显示
		})
	})
}


// 畅销榜 新书榜 下边body切换
$('.bookRightBtm div').hover(function(){
		$(this).find('ol').show();
		$(this).siblings().find('ol').hide();
		/*选择子代元素 */
		$(this).find('ul>li').hide();
		$(this).siblings().find("ul>li").show();
})



// 畅销榜 新书榜顶部切换
$('.bookRightTop span').mouseover(function(){
	var index=$(this).index();
	$('.bookRightBtm').eq(index).show().siblings().hide();
	$(this).addClass('topSpan').siblings().removeClass('topSpan');
})




//吸顶效果
var oTop = 950;//开始点
var dTop = 3500;//消失点
var sTop = 0;//当前点

$(window).scroll(function() {
	sTop = $(this).scrollTop();
	if (sTop >= oTop && sTop <=dTop) {
		
		/*
		中间段
		*/
	   
		$(".navbar-wrapper").css({
			"position": "fixed",
			"top": "0",
			"display": "block",

		});
		
		$(".fix_box").fadeIn(300);
	} else if(sTop > dTop) {
		/*
		最后断 左侧导航栏消失	
		*/
		$(".fix_box").fadeOut(300);
	}
	else{
		/*
		开始断 左边框架消失
		*/
		$(".navbar-wrapper").css({
			"position": "static",
			"display": "none"
		});
		$(".fix_box").fadeIn(300);
	}
});