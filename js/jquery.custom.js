/* jquery custom */

$(document).ready(function(){
	
	$(".nav_responsive").click(function(){
		$("nav > ul").slideToggle("600");
		$(".nav_responsive").toggleClass("close_menu");
	});
	
	// Scrolling Anker-Link 
		// Reminder for Dummies: Link <a href="#services">Jump to services</a> / Anker <div id="services"></div>
		$('a[href^="#"]').on('click', function(e) {
			e.preventDefault();
	
			var target = this.hash,
				$target = $(target);
	
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 600, 'swing', function() {
				window.location.hash = target;
			});
		});
		
});