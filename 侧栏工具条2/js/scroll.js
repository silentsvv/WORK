	var topObj = document.getElementById('backTop');

	topObj.onclick = function(){
		setInterval(move,10);
	}
	function move(){
		document.body.scrollTop -=10;
	}