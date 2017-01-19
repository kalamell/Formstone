/*! formstone v1.3.0 [carousel.js] 2017-01-19 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){T.iterate.call(U,i)}function d(){U=a(Q.base)}function e(c){var e;c.didPan=!1,c.carouselClasses=[R.base,c.theme,c.customClass,c.rtl?R.rtl:R.ltr],c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,c.customPagination="string"===a.type(c.pagination),c.id=this.attr("id"),c.id?c.ariaId=c.id:(c.ariaId=c.rawGuid,this.attr("id",c.ariaId)),b.support.transform||(c.useMargin=!0);var f="",i="",k=[R.control,R.control_previous].join(" "),l=[R.control,R.control_next].join(" ");c.controls&&!c.customControls&&(f+='<div class="'+R.controls+'" aria-label="carousel controls" aria-controls="'+c.ariaId+'">',f+='<button type="button" class="'+k+'" aria-label="'+c.labels.previous+'">'+c.labels.previous+"</button>",f+='<button type="button" class="'+l+'" aria-label="'+c.labels.next+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&!c.customPagination&&(i+='<div class="'+R.pagination+'" aria-label="carousel pagination" aria-controls="'+c.ariaId+'" role="navigation">',i+="</div>"),c.autoHeight&&c.carouselClasses.push(R.auto_height),c.contained&&c.carouselClasses.push(R.contained),c.single&&c.carouselClasses.push(R.single),this.addClass(c.carouselClasses.join(" ")).wrapInner('<div class="'+R.wrapper+'" aria-live="polite"><div class="'+R.container+'"><div class="'+R.canister+'"></div></div></div>').append(f).wrapInner('<div class="'+R.viewport+'"></div>').append(i),c.$viewport=this.find(Q.viewport).eq(0),c.$container=this.find(Q.container).eq(0),c.$canister=this.find(Q.canister).eq(0),c.$pagination=this.find(Q.pagination).eq(0),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([R.controls,R.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(k),c.$controlNext=a(c.controls.next).addClass(l)):(c.$controls=this.find(Q.controls).eq(0),c.$controlPrevious=c.$controls.find(Q.control_previous),c.$controlNext=c.$controls.find(Q.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.customPagination&&(c.$pagination=a(c.pagination).addClass([R.pagination])),c.$paginationItems=c.$pagination.find(Q.page),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null;var m=this.data(O+"-linked");c.linked=!!m&&"[data-"+O+'-linked="'+m+'"]',c.linked&&(c.paged=!0);var n=this.data(O+"-controller-for")||"";if(c.$subordinate=a(n),c.$subordinate.length&&(c.controller=!0),"object"===a.type(c.show)){var o=c.show,p=[],q=[];for(e in o)o.hasOwnProperty(e)&&q.push(e);q.sort(T.sortAsc);for(e in q)q.hasOwnProperty(e)&&p.push({width:parseInt(q[e]),count:o[q[e]],mq:window.matchMedia("(min-width: "+parseInt(q[e])+"px)")});c.show=p}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d(),c.carouselClasses.push(R.enabled),c.carouselClasses.push(R.animated)}function f(b){T.clearTimer(b.autoTimer),T.clearTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.id!==b.ariaId&&this.removeAttr("id"),b.$controlItems.removeClass([Q.control,R.control_previous,Q.control_next,Q.visible].join(" ")).off(S.namespace),b.$images.off(S.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([R.item,R.visible,Q.item_previous,Q.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([R.controls,R.controls_custom,R.visible].join(" ")),b.pagination&&!b.customPagination&&b.$pagination.remove(),b.customPagination&&b.$pagination.html("").removeClass([R.pagination,R.visible].join(" ")),this.removeClass(b.carouselClasses.join(" ")),d()}function g(a){a.enabled&&(T.clearTimer(a.autoTimer),a.enabled=!1,a.$subordinate.off(S.update),this.removeClass([R.enabled,R.animated].join(" ")).off(S.namespace),a.$canister.fsTouch("destroy").off(S.namespace).attr("style","").css(W,"none"),a.$items.css({width:"",height:""}).removeClass([R.visible,Q.item_previous,Q.item_next].join(" ")),a.$images.off(S.namespace),a.$controlItems.off(S.namespace),a.$pagination.html("").off(S.namespace),v(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(V,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(R.enabled),a.$controlItems.on(S.click,a,s),a.$pagination.on(S.click,Q.page,a,t),a.$items.on(S.click,a,I),a.$subordinate.on(S.update,a,K),K({data:a},0),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(S.panStart,a,z).on(S.pan,a,A).on(S.panEnd,a,B).on(S.swipe,a,F).on(S.focusIn,a,J).css(W,""),j(a),a.$images.on(S.load,a,q),a.autoAdvance&&(a.autoTimer=T.startTimer(a.autoTimer,a.autoTime,function(){r(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return v(a),void a.$canister.css({height:""});for(this.removeClass(R.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=y(a),a.perPage=a.paged?1:a.visible,a.itemMarginLeft=parseInt(a.$items.eq(0).css("marginLeft")),a.itemMarginRight=parseInt(a.$items.eq(0).css("marginRight")),a.itemMargin=a.itemMarginLeft+a.itemMarginRight,isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([R.visible,R.item_previous,R.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=a.rtl?g.eq(g.length-1):g.eq(0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(!0),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+R.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?v(a):w(a),a.$paginationItems=a.$pagination.find(Q.page),u(a,a.index,!1),setTimeout(function(){a.$el.addClass(R.animated)},5)}}function j(a){a.$items=a.$canister.children().not(":hidden").addClass(R.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(S.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b,c,d,e){a.enabled&&(T.clearTimer(a.autoTimer),"undefined"==typeof e&&(e=!0),u(a,b-1,e,c,d))}function n(a){var b=a.index-1;a.infinite&&b<0&&(b=a.pageCount-1),u(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),u(a,b)}function p(a,b,c,d,e){if(a.enabled){T.clearTimer(a.autoTimer);var f=a.$items.eq(b-1);"undefined"==typeof e&&(e=!0);for(var g=0;g<a.pageCount;g++)if(a.pages[g].$items.is(f)){u(a,g,e,c,d);break}}}function q(a){var b=a.data;b.resizeTimer=T.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function r(a){var b=a.index+1;b>=a.pageCount&&(b=0),u(a,b)}function s(b){T.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(R.control_next)?1:-1);T.clearTimer(c.autoTimer),u(c,d)}function t(b){T.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));T.clearTimer(c.autoTimer),u(c,d)}function u(b,c,d,e,f){if(c<0&&(c=b.infinite?b.pageCount-1:0),c>=b.pageCount&&(c=b.infinite?0:b.pageCount-1),!(b.count<1)){b.pages[c]&&(b.leftPosition=-b.pages[c].left),b.leftPosition=L(b,b.leftPosition),b.useMargin?b.$canister.css({marginLeft:b.leftPosition}):d===!1?(b.$canister.css(W,"none").css(V,"translateX("+b.leftPosition+"px)"),setTimeout(function(){b.$canister.css(W,"")},5)):b.$canister.css(V,"translateX("+b.leftPosition+"px)"),b.$items.removeClass([R.visible,R.item_previous,R.item_next].join(" "));for(var g=0,h=b.pages.length;g<h;g++)g===c?b.pages[g].$items.addClass(R.visible).attr("aria-hidden","false"):b.pages[g].$items.not(b.pages[c].$items).addClass(g<c?R.item_previous:R.item_next).attr("aria-hidden","true");b.autoHeight&&b.$canister.css({height:b.pages[c].height}),d!==!1&&e!==!0&&c!==b.index&&(b.infinite||c>-1&&c<b.pageCount)&&b.$el.trigger(S.update,[c]),b.index=c,b.linked&&f!==!0&&a(b.linked).not(b.$el)[P]("jumpPage",b.index+1,!0,!0),x(b)}}function v(a){a.$controls.removeClass(R.visible),a.$controlItems.removeClass(R.visible),a.$pagination.removeClass(R.visible)}function w(a){a.$controls.addClass(R.visible),a.$controlItems.addClass(R.visible),a.$pagination.addClass(R.visible)}function x(a){a.$paginationItems.removeClass(R.active).eq(a.index).addClass(R.active),a.infinite?a.$controlItems.addClass(R.visible):a.pageCount<1?a.$controlItems.removeClass(R.visible):(a.$controlItems.addClass(R.visible),a.index<=0?a.$controlPrevious.removeClass(R.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(R.visible))}function y(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function z(b,c){var d=b.data;if(T.clearTimer(d.autoTimer),!d.single){if(d.useMargin)d.leftPosition=parseInt(d.$canister.css("marginLeft"));else{var e=d.$canister.css(V).split(",");d.leftPosition=parseInt(e[4])}if(d.$canister.css(W,"none"),A(b),d.linked&&c!==!0){var f=b.deltaX/d.pageWidth;d.rtl&&(f*=-1),a(d.linked).not(d.$el)[P]("panStart",f)}}d.isTouching=!0}function A(b,c){var d=b.data;if(!d.single&&(d.touchLeft=L(d,d.leftPosition+b.deltaX),d.useMargin?d.$canister.css({marginLeft:d.touchLeft}):d.$canister.css(V,"translateX("+d.touchLeft+"px)"),d.linked&&c!==!0)){var e=b.deltaX/d.pageWidth;d.rtl&&(e*=-1),a(d.linked).not(d.$el)[P]("pan",e)}}function B(b,c){var d=b.data,e=Math.abs(b.deltaX),f=M(d,b),g=!1;if(d.didPan=!1,!d.single){var h,i,j=Math.abs(d.touchLeft),k=!1,l=d.rtl?"right":"left";if(b.directionX===l)for(h=0,i=d.pages.length;h<i;h++)k=d.pages[h],j>Math.abs(k.left)+20&&(g=h+1);else for(h=d.pages.length-1,i=0;h>=i;h--)k=d.pages[h],j<Math.abs(k.left)&&(g=h-1)}g===!1&&(g=e<50?d.index:d.index+f),g!==d.index&&(d.didPan=!0),d.linked&&c!==!0&&a(d.linked).not(d.$el)[P]("panEnd",g),H(d,g)}function C(a,b){if(T.clearTimer(a.autoTimer),!a.single){if(a.rtl&&(b*=-1),a.useMargin)a.leftPosition=parseInt(a.$canister.css("marginLeft"));else{var c=a.$canister.css(V).split(",");a.leftPosition=parseInt(c[4])}a.$canister.css(W,"none");var d={data:a,deltaX:a.pageWidth*b};A(d,!0)}a.isTouching=!0}function D(a,b){if(!a.single){a.rtl&&(b*=-1);var c=a.pageWidth*b;a.touchLeft=L(a,a.leftPosition+c),a.useMargin?a.$canister.css({marginLeft:a.touchLeft}):a.$canister.css(V,"translateX("+a.touchLeft+"px)")}}function E(a,b){H(a,b,!0)}function F(b,c){var d=b.data,e=M(d,b),f=d.index+e;d.linked&&c!==!0&&a(d.linked).not(d.$el)[P]("swipe",b.directionX),H(d,f)}function G(a,b){var c={data:a,directionX:b};F(c,!0)}function H(a,b){a.$canister.css(W,""),u(a,b),a.isTouching=!1}function I(b){var c=b.data,d=a(b.currentTarget);if(!c.didPan&&(d.trigger(S.itemClick),c.controller)){var e=c.$items.index(d);K(b,e),c.$subordinate[P]("jumpPage",e+1,!0)}}function J(b){var c=b.data;if(c.enabled){T.clearTimer(c.autoTimer),c.$container.scrollLeft(0);var d,e=a(b.target);e.hasClass(R.item)?d=e:e.parents(Q.item).length&&(d=e.parents(Q.item).eq(0));for(var f=0;f<c.pageCount;f++)if(c.pages[f].$items.is(d)){u(c,f);break}}}function K(a,b){var c=a.data;if(c.controller){var d=c.$items.eq(b);c.$items.removeClass(R.active),d.addClass(R.active);for(var e=0;e<c.pageCount;e++)if(c.pages[e].$items.is(d)){u(c,e,!0,!0);break}}}function L(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),b<0&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function M(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var N=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,jumpPage:m,previousPage:n,nextPage:o,jumpItem:p,reset:k,resize:i,update:l,panStart:C,pan:D,panEnd:E,swipe:G}}),O=N.namespace,P=N.namespaceClean,Q=N.classes,R=Q.raw,S=N.events,T=N.functions,U=[],V=b.transform,W=b.transition});