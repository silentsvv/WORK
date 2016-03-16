requirejs.config({
	paths: {
		jquery: 'jquery-1.12.1.min'
	}
});

requirejs(['jquery'],function($){
	$('#backTop').on('click',move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
			}
		);
	checkPosition($(window).height());

	function move(){
		$('html,body').animate({
			scrollTop:0
		},800);
	}

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}
});