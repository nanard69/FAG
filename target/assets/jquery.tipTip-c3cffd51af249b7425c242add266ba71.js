(function(c){c.fn.tipTip=function(A){var a=c.extend({activation:"hover",keepAlive:!1,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:!1,enter:function(){},exit:function(){}},A);if(0>=c("#tiptip_holder").length){var e=c('<div id="tiptip_holder" style="max-width:'+a.maxWidth+';"></div>'),v=c('<div id="tiptip_content"></div>'),t=c('<div id="tiptip_arrow"></div>');c("body").append(e.html(v).prepend(t.html('<div id="tiptip_arrow_inner"></div>')))}else e=
c("#tiptip_holder"),v=c("#tiptip_content"),t=c("#tiptip_arrow");return this.each(function(){var g=c(this),x=a.content?a.content:g.attr(a.attribute);if(""!=x){var d=function(){a.exit.call(this);q&&clearTimeout(q);e.fadeOut(a.fadeOut)},p=function(){a.enter.call(this);v.html(x);e.hide().removeAttr("class").css("margin","0");t.removeAttr("style");var k=parseInt(g.offset().top),f=parseInt(g.offset().left),m=parseInt(g.outerWidth()),d=parseInt(g.outerHeight()),n=e.outerWidth(),l=e.outerHeight(),u=Math.round((m-
n)/2),p=Math.round((d-l)/2),r=Math.round(f+u),h=Math.round(k+d+a.edgeOffset),b="",s="",w=Math.round(n-12)/2;"bottom"==a.defaultPosition?b="_bottom":"top"==a.defaultPosition?b="_top":"left"==a.defaultPosition?b="_left":"right"==a.defaultPosition&&(b="_right");var y=u+f<parseInt(c(window).scrollLeft()),z=n+f>parseInt(c(window).width());if(y&&0>u||"_right"==b&&!z||"_left"==b&&f<n+a.edgeOffset+5)b="_right",s=Math.round(l-13)/2,w=-12,r=Math.round(f+m+a.edgeOffset),h=Math.round(k+p);else if(z&&0>u||"_left"==
b&&!y)b="_left",s=Math.round(l-13)/2,w=Math.round(n),r=Math.round(f-(n+a.edgeOffset+5)),h=Math.round(k+p);f=k+d+a.edgeOffset+l+8>parseInt(c(window).height()+c(window).scrollTop());m=0>k+d-(a.edgeOffset+l+8);if(f||"_bottom"==b&&f||"_top"==b&&!m)b="_top"==b||"_bottom"==b?"_top":b+"_top",s=l,h=Math.round(k-(l+5+a.edgeOffset));else if(m|("_top"==b&&m)||"_bottom"==b&&!f)b="_top"==b||"_bottom"==b?"_bottom":b+"_bottom",s=-12,h=Math.round(k+d+a.edgeOffset);if("_right_top"==b||"_left_top"==b)h+=5;else if("_right_bottom"==
b||"_left_bottom"==b)h-=5;if("_left_top"==b||"_left_bottom"==b)r+=5;t.css({"margin-left":w+"px","margin-top":s+"px"});e.css({"margin-left":r+"px","margin-top":h+"px"}).attr("class","tip"+b);q&&clearTimeout(q);q=setTimeout(function(){e.stop(!0,!0).fadeIn(a.fadeIn)},a.delay)};a.content||g.removeAttr(a.attribute);var q=!1;"hover"==a.activation?(g.hover(function(){p()},function(){a.keepAlive||d()}),a.keepAlive&&e.hover(function(){},function(){d()})):"focus"==a.activation?g.focus(function(){p()}).blur(function(){d()}):
"click"==a.activation&&(g.click(function(){p();return!1}).hover(function(){},function(){a.keepAlive||d()}),a.keepAlive&&e.hover(function(){},function(){d()}))}})}})(jQuery);