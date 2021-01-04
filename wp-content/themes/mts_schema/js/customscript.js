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
/* Show/hide Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
	//move-to-top arrow
	jQuery("body").prepend("<a id='move-to-top' class='animate ' href='#blog'><i class='fa fa-angle-double-up'></i></a>");
    
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
});


/*----------------------------------------------------
/* Make all anchor links smooth scrolling
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
 // scroll handler
  var scrollToAnchor = function( id, event ) {
    // grab the element to scroll to based on the name
    var elem = $("a[name='"+ id +"']");
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
      // cancel default event propagation
      event.preventDefault();

      // do the scroll
      // also hide mobile menu
      var scroll_to = elem.offset().top;
      $('html, body').removeClass('mobile-menu-active').animate({
              scrollTop: scroll_to
      }, 600, 'swing', function() { if (scroll_to > 46) window.location.hash = id; } );
    }
  };
  // bind to click event
  $("a").click(function( event ) {
    // only do this if it's an anchor link
    var href = $(this).attr("href");
    if ( href && href.match("#") && href !== '#' ) {
      // scroll to the location
      var parts = href.split('#'),
        url = parts[0],
        target = parts[1];
      if ((!url || url == window.location.href.split('#')[0]) && target)
        scrollToAnchor( target, event );
    }
  });
});


/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
if (mts_customscript.responsive && mts_customscript.nav_menu != 'none') {
    jQuery(document).ready(function($){
        $('#secondary-navigation').append('<div id="mobile-menu-overlay" />');
        // merge if two menus exist
        if (mts_customscript.nav_menu == 'both' && !$('.navigation.mobile-only').length) {
            $('.navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();
        }
        $('nav').find('.header-social-icons').clone().appendTo('.mobile-menu-wrapper').hide();
        $('nav').find('.mts-cart').clone().appendTo('.mobile-menu-wrapper').hide();
    
        $('.toggle-mobile-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('body').toggleClass('mobile-menu-active');

            if ( $('body').hasClass('mobile-menu-active') ) {
                if ( $(document).height() > $(window).height() ) {
                    var scrollTop = ( $('html').scrollTop() ) ? $('html').scrollTop() : $('body').scrollTop();
                    $('html').addClass('noscroll').css( 'top', -scrollTop );
                }
                $('#mobile-menu-overlay').fadeIn();
            } else {
                var scrollTop = parseInt( $('html').css('top') );
                $('html').removeClass('noscroll');
                $('html,body').scrollTop( -scrollTop );
                $('#mobile-menu-overlay').fadeOut();
            }
        });
    }).on('click', function(event) {

        var $target = jQuery(event.target);
        if ( ( $target.hasClass("fa") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
            return;
        }
        jQuery('body').removeClass('mobile-menu-active');
        jQuery('html').removeClass('noscroll');
        jQuery('#mobile-menu-overlay').fadeOut();
    });
}

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
    
    function mtsDropdownMenu() {
        var wWidth = $(window).width();
        if(wWidth > 865) {
            $('.navigation ul.sub-menu, .navigation ul.children').hide();
            var timer;
            var delay = 100;
            $('.navigation li').hover( 
              function() {
                var $this = $(this);
                timer = setTimeout(function() {
                    $this.children('ul.sub-menu, ul.children').slideDown('fast');
                }, delay);
                
              },
              function() {
                $(this).children('ul.sub-menu, ul.children').hide();
                clearTimeout(timer);
              }
            );
        } else {
            $('.navigation li').unbind('hover');
            $('.navigation li.active > ul.sub-menu, .navigation li.active > ul.children').show();
        }
    }

    mtsDropdownMenu();

    $(window).resize(function() {
        mtsDropdownMenu();
    });
});

/*---------------------------------------------------
/*  Vertical menus toggles
/* -------------------------------------------------*/
jQuery(document).ready(function($) {

    $('.widget_nav_menu, .navigation .menu').addClass('toggle-menu');
    $('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    $('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

    $('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');

    $('.toggle-caret').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });
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
	jQuery('span.facebookbtn, .facebook_like').exists(function() {
	  load('//web.archive.org/web/20160316235733/http://connect.facebook.net/en_US/all.js#xfbml=1&version=v2.3', 'fbjssdk');
	});
	jQuery('span.gplusbtn').exists(function() {
	  load('https://web.archive.org/web/20160316235733/https://apis.google.com/js/plusone.js', 'gplus1js');
	});
	jQuery('span.twitterbtn').exists(function() {
	  load('//web.archive.org/web/20160316235733/http://platform.twitter.com/widgets.js', 'tweetjs');
	});
	jQuery('span.linkedinbtn').exists(function() {
	  load('//web.archive.org/web/20160316235733/http://platform.linkedin.com/in.js', 'linkedinjs');
	});
	jQuery('span.pinbtn').exists(function() {
	  load('//web.archive.org/web/20160316235733/http://assets.pinterest.com/js/pinit.js', 'pinterestjs');
	});
	jQuery('span.stumblebtn').exists(function() {
	  load('//web.archive.org/web/20160316235733/http://platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
	});
	}(document, 'script'));
});

/*----------------------------------------------------
/* Lazy load avatars
/*---------------------------------------------------*/
jQuery(document).ready(function($){
    var lazyloadAvatar = function(){
        $('.comment-author .avatar').each(function(){
            var distanceToTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var isVisible = distanceToTop - scroll < windowHeight;
            if( isVisible ){
                var hashedUrl = $(this).attr('data-src');
                if ( hashedUrl ) {
                    $(this).attr('src',hashedUrl).removeClass('loading');
                }
            }
        });
    };
    if ( $('.comment-author .avatar').length > 0 ) {
        $('.comment-author .avatar').each(function(i,el){
            $(el).attr('data-src', el.src).removeAttr('src').addClass('loading');
        });
        $(function(){
            $(window).scroll(function(){
                lazyloadAvatar();
            });
        });
        lazyloadAvatar();
    }
});

}
/*
     FILE ARCHIVED ON 23:57:33 Mar 16, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:46 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 19.813 (3)
  exclusion.robots.policy: 0.122
  RedisCDXSource: 0.595
  captures_list: 281.923
  load_resource: 1136.685
  PetaboxLoader3.datanode: 1151.342 (4)
  LoadShardBlock: 258.506 (3)
  exclusion.robots: 0.131
  esindex: 0.009
  PetaboxLoader3.resolve: 167.415 (2)
*/