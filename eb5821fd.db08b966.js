(window.webpackJsonp=window.webpackJsonp||[]).push([[2393],{2465:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(2701)),l={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response.md",version:"1.4.0"},i=[],s={toc:i};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 30,\n    "attribute" : {\n      "id" : 31,\n      "name" : "attnewUpMA",\n      "type" : "STRING",\n      "fragment" : {\n        "id" : 8,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : false,\n      "optional" : false,\n      "label" : "ForTests",\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.attnewUpMA"\n    },\n    "model" : {\n      "id" : 27,\n      "name" : "modelUpMA",\n      "type" : "COLLECTION"\n    },\n    "pos" : 0\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/modelUpMA/attributes/30"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/modelUpMA/attributes/30"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/modelUpMA/attributes/30"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/modelUpMA/attributes"\n  } ]\n}\n')))}c.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);