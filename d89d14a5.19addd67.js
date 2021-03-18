(window.webpackJsonp=window.webpackJsonp||[]).push([[2209],{2281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(2701)),a={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createObject/response-fields.md",version:"1.4.0"},c=[],u={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content.id| `Number` |Attribute Model identifier|Must be positive|\n    |content.name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.description| `String` |Attribute description||\n    |content.defaultValue| `String` |Attribute default value||\n    |content.type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|\n    |content.unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|\n    |content.precision| `Number` |Attribute precision useful for double based attributes||\n    |content.arraySize| `Number` |Attribute array size useful for array based attributes||\n    |content.fragment| `Object` |Attribute Fragment|Should respect Fragment structure|\n    |content.fragment.id| `Number` |Fragment identifier|Must be a whole number|\n    |content.fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.fragment.description| `String` |Fragment description|Optional|\n    |content.fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|\n    |content.alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|\n    |content.optional| `Boolean` |Whether this attribute is optional|defaults to false|\n    |content.label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|\n    |content.restriction| `Object` |Attribute applicable restriction||\n    |content.restriction.id| `Number` |Restriction identifier||\n    |content.restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|\n    |content.restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|\n    |content.restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|\n    |content.group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|\n    |content.properties| `Array` |Custom attribute properties||\n    |content.properties[].id| `Number` |Attribute property identifier||\n    |content.properties[].key| `String` |Custom key||\n    |content.properties[].value| `String` |Custom value||\n    |content.dynamic| `Boolean` |Used in search request parsing only|Defaults to true|\n    |content.internal| `Boolean` |Used in search request parsing only|Defaults to false|\n    |content.jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||\n")))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,s(s({ref:t},u),{},{components:n})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);