(window.webpackJsonp=window.webpackJsonp||[]).push([[2174],{2246:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(2703)),o={},u={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields",permalink:"/fr/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields.md",version:"1.4.0"},s=[],l={toc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |id| `Number` |Model attribute association identifier||\n    |attribute| `Object` |Model attribute association attribute|Must not be null|\n    |attribute.id| `Number` |Attribute Model identifier|Must be positive|\n    |attribute.name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |attribute.description| `String` |Attribute description||\n    |attribute.defaultValue| `String` |Attribute default value||\n    |attribute.type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|\n    |attribute.unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|\n    |attribute.precision| `Number` |Attribute precision useful for double based attributes||\n    |attribute.arraySize| `Number` |Attribute array size useful for array based attributes||\n    |attribute.fragment| `Object` |Attribute Fragment|Should respect Fragment structure|\n    |attribute.fragment.id| `Number` |Fragment identifier|Must be a whole number|\n    |attribute.fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |attribute.fragment.description| `String` |Fragment description|Optional|\n    |attribute.fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|\n    |attribute.alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|\n    |attribute.optional| `Boolean` |Whether this attribute is optional|defaults to false|\n    |attribute.label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|\n    |attribute.restriction| `Object` |Attribute applicable restriction||\n    |attribute.restriction.id| `Number` |Restriction identifier||\n    |attribute.restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|\n    |attribute.restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |attribute.restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |attribute.restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |attribute.restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |attribute.restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|\n    |attribute.restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|\n    |attribute.group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|\n    |attribute.properties| `Array` |Custom attribute properties||\n    |attribute.properties[].id| `Number` |Attribute property identifier||\n    |attribute.properties[].key| `String` |Custom key||\n    |attribute.properties[].value| `String` |Custom value||\n    |attribute.dynamic| `Boolean` |Used in search request parsing only|Defaults to true|\n    |attribute.internal| `Boolean` |Used in search request parsing only|Defaults to false|\n    |attribute.jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||\n    |model| `Object` |Model attribute association model||\n    |model.id| `Number` |model identifier||\n    |model.name| `String` |model name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |model.description| `String` |model description||\n    |model.version| `String` |model version||\n    |model.type| `String` |model type|Must not be null. Available values: COLLECTION, DATA, DATASET|\n    |computationConf| `Object` |Computation plugin configuration|Should respect PluginConfiguration structure|\n    |pos| `Number` |Position (allows to sort attribute in model)|Should be a whole number. Defaults to 0|\n")))}b.isMDXComponent=!0},2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||c[d]||a;return r?i.a.createElement(m,u(u({ref:t},l),{},{components:r})):i.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);