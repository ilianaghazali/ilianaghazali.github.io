(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return b}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(t),u=i,b=g["".concat(o,".").concat(u)]||g[u]||d[u]||r;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},571:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),r=(t(0),t(2703)),o={id:"backend-ingest-tagging-plugins",title:"AIP Tagging plugins",sidebar_label:"AIP tagging",slug:"/development/backend/ingest/plugins/aip-tagging/"},s={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-tagging-plugins",id:"development/backend/regards/ingest/plugins/backend-ingest-tagging-plugins",isDocsHomePage:!1,title:"AIP Tagging plugins",description:"Overview",source:"@site/docs/development/backend/regards/ingest/plugins/aip-tagging-plugins.md",slug:"/development/backend/ingest/plugins/aip-tagging/",permalink:"/fr/docs/development/backend/ingest/plugins/aip-tagging/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/plugins/aip-tagging-plugins.md",version:"current",sidebar_label:"AIP tagging",sidebar:"dev",previous:{title:"AIP generation plugins",permalink:"/fr/docs/development/backend/ingest/plugins/aip-generation/"},next:{title:"SIP Post processing plugins",permalink:"/fr/docs/development/backend/ingest/plugins/sip-post-processing/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This extension point allows to add ",Object(r.b)("inlineCode",{parentName:"p"},"Tags")," to a list of generated ",Object(r.b)("inlineCode",{parentName:"p"},"AIP"),". A ",Object(r.b)("inlineCode",{parentName:"p"},"Tag")," is a keyword or an ",Object(r.b)("inlineCode",{parentName:"p"},"URN")," identifier of an other ",Object(r.b)("inlineCode",{parentName:"p"},"AIP"),"."))),Object(r.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/plugin/DefaultAIPTagging.java"},"DefaultAIPTagging")," : Add configured tags to each genereted AIP")),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)("p",null,"   ",Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipTagging.java"},"IAipTagging")),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"To learn more about how to create your own plugin see ",Object(r.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),Object(r.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IAipTagging {\n    @Override\n    public void tag(List<AIP> aips) throws TagAIPException {\n            // Add yout tags to each given aips.\n    }\n}\n')))}p.isMDXComponent=!0}}]);