lu();
// ..................服装和运动户外底部实现无缝轮播的效果。。。。。。。。。
function lu(){
	var n=1;
		
		var tiL;
		var wid=$('.floorLoop').find('.bookBtm1').width();
		
		timeLoop();
		// .............定时器轮播................
		function timeLoop(){
			tiL=setInterval(function(){
				n++;
				$('.floorLoop').find('.bookBtm').animate({'left':-n*wid},3000);
				if(n>=3){
					n=0;
				}
			},4000);
		}
		// ..............大的父级上面触发效果...........
		$('.floorLoop').find('.bookBottom').hover(
			function(){//当触发的时候清除定时器并且让箭头显示出来
				clearInterval(tiL);
				$(this).find('.arrow').find('span').animate({"width":"34px"},1000)
			},
			function(){
				timeLoop(); //离开的时候启动计时器函数并让箭头消失
				$(this).find('.arrow').find('span').animate({"width":"0px"},1000)
			})
		// ................左右箭头的触发效果................
		$('.floorLoop').find('.arrow').find('span').hover(
			function(){
				$(this).css("opacity",'1');
			},
			function(){
				$(this).css("opacity",'0.5');
			})
		// ...............左右的箭头点击效果...........
		$('.floorLoop').find('.arrow').find('span').click(function(){
			var led=$('.bookBtm').css('left');
			// ........左箭头..........
			if($(this).attr('class')=='arrowLeft'){
				n++;
				$('.floorLoop').find('.bookBtm').css({'left':parseInt(led)-parseInt(wid)+"px"},3000);
				wxlb();
			}else{
				// .........右箭头.............
				n--;
				$('.floorLoop').find('.bookBtm').css({'left':parseInt(led)+parseInt(wid)+"px"},3000);
				wxlb();
			}
		})

		// ........图片切换效果..........
		function wxlb(){
			// ................获取floorLoop距离相对父级的定位left值..........
			var xy=parseInt($('.floorLoop').find('.bookBtm').css('left'));
			if(xy>=-1200){
				// .............当到左边的时候让left变为3600px..............
				$('.floorLoop').find('.bookBtm').css('left',"-3600px")
			}
			if(xy<=-3600){
				//当到右边的时候让他的left变为1200px;
				$('.floorLoop').find('.bookBtm').css('left',"-1200px")
			}
		}

	

}

// .......母婴轮播图........
child();
function child(){
	var n=0;
	$('.child .loopBtm span').eq(n).css('background','red').siblings().css('background','#666');
	var ti;
	// ......点击父级的时候，出现左右箭头效果.............
	$('.child .headerLoop').hover(function(){
		clearInterval(ti);//消除定时器
		$(this).find('.loopArrow span').animate({'width':"34px"},1000);
	},function(){
		set();//启动定时器
		$(this).find('.loopArrow span').animate({'width':"0px"},1000);
	})
	// ..........点击左右箭头时候，箭头效果...........
	$('.child .headerLoop').find('.loopArrow span').hover(function(){
		$(this).css('opacity','1');
	},function(){
		$(this).css('opacity','0.5');
	})
	// ..................图片切换效果函数..........
	function chan(){
		$('.child .loop1 a').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$('.child .loopBtm span').eq(n).css('background','red').siblings().css('background','#666');

	}

	// ............左右按钮的点击事件...........
	$('.child .headerLoop').find('.loopArrow span').click(function(){
		if($(this).attr('class')=='arrLeft'){
			n--;
			chan();
			if(n<=0){//左箭头
				n=4;
			}

		}else{//右箭头
			n++;
			chan();
			if(n>=3){
				n=-1;
			}
		}
	})
	// ........按钮的触发函数.........
	$('.child .loopBtm span').mouseover(function(){
		var index=$(this).index();
			n=index;
			chan();
	})
// ............定时器轮播....................
set();
function set(){
	ti = setInterval(function(){
		n++;
		chan();
		if(n>=3){
			n=-1;
		}
	},1000)
}


}

