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
			timer=setInterval(lunbo,2000);
		}
		//图片和下面小方块的变化函数
		function show(){
			so.find('.lo a').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
			so.find('.squ span').eq(n).addClass('spanHov1').siblings().removeClass('spanHov1');
		}
		//轮播函数
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
		show();
})
	// ...........大的div触发函数........
$('.floorNav .loop').hover(
	function(){
		clearInterval(timer);//当触发最外面的父级元素的时候清除定时器
		//当触发父级元素的时候。让箭头的span的宽度变为34px
		$('.floorNav .loop .arrow span').animate({'width':'34px'},1000);
	},
	function(){//当离开最外面的父级元素的时候调用计时器函数，实现轮播效果
		nowSet();
		// 当离开父级元素的时候。让箭头的span的宽度变为0px
		$('.floorNav .loop .arrow span').animate({'width':'0px'},1000);
	})
// ............左右箭头的触发函数...............
$('.floorNav .loop .arrow span').hover(
	function(){
		$(this).addClass('spanHov');//当触发左右箭头的时候。让他们的颜色变深
	},
	function(){
		$(this).removeClass('spanHov');//当离开箭头的时候，让他们的颜色变浅
	})
	})

}
// ...服装 运动户外 图书 导航栏的切换效果..................
book();
function book(){
	$('.book').each(function(){
		var so=$(this);
		so.find('.header li').mouseover(function(){
			var index=$(this).index();
			$(this).addClass('li11Hov').siblings().removeClass('li11Hov');
			so.find('.body1').eq(index).show().siblings().hide();
		})
	})
}

// 图书 电子书 右边 图书畅销榜
$('.bookRightBtm div').hover(function(){
		$(this).find('ol').show();
		$(this).siblings().find('ol').hide();
		$(this).find('ul>li').hide();
		$(this).siblings().find("ul>li").show();
})
// 图书畅销版和图书新书版的切换效果
$('.bookRightTop span').mouseover(function(){
	var index=$(this).index();
	$('.bookRightBtm').eq(index).show().siblings().hide();
	$(this).addClass('topSpan').siblings().removeClass('topSpan');
})



// ........右侧悬浮框...........
float();
function float(){
	$('.float .floatHov').hover(function(){
		$(this).find('.floatHov2').show();
		$(this).find('.floatHov2').animate({"left":'-100px'},500);
		var num=parseInt($(this).find('.floatHov1').css('backgroundPositionX'))+40;
		$(this).find('.floatHov1').css('backgroundPositionX',num+'px')
	},
	function(){
		$(this).find('.floatHov2').hide();
		$(this).find('.floatHov2').animate({"left":'0px'},500);
		var num=parseInt($(this).find('.floatHov1').css('backgroundPositionX'))-40;
		$(this).find('.floatHov1').css('backgroundPositionX',num+'px')
	})
}


// ........楼层.......
floor();
function floor(){
	 
	function eventScroll(){
		var scrollTop=$(window).scrollTop();
		// ......当滚动条到达秒杀的时候，左侧的楼层导航出现.......
		if(scrollTop>=700&&scrollTop<=8200){
			$('.f').show();
		}else{
			$('.f').hide();
		}
// ......滚动条事件.......
			$('.floor1').each(
				function(){
					var diTop=$(this).offset().top;
					var	f1=$('.F1').offset().top;
					if(scrollTop>diTop-200){
						$('.fAll').find('a').removeClass('active0');
						$('.fAll').eq($(this).index()).find('.a1').addClass('active'+$(this).index());
						$('.fAll').eq($(this).index()).siblings().find('.a1').removeClass('active'+($(this).index()-1))
						$('.fAll').eq($(this).index()).siblings().find('.a1').removeClass('active'+($(this).index()+1));
					}else if(scrollTop<f1-300){
						$('.b').find('.a1').removeClass('active0');
					}					
				}
				)

		}

// ..............左侧导航栏的点击事件...........
$('.fAll').click(
			function(){
				$(window).scroll().off();
				var divTop=$('.floor1').eq($(this).index()).offset().top;
				$('.b').find('.a1').removeClass('active0');
				$('.d').find('.a1').removeClass('active1');
				$('.q').find('.a1').removeClass('active2');
				$('.y').find('.a1').removeClass('active3');
				$('.r').find('.a1').removeClass('active4');
				$('.h').find('.a1').removeClass('active5');
				$(this).find('.a1').addClass('active'+$(this).index());
				$('html body').animate({'scrollTop':divTop},1000,function(){
					$(window).on('scroll',eventScroll);
				});
			}
			);
}


// ..................当当悬浮框上面的悬浮框............
$(window).scroll(function(){
	if($('html body').scrollTop()>695){
		$('.daDaTop').show();
	}else{
		$('.daDaTop').hide();
	}
})
