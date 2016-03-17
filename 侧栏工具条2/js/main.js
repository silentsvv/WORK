requirejs.config({
	paths: {
		jquery: 'jquery-1.12.1.min'
	}
});

requirejs(['jquery','scrollto'],function($,scroll){
	
	$(window).on('scroll',function(){
		checkPosition($(window).height());
			}
		);
	checkPosition($(window).height());

	var scroll = new scroll.ScrollTo({

	});
	console.log(scroll);
	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	/*function move(){
		$('html,body').animate({
			scrollTop:0
		},800);
	}*/

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}
});