(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2701)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response",id:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/searchSipWithErrors/http-response.md",version:"current"},p=[],c={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 4,\n      "providerId" : "SIP_001",\n      "sipId" : "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1",\n      "owner" : "me",\n      "version" : 1,\n      "state" : "INVALID",\n      "processingErrors" : [ "error1", "error2" ],\n      "checksum" : "12332323f2ds3d6g6df",\n      "sip" : {\n        "ipType" : "DATA",\n        "id" : "SIP_001",\n        "geometry" : null,\n        "normalizedGeometry" : null,\n        "properties" : {\n          "contentInformations" : [ {\n            "representationInformation" : {\n              "syntax" : {\n                "description" : "http://www.iana.org/assignments/media-types/application/fits",\n                "mimeType" : "application/fits",\n                "name" : "FITS(FlexibleImageTransport)"\n              }\n            },\n            "dataObject" : {\n              "regardsDataType" : "RAWDATA",\n              "reference" : false,\n              "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],\n              "filename" : "data1.fits",\n              "algorithm" : "MD5",\n              "checksum" : "sdsdfm1211vd"\n            }\n          } ],\n          "pdi" : {\n            "contextInformation" : { },\n            "referenceInformation" : { },\n            "provenanceInformation" : {\n              "history" : [ ]\n            },\n            "fixityInformation" : { },\n            "accessRightInformation" : { }\n          },\n          "descriptiveInformation" : { },\n          "miscInformation" : { }\n        },\n        "type" : "Feature"\n      },\n      "ingestDate" : "2019-07-19T17:31:58.701Z",\n      "processing" : "DefaultProcessingChain",\n      "session" : {\n        "id" : "session",\n        "lastActivationDate" : "2019-07-19T17:31:58.705Z",\n        "sipsCount" : 0,\n        "indexedSipsCount" : 0,\n        "storedSipsCount" : 0,\n        "generatedSipsCount" : 0,\n        "errorSipsCount" : 0,\n        "deletedSipsCount" : 0,\n        "generationErrorCount" : 0\n      }\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/sips?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(f,s(s({ref:n},c),{},{components:t})):o.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);