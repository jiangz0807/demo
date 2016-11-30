$(document).ready(function(){
	var index = 0;
	var indexMax = $(".banner_img > li").length;
	var timer;
	for(i=1;i<4;i++){
		$(".banner_img > li").eq(i).fadeOut();
	}
	$(".banner_img > li").each(function(event){
		$(this).css("z-index",event*(-10));
	});
	
	function bannerChange(){
		$(".banner_img > li").fadeOut();
		$(".banner_img > li").eq(index).fadeIn();
		$(".banner_nav > span").removeClass("active");
		$(".banner_nav > span").eq(index).addClass("active");
	}
	
	function move(){
		clearTimeout(timer);
		index++;
		if(index > indexMax-1 ){
			index = 0;
		}
		bannerChange();
		timer = setTimeout(move,4000);
	}
	function moveBack(){
		clearTimeout(timer);
		index--;
		if(index < 0 ){
			index = 3;
		}
		bannerChange();
		timer = setTimeout(move,4000);
	}
	timer = setTimeout(move,4000);
	$(".banner_nav > span").each(function(event){
		$(this).click(function(){
			index = event-1;
			if(!$(this).hasClass("active")){
				$(".banner_nav > span").removeClass("active");
				$(this).addClass("active");
				$(".banner_img > li").fadeOut();
				$(".banner_img > li").eq($(this).html()).fadeIn();
				clearTimeout(timer);
				move();
			}
		});
	});
	$(".banner_left").click(moveBack);
	$(".banner_right").click(move);
});


	



	
	


	


