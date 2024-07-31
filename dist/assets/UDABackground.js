var UdanLibrary;(()=>{var e={8368:(e,n,t)=>{"use strict";t.r(n),t.d(n,{BotInfo:()=>c,BrowserInfo:()=>a,NodeInfo:()=>r,ReactNativeInfo:()=>l,SearchBotDeviceInfo:()=>s,browserName:()=>g,detect:()=>p,detectOS:()=>m,getNodeVersion:()=>S,parseUserAgent:()=>y});var i=t(6512),o=function(e,n,t){if(t||2===arguments.length)for(var i,o=0,a=n.length;o<a;o++)!i&&o in n||(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))},a=function(e,n,t){this.name=e,this.version=n,this.os=t,this.type="browser"},r=function(e){this.version=e,this.type="node",this.name="node",this.os=i.platform},s=function(e,n,t,i){this.name=e,this.version=n,this.os=t,this.bot=i,this.type="bot-device"},c=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},d=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,u=3,h=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],f=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function p(e){return e?y(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?y(navigator.userAgent):S()}function v(e){return""!==e&&h.reduce((function(n,t){var i=t[0],o=t[1];if(n)return n;var a=o.exec(e);return!!a&&[i,a]}),!1)}function g(e){var n=v(e);return n?n[0]:null}function y(e){var n=v(e);if(!n)return null;var t=n[0],i=n[1];if("searchbot"===t)return new c;var r=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);r?r.length<u&&(r=o(o([],r,!0),function(e){for(var n=[],t=0;t<e;t++)n.push("0");return n}(u-r.length),!0)):r=[];var l=r.join("."),h=m(e),f=d.exec(e);return f&&f[1]?new s(t,l,h,f[1]):new a(t,l,h)}function m(e){for(var n=0,t=f.length;n<t;n++){var i=f[n],o=i[0];if(i[1].exec(e))return o}return null}function S(){return void 0!==i&&i.version?new r(i.version.slice(1)):null}},6512:e=>{var n,t,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(e){t=a}}();var s,c=[],l=!1,d=-1;function u(){l&&s&&(l=!1,s.length?c=s.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=r(u);l=!0;for(var n=c.length;n;){for(s=c,c=[];++d<n;)s&&s[d].run();d=-1,n=c.length}s=null,l=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{return t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function p(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new f(e,n)),1!==c.length||l||r(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";t.r(i);const e={current:"TEST",UDADebug:!1,UDA_CONTAINER_CLASS:"udan-main-panel",UDA_CLICK_IGNORE_CLASS:"uda_exclude",UDA_DOMAIN:"https://udan.nistapp.com/api",UDA_API_URL:"https://udan.nistapp.com/api/api",UDASessionID:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),UDA_POST_INTERVAL:1e3,UDALastMutationTime:0,UDALogLevel:0,RECORDING_IS_PLAYING:"UDAIsPlaying",RECORDING_MANUAL_PLAY:"UDAManualPlay",RECORDING_SWITCH_KEY:"UDARecordingSwitch",RECORDING_SEQUENCE:"UDAActiveRecordingData",SELECTED_RECORDING:"UDASelectedRecordedItem",USER_AUTH_DATA_KEY:"udaUserData",UserScreenAcceptance:"udaUserScreenAcceptance",USER_SESSION_KEY:"UDASessionKey",UDAKeyCloakKey:"UDAKeyCloak",USER_SESSION_ID:"UDASessionId",SYNC_INTERVAL:1e3,AUTO_PLAY_SLEEP_TIME:2e3,JARO_WEIGHT:.95,JARO_WEIGHT_PERSONAL:.9,lastClickedTime:null,specialNodeKey:"UDASpecialNodes",enableInfiniteScroll:!0,enableInfiniteScrollPageLength:10,UDA_URL_Param:"UDA_Sequence_id",set Environment(e){this.current=e.toString().toUpperCase(),"PROD"===this.current?this.UDA_DOMAIN="https://udan.nistapp.ai":this.UDA_DOMAIN="https://udantest.nistapp.ai",this.UDA_API_URL=this.UDA_DOMAIN+"/api"},get Environment(){return this.current},DEBOUNCE_INTERVAL:1e3,indexInterval:1e3,clickObjects:[],nodeId:0,isRecording:!1,htmlIndex:[],invokeTime:2e3,apiInvokeTime:300,maxStringLength:40,playNextAction:!0,navigatedToNextPage:{check:!1,url:""},ignoreElements:["script","h1","h2","h3","link","noscript","style"],ignoreAttributes:["translate","draggable","spellcheck","tabindex","clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollLeft","scrollTop","scrollWidth","baseURI","isConnected","ariaPressed","aria-pressed","nodePosition","outerHTML","innerHTML","style","aria-controls","aria-activedescendant","ariaExpanded","autocomplete","aria-expanded","aria-owns","formAction","ng-star-inserted","ng-star","aria-describedby","width","height","x","y","selectionStart","selectionEnd","required","validationMessage","selectionDirection","naturalWidth","naturalHeight","complete","_indexOf","value","defaultValue","min","max","nodeInfo","data-tooltip-id","addedclickrecord","checked","data-tribute","hasclick","addedClickRecord","hasClick","valueAsNumber","udaIgnoreChildren","udaIgnoreClick","udaignorechildren","udaignoreclick","fdprocessedid","__ngContext__","d","text","textContent","cdk-describedby-host","inert","fill","disabled","hidden"],innerTextWeight:5,ignoreNodesFromIndexing:["ng-dropdown-panel","ckeditor","fusioncharts","ngb-datepicker","ngx-daterangepicker-material","uda-panel","mat-datepicker-content","ng-select"],ignoreNodesContainingClassNames:["cke_dialog_container","cke_notifications_area","gldp-default","ajs-layer","aui-list","herknl","jstBlock"],cancelRecordingDuringRecordingNodes:[],addClickToSpecialNodes:["ng-select","ngb-datepicker"],ignoreClicksOnSpecialNodes:["ngx-daterangepicker-material"],customNameForSpecialNodes:{"ngb-datepicker":"Date selector","mat-datepicker-content":"Date selector","ngx-daterangepicker-material":"Date Range Selector"},specialInputClickClassNames:["ghx-dropdown-trigger","aui-list","jstBlock","mat-form-field-flex","mat-select-trigger"],commonTags:["span","div"],tooltipDisplayedNodes:[],autoplayCompleted:!1,autoplayPaused:!1,invokedActionManually:!1,personalNodeIgnoreAttributes:["innerText","innerHTML","outerText","outerHTML","nodeValue","src","naturalWidth","naturalHeight","currentSrc"],profanity:{enabled:!0,provider:"azure",config:{key1:"bc015cc4090543d58c3056e8dc98cc9b",key2:"bc015cc4090543d58c3056e8dc98cc9b",endPoint:"https://nistapp-content-moderator.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessText/Screen",region:"eastus"}},multilingual:{enabled:!1,searchInLang:"en-US",selectedLang:"en-US",displayText:"",translatedText:"",translate:{provider:"google",apikey:"AIzaSyAo3C7-hCNZnkMSAEpsPXf2obAdjen_Xfk",translateTo:"en",apiurl:"https://translation.googleapis.com/language/translate/v2"}},bcpLang:[["Afrikaans",["af-ZA"]],["አማርኛ",["am-ET"]],["Azərbaycanca",["az-AZ"]],["বাংলা",["bn-BD","বাংলাদেশ"],["bn-IN","ভারত"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Català",["ca-ES"]],["Čeština",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-KE","Kenya"],["en-TZ","Tanzania"],["en-GH","Ghana"],["en-NZ","New Zealand"],["en-NG","Nigeria"],["en-ZA","South Africa"],["en-PH","Philippines"],["en-GB","United Kingdom"],["en-US","United States"]],["Español",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","España"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","México"],["es-NI","Nicaragua"],["es-PA","Panamá"],["es-PY","Paraguay"],["es-PE","Perú"],["es-PR","Puerto Rico"],["es-DO","República Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Français",["fr-FR"]],["Basa Jawa",["jv-ID"]],["Galego",["gl-ES"]],["ગુજરાતી",["gu-IN"]],["Hrvatski",["hr-HR"]],["IsiZulu",["zu-ZA"]],["Íslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["ಕನ್ನಡ",["kn-IN"]],["ភាសាខ្មែរ",["km-KH"]],["Latviešu",["lv-LV"]],["Lietuvių",["lt-LT"]],["മലയാളം",["ml-IN"]],["मराठी",["mr-IN"]],["Magyar",["hu-HU"]],["ລາວ",["lo-LA"]],["Nederlands",["nl-NL"]],["नेपाली भाषा",["ne-NP"]],["Norsk bokmål",["nb-NO"]],["Polski",["pl-PL"]],["Português",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Română",["ro-RO"]],["සිංහල",["si-LK"]],["Slovenščina",["sl-SI"]],["Basa Sunda",["su-ID"]],["Slovenčina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Kiswahili",["sw-TZ","Tanzania"],["sw-KE","Kenya"]],["ქართული",["ka-GE"]],["Հայերեն",["hy-AM"]],["தமிழ்",["ta-IN","இந்தியா"],["ta-SG","சிங்கப்பூர்"],["ta-LK","இலங்கை"],["ta-MY","மலேசியா"]],["తెలుగు",["te-IN"]],["Tiếng Việt",["vi-VN"]],["Türkçe",["tr-TR"]],["اُردُو",["ur-PK","پاکستان"],["ur-IN","بھارت"]],["Ελληνικά",["el-GR"]],["български",["bg-BG"]],["Pусский",["ru-RU"]],["Српски",["sr-RS"]],["Українська",["uk-UA"]],["한국어",["ko-KR"]],["中文",["cmn-Hans-CN","普通话 (中国大陆)"],["cmn-Hans-HK","普通话 (香港)"],["cmn-Hant-TW","中文 (台灣)"],["yue-Hant-HK","粵語 (香港)"]],["日本語",["ja-JP"]],["हिन्दी",["hi-IN"]],["ภาษาไทย",["th-TH"]]],enableNodeTypeChangeSelection:!0,set enableNodeTypeSelection(e){this.enableNodeTypeChangeSelection=e},get enableNodeTypeSelection(){return e.multilingual.enabled},cspUserAcceptance:{storageName:"uda-csp-enabled",data:{proceed:!0}},screenAcceptance:{storageName:"uda-user-screen-consent",data:{proceed:!0}},ignoreDynamicAttributeText:["_ng","__context","__zone_symbol"]};let n,o=!1,a=e.USER_AUTH_DATA_KEY,r=-1,s=!1;const{detect:c}=t(8368),l=c();switch(l&&l.name){case"edge-chromium":case"edge":case"edge-ios":case"chrome":s=!0,n=chrome;break;default:n=l}var d=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const u=(e,n)=>d(void 0,void 0,void 0,(function*(){const t=(new TextEncoder).encode(e),i=yield crypto.subtle.digest(n,t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}));var h=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};var f=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const p=(e,n="UDAUserSessionData",t="")=>f(void 0,void 0,void 0,(function*(){if(!0===o)yield v(e,n,t);else{let i={};switch(n){case"UDAUserSessionData":i=new CustomEvent("UDAUserSessionData",{detail:{data:JSON.stringify(e)},bubbles:!1,cancelable:!1});break;case"UDAAuthenticatedUserSessionData":i=new CustomEvent("UDAAuthenticatedUserSessionData",{detail:{data:JSON.stringify(e)},bubbles:!1,cancelable:!1});break;case"UDAAlertMessageData":i=new CustomEvent("UDAAlertMessageData",{detail:{data:t},bubbles:!1,cancelable:!1})}document.dispatchEvent(i)}})),v=(e,t="UDAUserSessionData",i="")=>f(void 0,void 0,void 0,(function*(){let o=yield h(void 0,void 0,void 0,(function*(){let e=(yield n.tabs.query({active:!0,currentWindow:!0}))[0];return e||-1!==r&&(e=yield n.tabs.get(r),e||!1)}));return!!o&&("UDAAlertMessageData"===t?(yield n.tabs.sendMessage(o.id,{action:t,data:i}),!0):(e.authData.hasOwnProperty("token")?yield n.tabs.sendMessage(o.id,{action:t,data:JSON.stringify(e)}):yield T(e,!1),!0))})),g={enableEditClickedName:!1,enableSkipDuringPlay:!1,enableTooltipAddition:!0,enableMultilingual:!1,enableNodeTypeSelection:!0,enablePermissions:!1,permissions:{},enableProfanity:!1,enableRecording:!0,enableOverlay:!0,environment:"PROD",enableUdaIcon:!0,udaDivId:"uda-nistapp-logo",enableForAllDomains:!1,enableSpeechToText:!1,enableSlowReplay:!1,enableCustomIcon:!1,customIcon:"https://udan.nistapp.com/uda-logo.jpg",realm:"UDAN",clientId:"backend-service",clientSecret:"iyUCeaZOuVETepRBqTOW0LptUNKpbhyd",enableHidePanelAfterCompletion:!1};var y=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};t.g.UDAGlobalConfig=g;const m=(e,n,i,o=!0)=>y(void 0,void 0,void 0,(function*(){try{const a={method:n,headers:{"Content-Type":"application/json",charset:"UTF-8"}};i&&(a.body=JSON.stringify(i));const r="https://udantest.nistapp.com/api";let s="https://udan.nistapp.com/api";-1===e.indexOf("http")&&("TEST"===t.g.UDAGlobalConfig.environment&&(s=r),e=s+e);let c=yield fetch(e,a);return!!c.ok&&(o?c.json():c.text())}catch(e){return!1}})),S={CheckUserId:"/user/checkauthid",GetSessionKey:"/user/getsessionkey",CheckUserSession:"/user/checkusersession",Search:"/search/all?query=#keyword#&domain=#domain#&page=#page#&userSessionId=#userSessionId#",SearchWithPermissionsOld:"/clickevents/sequence/search?query=#keyword#&domain=#domain#&page=#page#&additionalParams=#additionalParams#",SearchWithPermissions:"/search/withPermissions?query=#keyword#&domain=#domain#&page=#page#&additionalParams=#additionalParams#&userSessionId=#userSessionId#",ProfanityCheck:"https://nistapp-content-moderator.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessText/Screen",SpecialNodes:"/clickevents",Record:"/clickevents/clickednode",UpdateRecord:"/clickevents/updateclickednode",RecordSequence:"/clickevents/recordsequencedata",updateRecordSequence:"/clickevents/updatesequencedata",UserClick:"/clickevents/userclick",DeleteSequence:"/clickevents/sequence/delete",fetchRecord:"/search",VoteRecord:"/votes/addVote",fetchVoteRecord:"/votes/",tokenUrl:"user/token"};var b=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const w=(e,t)=>b(void 0,void 0,void 0,(function*(){if(!0===o){let i={};return i[t]=e,yield n.storage.local.set(i)}{const n=JSON.stringify(e);return window.localStorage.setItem(t,n)}})),A=e=>b(void 0,void 0,void 0,(function*(){if(!0===o){return(yield n.storage.local.get([e]))[e]}return window.localStorage.getItem(e)}));var k=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};t.g.UDAGlobalConfig=g;var D=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const T=(e,n=!1)=>D(void 0,void 0,void 0,(function*(){let n={authid:e.authData.id,emailid:e.authData.email,authsource:e.authenticationSource},i=yield m(S.CheckUserId,"POST",n);i&&null!==e.sessionKey&&(yield((e,n,i)=>k(void 0,void 0,void 0,(function*(){const i={uid:n.authData.id,email:n.authData.email,realm:t.g.UDAGlobalConfig.realm,clientId:t.g.UDAGlobalConfig.clientId,clientSecret:t.g.UDAGlobalConfig.clientSecret},o=yield m("https://authenticate.nistapp.com/"+S.tokenUrl,"POST",i);if(o&&(null==o?void 0:o.token)){n.authData.token=o.token;let t={userauthid:e.id,usersessionid:n.sessionKey};(yield m(S.CheckUserSession,"POST",t))&&(yield w(n,a),yield p(n,"UDAAuthenticatedUserSessionData"))}})))(i,e))}));var U=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const N=(e,t)=>U(void 0,void 0,void 0,(function*(){e.authenticationSource="google";const i=yield n.identity.getProfileUserInfo({accountStatus:"ANY"});return""!==i.id&&""!==i.email?(e.authenticated=!0,e.authData=i,u(i.id,"SHA-512").then((n=>U(void 0,void 0,void 0,(function*(){e.authData.id=n,u(i.email,"SHA-512").then((n=>U(void 0,void 0,void 0,(function*(){e.authData.email=n,yield T(e,t)}))))}))))):yield p(e,"UDAAlertMessageData","login"),!0}));class I{constructor(e=null,n=null,t=null){this.id=e,this.email=n,this.token=t}}class E{constructor(e=!1,n=!0,t=null){this.cspEnabled=e,this.udaAllowed=n,this.domain=t}}var P=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};const C=e=>P(void 0,void 0,void 0,(function*(){let n=yield m(S.GetSessionKey,"GET",null,!1);return n?(e.sessionKey=n,e):n}));var O=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};var x=function(e,n,t,i){return new(t||(t=Promise))((function(o,a){function r(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,s)}c((i=i.apply(e,n||[])).next())}))};o=!0,n.tabs.onActivated.addListener((function(e){var n;n=e.tabId,r=n}));let _=new class{constructor(e=null,n=!1,t=null,i=new I,o=new E){this.sessionKey=e,this.authenticated=n,this.authenticationSource=t,this.authData=i,this.csp=o}};n.runtime.onMessage.addListener((function(e,n,t){return x(this,void 0,void 0,(function*(){if("getusersessiondata"===e.action||"UDAGetNewToken"===e.action){const n=yield A(a);n?n.hasOwnProperty("sessionKey")&&n.sessionKey&&"object"!=typeof n.sessionKey?(_=n,"UDAGetNewToken"===e.action?yield function(){return x(this,void 0,void 0,(function*(){yield T(_,!0)}))}():n.hasOwnProperty("authenticated")&&n.authenticated?yield p(_):yield N(_,!1)):n.hasOwnProperty(a)&&n[a].hasOwnProperty("sessionKey")&&n[a].sessionKey&&"object"!=typeof n[a].sessionKey?(_=n[a],n.hasOwnProperty("authenticated")&&n.authenticated?yield p(_):yield N(_,!1)):(_=yield C(_),yield N(_,!1)):(_=yield C(_),yield N(_,!1))}else"authtenicate"===e.action?yield N(_,!1):"createSession"===e.action&&(yield((e,n)=>O(void 0,void 0,void 0,(function*(){(e=yield C(e)).authData=n,e.authenticated=!0,e.authenticationSource="keycloak",yield T(e)})))(_,e.data))}))}))})(),UdanLibrary=i})();