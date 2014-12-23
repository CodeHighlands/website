/*
 * codehighlands.js -- Code_Highlands
 * (C) Theodore Kluge & Michael Nasta 2014-2015
 * villa7.github.io
*/
//global vars are nice
var indebug = true,
	res,
	element,
	width,
	fSize;
var winWidth = $(window).width(),
	winHeight = $(window).height();
var sizeDiff = 750;

$(document).ready(function() {
	checkScroll();
	resizeAll();
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
	wh = winHeight;
    st = $(document).scrollTop();
    about = $('#about');
    /*if (st <= wh) {
      //$('.title *').css('transform','translate3d(0,' + -(st/5) + 'px,0)');
      $('.title *').css('opacity', (1-st/wh*2).toFixed(2));
    }*/
    if (st <= (about.scrollTop() + wh)) {
      $('#page-2-content').css('opacity', ((st)/(about.offset().top)).toFixed(2));
    }
    if (st <= (about.offset().top + wh)) {
      $('#headerbg').css('transform','translate3d(0,' + (40-(st/(about.offset().top+wh)*40)) + 'px,0)');
      $('#headerbg').css('opacity', (1-st/(about.offset().top)*0.5) );
    }
});

$(window).resize(function() {
    clearTimeout(res);
	res = setTimeout(function() {
	    winHeight = $(window).height();
	    winWidth = $(window).width();
	    resizeAll();
	}, 100);
});

function debug(a) {
	if (indebug) {
		console.log(a);
	}
}

$('a[href*=#]:not([href=#])').click(function(e) {
	//e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
	        $('html,body').animate({
	            scrollTop: target.offset().top
	        }, 1000, 'swing');
	        //window.location.hash = target.selector;
	        return false;
        }
    }
});

function checkScroll() {
	var viewableOffset = $("#top").offset().top - $(window).scrollTop();
	if (viewableOffset < -300) {
		//show returnToTop
		$('.backtotop').css('visibility', 'visible')
					   .addClass('fadeInUp')
					   .removeClass('fadeOutDown');
   	} else {
   		//hide returnToTop
   		$('.backtotop').addClass('fadeOutDown')
					   .removeClass('fadeInUp');
  	}
}
/* Probably better to use css media queries, but js is easier */
function resizeAll() {
	element = {
		title: ".title h1",
		subtitle: ".title h4",
		nav: ".nav",
		titleButtons: ".title .btn"
	};

	if (winWidth > sizeDiff) { //big display
		width = {
			title: winWidth - (winWidth * 0.1) - (winWidth * 0.31)
		}
		$('.title').css({
			'left': 168
		});
		$('.title .buttonbox').css({
			'margin-left': 0,
			'width': 'auto'
		})
		$(element.title).html("code<span style='color:#333'>_</span>highlands");
	} else { //little display
		width = {
			title: winWidth
		}
		$('.title').css({
			'left': winWidth * 0.07
		});
		$('.title .buttonbox').css({
			'margin-left': -1 * winWidth * 0.07,
			'width': winWidth
		})
		$(element.title).html("<span style='color:#333'>code</span><br>highlands");
	}

	fSize = {
		title: width.title / ($(element.title).text().length) * 2,
		subtitle: (width.title / ($(element.title).text().length) * 2) * 0.23076923076923078
	}

	$(element.title).css({
		'font-size': fSize.title
	});
	$(element.subtitle).css({
		'font-size': fSize.subtitle
	});
}

/*
1680 - 1143 = 537
1680 10% = 168 left
		   369 right
		   */