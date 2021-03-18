(window.webpackJsonp=window.webpackJsonp||[]).push([[2161],{2233:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(2703)),o={id:"backend-fem-overview",title:"REGARDS feature management microservice",sidebar_label:"Overview",slug:"/development/backend/fem/overview/"},c={unversionedId:"development/backend/regards/fem/backend-fem-overview",id:"development/backend/regards/fem/backend-fem-overview",isDocsHomePage:!1,title:"REGARDS feature management microservice",description:"Overview",source:"@site/docs/development/backend/regards/fem/fem.md",slug:"/development/backend/fem/overview/",permalink:"/fr/docs/development/backend/fem/overview/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/fem/fem.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Geospatial features management",permalink:"/fr/docs/development/backend/dam/geo/"},next:{title:"Feature Manager configuration API",permalink:"/fr/docs/development/backend/fem/api/configuration/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fem")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Feature extraction thanks to one of ",Object(i.b)("a",{parentName:"li",href:"../plugins/feature-factory/"},"IFeatureFactoryPlugin")," implementation,"),Object(i.b)("li",{parentName:"ul"},"Feature creation,"),Object(i.b)("li",{parentName:"ul"},"Feature update,"),Object(i.b)("li",{parentName:"ul"},"Feature deletion.")),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/configuration/"},"Configuration REST API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/rest/"},"REST API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/amqp/"},"AMQP API"))))}p.isMDXComponent=!0},2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,d=b["".concat(o,".").concat(f)]||b[f]||m[f]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);