(window.webpackJsonp=window.webpackJsonp||[]).push([[735],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},807:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(2701)),s={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response.md",version:"1.4.0"},l=[],p={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 4,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 26,\n      "name" : "vcount",\n      "type" : "LONG",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.vcount"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "START_DATE",\n      "description" : "date at which the acquisition of the data has started",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.START_DATE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "FILE_SIZE",\n      "description" : "file size",\n      "type" : "INTEGER",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.FILE_SIZE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "STOP_DATE",\n      "description" : "date at which the acquisition of the data has ended",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.STOP_DATE"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/attributes?page=0&size=20"\n  } ]\n}\n')))}c.isMDXComponent=!0}}]);