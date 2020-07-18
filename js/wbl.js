$(function(){
	// all1 左边 all3 中间 all4 右边
	var index;
	
	
	/*
	all1All全部一览列表，right 列表弹出详情
	*/
   
	$('.all1All').hover(function(){
		$(this).find('.left').addClass('hover');
		$(this).find('.left a').css({'color':'red','fontSize':"14px"});
		$('.all3').hide();
		$('.all4').hide();
		$(this).find('.right').show();
	},
	function(){
		$(this).find('.left a').css({'color':'#323232','fontSize':'14px'});
		$(this).find('.left').removeClass('hover');
		$('.all3').show();
		$('.all4').show();
		$(this).find('.right').hide();
	})
	
	/*移开鼠标列表详情消失*/
	$('section .all1 .right').hover(function(){
		$(this).show()
	},
	function(){
		$(this).hide()
	})
	
	
	// 轮播图
	lunbo();
	function lunbo(){
		var n=0;//大轮播图计数器
		var k=0;//小轮播图计数器
		
		$('.all3 li').eq(n).addClass('lunHover').siblings().removeClass('lunHover');//默认开始
		
		
		var timer;//定时器
		timer1();
		function timer1(){
			/*
			重复里面的代码2s一次
			*/
		 timer=setInterval(function(){
			n++;
			lunboBig();
			if(n==6){
				n=-1;
			}
		},2000)
		};
		
		
		
		function lunboBig(){
			$('.all3-top a').eq(n).fadeIn(1000).siblings().stop().fadeOut(1000);//封面图
			$('.all3 li').eq(n).addClass('lunHover').siblings().removeClass('lunHover');//下面数字标签
		}
		
		
		//点击数字触
		$('.all3 li').mouseover(
			function(){
				var index=$(this).index();
				n=index;
				lunboBig();
			})
			
	// ......大轮播图的左右箭头......
	$('.all3-topAll').hover(function(){
		clearInterval(timer);
		$('.arrow1 span').animate({'width':'33px'},1000);
	},
	function(){
		timer1();
		$('.arrow1 span').animate({'width':'0px'},1000);
	})
	
	
	//渐变效果
	$('.arrow1 span').hover(function(){
		$(this).css('opacity',1)
	},
	function(){
		$(this).css('opacity',0.5)
	})
	
	
	// .....左右箭头点击事件
	$('.arrow1 span').click(function(){
		/*
			.attr返回元素属性值
		*/
		if($(this).attr("class")=="arrowLeft"){
			n--;
			lunboBig();
			if(n==-1){
				n=7;
			}
			k--;
			smallLunbo();
			if(k==-1){
				k=1;
			}
		}else{
			n++;
			lunboBig();
			if(n==6){
				n=-1;
			}
			smallLunbo();
			k++;
			if(k==2){
				k=0;
			}
		}
	})




	// 小轮播图鼠标计时器停止事件
	function smallLunbo(){
		$('.all3-left').eq(k).stop().fadeIn().siblings().stop().fadeOut();
	}
	$('.all3-left-par').hover(function(){
		clearInterval(timer);
		$('.all3-left-par span').animate({'width':'34px'},1000);
	},
	function(){
		timer1();
		$('.all3-left-par span').animate({'width':'0px'},1000);
	})


	// 小轮播图点击事件
	$('.all3-left-par span').click(function(){
		if($(this).attr("class")=="arrowLeft1"){
			$(this).css('opacity',1).siblings().css('opacity','0.2');
			k--;
			smallLunbo();
			if(k==-1){
				k=1;
			}
			console.log(k);
			console.log(n);
			n--;
			lunboBig();
			if(n==-1){
				n=7;
			}
		}else{
			$(this).css('opacity',1).siblings().css('opacity',0.2);
			k++;
			console.log(k);
			smallLunbo();
			if(k==1){
				k=-1;
			}
			n++;
			lunboBig();
			if(n==6){
				n=-1;
			}
			
		}
	})

//小轮播图箭头变色
	$('.all3-left a').hover(
		function(){
		$(this).find('b').addClass('bHover');
	},function(){
		$(this).find('b').removeClass('bHover');
	})
		
	}




// 右侧小切换
$('.all4-new span').mouseover(function(){
	 	var index=$(this).index();
			$(this).addClass('information').siblings().removeClass('information');
			$('.all4-center ul').eq(index).show().siblings().hide();
})

$('.all4-nav span').mouseover(function(){
	 	var index=$(this).index();
			$(this).addClass('all4-inform').siblings().removeClass('all4-inform');
			$('.all4-nav-btm img').eq(index).show().siblings().hide();
})

	
})