$(window).load(function(){$(".search-toggle").click(function(){return $(this).toggleClass("active"),$(".division-search").slideToggle(),!1}),$(".directory-toggle").click(function(){return $(this).toggleClass("active"),$(".division-directory").slideToggle(),!1}),$(".division-menu").on("click",".has-subnav a",function(){$(this).next("ul").is(":visible")?($(this).next("ul").slideUp("fast"),$(this).removeClass("active")):($(this).closest("ul").find(".active").next("ul").slideUp("fast"),$(this).closest("ul").find(".active").removeClass("active"),$(this).next().slideToggle("fast"),$(this).addClass("active"))})}),$(window).load(function(){$(".search-toggle").click(function(){return $(this).toggleClass("active"),$(".division-search").slideToggle(),!1}),$(".directory-toggle").click(function(){return $(this).toggleClass("active"),$(".division-directory").slideToggle(),!1}),$(".division-menu").on("click",".has-subnav a",function(){$(this).next("ul").is(":visible")?($(this).next("ul").slideUp("fast"),$(this).removeClass("active")):($(this).closest("ul").find(".active").next("ul").slideUp("fast"),$(this).closest("ul").find(".active").removeClass("active"),$(this).next().slideToggle("fast"),$(this).addClass("active"))})}),$(window).load(function(){$(".nav-title a").click(function(){return $(".nav-main-wrapper").toggleClass("expand"),!1}),$(".module .media").fitVids()}),$(window).load(function(){$(".nav-title a").click(function(){return $(".nav-main-wrapper").toggleClass("expand"),!1}),$(".module .media").fitVids()}),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(jQuery),$(window).load(function(){$(".search-toggle").click(function(){return $(this).toggleClass("active"),$(".division-search").slideToggle(),!1}),$(".directory-toggle").click(function(){return $(this).toggleClass("active"),$(".division-directory").slideToggle(),!1}),$(".division-menu").on("click",".has-subnav a",function(){$(this).next("ul").is(":visible")?($(this).next("ul").slideUp("fast"),$(this).removeClass("active")):($(this).closest("ul").find(".active").next("ul").slideUp("fast"),$(this).closest("ul").find(".active").removeClass("active"),$(this).next().slideToggle("fast"),$(this).addClass("active"))})}),$(window).load(function(){$(".search-toggle").click(function(){return $(this).toggleClass("active"),$(".division-search").slideToggle(),!1}),$(".directory-toggle").click(function(){return $(this).toggleClass("active"),$(".division-directory").slideToggle(),!1}),$(".division-menu").on("click",".has-subnav a",function(){$(this).next().slideToggle("slow"),$(this).toggleClass("active")})}),$(window).load(function(){$(".nav-title a").click(function(){return $(".nav-main-wrapper").toggleClass("expand"),!1}),$(".module .media").fitVids()}),$(window).load(function(){$(".flexslider").length&&($(".flexslider").show(),$(".flexslider").flexslider({animation:"slide",animationLoop:!0,itemMargin:0,minItems:1,maxItems:1,itemWidth:500})),$(".nav-title a").click(function(){return $(".nav-main-wrapper").toggleClass("expand"),!1}),$(".module .media").fitVids()}),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(jQuery),function(a){a.flexslider=function(b,c){var d=a(b),e=a.extend({},a.flexslider.defaults,c),f=e.namespace,g="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,h=g?"touchend":"click",i="vertical"===e.direction,j=e.reverse,k=0<e.itemWidth,l="fade"===e.animation,m=""!==e.asNavFor,n={};a.data(b,"flexslider",d),n={init:function(){d.animating=!1,d.currentSlide=e.startAt,d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=e.selector.substr(0,e.selector.search(" ")),d.slides=a(e.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=0<a(e.sync).length,"slide"===e.animation&&(e.animation="swing"),d.prop=i?"top":"marginLeft",d.args={},d.manualPause=!1;var b,c=d;if((b=!e.video)&&(b=!l)&&(b=e.useCSS))a:{b=document.createElement("div");var f,h=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(f in h)if(void 0!==b.style[h[f]]){d.pfx=h[f].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",b=!0;break a}b=!1}c.transitions=b,""!==e.controlsContainer&&(d.controlsContainer=0<a(e.controlsContainer).length&&a(e.controlsContainer)),""!==e.manualControls&&(d.manualControls=0<a(e.manualControls).length&&a(e.manualControls)),e.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),m&&n.asNav.setup(),d.setup("init"),e.controlNav&&n.controlNav.setup(),e.directionNav&&n.directionNav.setup(),e.keyboard&&(1===a(d.containerSelector).length||e.multipleKeyboard)&&a(document).bind("keyup",function(a){a=a.keyCode,!d.animating&&(39===a||37===a)&&(a=39===a?d.getTarget("next"):37===a?d.getTarget("prev"):!1,d.flexAnimate(a,e.pauseOnAction))}),e.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var c=d.getTarget(0>b?"next":"prev");d.flexAnimate(c,e.pauseOnAction)}),e.pausePlay&&n.pausePlay.setup(),e.slideshow&&(e.pauseOnHover&&d.hover(function(){!d.manualPlay&&!d.manualPause&&d.pause()},function(){!d.manualPause&&!d.manualPlay&&d.play()}),0<e.initDelay?setTimeout(d.play,e.initDelay):d.play()),g&&e.touch&&n.touch(),(!l||l&&e.smoothHeight)&&a(window).bind("resize focus",n.resize),setTimeout(function(){e.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(f+"active-slide").eq(d.currentItem).addClass(f+"active-slide"),d.slides.click(function(b){b.preventDefault();var b=a(this),c=b.index();!a(e.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(d.direction=d.currentItem<c?"next":"prev",d.flexAnimate(c,e.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?n.controlNav.setupManual():n.controlNav.setupPaging()},setupPaging:function(){var b,c=1;if(d.controlNavScaffold=a('<ol class="'+f+"control-nav "+f+("thumbnails"===e.controlNav?"control-thumbs":"control-paging")+'"></ol>'),1<d.pagingCount)for(var i=0;i<d.pagingCount;i++)b="thumbnails"===e.controlNav?'<img src="'+d.slides.eq(i).attr("data-thumb")+'"/>':"<a>"+c+"</a>",d.controlNavScaffold.append("<li>"+b+"</li>"),c++;d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),n.controlNav.set(),n.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){b.preventDefault();var b=a(this),c=d.controlNav.index(b);b.hasClass(f+"active")||(d.direction=c>d.currentSlide?"next":"prev",d.flexAnimate(c,e.pauseOnAction))}),g&&d.controlNavScaffold.delegate("a","click touchstart",function(a){a.preventDefault()})},setupManual:function(){d.controlNav=d.manualControls,n.controlNav.active(),d.controlNav.live(h,function(b){b.preventDefault();var b=a(this),c=d.controlNav.index(b);b.hasClass(f+"active")||(d.direction=c>d.currentSlide?"next":"prev",d.flexAnimate(c,e.pauseOnAction))}),g&&d.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){d.controlNav=a("."+f+"control-nav li "+("thumbnails"===e.controlNav?"img":"a"),d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(f+"active").eq(d.animatingTo).addClass(f+"active")},update:function(b,c){1<d.pagingCount&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),n.controlNav.set(),1<d.pagingCount&&d.pagingCount!==d.controlNav.length?d.update(c,b):n.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+f+'direction-nav"><li><a class="'+f+'prev" href="#">'+e.prevText+'</a></li><li><a class="'+f+'next" href="#">'+e.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+f+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+f+"direction-nav li a",d)),n.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault(),b=d.getTarget(a(this).hasClass(f+"next")?"next":"prev"),d.flexAnimate(b,e.pauseOnAction)}),g&&d.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var a=f+"disabled";1===d.pagingCount?d.directionNav.addClass(a):e.animationLoop?d.directionNav.removeClass(a):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+f+"prev").addClass(a):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+f+"next").addClass(a):d.directionNav.removeClass(a)}},pausePlay:{setup:function(){var b=a('<div class="'+f+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+f+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+f+"pauseplay a",d)),n.pausePlay.update(e.slideshow?f+"pause":f+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),a(this).hasClass(f+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())}),g&&d.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(a){"play"===a?d.pausePlay.removeClass(f+"pause").addClass(f+"play").text(e.playText):d.pausePlay.removeClass(f+"play").addClass(f+"pause").text(e.pauseText)}},touch:function(){function a(a){n=i?f-a.touches[0].pageY:f-a.touches[0].pageX,p=i?Math.abs(n)<Math.abs(a.touches[0].pageX-g):Math.abs(n)<Math.abs(a.touches[0].pageY-g),(!p||500<Number(new Date)-o)&&(a.preventDefault(),!l&&d.transitions&&(e.animationLoop||(n/=0===d.currentSlide&&0>n||d.currentSlide===d.last&&n>0?Math.abs(n)/m+2:1),d.setProps(h+n,"setTouch")))}function c(){if(b.removeEventListener("touchmove",a,!1),d.animatingTo===d.currentSlide&&!p&&null!==n){var i=j?-n:n,k=d.getTarget(i>0?"next":"prev");d.canAdvance(k)&&(550>Number(new Date)-o&&50<Math.abs(i)||Math.abs(i)>m/2)?d.flexAnimate(k,e.pauseOnAction):l||d.flexAnimate(d.currentSlide,e.pauseOnAction,!0)}b.removeEventListener("touchend",c,!1),h=n=g=f=null}var f,g,h,m,n,o,p=!1;b.addEventListener("touchstart",function(l){d.animating?l.preventDefault():1===l.touches.length&&(d.pause(),m=i?d.h:d.w,o=Number(new Date),h=k&&j&&d.animatingTo===d.last?0:k&&j?d.limit-(d.itemW+e.itemMargin)*d.move*d.animatingTo:k&&d.currentSlide===d.last?d.limit:k?(d.itemW+e.itemMargin)*d.move*d.currentSlide:j?(d.last-d.currentSlide+d.cloneOffset)*m:(d.currentSlide+d.cloneOffset)*m,f=i?l.touches[0].pageY:l.touches[0].pageX,g=i?l.touches[0].pageX:l.touches[0].pageY,b.addEventListener("touchmove",a,!1),b.addEventListener("touchend",c,!1))},!1)},resize:function(){!d.animating&&d.is(":visible")&&(k||d.doMath(),l?n.smoothHeight():k?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):i?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(e.smoothHeight&&n.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!i||l){var b=l?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(e.sync).data("flexslider"),f=d.animatingTo;switch(b){case"animate":c.flexAnimate(f,e.pauseOnAction,!1,!0);break;case"play":!c.playing&&!c.asNav&&c.play();break;case"pause":c.pause()}}},d.flexAnimate=function(b,c,h,o,p){if(m&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,p)||h)&&d.is(":visible")){if(m&&o){if(h=a(e.asNavFor).data("flexslider"),d.atEnd=0===b||b===d.count-1,h.flexAnimate(b,!0,!1,!0,p),d.direction=d.currentItem<b?"next":"prev",h.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,e.before(d),c&&d.pause(),d.syncExists&&!p&&n.sync("animate"),e.controlNav&&n.controlNav.active(),k||d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),d.atEnd=0===b||b===d.last,e.directionNav&&n.directionNav.update(),b===d.last&&(e.end(d),e.animationLoop||d.pause()),l)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.slides.unbind("webkitTransitionEnd transitionend"),d.slides.eq(d.currentSlide).bind("webkitTransitionEnd transitionend",function(){e.after(d)}),d.animating=!1,d.currentSlide=d.animatingTo):(d.slides.eq(d.currentSlide).fadeOut(e.animationSpeed,e.easing),d.slides.eq(b).fadeIn(e.animationSpeed,e.easing,d.wrapup));else{var q=i?d.slides.filter(":first").height():d.computedW;k?(b=e.itemWidth>d.w?2*e.itemMargin:e.itemMargin,b=(d.itemW+b)*d.move*d.animatingTo,b=b>d.limit&&1!==d.visible?d.limit:b):b=0===d.currentSlide&&b===d.count-1&&e.animationLoop&&"next"!==d.direction?j?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&e.animationLoop&&"prev"!==d.direction?j?0:(d.count+1)*q:j?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(b,"",e.animationSpeed),d.transitions?(e.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){d.wrapup(q)})):d.container.animate(d.args,e.animationSpeed,e.easing,function(){d.wrapup(q)})}e.smoothHeight&&n.smoothHeight(e.animationSpeed)}},d.wrapup=function(a){!l&&!k&&(0===d.currentSlide&&d.animatingTo===d.last&&e.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&e.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,e.after(d)},d.animateSlides=function(){d.animating||d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.playing=!1,e.pausePlay&&n.pausePlay.update("play"),d.syncExists&&n.sync("pause")},d.play=function(){d.animatedSlides=setInterval(d.animateSlides,e.slideshowSpeed),d.playing=!0,e.pausePlay&&n.pausePlay.update("pause"),d.syncExists&&n.sync("play")},d.canAdvance=function(a,b){var c=m?d.pagingCount-1:d.last;return b?!0:m&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:m&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||m?e.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var f,g=a?a:(d.itemW+e.itemMargin)*d.move*d.animatingTo;f=-1*function(){if(k)return"setTouch"===b?a:j&&d.animatingTo===d.last?0:j?d.limit-(d.itemW+e.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:g;switch(b){case"setTotal":return j?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return a;case"jumpEnd":return j?a:d.count*a;case"jumpStart":return j?d.count*a:a;default:return a}}()+"px",d.transitions&&(f=i?"translate3d(0,"+f+",0)":"translate3d("+f+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c)),d.args[d.prop]=f,(d.transitions||void 0===c)&&d.container.css(d.args)},d.setup=function(b){if(l)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+e.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.eq(d.currentSlide).fadeIn(e.animationSpeed,e.easing)),e.smoothHeight&&n.smoothHeight();else{var c,h;"init"===b&&(d.viewport=a('<div class="'+f+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,j&&(h=a.makeArray(d.slides).reverse(),d.slides=a(h),d.container.empty().append(d.slides))),e.animationLoop&&!k&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),d.container.append(d.slides.first().clone().addClass("clone")).prepend(d.slides.last().clone().addClass("clone"))),d.newSlides=a(e.selector,d),c=j?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,i&&!k?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),e.smoothHeight&&n.smoothHeight()},"init"===b?100:0))}k||d.slides.removeClass(f+"active-slide").eq(d.currentSlide).addClass(f+"active-slide")},d.doMath=function(){var a=d.slides.first(),b=e.itemMargin,c=e.minItems,f=e.maxItems;d.w=d.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),k?(d.itemT=e.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=f?f*d.itemT:d.w,d.itemW=d.minW>d.w?(d.w-b*c)/c:d.maxW<d.w?(d.w-b*f)/f:e.itemWidth>d.w?d.w:e.itemWidth,d.visible=Math.floor(d.w/(d.itemW+b)),d.move=0<e.move&&e.move<d.visible?e.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:e.itemWidth>d.w?(d.itemW+2*b)*d.count-d.w-b:(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),k||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),e.controlNav&&!d.manualControls&&("add"===b&&!k||d.pagingCount>d.controlNav.length?n.controlNav.update("add"):("remove"===b&&!k||d.pagingCount<d.controlNav.length)&&(k&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),n.controlNav.update("remove",d.last))),e.directionNav&&n.directionNav.update()},d.addSlide=function(b,c){var f=a(b);d.count+=1,d.last=d.count-1,i&&j?void 0!==c?d.slides.eq(d.count-c).after(f):d.container.prepend(f):void 0!==c?d.slides.eq(c).before(f):d.container.append(f),d.update(c,"add"),d.slides=a(e.selector+":not(.clone)",d),d.setup(),e.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():i&&j?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(e.selector+":not(.clone)",d),d.setup(),e.removed(d)},n.init()},a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=c.find(b.selector?b.selector:".slides > li");1===d.length?(d.fadeIn(400),b.start&&b.start(c)):void 0==c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);