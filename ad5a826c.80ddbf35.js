(window.webpackJsonp=window.webpackJsonp||[]).push([[1776],{1846:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(7),o=(r(0),r(2701)),i={},l={unversionedId:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body",id:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body",isDocsHomePage:!1,title:"request-body",description:"* Data params",source:"@site/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body.md",slug:"/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body",permalink:"/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/common/api/generated-snippets/PluginControllerIT/savePluginConfiguration/request-body.md",version:"current"},c=[],u={toc:c};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Data params"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},' {\n  "pluginId" : "aSamplePlugin",\n  "label" : "a plugin configuration for the test",\n  "version" : "12345-6789-11",\n  "priorityOrder" : 0,\n  "active" : true,\n  "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",\n  "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],\n  "parameters" : [ {\n    "name" : "param31",\n    "value" : "value31",\n    "dynamic" : true,\n    "dynamicsValues" : [ "red", "blue", "green" ],\n    "onlyDynamic" : false\n  }, {\n    "name" : "param32",\n    "value" : "value32",\n    "dynamic" : false,\n    "dynamicsValues" : [ ],\n    "onlyDynamic" : false\n  }, {\n    "name" : "isActive",\n    "value" : "true",\n    "dynamic" : false,\n    "dynamicsValues" : [ ],\n    "onlyDynamic" : false\n  } ],\n  "iconUrl" : "http://google.fr/svg/logo.svg"\n}\n')))}s.isMDXComponent=!0},2701:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return g}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?a.a.createElement(g,l(l({ref:n},u),{},{components:r})):a.a.createElement(g,l({ref:n},u))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);