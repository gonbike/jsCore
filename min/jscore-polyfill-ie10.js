//jsCore polyfill v0.4.7 IE10+ github.com/Octane/jsCore
!function(t,e,n,r,i,o,u,s,a,c,f,h,l,p,d,m,g){"use strict";function y(){}(function(){var t=n.create({});return t[0]=null,t.hasOwnProperty(0)})()||new function(){var t=n.create;n.create=function(e,r){var i=t(e,r);return n.hasOwnProperty.call(i,0)||(n.defineProperty(i,0,{configurable:!0}),delete i[0]),i}},n.assign||(n.assign=function(t){return r.prototype.slice.call(arguments,1).forEach(function(e){n.keys(e).forEach(function(n){t[n]=e[n]})}),t}),n.is||(n.is=function(t,e){return 0===t&&0===e?1/t===1/e:t!==t?e!==e:t===e}),n.setPrototypeOf||(n.setPrototypeOf=function(t,e){return t.__proto__=e,t}),r.from||(r.from=function(t,e,i){return n(t).length?e?r.map(t,e,i):r.slice(t,0):[]}),r.of||(r.of=function(){return r.from(arguments)}),r.prototype.find||(r.prototype.find=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return n;i++}return void 0}),r.prototype.findIndex||(r.prototype.findIndex=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return i;i++}return-1}),r.prototype.fill||(r.prototype.fill=function(t,e,n){var r,i=this.length;e=u(e)||0,n=2 in arguments?u(n)||0:i,r=0>e?f.max(i+e,0):f.min(e,i),n=0>n?f.max(i+n,0):f.min(n,i);for(;n>r;)this[r]=t,r++;return this}),o.prototype.startsWith||(o.prototype.startsWith=function(t,e){return e||(e=0),this.indexOf(t,e)==e}),o.prototype.endsWith||(o.prototype.endsWith=function(t,e){var n;return e=e||this.length,e-=t.length,n=this.lastIndexOf(t),-1!=n&&n==e}),o.prototype.contains||(o.prototype.contains=function(t,e){return-1!=this.indexOf(t,e||0)}),o.prototype.repeat||(o.prototype.repeat=function(t){return new r(t+1).join(this)}),u.isFinite||(u.isFinite=function(t){return"number"==typeof t&&p(t)}),u.isInteger||(u.isInteger=function(t){return"number"==typeof t&&p(t)&&t>-9007199254740992&&9007199254740992>t&&f.floor(t)==t}),u.isNaN||(u.isNaN=function(t){return"number"==typeof t&&d(t)}),u.parseInt||(u.parseInt=g),u.parseFloat||(u.parseFloat=m),f.trunc||(f.trunc=function(t){return t=u(t),d(t)||0===t||!u.isFinite(t)?t:f.sign(t)*f.floor(f.abs(t))}),f.sign||(f.sign=function(t){return 0===t||d(t)?t:(t>0)-(0>t)}),new function(){function t(t,e){var n=e[0];switch(e.length){case 1:return t.call(n);case 2:return t.call(n,e[1]);case 3:return t.call(n,e[1],e[2])}return t.apply(n,r.prototype.slice.call(e,1))}function e(e){return function(){return t(e,arguments)}}function i(t,n){return n.reduce(function(n,r){return n[r]=e(t[r]),n},{})}function u(t,e){n.keys(e).forEach(function(n){n in t||(t[n]=e[n])})}u(r,i(r.prototype,["concat","every","fill","filter","find","findIndex","forEach","indexOf","join","lastIndexOf","map","pop","push","reduce","reduceRight","reverse","shift","slice","some","sort","splice","unshift"])),u(o,i(o.prototype,["charAt","charCodeAt","concat","contains","endsWith","indexOf","lastIndexOf","match","repeat","replace","search","slice","split","startsWith","substr","substring","toLowerCase","toUpperCase","trim"]))},t.Set||(t.Set=new function(){function t(){if(arguments.length)throw h("Set implementation doesn't accept parameters");this.length=0}return n.assign(t.prototype,{size:0,add:function(t){this.has(t)||(this.size=r.push(this,t))},has:function(t){return-1!=r.findIndex(this,function(e){return n.is(t,e)})},"delete":function(t){var e=r.findIndex(this,function(e){return n.is(t,e)});return-1==e?!1:(r.splice(this,e,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.Map||(t.Map=new function(){function t(){if(arguments.length)throw h("Map implementation doesn't accept parameters");this.length=0}var e=0,i=1;return n.assign(t.prototype,{size:0,_getPair:function(t){return r.find(this,function(r){return n.is(t,r[e])})},set:function(t,e){var n=this._getPair(t);n?n[i]=e:this.size=r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[i]},has:function(t){return s(this._getPair(t))},"delete":function(t){var i=r.findIndex(this,function(r){return n.is(t,r[e])});return-1==i?!1:(r.splice(this,i,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.WeakSet||(t.WeakSet=new function(){function t(){if(arguments.length)throw h("WeakSet implementation doesn't accept parameters");this.length=0}function e(t){return this===t}function i(t){if(n(t)!==t)throw l("Invalid value used in weak set");return t}return n.assign(t.prototype,{add:function(t){this.has(i(t))||r.push(this,t)},has:function(t){return-1!=r.findIndex(this,e,i(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t.WeakMap||(t.WeakMap=new function(){function t(){if(arguments.length)throw h("WeakMap implementation doesn't accept parameters");this.length=0}function e(t){return this===t[o]}function i(t){if(n(t)!==t)throw l("Invalid value used as weak map key");return t}var o=0,u=1;return n.assign(t.prototype,{_getPair:function(t){return r.find(this,e,i(t))},set:function(t,e){var n=this._getPair(t);n?n[u]=e:r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[u]},has:function(t){return s(this._getPair(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t.setImmediate||n.assign(t,new function(){function e(e){var n=e[0];switch(e.length){case 1:return n();case 2:return n(e[1]);case 3:return n(e[1],e[2])}return n.apply(t,r.prototype.slice.call(e,1))}function n(t){var n,r=t.data;"string"==typeof r&&r.startsWith(s)&&(n=o[r],n&&(delete o[r],e(n)))}var i=0,o={},u=!0,s="setImmediatePolyfillMessage";return{setImmediate:function(){var e=i++,r=s+e;return o[r]=arguments,u&&(u=!1,t.addEventListener("message",n)),t.postMessage(r,"*"),e},clearImmediate:function(t){delete o[s+t]}}}),t.Promise||(t.Promise=new function(){function e(e){return r(e)?e:new f(function(n,r){t.setImmediate(function(){try{e.then(n,r)}catch(t){r(t)}})})}function r(t){return t instanceof f}function i(t){return n(t)===t&&"function"==typeof t.then}function o(t){return t._fulfilled||t._rejected}function u(t){return t.every(o)}function s(t){return t}function a(t){throw t}function c(t){t()}function f(t){n.assign(this,{_fulfilled:!1,_rejected:!1,_value:void 0,_reason:void 0,_onFulfilled:[],_onRejected:[]}),this._resolve(t)}return n.assign(f,{resolve:function(t){return i(t)?e(t):new f(function(e){e(t)})},reject:function(t){return new f(function(e,n){n(t)})},race:function(t){return new f(function(n,r){t.forEach(function(t){e(t).then(n,r)})})},all:function(t){return new f(function(n,r){var i=[];t=t.map(e),t.forEach(function(e,o){e.then(function(e){i[o]=e,u(t)&&n(i)},r)})})}}),n.assign(f.prototype,{_resolve:function(t){function e(t){r._fulfill(t)}function n(t){r._reject(t)}var r=this;try{t(e,n)}catch(i){o(r)||n(i)}},_fulfill:function(t){o(this)||(this._fulfilled=!0,this._value=t,this._onFulfilled.forEach(c),this._clearQueue())},_reject:function(t){o(this)||(this._rejected=!0,this._reason=t,this._onRejected.forEach(c),this._clearQueue())},_enqueue:function(t,e){this._onFulfilled.push(t),this._onRejected.push(e)},_clearQueue:function(){this._onFulfilled=[],this._onRejected=[]},then:function(n,r){var o=this;return new f(function(u,c){function f(){t.setImmediate(function(){var t;try{t=n(o._value)}catch(r){return void c(r)}i(t)?e(t).then(u,c):u(t)})}function h(){t.setImmediate(function(){var t;try{t=r(o._reason)}catch(n){return void c(n)}i(t)?e(t).then(u,c):u(t)})}n=n||s,r=r||a,o._fulfilled?f():o._rejected?h():o._enqueue(f,h)})},"catch":function(t){return this.then(void 0,t)}}),f}),t.requestAnimationFrame||n.assign(t,{requestAnimationFrame:[t.msRequestAnimationFrame,t.mozRequestAnimationFrame,t.webkitRequestAnimationFrame,new function(){var e=60,n=1e3/e,r=a.now(),i=r;return function(e){var o=a.now(),u=f.max(0,n-(o-i)),s=o+u;return i=s,t.setTimeout(function(){e(s-r)},u)}}].find(s),cancelAnimationFrame:[t.mozCancelAnimationFrame,t.webkitCancelAnimationFrame,t.cancelRequestAnimationFrame,t.msCancelRequestAnimationFrame,t.mozCancelRequestAnimationFrame,t.webkitCancelRequestAnimationFrame,t.clearTimeout].find(s)}),"dataset"in e.documentElement||n.defineProperty(HTMLElement.prototype,"dataset",{get:new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.substr(5).replace(/-./g,t)}function i(t){return{get:function(){return t.value},set:function(e){t.value=o(e)}}}function u(t,o){return r.forEach(o,function(r){var o=r.name.toLowerCase();o.startsWith("data-")&&n.defineProperty(t,e(o),i(r))}),t}return function(){return u(new y,this.attributes)}}}),"children"in e.createDocumentFragment()||new function(){function t(t){t in r||n.defineProperty(r,t,{get:o[t]})}var r,i=1,o={firstElementChild:function(){for(var t=this.firstChild;t&&i!=t.nodeType;)t=t.nextSibling;return t},lastElementChild:function(){for(var t=this.lastChild;t&&i!=t.nodeType;)t=t.previousSibling;return t},nextElementSibling:function(){var t=this;do t=t.nextSibling;while(t&&i!=t.nodeType);return t},previousElementSibling:function(){var t=this;do t=t.previousSibling;while(t&&i!=t.nodeType);return t},childElementCount:function(){return this.children.length},children:new function(){function t(){}return t.prototype.item=function(t){return this[t]||null},function(){for(var e,n=new t,r=this.childNodes,o=r.length,u=0,s=0;o>u;)e=r[u],i==e.nodeType&&(n[s++]=e),u++;return n.length=s,n}}};r=HTMLElement.prototype,n.keys(o).forEach(t),[e.constructor,e.createDocumentFragment().constructor].forEach(function(e){r=e.prototype,["firstElementChild","lastElementChild","childElementCount","children"].forEach(t)})},"append"in e.createDocumentFragment()||new function(){function t(t,e,n){return-1!=r.indexOf(t.querySelectorAll(n),e)}function i(t){var n,i,o,u=t.length;if(1==u)return n=t[0],"string"==typeof n?e.createTextNode(n):n;for(i=e.createDocumentFragment(),t=r.from(t),o=0;u>o;)n=t[o],"string"==typeof n&&(n=e.createTextNode(n)),i.appendChild(n),o++;return i}function o(t){t in a||(a[t]=c[t])}var u=1,a=HTMLElement.prototype,c={before:function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},after:function(){var t,e,n=this.parentNode;n&&(e=i(arguments),t=this.nextSibling,t?n.insertBefore(e,t):n.appendChild(e))},replace:function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},remove:function(){var t=this.parentNode;t&&t.removeChild(this)},append:function(){this.appendChild(i(arguments))},prepend:function(){this.insertBefore(i(arguments),this.firstChild)},query:function(t){return this.querySelector(t)},queryAll:function(t){return this.querySelectorAll(t)},matches:[a.matchesSelector,a.oMatchesSelector,a.msMatchesSelector,a.mozMatchesSelector,a.webkitMatchesSelector,function(n){var r,i;return this===e?!1:(i=this.parentNode)?(u==i.nodeType&&(i=i.ownerDocument),t(i,this,n)):(i=e.createDocumentFragment(),i.appendChild(this),r=t(i,this,n),void i.removeChild(this))}].find(s)};n.keys(c).forEach(o),a=e.constructor.prototype,["query","queryAll"].forEach(o),a=e.createDocumentFragment().constructor.prototype,["append","prepend","query","queryAll","matches"].forEach(o)}}(window,document,Object,Array,Function,String,Number,Boolean,Date,RegExp,Math,Error,TypeError,isFinite,isNaN,parseFloat,parseInt);