$(document).ready(function(){
	$('p').click(function(){
		$('p').removeClass("blue");
		$('p').addClass("red");
	});
	$('p').dblclick(function(){
		$('p').removeClass("red");
		$('p').addClass("blue");
	});
	$('p').draggable();
});
