(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,s=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.a.createElement(s,i(i({ref:t},c),{},{components:r})):a.a.createElement(s,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},959:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2703)),l={},i={unversionedId:"development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",id:"version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",isDocsHomePage:!1,title:"migration-1.1.0-1.2.0",description:"V1.1.0 to V1.2.0 migration",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0.md",slug:"/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",permalink:"/docs/1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0.md",version:"1.4.0"},b=[],c={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"v110-to-v120-migration"},"V1.1.0 to V1.2.0 migration"),Object(o.b)("p",null,"Removed properties (replaced by headers):"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestId"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 36 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestOwner"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 128 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestDate"),Object(o.b)("td",{parentName:"tr",align:null},"ISO 8601 date")))),Object(o.b)("p",null,"Removed headers:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Header"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.converter"),Object(o.b)("td",{parentName:"tr",align:null},"GSON")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.type"),Object(o.b)("td",{parentName:"tr",align:null},"fr.cnes.regards.modules.feature.dto.event.in.*")))),Object(o.b)("p",null,"New headers:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Header"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.id"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 36 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.date"),Object(o.b)("td",{parentName:"tr",align:null},"ISO 8601 date")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.owner"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 128 characters long")))))}p.isMDXComponent=!0}}]);