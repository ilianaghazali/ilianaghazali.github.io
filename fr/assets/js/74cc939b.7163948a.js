(window.webpackJsonp=window.webpackJsonp||[]).push([[1182],{1253:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2703)),s={},c={unversionedId:"development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response",id:"development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response",permalink:"/fr/docs/development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/access/api/generated-snippets/AccessSearchControllerIT/searchDatasets/http-response.md",version:"current"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 2,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "ipId" : {\n        "oaisIdentifier" : "AIP",\n        "entityType" : "DATASET",\n        "tenant" : "PROJECT",\n        "entityId" : "0504e33a-1452-4c69-a6eb-1498dac32c13",\n        "version" : 1\n      },\n      "model" : {\n        "name" : "datasetModel",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "wgs84" : {\n        "type" : "UNLOCATED"\n      },\n      "feature" : {\n        "providerId" : "DS0",\n        "entityType" : "DATASET",\n        "label" : "dataset0",\n        "model" : "datasetModel",\n        "files" : { },\n        "tags" : [ ],\n        "id" : {\n          "oaisIdentifier" : "AIP",\n          "entityType" : "DATASET",\n          "tenant" : "PROJECT",\n          "entityId" : "0504e33a-1452-4c69-a6eb-1498dac32c13",\n          "version" : 1\n        },\n        "geometry" : {\n          "type" : "UNLOCATED"\n        },\n        "normalizedGeometry" : {\n          "type" : "UNLOCATED"\n        },\n        "properties" : [ ],\n        "type" : "FEATURE"\n      },\n      "services" : [ ]\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "ipId" : {\n        "oaisIdentifier" : "AIP",\n        "entityType" : "DATASET",\n        "tenant" : "PROJECT",\n        "entityId" : "bfab4738-3254-458b-a654-5bbfb13defff",\n        "version" : 1\n      },\n      "model" : {\n        "name" : "datasetModel",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1" ],\n      "groups" : [ ],\n      "wgs84" : {\n        "type" : "UNLOCATED"\n      },\n      "feature" : {\n        "providerId" : "DS1",\n        "entityType" : "DATASET",\n        "label" : "dataset1",\n        "model" : "datasetModel",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1" ],\n        "id" : {\n          "oaisIdentifier" : "AIP",\n          "entityType" : "DATASET",\n          "tenant" : "PROJECT",\n          "entityId" : "bfab4738-3254-458b-a654-5bbfb13defff",\n          "version" : 1\n        },\n        "geometry" : {\n          "type" : "UNLOCATED"\n        },\n        "normalizedGeometry" : {\n          "type" : "UNLOCATED"\n        },\n        "properties" : [ ],\n        "type" : "FEATURE"\n      },\n      "services" : [ {\n        "content" : {\n          "configId" : "c1adaf22-3448-4038-a3df-3bd8ec0c39dc",\n          "label" : "conf0",\n          "applicationModes" : [ "MANY", "ONE" ],\n          "entityTypes" : [ "DATA" ],\n          "type" : "CATALOG"\n        },\n        "links" : [ ]\n      }, {\n        "content" : {\n          "configId" : "3",\n          "label" : "uiPluginConfiguration2",\n          "applicationModes" : [ "MANY" ],\n          "entityTypes" : [ "COLLECTION" ],\n          "type" : "UI"\n        },\n        "links" : [ ]\n      } ]\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ ]\n}\n')))}l.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);