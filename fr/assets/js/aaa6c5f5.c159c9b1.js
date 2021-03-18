(window.webpackJsonp=window.webpackJsonp||[]).push([[1750],{1822:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(7),o=(r(0),r(2703)),i={},c={unversionedId:"development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",id:"version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body.md",slug:"/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",permalink:"/fr/docs/1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body.md",version:"1.4.0"},p=[],l={toc:p};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "name",\n  "nbStorageError" : 0,\n  "nbDeletionError" : 0,\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "id" : 5,\n    "name" : "name",\n    "pluginConfiguration" : {\n      "id" : 5,\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "name",\n      "businessId" : "name",\n      "version" : "1.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "ONLINE",\n    "priority" : 1,\n    "allocatedSizeInKo" : 10000\n  }\n}\n')))}s.isMDXComponent=!0},2703:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=t,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return r?a.a.createElement(m,c(c({ref:n},l),{},{components:r})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);