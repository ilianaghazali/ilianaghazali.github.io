(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},313:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(2701)),l={id:"backend-processing-monitoring-api",title:"REGARDS Processing Monitoring API",sidebar_label:"Monitoring",slug:"/development/backend/processing/api/monitoring"},o={unversionedId:"development/backend/regards/processing/api/backend-processing-monitoring-api",id:"development/backend/regards/processing/api/backend-processing-monitoring-api",isDocsHomePage:!1,title:"REGARDS Processing Monitoring API",description:"GET /monitoring/executions",source:"@site/docs/development/backend/regards/processing/api/monitoring-api.md",slug:"/development/backend/processing/api/monitoring",permalink:"/docs/development/backend/processing/api/monitoring",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/processing/api/monitoring-api.md",version:"current",sidebar_label:"Monitoring",sidebar:"dev",previous:{title:"REGARDS Processing Batch API",permalink:"/docs/development/backend/processing/api/batch"},next:{title:"REGARDS Processing Open API",permalink:"/docs/development/backend/processing/api/open"}},c=[{value:"GET <code>/monitoring/executions</code>",id:"get-monitoringexecutions",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"get-monitoringexecutions"},"GET ",Object(i.b)("inlineCode",{parentName:"h2"},"/monitoring/executions")),Object(i.b)("p",null,"List the executions present in the processing database, filtered by diverse criteria."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Located in"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Schema"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"tenant"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The tenant"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"status"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The list of execution status"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"[ RUNNING, SUCCESS, FAILURE, TIMED_OUT ]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"userEmail"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The optional user who launched the executions"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The optional process business ID the executions refer to"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"from"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The execution 'last updated' minimum timestamp"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"to"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The execution 'last updated' maximum timestamp"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"page"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The page number"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"integer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"size"),Object(i.b)("td",{parentName:"tr",align:null},"query"),Object(i.b)("td",{parentName:"tr",align:null},"The page size"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"integer")))),Object(i.b)("h3",{id:"responses"},"Responses"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Code"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"200"),Object(i.b)("td",{parentName:"tr",align:null},"default response")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"500"),Object(i.b)("td",{parentName:"tr",align:null},"default response")))),Object(i.b)("p",null,"Sample 200 response body:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "links": [\n    {\n      "rel": "string",\n      "href": "string",\n      "hreflang": "string",\n      "media": "string",\n      "title": "string",\n      "type": "string",\n      "deprecation": "string",\n      "profile": "string",\n      "name": "string"\n    }\n  ],\n  "content": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "executionCorrelationId": "string",\n      "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "batchCorrelationId": "string",\n      "expectedDuration": 0,\n      "inputFiles": [{}],\n      "steps": [{}],\n      "tenant": "string",\n      "userName": "string",\n      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "created": "2020-12-31T00:00:00Z",\n      "lastUpdated": "2020-12-31T00:00:00Z",\n      "version": 0,\n      "persisted": true,\n      "processName": "string",\n      "links": [\n        {\n          "rel": "string",\n          "href": "string",\n          "hreflang": "string",\n          "media": "string",\n          "title": "string",\n          "type": "string",\n          "deprecation": "string",\n          "profile": "string",\n          "name": "string"\n        }\n      ]\n    }\n  ],\n  "page": {\n    "size": 0,\n    "totalElements": 0,\n    "totalPages": 0,\n    "number": 0\n  }\n}\n')))}p.isMDXComponent=!0}}]);