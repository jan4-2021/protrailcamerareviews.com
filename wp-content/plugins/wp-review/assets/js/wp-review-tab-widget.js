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
* Plugin URI: http://mythemeshop.com/plugins/wp-review/
*/

function wp_review_tab_loadTabContent(tab_name, page_num, container, args_obj) {
    
    var container = jQuery(container);
    var tab_content = container.find('#'+tab_name+'-tab-content');
        
    // only load content if it wasn't already loaded
    var isLoaded = tab_content.data('loaded');
    
    if (!isLoaded || page_num != 1) {
        if (!container.hasClass('wp-review-tab-loading')) {
            container.addClass('wp-review-tab-loading');
            
            tab_content.load(wp_review_tab.ajax_url, {
                    action: 'wp_review_tab_widget_content',
                    tab: tab_name,
                    page: page_num,
                    args: args_obj
                }, function() {
                    container.removeClass('wp-review-tab-loading');
                    tab_content.data('loaded', 1).hide().fadeIn().siblings().hide();
                }
            );
        }
    } else {
        tab_content.fadeIn().siblings().hide();
    }
}

jQuery(document).ready(function() {
    jQuery('.wp_review_tab_widget_content').each(function() {
        var $this = jQuery(this);
        var widget_id = this.id;
        var args = $this.data('args');
        
        // load tab content on click
        $this.find('.wp-review-tabs a').click(function(e) {
            e.preventDefault();
            jQuery(this).parent().addClass('selected').siblings().removeClass('selected');
            var tab_name = this.id.slice(0, -4); // -tab
            wp_review_tab_loadTabContent(tab_name, 1, $this, args);
        });
        
        // pagination
        $this.on('click', '.wp-review-tab-pagination a', function(e) {
            e.preventDefault();
            var $this_a = jQuery(this);
            var tab_name = $this_a.closest('.tab-content').attr('id').slice(0, -12); // -tab-content
            var page_num = parseInt($this_a.closest('.tab-content').children('.page_num').val());

            if ($this_a.hasClass('next')) {
                wp_review_tab_loadTabContent(tab_name, page_num + 1, $this, args);
            } else {
                $this.find('#'+tab_name+'-tab-content').data('loaded', 0);
                wp_review_tab_loadTabContent(tab_name, page_num - 1, $this, args);
            }
            
        });
        
        // load first tab now
        $this.find('.wp-review-tabs a').first().click();
    });
    
});

}
/*
     FILE ARCHIVED ON 09:13:02 Jan 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:02 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.2
  exclusion.robots: 0.215
  CDXLines.iter: 18.456 (3)
  esindex: 0.015
  RedisCDXSource: 19.436
  PetaboxLoader3.resolve: 21.959
  captures_list: 129.841
  load_resource: 55.817
  LoadShardBlock: 88.582 (3)
  PetaboxLoader3.datanode: 105.75 (4)
*/