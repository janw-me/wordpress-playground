"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1649],{6679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(11),o=(t(2735),t(9530));const a={},i="Service Workers",s={unversionedId:"architecture/browser-service-workers",id:"architecture/browser-service-workers",title:"Service Workers",description:"A Service Worker is used to handle the HTTP traffic using the in-browser PHPRequestHandler.",source:"@site/docs/11-architecture/12-browser-service-workers.md",sourceDirName:"11-architecture",slug:"/architecture/browser-service-workers",permalink:"/wordpress-playground/docs/architecture/browser-service-workers",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/11-architecture/12-browser-service-workers.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PHP Worker Threads",permalink:"/wordpress-playground/docs/architecture/browser-php-worker-threads"},next:{title:"Scopes",permalink:"/wordpress-playground/docs/architecture/browser-scopes"}},c={},l=[{value:"Service Worker setup",id:"service-worker-setup",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-workers"},"Service Workers"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"},"A Service Worker")," is used to handle the HTTP traffic using the in-browser PHPRequestHandler."),(0,o.kt)("p",null,"Imagine your PHP script renders the following page ",(0,o.kt)("a",{parentName:"p",href:"#iframe-based-rendering"},"in the iframe viewport"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n    <head>\n        <title>John\'s Website</title>\n    </head>\n    <body>\n        <a href="/">Homepage</a>\n        <a href="/blog">Blog</a>\n        <a href="/contact">Contact</a>\n    </body>\n</html>\n')),(0,o.kt)("p",null,"When the user clicks, say the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blog")," link, the browser would normally send a HTTP request to the remote server to fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog")," page and then display it instead of the current iframe contents. However, our app isn't running on the remote server. The browser would just display a 404 page."),(0,o.kt)("p",null,"Enter ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"},"Service Workers")," \u2013 a tool to intercept the HTTP requests and handle them inside the browser:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Service worker data flow",src:t(9043).Z,width:"2608",height:"2201"})),(0,o.kt)("h3",{id:"service-worker-setup"},"Service Worker setup"),(0,o.kt)("p",null,"The main application living in ",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html")," is responsible for registering the service worker."),(0,o.kt)("p",null,"Here's the minimal setup:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/app.js:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { registerServiceWorker } from \'@php-wasm/web\';\n\nfunction main() {\n    await registerServiceWorker(\n        phpClient,\n        "default", // PHP instance scope\n        "/sw.js",  // Must point to a valid Service Worker implementation.\n        "1"        // Service worker version, used for reloading the script.\n    );\n\n}\n')),(0,o.kt)("p",null,"You will also need a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"/service-worker.js")," file that actually intercepts and routes the HTTP requests. Here's what a minimal implementation looks like:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/service-worker.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { initializeServiceWorker } from '@php-wasm/web';\n\n// Intercepts all HTTP traffic on the current domain and\n// passes it to the Worker Thread.\ninitializeServiceWorker();\n")))}d.isMDXComponent=!0},9530:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(2735);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9043:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/workers-diagram-70e2616eb47378a5ea14f8ebb7043a94.png"}}]);