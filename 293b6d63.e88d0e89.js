(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},489:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2701)),l={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/CollectionControllerIT/testPostCollection/http-response.md",version:"1.4.0"},i=[],s={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 7,\n    "ipId" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n    "creationDate" : "2020-05-11T11:36:28.852Z",\n    "model" : {\n      "id" : 3,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL2",\n      "entityType" : "COLLECTION",\n      "label" : "collection2",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/7"\n  } ]\n}\n')))}p.isMDXComponent=!0}}]);