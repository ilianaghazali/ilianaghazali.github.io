(window.webpackJsonp=window.webpackJsonp||[]).push([[2141],{2213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(2701)),s={},i={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",id:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content[].content.state| `String` |State|Must not be null. Allowed values : GENERATED, STORED, DELETED|\n    |content[].content.providerId| `String` |Provider id|Must not be blank|\n    |content[].content.aipId| `String` |AIP id|Must not be blank|\n    |content[].content.creationDate| `String` |Date of AIP creation|Must not be null|\n    |content[].content.lastUpdate| `String` |Date of last AIP update|Must not be null|\n    |content[].content.tags| `Array` |List of tags||\n    |content[].content.aip| `Object` |Generated AIP|Must not be null|\n    |content[].content.sessionOwner| `String` |Session owner|Must not be blank|\n    |content[].content.session| `String` |Session|Must not be blank|\n    |content[].content.storages| `Array` |List of storage||\n    |content[].content.categories| `Array` |List of categories||\n")))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);