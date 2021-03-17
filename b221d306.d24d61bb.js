(window.webpackJsonp=window.webpackJsonp||[]).push([[1816],{1886:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(2701)),s={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response",id:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-response.md",version:"current"},p=[],i={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DATASET",\n    "subsettingClause" : {\n      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"\n    },\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 24,\n    "ipId" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n    "creationDate" : "2020-05-11T11:37:51.931Z",\n    "model" : {\n      "id" : 16,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "DS21",\n      "entityType" : "DATASET",\n      "label" : "dataSet21",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/24"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasets"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasets/24"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasets/24"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},i),{},{components:n})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);