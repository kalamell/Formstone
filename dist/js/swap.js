/*! formstone v1.4.5 [swap.js] 2018-04-26 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,a){"use strict";function t(a,t){if(a.enabled&&!a.active){a.group&&!t&&e(a.group).not(a.$el).not(a.linked)[c.namespaceClean]("deactivate",!0);var s=a.group?e(a.group).index(a.$el):null;a.$swaps.addClass(a.classes.raw.active),t||a.linked&&e(a.linked).not(a.$el)[c.namespaceClean]("activate",!0),this.trigger(o.activate,[s]),a.active=!0}}function s(a,t){a.enabled&&a.active&&(a.$swaps.removeClass(a.classes.raw.active),t||a.linked&&e(a.linked).not(a.$el)[c.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),a.active=!1)}function i(a,i){a.enabled||(a.enabled=!0,a.$swaps.addClass(a.classes.raw.enabled),i||e(a.linked).not(a.$el)[c.namespaceClean]("enable"),this.trigger(o.enable),a.onEnable?(a.active=!1,t.call(this,a)):(a.active=!0,s.call(this,a)))}function n(a,t){a.enabled&&(a.enabled=!1,a.$swaps.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")),t||e(a.linked).not(a.$el)[c.namespaceClean]("disable"),this.trigger(o.disable))}function l(e){u.killEvent(e);var a=e.data;a.active&&a.collapse?s.call(a.$el,a):t.call(a.$el,a)}var c=a.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(a){a.enabled=!1,a.active=!1,a.classes=e.extend(!0,{},r,a.classes),a.target=this.data(d+"-target"),a.$target=e(a.target).addClass(a.classes.raw.target),a.mq="(max-width:"+(a.maxWidth===1/0?"100000px":a.maxWidth)+")";var t=this.data(d+"-linked");a.linked=!!t&&"[data-"+d+'-linked="'+t+'"]';var s=this.data(d+"-group");a.group=!!s&&"[data-"+d+'-group="'+s+'"]',a.$swaps=e().add(this).add(a.$target),this.on(o.click+a.dotGuid,a,l)},_postConstruct:function(a){a.collapse||!a.group||e(a.group).filter("[data-"+d+"-active]").length||e(a.group).eq(0).attr("data-"+d+"-active","true"),a.onEnable=this.data(d+"-active")||!1,e.fsMediaquery("bind",a.rawGuid,a.mq,{enter:function(){i.call(a.$el,a,!0)},leave:function(){n.call(a.$el,a,!0)}})},_destruct:function(a){e.fsMediaquery("unbind",a.rawGuid),a.$swaps.removeClass([a.classes.raw.enabled,a.classes.raw.active].join(" ")).off(o.namespace)},activate:t,deactivate:s,enable:i,disable:n}}),d=c.namespace,r=c.classes,o=c.events,u=c.functions});