$(function(){
	$('.areaList li').click(function(){
		$('.areaTop .span').html($(this).html());
	})
	// ......侧边栏。。。。
var index;
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
	$('section .all1 .right').hover(function(){
		$(this).show()
	},
	function(){
		$(this).hide()
	})
	// ......轮播图。。。。。
	lunbo();
	function lunbo(){
		var n=0;
		var k=0;
		$('.all3 li').eq(n).addClass('lunHover').siblings().removeClass('lunHover');
		timer1();
		var timer;
		function timer1(){
		 timer=setInterval(function(){
			n++;
			lunboBig();
			if(n==6){
				n=-1;
			}
		},2000)
		};
		function lunboBig(){
			$('.all3-top a').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
			$('.all3 li').eq(n).addClass('lunHover').siblings().removeClass('lunHover');
		}
		// ......数字触发.....
		$('.all3 li').mouseover(
			function(){
				var index=$(this).index();
				n=index;
				lunboBig();
			})
	// ......大轮播图的左右箭头。。。。
	$('.all3-topAll').hover(function(){
		clearInterval(timer);
		$('.arrow1 span').animate({'width':'33px'},1000);
	},
	function(){
		timer1();
		$('.arrow1 span').animate({'width':'0px'},1000);
	})
	$('.arrow1 span').hover(function(){
		$(this).css('opacity',1)
	},
	function(){
		$(this).css('opacity',0.5)
	})
	// .....左右箭头点击事件。。。。
	$('.arrow1 span').click(function(){
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
			console.log(k)
		}
	})

	// ........下面小轮播图。。。。。
	
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

	// ......点击事件。。。。。

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

	$('.all3-left a').hover(
		function(){
		$(this).find('b').addClass('bHover');
	},function(){
		$(this).find('b').removeClass('bHover');
	})
		
	}


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