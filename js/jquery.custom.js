/* jquery custom */

$(document).ready(function(){
	
	$(".nav_responsive").click(function(){
		$("nav > ul").slideToggle("600");
		$(".nav_responsive").toggleClass("close_menu");
	});
	
});