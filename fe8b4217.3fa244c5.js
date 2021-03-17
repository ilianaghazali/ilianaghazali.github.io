(window.webpackJsonp=window.webpackJsonp||[]).push([[2606],{2676:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(2701)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields",id:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPTags/request-fields.md",version:"current"},l=[],p={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |state| `String` |AIP Entity state filter|Optional. Multiple values allowed. Allowed values : GENERATED, STORED, DELETED|\n    |lastUpdate.from| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |lastUpdate.to| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |tags| `List` |A list of tags every entity must have|Optional.|\n    |providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|\n    |sessionOwner| `String` |Session owner filter|Optional.|\n    |session| `String` |Session filter|Optional.|\n    |categories| `List` |A list of categories every entity must have|Optional.|\n    |storages| `List` |A list of storage names the entity must have, at least one|Optional.|\n    |aipIds| `List` |A list of aip ids|Optional.|\n    |aipIds| `List` |A list of aip ids|Optional.|\n    |state| `String` |This attribute describe what the aipIds list mean.|Optional. Allowed values : INCLUDE, EXCLUDE|\n")))}c.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?a.a.createElement(g,s(s({ref:t},p),{},{components:n})):a.a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);