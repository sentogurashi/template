!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(){return!!$(".js-Article__photoMain")[0]}var r=i(1),s=n(r),u=i(23),c=n(u),a=$(window),f="is-animate",h=new s.default;$(function(){o()&&(h.addElement(".js-Article__photoMain"),h.init(),new c.default($(".js-Wave__canvas--1")[0],"rgba(255, 255, 255, .7)"),new c.default($(".js-Wave__canvas--2")[0],"rgba(255, 255, 255, .3)",1.2),new c.default($(".js-Wave__canvas--3")[0],"rgba(255, 255, 255, 1)",.8))}),a.on("load",function(){if(o()){var t=$(".js-Article__photoMain");t.addClass(f)}})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),r=n(o),s=i(3),u=n(s),c=i(22),a=n(c),f=function(){function t(){(0,r.default)(this,t),this.scrollChecker=new a.default,this.$window=$(window);var e=1280,i=853;this.originalAspect=i/e,this.isPortrait=!1,this.elements=[]}return(0,u.default)(t,[{key:"checkIsPortrait",value:function(){return this.isPortrait=this.$window.height()-this.$window.width()>0,this.isPortrait}},{key:"addElement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.4,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.elements.push({selector:t,fliction:e,isNoVerticalOffset:i})}},{key:"init",value:function(){var t=this;this.checkIsPortrait(),this.elements.forEach(function(e){t.scrollChecker.add([{selector:e.selector,func:function(i){var n=e.fliction,o=t.isPortrait||e.isNoVerticalOffset?0:i.height*t.originalAspect/2;console.log(o),i.$elem.css({backgroundPosition:"center "+(t.scrollChecker.scrollPositionTop-i.positionTop-o)*n+"px"})}}])}),this.scrollChecker.init(),this.$window.on("resize",this.checkIsPortrait.bind(this))}}]),t}();e.default=f},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=i(4),r=n(o);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,r.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},function(t,e,i){t.exports={default:i(5),__esModule:!0}},function(t,e,i){i(6);var n=i(9).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},function(t,e,i){var n=i(7);n(n.S+n.F*!i(17),"Object",{defineProperty:i(13).f})},function(t,e,i){var n=i(8),o=i(9),r=i(10),s=i(12),u="prototype",c=function(t,e,i){var a,f,h,l=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,w=t&c.B,y=t&c.W,g=d?o:o[e]||(o[e]={}),x=g[u],_=d?n:p?n[e]:(n[e]||{})[u];d&&(i=e);for(a in i)f=!l&&_&&void 0!==_[a],f&&a in g||(h=f?_[a]:i[a],g[a]=d&&"function"!=typeof _[a]?i[a]:w&&f?r(h,n):y&&_[a]==h?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e[u]=t[u],e}(h):v&&"function"==typeof h?r(Function.call,h):h,v&&((g.virtual||(g.virtual={}))[a]=h,t&c.R&&x&&!x[a]&&s(x,a,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){var i=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=i)},function(t,e,i){var n=i(11);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(13),o=i(21);t.exports=i(17)?function(t,e,i){return n.f(t,e,o(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){var n=i(14),o=i(16),r=i(20),s=Object.defineProperty;e.f=i(17)?Object.defineProperty:function(t,e,i){if(n(t),e=r(e,!0),n(i),o)try{return s(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){var n=i(15);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){t.exports=!i(17)&&!i(18)(function(){return 7!=Object.defineProperty(i(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){t.exports=!i(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var n=i(15),o=i(8).document,r=n(o)&&n(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e,i){var n=i(15);t.exports=function(t,e){if(!n(t))return t;var i,o;if(e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;if("function"==typeof(i=t.valueOf)&&!n(o=i.call(t)))return o;if(!e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),r=n(o),s=i(3),u=n(s),c=function(){function t(){(0,r.default)(this,t),this.objects=[],this.$win=$(window)}return(0,u.default)(t,[{key:"init",value:function(){this.resizeFix(),this.$win.on("scroll",this.check.bind(this)),this.$win.on("resize",this.resizeFix.bind(this))}},{key:"check",value:function(){this.objects.forEach(function(t){t.isEffectEnabled&&t.func(t)})}},{key:"resizeFix",value:function(){this.width=this.$win.width(),this.height=this.$win.height(),this.objects.forEach(function(t){var e=t.$elem.offset().top;t.height=t.$elem.outerHeight(),t.width=t.$elem.outerWidth(),t.positionTop=e,t.positionBottom=e+t.height})}},{key:"add",value:function(t){var e=t.map(function(t){var e=$(t.selector),i=e.offset().top;return{$elem:e,positionTop:i,positionBottom:i+e.outerHeight(),func:t.func,isEffectEnabled:!0}});this.objects=this.objects.concat(e)}},{key:"scrollPositionTop",get:function(){return this.$win.scrollTop()}},{key:"scrollPositionBottom",get:function(){return this.$win.scrollTop()+this.height}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),r=n(o),s=i(3),u=n(s),c=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ffffff",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;(0,r.default)(this,t),this.pixelRatio=parseInt(window.devicePixelRatio,10),this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.sizeFix(),this.ctx.fillStyle=i,this.r=this.height/o,this.T=this.width*n,this.aVelocity=2*Math.PI/this.T,this.unit=20,this.yAxis=this.height/2,this.deg=0,this.render()}return(0,u.default)(t,[{key:"sizeFix",value:function(){this.canvas.setAttribute("width",this.canvas.clientWidth*this.pixelRatio),this.canvas.setAttribute("height",this.canvas.clientHeight*this.pixelRatio),this.width=this.canvas.width,this.height=this.canvas.height}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.beginPath(),this.deg+=15,this.drawSine(),setTimeout(this.render.bind(this),100)}},{key:"drawSine",value:function(){this.ctx.moveTo(0,this.r*Math.sin(this.aVelocity*this.deg)+this.yAxis);for(var t=0;t<this.width+this.unit;t+=this.unit){var e=this.r*Math.sin(this.aVelocity*(this.deg+t));this.ctx.lineTo(t,e+this.yAxis)}this.ctx.lineTo(this.width,this.height),this.ctx.lineTo(0,this.height),this.ctx.fill()}}]),t}();e.default=c}]);