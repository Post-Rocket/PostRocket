(()=>{"use strict";var __webpack_modules__={637:(t,e,n)=>{n.d(e,{Ac:()=>p});const i=Math.PI,o=i+i,r=o+o,a=r+r,s=(c=document.createElement("canvas").getContext("2d"),(window.devicePixelRatio||1)/(c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1));var c;class d{x;y;constructor(t,e){this.x=t||0,this.y=e||0}toString(){return JSON.stringify(this,null,2)}}const l=()=>{};class u{#t;#e;#n;#i;#o=0;#r;#a;#s;#c=!1;#d;#l=0;#u=Math.random()*r;x;y;r=0;sx=1;sy=1;constructor({p0:t,c0:e,c1:n,p1:i,delay:o,duration:r,color:a,draw:s,onParticuleDone:c}){this.#t=C(t,this),this.#e=C(e,this),this.#n=C(n,this),this.#i=C(i,this),this.x=this.#t.x,this.y=this.#t.y,this.#l=Math.max(C(o,this)||0,0),this.#r=Math.max(C(r,this)*(.5+.5*Math.random())||3e3+2e3*Math.random(),0),this.#a=C(a,this)||`#${Math.floor(16777215*Math.random()).toString(16)}`,this.#s=g(C([s],this)),Object.defineProperty(this,"__set_on_done__",{value:function(t){this.#d="function"==typeof t&&t||l}}),this.__set_on_done__(c)}get done(){return this.#c}get color(){return this.#a}getPosition(t){const e=t(this.#o-this.#l,1,0,this.#r);return[e,w(e,this.#t,this.#e,this.#n,this.#i)]}update(t,e){const n=this.#l,i=this.#r+n;if(t=C(t),e=C([e]),(this.#o=this.#o+t)>i)return this.#o=i,this.#c=!0,this.#d(this),this;if(this.#o<n)return this;const[o,r]=this.getPosition(e),s=r.x-this.x,c=r.y-this.y;return this.r=Math.atan2(c,s)+this.#u,this.sy=Math.sin((a+this.#u)*o),this.x=r.x,this.y=r.y,this.#c=!1,this}kill(){return this.#c=!0,this.#d(this),this}draw(t,...e){if(this.#o<this.#l||this.#c)return this;t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.scale(this.sx,this.sy);const n=e[0];return"function"==typeof n?n(t,this.#a,...e.slice(1)):this.#s(t,this.#a,...e),t.restore(),this}toString(){return JSON.stringify(this,null,2)}}class h{#h=[];#p=null;#m=null;#g;#y=0;#b;constructor(t,e){"string"==typeof t&&(t=document.getElementById(t)),t&&t instanceof HTMLElement&&"confettis-canvas"===t.tagName.toLowerCase()&&(t=t.canvas),t&&"object"==typeof t&&!(e||t instanceof HTMLCanvasElement)&&(t=(e=t).canvas),this.#g=new v(e),t&&t instanceof HTMLCanvasElement&&!this.#g.temporary(this.#p=t,this.#m=this.#p.getContext("2d"))||(this.#g.temporary=!0);const n=this.#g.onDone,i=this.#g.onParticuleDone,o=this;this.#g.onDone=function(t=!1){return"function"==typeof n&&n(this),++o.#y<o.#g.numIterations&&!t&&(o.init(),o.start())||o.#g.temporary&&(o.#p&&(o.#p.remove(),o.#p=null),o.#m=null,o.#h=[]),o},"function"==typeof i&&(this.#g.onParticuleDone=function(t){return i(t,this)}),this.#g.temporary||(this.#h=this.#g.initParticles(this.#g)),Object.freeze(this.#g),this.#g.autoStart&&this.start()}get active(){return Array.isArray(this.#h)&&this.#h.length||0}get done(){return!this.active}get fullyDone(){return!this.active&&this.#y>=this.#g.numIterations}get options(){return this.#g}get temporary(){return this.#g.temporary}get iteration(){return this.#y}get numIterations(){return this.#g.numIterations}get playing(){return!!this.#b}init(t){return t=t&&new v({...this.#g,...t})||this.#g,this.#p||(this.#p=document.body.appendChild(document.createElement("canvas")),this.#p.style="width: 100dvw; height: 100dvh; position: fixed; z-index: 999999; top: 0; left: 0; pointer-events: none;",this.#p.width=this.#g.viewWidth*s,this.#p.height=this.#g.viewHeight*s,this.#m=this.#p.getContext("2d"),this.#m.scale(s,s)),this.#h&&this.#h.length||(this.#h=t.initParticles(t)),this}start(t){return this.#h&&this.#h.length&&this.#p&&this||this.init(t),requestAnimationFrame((()=>this.animate())),this}animate(){return this.#b=setTimeout((()=>{let t,e=0,n=0,i=this.#h,o=i.length;for(this.#m.clearRect(0,0,this.#g.viewWidth,this.#g.viewHeight);n!==o;++n)(t=i[n]).draw(this.#m).update(this.#g.timeStep,this.#g.timingFunc).done||(i[e++]=t);(i.length=e)&&requestAnimationFrame((()=>this.animate()))||this.#g.onDone()}),this.#g.timeStep),this}pause(){return clearTimeout(this.#b),this.#b=void 0,this}cancel(){return this.pause(),this.#g.onDone(!0),this}restart(t){return this.cancel().start(t)}toString(){return JSON.stringify(this,null,2)}}const p=h.createConfettis=(...t)=>new h(...t),m=Object.freeze({get default(){return this.rectangle},rectangle:(t,e,n=8,i=6)=>(t.fillStyle=e,t.fillRect(.5*-n,.5*-i,n,i))}),g=t=>"function"==typeof t&&t||"string"==typeof t&&m[f(t)]||m.default,y=Object.freeze({get default(){return this.linear},linear:(t,e,n,i)=>e*t/i+n,incubic:(t,e,n,i)=>e*(t/=i)*t*t+n,outcubic:(t,e,n,i)=>e*((t=t/i-1)*t*t+1)+n,inoutcubic:(t,e,n,i)=>(t*=2/i)<1?.5*e*t*t*t+n:.5*e*((t-=2)*t*t+2)+n,inback:(t,e,n,i,o=1.70158)=>e*(t/=i)*t*((o+1)*t-o)+n}),b=/[\-\_\s]+/g,f=t=>(t||"").toLowerCase().replace(b,"");class v{constructor(t){const{ease:e="outCubic",easing:n=e,timing:i=n,timingFunc:o=i,step:r=10,timeStep:a=r,temp:s=!1,temporary:c=s,particles:l,confettis:u=l,init:h=u,initParticles:p=h,n:m=128,num:b=m,length:v=b,numParticles:w=v,w:C=window.innerWidth||512,width:S=C,viewWidth:k=S,h:T=window.innerHeight||512,height:P=T,viewHeight:x=P,x:A=.5*k,cx:E=A,y:M=.5*x,cy:I=M,center:O=new d(E,I),col:L,color:j=L,shape:D,draw:B=D,oncomplete:H,onComplete:W=H,done:z=W,ondone:U=z,onDone:R=U,onparticulecomplete:q,onParticuleComplete:F=q,onconfettisdone:K=F,onConfettisDone:N=K,onparticuledone:$=K,onParticuleDone:V=$,loop:Y=1,loops:Q=Y,iters:Z=Q,numIters:J=Z,iterations:G=J,numIterations:X=G,start:tt=!1,autostart:et=tt,autoStart:nt=et,...it}="object"==typeof t&&t||"string"==typeof t&&_[f(t)]||_.default;var ot;Object.assign(this,{timingFunc:(ot=o,"function"==typeof ot&&ot||"string"==typeof ot&&y[f(ot)]||y.default),timeStep:a,temporary:c,numParticles:Math.max(w||0,0),initParticles:Array.isArray(p)&&(()=>p)||"function"==typeof p&&p||_.default.initParticles,viewWidth:k,viewHeight:x,center:O,color:j,draw:g(B),onDone:R,onParticuleDone:V,numIterations:Math.max(X,1),autoStart:nt,...it})}toString(){return JSON.stringify(this,null,2)}}const _={get default(){return this.explosion},explosion:new v({timingFunc:"outCubic",initParticles:({numParticles:t=128,viewWidth:e,viewHeight:n,center:i,...r})=>{const a=Math.max(t||0,0),s=new Array(a);for(let t=0;t!==a;++t)s[t]=new u({p0:i,c0:new d(...S(Math.random()*o,(.9*Math.random()+.1)*Math.min(e,n),.5*e,.5*n)),c1:new d(Math.random()*e,Math.random()*n),p1:new d(Math.random()*e,n+64),...r});return s}})};for(const t in _)Object.freeze(_[t]);Object.freeze(_);const w=(t,e,n,i,o,r=new d)=>{const a=1-(t||(t=0)),s=a*a,c=s*a,l=3*t*s,u=t*t,h=3*u*a,p=u*t;return r.x=c*e.x+l*n.x+h*i.x+p*o.x,r.y=c*e.y+l*n.y+h*i.y+p*o.y,r},C=(t,...e)=>(Array.isArray(t)&&(t=t.flat()).length?t[1===t.length?0:Math.round(Math.random()*(t.length-1))]:"function"==typeof t?t(...e):t)||0,S=(t,e,n=0,i=0)=>[e*Math.cos(t)+n,e*Math.sin(t)+i];Object.freeze(Object.defineProperty(h,"Confettis",{value:h}))},254:(t,e,n)=>{const i=/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;class o extends HTMLElement{#f;#v;#_;#w;#C;#S;#k;#T;#P=[];#x;#A;constructor(){super(),d||(d=l());const t=this.attachShadow({mode:"closed"});t.appendChild(d.cloneNode(!0)),this.#C=t.childNodes[1],this.#S=t.childNodes[2],this.#f=t.childNodes[3],this.#v=t.childNodes[4],this.#_=this.#v.firstChild,this.#k=this.#v.childNodes[1],this.#T=this.#k.firstChild,window.YT||this.#f.setAttribute("src","https://www.youtube.com/iframe_api")}static get isApiLoaded(){return window.YT}createPlayer(t){return!window.YT||this.#A||("function"==typeof t||(t=()=>{this.#x.playVideo()}),this.#A=!0,window.YT.ready((()=>{this.#x=new window.YT.Player(this.#_,{host:"https://www.youtube-nocookie.com",height:196,width:333,videoId:this.#w,playerVars:{playsinline:1,theme:"dark",autohide:2,modestbranding:1},events:{onReady:(...e)=>{(this.#_=this.#v.firstChild).setAttribute("allow","autoplay; fullscreen"),t(...e)},onError:()=>{this.#A=!1}}})}))),this}connectedCallback(){let t;(this.#C.innerHTML=this.getAttribute("headline"))||this.#C.classList.add("hidden"),(this.#S.innerHTML=this.getAttribute("description"))||this.#S.classList.add("hidden"),(t=this.getAttribute("src"))?(this.#w=t.match(i)[1],this.#P=[r(this.#w,""),r(this.#w,"mq"),r(this.#w,"hq"),r(this.#w,"sd"),r(this.#w,"maxres")],a({rel:"prefetch",href:`https://www.youtube-nocookie.com/embed/${this.#w}`,fetchpriority:"high",as:"document"}),a({rel:"prefetch",href:this.#P[3],fetchpriority:"high",as:"image",type:"image/webp"}),this.#T.onload=()=>{this.#T.getAttribute("src")===this.#P[3]||setTimeout(this.#T.setAttribute("src",this.#P[3]),500)},this.#T.onerror=this.#k.onclick=()=>{this.createPlayer((()=>{setTimeout((()=>this.#k.classList.add("disabled")),200),this.#x.playVideo()}))},this.#k.ontransitionend=t=>{"opacity"===t.propertyName&&this.#k.classList.contains("disabled")&&this.#k.classList.add("hidden")},this.#T.setAttribute("src",this.#P[2]),setTimeout((()=>{this.createPlayer((()=>{setTimeout((()=>this.#k.classList.add("disabled")),200)}))}),1e3)):this.#v.classList.add("hidden")}attributeChangedCallback(t,e,n){switch(t=t.toLowerCase()){case"headline":(this.#C.innerHTML=n)?this.#C.classList.remove("hidden"):this.#C.classList.add("hidden");break;case"description":(this.#S.innerHTML=n)?this.#S.classList.remove("hidden"):this.#S.classList.add("hidden");break;case"src":n?(this.#w=n.match(i)[1],this.#P=[r(this.#w,""),r(this.#w,"mq"),r(this.#w,"hq"),r(this.#w,"sd"),r(this.#w,"maxres")],createPlayer((()=>{})),this.#S.classList.remove("hidden")):this.#v.classList.add("hidden")}}}const r=(t,e="sd")=>`https://i.ytimg.com/vi_webp/${t}/${e}default.webp`,a=({rel:t,href:e,as:n,fetchpriority:i,type:o})=>{const r=document.createElement("link");return r.setAttribute("rel",t),r.setAttribute("href",e),n&&r.setAttribute("as",n),i&&r.setAttribute("fetchpriority",i),o&&r.setAttribute("type",o),document.head.appendChild(r)};let s;const c=o.warmConnections=()=>!s&&(a({rel:"preconnect",href:"https://www.youtube-nocookie.com"}),a({rel:"preconnect",href:"https://www.google.com"}),a({rel:"preconnect",href:"https://googleads.g.doubleclick.net"}),a({rel:"preconnect",href:"https://static.doubleclick.net"}),s=!0);let d;setTimeout(c,100);const l=()=>{const t=document.createDocumentFragment();t.appendChild(document.createElement("style")).innerHTML="\n  :host {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n  }\n\n\n  span {\n    padding-bottom: 24px;\n  }\n \n  h2,\n  p,\n  span {\n    width: 100%;\n  }\n\n  h2 {\n    background-clip: text;\n    box-decoration-break: clone;\n    -webkit-background-clip: text;\n    -webkit-box-decoration-break: clone;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-box-decoration-break: clone;\n    -moz-text-fill-color: transparent;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(45deg, #9B51E0, #3DA5E0);\n  }\n\n  button:visited,\n  button:active, \n  button:disabled,\n  button {\n    opacity: 1;\n    text-decoration: none;\n    -webkit-decoration: none;\n    -webkit-text-decoration: none;\n    pointer-events: auto;\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  button:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  .video-container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.27198%;\n    background: transparent;\n  }\n\n  .video-container > button,\n  .video-container > iframe:first-of-type,\n  .video-container > div:first-of-type {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    background: transparent;\n    opacity: 1;\n    transition: 300ms;\n  }\n\n  .video-container > button::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='196' height='140' viewBox='0 0 196 140' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.24509 31.7267C2.32311 31.2065 2.39524 30.6912 2.46636 30.17C4.6182 14.4004 14.7856 4.57178 30.6956 2.83104C30.8832 2.81052 31.0521 2.79478 31.2402 2.77942C34.4172 2.51997 66.0961 -7.53969e-08 98 0C129.904 7.53968e-08 161.583 2.51996 164.76 2.77942C164.948 2.79478 165.117 2.81052 165.304 2.83104C181.438 4.59627 191.667 14.6785 193.62 30.8391C193.629 30.9167 193.637 30.9828 193.647 31.0603C193.834 32.5818 196 50.601 196 70C196 89.399 193.834 107.418 193.647 108.94C193.637 109.017 193.629 109.083 193.62 109.161C191.667 125.321 181.438 135.404 165.304 137.169C165.117 137.189 164.948 137.205 164.76 137.221C161.583 137.48 129.904 140 98 140C66.0961 140 34.4173 137.48 31.2402 137.221C31.0521 137.205 30.8832 137.189 30.6956 137.169C14.7856 135.428 4.6182 125.6 2.46636 109.83C2.39524 109.309 2.32311 108.793 2.24509 108.273C1.76204 105.053 0 91.8109 0 70C0 48.1891 1.76204 34.9471 2.24509 31.7267Z' fill='%23FF1A00'/%3E%3Cpath d='M132 70.5L79 101V40L132 70.5Z' fill='white'/%3E%3C/svg%3E%0A\");    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 68px auto;\n    filter: drop-shadow(0px 3px 10px #00000055);\n  }\n\n  .video-container > button > img {\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n  }\n\n  .disabled {\n    pointer-events: none;\n    cursor: none;\n    opacity: 0 !important;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  @media (hover: hover) and (pointer: fine), (-ms-high-contrast: active), (forced-colors: active) {\n    .video-container > button:not(.disabled):not(.hidden) > img,\n    .video-container > button:not(.disabled):not(.hidden):hover > img,\n    .video-container > button:not(.disabled):not(.hidden)::after,\n    .video-container > button:not(.disabled):not(.hidden):hover::after {\n      transition: 300ms;\n      opacity: 1;\n    }\n\n    .video-container > button:not(.disabled):not(.hidden):hover > img {\n      opacity: 0.7;\n    }\n\n    .video-container > button:not(.disabled):not(.hidden):hover::after {\n      transform: scale(1.1);\n    }\n  }\n  ",t.appendChild(document.createElement("h2")),t.appendChild(document.createElement("span")),t.appendChild(document.createElement("script"));const e=t.appendChild(document.createElement("div"));e.classList.add("video-container"),e.appendChild(document.createElement("div")).setAttribute("title","YouTube video embed");const n=e.appendChild(document.createElement("button")).appendChild(document.createElement("img"));return n.setAttribute("loading","lazy"),n.setAttribute("title","Click to start video"),n.setAttribute("alt","Youtube video thumbnail"),t};customElements.define("youtube-video",o),Object.freeze(Object.defineProperty(o,"YoutubeVideo",{value:o}))},88:(t,e,n)=>{var i=n(668);n(60),(()=>{let t;window.onresize=(0,i.Ay)((()=>{document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),t||document.body.classList.remove("transition-on"),clearTimeout(t),t=setTimeout((()=>{document.body.classList.add("transition-on"),t=0}),100)})),setTimeout((()=>{document.body.classList.add("transition-on")}),100),document.addEventListener("click",(t=>t.target===document.body&&(t.preventDefault(),t.stopPropagation(),document.activeElement.blur())));const e=document.querySelectorAll("[data-background-image]");for(let t,n,i=0,o=e.length;i!==o;++i)(n=(t=e[i]).getAttribute("data-background-image"))&&(t.style.backgroundImage=`url("${n}")`)})()},60:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(265),o=n(580);let r;const a=()=>{r&&clearTimeout(r);const t=document.querySelector('meta[name="viewport"]'),e=/iP(hone|ad|od)/.test(navigator.userAgent)?"":", interactive-widget=resizes-content";t&&t.setAttribute("content","width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=1, user-scalable=no"+e)},s=Object.freeze(Object.defineProperty(a,"touchScreenDetected",{value:a}));((0,i.A)()||(0,o.Ay)())&&(r=setTimeout((()=>{a()}),1e4))},388:(t,e,n)=>{n.d(e,{A:()=>o}),n(732);const i=(t,e={})=>{if(!t||"object"!=typeof t)return e;let n;if(t instanceof HTMLFormElement||(t=>{if(!t||"object"!=typeof t)return!1;if(t.target&&t.target instanceof HTMLFormElement)return!0;try{return t instanceof SyntheticBaseEvent||t instanceof SubmitEvent}catch{return t instanceof SubmitEvent}})(t)&&(n=t.submitter||t.relatedTarget&&("submit"===(t.relatedTarget.type||t.relatedTarget.getAttribute("type"))||"button"===t.relatedTarget.nodeName.toLowerCase())&&t.relatedTarget,t=t.target),n&&(n={name:n.name||n.getAttribute("name"),value:n.value||n.getAttribute("value")},n.value||(n.value=!!n.name)),!(t instanceof HTMLFormElement))return e;const i={};t=new FormData(t),n&&n.name&&t.append(n.name,n.value);for(const e of t){const[t,n]=e;("number"==typeof n||"boolean"==typeof n||n)&&(i[t.toCamelCase()]=n)}return i},o=Object.freeze(Object.defineProperty(i,"createFormData",{value:i}))},265:(t,e,n)=>{n.d(e,{A:()=>o});const i=()=>{let t;try{return/iP(hone|ad|od)/.test(navigator.userAgent||"")||"ontouchstart"in document||"ontouchstart"in documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(t=matchMedia("(pointer:coarse)")||{})&&"(pointer:coarse)"===t.media&&!!t.matches}catch{}return!1},o=Object.freeze(Object.defineProperty(i,"hasTouchScreen",{value:i}))},580:(t,e,n)=>{n.d(e,{Ay:()=>u});const i=navigator.userAgent||navigator.vendor||window.opera||"",o=(t=i)=>/iP(hone|ad|od)/i.test(t),r=(t=i)=>/Android/i.test(t),a=(t=i)=>/BlackBerry/i.test(t),s=(t=i)=>/Opera Mini/i.test(t),c=(t=i)=>/IEMobile|Windows Phone|WPDesktop/i.test(t),d=(t=i)=>/webOS/i.test(t),l=(t=i)=>o(t)||r(t)||a(t)||s(t)||c(t)||d(t);l.isIOS=o,l.isAndroid=r,l.isBlackBerry=a,l.isOperaMobile=s,l.isWindowsMobile=c,l.isOtherMobile=d;const u=Object.freeze(Object.defineProperty(l,"isMobile",{value:l}))},732:()=>{String.toCamelCase||Object.defineProperty(String,"toCamelCase",{value:function(t,e=""){let n="",i=!1;for(let o=0,r=t.length;o!==r;++o){const r=t.charAt(o);(r<"A"||r>"z"||r>"Z"&&r<"a")&&(i=!0)||!i&&(n+=r)||(n+=e+r.toUpperCase())&&(i=!1)}return n}}),String.prototype.toCamelCase||Object.defineProperty(String.prototype,"toCamelCase",{value:function(...t){return String.toCamelCase(this,...t)}}),String.toKebabCase||Object.defineProperty(String,"toKebabCase",{value:function(t,e="-",n,i){let o="",r=t.length;for(let n=0,i=r;n!==i;++n){const i=t.charCodeAt(n);(i<65||i>122||i>90&&i<97)&&(o+=e)||i>=65&&i<=90&&(o+=e+String.fromCharCode(i+32))||(o+=String.fromCharCode(i))}let a,s=0,c=o.length,d=c;for(a=Math.min(n||0,r);s!==a&&o.charAt(s)===e;++s);for(a=r-Math.min(i||0,r);c>a&&o.charAt(--c)===e;);return(s||c<d)&&o.slice(s,c+1)||o}}),String.prototype.toKebabCase||Object.defineProperty(String.prototype,"toKebabCase",{value:function(...t){return String.toKebabCase(this,...t)}}),String.decamelize||Object.defineProperty(String,"decamelize",{value:function(t,e=1/0,n=1/0){return t.toKebabCase("_",e,n)}}),String.prototype.decamelize||Object.defineProperty(String.prototype,"decamelize",{value:function(...t){return String.decamelize(this,...t)}}),String.toSnakeCase||Object.defineProperty(String,"toSnakeCase",{value:function(t,e=1/0,n=1/0){return t.toKebabCase("_",e,n)}}),String.prototype.toSnakeCase||Object.defineProperty(String.prototype,"toSnakeCase",{value:function(...t){return String.toSnakeCase(this,...t)}}),String.toPascalCase||Object.defineProperty(String,"toPascalCase",{value:function(t,e=""){const n=t.toCamelCase(e);return n.charAt(0).toUpperCase()+n.slice(1)}}),String.prototype.toPascalCase||Object.defineProperty(String.prototype,"toPascalCase",{value:function(...t){return String.toPascalCase(this,...t)}}),String.toHashTagCase||Object.defineProperty(String,"toHashTagCase",{value:function(t,e=""){let n="",i=!1;for(let o=0,r=t.length;o!==r;++o){const r=t.charAt(o);(r<"0"||r>"z"||r>"9"&&r<"A"||r>"Z"&&r<"a")&&(i=!0)||!i&&(n+=r)||(n+=e+r.toUpperCase())&&(i=!1)}return n}}),String.prototype.toHashTagCase||Object.defineProperty(String.prototype,"toHashTagCase",{value:function(...t){return String.toHashTagCase(this,...t)}}),String.toUserIdCase||Object.defineProperty(String,"toUserIdCase",{value:function(t){return t.toHashTagCase("-").toLowerCase().replace(/^\-+|\-+$|\-\-+/g,"")}}),String.prototype.toUserIdCase||Object.defineProperty(String.prototype,"toUserIdCase",{value:function(...t){return String.toUserIdCase(this,...t)}}),String.toHashTag||Object.defineProperty(String,"toHashTag",{value:function(t){return"#"+t.toHashTagCase()}}),String.prototype.toHashTag||Object.defineProperty(String.prototype,"toHashTag",{value:function(...t){return String.toHashTag(this,...t)}}),String.toTitleCase||Object.defineProperty(String,"toTitleCase",{value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),String.prototype.toTitleCase||Object.defineProperty(String.prototype,"toTitleCase",{value:function(...t){return String.toTitleCase(this,...t)}});const t=/\s+/g;String.toCapitalCase||Object.defineProperty(String,"toCapitalCase",{value:function(e){return e.split(t).map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" ")}}),String.prototype.toCapitalCase||Object.defineProperty(String.prototype,"toCapitalCase",{value:function(...t){return String.toCapitalCase(this,...t)}}),String.toQuote||Object.defineProperty(String,"toQuote",{value:function(t,e="❝ ",n=" ❞"){return`${e}${t}${n}`}}),String.prototype.toQuote||Object.defineProperty(String.prototype,"toQuote",{value:function(...t){return String.toQuote(this,...t)}}),String.toSocketHeaderKey||Object.defineProperty(String,"toSocketHeaderKey",{value:function(t){let e="",n=!1,i=0,o=t.length;for(;i!==o;++i){const o=t.charAt(i);(" "===o||"-"===o||"_"===o)&&(n=!0)&&(e+="-")||!n&&i&&(e+=o)||(e+=o.toUpperCase())&&(n=!1)}return e}}),String.prototype.toSocketHeaderKey||Object.defineProperty(String.prototype,"toSocketHeaderKey",{value:function(...t){return String.toSocketHeaderKey(this,...t)}});const e={geese:"goose",mice:"mouse",feet:"foot",teeth:"tooth",oxen:"ox",cacti:"cactus",cactus:"cactus",couscous:"couscous",octopus:"octopus"};String.toSingular||Object.defineProperty(String,"toSingular",{value:function(t){return`${(t=>{if(t.length<4)return t;const n=e[t];if(n)return n;const i=t.length-1,o=t.charAt(i),r=i-1,a=t.charAt(r),s=r-1,c=t.charAt(s);return"s"===o&&"s"!==a?"e"===a?"i"===c?t.slice(0,s)+"y":"v"===c?t.slice(0,s)+"f":"a"===c||"o"===c||"u"===c?t.slice(0,r):t.slice(0,i):t.slice(0,i):t})(t)}`}}),String.prototype.toSingular||Object.defineProperty(String.prototype,"toSingular",{value:function(...t){return String.toSingular(this,...t)}}),String.raw||Object.defineProperty(String,"raw",{value:function(t){return`${t}`}}),String.prototype.raw||Object.defineProperty(String.prototype,"raw",{value:function(...t){return String.raw(this,...t)}}),String.utf16To8||Object.defineProperty(String,"utf16To8",{value:function(){const t=(t,e)=>String.fromCharCode(parseInt(e,16));return function(e){try{return encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,t)}catch{return e}}}()}),String.prototype.utf16To8||Object.defineProperty(String.prototype,"utf16To8",{value:function(...t){return String.utf16To8(this,...t)}}),String.utf8To16||Object.defineProperty(String,"utf8To16",{value:function(){const t=t=>"%"+((t=t.charCodeAt())<16?"0":"")+t.toString(16).toUpperCase();return function(e){try{return decodeURIComponent(e.replace(/[\x00-),:-?[-^`{-\xFF]/g,t))}catch{return e}}}()}),String.prototype.utf8To16||Object.defineProperty(String.prototype,"utf8To16",{value:function(...t){return String.utf8To16(this,...t)}})},668:(t,e,n)=>{n.d(e,{Ay:()=>o}),t=n.hmd(t);const i=(t,e=50,n=!1,i=!1)=>e>0&&function(...o){n?i=!0:(t.apply(this||{},o),n=!0,setTimeout((function(){i&&t.apply(this||{},o),i=n=!1}),e))}||t;Object.defineProperty(i,"DEFAULT_DELAY",{value:50});const o=Object.freeze(Object.defineProperty(i,"throttle",{value:i}));try{t.exports=i}catch{}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={},_common_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(88),_utilities_createFormData_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(388),_utilities_throttle_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(668),_components_YoutubeVideo_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(254),_components_Confettis_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(637),_touchScreenDetected_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(60);(()=>{let sideMenuScrollingDone=!0;const whileSideMenuToggled=()=>{sideMenuScrollingDone=!1;let t=document.body.style["overflow-x"]||null;document.body.style["overflow-x"]="hidden !important",setTimeout((()=>{sideMenuScrollingDone=!0,document.body.style["overflow-x"]=t}),320)};document.getElementById("side-menu-button").onclick=t=>{t.preventDefault(),t.stopPropagation(),document.body.classList.toggle("menu-opened"),document.body.clientWidth<=800&&(document.body.scrollLeft=document.body.classList.contains("menu-opened")&&-document.body.scrollWidth||0),whileSideMenuToggled()};let menu=null,main=null;for(let t=0,e=document.body.childNodes,n=e.length,i;t!==n;++t)"DIV"===(i=e[t]).nodeName&&(main&&(menu=i)||(main=i));main.onclick=()=>{document.body.clientWidth<=560&&document.body.classList.contains("menu-opened")&&(document.body.classList.remove("menu-opened"),document.body.scrollLeft=0,whileSideMenuToggled())},document.body.addEventListener("scroll",(()=>{document.body.clientWidth<=800&&sideMenuScrollingDone&&(document.body.scrollLeft>-.5*Math.min(200,document.body.clientWidth)?document.body.classList.remove("menu-opened"):document.body.classList.add("menu-opened"))}));const vv=window.visualViewport,origHeight=Math.max(document.documentElement&&document.documentElement.clientHeight||0,window.innerHeight||0);vv&&(vv.onresize=(0,_utilities_throttle_js__WEBPACK_IMPORTED_MODULE_2__.Ay)((()=>{document.documentElement.style.setProperty("--top",`${vv.offsetTop}px`),document.documentElement.style.setProperty("--height",`${vv.height}px`);const t=Math.max(vv.offsetTop||0,origHeight-(vv.height||0));document.body.classList[t?"add":"remove"]("keyboard-up")})));const close=t=>{t.preventDefault(),t.stopPropagation();const e=document.body.classList.contains("menu-opened");return e&&(document.body.classList.remove("menu-opened"),document.body.clientWidth<=800&&(document.body.scrollLeft=0),whileSideMenuToggled()),e},getOnclick=onclick=>event=>(close(event),"function"==typeof onclick||"string"==typeof onclick&&(onclick=eval(onclick))||(event=event.target.getAttribute("href"))&&(onclick=()=>{window.location.href=event}),onclick&&setTimeout((()=>onclick(event)),310));for(let t=0,e=menu.getElementsByTagName("a"),n=e.length,i;t!==n;++t)(i=e[t]).onclick=getOnclick(i.onclick);for(let t=0,e=menu.getElementsByTagName("button"),n=e.length,i;t!==n;++t)(i=e[t]).onclick=getOnclick(i.onclick);const closeDialog=t=>{t.stopPropagation(),"dialog"===t.target.tagName.toLowerCase()&&t.target.close()};for(let t=0,e=document.getElementsByTagName("dialog"),n=e.length;t!==n;++t)e[t].onclick=closeDialog;const getOpenDialog=t=>("string"==typeof t&&(t=document.getElementById(t)),e=>{e.stopPropagation(),t.showModal()});let timeoutId2;document.getElementById("agent").onclick=getOpenDialog("agent-dialog");const form=document.getElementById("form"),input=document.getElementById("input"),addPulsingShaking=input.onblur=()=>{timeoutId2=setTimeout((()=>{input.classList.add("pulsing"),input.classList.add("shaking")}),1e4)},removePulsingShaking=input.onfocus=()=>{clearTimeout(timeoutId2),input.classList.remove("pulsing"),input.classList.remove("shaking")},sendCancel=t=>{removeThinking(),writeContent(t&&t.timeout&&["🤷🏻‍♀️  I could not figure it out on time...\n\nAnything else I can do for you?",[{type:"button",text:"yes",send:"I want to try again"},{type:"button",text:"not now",send:"I want to try later"},{type:"button",text:"tutorials",action:"navigate",href:"pages/help.html"}]]||["💁🏻‍♀️  Ok, I'll stop thinking about it.\n\nAnything else on your mind?",[{type:"button",text:"yes",send:"I have something to add"},{type:"button",text:"no",send:"nothing else to add"},{type:"button",text:"learn more",action:"navigate",href:"pages/help.html"}]])};let timeoutIdTest;form.onsubmit=t=>{t.preventDefault(),t.stopPropagation(),form.checkValidity(),form.reportValidity();const e=(0,_utilities_createFormData_js__WEBPACK_IMPORTED_MODULE_1__.A)(t),n=e.msg||e.demoMsg,i=e.demoCancel,o=!(!e.demoMsg&&!i);for((i||e.cancel)&&(e.cancel=!0),(e.isDemo=o)&&(delete e.demoMsg,delete e.demoCancel,e.msg=n),input.value="",console.log(e);chat.lastChild;)chat.removeChild(chat.lastChild);return e.cancel?(sendCancel(e),clearTimeout(timeoutIdTest)):(addThinking(null,(()=>(sendCancel({...e,timeout:!0}),clearTimeout(timeoutIdTest)))),timeoutIdTest=setTimeout((()=>{removeThinking(),writeContent("Ok. Roger that.")}),5e4)),!1};const chat=document.getElementById("text"),writeText=(t,e=chat,n,i=0,o=(e instanceof Text?"nodeValue":"textContent"))=>(i>=0||(i=0),i||Array.isArray(t)||(t=[...`${t||""}`]),i=Math.min(i,t.length),e[o]=t.slice(0,i).join("")+" ⬤",i<t.length&&setTimeout((()=>writeText(t,e,n,++i)),1+Math.floor(30*Math.random()))||(e[o]=t.join(""),"function"==typeof n&&n()),e),isValid=t=>t||0===t||!1===t,writeContent=(t,e=chat,n,i=0,o,r)=>(i>=0||(i=0),i||Array.isArray(t)||(t=[t]),t=t.filter(isValid),(i=Math.min(i,t.length))<t.length&&(("number"==typeof(o=t[i])||"boolean"==typeof o)&&(o=`${o}`),i&&Array.isArray(o)&&((r=document.createElement("div")).classList.add("br"),e.appendChild(r)),"object"!=typeof o?e.appendChild(writeText(o,document.createTextNode(""),(()=>writeContent(t,e,n,++i,null,o)))):Array.isArray(o)&&(o=o.filter(isValid)).length?(o.length>1&&((r=document.createElement("pre")).classList.add("row"),e.appendChild(r))||(r=e),writeContent(o,r,(()=>writeContent(t,e,n,++i,null,o)))):(Array.isArray(o)||!o||"button"===(r=(o.type||"").toLowerCase())&&((r=document.createElement("button")).textContent=o.text,r.onclick=t=>{switch(t.preventDefault(),t.stopPropagation(),(o.action||"").toLowerCase()){case"nav":case"goto":case"navigate":const t=o.url||o.uri||o.href;"back"===t||-1===t?window.history&&window.history.length&&window.history.back&&window.history.back():t&&(window.location.href=t);break;case"back":window.history&&window.history.length&&window.history.back&&window.history.back();break;default:const e=o.send||o.text;e&&(input.value=e,form.requestSubmit())}},e.appendChild(r))||("img"===r||"image"===r)&&o.src&&((r=document.createElement("img")).setAttribute("src",o.src),r.setAttribute("alt",(o.alt||o.title||o.text)&&`Image of ${o.alt||o.title||o.text}`||"image"),r.setAttribute("title",(o.title||o.alt||o.text)&&`Image of ${o.title||o.alt||o.text}`||"image"),r.setAttribute("loading",o.loading||"lazy"),o.class&&r.classList.add(...o.class.split(/\s+/g)),o.style&&(r.style.cssText+=o.style),e.appendChild(r))||("yt"===r||"youtube"===r)&&o.src&&((r=document.createElement("youtube-video")).setAttribute("src",o.src),o.headline&&r.setAttribute("headline",o.headline),(o.description||o.text)&&r.setAttribute("description",o.description||o.text),e.appendChild(r)),setTimeout((()=>writeContent(t,e,n,++i,null,o)),20+Math.floor(20*Math.random()))))||"function"==typeof n&&n(),e);document.addEventListener("keydown",(t=>{document.activeElement!==input&&1===t.key.length&&(t.stopPropagation(),t.preventDefault(),input.focus(),input.value=(input.value||"")+t.key)}));const unhide=()=>{(0,_touchScreenDetected_js__WEBPACK_IMPORTED_MODULE_5__.A)(),document.getElementById("main-content").classList.remove("hidden"),document.getElementById("side-menu").classList.remove("hidden"),document.getElementById("index")===document.body&&writeContent(["Welcome to PostRocket 🚀\nLet's unleash your social media together! Do you have a website?",[{type:"button",text:"yes",send:"I have a website"},{type:"button",text:"no",send:"I do not have a website"},{type:"button",text:"help me",action:"navigate",href:"pages/help.html"}],[{type:"image",class:"small",src:"https://media.tenor.com/NtzA1v_UCkEAAAAj/bork.gif",title:"dog barking"}],[{type:"youtube",src:"https://www.youtube.com/watch?v=wbZBVu1AQSQ"}]])},homePageChatContent=["What can I help you with today?"],referrer=(document.referrer||"").toLowerCase(),isWelcome=(!referrer||referrer.includes("postrocket")&&(referrer.includes("account-creation.html")||referrer.includes("account-login.html")||referrer.includes("index.html")||!referrer.includes(".html")))&&!((decodeURIComponent(document.cookie)||"").match("postrocket_home_intro")||[]).length;let timeoutId3,timeoutId4;document.getElementById("home")===document.body&&(isWelcome&&(document.cookie="__Secure-postrocket_home_intro=1; Secure; Path=/; SameSite=Strict",writeContent(["🎉  Welcome!\n\n",...homePageChatContent],chat,(()=>(0,_components_Confettis_js__WEBPACK_IMPORTED_MODULE_4__.Ac)({color:["#BF9B30","#FFBF00","#A67C00","#C0C0C0","#B5B7BB","#75777B"],duration:5e3,timeStep:10,autoStart:!0}))))||writeContent(...homePageChatContent));const thinking=document.getElementById("thinking"),thinkingText=document.getElementById("thinking-text"),cancelButton=document.getElementById("cancel-button"),defaultThinkingMsg=["🙇🏻‍♀️ Thinking hard...","🙆🏻‍♀️ Almost there...","🤦🏻‍♀️ Maybe something's wrong..."],addThinking=(t,e,n=3e4)=>{Array.isArray(t)||(t=[t].filter(isValid)),thinking.classList.remove("hidden"),removePulsingShaking(),input.disabled=!0,cancelButton.disabled=null,"function"==typeof e&&(timeoutId4=setTimeout((()=>e()),n)),timeoutId3=setTimeout((()=>{thinkingText.innerHTML=t[0]||defaultThinkingMsg[0],timeoutId3=setTimeout((()=>{thinkingText.innerHTML=t[1]||defaultThinkingMsg[1],thinking.classList.add("warning"),timeoutId3=setTimeout((()=>{thinkingText.innerHTML=t[2]||defaultThinkingMsg[2],thinking.classList.add("error")}),1e4)}),1e4)}),5e3)},removeThinking=()=>{clearTimeout(timeoutId3),clearTimeout(timeoutId4),thinkingText.innerHTML="",thinking.classList.add("hidden"),thinking.classList.remove("warning"),thinking.classList.remove("error"),document.activeElement||addPulsingShaking(),input.disabled=null,cancelButton.disabled=!0},intro=document.getElementById("intro");let introTimeoutId;intro&&(intro.onanimationend=t=>{"bg"===t.animationName&&(intro.close(),addPulsingShaking())},intro.onclick=t=>{t.stopPropagation(),unhide(),clearTimeout(introTimeoutId),intro.close()},introTimeoutId=setTimeout((()=>{unhide(),addPulsingShaking()}),(decodeURIComponent(document.cookie)||"").includes("postrocket_index_intro=1")?100:13e3))||(unhide(),addPulsingShaking()),setTimeout((()=>{document.cookie="__Host-postrocket_index_intro=1; Secure; Path=/"}),1e4)})()})();