$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
            } else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	$('#back-to-top').tooltip('show');
	
	//3 items carousel
	
	$('.flexible').carousel({
		interval: false
	});
	
	$('.flexible').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
		
		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this));
			} else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});

});
function validateForm() {
	alert("Thanks for your feedback");
}