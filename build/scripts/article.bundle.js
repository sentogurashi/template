!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){var t=$(".js-Feature__photoMain");t.addClass(s)}var r=n(1),u=i(r),c=$(window),s="is-animate",f=new u.default;$(function(){f.addElement(".js-Feature__photoMain"),f.addElement(".js-Feature__photoSub:eq(0)",f.checkIsPortrait()?.2:.4),$(".js-Feature__photoSub:eq(1)")[0]&&f.addElement(".js-Feature__photoSub:eq(1)",f.checkIsPortrait()?.2:.4),f.init()}),c.on("load",o)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(3),c=i(u),s=n(22),f=i(s),a=function(){function t(){(0,r.default)(this,t),this.scrollChecker=new f.default,this.$window=$(window);var e=1280,n=853;this.originalAspect=n/e,this.isPortrait=!1,this.elements=[]}return(0,c.default)(t,[{key:"checkIsPortrait",value:function(){return this.isPortrait=this.$window.height()-this.$window.width()>0,this.isPortrait}},{key:"addElement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.4,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.elements.push({selector:t,fliction:e,isNoVerticalOffset:n})}},{key:"init",value:function(){var t=this;this.checkIsPortrait(),this.elements.forEach(function(e){t.scrollChecker.add([{selector:e.selector,func:function(n){var i=e.fliction,o=t.isPortrait||e.isNoVerticalOffset?0:n.height*t.originalAspect/2;console.log(e.isNoVerticalOffset),n.$elem.css({backgroundPosition:"center "+(t.scrollChecker.scrollPositionTop-n.positionTop-o)*i+"px"})}}])}),this.scrollChecker.init(),this.$window.on("resize",this.checkIsPortrait.bind(this))}}]),t}();e.default=a},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(4),r=i(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={default:n(5),__esModule:!0}},function(t,e,n){n(6);var i=n(9).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(7);i(i.S+i.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var i=n(8),o=n(9),r=n(10),u=n(12),c="prototype",s=function(t,e,n){var f,a,l,h=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,w=t&s.B,y=t&s.W,_=d?o:o[e]||(o[e]={}),b=_[c],g=d?i:p?i[e]:(i[e]||{})[c];d&&(n=e);for(f in n)a=!h&&g&&void 0!==g[f],a&&f in _||(l=a?g[f]:n[f],_[f]=d&&"function"!=typeof g[f]?n[f]:w&&a?r(l,i):y&&g[f]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):v&&"function"==typeof l?r(Function.call,l):l,v&&((_.virtual||(_.virtual={}))[f]=l,t&s.R&&b&&!b[f]&&u(b,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(14),o=n(16),r=n(20),u=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(15);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(15),o=n(8).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e,n){var i=n(15);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(3),c=i(u),s=function(){function t(){(0,r.default)(this,t),this.objects=[],this.$win=$(window)}return(0,c.default)(t,[{key:"init",value:function(){this.resizeFix(),this.$win.on("scroll",this.check.bind(this)),this.$win.on("resize",this.resizeFix.bind(this))}},{key:"check",value:function(){this.objects.forEach(function(t){t.isEffectEnabled&&t.func(t)})}},{key:"resizeFix",value:function(){this.width=this.$win.width(),this.height=this.$win.height(),this.objects.forEach(function(t){var e=t.$elem.offset().top;t.height=t.$elem.outerHeight(),t.width=t.$elem.outerWidth(),t.positionTop=e,t.positionBottom=e+t.height})}},{key:"add",value:function(t){var e=t.map(function(t){var e=$(t.selector),n=e.offset().top;return{$elem:e,positionTop:n,positionBottom:n+e.outerHeight(),func:t.func,isEffectEnabled:!0}});this.objects=this.objects.concat(e)}},{key:"scrollPositionTop",get:function(){return this.$win.scrollTop()}},{key:"scrollPositionBottom",get:function(){return this.$win.scrollTop()+this.height}}]),t}();e.default=s}]);