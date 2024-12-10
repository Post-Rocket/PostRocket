(()=>{var __webpack_modules__={254:(t,e,n)=>{"use strict";const o=/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;class i extends HTMLElement{#t;#e;#n;#o;#i;#r;#a;#s;#c=[];#d;#l;constructor(){super(),d||(d=l());const t=this.attachShadow({mode:"closed"});t.appendChild(d.cloneNode(!0)),this.#i=t.childNodes[1],this.#r=t.childNodes[2],this.#t=t.childNodes[3],this.#e=t.childNodes[4],this.#n=this.#e.firstChild,this.#a=this.#e.childNodes[1],this.#s=this.#a.firstChild,window.YT||this.#t.setAttribute("src","https://www.youtube.com/iframe_api")}static get isApiLoaded(){return window.YT}createPlayer(t){return!window.YT||this.#l||("function"==typeof t||(t=()=>{this.#d.playVideo()}),this.#l=!0,window.YT.ready((()=>{this.#d=new window.YT.Player(this.#n,{host:"https://www.youtube-nocookie.com",height:196,width:333,videoId:this.#o,playerVars:{playsinline:1,theme:"dark",autohide:2,modestbranding:1},events:{onReady:(...e)=>{this.#n=this.#e.firstChild,t(...e)},onError:()=>{this.#l=!1}}})}))),this}connectedCallback(){let t;(this.#i.innerHTML=this.getAttribute("headline"))||this.#i.classList.add("hidden"),(this.#r.innerHTML=this.getAttribute("description"))||this.#r.classList.add("hidden"),(t=this.getAttribute("src"))?(this.#o=t.match(o)[1],this.#c=[r(this.#o,""),r(this.#o,"mq"),r(this.#o,"hq"),r(this.#o,"sd"),r(this.#o,"maxres")],a({rel:"prefetch",href:`https://www.youtube-nocookie.com/embed/${this.#o}`,fetchpriority:"high",as:"document"}),this.#s.onerror=this.#a.onclick=()=>{this.createPlayer((()=>{setTimeout((()=>this.#a.classList.add("disabled")),200),this.#d.playVideo()}))},this.#a.ontransitionend=t=>{"opacity"===t.propertyName&&this.#a.classList.contains("disabled")&&this.#a.classList.add("hidden")},this.#s.setAttribute("src",this.#c[2]),setTimeout((()=>{this.createPlayer((()=>{setTimeout((()=>this.#a.classList.add("disabled")),200)}))}),300)):this.#e.classList.add("hidden")}attributeChangedCallback(t,e,n){switch(t=t.toLowerCase()){case"headline":(this.#i.innerHTML=n)?this.#i.classList.remove("hidden"):this.#i.classList.add("hidden");break;case"description":(this.#r.innerHTML=n)?this.#r.classList.remove("hidden"):this.#r.classList.add("hidden");break;case"src":n?(this.#o=n.match(o)[1],this.#c=[r(this.#o,""),r(this.#o,"mq"),r(this.#o,"hq"),r(this.#o,"sd"),r(this.#o,"maxres")],createPlayer((()=>{})),this.#r.classList.remove("hidden")):this.#e.classList.add("hidden")}}}const r=(t,e="sd")=>`https://i.ytimg.com/vi_webp/${t}/${e}default.webp`,a=({rel:t,href:e,as:n,fetchpriority:o,type:i})=>{const r=document.createElement("link");return r.setAttribute("rel",t),r.setAttribute("href",e),n&&r.setAttribute("as",n),o&&r.setAttribute("fetchpriority",o),i&&r.setAttribute("type",i),document.head.appendChild(r)};let s;const c=i.warmConnections=()=>!s&&(a({rel:"preconnect",href:"https://www.youtube-nocookie.com"}),a({rel:"preconnect",href:"https://www.google.com"}),a({rel:"preconnect",href:"https://googleads.g.doubleclick.net"}),a({rel:"preconnect",href:"https://static.doubleclick.net"}),s=!0);let d;setTimeout(c,100);const l=()=>{const t=document.createDocumentFragment();t.appendChild(document.createElement("style")).innerHTML="\n  :host {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n  }\n\n\n  span {\n    padding-bottom: 24px;\n  }\n \n  h2,\n  p,\n  span {\n    width: 100%;\n  }\n\n  h2 {\n    background-clip: text;\n    box-decoration-break: clone;\n    -webkit-background-clip: text;\n    -webkit-box-decoration-break: clone;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-box-decoration-break: clone;\n    -moz-text-fill-color: transparent;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(45deg, #9B51E0, #3DA5E0);\n  }\n\n  button:visited,\n  button:active, \n  button:disabled,\n  button {\n    opacity: 1;\n    text-decoration: none;\n    -webkit-decoration: none;\n    -webkit-text-decoration: none;\n    pointer-events: auto;\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  button:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  .video-container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.27198%;\n    background: transparent;\n  }\n\n  .video-container > button,\n  .video-container > iframe:first-of-type,\n  .video-container > div:first-of-type {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    background: transparent;\n    opacity: 1;\n    transition: 300ms;\n  }\n\n  .video-container > button::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='196' height='140' viewBox='0 0 196 140' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.24509 31.7267C2.32311 31.2065 2.39524 30.6912 2.46636 30.17C4.6182 14.4004 14.7856 4.57178 30.6956 2.83104C30.8832 2.81052 31.0521 2.79478 31.2402 2.77942C34.4172 2.51997 66.0961 -7.53969e-08 98 0C129.904 7.53968e-08 161.583 2.51996 164.76 2.77942C164.948 2.79478 165.117 2.81052 165.304 2.83104C181.438 4.59627 191.667 14.6785 193.62 30.8391C193.629 30.9167 193.637 30.9828 193.647 31.0603C193.834 32.5818 196 50.601 196 70C196 89.399 193.834 107.418 193.647 108.94C193.637 109.017 193.629 109.083 193.62 109.161C191.667 125.321 181.438 135.404 165.304 137.169C165.117 137.189 164.948 137.205 164.76 137.221C161.583 137.48 129.904 140 98 140C66.0961 140 34.4173 137.48 31.2402 137.221C31.0521 137.205 30.8832 137.189 30.6956 137.169C14.7856 135.428 4.6182 125.6 2.46636 109.83C2.39524 109.309 2.32311 108.793 2.24509 108.273C1.76204 105.053 0 91.8109 0 70C0 48.1891 1.76204 34.9471 2.24509 31.7267Z' fill='%23FF1A00'/%3E%3Cpath d='M132 70.5L79 101V40L132 70.5Z' fill='white'/%3E%3C/svg%3E%0A\");    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 68px auto;\n    filter: drop-shadow(0px 3px 10px #00000055);\n  }\n\n  .video-container > button > img {\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n  }\n\n  .disabled {\n    pointer-events: none;\n    cursor: none;\n    opacity: 0 !important;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  @media (hover: hover) and (pointer: fine), (-ms-high-contrast: active), (forced-colors: active) {\n    .video-container > button:not(.disabled):not(.hidden) > img,\n    .video-container > button:not(.disabled):not(.hidden):hover > img,\n    .video-container > button:not(.disabled):not(.hidden)::after,\n    .video-container > button:not(.disabled):not(.hidden):hover::after {\n      transition: 300ms;\n      opacity: 1;\n    }\n\n    .video-container > button:not(.disabled):not(.hidden):hover > img {\n      opacity: 0.7;\n    }\n\n    .video-container > button:not(.disabled):not(.hidden):hover::after {\n      transform: scale(1.1);\n    }\n  }\n  ",t.appendChild(document.createElement("h2")),t.appendChild(document.createElement("span")),t.appendChild(document.createElement("script"));const e=t.appendChild(document.createElement("div"));e.classList.add("video-container"),e.appendChild(document.createElement("div")).setAttribute("title","YouTube video embed");const n=e.appendChild(document.createElement("button")).appendChild(document.createElement("img"));return n.setAttribute("loading","lazy"),n.setAttribute("title","Click to start video"),n.setAttribute("alt","Youtube video thumbnail"),t};customElements.define("youtube-video",i),Object.freeze(Object.defineProperty(i,"YoutubeVideo",{value:i}))},909:()=>{let sideMenuScrollingDone=!0;const whileSideMenuToggled=()=>{sideMenuScrollingDone=!1;let t=document.body.style["overflow-x"]||null;document.body.style["overflow-x"]="hidden !important",setTimeout((()=>{sideMenuScrollingDone=!0,document.body.style["overflow-x"]=t}),320)};document.getElementById("side-menu-button").onclick=t=>{t.preventDefault(),t.stopPropagation(),document.body.classList.toggle("menu-opened"),document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),whileSideMenuToggled()};let menu=null,main=null;for(let t=0,e=document.body.childNodes,n=e.length,o;t!==n;++t)"DIV"===(o=e[t]).nodeName&&(main&&(menu=o)||(main=o));main.onclick=()=>{document.body.clientWidth<=560&&document.body.classList.contains("menu-opened")&&(document.body.classList.remove("menu-opened"),document.body.scrollLeft=0,whileSideMenuToggled())},document.body.addEventListener("scroll",(()=>{document.body.clientWidth<=800&&sideMenuScrollingDone&&(document.body.scrollLeft>-.5*Math.min(200,document.body.clientWidth)?document.body.classList.remove("menu-opened"):document.body.classList.add("menu-opened"))}));const close=t=>{t.preventDefault(),t.stopPropagation();const e=document.body.classList.contains("menu-opened");return e&&(document.body.classList.remove("menu-opened"),document.body.clientWidth<=800&&(document.body.scrollLeft=0),whileSideMenuToggled()),e},getOnclick=onclick=>event=>(close(event),"function"==typeof onclick||"string"==typeof onclick&&(onclick=eval(onclick))||(event=event.target.getAttribute("href"))&&(onclick=()=>{window.location.href=event}),onclick&&setTimeout((()=>onclick(event)),310));for(let t=0,e=menu.getElementsByTagName("a"),n=e.length,o;t!==n;++t)(o=e[t]).onclick=getOnclick(o.onclick);for(let t=0,e=menu.getElementsByTagName("button"),n=e.length,o;t!==n;++t)(o=e[t]).onclick=getOnclick(o.onclick)},732:()=>{"use strict";String.toCamelCase||Object.defineProperty(String,"toCamelCase",{value:function(t,e=""){let n="",o=!1;for(let i=0,r=t.length;i!==r;++i){const r=t.charAt(i);(r<"A"||r>"z"||r>"Z"&&r<"a")&&(o=!0)||!o&&(n+=r)||(n+=e+r.toUpperCase())&&(o=!1)}return n}}),String.prototype.toCamelCase||Object.defineProperty(String.prototype,"toCamelCase",{value:function(...t){return String.toCamelCase(this,...t)}}),String.toKebabCase||Object.defineProperty(String,"toKebabCase",{value:function(t,e="-",n,o){let i="",r=t.length;for(let n=0,o=r;n!==o;++n){const o=t.charCodeAt(n);(o<65||o>122||o>90&&o<97)&&(i+=e)||o>=65&&o<=90&&(i+=e+String.fromCharCode(o+32))||(i+=String.fromCharCode(o))}let a,s=0,c=i.length,d=c;for(a=Math.min(n||0,r);s!==a&&i.charAt(s)===e;++s);for(a=r-Math.min(o||0,r);c>a&&i.charAt(--c)===e;);return(s||c<d)&&i.slice(s,c+1)||i}}),String.prototype.toKebabCase||Object.defineProperty(String.prototype,"toKebabCase",{value:function(...t){return String.toKebabCase(this,...t)}}),String.decamelize||Object.defineProperty(String,"decamelize",{value:function(t,e=1/0,n=1/0){return t.toKebabCase("_",e,n)}}),String.prototype.decamelize||Object.defineProperty(String.prototype,"decamelize",{value:function(...t){return String.decamelize(this,...t)}}),String.toSnakeCase||Object.defineProperty(String,"toSnakeCase",{value:function(t,e=1/0,n=1/0){return t.toKebabCase("_",e,n)}}),String.prototype.toSnakeCase||Object.defineProperty(String.prototype,"toSnakeCase",{value:function(...t){return String.toSnakeCase(this,...t)}}),String.toPascalCase||Object.defineProperty(String,"toPascalCase",{value:function(t,e=""){const n=t.toCamelCase(e);return n.charAt(0).toUpperCase()+n.slice(1)}}),String.prototype.toPascalCase||Object.defineProperty(String.prototype,"toPascalCase",{value:function(...t){return String.toPascalCase(this,...t)}}),String.toHashTagCase||Object.defineProperty(String,"toHashTagCase",{value:function(t,e=""){let n="",o=!1;for(let i=0,r=t.length;i!==r;++i){const r=t.charAt(i);(r<"0"||r>"z"||r>"9"&&r<"A"||r>"Z"&&r<"a")&&(o=!0)||!o&&(n+=r)||(n+=e+r.toUpperCase())&&(o=!1)}return n}}),String.prototype.toHashTagCase||Object.defineProperty(String.prototype,"toHashTagCase",{value:function(...t){return String.toHashTagCase(this,...t)}}),String.toUserIdCase||Object.defineProperty(String,"toUserIdCase",{value:function(t){return t.toHashTagCase("-").toLowerCase().replace(/^\-+|\-+$|\-\-+/g,"")}}),String.prototype.toUserIdCase||Object.defineProperty(String.prototype,"toUserIdCase",{value:function(...t){return String.toUserIdCase(this,...t)}}),String.toHashTag||Object.defineProperty(String,"toHashTag",{value:function(t){return"#"+t.toHashTagCase()}}),String.prototype.toHashTag||Object.defineProperty(String.prototype,"toHashTag",{value:function(...t){return String.toHashTag(this,...t)}}),String.toTitleCase||Object.defineProperty(String,"toTitleCase",{value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),String.prototype.toTitleCase||Object.defineProperty(String.prototype,"toTitleCase",{value:function(...t){return String.toTitleCase(this,...t)}});const t=/\s+/g;String.toCapitalCase||Object.defineProperty(String,"toCapitalCase",{value:function(e){return e.split(t).map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" ")}}),String.prototype.toCapitalCase||Object.defineProperty(String.prototype,"toCapitalCase",{value:function(...t){return String.toCapitalCase(this,...t)}}),String.toQuote||Object.defineProperty(String,"toQuote",{value:function(t,e="❝ ",n=" ❞"){return`${e}${t}${n}`}}),String.prototype.toQuote||Object.defineProperty(String.prototype,"toQuote",{value:function(...t){return String.toQuote(this,...t)}}),String.toSocketHeaderKey||Object.defineProperty(String,"toSocketHeaderKey",{value:function(t){let e="",n=!1,o=0,i=t.length;for(;o!==i;++o){const i=t.charAt(o);(" "===i||"-"===i||"_"===i)&&(n=!0)&&(e+="-")||!n&&o&&(e+=i)||(e+=i.toUpperCase())&&(n=!1)}return e}}),String.prototype.toSocketHeaderKey||Object.defineProperty(String.prototype,"toSocketHeaderKey",{value:function(...t){return String.toSocketHeaderKey(this,...t)}});const e={geese:"goose",mice:"mouse",feet:"foot",teeth:"tooth",oxen:"ox",cacti:"cactus",cactus:"cactus",couscous:"couscous",octopus:"octopus"};String.toSingular||Object.defineProperty(String,"toSingular",{value:function(t){return`${(t=>{if(t.length<4)return t;const n=e[t];if(n)return n;const o=t.length-1,i=t.charAt(o),r=o-1,a=t.charAt(r),s=r-1,c=t.charAt(s);return"s"===i&&"s"!==a?"e"===a?"i"===c?t.slice(0,s)+"y":"v"===c?t.slice(0,s)+"f":"a"===c||"o"===c||"u"===c||"s"===c?t.slice(0,r):t.slice(0,o):t.slice(0,o):t})(t)}`}}),String.prototype.toSingular||Object.defineProperty(String.prototype,"toSingular",{value:function(...t){return String.toSingular(this,...t)}}),String.raw||Object.defineProperty(String,"raw",{value:function(t){return`${t}`}}),String.prototype.raw||Object.defineProperty(String.prototype,"raw",{value:function(...t){return String.raw(this,...t)}}),String.utf16To8||Object.defineProperty(String,"utf16To8",{value:function(){const t=(t,e)=>String.fromCharCode(parseInt(e,16));return function(e){try{return encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,t)}catch{return e}}}()}),String.prototype.utf16To8||Object.defineProperty(String.prototype,"utf16To8",{value:function(...t){return String.utf16To8(this,...t)}}),String.utf8To16||Object.defineProperty(String,"utf8To16",{value:function(){const t=t=>"%"+((t=t.charCodeAt())<16?"0":"")+t.toString(16).toUpperCase();return function(e){try{return decodeURIComponent(e.replace(/[\x00-),:-?[-^`{-\xFF]/g,t))}catch{return e}}}()}),String.prototype.utf8To16||Object.defineProperty(String.prototype,"utf8To16",{value:function(...t){return String.utf8To16(this,...t)}})},668:(t,e,n)=>{"use strict";n.d(e,{Ay:()=>i}),t=n.hmd(t);const o=(t,e=50,n=!1,o=!1)=>e>0&&function(...i){n?o=!0:(t.apply(this||{},i),n=!0,setTimeout((function(){o&&t.apply(this||{},i),o=n=!1}),e))}||t;Object.defineProperty(o,"DEFAULT_DELAY",{value:50});const i=Object.freeze(Object.defineProperty(o,"throttle",{value:o}));try{t.exports=o}catch{}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={};(()=>{"use strict";var t=__webpack_require__(668);const e=()=>{let t;try{return/iP(hone|ad|od)/.test(navigator.userAgent||"")||"ontouchstart"in document||"ontouchstart"in documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(t=matchMedia("(pointer:coarse)")||{})&&"(pointer:coarse)"===t.media&&!!t.matches}catch{}return!1},n=Object.freeze(Object.defineProperty(e,"hasTouchScreen",{value:e})),o=navigator.userAgent||navigator.vendor||window.opera||"",i=(t=o)=>/iP(hone|ad|od)/i.test(t),r=(t=o)=>/Android/i.test(t),a=(t=o)=>/BlackBerry/i.test(t),s=(t=o)=>/Opera Mini/i.test(t),c=(t=o)=>/IEMobile|Windows Phone|WPDesktop/i.test(t),d=(t=o)=>/webOS/i.test(t),l=(t=o)=>i(t)||r(t)||a(t)||s(t)||c(t)||d(t);l.isIOS=i,l.isAndroid=r,l.isBlackBerry=a,l.isOperaMobile=s,l.isWindowsMobile=c,l.isOtherMobile=d;const u=Object.freeze(Object.defineProperty(l,"isMobile",{value:l}));let h;const p=()=>{h&&clearTimeout(h);const t=document.querySelector('meta[name="viewport"]'),e=/iP(hone|ad|od)/.test(navigator.userAgent)?"":", interactive-widget=resizes-content";t&&t.setAttribute("content","width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=1, user-scalable=no"+e)},m=Object.freeze(Object.defineProperty(p,"touchScreenDetected",{value:p}));(n()||u())&&(h=setTimeout((()=>{p()}),1e4));const g=window.visualViewport,y=Math.max(document.documentElement&&document.documentElement.clientHeight||0,window.innerHeight||0);g&&(g.onresize=(0,t.Ay)((()=>{document.documentElement.style.setProperty("--top",`${g.offsetTop}px`),document.documentElement.style.setProperty("--height",`${g.height}px`);const t=Math.max(g.offsetTop||0,y-(g.height||0));document.body.classList[t?"add":"remove"]("keyboard-up")}))),(()=>{let e;window.onresize=(0,t.Ay)((()=>{document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),e||document.body.classList.remove("transition-on"),clearTimeout(e),e=setTimeout((()=>{document.body.classList.add("transition-on"),e=0}),100)})),setTimeout((()=>{document.body.classList.add("transition-on")}),100),document.addEventListener("click",(t=>t.target===document.body&&(t.preventDefault(),t.stopPropagation(),document.activeElement.blur())));const n=document.querySelectorAll("[data-background-image]");for(let t,e,o=0,i=n.length;o!==i;++o)(e=(t=n[o]).getAttribute("data-background-image"))&&(t.style.backgroundImage=`url("${e}")`)})(),__webpack_require__(732);const b=(t,e={})=>{if(!t||"object"!=typeof t)return e;let n;if(t instanceof HTMLFormElement||(t=>{if(!t||"object"!=typeof t)return!1;if(t.target&&t.target instanceof HTMLFormElement)return!0;try{return t instanceof SyntheticBaseEvent||t instanceof SubmitEvent}catch{return t instanceof SubmitEvent}})(t)&&(n=t.submitter||t.relatedTarget&&("submit"===(t.relatedTarget.type||t.relatedTarget.getAttribute("type"))||"button"===t.relatedTarget.nodeName.toLowerCase())&&t.relatedTarget,t=t.target),n&&(n={name:n.name||n.getAttribute("name"),value:n.value||n.getAttribute("value")},n.value||(n.value=!!n.name)),!(t instanceof HTMLFormElement))return e;const o={};t=new FormData(t),n&&n.name&&t.append(n.name,n.value);for(const e of t){const[t,n]=e;("number"==typeof n||"boolean"==typeof n||n)&&(o[t.toCamelCase()]=n)}return o},f=Object.freeze(Object.defineProperty(b,"createFormData",{value:b}));__webpack_require__(254),__webpack_require__(909);const v=Math.PI,w=v+v,C=w+w,S=C+C,k=(x=document.createElement("canvas").getContext("2d"),(window.devicePixelRatio||1)/(x.webkitBackingStorePixelRatio||x.mozBackingStorePixelRatio||x.msBackingStorePixelRatio||x.oBackingStorePixelRatio||x.backingStorePixelRatio||1));var x;class _{x;y;constructor(t,e){this.x=t||0,this.y=e||0}toString(){return JSON.stringify(this,null,2)}}const P=()=>{};class T{#u;#h;#p;#m;#g=0;#y;#b;#f;#v=!1;#w;#C=0;#S=Math.random()*C;x;y;r=0;sx=1;sy=1;constructor({p0:t,c0:e,c1:n,p1:o,delay:i,duration:r,color:a,draw:s,onParticuleDone:c}){this.#u=z(t,this),this.#h=z(e,this),this.#p=z(n,this),this.#m=z(o,this),this.x=this.#u.x,this.y=this.#u.y,this.#C=Math.max(z(i,this)||0,0),this.#y=Math.max(z(r,this)*(.5+.5*Math.random())||3e3+2e3*Math.random(),0),this.#b=z(a,this)||`#${Math.floor(16777215*Math.random()).toString(16)}`,this.#f=O(z([s],this)),Object.defineProperty(this,"__set_on_done__",{value:function(t){this.#w="function"==typeof t&&t||P}}),this.__set_on_done__(c)}get done(){return this.#v}get color(){return this.#b}getPosition(t){const e=t(this.#g-this.#C,1,0,this.#y);return[e,D(e,this.#u,this.#h,this.#p,this.#m)]}update(t,e){const n=this.#C,o=this.#y+n;if(t=z(t),e=z([e]),(this.#g=this.#g+t)>o)return this.#g=o,this.#v=!0,this.#w(this),this;if(this.#g<n)return this;const[i,r]=this.getPosition(e),a=r.x-this.x,s=r.y-this.y;return this.r=Math.atan2(s,a)+this.#S,this.sy=Math.sin((S+this.#S)*i),this.x=r.x,this.y=r.y,this.#v=!1,this}kill(){return this.#v=!0,this.#w(this),this}draw(t,...e){if(this.#g<this.#C||this.#v)return this;t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.scale(this.sx,this.sy);const n=e[0];return"function"==typeof n?n(t,this.#b,...e.slice(1)):this.#f(t,this.#b,...e),t.restore(),this}toString(){return JSON.stringify(this,null,2)}}class A{#k=[];#x=null;#_=null;#P;#T=0;#A;constructor(t,e){"string"==typeof t&&(t=document.getElementById(t)),t&&t instanceof HTMLElement&&"confettis-canvas"===t.tagName.toLowerCase()&&(t=t.canvas),t&&"object"==typeof t&&!(e||t instanceof HTMLCanvasElement)&&(t=(e=t).canvas),this.#P=new H(e),t&&t instanceof HTMLCanvasElement&&!this.#P.temporary(this.#x=t,this.#_=this.#x.getContext("2d"))||(this.#P.temporary=!0);const n=this.#P.onDone,o=this.#P.onParticuleDone,i=this;this.#P.onDone=function(t=!1){return"function"==typeof n&&n(this),++i.#T<i.#P.numIterations&&!t&&(i.init(),i.start())||i.#P.temporary&&(i.#x&&(i.#x.remove(),i.#x=null),i.#_=null,i.#k=[]),i},"function"==typeof o&&(this.#P.onParticuleDone=function(t){return o(t,this)}),this.#P.temporary||(this.#k=this.#P.initParticles(this.#P)),Object.freeze(this.#P),this.#P.autoStart&&this.start()}get active(){return Array.isArray(this.#k)&&this.#k.length||0}get done(){return!this.active}get fullyDone(){return!this.active&&this.#T>=this.#P.numIterations}get options(){return this.#P}get temporary(){return this.#P.temporary}get iteration(){return this.#T}get numIterations(){return this.#P.numIterations}get playing(){return!!this.#A}init(t){return t=t&&new H({...this.#P,...t})||this.#P,this.#x||(this.#x=document.body.appendChild(document.createElement("canvas")),this.#x.style="width: 100dvw; height: 100dvh; position: fixed; z-index: 999999; top: 0; left: 0; pointer-events: none;",this.#x.width=this.#P.viewWidth*k,this.#x.height=this.#P.viewHeight*k,this.#_=this.#x.getContext("2d"),this.#_.scale(k,k)),this.#k&&this.#k.length||(this.#k=t.initParticles(t)),this}start(t){return this.#k&&this.#k.length&&this.#x&&this||this.init(t),requestAnimationFrame((()=>this.animate())),this}animate(){return this.#A=setTimeout((()=>{let t,e=0,n=0,o=this.#k,i=o.length;for(this.#_.clearRect(0,0,this.#P.viewWidth,this.#P.viewHeight);n!==i;++n)(t=o[n]).draw(this.#_).update(this.#P.timeStep,this.#P.timingFunc).done||(o[e++]=t);(o.length=e)&&requestAnimationFrame((()=>this.animate()))||this.#P.onDone()}),this.#P.timeStep),this}pause(){return clearTimeout(this.#A),this.#A=void 0,this}cancel(){return this.pause(),this.#P.onDone(!0),this}restart(t){return this.cancel().start(t)}toString(){return JSON.stringify(this,null,2)}}const L=A.createConfettis=(...t)=>new A(...t),M=Object.freeze({get default(){return this.rectangle},rectangle:(t,e,n=8,o=6)=>(t.fillStyle=e,t.fillRect(.5*-n,.5*-o,n,o))}),O=t=>"function"==typeof t&&t||"string"==typeof t&&M[I(t)]||M.default,j=Object.freeze({get default(){return this.linear},linear:(t,e,n,o)=>e*t/o+n,incubic:(t,e,n,o)=>e*(t/=o)*t*t+n,outcubic:(t,e,n,o)=>e*((t=t/o-1)*t*t+1)+n,inoutcubic:(t,e,n,o)=>(t*=2/o)<1?.5*e*t*t*t+n:.5*e*((t-=2)*t*t+2)+n,inback:(t,e,n,o,i=1.70158)=>e*(t/=o)*t*((i+1)*t-i)+n}),E=/[\-\_\s]+/g,I=t=>(t||"").toLowerCase().replace(E,"");class H{constructor(t){const{ease:e="outCubic",easing:n=e,timing:o=n,timingFunc:i=o,step:r=10,timeStep:a=r,temp:s=!1,temporary:c=s,particles:d,confettis:l=d,init:u=l,initParticles:h=u,n:p=128,num:m=p,length:g=m,numParticles:y=g,w:b=window.innerWidth||512,width:f=b,viewWidth:v=f,h:w=window.innerHeight||512,height:C=w,viewHeight:S=C,x:k=.5*v,cx:x=k,y:P=.5*S,cy:T=P,center:A=new _(x,T),col:L,color:M=L,shape:E,draw:H=E,oncomplete:D,onComplete:z=D,done:F=z,ondone:N=F,onDone:q=N,onparticulecomplete:W,onParticuleComplete:U=W,onconfettisdone:$=U,onConfettisDone:R=$,onparticuledone:K=$,onParticuleDone:V=K,loop:Y=1,loops:Q=Y,iters:Z=Q,numIters:J=Z,iterations:G=J,numIterations:X=G,start:tt=!1,autostart:et=tt,autoStart:nt=et,...ot}="object"==typeof t&&t||"string"==typeof t&&B[I(t)]||B.default;var it;Object.assign(this,{timingFunc:(it=i,"function"==typeof it&&it||"string"==typeof it&&j[I(it)]||j.default),timeStep:a,temporary:c,numParticles:Math.max(y||0,0),initParticles:Array.isArray(h)&&(()=>h)||"function"==typeof h&&h||B.default.initParticles,viewWidth:v,viewHeight:S,center:A,color:M,draw:O(H),onDone:q,onParticuleDone:V,numIterations:Math.max(X,1),autoStart:nt,...ot})}toString(){return JSON.stringify(this,null,2)}}const B={get default(){return this.explosion},explosion:new H({timingFunc:"outCubic",initParticles:({numParticles:t=128,viewWidth:e,viewHeight:n,center:o,...i})=>{const r=Math.max(t||0,0),a=new Array(r);for(let t=0;t!==r;++t)a[t]=new T({p0:o,c0:new _(...F(Math.random()*w,(.9*Math.random()+.1)*Math.min(e,n),.5*e,.5*n)),c1:new _(Math.random()*e,Math.random()*n),p1:new _(Math.random()*e,n+64),...i});return a}})};for(const t in B)Object.freeze(B[t]);Object.freeze(B);const D=(t,e,n,o,i,r=new _)=>{const a=1-(t||(t=0)),s=a*a,c=s*a,d=3*t*s,l=t*t,u=3*l*a,h=l*t;return r.x=c*e.x+d*n.x+u*o.x+h*i.x,r.y=c*e.y+d*n.y+u*o.y+h*i.y,r},z=(t,...e)=>(Array.isArray(t)&&(t=t.flat()).length?t[1===t.length?0:Math.round(Math.random()*(t.length-1))]:"function"==typeof t?t(...e):t)||0,F=(t,e,n=0,o=0)=>[e*Math.cos(t)+n,e*Math.sin(t)+o];let N,q;Object.freeze(Object.defineProperty(A,"Confettis",{value:A}));const W=document.getElementById("thinking"),U=document.getElementById("thinking-text"),$=["🙇🏻‍♀️ Thinking hard...","🙆🏻‍♀️ Almost there...","🤦🏻‍♀️ Maybe something's wrong..."],R=t=>t||0===t||!1===t,K=(t,e,n,o=0,i=(e instanceof Text?"nodeValue":"textContent"))=>(o>=0||(o=0),o||Array.isArray(t)||(t=[...`${t||""}`]),o=Math.min(o,t.length),e[i]=t.slice(0,o).join("")+" ⬤",o<t.length&&setTimeout((()=>K(t,e,n,++o)),1+Math.floor(30*Math.random()))||(e[i]=t.join(""),"function"==typeof n&&n()),e),V=t=>t||0===t||!1===t,Y=(t,e,n,o=0,i,r)=>(o>=0||(o=0),o||Array.isArray(t)||(t=[t]),t=t.filter(V),(o=Math.min(o,t.length))<t.length&&(("number"==typeof(i=t[o])||"boolean"==typeof i)&&(i=`${i}`),o&&Array.isArray(i)&&((r=document.createElement("div")).classList.add("br"),e.appendChild(r)),"object"!=typeof i?e.appendChild(K(i,document.createTextNode(""),(()=>Y(t,e,n,++o,null,i)))):Array.isArray(i)&&(i=i.filter(V)).length?(i.length>1&&((r=document.createElement("pre")).classList.add("row"),e.appendChild(r))||(r=e),Y(i,r,(()=>Y(t,e,n,++o,null,i)))):(Array.isArray(i)||!i||"button"===(r=(i.type||"").toLowerCase())&&((r=document.createElement("button")).textContent=i.text,r.onclick=t=>{switch(t.preventDefault(),t.stopPropagation(),(i.action||"").toLowerCase()){case"nav":case"goto":case"navigate":const t=i.url||i.uri||i.href;"back"===t||-1===t?window.history&&window.history.length&&window.history.back&&window.history.back():t&&(window.location.href=t);break;case"back":window.history&&window.history.length&&window.history.back&&window.history.back();break;default:const e=i.send||i.text;e&&(input.value=e,("function"==typeof i.onsubmit||i.form&&(i.onsubmit=()=>form.requestSubmit()))&&i.onsubmit())}},e.appendChild(r))||("img"===r||"image"===r)&&i.src&&((r=document.createElement("img")).setAttribute("src",i.src),r.setAttribute("alt",(i.alt||i.title||i.text)&&`Image of ${i.alt||i.title||i.text}`||"image"),r.setAttribute("title",(i.title||i.alt||i.text)&&`Image of ${i.title||i.alt||i.text}`||"image"),r.setAttribute("loading",i.loading||"lazy"),i.class&&r.classList.add(...i.class.split(/\s+/g)),i.style&&(r.style.cssText+=i.style),e.appendChild(r))||("yt"===r||"youtube"===r)&&i.src&&((r=document.createElement("youtube-video")).setAttribute("src",i.src),i.headline&&r.setAttribute("headline",i.headline),(i.description||i.text)&&r.setAttribute("description",i.description||i.text),e.appendChild(r)),setTimeout((()=>Y(t,e,n,++o,null,i)),20+Math.floor(20*Math.random()))))||"function"==typeof n&&n(),e);Y.writeText=K;const Q=Object.freeze(Object.defineProperty(Y,"writeContent",{value:Y})),Z=t=>{t.stopPropagation(),"dialog"===t.target.tagName.toLowerCase()&&t.target.close()};for(let t=0,e=document.getElementsByTagName("dialog"),n=e.length;t!==n;++t)e[t].onclick=Z;(()=>{const t=document.getElementById("agent"),e=document.getElementById("text"),n=document.getElementById("form"),o=document.getElementById("input"),i=document.getElementById("cancel-button"),r=document.getElementById("main-content"),a=document.getElementById("side-menu"),s=document.getElementById("index"),c=document.getElementById("home"),d=(t,...n)=>Q(t,e,...n),l=()=>{document.activeElement||h(),o.disabled=null,i.disabled=!0},u=()=>{return t=l,clearTimeout(q),U.innerHTML="",W.classList.add("hidden"),W.classList.remove("warning"),W.classList.remove("error"),void("function"==typeof t&&t());var t},h=o.onblur=()=>((t,e=1e4)=>{t&&(N=setTimeout((()=>{t.classList.add("pulsing"),t.classList.add("shaking")}),e))})(o,1e4),p=o.onfocus=()=>{return t=o,clearTimeout(N),void(t&&(t.classList.remove("pulsing"),t.classList.remove("shaking")));var t};var g;t.onclick=("string"==typeof(g="agent-dialog")&&(g=document.getElementById(g)),t=>{t.stopPropagation(),g.showModal()});const y=t=>{u(),d(t&&t.timeout&&["🤷🏻‍♀️  I could not figure it out on time...\n\nAnything else I can do for you?",[{type:"button",text:"yes",send:"I want to try again",form:n},{type:"button",text:"not now",send:"I want to try later",form:n},{type:"button",text:"tutorials",action:"navigate",href:s?"pages/help.html":"./help.html"}]]||["💁🏻‍♀️  Ok, I'll stop thinking about it.\n\nAnything else on your mind?",[{type:"button",text:"yes",send:"I have something to add",form:n},{type:"button",text:"no",send:"nothing else to add",form:n},{type:"button",text:"learn more",action:"navigate",href:s?"pages/help.html":"./help.html"}]])};let b;n.onsubmit=t=>{t.preventDefault(),t.stopPropagation(),n.checkValidity(),n.reportValidity();const r=f(t),a=r.msg||r.demoMsg,s=r.demoCancel,c=!(!r.demoMsg&&!s);for((s||r.cancel)&&(r.cancel=!0),(r.isDemo=c)&&(delete r.demoMsg,delete r.demoCancel,r.msg=a),o.value="",console.log(r);e.lastChild;)e.removeChild(e.lastChild);return r.cancel?(y(r),clearTimeout(b)):(((t,e,n)=>{Array.isArray(t)||(t=[t].filter(R)),W.classList.remove("hidden"),e(),q=setTimeout((()=>{U.innerHTML=t[0]||$[0],q=setTimeout((()=>{U.innerHTML=t[1]||$[1],W.classList.add("warning"),q=setTimeout((()=>{U.innerHTML=t[2]||$[2],W.classList.add("error"),q=setTimeout((()=>n()),5e3)}),1e4)}),1e4)}),5e3)})(null,(()=>(p(),o.disabled=!0,i.disabled=null)),(()=>(y({...r,timeout:!0}),clearTimeout(b)))),b=setTimeout((()=>{u(),d("Ok. Roger that.")}),5e4)),!1},document.addEventListener("keydown",(t=>{document.activeElement!==o&&1===t.key.length&&(t.stopPropagation(),t.preventDefault(),o.focus(),o.value=(o.value||"")+t.key)}));const v=()=>{m(),r.classList.remove("hidden"),a.classList.remove("hidden"),s===document.body&&d(["Welcome to PostRocket 🚀\nLet's unleash your social media together!\n\nDo you have a website?",[{type:"button",text:"yes",send:"I have a website",form:n},{type:"button",text:"no",send:"I do not have a website",form:n},{type:"button",text:"help me",action:"navigate",href:"pages/help.html"}],[{type:"image",class:"small",src:"https://media.tenor.com/NtzA1v_UCkEAAAAj/bork.gif",title:"dog barking"}],[{type:"youtube",src:"https://www.youtube.com/watch?v=wbZBVu1AQSQ"}]])},w=["What can I help you with today?"],C=(document.referrer||"").toLowerCase(),S=(!C||C.includes("postrocket")&&(C.includes("account-creation.html")||C.includes("account-login.html")||C.includes("index.html")||!C.includes(".html")))&&!((decodeURIComponent(document.cookie)||"").match("postrocket_home_intro=1")||[]).length;c===document.body&&(S&&(document.cookie="__Secure-postrocket_home_intro=1; Secure; Path=/; SameSite=Strict",d(["🎉  Welcome!\n\n",...w],(()=>L({color:["#BF9B30","#FFBF00","#A67C00","#C0C0C0","#B5B7BB","#75777B"],duration:5e3,timeStep:10,autoStart:!0}))))||d(w));const k=document.getElementById("intro");let x;k&&(k.onanimationend=t=>{"bg"===t.animationName&&(k.close(),h())},k.onclick=t=>{t.stopPropagation(),v(),clearTimeout(x),k.close()},x=setTimeout((()=>{v(),h()}),(decodeURIComponent(document.cookie)||"").includes("postrocket_index_intro=1")?100:13e3))||(v(),h()),setTimeout((()=>{document.cookie="__Host-postrocket_index_intro=1; Secure; Path=/"}),1e4)})()})()})();