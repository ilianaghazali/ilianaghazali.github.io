(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2701)),c={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testGetCollectionById/http-response.md",version:"1.4.0"},i=[],s={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 12,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n    "creationDate" : "2020-05-11T11:36:33.285Z",\n    "model" : {\n      "id" : 6,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1",\n      "entityType" : "COLLECTION",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/12"\n  } ]\n}\n')))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);