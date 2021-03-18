(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{1011:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),d=(a(0),a(2703)),s={id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/dam/events/"},c={unversionedId:"development/backend/regards/dam/events/backend-dam-events",id:"development/backend/regards/dam/events/backend-dam-events",isDocsHomePage:!1,title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/docs/development/backend/regards/dam/events/events.md",slug:"/development/backend/dam/events/",permalink:"/fr/docs/development/backend/dam/events/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/dam/events/events.md",version:"current",sidebar:"dev",previous:{title:"Datasource plugin",permalink:"/fr/docs/development/backend/dam/plugins/datasource/"},next:{title:"Geospatial features management",permalink:"/fr/docs/development/backend/dam/geo/"}},o=[],i={toc:o};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(d.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(d.b)("div",{className:"admonition admonition-info alert alert--info"},Object(d.b)("div",{parentName:"div",className:"admonition-heading"},Object(d.b)("h5",{parentName:"div"},Object(d.b)("span",{parentName:"h5",className:"admonition-icon"},Object(d.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(d.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(d.b)("div",{parentName:"div",className:"admonition-content"},Object(d.b)("p",{parentName:"div"},"To know more about bus message mechanism look at ",Object(d.b)("a",{parentName:"p",href:"../../framework/starters/amqp/"},"AMQP starter")))),Object(d.b)("table",null,Object(d.b)("thead",{parentName:"table"},Object(d.b)("tr",{parentName:"thead"},Object(d.b)("th",{parentName:"tr",align:"left"},"Event"),Object(d.b)("th",{parentName:"tr",align:"left"},"Target"),Object(d.b)("th",{parentName:"tr",align:"left"},"Mode"),Object(d.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(d.b)("tbody",{parentName:"table"},Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/DatasetEvent.java"},"DatasetEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published For each event on a dataset entity (create, update, delete, index, error)")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/NotDatasetEntityEvent.java"},"NotDatasetEntityEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published For each event on object, collection and document entities (create, update, delete, index, error)")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupEvent.java"},"AccessGroupEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published for user group creation, modification or deletion")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupPublicEvent.java"},"AccessGroupPublicEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when a public group is defined or removed")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupAssociationEvent.java"},"AccessGroupAssociationEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when a group is associated to a user")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupDissociationEvent.java"},"AccessGroupDissociationEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when a group is dissociated to a user")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/event/AccessRightEvent.java"},"AccessRightEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when for access right creation, modification or deletion")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/AttributeModelCreated.java"},"AttributeModelCreated")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when an attribute is created")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/AttributeModelDeleted.java"},"AttributeModelDeleted")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when an attribute is deleted")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},Object(d.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/FragmentDeletedEvent.java"},"FragmentDeletedEvent")),Object(d.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(d.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(d.b)("td",{parentName:"tr",align:"left"},"Published when a fragment is deleted")))))}b.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=b(a),p=r,g=m["".concat(s,".").concat(p)]||m[p]||l[p]||d;return a?n.a.createElement(g,c(c({ref:t},i),{},{components:a})):n.a.createElement(g,c({ref:t},i))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,s=new Array(d);s[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<d;i++)s[i]=a[i];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);