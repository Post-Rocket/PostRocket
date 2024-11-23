(()=>{"use strict";const t=/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;class e extends HTMLElement{#t;#e;#n;#i;#o;#d;#s;#r;#a=[];constructor(){super(),d||(d=s());const t=this.attachShadow({mode:"closed"});t.appendChild(d.cloneNode(!0)),this.#o=t.childNodes[1],this.#d=t.childNodes[2],this.#t=t.childNodes[3],this.#e=this.#t.firstChild,this.#s=this.#t.childNodes[1],this.#r=this.#s.firstChild}connectedCallback(){(this.#o.innerHTML=this.getAttribute("headline"))||this.#o.classList.add("hidden"),(this.#d.innerHTML=this.getAttribute("description"))||this.#d.classList.add("hidden"),(this.#n=this.getAttribute("src"))?(this.#i=this.#n.match(t)[1],this.#n=`https://www.youtube-nocookie.com/embed/${this.#i}?theme=dark&autohide=2&modestbranding=1`,this.#a=[n(this.#i,""),n(this.#i,"mq"),n(this.#i,"hq"),n(this.#i,"sd"),n(this.#i,"maxres")],this.#r.setAttribute("src",this.#a[2]),this.#s.onclick=()=>{this.#e.setAttribute("src",this.#n+"&autoplay=1"),this.#s.classList.add("hidden")}):this.#t.classList.add("hidden")}attributeChangedCallback(e,i,o){switch(e=e.toLowerCase()){case"headline":(this.#o.innerHTML=o)?this.#o.classList.remove("hidden"):this.#o.classList.add("hidden");break;case"description":(this.#d.innerHTML=o)?this.#d.classList.remove("hidden"):this.#d.classList.add("hidden");break;case"src":(this.#n=o)?(this.#i=this.#n.match(t)[1],this.#n=`https://www.youtube.com/embed/${this.#i}?&theme=dark&autohide=2&modestbranding=1`,this.#a=[n(this.#i,""),n(this.#i,"mq"),n(this.#i,"hq"),n(this.#i,"sd"),n(this.#i,"maxres")],this.#e.setAttribute("src",this.#n),this.#d.classList.remove("hidden")):this.#t.classList.add("hidden")}}}const n=(t,e="sd")=>`https://i.ytimg.com/vi_webp/${t}/${e}default.webp`,i=(t,e,n)=>{const i=document.createElement("link");return i.rel=t,i.href=e,n&&(i.as=n),document.head.appendChild(i)},o=e.warmConnections=()=>!e.preconnected&&(i("preconnect","https://www.youtube-nocookie.com"),i("preconnect","https://i.ytimg.com"),i("preconnect","https://www.google.com"),i("preconnect","https://googleads.g.doubleclick.net"),i("preconnect","https://static.doubleclick.net"),e.preconnected=!0);let d;setTimeout(o,100);const s=()=>{const t=document.createDocumentFragment();t.appendChild(document.createElement("style")).innerHTML='\n  :host {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n  }\n\n  span {\n    padding-bottom: 24px;\n  }\n \n  h2,\n  p,\n  span {\n    width: 100%;\n  }\n\n  h2 {\n    background-clip: text;\n    box-decoration-break: clone;\n    -webkit-background-clip: text;\n    -webkit-box-decoration-break: clone;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-box-decoration-break: clone;\n    -moz-text-fill-color: transparent;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(45deg, #9B51E0, #3DA5E0);\n  }\n\n  button:visited,\n  button:active, \n  button:disabled,\n  button {\n    opacity: 1;\n    text-decoration: none;\n    -webkit-decoration: none;\n    -webkit-text-decoration: none;\n    pointer-events: auto;\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  button:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  .video-container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.27198%;\n    background: transparent;\n  }\n\n  .video-container > button,\n  .video-container > iframe:first-of-type {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    overflow: hidden;\n    background: transparent;\n  }\n\n  .video-container > button::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url("assets/icons/ytplay.svg");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80px auto;\n    filter: drop-shadow(0px 3px 10px #00000055);\n  }\n\n  .video-container > button > img {\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  @media (hover: hover) and (pointer: fine), (-ms-high-contrast: active), (forced-colors: active) {\n    .video-container > button > img,\n    .video-container > button:hover > img,\n    .video-container > button::after,\n    .video-container > button:hover::after {\n      transition: 300ms;\n      opacity: 1;\n    }\n\n    .video-container > button:hover > img {\n      opacity: 0.7;\n    }\n\n    .video-container > button:hover::after {\n      transform: scale(1.1);\n    }\n  }\n  ',t.appendChild(document.createElement("h2")),t.appendChild(document.createElement("span"));const e=t.appendChild(document.createElement("div"));e.classList.add("video-container");const n=e.appendChild(document.createElement("iframe"));n.setAttribute("title","YouTube video embed"),n.setAttribute("frameborder",0),n.setAttribute("width",333),n.setAttribute("height",196),n.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),n.allowFullscreen=!0;const i=e.appendChild(document.createElement("button")).appendChild(document.createElement("img"));return i.setAttribute("loading","lazy"),i.setAttribute("title","Click to start video"),i.setAttribute("alt","Youtube video thumbnail"),t};customElements.define("youtube-video",e),Object.freeze(Object.defineProperty(e,"YoutubeVideo",{value:e}))})();