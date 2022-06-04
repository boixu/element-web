!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=75)}({0:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(1),r=o.n(n);r.a.methodFactory=function(e,t,o){return function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];this.prefix&&o.unshift(this.prefix);const r="error"===e||"warn"===e||"trace"===e||"info"===e;return r?console[e](...o):console.log(...o)}};const i=r.a.getLogger("matrix");function a(e){e.withPrefix=function(e){return function(e){const t=r.a.getLogger("matrix-"+e);t.prefix!==e&&(a(t),t.prefix=e,t.setLevel(r.a.levels.DEBUG,!1));return t}((this.prefix||"")+e)}}i.setLevel(r.a.levels.DEBUG,!1),a(i)},1:function(e,t,o){var n,r;!function(i,a){"use strict";void 0===(r="function"==typeof(n=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function n(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(o){return"debug"===o&&(o="log"),"undefined"!=typeof console&&("trace"===o&&t?r:void 0!==console[o]?n(console,o):void 0!==console.log?n(console,"log"):e)}function a(t,n){for(var r=0;r<o.length;r++){var i=o[r];this[i]=r<t?e:this.methodFactory(i,t,n)}this.log=this.debug}function s(e,t,o){return function(){"undefined"!=typeof console&&(a.call(this,t,o),this[e].apply(this,arguments))}}function u(e,t,o){return i(e)||s.apply(this,arguments)}function c(e,t,n){var r,i=this;t=null==t?"WARN":t;var s="loglevel";function c(){var e;if("undefined"!=typeof window&&s){try{e=window.localStorage[s]}catch(e){}if(void 0===e)try{var t=window.document.cookie,o=t.indexOf(encodeURIComponent(s)+"=");-1!==o&&(e=/^([^;]+)/.exec(t.slice(o))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?s+=":"+e:"symbol"==typeof e&&(s=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=n||u,i.getLevel=function(){return r},i.setLevel=function(t,n){if("string"==typeof t&&void 0!==i.levels[t.toUpperCase()]&&(t=i.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(r=t,!1!==n&&function(e){var t=(o[e]||"silent").toUpperCase();if("undefined"!=typeof window&&s){try{return void(window.localStorage[s]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"="+t+";"}catch(e){}}}(t),a.call(i,t,e),"undefined"==typeof console&&t<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){t=e,c()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(t,!1),function(){if("undefined"!=typeof window&&s){try{return void window.localStorage.removeItem(s)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var l=c();null==l&&(l=t),i.setLevel(l,!1)}var l=new c,d={};l.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new c(e,l.getLevel(),l.methodFactory)),t};var f="undefined"!=typeof window?window.log:void 0;return l.noConflict=function(){return"undefined"!=typeof window&&window.log===l&&(window.log=f),l},l.getLoggers=function(){return d},l.default=l,l})?n.call(t,o,t,e):n)||(e.exports=r)}()},5:function(e,t,o){var n,r,i;r=[],void 0===(i="function"==typeof(n=function(){var e=XMLHttpRequest;if(!e)throw new Error("missing XMLHttpRequest");function t(i,a){if("function"!=typeof a)throw new Error("Bad callback given: "+a);if(!i)throw new Error("No options given");var s=i.onResponse;if((i="string"==typeof i?{uri:i}:JSON.parse(JSON.stringify(i))).onResponse=s,i.verbose&&(t.log=function(){var e,t,o={},i=["trace","debug","info","warn","error"];for(t=0;t<i.length;t++)o[e=i[t]]=n,"undefined"!=typeof console&&console&&console[e]&&(o[e]=r(console,e));return o}()),i.url&&(i.uri=i.url,delete i.url),!i.uri&&""!==i.uri)throw new Error("options.uri is a required argument");if("string"!=typeof i.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],c=0;c<u.length;c++)if(i[u[c]])throw new Error("options."+u[c]+" is not supported");if(i.callback=a,i.method=i.method||"GET",i.headers=i.headers||{},i.body=i.body||null,i.timeout=i.timeout||t.DEFAULT_TIMEOUT,i.headers.host)throw new Error("Options.headers.host is not supported");i.json&&(i.headers.accept=i.headers.accept||"application/json","GET"!==i.method&&(i.headers["content-type"]="application/json"),"boolean"!=typeof i.json?i.body=JSON.stringify(i.json):"string"!=typeof i.body&&(i.body=JSON.stringify(i.body)));var l=function(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return t.join("&")};if(i.qs){var d="string"==typeof i.qs?i.qs:l(i.qs);-1!==i.uri.indexOf("?")?i.uri=i.uri+"&"+d:i.uri=i.uri+"?"+d}if(i.form){if("string"==typeof i.form)throw"form name unsupported";if("POST"===i.method){var f=(i.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(i.headers["content-type"]=f,f){case"application/x-www-form-urlencoded":i.body=l(i.form).replace(/%20/g,"+");break;case"multipart/form-data":var p=function(e){var t={};t.boundry="-------------------------------"+Math.floor(1e9*Math.random());var o=[];for(var n in e)e.hasOwnProperty(n)&&o.push("--"+t.boundry+'\nContent-Disposition: form-data; name="'+n+'"\n\n'+e[n]+"\n");return o.push("--"+t.boundry+"--"),t.body=o.join(""),t.length=t.body.length,t.type="multipart/form-data; boundary="+t.boundry,t}(i.form);i.body=p.body,i.headers["content-type"]=p.type;break;default:throw new Error("unsupported encoding:"+f)}}}return i.onResponse=i.onResponse||n,!0===i.onResponse&&(i.onResponse=a,i.callback=n),!i.headers.authorization&&i.auth&&(i.headers.authorization="Basic "+function(e){var t,o,n,r,i,a,s,u,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,d=0,f="",p=[];if(!e)return e;do{t=e.charCodeAt(l++),o=e.charCodeAt(l++),n=e.charCodeAt(l++),r=(u=t<<16|o<<8|n)>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,p[d++]=c.charAt(r)+c.charAt(i)+c.charAt(a)+c.charAt(s)}while(l<e.length);switch(f=p.join(""),e.length%3){case 1:f=f.slice(0,-2)+"==";break;case 2:f=f.slice(0,-1)+"="}return f}(i.auth.username+":"+i.auth.password)),function(n){var r=new e,i=!1,a=function(e){var t,o=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{t=location.href}catch(e){(t=document.createElement("a")).href="",t=t.href}var n=o.exec(t.toLowerCase())||[],r=o.exec(e.toLowerCase());return!(!r||r[1]==n[1]&&r[2]==n[2]&&(r[3]||("http:"===r[1]?80:443))==(n[3]||("http:"===n[1]?80:443)))}(n.uri),s="withCredentials"in r;if(o+=1,r.seq_id=o,r.id=o+": "+n.method+" "+n.uri,r._id=r.id,a&&!s){var u=new Error("Browser does not support cross-origin request: "+n.uri);return u.cors="unsupported",n.callback(u,r)}r.timeoutTimer=setTimeout((function(){i=!0;var e=new Error("ETIMEDOUT");return e.code="ETIMEDOUT",e.duration=n.timeout,t.log.error("Timeout",{id:r._id,milliseconds:n.timeout}),n.callback(e,r)}),n.timeout);var c={response:!1,loading:!1,end:!1};return r.onreadystatechange=function(o){if(i)return t.log.debug("Ignoring timed out state change",{state:r.readyState,id:r.id});if(t.log.debug("State change",{state:r.readyState,id:r.id,timed_out:i}),r.readyState===e.OPENED)for(var a in t.log.debug("Request started",{id:r.id}),n.headers)r.setRequestHeader(a,n.headers[a]);else r.readyState===e.HEADERS_RECEIVED?l():r.readyState===e.LOADING?(l(),d()):r.readyState===e.DONE&&(l(),d(),function(){if(c.end)return;if(c.end=!0,t.log.debug("Request done",{id:r.id}),r.body=r.responseText,n.json)try{r.body=JSON.parse(r.responseText)}catch(e){return n.callback(e,r)}n.callback(null,r,r.body)}())},r.open(n.method,n.uri,!0),a&&(r.withCredentials=!!n.withCredentials),r.send(n.body),r;function l(){if(!c.response){if(c.response=!0,t.log.debug("Got response",{id:r.id,status:r.status}),clearTimeout(r.timeoutTimer),r.statusCode=r.status,a&&0==r.statusCode){var e=new Error("CORS request rejected: "+n.uri);return e.cors="rejected",c.loading=!0,c.end=!0,n.callback(e,r)}n.onResponse(null,r)}}function d(){c.loading||(c.loading=!0,t.log.debug("Response body loading",{id:r.id}))}}(i)}t.log={trace:n,debug:n,info:n,warn:n,error:n};var o=0;function n(){}function r(e,t){return function(o,n){return"object"==typeof n&&(o+=" "+JSON.stringify(n)),e[t].call(e,o)}}return t.withCredentials=!1,t.DEFAULT_TIMEOUT=18e4,t.defaults=function(e,o){var n=function(t){return function(o,n){for(var r in o="string"==typeof o?{uri:o}:JSON.parse(JSON.stringify(o)),e)void 0===o[r]&&(o[r]=e[r]);return t(o,n)}},r=n(t);return r.get=n(t.get),r.post=n(t.post),r.put=n(t.put),r.head=n(t.head),r},["get","put","post","head"].forEach((function(e){var o=e.toUpperCase();t[e.toLowerCase()]=function(e){"string"==typeof e?e={method:o,uri:e}:(e=JSON.parse(JSON.stringify(e))).method=o;var n=[e].concat(Array.prototype.slice.apply(arguments,[1]));return t.apply(this,n)}})),t.couch=function(e,o){return"string"==typeof e&&(e={uri:e}),e.json=!0,e.body&&(e.json=e.body),delete e.body,o=o||n,t(e,(function(e,t,n){if(e)return o(e,t,n);if((t.statusCode<200||t.statusCode>299)&&n.error){for(var r in e=new Error("CouchDB error: "+(n.error.reason||n.error.error)),n)e[r]=n[r];return o(e,t,n)}return o(e,t,n)}))},t})?n.apply(t,r):n)||(e.exports=i)},6:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(5),r=o.n(n);async function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";""===e||e.endsWith("/")||(e+="/");const t=a(`${e}config.${document.domain}.json`),o=a(e+"config.json");try{const e=await t;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await o}}function a(e){return new Promise((function(t,o){r()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,n,r)=>{try{if(e||n.status<200||n.status>=300)return n&&(404==n.status||0==n.status&&""==r)&&t({}),void o({err:e,response:n});t(JSON.parse(r))}catch(e){o({err:e})}})}))}},75:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(6);function i(){document.cookie="element_mobile_redirect_to_guide=false;path=/;max-age=14400",window.location.href="../"}function a(e){e=`<h2>Error loading Element</h2><p>${e}</p><p>If this is unexpected, please contact your system administrator or technical support representative.</p>`;const t=document.getElementsByClassName("mx_HomePage_container"),o=document.getElementsByClassName("mx_HomePage_errorContainer");for(const e of t)e.innerHTML="";for(const t of o)t.style.display="block",t.innerHTML=e}!async function(){document.getElementById("back_to_element_button").onclick=i;const e=await Object(r.a)(".."),t=e.default_server_config,o=e.default_server_name,s=e.default_hs_url,u=e.default_is_url,c=[t,o,s].filter(e=>!!e);if(c.length>1)return a("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url.");if(c.length<1)return a("Invalid configuration: no default server specified.");let l="",d="";if(t&&t["m.homeserver"]&&(l=t["m.homeserver"].base_url,t["m.identity_server"]&&(d=t["m.identity_server"].base_url)),o)try{const e=await fetch(`https://${o}/.well-known/matrix/client`),t=await e.json();t&&t["m.homeserver"]&&(l=t["m.homeserver"].base_url,t["m.identity_server"]&&(d=t["m.identity_server"].base_url))}catch(e){return n.a.error(e),a("Unable to fetch homeserver configuration")}if(s&&(l=s,d=u),!l)return a("Unable to locate homeserver");l&&!l.endsWith("/")&&(l+="/"),d&&!d.endsWith("/")&&(d+="/"),"https://matrix.org/"!==l&&(document.getElementById("configure_element_button").href="https://mobile.element.io?hs_url="+encodeURIComponent(l)+"&is_url="+encodeURIComponent(d),document.getElementById("step1_heading").innerHTML="1: Install the app",document.getElementById("step2_container").style.display="block",document.getElementById("hs_url").innerText=l,d&&(document.getElementById("custom_is").style.display="block",document.getElementById("is_url").style.display="block",document.getElementById("is_url").innerText=d))}()}});
//# sourceMappingURL=mobileguide.js.map