(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(t),s=a,b=l["".concat(i,".").concat(s)]||l[s]||m[s]||o;return t?r.a.createElement(b,p(p({ref:n},d),{},{components:t})):r.a.createElement(b,p({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},416:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(2701)),i={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md",version:"1.4.0"},c=[],d={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "id" : 60,\n  "pluginId" : "MockDatasourcePlugin",\n  "label" : "76cffa14-8dd7-4b5e-9644-3eccfb56bf89",\n  "businessId" : "6f2fe43b-e7da-4a39-a20c-fa60b3925523",\n  "version" : "alpha",\n  "priorityOrder" : 0,\n  "active" : true,\n  "parameters" : [ {\n    "name" : "mapping",\n    "type" : "COLLECTION",\n    "value" : [ {\n      "name" : "providerId",\n      "type" : "LONG",\n      "nameDS" : "id",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "label",\n      "type" : "STRING",\n      "nameDS" : "name",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "alt",\n      "type" : "INTEGER",\n      "namespace" : "geometry",\n      "nameDS" : "altitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "lat",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "latitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "long",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "longitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate1",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate2",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "date",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "date",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "timeStampWithTimeZone",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "isUpdate",\n      "type" : "BOOLEAN",\n      "namespace" : "hello",\n      "nameDS" : "update",\n      "attributeType" : "DYNAMIC"\n    } ],\n    "dynamic" : false\n  }, {\n    "name" : "fromClause",\n    "type" : "STRING",\n    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",\n    "dynamic" : false\n  }, {\n    "name" : "modelName",\n    "type" : "STRING",\n    "value" : "VALIDATION_MODEL_2",\n    "dynamic" : false\n  }, {\n    "name" : "connection",\n    "type" : "PLUGIN",\n    "value" : "51e1b6e9-07a9-4965-9eca-8b35db561f8d",\n    "dynamic" : false\n  } ]\n}\n')))}u.isMDXComponent=!0}}]);