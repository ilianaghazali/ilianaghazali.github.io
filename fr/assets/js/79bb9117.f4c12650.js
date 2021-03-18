(window.webpackJsonp=window.webpackJsonp||[]).push([[1235],{1306:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(2703)),s={id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/storage/events/"},i={unversionedId:"development/backend/regards/storage/events/backend-storage-events",id:"version-1.4.0/development/backend/regards/storage/events/backend-storage-events",isDocsHomePage:!1,title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/storage/events/events.md",slug:"/development/backend/storage/events/",permalink:"/fr/docs/1.4.0/development/backend/storage/events/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/events/events.md",version:"1.4.0",sidebar_label:"Bus message events",sidebar:"version-1.4.0/dev",previous:{title:"Security delegation plugins",permalink:"/fr/docs/1.4.0/development/backend/storage/plugins/security-delegation/"},next:{title:"Development setup and build",permalink:"/fr/docs/1.4.0/development/frontend/introduction/setup/"}},c=[],l={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To know more about bus message mechanism look at ",Object(o.b)("a",{parentName:"p",href:"../../framework/starters/amqp/"},"AMQP starter")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Event"),Object(o.b)("th",{parentName:"tr",align:"left"},"Target"),Object(o.b)("th",{parentName:"tr",align:"left"},"Mode"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java"},"AIPEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),Object(o.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java"},"DataFileEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(o.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java"},"DataStorageEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),Object(o.b)("td",{parentName:"tr",align:"left"},"Unicast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Published when a file is stored, deleted or restored")))))}d.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,g=b["".concat(s,".").concat(p)]||b[p]||m[p]||o;return a?r.a.createElement(g,i(i({ref:t},l),{},{components:a})):r.a.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);