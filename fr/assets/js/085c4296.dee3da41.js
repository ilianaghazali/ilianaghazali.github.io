(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(2703)),a={},c={unversionedId:"notes/migrations/notifier-migration-1.4.0-1.5.0",id:"notes/migrations/notifier-migration-1.4.0-1.5.0",isDocsHomePage:!1,title:"notifier-migration-1.4.0-1.5.0",description:"Notification sent by RabbitMQSender plugin",source:"@site/release_notes/notes/migrations/notifier-migration-1.4.0-1.5.0.md",slug:"/notes/migrations/notifier-migration-1.4.0-1.5.0",permalink:"/fr/release-notes/notes/migrations/notifier-migration-1.4.0-1.5.0",version:"current"},l=[],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"notification-sent-by-rabbitmqsender-plugin"},"Notification sent by RabbitMQSender plugin"),Object(o.b)("p",null,"Notification format using ",Object(o.b)("strong",{parentName:"p"},"RabbitMQSender")," plugin has been updated between version 1.4 and 1.5:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"element")," has been renamed to ",Object(o.b)("inlineCode",{parentName:"li"},"payload")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"action")," has been moved into objet ",Object(o.b)("inlineCode",{parentName:"li"},"metadata")," and is now located at ",Object(o.b)("inlineCode",{parentName:"li"},"$.metadata.action")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"$.action"))))}u.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||s[f]||o;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);