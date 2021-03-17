(window.webpackJsonp=window.webpackJsonp||[]).push([[1985],{2055:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(2701)),i={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response",id:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFragment/http-response.md",version:"current"},p=[],l={toc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 1,\n    "attribute" : {\n      "id" : 2,\n      "name" : "att2PostFrag",\n      "type" : "STRING",\n      "fragment" : {\n        "id" : 1,\n        "name" : "testFrag"\n      },\n      "alterable" : false,\n      "optional" : false,\n      "label" : "ForTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.testFrag.att2PostFrag"\n    },\n    "model" : {\n      "id" : 1,\n      "name" : "modelPostFrag",\n      "type" : "COLLECTION"\n    },\n    "pos" : 0\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "id" : 2,\n    "attribute" : {\n      "id" : 1,\n      "name" : "attPostFrag",\n      "type" : "STRING",\n      "fragment" : {\n        "id" : 1,\n        "name" : "testFrag"\n      },\n      "alterable" : false,\n      "optional" : false,\n      "label" : "ForTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.testFrag.attPostFrag"\n    },\n    "model" : {\n      "id" : 1,\n      "name" : "modelPostFrag",\n      "type" : "COLLECTION"\n    },\n    "pos" : 0\n  },\n  "links" : [ ]\n} ]\n')))}c.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);