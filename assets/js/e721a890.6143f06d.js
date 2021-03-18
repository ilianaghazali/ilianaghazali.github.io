(window.webpackJsonp=window.webpackJsonp||[]).push([[2354],{2426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(2703)),s={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",id:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response.md",version:"current"},c=[],p={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 3,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 14,\n      "ipId" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId1",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/14"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/14"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 15,\n      "ipId" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId3",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/15"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/15"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 16,\n      "ipId" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId4",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/16"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/16"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}d.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=d(n),u=a,m=i["".concat(s,".").concat(u)]||i[u]||f[u]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);