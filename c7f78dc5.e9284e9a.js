(window.webpackJsonp=window.webpackJsonp||[]).push([[2056],{2126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),s=(n(0),n(2701)),a={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response",id:"development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response.md",version:"current"},i=[],p={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 60,\n      "name" : "AG2",\n      "users" : [ ],\n      "isPublic" : true,\n      "isInternal" : false\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/accessgroups/AG2"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessgroups?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||s;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);