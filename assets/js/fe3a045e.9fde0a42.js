(window.webpackJsonp=window.webpackJsonp||[]).push([[2602],{2674:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(2703)),i={id:"backend-storage-data-storage-plugins",title:"Data storage plugins",sidebar_label:"Data storage",slug:"/development/backend/storage/plugins/data-storage/"},s={unversionedId:"development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",id:"version-1.4.0/development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",isDocsHomePage:!1,title:"Data storage plugins",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/storage/plugins/data-storage-plugins.md",slug:"/development/backend/storage/plugins/data-storage/",permalink:"/docs/1.4.0/development/backend/storage/plugins/data-storage/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/plugins/data-storage-plugins.md",version:"1.4.0",sidebar_label:"Data storage",sidebar:"version-1.4.0/dev",previous:{title:"Allocation strategy plugins",permalink:"/docs/1.4.0/development/backend/storage/plugins/allocation-strategy/"},next:{title:"Security delegation plugins",permalink:"/docs/1.4.0/development/backend/storage/plugins/security-delegation/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Implementation",id:"implementation",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This extension point allows to define a new file storage system."))),Object(o.b)("b",null,"NOTE : ")," There is two types of storage system in REGARDS : - Online : Files are directly accessible. (Synchronous retrieval) - Nearline : Files are on a long term archive system and needs times to be extracted. (Asynchronous retrieval)",Object(o.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/datastorage/local/LocalDataStorage.java"},"LocalDataStorage")," : Locak disk storage system.")),Object(o.b)("h2",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IDataStorage.java"},"IDataStorage")," : Main interface"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IOnlineDataStorage.java"},"IOnlineDataStorage")," : Interface for ",Object(o.b)("inlineCode",{parentName:"li"},"Online")," systems."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/INearlineDataStorage.java"},"INearlineDataStorage")," : Interface for ",Object(o.b)("inlineCode",{parentName:"li"},"Nearline")," systems.")),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"To learn more about how to create your own plugin see ",Object(o.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")))}d.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,b=p["".concat(i,".").concat(u)]||p[u]||g[u]||o;return a?n.a.createElement(b,s(s({ref:t},c),{},{components:a})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);