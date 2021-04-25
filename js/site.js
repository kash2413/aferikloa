

jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.07
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 1;
				$strip.find("li").each(function(i){
				stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width 	
				$strip.width(stripWidth);			
				var totalTravel = stripWidth+containerWidth;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};


var ResponsiveAdsense = new (function(){
  var THIS = this;
	THIS._banners = [];
	THIS._t = ['WebkitTransform','MozTransform','OTransform ','msTransform','transform'];

	THIS.resizeHandler = function(){
		var bc = THIS._banners;
		for(var x=0;x<bc.length;x++)
		{
			var banner = bc[x].getElementsByTagName("ins")[0];
			if(!banner) throw new Error('The ResponsiveAdsense container should contain the element <ins class="adsbygoogle" ...>');
			for(var y=0; y<THIS._t.length; y++)
			{
				try{
					banner.style[THIS._t[y]] = 'scaleX(' + (bc[x].clientWidth / banner.offsetWidth) + ') scaleY(' + (bc[x].clientHeight / banner.offsetHeight) + ')';
					banner.style[THIS._t[y]+'Origin'] = 'top left';
				} catch(e){};
			}
		}
	};

	return this;
})();

ResponsiveAdsense.addBanner = function(el){
	this._banners.push(el);
};

ResponsiveAdsense.addBanners = function(arrEls){
	for(var x=0;x<arrEls.length;x++)
		this.addBanner(arrEls[x]);
};



$(document).ready(function() {
        /*** Dropdown menu ***/
        
        var timeout    = 200;
        var closetimer = 0;
        var ddmenuitem = 0;

        function dd_open() {
            dd_canceltimer();
            dd_close();
            var liwidth = $(this).width();
            ddmenuitem = $(this).find('ul').css({'visibility': 'visible', 'width': liwidth});
            ddmenuitem.prev().addClass('dd_hover').parent().addClass('dd_hover');
        }

        function dd_close() {
            if(ddmenuitem) ddmenuitem.css('visibility', 'hidden').prev().removeClass('dd_hover').parent().removeClass('dd_hover');
        }

        function dd_timer() {closetimer = window.setTimeout(dd_close, timeout);
        }

        function dd_canceltimer() {
            if (closetimer) {
                window.clearTimeout(closetimer);
                closetimer = null;
            }
        }
        document.onclick = dd_close;

        $('#dd > li').bind('mouseover', dd_open);
        $('#dd > li').bind('mouseout',  dd_timer);

        $('#larr, #rarr').hide();
        $('.slideshow').hover(
            function(){
                $('#larr, #rarr').show();
            }, function(){
                $('#larr, #rarr').hide();
            }
        );

		
		
		
		jQuery("#navigation ul.nav a, .top_bar ul.top_nav a").removeAttr('title');
	jQuery(" #navigation ul.nav ul, .top_bar ul.top_nav ul").css({display: "none"}); // Opera Fix
	jQuery("#navigation ul.nav li, .top_bar ul.top_nav li").each(function()
		{	
	var jQuerysubmeun = jQuery(this).find('ul:first');
	jQuery(this).hover(function()
		{	
	jQuerysubmeun.stop().css({overflow:"hidden", height:"auto", display:"none", paddingTop:0}).slideDown(250, function()
		{
	jQuery(this).css({overflow:"visible", height:"auto"});
		});	
		},
	function()
		{	
	jQuerysubmeun.stop().slideUp(250, function()
		{	
	jQuery(this).css({overflow:"hidden", display:"none"});
			});
		});	
	});
		

	$('.post a:has(img)').attr('rel', 'group') 
	$('.post a:not(.nopop):has(img)').fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titleShow' 	: 'true',
				'titlePosition'		: 'outside'
	});




	$(".scroll").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 500);
	});


 $(".scn a").attr("target","_blank");
$(".external").attr("target","_blank");
  
  
	$(".listing tr").mouseover(function(){$(this).addClass("over");}).mouseout(function(){$(this).removeClass("over");});
	$(".listing tr:even").addClass("alt");
	$(".listing tr:even").css("background-color", "#FFFFFF");
  
  
  
  
  
  
  $(".runtext").liScroll();
  
  
});

