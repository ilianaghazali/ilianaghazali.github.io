(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},354:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),i=(r(0),r(2703)),o={},s={unversionedId:"development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",id:"version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields.md",slug:"/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields.md",version:"1.4.0"},u=[],l={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |metadata.storages| `Array` |Target storages||\n    |metadata.storages[].pluginBusinessId| `String` |Storage identifier||\n    |features[].entityType| `String` |Entity Type||\n    |metadata.session| `String` |The session name||\n    |metadata.sessionOwner| `String` |The session owner||\n    |features[].model| `String` |Model||\n    |features[].id| `String` |Technical id||\n    |features[].geometry| `Object` |GeoJson Coordinates||\n    |features[].properties| `Object` |Properties||\n    |features[].files[].locations[].storage| `Null` |Storage||\n    |features[].files[].locations[].url| `String` |Url location||\n    |features[].files[].attributes.dataType| `String` |Data type||\n    |features[].files[].attributes.mimeType| `String` |Media type||\n    |features[].files[].attributes.filename| `String` |File name||\n    |features[].files[].attributes.filesize| `Number` |File size||\n    |features[].files[].attributes.algorithm| `String` |Algorith for checksum computation||\n    |features[].files[].attributes.checksum| `String` |Checksum||\n")))}c.isMDXComponent=!0}}]);