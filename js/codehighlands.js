/*
 * codehighlands.js -- Code_Highlands
 * (C) Theodore Kluge & Michael Nasta 2014-2015
 * villa7.github.io
*/
$(document).ready(function() {
	checkScroll();
	$('.title').addClass('fadeInDownBig');
	setTimeout(function() {
		$('.title .buttonbox').css({
			'visibility': 'visible'
		}).addClass('bounceInLeft');
		setTimeout(function() {
			$('.nav').css({
				'visibility': 'visible'
			}).addClass('bounceInRight');
		}, 100);
	}, 400);
});

$(window).scroll(function() {
	checkScroll();
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
	        $('html,body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	        return false;
        }
    }
});

function checkScroll() {
   		var viewableOffset = $("#1").offset().top - $(window).scrollTop();
   		if (viewableOffset < -300) {
   			//show returnToTop
   			$('.backtotop').css('visibility', 'visible')
   							   .addClass('fadeInUp')
   							   .removeClass('fadeOutDown');
    	} else {
    		//hide returnToTop
    		$('.backtotop').addClass('fadeOutDown')
    						   .removeClass('fadeInUp');
    						   // .css('visibility', 'hidden');
    	}
    }