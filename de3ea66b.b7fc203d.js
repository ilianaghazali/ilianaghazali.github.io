(window.webpackJsonp=window.webpackJsonp||[]).push([[2273],{2345:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),i=(n(0),n(2701)),c={},a={unversionedId:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request",id:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request.md",slug:"/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request",permalink:"/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/retrieveNothingForUnknownMicroservice/http-request.md",version:"current"},s=[],p={toc:s};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/resources/microservices/unknown-microservice/controllers/testController`\n\n    ***URL template**\n\n    `/resources/microservices/{microservicename}/controllers/{controllername}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0},2701:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return v}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=t,v=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(v,a(a({ref:r},p),{},{components:n})):o.a.createElement(v,a({ref:r},p))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);