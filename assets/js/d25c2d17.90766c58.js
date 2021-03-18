(window.webpackJsonp=window.webpackJsonp||[]).push([[2156],{2228:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2703)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response",permalink:"/docs/1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response.md",version:"1.4.0"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 56,\n    "name" : "TestProcessingChain",\n    "validationPlugin" : {\n      "id" : 58,\n      "pluginId" : "DefaultSipValidation",\n      "label" : "TestSIPValidation",\n      "businessId" : "eb05434f-5087-4bc1-b027-46ea71f520ae",\n      "version" : "1.0.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "generationPlugin" : {\n      "id" : 59,\n      "pluginId" : "DefaultSingleAIPGeneration",\n      "label" : "TestAIPGeneration",\n      "businessId" : "9e666134-6bc4-4c2c-b406-d7a19b81d4ae",\n      "version" : "1.0.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    }\n  },\n  "links" : [ {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/processingchains/TestProcessingChain"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/processingchains/TestProcessingChain"\n  }, {\n    "rel" : "export",\n    "href" : "http://localhost:8080/processingchains/TestProcessingChain/export"\n  } ]\n}\n')))}l.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,b=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return t?o.a.createElement(b,s(s({ref:n},p),{},{components:t})):o.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);