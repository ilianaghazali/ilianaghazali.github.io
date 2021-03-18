(window.webpackJsonp=window.webpackJsonp||[]).push([[1163],{1235:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2703)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields",id:"development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields",permalink:"/fr/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/request-fields.md",version:"current"},l=[],c={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |requestType| `String` |Request type filter|Optional. Multiple values allowed. Allowed values : INGEST, UPDATE, AIP_UPDATES_CREATOR, STORE_METADATA, OAIS_DELETION, OAIS_DELETION_CREATOR|\n    |state| `String` |State|Optional. Multiple values allowed. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED|\n    |stateExcluded| `String` |State excluded (ignored)|Optional. Multiple values allowed. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED|\n    |creationDate.from| `OffsetDateTime` |ISO Date time filtering on creation date|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |creationDate.to| `OffsetDateTime` |ISO Date time filtering on creation date|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |providerId| `String` |Provider id filter|Optional. If you add the % character, we will use the like operator to match entities|\n    |sessionOwner| `String` |Session owner filter|Optional.|\n    |session| `String` |Session filter|Optional.|\n")))}p.isMDXComponent=!0},2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,O=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(O,s(s({ref:t},c),{},{components:r})):a.a.createElement(O,s({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);