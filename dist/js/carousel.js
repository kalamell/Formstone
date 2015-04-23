/*! formstone v0.5.5 [carousel.js] 2015-04-23 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){D.iterate.call(F,i)}function d(){F=a(A.base)}function e(c){var e;c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.mqGuid=B.base+"__"+E++,b.support.transform||(c.useMargin=!0);var f="",i="";if(c.controls&&(f+='<div class="'+B.controls+'">',f+='<button type="button" class="'+[B.control,B.control_previous].join(" ")+'">'+c.labels.previous+"</button>",f+='<button type="button" class="'+[B.control,B.control_next].join(" ")+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&(i+='<div class="'+B.pagination+'">',i+="</div>"),this.addClass([B.base,c.customClass].join(" ")).wrapInner('<div class="'+B.wrapper+'"><div class="'+B.container+'"><div class="'+B.canister+'"></div></div></div>').append(f).wrapInner('<div class="'+B.viewport+'"></div>').append(i),c.$viewport=this.find(A.viewport).eq(0),c.$container=this.find(A.container).eq(0),c.$canister=this.find(A.canister).eq(0),c.$controls=this.find(A.controls).eq(0),c.$pagination=this.find(A.pagination).eq(0),c.$items=c.$canister.children().addClass(B.item),c.$controlItems=c.$controls.find(A.control),c.$paginationItems=c.$pagination.find(A.page),c.$images=c.$canister.find("img"),c.index=0,c.enabled=!1,c.leftPosition=0,c.totalImages=c.$images.length,c.autoTimer=null,"object"===a.type(c.show)){var j=c.show,k=[];for(e in j)j.hasOwnProperty(e)&&k.push(e);k.sort(D.sortAsc),c.show={};for(e in k)k.hasOwnProperty(e)&&(c.show[k[e]]={width:parseInt(k[e]),count:j[k[e]]})}if(a.mediaquery("bind",c.mqGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),c.totalImages>0)for(c.loadedImages=0,e=0;e<c.totalImages;e++){var l=c.$images.eq(e);l.one(C.load,c,n),(l[0].complete||l[0].height)&&l.trigger(C.load)}c.autoAdvance&&(c.autoTimer=D.startTimer(c.autoTimer,c.autoTime,function(){o(c)},!0)),d()}function f(b){D.clearTimer(b.autoTimer),g.call(this,b),a.mediaquery("unbind",b.mqGuid,b.mq),b.$items.removeClass([B.item,B.visible].join(" ")).unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&b.$controls.remove(),this.removeClass([B.base,B.enabled,B.animated,b.customClass].join(" ")),d()}function g(a){a.enabled&&(D.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([B.enabled,B.animated].join(" ")).off(C.namespace),a.$canister.touch("destroy").off(C.namespace).attr("style","").css(H,"none"),a.$items.css({width:"",height:""}),a.$controls.removeClass(B.visible),a.$pagination.removeClass(B.visible).html(""),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(G,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(B.enabled).on(C.clickTouchStart,A.control,a,p).on(C.clickTouchStart,A.page,a,q),a.$canister.touch({axis:"x",pan:!0,swipe:!0}).on(C.panStart,a,u).on(C.pan,a,v).on(C.panEnd,a,w).on(C.swipe,a,x).css(H,""),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f;if(a.count=a.$items.length,a.count<1)return;for(this.removeClass(B.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=t(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.$canister.css({width:(a.pageWidth+a.itemMargin)*a.pageCount}),a.$items.css({width:a.itemWidth,height:""}).removeClass(B.visible),a.pages=[],b=0,c=0;b<a.count;b+=a.perPage)d=a.$items.slice(b,b+a.perPage),d.length<a.perPage&&(d=0===b?a.$items:a.$items.slice(a.$items.length-a.perPage)),e=d.eq(0),f=e.outerHeight(),a.pages.push({left:e.position().left,height:f,$items:d}),f>a.itemHeight&&(a.itemHeight=f),c++;a.paged&&(a.pageCount-=a.count%a.visible),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight&&a.$items.css({height:a.itemHeight});var g="";for(b=0;b<a.pageCount;b++)g+='<button type="button" class="'+B.page+'">'+(b+1)+"</button>";a.$pagination.html(g),a.pageCount<=1?(a.$controls.removeClass(B.visible),a.$pagination.removeClass(B.visible)):(a.$controls.addClass(B.visible),a.$pagination.addClass(B.visible)),a.$paginationItems=a.$el.find(A.page),r(a,a.index,!1),setTimeout(function(){a.$el.addClass(B.animated)},5)}}function j(a){a.enabled&&(a.$items=a.$canister.children().addClass(B.item),i.call(this,a))}function k(a,b){a.enabled&&(D.clearTimer(a.autoTimer),r(a,b-1))}function l(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount),r(a,b)}function m(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),r(a,b)}function n(a){var b=a.data;b.loadedImages++,b.loadedImages===b.totalImages&&i.call(b.$el,b)}function o(a){var b=a.index+1;b>=a.pageCount&&(b=0),r(a,b)}function p(b){D.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(B.control_next)?1:-1);D.clearTimer(c.autoTimer),r(c,d)}function q(b){D.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));D.clearTimer(c.autoTimer),r(c,d)}function r(a,b,c){0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition<a.maxMove&&(a.leftPosition=a.maxMove),(a.leftPosition>0||isNaN(a.leftPosition))&&(a.leftPosition=0),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(H,"none").css(G,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(H,"")},5)):a.$canister.css(G,"translateX("+a.leftPosition+"px)"),a.$items.removeClass(B.visible),a.pages[b].$items.addClass(B.visible),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(C.update,[b]),a.index=b,s(a)}function s(a){a.$paginationItems.removeClass(B.active).eq(a.index).addClass(B.active),a.infinite?a.$controlItems.addClass(B.visible):a.pageCount<1?a.$controlItems.removeClass(B.visible):(a.$controlItems.addClass(B.visible),a.index<=0?a.$controlItems.filter(A.control_previous).removeClass(B.visible):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlItems.filter(A.control_next).removeClass(B.visible))}function t(c){if("object"===a.type(c.show)){for(var d in c.show)if(c.show.hasOwnProperty(d)&&b.windowWidth>=c.show[d].width)return c.fill&&c.count<c.show[d].count?c.count:c.show[d].count;return 1}return c.fill&&c.count<c.show?c.count:c.show}function u(a){var b=a.data;if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(G).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(H,"none"),v(a),b.isTouching=!0}function v(a){var b=a.data;b.touchLeft=b.leftPosition+a.deltaX,b.touchLeft>0&&(b.touchLeft=0),b.touchLeft<b.maxMove&&(b.touchLeft=b.maxMove),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(G,"translateX("+b.touchLeft+"px)")}function w(a){var b=a.data,c=a.deltaX>-50&&a.deltaX<50?b.index:b.index+("left"===a.directionX?1:-1);y(b,c)}function x(a){var b=a.data,c=b.index+("left"===a.directionX?1:-1);y(b,c)}function y(a,b){a.$canister.css(H,""),r(a,b),a.isTouching=!1}var z=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,useMargin:!1},classes:["viewport","wrapper","container","canister","item","controls","control","pagination","page","animated","enabled","visible","active","control_previous","control_next"],events:{update:"update",panStart:"panstart",pan:"pan",panEnd:"panend",swipe:"swipe"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:k,previous:l,next:m,reset:j,resize:i}}),A=z.classes,B=A.raw,C=z.events,D=z.functions,E=0,F=[],G=b.transform,H=b.transition}(jQuery,Formstone);