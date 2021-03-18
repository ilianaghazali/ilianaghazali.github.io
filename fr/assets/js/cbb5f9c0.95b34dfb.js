(window.webpackJsonp=window.webpackJsonp||[]).push([[2102],{2174:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),i=t(7),a=(t(0),t(2703)),o={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/notifier/overview/"},c={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"development/backend/regards/notifier/backend-notifier-overview",isDocsHomePage:!1,title:"Notifier microservice",description:"Overview",source:"@site/docs/development/backend/regards/notifier/notifier.md",slug:"/development/backend/notifier/overview/",permalink:"/fr/docs/development/backend/notifier/overview/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/notifier/notifier.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Feature Factory Plugin",permalink:"/fr/docs/development/backend/fem/plugins/feature-factory/"},next:{title:"Notifier API",permalink:"/fr/docs/development/backend/notifier/api/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Plugins",id:"available-plugins",children:[]}],u={toc:l};function p(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Receive JSON notification,"),Object(a.b)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api/configuration/"},"Configuration API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api/"},"API"))),Object(a.b)("h2",{id:"available-plugins"},"Available Plugins"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins#rule-matcher-plugins/"},"Rule matchers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins#recipient-sender-plugins/"},"Recipient senders"))))}p.isMDXComponent=!0},2703:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=p(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,f=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return t?i.a.createElement(f,c(c({ref:r},u),{},{components:t})):i.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);