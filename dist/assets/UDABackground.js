/*! For license information please see UDABackground.js.LICENSE.txt */
var UdanLibrary;!function(){"use strict";var t={r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e);var r=function(t,e,r,n){return new(r||(r=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function u(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}c((n=n.apply(t,e||[])).next())}))},n=function(t,e){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},a=function(t,e){return r(void 0,void 0,void 0,(function(){var r,a,o,i;return n(this,(function(n){switch(n.label){case 0:return r=new TextEncoder,a=r.encode(t),[4,crypto.subtle.digest(e,a)];case 1:return o=n.sent(),i=Array.from(new Uint8Array(o)),[2,i.map((function(t){return t.toString(16).padStart(2,"0")})).join("")]}}))}))},o=function(t,e,r,n){return new(r||(r=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function u(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}c((n=n.apply(t,e||[])).next())}))},i=function(t,e){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},u=function(t,e,r,n){return void 0===n&&(n=!0),o(void 0,void 0,void 0,(function(){var a,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),a={method:e,headers:{"Content-Type":"application/json",charset:"UTF-8"}},r&&(a.body=JSON.stringify(r)),[4,fetch(t,a)];case 1:return(o=i.sent()).ok?n?[2,o.json()]:[2,o.text()]:[2,!1];case 2:return i.sent(),[2,!1];case 3:return[2]}}))}))};function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};u(v,a,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(O([])));m&&m!==e&&r.call(m,a)&&(v=m);var x=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function n(a,o,i,u){var c=l(t[a],t,o);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"==s(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(h).then((function(t){f.value=t,i(f)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=y,u(x,"constructor",y),u(y,"constructor",d),d.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(g.prototype),u(g.prototype,o,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),u(x,i,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e,r,n,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){f(o,n,a,i,u,"next",t)}function u(t){f(o,n,a,i,u,"throw",t)}i(void 0)}))}}var h,p="https://udan.nistapp.ai/voiceapi",d="uda-sessiondata",y="uda-csp-storage",v={sessionkey:"",authenticated:!1,authenticationsource:"",authdata:{},csp:{cspenabled:!1,udanallowed:!0,domain:""}};function b(){return m.apply(this,arguments)}function m(){return m=l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.authenticationsource="google",chrome.identity.getProfileUserInfo({accountStatus:"ANY"},function(){var t=l(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.id||""===e.email){t.next=6;break}v.authenticated=!0,v.authdata=e,a(v.authdata.id,"SHA-512").then(function(){var t=l(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.authdata.id=e,a(v.authdata.email,"SHA-512").then(function(){var t=l(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.authdata.email=e,t.next=3,P();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8;break;case 6:return t.next=8,x("UDAAlertMessageData","login");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function x(){return w.apply(this,arguments)}function w(){return w=l(c().mark((function t(){var e,r,n,a,o,i,u,s,f,l,h=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.length>0&&void 0!==h[0]?h[0]:"UDAUserSessionData",r=h.length>1&&void 0!==h[1]?h[1]:"",t.next=4,g();case 4:if(n=t.sent,"UDAAlertMessageData"!==e){t.next=11;break}return t.next=8,chrome.tabs.sendMessage(n.id,{action:e,data:r});case 8:return t.abrupt("return",!0);case 11:if(a=new URL(n.url),o=a.protocol+"//"+a.hostname,i={cspenabled:!1,udanallowed:!0,domain:""},u=T(y),s=!1,!u){t.next=29;break}if(!((f=u).length>0)){t.next=29;break}l=0;case 20:if(!(l<f.length)){t.next=28;break}if(f[l].domain!==o){t.next=25;break}return s=!0,i=f[l],t.abrupt("break",28);case 25:l++,t.next=20;break;case 28:s&&(v.csp=i);case 29:return v.csp=i,t.next=33,chrome.tabs.sendMessage(n.id,{action:e,data:JSON.stringify(v)});case 33:return t.abrupt("return",!0);case 34:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function g(){return k.apply(this,arguments)}function k(){return(k=l(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={active:!0,currentWindow:!0},t.next=3,chrome.tabs.query(e);case 3:if(!(r=t.sent[0])){t.next=8;break}return t.abrupt("return",r);case 8:return t.next=10,chrome.tabs.get(h);case 10:if(!(r=t.sent)){t.next=15;break}return t.abrupt("return",r);case 15:case 16:return t.abrupt("return",r);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return L.apply(this,arguments)}function L(){return(L=l(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e={})[d]=v,t.next=4,chrome.storage.local.set(e);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return O.apply(this,arguments)}function O(){return O=l(c().mark((function t(){var e,r,n=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.next=3,u(p+"/user/getsessionkey","GET",null,!1);case 3:if(r=t.sent){t.next=7;break}return t.abrupt("return",r);case 7:return v.sessionkey=r,t.next=10,S();case 10:if(!e){t.next=13;break}return t.next=13,x();case 13:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function P(){return j.apply(this,arguments)}function j(){return(j=l(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={authid:v.authdata.id,emailid:v.authdata.email?v.authdata.email:"",authsource:v.authenticationsource},t.next=3,u(p+"/user/checkauthid","POST",e);case 3:if(!(r=t.sent)){t.next=10;break}return t.next=7,_(r);case 7:return t.abrupt("return",!0);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return A.apply(this,arguments)}function A(){return(A=l(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userauthid:e.id,usersessionid:v.sessionkey},t.next=3,u(p+"/user/checkusersession","POST",r);case 3:return t.sent,t.next=6,S();case 6:return t.next=8,x("UDAAuthenticatedUserSessionData");case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){try{var e=localStorage.getItem(t);return JSON.parse(e)}catch(t){return!1}}chrome.tabs.onActivated.addListener((function(t){h=t.tabId})),chrome.runtime.onMessage.addListener(function(){var t=l(c().mark((function t(e,r,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("getusersessiondata"!==e.action){t.next=5;break}chrome.storage.local.get([d],function(){var t=l(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!chrome.runtime.lastError){t.next=4;break}t.next=30;break;case 4:if(!e.hasOwnProperty("sessionkey")||!e.sessionKey||"object"==s(e.sessionKey)){t.next=15;break}if(v=e,!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=11;break}return t.next=9,x();case 9:t.next=13;break;case 11:return t.next=13,b();case 13:case 24:t.next=30;break;case 15:if(!(e.hasOwnProperty(d)&&e[d].hasOwnProperty("sessionkey")&&e[d].sessionKey&&"object"!=s(e[d].sessionKey))){t.next=26;break}if(v=e[d],!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=22;break}return t.next=20,x();case 20:t.next=24;break;case 22:return t.next=24,b();case 26:return t.next=28,E(!1);case 28:return t.next=30,b();case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=17;break;case 5:if("authtenicate"!==e.action){t.next=10;break}return t.next=8,b();case 8:t.next=17;break;case 10:if("Debugvalueset"!==e.action){t.next=14;break}e.data,t.next=17;break;case 14:if("createSession"!==e.action){t.next=17;break}return t.next=17,N(e.data);case 17:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}());function N(t){return U.apply(this,arguments)}function U(){return(U=l(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.authenticationsource="keycloak",v.authenticated=!0,v.authdata=e,t.next=6,E(!1);case 6:return t.next=8,P();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}UdanLibrary=e}();