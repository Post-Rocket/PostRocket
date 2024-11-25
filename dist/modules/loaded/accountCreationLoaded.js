(()=>{"use strict";var t={149:(t,e,o)=>{var r=o(668);const n=()=>{let t;try{return"ontouchstart"in(void 0).document||"ontouchstart"in(void 0).documentElement||(void 0).navigator.maxTouchPoints>0||(void 0).navigator.msMaxTouchPoints>0||(t=(void 0).matchMedia("(pointer:coarse)")||{})&&"(pointer:coarse)"===t.media&&!!t.matches}catch{}return!1};Object.freeze(Object.defineProperty(n,"hasTouchScreen",{value:n}))()&&setTimeout((()=>{const t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content","width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content")}),1e3),(()=>{let t;window.onresize=(0,r.Ay)((()=>{document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),t||document.body.classList.remove("transition-on"),clearTimeout(t),t=setTimeout((()=>{document.body.classList.add("transition-on"),t=0}),100)})),setTimeout((()=>{document.body.classList.add("transition-on")}),100),document.addEventListener("click",(t=>t.target===document.body&&(t.preventDefault(),t.stopPropagation(),document.activeElement.blur())));const e=document.querySelectorAll("[data-background-image]");for(let t,o,r=0,n=e.length;r!==n;++r)(o=(t=e[r]).getAttribute("data-background-image"))&&(t.style.backgroundImage=`url("${o}")`)})(),(()=>{const t=(t,e="../index.html",o=!0)=>()=>{o&&window.history&&window.history.length&&window.history.back&&(window.history.back(),1)||(window.location.href=t||document.referrer||e||"../index.html")};let e=document.getElementById("back");e&&(e.onclick=t(null,"../index.html",!0)),e=document.getElementById("back-home"),e&&(e.onclick=t("../index.html","../index.html",e.hasAttribute("data-decrement-history")))})()},732:()=>{String.toCamelCase||Object.defineProperty(String,"toCamelCase",{value:function(t,e=""){let o="",r=!1;for(let n=0,i=t.length;n!==i;++n){const i=t.charAt(n);(i<"A"||i>"z"||i>"Z"&&i<"a")&&(r=!0)||!r&&(o+=i)||(o+=e+i.toUpperCase())&&(r=!1)}return o}}),String.prototype.toCamelCase||Object.defineProperty(String.prototype,"toCamelCase",{value:function(...t){return String.toCamelCase(this,...t)}}),String.toKebabCase||Object.defineProperty(String,"toKebabCase",{value:function(t,e="-",o,r){let n="",i=t.length;for(let o=0,r=i;o!==r;++o){const r=t.charCodeAt(o);(r<65||r>122||r>90&&r<97)&&(n+=e)||r>=65&&r<=90&&(n+=e+String.fromCharCode(r+32))||(n+=String.fromCharCode(r))}let a,c=0,s=n.length,u=s;for(a=Math.min(o||0,i);c!==a&&n.charAt(c)===e;++c);for(a=i-Math.min(r||0,i);s>a&&n.charAt(--s)===e;);return(c||s<u)&&n.slice(c,s+1)||n}}),String.prototype.toKebabCase||Object.defineProperty(String.prototype,"toKebabCase",{value:function(...t){return String.toKebabCase(this,...t)}}),String.decamelize||Object.defineProperty(String,"decamelize",{value:function(t,e=1/0,o=1/0){return t.toKebabCase("_",e,o)}}),String.prototype.decamelize||Object.defineProperty(String.prototype,"decamelize",{value:function(...t){return String.decamelize(this,...t)}}),String.toSnakeCase||Object.defineProperty(String,"toSnakeCase",{value:function(t,e=1/0,o=1/0){return t.toKebabCase("_",e,o)}}),String.prototype.toSnakeCase||Object.defineProperty(String.prototype,"toSnakeCase",{value:function(...t){return String.toSnakeCase(this,...t)}}),String.toPascalCase||Object.defineProperty(String,"toPascalCase",{value:function(t,e=""){const o=t.toCamelCase(e);return o.charAt(0).toUpperCase()+o.slice(1)}}),String.prototype.toPascalCase||Object.defineProperty(String.prototype,"toPascalCase",{value:function(...t){return String.toPascalCase(this,...t)}}),String.toHashTagCase||Object.defineProperty(String,"toHashTagCase",{value:function(t,e=""){let o="",r=!1;for(let n=0,i=t.length;n!==i;++n){const i=t.charAt(n);(i<"0"||i>"z"||i>"9"&&i<"A"||i>"Z"&&i<"a")&&(r=!0)||!r&&(o+=i)||(o+=e+i.toUpperCase())&&(r=!1)}return o}}),String.prototype.toHashTagCase||Object.defineProperty(String.prototype,"toHashTagCase",{value:function(...t){return String.toHashTagCase(this,...t)}}),String.toUserIdCase||Object.defineProperty(String,"toUserIdCase",{value:function(t){return t.toHashTagCase("-").toLowerCase().replace(/^\-+|\-+$|\-\-+/g,"")}}),String.prototype.toUserIdCase||Object.defineProperty(String.prototype,"toUserIdCase",{value:function(...t){return String.toUserIdCase(this,...t)}}),String.toHashTag||Object.defineProperty(String,"toHashTag",{value:function(t){return"#"+t.toHashTagCase()}}),String.prototype.toHashTag||Object.defineProperty(String.prototype,"toHashTag",{value:function(...t){return String.toHashTag(this,...t)}}),String.toTitleCase||Object.defineProperty(String,"toTitleCase",{value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),String.prototype.toTitleCase||Object.defineProperty(String.prototype,"toTitleCase",{value:function(...t){return String.toTitleCase(this,...t)}});const t=/\s+/g;String.toCapitalCase||Object.defineProperty(String,"toCapitalCase",{value:function(e){return e.split(t).map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" ")}}),String.prototype.toCapitalCase||Object.defineProperty(String.prototype,"toCapitalCase",{value:function(...t){return String.toCapitalCase(this,...t)}}),String.toQuote||Object.defineProperty(String,"toQuote",{value:function(t,e="❝ ",o=" ❞"){return`${e}${t}${o}`}}),String.prototype.toQuote||Object.defineProperty(String.prototype,"toQuote",{value:function(...t){return String.toQuote(this,...t)}}),String.toSocketHeaderKey||Object.defineProperty(String,"toSocketHeaderKey",{value:function(t){let e="",o=!1,r=0,n=t.length;for(;r!==n;++r){const n=t.charAt(r);(" "===n||"-"===n||"_"===n)&&(o=!0)&&(e+="-")||!o&&r&&(e+=n)||(e+=n.toUpperCase())&&(o=!1)}return e}}),String.prototype.toSocketHeaderKey||Object.defineProperty(String.prototype,"toSocketHeaderKey",{value:function(...t){return String.toSocketHeaderKey(this,...t)}});const e={geese:"goose",mice:"mouse",feet:"foot",teeth:"tooth",oxen:"ox",cacti:"cactus",cactus:"cactus",couscous:"couscous",octopus:"octopus"};String.toSingular||Object.defineProperty(String,"toSingular",{value:function(t){return`${(t=>{if(t.length<4)return t;const o=e[t];if(o)return o;const r=t.length-1,n=t.charAt(r),i=r-1,a=t.charAt(i),c=i-1,s=t.charAt(c);return"s"===n&&"s"!==a?"e"===a?"i"===s?t.slice(0,c)+"y":"v"===s?t.slice(0,c)+"f":"a"===s||"o"===s||"u"===s?t.slice(0,i):t.slice(0,r):t.slice(0,r):t})(t)}`}}),String.prototype.toSingular||Object.defineProperty(String.prototype,"toSingular",{value:function(...t){return String.toSingular(this,...t)}}),String.raw||Object.defineProperty(String,"raw",{value:function(t){return`${t}`}}),String.prototype.raw||Object.defineProperty(String.prototype,"raw",{value:function(...t){return String.raw(this,...t)}}),String.utf16To8||Object.defineProperty(String,"utf16To8",{value:function(){const t=(t,e)=>String.fromCharCode(parseInt(e,16));return function(e){try{return encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,t)}catch{return e}}}()}),String.prototype.utf16To8||Object.defineProperty(String.prototype,"utf16To8",{value:function(...t){return String.utf16To8(this,...t)}}),String.utf8To16||Object.defineProperty(String,"utf8To16",{value:function(){const t=t=>"%"+((t=t.charCodeAt())<16?"0":"")+t.toString(16).toUpperCase();return function(e){try{return decodeURIComponent(e.replace(/[\x00-),:-?[-^`{-\xFF]/g,t))}catch{return e}}}()}),String.prototype.utf8To16||Object.defineProperty(String.prototype,"utf8To16",{value:function(...t){return String.utf8To16(this,...t)}})},668:(t,e,o)=>{o.d(e,{Ay:()=>n}),t=o.hmd(t);const r=(t,e=50,o=!1,r=!1)=>e>0&&function(...n){o?r=!0:(t.apply(this||{},n),o=!0,setTimeout((function(){r&&t.apply(this||{},n),r=o=!1}),e))}||t;Object.defineProperty(r,"DEFAULT_DELAY",{value:50});const n=Object.freeze(Object.defineProperty(r,"throttle",{value:r}));try{t.exports=r}catch{}}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,o),i.loaded=!0,i.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(732);const r=(t,e={})=>{if(!t||"object"!=typeof t)return e;let o;if(t instanceof HTMLFormElement||(t=>{if(!t||"object"!=typeof t)return!1;if(t.target&&t.target instanceof HTMLFormElement)return!0;try{return t instanceof SyntheticBaseEvent||t instanceof SubmitEvent}catch{return t instanceof SubmitEvent}})(t)&&(o=t.submitter||t.relatedTarget&&("submit"===(t.relatedTarget.type||t.relatedTarget.getAttribute("type"))||"button"===t.relatedTarget.nodeName.toLowerCase())&&t.relatedTarget,t=t.target),o&&(o={name:o.name||o.getAttribute("name"),value:o.value||o.getAttribute("value")},o.value||(o.value=!!o.name)),!(t instanceof HTMLFormElement))return e;const r={};t=new FormData(t),o&&o.name&&t.append(o.name,o.value);for(const e of t){const[t,o]=e;("number"==typeof o||"boolean"==typeof o||o)&&(r[t.toCamelCase()]=o)}return r},n=Object.freeze(Object.defineProperty(r,"createFormData",{value:r}));o(149),(()=>{const t=document.getElementById("form"),[e,o]=t.getElementsByTagName("input"),r=document.getElementById("new-code"),i=document.getElementById("submit");i.innerHTML="Send Code";const a=()=>{const t=e.classList.contains("hidden");return e.classList.toggle("hidden"),o.classList.toggle("hidden"),r.classList.toggle("hidden"),t||(o.value="",setTimeout((()=>o.focus()),1e4)),i.innerHTML=t?"Send Code":"Verify Code",t};r.onclick=t=>{t.preventDefault(),a()},t.onsubmit=e=>{e.preventDefault(),t.checkValidity(),t.reportValidity();const o=n(t);(o.verify=a())||delete o.code,console.log(o),document.cookie="__Secure-postrocket_home_intro=0; Secure; Path=/; SameSite=Strict; Max-Age=-99999999",o.verify&&(window.location.href="./home.html")},document.addEventListener("keydown",(t=>{const r=o.classList.contains("hidden")&&e||o;document.activeElement!==r&&1===t.key.length&&(t.stopPropagation(),t.preventDefault(),r.focus(),r.value=(r.value||"")+t.key)})),setTimeout((()=>e.focus()),10)})()})();