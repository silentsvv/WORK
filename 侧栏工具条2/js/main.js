/*requirejs.config({
	paths: {
		jquery: 'jquery-1.12.1.min'
	}
});

requirejs(['jquery'],function($){
	$('#backTop').on('click',go);
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

	function go(){
		$('html,body').scrollTop(0);
	}

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		}
	}
});*/