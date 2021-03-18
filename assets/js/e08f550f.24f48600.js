(window.webpackJsonp=window.webpackJsonp||[]).push([[2297],{2369:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(2703)),o={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response.md",version:"current"},p=[],c={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 106,\n    "label" : "Processing chain 1",\n    "active" : true,\n    "mode" : "MANUAL",\n    "locked" : false,\n    "periodicity" : "0 * * * * *",\n    "ingestChain" : "DefaultIngestChain",\n    "storages" : [ {\n      "pluginBusinessId" : "AWS",\n      "storePath" : "/path/to/file",\n      "targetTypes" : [ ]\n    }, {\n      "pluginBusinessId" : "HELLO",\n      "storePath" : "/other/path/to/file",\n      "targetTypes" : [ ]\n    } ],\n    "categories" : [ ],\n    "fileInfos" : [ {\n      "id" : 106,\n      "mandatory" : true,\n      "scanPlugin" : {\n        "id" : 123,\n        "pluginId" : "GlobDiskScanning",\n        "label" : "Scan plugin update",\n        "businessId" : "be2a4b25-1463-4539-bbd2-b218d4a4851c",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "directories",\n          "type" : "COLLECTION",\n          "value" : [ ],\n          "dynamic" : false\n        } ]\n      },\n      "mimeType" : "application/octet-stream",\n      "dataType" : "RAWDATA",\n      "comment" : "A comment"\n    } ],\n    "validationPluginConf" : {\n      "id" : 120,\n      "pluginId" : "DefaultFileValidation",\n      "label" : "update : Validation plugin",\n      "businessId" : "eed45b1d-031e-4333-9026-da25029ff379",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "productPluginConf" : {\n      "id" : 121,\n      "pluginId" : "DefaultProductPlugin",\n      "label" : "update : Product plugin",\n      "businessId" : "8a9b575b-ca37-400c-a4a3-c45216f1d4a9",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "generateSipPluginConf" : {\n      "id" : 122,\n      "pluginId" : "DefaultSIPGeneration",\n      "label" : "update : SIP generation plugin",\n      "businessId" : "4b4c0b5e-4002-4a4a-a723-99eb387861b0",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/chains"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/chains/106"\n  }, {\n    "rel" : "patch",\n    "href" : "http://localhost:8080/chains/106"\n  } ]\n}\n')))}l.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return t?a.a.createElement(g,s(s({ref:n},c),{},{components:t})):a.a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);