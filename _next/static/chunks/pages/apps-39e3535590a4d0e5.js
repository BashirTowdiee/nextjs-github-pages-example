(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{4626:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps",function(){return n(1773)}])},9749:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,r=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,s=e.priority,c=void 0!==s&&s,m=e.loading,h=e.lazyRoot,j=void 0===h?null:h,I=e.lazyBoundary,E=void 0===I?"200px":I,N=e.className,k=e.quality,C=e.width,P=e.height,B=e.style,L=e.objectFit,R=e.objectPosition,q=e.onLoadingComplete,D=e.placeholder,M=void 0===D?"empty":D,W=e.blurDataURL,T=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=d.useContext(g.ImageConfigContext),F=d.useMemo((function(){var e=v||U||p.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[U]),V=T,G=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(G=V.layout),delete V.layout);var H=z;if("loader"in V){if(V.loader){var J=V.loader;H=function(e){e.config;var t=b(e,["config"]);return J(t)}}delete V.loader}var K="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,K=Q.src,(!G||"fill"!==G)&&(P=P||Q.height,C=C||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:K;var X=A(C),Y=A(P),$=A(k),Z=!c&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=r(d.useState(!1),2),ne=te[0],ie=te[1],ae=r(f.useIntersection({rootRef:j,rootMargin:E,disabled:!Z}),3),re=ae[0],oe=ae[1],le=ae[2],se=!Z||oe,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,pe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:R};0;0;var fe=Object.assign({},B,"raw"===G?{}:pe),ge="blur"!==M||ne?{}:{filter:"blur(20px)",backgroundSize:L||"cover",backgroundImage:'url("'.concat(W,'")'),backgroundPosition:R||"0% 0%"};if("fill"===G)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Y){var me=Y/X,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ce.display="block",ce.position="relative",ue=!0,de.paddingTop=he):"intrinsic"===G?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",ue=!0,de.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===G&&(ce.display="inline-block",ce.position="relative",ce.width=X,ce.height=Y)}else 0;var ye={src:_,srcSet:void 0,sizes:void 0};se&&(ye=x({config:F,src:t,unoptimized:l,layout:G,width:X,quality:$,sizes:n,loader:H}));var be=t;0;var ve,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var je=(a(ve={},we,ye.srcSet),a(ve,_e,ye.sizes),ve),Se=d.default.useLayoutEffect,xe=d.useRef(q),Ae=d.useRef(t);d.useEffect((function(){xe.current=q}),[q]),Se((function(){Ae.current!==t&&(le(),Ae.current=t)}),[le,t]);var ze=y({isLazy:Z,imgAttributes:ye,heightInt:Y,widthInt:X,qualityInt:$,layout:G,className:N,imgStyle:fe,blurStyle:ge,loading:m,config:F,unoptimized:l,placeholder:M,loader:H,srcString:be,onLoadingCompleteRef:xe,setBlurComplete:ie,setIntersection:re,isVisible:se},V);return d.default.createElement(d.default.Fragment,null,"raw"===G?d.default.createElement(O,Object.assign({},ze)):d.default.createElement("span",{style:ce},ue?d.default.createElement("span",{style:de},ee?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,d.default.createElement(O,Object.assign({},ze))),c?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var s,c,d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(s=n(3121))&&s.__esModule?s:{default:s},p=n(139),f=n(9246),g=n(8730),m=(n(670),n(2700));function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var i=null!=t[n]?t[n]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){h(e,t,i[t])}))},i=1;i<arguments.length;i++)n(i);return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=new URL("".concat(t.path).concat(E(n))),o=r.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),a&&o.set("q",a.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,a=e.layout,r=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var a=e.deviceSizes,r=e.allSizes;if(i&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,o(c));return{widths:r.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,a,s),u=d.widths,p=d.kind,f=u.length-1;return{sizes:s||"w"!==p?s:"100vw",srcSet:u.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===p?e:i+1).concat(p)})).join(", "),src:c({config:t,src:n,quality:l,width:u[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",i=j.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(p.VALID_LOADERS.join(", "),". Received: ").concat(n))}function I(e,t,n,i,a,r){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===i&&r(!0),null===a||void 0===a?void 0:a.current)){var n=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:o})}})))}var O=function(e){var t=e.imgAttributes,n=e.heightInt,i=e.widthInt,a=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,c=e.isLazy,u=e.placeholder,p=e.loading,f=e.srcString,g=e.config,m=e.unoptimized,h=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,_=e.setIntersection,j=e.onLoad,S=e.onError,A=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,"raw"===r?{height:n,width:i}:{},{decoding:"async","data-nimg":r,className:o,style:y({},l,s),ref:d.useCallback((function(e){_(e),(null===e||void 0===e?void 0:e.complete)&&I(e,f,0,u,v,w)}),[_,f,r,u,v,w]),onLoad:function(e){I(e.currentTarget,f,0,u,v,w),j&&j(e)},onError:function(e){"blur"===u&&w(!0),S&&S(e)}})),(c||"blur"===u)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,x({config:g,src:f,unoptimized:m,layout:r,width:i,quality:a,sizes:t.sizes,loader:h}),"raw"===r?{height:n,width:i}:{},{decoding:"async","data-nimg":r,style:l,className:o,loading:p||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1773:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(5675),r=n.n(a),o=n(8442),l=n.n(o);t.default=function(){var e=function(e,t){fetch("/version.txt?v=".concat(Date.now())).then((function(e){return e.text()})).then((function(t){var n=document.getElementById(e);n&&(n.textContent=t)})).catch((function(e){console.error("Error fetching version:",e)}))};return e("ios-version"),e("android-version"),(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsx)("div",{className:l().appIconContainer}),(0,i.jsxs)("div",{className:l().appInfoContainer,children:[(0,i.jsxs)("div",{className:l().appInfo,children:[(0,i.jsx)("h2",{className:l().appName,children:"iOS Mobile App"}),(0,i.jsxs)("p",{className:l().appSubtitle,children:["Version: ",(0,i.jsx)("span",{id:"ios-version",children:"Loading..."})]}),(0,i.jsxs)("div",{className:l().appButtonContainer,children:[(0,i.jsx)("a",{href:"https://apps.apple.com/us/app/instagram/id389801252?itsct=apps_box_badge&itscg=30200",className:l().appButton,children:(0,i.jsx)(r(),{src:"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1286323200",alt:"Download on the App Store",width:250,height:83})}),(0,i.jsx)("a",{className:l().downloadButton,href:"./ios.txt",download:!0,children:"Download iOS Artifact"})]})]}),(0,i.jsxs)("div",{className:l().appInfo,children:[(0,i.jsx)("h2",{className:l().appName,children:"Android Mobile App"}),(0,i.jsxs)("p",{className:l().appSubtitle,children:["Version: ",(0,i.jsx)("span",{id:"android-version",children:"Loading..."})]}),(0,i.jsxs)("div",{className:l().appButtonContainer,children:[(0,i.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.twitter.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",className:l().appButtonAndroid,children:(0,i.jsx)(r(),{alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",width:250,height:83})}),(0,i.jsx)("a",{className:l().downloadButton,href:"./android.txt",download:!0,children:"Download Android Artifact"})]})]})]})]})}},8442:function(e){e.exports={container:"apps_container___4Mf4",appInfoContainer:"apps_appInfoContainer__goYuy",appInfo:"apps_appInfo__26_FU",appName:"apps_appName__Eena6",appSubtitle:"apps_appSubtitle__QB4fT",appIconContainer:"apps_appIconContainer__PaAdG",appIcon:"apps_appIcon___y_KW",appButtonContainer:"apps_appButtonContainer__vgcF_",appButton:"apps_appButton__iJPcE",downloadButton:"apps_downloadButton___AGWU",appButtonAndroid:"apps_appButtonAndroid__HkkDq",appImage:"apps_appImage__ivfjj"}},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=4626,e(e.s=t);var t}));var t=e.O();_N_E=t}]);