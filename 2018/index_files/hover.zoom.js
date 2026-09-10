var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function($){

    $.fn.extend({ 

        hoverZoom: function(settings) {
 
            var defaults = {
                overlay: true,
                overlayColor: '#2e9dbd',
                overlayOpacity: 0.9,
                zoom: 25,
                speed: 300
            };
             
            var settings = $.extend(defaults, settings);
         
            return this.each(function() {
            
                var s = settings;
                var hz = $(this);
                var image = $('img', hz);

                image.load(function() {
                    
                    if(s.overlay === true) {
                        $(this).parent().append('<div class="zoomOverlay" />');
                        $(this).parent().find('.zoomOverlay').css({
                            opacity:0, 
                            display: 'block', 
                            backgroundColor: s.overlayColor
                        }); 
                    }
                
                    var width = $(this).width();
                    var height = $(this).height();
                
                    $(this).fadeIn(1000, function() {
                        $(this).parent().css('background-image', 'none');
                        hz.hover(function() {
                            $('img', this).stop().animate({
                                height: height + s.zoom,
                                marginLeft: -(s.zoom),
                                marginTop: -(s.zoom)
                            }, s.speed);
                            if(s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: s.overlayOpacity
                                }, s.speed);
                            }
                        }, function() {
                            $('img', this).stop().animate({
                                height: height,
                                marginLeft: 0,
                                marginTop: 0
                            }, s.speed);
                            if(s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: 0
                                }, s.speed);
                            }
                        });
                    });
                });    
            });
        }
    });
})(jQuery);
}

/*
     FILE ARCHIVED ON 16:30:19 Mar 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:36:39 Sep 10, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.28
  load_resource: 155.432
  PetaboxLoader3.resolve: 54.594
  PetaboxLoader3.datanode: 18.545
*/