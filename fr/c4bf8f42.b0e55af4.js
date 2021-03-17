(window.webpackJsonp=window.webpackJsonp||[]).push([[2013],{2083:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(3),i=n(7),a=(n(0),n(2701)),o={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/notifier/overview"},c={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"version-1.4.0/development/backend/regards/notifier/backend-notifier-overview",isDocsHomePage:!1,title:"Notifier microservice",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/notifier/notifier.md",slug:"/development/backend/notifier/overview",permalink:"/fr/docs/1.4.0/development/backend/notifier/overview",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/notifier/notifier.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Feature Factory Plugin",permalink:"/fr/docs/1.4.0/development/backend/fem/plugins/feature-factory"},next:{title:"Notifier API",permalink:"/fr/docs/1.4.0/development/backend/notifier/api"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Plugins",id:"available-plugins",children:[]}],u={toc:l};function p(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Receive JSON notification,"),Object(a.b)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"api/configuration"},"Configuration API")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"api"},"API"))),Object(a.b)("h2",{id:"available-plugins"},"Available Plugins"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins#rule-matcher-plugins"},"Rule matchers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"plugins#recipient-sender-plugins"},"Recipient senders"))))}p.isMDXComponent=!0},2701:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var r=i.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},b=function(e){var r=p(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=t,f=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return n?i.a.createElement(f,c(c({ref:r},u),{},{components:n})):i.a.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);