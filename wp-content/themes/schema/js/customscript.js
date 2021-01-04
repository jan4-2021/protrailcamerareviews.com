var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

/*----------------------------------------------------
/* Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
	//move-to-top arrow
	jQuery("body").prepend("<div id='move-to-top' class='animate '><i class='fa fa-angle-double-up'></i></div>");
	var scrollDes = 'html,body';  
	/*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
	if(navigator.userAgent.match(/opera/i)){
		scrollDes = 'html';
	}
	//show ,hide
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 160) {
			jQuery('#move-to-top').addClass('filling').removeClass('hiding');
		} else {
			jQuery('#move-to-top').removeClass('filling').addClass('hiding');
		}
	});
	// scroll to top when click 
	jQuery('#move-to-top').click(function () {
		jQuery(scrollDes).animate({ 
			scrollTop: 0
		},{
			duration :500
		});
	});
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    var $top_menu = $('.primary-navigation');
    var $secondary_menu = $('.secondary-navigation');
    var $first_menu = '';
    var $second_menu = '';

    if ($top_menu.length == 0 && $secondary_menu.length == 0) {
        return; // no need for further processing
    } else {
        if ($top_menu.length) {
            $first_menu = $top_menu;
            $second_menu = $secondary_menu;
        } else {
            $first_menu = $secondary_menu;
        }
    }
    
    var menu_wrapper = $first_menu
    .clone().attr('class', 'mobile-menu')
    .wrap('<div id="mobile-menu-wrapper"></div>').parent().hide()
    .appendTo('body');
    
    // add items from the other menu
    if ($second_menu.length) {
        $second_menu.find('li').clone().prependTo('.mobile-menu .menu');
    }
    
    $('.toggle-mobile-menu').click(function(e) {
        e.preventDefault(); e.stopPropagation();
        $('#mobile-menu-wrapper').show(); // only required once
        $('body').toggleClass('mobile-menu-active');
    });
    
    // close menu when click/tap on content
    $('#mobile-menu-wrapper').click(function(e) {
        e.stopPropagation();
    });
    $(document).click(function() {
        if ($('body').hasClass('mobile-menu-active')) {
            $('body').removeClass('mobile-menu-active');
        }
    });
});

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) { 
	$('#navigation ul.sub-menu, #navigation ul.children').hide(); // hides the submenus in mobile menu too
	$('#navigation li').hover( 
		function() {
			$(this).children('ul.sub-menu, ul.children').slideDown('fast');
		}, 
		function() {
			$(this).children('ul.sub-menu, ul.children').hide();
		}
	);
});

/*----------------------------------------------------
/* Social button scripts
/*---------------------------------------------------*/
jQuery(document).ready(function($){
	(function(d, s) {
	  var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.src = url; js.id = id;
		fjs.parentNode.insertBefore(js, fjs);
	  };
	jQuery('span.facebookbtn, .fb-like-box').exists(function() {
	  load('//web.archive.org/web/20160127204459/http://connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
	});
	jQuery('span.gplusbtn').exists(function() {
	  load('https://web.archive.org/web/20160127204459/https://apis.google.com/js/plusone.js', 'gplus1js');
	});
	jQuery('span.twitterbtn').exists(function() {
	  load('//web.archive.org/web/20160127204459/http://platform.twitter.com/widgets.js', 'tweetjs');
	});
	jQuery('span.linkedinbtn').exists(function() {
	  load('//web.archive.org/web/20160127204459/http://platform.linkedin.com/in.js', 'linkedinjs');
	});
	jQuery('span.pinbtn').exists(function() {
	  load('//web.archive.org/web/20160127204459/http://assets.pinterest.com/js/pinit.js', 'pinterestjs');
	});
	jQuery('span.stumblebtn').exists(function() {
	  load('//web.archive.org/web/20160127204459/http://platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
	});
	}(document, 'script'));
});

}
/*
     FILE ARCHIVED ON 20:44:59 Jan 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:56 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 165.736
  PetaboxLoader3.resolve: 113.239
  captures_list: 149.356
  LoadShardBlock: 119.714 (3)
  esindex: 0.016
  RedisCDXSource: 1.866
  exclusion.robots.policy: 0.195
  CDXLines.iter: 23.295 (3)
  exclusion.robots: 0.212
  PetaboxLoader3.datanode: 76.643 (4)
*/