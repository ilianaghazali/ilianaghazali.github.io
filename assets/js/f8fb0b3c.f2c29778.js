(window.webpackJsonp=window.webpackJsonp||[]).push([[2555],{2627:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),i=t(7),a=(t(0),t(2703)),o={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/notifier/overview/"},l={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"version-1.4.0/development/backend/regards/notifier/backend-notifier-overview",isDocsHomePage:!1,title:"Notifier microservice",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/notifier/notifier.md",slug:"/development/backend/notifier/overview/",permalink:"/docs/1.4.0/development/backend/notifier/overview/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/notifier/notifier.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Feature Factory Plugin",permalink:"/docs/1.4.0/development/backend/fem/plugins/feature-factory/"},next:{title:"Notifier API",permalink:"/docs/1.4.0/development/backend/notifier/api/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Plugins",id:"available-plugins",children:[]}],p={toc:c};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Receive JSON notification,"),Object(a.b)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api/configuration/"},"Configuration API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api/"},"API"))),Object(a.b)("h2",{id:"available-plugins"},"Available Plugins"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins#rule-matcher-plugins/"},"Rule matchers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins#recipient-sender-plugins/"},"Recipient senders"))))}u.isMDXComponent=!0},2703:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return v}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,v=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return t?i.a.createElement(v,l(l({ref:r},p),{},{components:t})):i.a.createElement(v,l({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);