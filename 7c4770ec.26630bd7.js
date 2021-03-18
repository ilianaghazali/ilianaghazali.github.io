(window.webpackJsonp=window.webpackJsonp||[]).push([[1272],{1343:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),i=(t(0),t(2701)),o={},l={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",isDocsHomePage:!1,title:"request-parameters",description:"*Query params",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md",version:"current"},c=[],p={toc:c};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Query params**\n\n    |Parameter|Type|Description|Constraints| |:-------:|:--:|:---------:|:---------:|\n    | `filePath` |String|Entire file path filter|Optional|\n    | `state` |String|Acquisition file state filter|Optional. Multiple values allowed. Allowed values : IN_PROGRESS, VALID, INVALID, ACQUIRED, SUPERSEDED, SUPERSEDED_AFTER_ERROR, ERROR|\n    | `productId` |Number|Product acquisition file(s) identifier filter|Optional|\n    | `chainId` |Number|Acquisition chain identifier filter|Optional|\n    | `from` |String|ISO Date time filter|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n")))}s.isMDXComponent=!0},2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return t?a.a.createElement(m,l(l({ref:r},p),{},{components:t})):a.a.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);