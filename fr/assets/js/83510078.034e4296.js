(window.webpackJsonp=window.webpackJsonp||[]).push([[1364],{1436:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),c=(t(0),t(2703)),s={},o={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response.md",version:"1.4.0"},i=[],p={toc:i};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"request"},"Request"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "datasetIpId" : "URN:AIP:DATASET:PROJECT:9c9422a9-01a7-4c7a-81cb-c88d5464e75d:V1",\n      "dataset" : {\n        "type" : "DATASET",\n        "metadata" : {\n          "dataObjectsGroups" : { }\n        },\n        "id" : 13,\n        "ipId" : "URN:AIP:DATASET:PROJECT:9c9422a9-01a7-4c7a-81cb-c88d5464e75d:V1",\n        "creationDate" : "2020-05-11T11:42:23.81Z",\n        "model" : {\n          "id" : 7,\n          "name" : "model1",\n          "description" : "desc",\n          "type" : "DATASET"\n        },\n        "tags" : [ ],\n        "groups" : [ ],\n        "feature" : {\n          "licence" : "licence",\n          "providerId" : "DS1",\n          "entityType" : "DATASET",\n          "label" : "DS1",\n          "model" : "model1",\n          "files" : { },\n          "tags" : [ ],\n          "id" : "URN:AIP:DATASET:PROJECT:9c9422a9-01a7-4c7a-81cb-c88d5464e75d:V1",\n          "properties" : { },\n          "type" : "Feature"\n        }\n      },\n      "accessRight" : {\n        "id" : 13,\n        "qualityFilter" : {\n          "maxScore" : 10,\n          "minScore" : 0,\n          "qualityLevel" : "ACCEPTED"\n        },\n        "accessLevel" : "FULL_ACCESS",\n        "dataAccessLevel" : "NO_ACCESS",\n        "dataset" : {\n          "type" : "DATASET",\n          "metadata" : {\n            "dataObjectsGroups" : { }\n          },\n          "id" : 13,\n          "ipId" : "URN:AIP:DATASET:PROJECT:9c9422a9-01a7-4c7a-81cb-c88d5464e75d:V1",\n          "creationDate" : "2020-05-11T11:42:23.81Z",\n          "model" : {\n            "id" : 7,\n            "name" : "model1",\n            "description" : "desc",\n            "type" : "DATASET"\n          },\n          "tags" : [ ],\n          "groups" : [ ],\n          "feature" : {\n            "licence" : "licence",\n            "providerId" : "DS1",\n            "entityType" : "DATASET",\n            "label" : "DS1",\n            "model" : "model1",\n            "files" : { },\n            "tags" : [ ],\n            "id" : "URN:AIP:DATASET:PROJECT:9c9422a9-01a7-4c7a-81cb-c88d5464e75d:V1",\n            "properties" : { },\n            "type" : "Feature"\n          }\n        },\n        "accessGroup" : {\n          "id" : 14,\n          "name" : "AG1",\n          "users" : [ {\n            "email" : "test@email.com"\n          } ],\n          "isPublic" : false,\n          "isInternal" : false\n        }\n      }\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "datasetIpId" : "URN:AIP:DATASET:PROJECT:4c361d43-70cd-4128-9fec-ee50ef8a8f03:V1",\n      "dataset" : {\n        "type" : "DATASET",\n        "metadata" : {\n          "dataObjectsGroups" : { }\n        },\n        "id" : 14,\n        "ipId" : "URN:AIP:DATASET:PROJECT:4c361d43-70cd-4128-9fec-ee50ef8a8f03:V1",\n        "creationDate" : "2020-05-11T11:42:23.81Z",\n        "model" : {\n          "id" : 7,\n          "name" : "model1",\n          "description" : "desc",\n          "type" : "DATASET"\n        },\n        "tags" : [ ],\n        "groups" : [ ],\n        "feature" : {\n          "licence" : "licence",\n          "providerId" : "DS2",\n          "entityType" : "DATASET",\n          "label" : "DS2",\n          "model" : "model1",\n          "files" : { },\n          "tags" : [ ],\n          "id" : "URN:AIP:DATASET:PROJECT:4c361d43-70cd-4128-9fec-ee50ef8a8f03:V1",\n          "properties" : { },\n          "type" : "Feature"\n        }\n      }\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/access-rights/group/AG1?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}d.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(t),m=r,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||c;return t?a.a.createElement(f,o(o({ref:n},p),{},{components:t})):a.a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,s=new Array(c);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<c;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);