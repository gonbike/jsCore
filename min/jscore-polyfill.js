//jsCore polyfill v0.4.6-alpha IE8+ github.com/Octane/jsCore
!function(t,e,n,r,i,o,a,s,u,c,f,l,h,p,d,m,y){"use strict";function g(){}var v=v||Element;"textContent"in e.documentElement||n.defineProperty(v.prototype,"textContent",{get:function(){return this.innerText},set:function(t){this.innerText=t}}),"textContent"in e.createTextNode("test")||n.defineProperty(Text.prototype,"textContent",{get:function(){return this.nodeValue},set:function(t){this.nodeValue=t}}),"head"in e||n.defineProperty(e,"head",{get:function(){return this.query("head")}}),{toString:null}.propertyIsEnumerable("toString")||new function(){var t=["constructor","toString","toLocaleString","valueOf","hasOwnProperty","propertyIsEnumerable","isPrototypeOf"];n.keys=function(e){var r,i=t.length,o=[],a=0;for(r in e)n.hasOwnProperty.call(e,r)&&(o[a++]=r);for(;i--;)r=t[i],n.hasOwnProperty.call(e,r)&&(o[a++]=r);return o}},n.create||(n.create=function(t,e){function n(){}if(e)throw new l("Object.create implementation only accepts the 1st parameter");return n.prototype=t,new n});var w=t instanceof n||new function(){function t(){var t;return{get:function(){return t},set:function(e){t=e}}}function e(e){return n.defineProperty(e,"length",t())}return new function(){function t(){return e(n.getElementsByName(i++))}var n=new ActiveXObject("htmlfile"),r=t().constructor.prototype,i=0;return r.urns=void 0,r.tags=void 0,r.item=void 0,r.namedItem=void 0,r=null,t}};r.isArray||(r.isArray=function(t){return"[object Array]"==n.prototype.toString.call(t)}),r.prototype.forEach||(r.prototype.forEach=function(t,e){for(var n=this.length,r=0;n>r;)r in this&&t.call(e,this[r],r,this),r++}),r.prototype.map||(r.prototype.map=function(t,e){for(var n=[],r=this.length,i=0;r>i;)i in this&&(n[i]=t.call(e,this[i],i,this)),i++;return n}),r.prototype.indexOf||(r.prototype.indexOf=function(t){for(var e=this.length,n=0;e>n;){if(n in this&&this[n]===t)return n;n++}return-1}),r.prototype.lastIndexOf||(r.prototype.lastIndexOf=function(t){for(var e=this.length;e--;)if(e in this&&this[e]===t)return e;return-1}),r.prototype.filter||(r.prototype.filter=function(t,e){for(var n=[],r=this.length,i=0;r>i;)i in this&&t.call(e,this[i],i,this)&&n.push(this[i]),i++;return n}),r.prototype.every||(r.prototype.every=function(t,e){for(var n=this.length,r=0;n>r;){if(r in this&&!t.call(e,this[r],r,this))return!1;r++}return!0}),r.prototype.some||(r.prototype.some=function(t,e){for(var n=this.length,r=0;n>r;){if(r in this&&t.call(e,this[r],r,this))return!0;r++}return!1}),r.prototype.reduce||(r.prototype.reduce=function(t,e){var n,r=this.length,i=0;if(arguments.length<2){if(!r)throw new h("Reduce of empty array with no initial value");for(;r>i;){if(i in this){n=this[i],i++;break}i++}}else n=e;for(;r>i;)i in this&&(n=t(n,this[i],i,this)),i++;return n}),r.prototype.reduceRight||(r.prototype.reduceRight=function(t,e){var n,r=this.length;if(arguments.length<2){if(!this.length)throw new h("Reduce of empty array with no initial value");for(;r--;)if(r in this){n=this[r];break}}else n=e;for(;r--;)r in this&&(n=t(n,this[r],r,this));return n}),i.bind||(i.prototype.bind=new function(){function e(e,n){for(var r=[],o=n.length,a=0;o>a;)r.push("arg"+a),a++;return r=r.join(","),new i("Constructor",r,"return new Constructor("+r+")").apply(t,[e].concat(n))}return function(t){function n(){function a(){}var s,u,c;if(n._protoMagic)return n._protoMagic=!1,a.prototype=this,a.prototype.constructor=o,new a;if(u=i.concat(r.from(arguments)),c=u.length,this instanceof n){switch(n._protoMagic=!0,c){case 0:s=new o;break;case 1:s=new o(u[0]);break;case 2:s=new o(u[0],u[1]);break;default:s=e(o,u)}return a.prototype=s,n.prototype=new a,n.prototype.constructor=n,new n}switch(c){case 0:return o.call(t);case 1:return o.call(t,u[0]);case 2:return o.call(t,u[0],u[1])}return o.apply(t,u)}var i=r.slice(arguments,1),o=this;if("function"!=typeof o)throw new h("Function.prototype.bind called on non-function");return n._protoMagic=!1,n}}),o.prototype.trim||(o.prototype.trim=new function(){var t,e,n;return t="	\n\f\r   ᠎ ",t+="        ",t+="    　\u2028\u2029﻿",t="["+t+"]",n=new c("^"+t+t+"*"),e=new c(t+t+"*$"),function(){return this.replace(n,"").replace(e,"")}}),u.now||(u.now=function(){return(new u).getTime()}),function(){var t=n.create({});return t[0]=null,t.hasOwnProperty(0)}()||new function(){var t=n.create;n.create=function(e,r){var i=t(e,r);return n.hasOwnProperty.call(i,0)||(n.defineProperty(i,0,{configurable:!0}),delete i[0]),i}},n.assign||(n.assign=function(t){return r.prototype.slice.call(arguments,1).forEach(function(e){n.keys(e).forEach(function(n){t[n]=e[n]})}),t}),n.is||(n.is=function(t,e){return 0===t&&0===e?1/t===1/e:t!==t?e!==e:t===e}),r.from||(r.from=function(t,e,i){return n(t).length?e?r.map(t,e,i):r.slice(t,0):[]}),r.of||(r.of=function(){return r.from(arguments)}),r.prototype.find||(r.prototype.find=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return n;i++}return void 0}),r.prototype.findIndex||(r.prototype.findIndex=function(t,e){for(var n,r=this.length,i=0;r>i;){if(i in this&&(n=this[i],t.call(e,n,i,this)))return i;i++}return-1}),r.prototype.fill||(r.prototype.fill=function(t,e,n){var r,i=this.length;e=a(e)||0,n=2 in arguments?a(n)||0:i,r=0>e?f.max(i+e,0):f.min(e,i),n=0>n?f.max(i+n,0):f.min(n,i);for(;n>r;)this[r]=t,r++;return this}),o.prototype.startsWith||(o.prototype.startsWith=function(t,e){return e||(e=0),this.indexOf(t,e)==e}),o.prototype.endsWith||(o.prototype.endsWith=function(t,e){var n;return e=e||this.length,e-=t.length,n=this.lastIndexOf(t),-1!=n&&n==e}),o.prototype.contains||(o.prototype.contains=function(t,e){return-1!=this.indexOf(t,e||0)}),o.prototype.repeat||(o.prototype.repeat=function(t){return new r(t+1).join(this)}),a.isFinite||(a.isFinite=function(t){return"number"==typeof t&&p(t)}),a.isInteger||(a.isInteger=function(t){return"number"==typeof t&&p(t)&&t>-9007199254740992&&9007199254740992>t&&f.floor(t)==t}),a.isNaN||(a.isNaN=function(t){return"number"==typeof t&&d(t)}),a.parseInt||(a.parseInt=y),a.parseFloat||(a.parseFloat=m),f.trunc||(f.trunc=function(t){return t=a(t),d(t)||0===t||!a.isFinite(t)?t:f.sign(t)*f.floor(f.abs(t))}),f.sign||(f.sign=function(t){return 0===t||d(t)?t:(t>0)-(0>t)}),new function(){function t(t,e){var n=e[0];switch(e.length){case 1:return t.call(n);case 2:return t.call(n,e[1]);case 3:return t.call(n,e[1],e[2])}return t.apply(n,r.prototype.slice.call(e,1))}function e(e){return function(){return t(e,arguments)}}function i(t,n){return n.reduce(function(n,r){return n[r]=e(t[r]),n},{})}function a(t,e){n.keys(e).forEach(function(n){n in t||(t[n]=e[n])})}a(r,i(r.prototype,["concat","every","fill","filter","find","findIndex","forEach","indexOf","join","lastIndexOf","map","pop","push","reduce","reduceRight","reverse","shift","slice","some","sort","splice","unshift"])),a(o,i(o.prototype,["charAt","charCodeAt","concat","contains","endsWith","indexOf","lastIndexOf","match","repeat","replace","search","slice","split","startsWith","substr","substring","toLowerCase","toUpperCase","trim"]))},t.Set||(t.Set=new function(){function t(){if(arguments.length)throw l("Set implementation doesn't accept parameters");this.length=0}return n.assign(t.prototype,{size:0,add:function(t){this.has(t)||(this.size=r.push(this,t))},has:function(t){return-1!=r.findIndex(this,function(e){return n.is(t,e)})},"delete":function(t){var e=r.findIndex(this,function(e){return n.is(t,e)});return-1==e?!1:(r.splice(this,e,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.Map||(t.Map=new function(){function t(){if(arguments.length)throw l("Map implementation doesn't accept parameters");this.length=0}var e=0,i=1;return n.assign(t.prototype,{size:0,_getPair:function(t){return r.find(this,function(r){return n.is(t,r[e])})},set:function(t,e){var n=this._getPair(t);n?n[i]=e:this.size=r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[i]},has:function(t){return s(this._getPair(t))},"delete":function(t){var i=r.findIndex(this,function(r){return n.is(t,r[e])});return-1==i?!1:(r.splice(this,i,1),this.size--,!0)},clear:function(){r.splice(this,0,this.length),this.size=0}}),t}),t.WeakSet||(t.WeakSet=new function(){function t(){if(arguments.length)throw l("WeakSet implementation doesn't accept parameters");this.length=0}function e(t){return this===t}function i(t){if(n(t)!==t)throw h("Invalid value used in weak set");return t}return n.assign(t.prototype,{add:function(t){this.has(i(t))||r.push(this,t)},has:function(t){return-1!=r.findIndex(this,e,i(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t.WeakMap||(t.WeakMap=new function(){function t(){if(arguments.length)throw l("WeakMap implementation doesn't accept parameters");this.length=0}function e(t){return this===t[o]}function i(t){if(n(t)!==t)throw h("Invalid value used as weak map key");return t}var o=0,a=1;return n.assign(t.prototype,{_getPair:function(t){return r.find(this,e,i(t))},set:function(t,e){var n=this._getPair(t);n?n[a]=e:r.push(this,[t,e])},get:function(t){return n(this._getPair(t))[a]},has:function(t){return s(this._getPair(t))},"delete":function(t){var n=r.findIndex(this,e,i(t));return-1==n?!1:(r.splice(this,n,1),!0)},clear:function(){r.splice(this,0,this.length)}}),t}),t instanceof n||n.assign(t,new function(){function n(e){var n=e[0];switch(e.length){case 1:return n();case 2:return n(e[1]);case 3:return n(e[1],e[2])}return n.apply(t,r.prototype.slice.call(e,1))}var i=0,o={};return{setImmediate:function(){function t(){this.onreadystatechange=null,e.removeChild(this),o[a]&&(delete o[a],n(r))}var r=arguments,a=i++;return o[a]=!0,new function(){var n=e.createElement("script");n.onreadystatechange=t,e.appendChild(n)},a},clearImmediate:function(t){delete o[t]}}}),t.setImmediate||n.assign(t,new function(){function e(e){var n=e[0];switch(e.length){case 1:return n();case 2:return n(e[1]);case 3:return n(e[1],e[2])}return n.apply(t,r.prototype.slice.call(e,1))}function n(t){var n,r=t.data;"string"==typeof r&&r.startsWith(s)&&(n=o[r],n&&(delete o[r],e(n)))}var i=0,o={},a=!0,s="setImmediatePolyfillMessage";return{setImmediate:function(){var e=i++,r=s+e;return o[r]=arguments,a&&(a=!1,t.addEventListener("message",n)),t.postMessage(r,"*"),e},clearImmediate:function(t){delete o[s+t]}}}),t.Promise||(t.Promise=new function(){function e(e){return r(e)?e:new f(function(n,r){t.setImmediate(function(){try{e.then(n,r)}catch(t){r(t)}})})}function r(t){return t instanceof f}function i(t){return n(t)===t&&"function"==typeof t.then}function o(t){return t._fulfilled||t._rejected}function a(t){return t.every(o)}function s(t){return t}function u(t){throw t}function c(t){t()}function f(t){n.assign(this,{_fulfilled:!1,_rejected:!1,_value:void 0,_reason:void 0,_onFulfilled:[],_onRejected:[]}),this._resolve(t)}return n.assign(f,{resolve:function(t){return i(t)?e(t):new f(function(e){e(t)})},reject:function(t){return new f(function(e,n){n(t)})},race:function(t){return new f(function(n,r){t.forEach(function(t){e(t).then(n,r)})})},all:function(t){return new f(function(n,r){var i=[];t=t.map(e),t.forEach(function(e,o){e.then(function(e){i[o]=e,a(t)&&n(i)},r)})})}}),n.assign(f.prototype,{_resolve:function(t){function e(t){r._fulfill(t)}function n(t){r._reject(t)}var r=this;try{t(e,n)}catch(i){o(r)||n(i)}},_fulfill:function(t){o(this)||(this._fulfilled=!0,this._value=t,this._onFulfilled.forEach(c),this._clearQueue())},_reject:function(t){o(this)||(this._rejected=!0,this._reason=t,this._onRejected.forEach(c),this._clearQueue())},_enqueue:function(t,e){this._onFulfilled.push(t),this._onRejected.push(e)},_clearQueue:function(){this._onFulfilled=[],this._onRejected=[]},then:function(n,r){var o=this;return new f(function(a,c){function f(){t.setImmediate(function(){var t;try{t=n(o._value)}catch(r){return void c(r)}i(t)?e(t).then(a,c):a(t)})}function l(){t.setImmediate(function(){var t;try{t=r(o._reason)}catch(n){return void c(n)}i(t)?e(t).then(a,c):a(t)})}n=n||s,r=r||u,o._fulfilled?f():o._rejected?l():o._enqueue(f,l)})},"catch":function(t){return this.then(void 0,t)}}),f}),t.requestAnimationFrame||n.assign(t,{requestAnimationFrame:[t.msRequestAnimationFrame,t.mozRequestAnimationFrame,t.webkitRequestAnimationFrame,new function(){var e=60,n=1e3/e,r=u.now(),i=r;return function(e){var o=u.now(),a=f.max(0,n-(o-i)),s=o+a;return i=s,t.setTimeout(function(){e(s-r)},a)}}].find(s),cancelAnimationFrame:[t.mozCancelAnimationFrame,t.webkitCancelAnimationFrame,t.cancelRequestAnimationFrame,t.msCancelRequestAnimationFrame,t.mozCancelRequestAnimationFrame,t.webkitCancelRequestAnimationFrame,t.clearTimeout].find(s)}),"dataset"in e.documentElement||n.defineProperty(v.prototype,"dataset",{get:new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.substr(5).replace(/-./g,t)}function i(t){return{get:function(){return t.value},set:function(e){t.value=o(e)}}}function a(t,o){return r.forEach(o,function(r){var o=r.name.toLowerCase();o.startsWith("data-")&&n.defineProperty(t,e(o),i(r))}),t}return function(){return a(new g,this.attributes)}}}),"children"in e.createDocumentFragment()||new function(){function t(t){t in r||n.defineProperty(r,t,{get:o[t]})}var r,i=1,o={firstElementChild:function(){for(var t=this.firstChild;t&&i!=t.nodeType;)t=t.nextSibling;return t},lastElementChild:function(){for(var t=this.lastChild;t&&i!=t.nodeType;)t=t.previousSibling;return t},nextElementSibling:function(){var t=this;do t=t.nextSibling;while(t&&i!=t.nodeType);return t},previousElementSibling:function(){var t=this;do t=t.previousSibling;while(t&&i!=t.nodeType);return t},childElementCount:function(){return this.children.length},children:new function(){function t(){}return t.prototype.item=function(t){return this[t]||null},function(){for(var e,n=new t,r=this.childNodes,o=r.length,a=0,s=0;o>a;)e=r[a],i==e.nodeType&&(n[s++]=e),a++;return n.length=s,n}}};r=v.prototype,n.keys(o).forEach(t),[e.constructor,e.createDocumentFragment().constructor].forEach(function(e){r=e.prototype,["firstElementChild","lastElementChild","childElementCount","children"].forEach(t)})},"append"in e.createDocumentFragment()||new function(){function t(t,e,n){return-1!=r.indexOf(t.querySelectorAll(n),e)}function i(t){var n,i,o,a=t.length;if(1==a)return n=t[0],"string"==typeof n?e.createTextNode(n):n;for(i=e.createDocumentFragment(),t=r.from(t),o=0;a>o;)n=t[o],"string"==typeof n&&(n=e.createTextNode(n)),i.appendChild(n),o++;return i}function o(t){t in u||(u[t]=c[t])}var a=1,u=v.prototype,c={before:function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},after:function(){var t,e,n=this.parentNode;n&&(e=i(arguments),t=this.nextSibling,t?n.insertBefore(e,t):n.appendChild(e))},replace:function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},remove:function(){var t=this.parentNode;t&&t.removeChild(this)},append:function(){this.appendChild(i(arguments))},prepend:function(){this.insertBefore(i(arguments),this.firstChild)},query:function(t){return this.querySelector(t)},queryAll:function(t){return this.querySelectorAll(t)},matches:[u.matchesSelector,u.oMatchesSelector,u.msMatchesSelector,u.mozMatchesSelector,u.webkitMatchesSelector,function(n){var r,i;return this===e?!1:(i=this.parentNode)?(a==i.nodeType&&(i=i.ownerDocument),t(i,this,n)):(i=e.createDocumentFragment(),i.appendChild(this),r=t(i,this,n),void i.removeChild(this))}].find(s)};n.keys(c).forEach(o),u=e.constructor.prototype,["query","queryAll"].forEach(o),u=e.createDocumentFragment().constructor.prototype,["append","prepend","query","queryAll","matches"].forEach(o)},"classList"in e.documentElement||n.defineProperty(v.prototype,"classList",{get:new function(){function t(t,e){this._getTokens=t,this._onChange=e}function e(t){return t=t.trim(),t?t.split(/\s\s*/):[]}return n.assign(t.prototype,{_clear:function(){r.splice(this,0,this.length)},_push:function(t){r.prototype.push.apply(this,t)},_update:function(){this._clear(),this._push(this._getTokens())},item:function(t){return this._update(),this[t]||null},add:function(){var t;this._update(),t=this.length,r.forEach(arguments,function(t){-1==r.indexOf(this,t)&&r.push(this,t)},this),t!=this.length&&this._onChange()},remove:function(){var t;this._update(),t=this.length,r.forEach(arguments,function(t){var e=r.indexOf(this,t);-1!=e&&r.splice(this,e,1)},this),t!=this.length&&this._onChange()},toggle:function(t,e){return this._update(),e===!1||this.contains(t)?(this.remove(t),!1):(this.add(t),!0)},contains:function(t){return this._update(),-1!=r.indexOf(this,t)},toString:function(){return r.join(this," ")}}),function(){var n=this;return n._classList||(n._classList=new t(function(){return e(n.className)},function(){n.className=this.toString()})),n._classList._update(),n._classList}}}),t.FormData||(t.FormData=new function(){function t(t){this.boundary=e(),t&&r.prototype.push.apply(this,i(t))}var e=new function(){function t(){var n=f.random().toString().slice(2);return e[n]?t():(e[n]=1,n)}var e={};return function(){return"-------------------------"+t()}},i=new function(){function t(t){return t.selected}function e(e){var n=e.nodeName.toLowerCase(),i=e.type;return e.name?e.disabled?!1:"fieldset"==n?!1:"select"==n&&e.multiple?r.some(e.options,t):"submit"==i||"reset"==i||"button"==i||"file"==i?!1:"radio"!=i&&"checkbox"!=i||!e.checked?!0:!1:!1}function n(e){return"select"==e.tagName.toLowerCase()&&e.multiple?r.reduce(e.options,function(e,n){return t(n)&&e.push(n.value),e},[]):[e.value]}return function(t){return r.reduce(t.elements,function(t,r){return e(r)&&n(r).forEach(function(e){t.push({name:r.name,value:e})}),t},[])}};return n.assign(t.prototype,{notNative:!0,append:function(t,e,n){r.push(this,{name:t,value:e,fileName:n})},toString:function(){var t=this.boundary,e="";return r.forEach(this,function(r){var i,o=r.name,a=r.value;e+="--"+t+"\r\n",n(a)===a?(i=r.fileName||a.name,e+='Content-Disposition: form-data; name="',e+=o+'"; filename="'+i+'"\r\n',e+="Content-Type: "+a.type+"\r\n\r\n",e+=a.content+"\r\n"):(e+='Content-Disposition: form-data; name="',e+=o+'"\r\n\r\n',e+=a+"\r\n")}),e+="--"+t+"--"}}),XMLHttpRequest.prototype.send=new function(){var e=XMLHttpRequest.prototype.send;return function(n){n instanceof t&&(this.setRequestHeader("Content-Type","multipart/form-data; boundary="+n.boundary),n=n.toString()),e.call(this,n)}},t}),new function(){function t(t){for(var e=[],n=t.length,r=0;n>r;)e[r]=t[r],r++;return e}var i=r.prototype.slice;try{r.slice(e.documentElement.childNodes,0)}catch(o){r.slice=function(e,r,o){var a,s=arguments.length;return a=n(e)instanceof n?e:t(e),1==s||2==s&&0==r?a==e?i.call(a,0):a:2==s?i.call(a,r):i.call(a,r,o)}}},function(){var t={0:!0,length:1};return r.splice(t,0,1),t[0]}()&&new function(){var t=r.splice;r.splice=function(e,n,i){var o,a=t.apply(r,arguments);if(!(e instanceof r))for(o=e.length;i--;)delete e[o+i];return a}},"function"==typeof w&&(g=w),function(){var t=e.createElement("div");return t.appendChild(e.createComment("test")),t.children.length}()&&n.defineProperty(v.prototype,"children",{get:n.getOwnPropertyDescriptor(HTMLDocument.prototype,"children").get}),t.addEventListener||new function(){function t(t){var n=e.documentElement;t.pageX=t.clientX+n.scrollLeft,t.pageY=t.clientY+n.scrollTop,t.timeStamp||(t.timeStamp=u.now())}function r(e,n){return function(r){var i,o=e.slice(0),a=o.length,s=0;for(r instanceof d||t(r),r.currentTarget=n;a>s;)i=o[s],i.handleEvent?i.handleEvent(r):i.call(n,r),s++}}function i(t,e,n){var i,o,a,s,u=this;if(n)throw new l("Capturing phase is not supported");u._events||(u._events={}),o=u._events,s=m[t],s&&(t=s.eventType),a=o[t],a||(a={callbacks:[]},i=r(a.callbacks,u),s&&(i=s.decorateListener(i)),a.listener=i,o[t]=a,this.attachEvent("on"+t,i)),-1==a.callbacks.indexOf(e)&&a.callbacks.push(e)}function o(t,e,n){var r,i,o,a,s,u=this;if(n)throw new l("Capturing phase is not supported");u._events&&(i=u._events,s=m[t],s&&(t=s.eventType),i[t]&&(o=i[t],r=o.callbacks,a=r.indexOf(e),-1!=a&&(r.splice(a,1),r.length||(u.detachEvent("on"+t,o.listener),delete i[t]))))}function a(t){var e,n,r=t.type;return t instanceof d?(t.target=this,e=this._events,e&&e[r]&&e[r].listener(t)):(n=m[r],n&&(r=n.eventType),this.fireEvent("on"+r,t)),!t.defaultPrevented}function s(t,e,r){n.assign(this,{type:t,bubbles:e,cancelable:r})}function c(t,e,r,i,o){this.initEvent(t,e,r),n.assign(this,{view:i,detail:o})}function f(t,e,r,i,o,a,s,u,c,f,l,h,p,d,m){this.initUIEvent(t,e,r,i,o),n.assign(this,{screenX:a,screenY:s,clientX:u,clientY:c,ctrlKey:f,altKey:l,shiftKey:h,metaKey:p,button:d,fromElement:m})}function h(){this.defaultPrevented=!0,this.returnValue=!1}function p(){this.cancelBubble=!0}function d(){}var m={DOMContentLoaded:{eventType:"readystatechange",decorateListener:function(t){return function(n){"complete"==e.readyState&&t(n)}}}};n.assign(d.prototype,{type:"",timeStamp:0,detail:null,target:null,currentTarget:null,defaultPrevented:!1,preventDefault:h,stopPropagation:p,initEvent:s,initCustomEvent:function(t,e,n,r){this.initEvent(t,e,n),this.detail=r}}),n.assign(Event.prototype,{timeStamp:0,currentTarget:null,defaultPrevented:!1,preventDefault:h,stopPropagation:p,initEvent:s}),n.defineProperty(Event.prototype,"target",{get:function(){return this.srcElement}}),n.defineProperty(Event.prototype,"relatedTarget",{get:function(){return this.fromElement===this.srcElement?this.toElement:this.fromElement}}),[v,HTMLDocument,Window,XMLHttpRequest].forEach(function(t){var e=t.prototype;e.dispatchEvent=a,e.addEventListener=i,e.removeEventListener=o}),HTMLDocument.prototype.createEvent=function(t){var e;return t.startsWith("CustomEvent")?e=new d:(e=this.createEventObject(),t.startsWith("UIEvent")?e.initUIEvent=c:t.startsWith("MouseEvent")&&(e.initUIEvent=c,e.initMouseEvent=f)),e.timeStamp=u.now(),e}},"onload"in new XMLHttpRequest||new function(){var r=XMLHttpRequest.prototype,i=r.abort,o=r.send,a=r.open;n.assign(r,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4,_unbind:function(){this.onreadystatechange=null},_fireEvent:function(n){var r=e.createEvent("CustomEvent");r.initEvent(n,!1,!1),this.dispatchEvent(r),n="on"+n,this[n]&&t.setImmediate(function(){r.target[n](r)})},_onReadyStateChange:function(){this.readyState==this.DONE&&(this._unbind(),this._fireEvent("load"))},open:function(){try{a.apply(this,arguments)}catch(t){this._unbind(),this._fireEvent("error")}},send:function(t){this.onreadystatechange=this._onReadyStateChange;try{o.call(this,t)}catch(e){this._unbind(),this._fireEvent("error")}},abort:function(){i.call(this),this._fireEvent("abort")}})},"onload"in e.createElement("script")||n.defineProperty(HTMLScriptElement.prototype,"onload",{set:function(t){this.onreadystatechange="function"==typeof t?function(n){"loaded"==this.readyState&&(this.onreadystatechange=null,n=e.createEvent("CustomEvent"),this.text?(n.initEvent("load",!1,!1),t.call(this,n)):this.onerror&&(n.initEvent("error",!1,!1),this.onerror(n)),this.onerror=null)}:null}}),t instanceof n||new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.replace(/-./g,t)}function r(t,e){return t.replace("{ENABLED}",1!=e)}function i(t){return r(l.replace("{VALUE}",f.trunc(100*t)),t)}function a(t,e){return t.replace(p,i(e))}function s(t){return t.toLowerCase().contains("alpha")}var u=CSSStyleDeclaration.prototype,c="progid:DXImageTransform.Microsoft.",l="Alpha(opacity={VALUE}, enabled={ENABLED})",h=/\bopacity\s*=\s*(\d+)/i,p=/alpha\s*\(.*?\)/i;n.defineProperty(u,"cssFloat",{get:function(){return this.styleFloat},set:function(t){this.styleFloat=t}}),n.defineProperty(u,"opacity",{get:function(){var t="",e=this.filter.trim();return e&&e.replace(p,function(e){e.replace(h,function(e,n){t=o(n/100)})}),t},set:function(t){var e=this.filter.trim();!t||t>1?t=1:0>t&&(t=0),e?s(e)?this.filter=a(e,t):this.filter+=" "+c+i(t):this.filter=c+i(t)}}),n.assign(u,{getPropertyValue:function(t){return t=t.toLowerCase(),"float"==t?this.styleFloat:this[e(t)]},removeProperty:function(t){var n;return t=t.toLowerCase(),"float"==t?(t="styleFloat",n=this.styleFloat):(t=e(t),n=this[t]),this[t]="",n},setProperty:function(t,n){t=t.toLowerCase(),"float"==t&&(this.styleFloat=n),this[e(t)]=n}})},t.getComputedStyle||(t.getComputedStyle=new function(){function t(t){return t.charAt(1).toUpperCase()}function e(e){return e.replace(/-./g,t)}function r(t){return t=t.toLowerCase(),"float"==t?this.cssFloat:this[e(t)]}function i(t,e){return{get:function(){return t[e]}}}function a(t){return{get:function(){return t.styleFloat}}}function s(t){return{get:function(){var e=t["DXImageTransform.Microsoft.Alpha"]||t.alpha;return e?o(e.opacity/100):"1"}}}function u(t,e){if(e)throw new l("getComputedStyle implementation only accepts the 1st parameter");var o,u=t._compStyle;return u||(u=t._compStyle=new w,o=t.currentStyle,n.keys(o).forEach(function(t){n.defineProperty(u,t,i(o,t))}),n.defineProperty(u,"cssFloat",a(o)),n.defineProperty(u,"opacity",s(t.filters)),u.getPropertyValue=r),u}return u}),history.pushState||new function(){}}(window,document,Object,Array,Function,String,Number,Boolean,Date,RegExp,Math,Error,TypeError,isFinite,isNaN,parseFloat,parseInt);