$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    $('#onDesktop').remove();
}
	$(window).scroll(function () {
	   if ($(window).scrollTop() >= $("#unique").position().top) {
	      $('#presentation').animate({
			    opacity: 1
			  }, 1200, function() {
			    // Animation complete.
			  });
				$('#screen').addClass('animate');
				$('#trophy').addClass('trophy').delay( 6000 );
				$('#work').delay(3500).animate({
			    opacity: 1
			  }, 1200, function() {
			    // Animation complete.
			  });
	   }
	});
