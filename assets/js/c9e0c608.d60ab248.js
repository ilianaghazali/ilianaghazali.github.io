(window.webpackJsonp=window.webpackJsonp||[]).push([[2083],{2155:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),i=(t(0),t(2703)),o={},s={unversionedId:"development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",id:"version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",isDocsHomePage:!1,title:"migration-1.3.0-1.4.0",description:"V1.3.0 to V1.4.0 migration",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0.md",slug:"/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",permalink:"/docs/1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0.md",version:"1.4.0"},c=[{value:"AMQP Feature requests",id:"amqp-feature-requests",children:[{value:"Feature creation request",id:"feature-creation-request",children:[]},{value:"Feature creation request by file reference",id:"feature-creation-request-by-file-reference",children:[]},{value:"Feature patch request",id:"feature-patch-request",children:[]},{value:"Feature deletion request",id:"feature-deletion-request",children:[]}]},{value:"AMQP monitoring API",id:"amqp-monitoring-api",children:[{value:"Requests response",id:"requests-response",children:[]}]}],u={toc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"v130-to-v140-migration"},"V1.3.0 to V1.4.0 migration"),Object(i.b)("h2",{id:"amqp-feature-requests"},"AMQP Feature requests"),Object(i.b)("h3",{id:"feature-creation-request"},"Feature creation request"),Object(i.b)("p",null,"No changes in amqp interfaces."),Object(i.b)("h3",{id:"feature-creation-request-by-file-reference"},"Feature creation request by file reference"),Object(i.b)("p",null,'Reference requests in previous version are renamed to "Extraction requests" in V1.4.0.'),Object(i.b)("p",null,"New extraction requests has to be published on this exchange : ",Object(i.b)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent"),"\nIn previous version reference requests were sent to : ",Object(i.b)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent")),Object(i.b)("p",null,"The requests body and header has not changed."),Object(i.b)("h3",{id:"feature-patch-request"},"Feature patch request"),Object(i.b)("p",null,"No changes in amqp interfaces."),Object(i.b)("h3",{id:"feature-deletion-request"},"Feature deletion request"),Object(i.b)("p",null,"No changes in amqp interfaces."),Object(i.b)("h2",{id:"amqp-monitoring-api"},"AMQP monitoring API"),Object(i.b)("h3",{id:"requests-response"},"Requests response"),Object(i.b)("p",null,"In previuous version requests responses were all sent to : ",Object(i.b)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")),Object(i.b)("p",null,"In new version :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All Creation/Notification/Deletion/Update requests responses are sent to : ",Object(i.b)("inlineCode",{parentName:"li"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")),Object(i.b)("li",{parentName:"ul"},"Extraction requests responses are sent to : ",Object(i.b)("inlineCode",{parentName:"li"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent"))))}l.isMDXComponent=!0},2703:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,s(s({ref:r},u),{},{components:t})):a.a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);