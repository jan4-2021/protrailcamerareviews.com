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

jQuery(document).ready(function($){
    // Toggles
    if ($('.wp_shortcodes_toggle').length) {
        $(".togglec").hide();
    	$(".wps_togglet").click(function(){
    	   $(this).toggleClass("toggleta").next(".togglec").slideToggle("normal");
    	});
     }
     
     // Tabs
    if ($('.wp_shortcodes_tabs').length) {
        $('.wp_shortcodes_tabs').each(function() {
            var $this = $(this);
            $this.find('.tab_content').slice(1).hide();
            $this.find('ul.wps_tabs li:first').addClass('active');
            $this.find('ul.wps_tabs li a').click(function(e) {
                e.preventDefault();
                var $this_a = $(this);
                var $tab = $this.find('#'+$this_a.data('tab'));
                if (! $tab.is(':visible')) {
                    $this.find('.tab_content').hide();
                    $this_a.parent().addClass('active').siblings().removeClass('active');
                    $tab.fadeIn(600);
                }
            });
        });
    }

    if ($('.wp_shortcodes_tooltip').length) {
        $('.wp_shortcodes_tooltip').each(function(index, el) {
            var $this = $(this),
                ttgravity = $this.data('gravity'),
                ttfade = Boolean($this.data('fade'));
            $this.tipsy({gravity: ttgravity, fade: ttfade});
        });
    }

});

}
/*
     FILE ARCHIVED ON 05:51:37 Jan 27, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:22 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 95.939
  PetaboxLoader3.resolve: 42.339
  captures_list: 103.876
  LoadShardBlock: 75.141 (3)
  esindex: 0.01
  RedisCDXSource: 5.766
  exclusion.robots.policy: 0.219
  CDXLines.iter: 19.405 (3)
  exclusion.robots: 0.235
  PetaboxLoader3.datanode: 116.097 (4)
*/