(()=>{"use strict";var e={60:(e,t,o)=>{var n=o(265),i=o(580);let r;const c=()=>{r&&clearTimeout(r);const e=document.querySelector('meta[name="viewport"]'),t=/iP(hone|ad|od)/.test(navigator.userAgent)?"":", interactive-widget=resizes-content";e&&e.setAttribute("content","width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=1, user-scalable=no"+t)};Object.freeze(Object.defineProperty(c,"touchScreenDetected",{value:c})),((0,n.A)()||(0,i.Ay)())&&(r=setTimeout((()=>{c()}),1e4))},265:(e,t,o)=>{o.d(t,{A:()=>i});const n=()=>{let e;try{return/iP(hone|ad|od)/.test(navigator.userAgent||"")||"ontouchstart"in document||"ontouchstart"in documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(e=matchMedia("(pointer:coarse)")||{})&&"(pointer:coarse)"===e.media&&!!e.matches}catch{}return!1},i=Object.freeze(Object.defineProperty(n,"hasTouchScreen",{value:n}))},580:(e,t,o)=>{o.d(t,{Ay:()=>u});const n=navigator.userAgent||navigator.vendor||window.opera||"",i=(e=n)=>/iP(hone|ad|od)/i.test(e),r=(e=n)=>/Android/i.test(e),c=(e=n)=>/BlackBerry/i.test(e),d=(e=n)=>/Opera Mini/i.test(e),s=(e=n)=>/IEMobile|Windows Phone|WPDesktop/i.test(e),a=(e=n)=>/webOS/i.test(e),l=(e=n)=>i(e)||r(e)||c(e)||d(e)||s(e)||a(e);l.isIOS=i,l.isAndroid=r,l.isBlackBerry=c,l.isOperaMobile=d,l.isWindowsMobile=s,l.isOtherMobile=a;const u=Object.freeze(Object.defineProperty(l,"isMobile",{value:l}))},668:(e,t,o)=>{o.d(t,{Ay:()=>i}),e=o.hmd(e);const n=(e,t=50,o=!1,n=!1)=>t>0&&function(...i){o?n=!0:(e.apply(this||{},i),o=!0,setTimeout((function(){n&&e.apply(this||{},i),n=o=!1}),t))}||e;Object.defineProperty(n,"DEFAULT_DELAY",{value:50});const i=Object.freeze(Object.defineProperty(n,"throttle",{value:n}));try{e.exports=n}catch{}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n](r,r.exports,o),r.loaded=!0,r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n=o(668);o(60);const i=window.visualViewport,r=Math.max(document.documentElement&&document.documentElement.clientHeight||0,window.innerHeight||0);i&&(i.onresize=(0,n.Ay)((()=>{document.documentElement.style.setProperty("--top",`${i.offsetTop}px`),document.documentElement.style.setProperty("--height",`${i.height}px`);const e=Math.max(i.offsetTop||0,r-(i.height||0));document.body.classList[e?"add":"remove"]("keyboard-up")}))),(()=>{let e;window.onresize=(0,n.Ay)((()=>{document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),e||document.body.classList.remove("transition-on"),clearTimeout(e),e=setTimeout((()=>{document.body.classList.add("transition-on"),e=0}),100)})),setTimeout((()=>{document.body.classList.add("transition-on")}),100),document.addEventListener("click",(e=>e.target===document.body&&(e.preventDefault(),e.stopPropagation(),document.activeElement.blur())));const t=document.querySelectorAll("[data-background-image]");for(let e,o,n=0,i=t.length;n!==i;++n)(o=(e=t[n]).getAttribute("data-background-image"))&&(e.style.backgroundImage=`url("${o}")`)})(),(()=>{const e=(e,t="../index.html",o=!0)=>()=>{o&&window.history&&window.history.length&&window.history.back&&(window.history.back(),1)||(window.location.href=e||document.referrer||t||"../index.html")};let t=document.getElementById("back");t&&(t.onclick=e(null,"../index.html",!0)),t=document.getElementById("back-home"),t&&(t.onclick=e("../index.html","../index.html",t.hasAttribute("data-decrement-history")))})()})();