(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new O(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=L(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(H([])));_&&_!==n&&r.call(_,o)&&(w=_);var k=y.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(i,o,s,a){var u=l(t[i],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(f).then((function(t){c.value=t,s(c)}),(function(t){return n("throw",t,s,a)}))}a(u.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function H(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=k.constructor=y,y.constructor=g,g.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(S.prototype),S.prototype[s]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new S(c(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(k),u(k,a,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=H,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:H(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,i)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var s=e.apply(n,r);function a(e){t(s,i,o,a,u,"next",e)}function u(e){t(s,i,o,a,u,"throw",e)}a(void 0)}))}}var r=n(757),i=n.n(r),o=function(){var t=e(i().mark((function t(){var e,n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.chloemedranophotography.com/wp-json/wp/v2/media?search=pets");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,console.log(n),r=document.querySelector("#pets"),n.forEach((function(t){var e=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",t.guid.rendered),e.classList.add("portfolio__piece"),n.classList.add("portfolio__piece--image"),e.appendChild(n),r.appendChild(e)})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("No data");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=e(i().mark((function t(){var e,n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.chloemedranophotography.com/wp-json/wp/v2/media?search=maternity");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,console.log(n),r=document.querySelector("#maternity"),n.forEach((function(t){var e=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",t.guid.rendered),e.classList.add("portfolio__piece"),n.classList.add("portfolio__piece--image"),e.appendChild(n),r.appendChild(e)})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("There's no data");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=e(i().mark((function t(){var e,n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.chloemedranophotography.com/wp-json/wp/v2/media?search=portrait");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,console.log(n),r=document.querySelector("#portrait"),n.forEach((function(t){var e=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",t.guid.rendered),e.classList.add("portfolio__piece"),n.classList.add("portfolio__piece--image"),e.appendChild(n),r.appendChild(e)})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("No data");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),u={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function c(t){console.error("[Glide warn]: "+t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(r):void 0},v=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function m(t){return parseInt(t)}function g(t){return"string"==typeof t}function y(t){var e=void 0===t?"undefined":l(t);return"function"===e||"object"===e&&!!t}function w(t){return"function"==typeof t}function b(t){return void 0===t}function _(t){return t.constructor===Array}function k(t,e,n){var r={};for(var i in e)w(e[i])?r[i]=e[i](t,r,n):c("Extension must be a function");for(var o in r)w(r[o].mount)&&r[o].mount();return r}function x(t,e,n){Object.defineProperty(t,e,n)}function S(t,e){var n=h({},t,e);return e.hasOwnProperty("classes")&&(n.classes=h({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=h({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=h({},t.breakpoints,e.breakpoints)),n}var L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,t),this.events=e,this.hop=e.hasOwnProperty}return d(t,[{key:"on",value:function(t,e){if(_(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var r=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][r]}}}},{key:"emit",value:function(t,e){if(_(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),E=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this._c={},this._t=[],this._e=new L,this.disabled=!1,this.selector=e,this.settings=S(u,n),this.index=this.settings.startAt}return d(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),y(t)?this._c=k(this,t,this._e):c("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return _(t)?this._t=t:c("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=S(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){y(t)?this._o=t:c("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=m(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function T(){return(new Date).getTime()}function O(t,e,n){var r=void 0,i=void 0,o=void 0,s=void 0,a=0;n||(n={});var u=function(){a=!1===n.leading?0:T(),r=null,s=t.apply(i,o),r||(i=o=null)},c=function(){var c=T();a||!1!==n.leading||(a=c);var l=e-(c-a);return i=this,o=arguments,l<=0||l>e?(r&&(clearTimeout(r),r=null),a=c,s=t.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(r),a=0,r=i=o=null},c}var H={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function j(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function A(t){return!!(t&&t instanceof window.HTMLElement)}var P='[data-glide-el="track"]',C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,t),this.listeners=e}return d(t,[{key:"on",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];g(t)&&(t=[t]);for(var i=0;i<t.length;i++)this.listeners[t[i]]=n,e.addEventListener(t[i],this.listeners[t[i]],r)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];g(t)&&(t=[t]);for(var r=0;r<t.length;r++)e.removeEventListener(t[r],this.listeners[t[r]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),M=["ltr","rtl"],z={">":"<","<":">","=":"="};function D(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function R(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function N(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function G(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var r=e.Peek.value;return y(r)?n-r.before:n-r}return n}}}function q(t,e){return{modify:function(n){var r=e.Gaps.value,i=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(i/2-s/2):n-s*o-r*o}}}var F=!1;try{var I=Object.defineProperty({},"passive",{get:function(){F=!0}});window.addEventListener("testPassive",null,I),window.removeEventListener("testPassive",null,I)}catch(t){}var W=F,B=["touchstart","mousedown"],V=["touchmove","mousemove"],Y=["touchend","touchcancel","mouseup","mouseleave"],X=["mousedown","mousemove","mouseup","mouseleave"];function K(t){return y(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(c("Breakpoints option must be an object"),{});var e}var J={Html:function(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector(P),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};return x(n,"root",{get:function(){return n._r},set:function(t){g(t)&&(t=document.querySelector(t)),A(t)?n._r=t:c("Root element must be a existing Html node")}}),x(n,"track",{get:function(){return n._t},set:function(t){A(t)?n._t=t:c("Could not find track element. Please use "+P+" attribute.")}}),x(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(t,e,n){var r={set:function(n){var r=function(t,e,n){var r=[R,N,G,q].concat(t._t,[D]);return{mutate:function(n){for(var i=0;i<r.length;i++){var o=r[i];w(o)&&w(o().modify)?n=o(t,e,undefined).modify(n):c("Transformer should be a function that returns an object with `modify()` method")}return n}}}(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*r+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",(function(i){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after((function(){n.emit("translate.jump"),r.set(a*(s-1))})),r.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after((function(){n.emit("translate.jump"),r.set(0)})),r.set(a*s+o*s)):r.set(i.movement)})),n.on("destroy",(function(){r.remove()})),r},Transition:function(t,e,n){var r=!1,i={compose:function(e){var n=t.settings;return r?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return x(i,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){i.set()})),n.on(["build.before","resize","translate.jump"],(function(){i.disable()})),n.on("run",(function(){i.enable()})),n.on("destroy",(function(){i.remove()})),i},Direction:function(t,e,n){var r={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(z[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return x(r,"value",{get:function(){return r._v},set:function(t){M.indexOf(t)>-1?r._v=t:c("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){r.removeClass()})),n.on("update",(function(){r.mount()})),n.on(["build.before","update"],(function(){r.addClass()})),r},Peek:function(t,e,n){var r={mount:function(){this.value=t.settings.peek}};return x(r,"value",{get:function(){return r._v},set:function(t){y(t)?(t.before=m(t.before),t.after=m(t.after)):t=m(t),r._v=t}}),x(r,"reductor",{get:function(){var e=r.value,n=t.settings.perView;return y(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){r.mount()})),r},Sizes:function(t,e,n){var r={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,r=0;r<n.length;r++)n[r].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return x(r,"length",{get:function(){return e.Html.slides.length}}),x(r,"width",{get:function(){return e.Html.root.offsetWidth}}),x(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+e.Gaps.grow+e.Clones.grow}}),x(r,"slideWidth",{get:function(){return r.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){r.setupSlides(),r.setupWrapper()})),n.on("destroy",(function(){r.remove()})),r},Gaps:function(t,e,n){var r={apply:function(t){for(var n=0,r=t.length;n<r;n++){var i=t[n].style,o=e.Direction.value;i[H[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?i[H[o][1]]=this.value/2+"px":i[H[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var r=t[e].style;r.marginLeft="",r.marginRight=""}}};return x(r,"value",{get:function(){return m(t.settings.gap)}}),x(r,"grow",{get:function(){return r.value*(e.Sizes.length-1)}}),x(r,"reductor",{get:function(){var e=t.settings.perView;return r.value*(e-1)/e}}),n.on(["build.after","update"],O((function(){r.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){r.remove(e.Html.wrapper.children)})),r},Move:function(t,e,n){var r={mount:function(){this._o=0},make:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=r,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return x(r,"offset",{get:function(){return r._o},set:function(t){r._o=b(t)?0:m(t)}}),x(r,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),x(r,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){r.make()})),r},Clones:function(t,e,n){var r={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.Html.slides,i=t.settings,o=i.perView,s=i.classes,a=+!!t.settings.peek,u=o+a,c=r.slice(0,u),l=r.slice(-u),f=0;f<Math.max(1,Math.floor(o/r.length));f++){for(var d=0;d<c.length;d++){var h=c[d].cloneNode(!0);h.classList.add(s.cloneSlide),n.push(h)}for(var p=0;p<l.length;p++){var v=l[p].cloneNode(!0);v.classList.add(s.cloneSlide),n.unshift(v)}}return n},append:function(){for(var t=this.items,n=e.Html,r=n.wrapper,i=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),u=e.Sizes.slideWidth+"px",c=0;c<a.length;c++)r.appendChild(a[c]);for(var l=0;l<s.length;l++)r.insertBefore(s[l],i[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return x(r,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*r.items.length}}),n.on("update",(function(){r.remove(),r.mount(),r.append()})),n.on("build.before",(function(){t.isType("carousel")&&r.append()})),n.on("destroy",(function(){r.remove()})),r},Resize:function(t,e,n){var r=new C,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,O((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Build:function(t,e,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,r=e.Html.slides[t.index];r&&(r.classList.add(n.activeSlide),j(r).forEach((function(t){t.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){r.removeClasses()})),n.on(["resize","update"],(function(){r.mount()})),n.on("move.after",(function(){r.activeClass()})),r},Run:function(t,e,n){var r={mount:function(){this._o=!1},make:function(r){var i=this;t.disabled||(t.disable(),this.move=r,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){i.isStart()&&n.emit("run.start",i.move),i.isEnd()&&n.emit("run.end",i.move),(i.isOffset("<")||i.isOffset(">"))&&(i._o=!1,n.emit("run.offset",i.move)),n.emit("run.after",i.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,i=e.direction,o="number"==typeof m(r)&&0!==m(r);switch(i){case">":">"===r?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):o?t.index+=Math.min(n-t.index,-m(r)):t.index++;break;case"<":"<"===r?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):o?t.index-=Math.min(t.index,m(r)):t.index--;break;case"=":t.index=r;break;default:c("Invalid direction pattern ["+i+r+"] has been used")}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return x(r,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?m(e)?m(e):e:0}}}),x(r,"length",{get:function(){var n=t.settings,r=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?r-1-(m(n.perView)-1)+m(n.focusAt):r-1}}),x(r,"offset",{get:function(){return this._o}}),r},Swipe:function(t,e,n){var r=new C,i=0,o=0,s=0,a=!1,u=!!W&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var r=this.touches(e);i=null,o=m(r.pageX),s=m(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(r){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(r),d=m(f.pageX)-o,h=m(f.pageY)-s,p=Math.abs(d<<2),v=Math.abs(h<<2),g=Math.sqrt(p+v),y=Math.sqrt(v);if(!(180*(i=Math.asin(y/g))/Math.PI<u))return!1;r.stopPropagation(),e.Move.make(d*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(r){if(!t.disabled){var s=t.settings,a=this.touches(r),u=this.threshold(r),c=a.pageX-o,l=180*i/Math.PI,f=Math.round(c/e.Sizes.slideWidth);this.enable(),c>u&&l<s.touchAngle?(s.perTouch&&(f=Math.min(f,m(s.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve("<"+f))):c<-u&&l<s.touchAngle?(s.perTouch&&(f=Math.max(f,-m(s.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve(">"+f))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,i=t.settings;i.swipeThreshold&&r.on(B[0],e.Html.wrapper,(function(t){n.start(t)}),u),i.dragThreshold&&r.on(B[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){r.off(B[0],e.Html.wrapper,u),r.off(B[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;r.on(V,e.Html.wrapper,O((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){r.off(V,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;r.on(Y,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){r.off(Y,e.Html.wrapper)},touches:function(t){return X.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return X.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),r.destroy()})),c},Images:function(t,e,n){var r=new C,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Anchors:function(t,e,n){var r=new C,i=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",e.Html.wrapper,this.click)},unbind:function(){r.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");i=!0}return this},attach:function(){if(o=!1,i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));i=!1}return this}};return x(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),r.destroy()})),s},Controls:function(t,e,n){var r=new C,i=!!W&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,r=e[t.index];r&&(r.classList.add(n.classes.activeNav),j(r).forEach((function(t){t.classList.remove(n.classes.activeNav)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)r.on("click",t[e],this.click),r.on("touchstart",t[e],this.click,i)},unbind:function(t){for(var e=0;e<t.length;e++)r.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return x(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),r.destroy()})),o},Keyboard:function(t,e,n){var r=new C,i={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],(function(){i.unbind()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Autoplay:function(t,e,n){var r=new C,i={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&b(this._i)&&(this._i=setInterval((function(){n.stop(),e.Run.make(">"),n.start()}),this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;r.on("mouseover",e.Html.root,(function(){t.stop()})),r.on("mouseout",e.Html.root,(function(){t.start()}))},unbind:function(){r.off(["mouseover","mouseout"],e.Html.root)}};return x(i,"time",{get:function(){return m(e.Html.slides[t.index].getAttribute("data-glide-autoplay")||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){i.unbind()})),n.on(["run.before","pause","destroy","swipe.start","update"],(function(){i.stop()})),n.on(["run.after","play","swipe.end"],(function(){i.start()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Breakpoints:function(t,e,n){var r=new C,i=t.settings,o=K(i.breakpoints),s=h({},i),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return h(i,a.match(o)),r.on("resize",window,O((function(){t.settings=S(i,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=K(o),s=h({},i)})),n.on("destroy",(function(){r.off("resize",window)})),a}};const Q=function(t){function e(){return f(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),d(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,h({},J,t))}}]),e}(E);var U=document.querySelector("#toggleNav"),Z=document.querySelector("#primarymenu"),$=document.querySelector("#dropdownbtn"),tt=document.querySelector("#submenu"),et=document.getElementById("formElem");document.getElementById("messageArea"),U.addEventListener("click",(function(){Z.classList.toggle("active")})),$.addEventListener("click",(function(){tt.classList.toggle("dropdown")})),o(),s(),a(),new Q("#hero",{type:"carousel",animationDuration:2e3,autoplay:4e3,focusAt:"center",perView:1}).mount(),et.addEventListener("submit",(function(t){!function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&(400==t.status?alert("There was an error 400"):alert("something else other than 200 was returned"))},t.open("POST","https://api.chloemedranophotography.com/wp-json/contact-form-7/v1/contact-forms/54/feedback",!0);var e=new FormData(et);t.send(e)}(),et.classList.add("contact__form--hidden")}))})()})();