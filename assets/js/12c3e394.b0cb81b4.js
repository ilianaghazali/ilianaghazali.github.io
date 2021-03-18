(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{261:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(2703)),s={id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/storage/overview/"},o={unversionedId:"development/backend/regards/storage/backend-storage-overview",id:"development/backend/regards/storage/backend-storage-overview",isDocsHomePage:!1,title:"REGARDS storage microservice",description:"Overview",source:"@site/docs/development/backend/regards/storage/storage.md",slug:"/development/backend/storage/overview/",permalink:"/docs/development/backend/storage/overview/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/storage/storage.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"REGARDS Processing Plugin API",permalink:"/docs/development/backend/processing/plugins/"},next:{title:"REGARDS Storage API",permalink:"/docs/development/backend/storage/api/"}},l=[{value:"Overview",id:"overview",children:[{value:"Store AIP",id:"store-aip",children:[]},{value:"Retrive AIP files",id:"retrive-aip-files",children:[]}]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],c={toc:l};function b(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Storage")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Store/Delete/Monitor AIPs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add/remove tag(s) on AIPs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Makes AIP files available in cache system for retrieval."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:a(2718).default})))),Object(i.b)("h3",{id:"store-aip"},"Store AIP"),Object(i.b)("p",null,"The schema here under shows the main process of AIP storing. ",Object(i.b)("a",{parentName:"p",href:"../plugins/allocation-strategy/"},"Allocation strategy")," and ",Object(i.b)("a",{parentName:"p",href:"../plugins/data-storage/"},"Data storages")," are designed as extension points to allow developer to create their own businness needs."),Object(i.b)("p",null,Object(i.b)("img",{src:a(2719).default})),Object(i.b)("h3",{id:"retrive-aip-files"},"Retrive AIP files"),Object(i.b)("p",null,"In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage ",Object(i.b)("a",{parentName:"p",href:"../plugins/data-storage/"},"Online Data storages")," the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request."),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/"},"Storage"))),Object(i.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../plugins/allocation-strategy/"},"Allocation strategy plugins")," : Strategy to dispatch files in available storage systems."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../plugins/data-storage/"},"Data storage plugins")," : Storage systems"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../plugins/security-delegation/"},"Security delegation plugins")," : Delegate access rights to stored files")),Object(i.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../events/"},"Events"))))}b.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,v=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return a?n.a.createElement(v,o(o({ref:t},c),{},{components:a})):n.a.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2718:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/storage-6a04f3ba9b5014967890ff56afade41c.svg"},2719:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sto-store-aip-simple-f1d5424f7a47c2d9b49a46bda421ce74.png"}}]);