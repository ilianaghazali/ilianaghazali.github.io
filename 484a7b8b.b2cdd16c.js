(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{2701:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=t,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.a.createElement(b,a(a({ref:n},p),{},{components:r})):o.a.createElement(b,a({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},793:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),i=(r(0),r(2701)),c={},a={unversionedId:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response",permalink:"/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response.md",version:"1.4.0"},s=[],p={toc:s};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 509,\n    "description" : "description",\n    "microservice" : "rs-test",\n    "controllerSimpleName" : "testController",\n    "resource" : "/configured/endpoint",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ ]\n} ]\n')))}l.isMDXComponent=!0}}]);