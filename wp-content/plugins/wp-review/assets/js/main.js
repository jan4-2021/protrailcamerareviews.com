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

/*
* Plugin Name: WP Review
* Plugin URI: https://wordpress.org/plugins/wp-review/
* Description: Create reviews! Choose from Stars, Percentages or Points for review scores. Supports Retina Display, WPMU & Unlimited Color Schemes.
* Author: MyThemesShop
* Author URI: http://mythemeshop.com/
*/
jQuery(document).ready(function($) {
	
	$('.wp-review-comment-field.allowed-to-rate a').on('click', function() {
		var $this = $(this),
			$elem = $this.closest('.wp-review-comment-field');
		if ($elem.hasClass('allowed-to-rate')) {
			$elem.removeClass('has-not-rated-yet');
			$elem.find('.review-result').css('width', parseInt($this.data('input-value'))*20+'%');
			$elem.find('.wp_review_comment_rating').val($this.data('input-value'));
		}
	});
	
	var $commentFeedback = $('.wp-review-feedback');
	$commentFeedback.on('click', 'a', function(e){
		var $this = $(this);

		e.preventDefault();

		if ( $this.hasClass('voted') || $this.siblings().hasClass('voted') || $commentFeedback.hasClass('processing') ) return;

		$.ajax({
			type: 'POST',
			url: wpreview.ajaxurl,
			beforeSend: function(){
				$commentFeedback.addClass('processing');
			},
			data: { action: 'mts_review_feedback', isHelpful: $this.data('value'), commentId: $this.data('comment-id') },
			success: function(data){
				$this.closest('.wp-review-feedback').find('a').removeClass('voted');
				$this.addClass('voted').find('.feedback-count').text('('+data+')');
			},
			error: function(jqXHR){
				alert(jqXHR.responseText);
			},
			complete: function() {
				$commentFeedback.removeClass('processing');
			}
		});
	});
	

	/* 
		Add class to comment form
	 */
	if ($('#wp-review-comment-title-field').length) {
		$('#wp-review-comment-title-field').closest('form').addClass('wp-review-comment-form');
	}

});

function wp_review_rate( $elem ) {// rating, postid, nonce ) {
	var is_comment_rating = ($elem.is('.wp-review-comment-rating-star') || !!$elem.closest('.wp-review-comment-rating-star').length);
	if ( is_comment_rating ) {
		return ''; // don't do anything if it's a comment rating element
	}
	var rating = $elem.find('.wp-review-user-rating-val').val();
	var postid = $elem.find('.wp-review-user-rating-postid').val();
	var token = $elem.find('.wp-review-user-rating-nonce').val();
	var $target = $elem;
	
	if ( ! $target.is('.wp-review-user-rating') )
		$target = $elem.closest('.wp-review-user-rating');

	if (rating == 0) {
		return '';
	}

	jQuery.ajax ({
		beforeSend: function() {
			$target.addClass('wp-review-loading');
		},
		data: { action: 'wp_review_rate', post_id: postid, nonce: token, review: rating },
		type: 'post',
		dataType: 'json',
		url: wpreview.ajaxurl,
		success: function( response ){
			$target.removeClass('wp-review-loading');
			if (typeof response.html !== 'undefined' && response.html != '') {
				$target.empty().append(response.html).addClass('has-rated');
			}
				
			// update text total
			if (typeof response.rating_total !== 'undefined' && response.rating_total != '') {
				$target.parent().find('.wp-review-user-rating-total').text(response.rating_total);	
			}
			// update rating count
			if (typeof response.rating_count !== 'undefined' && response.rating_count != '') {
				$target.parent().find('.wp-review-user-rating-counter').text(response.rating_count);				
			}
		}
	});

	
}

}
/*
     FILE ARCHIVED ON 23:57:33 Mar 16, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:00 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 209.75
  PetaboxLoader3.resolve: 36.866
  LoadShardBlock: 164.298 (3)
  load_resource: 84.909
  PetaboxLoader3.datanode: 134.661 (4)
  exclusion.robots: 0.334
  esindex: 0.032
  CDXLines.iter: 31.837 (3)
  exclusion.robots.policy: 0.312
  RedisCDXSource: 7.284
*/