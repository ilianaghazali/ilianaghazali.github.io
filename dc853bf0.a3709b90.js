(window.webpackJsonp=window.webpackJsonp||[]).push([[2251],{2323:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(2701)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",isDocsHomePage:!1,title:"request-body",description:"Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",permalink:"/docs/1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md",version:"1.4.0"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params***\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "ingestProcessingChain_test",\n  "description" : "the ingest processing chain description",\n  "validationPlugin" : {\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generationPlugin" : {\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,b=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);