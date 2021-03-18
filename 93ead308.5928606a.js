(window.webpackJsonp=window.webpackJsonp||[]).push([[1532],{1604:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(2701)),o={id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/notifier/plugins"},u={unversionedId:"development/backend/regards/notifier/plugins/backend-notifier-plugins",id:"version-1.4.0/development/backend/regards/notifier/plugins/backend-notifier-plugins",isDocsHomePage:!1,title:"Notifier plugins",description:"Rule matcher plugins",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/notifier/plugins/notifier-plugins.md",slug:"/development/backend/notifier/plugins",permalink:"/docs/1.4.0/development/backend/notifier/plugins",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/notifier/plugins/notifier-plugins.md",version:"1.4.0",sidebar_label:"Notifier",sidebar:"version-1.4.0/dev",previous:{title:"Notifier configuration",permalink:"/docs/1.4.0/development/backend/notifier/api/configuration"},next:{title:"REGARDS dataprovider microservice",permalink:"/docs/1.4.0/development/backend/dataprovider/overview"}},c=[{value:"Rule matcher plugins",id:"rule-matcher-plugins",children:[]},{value:"Recipient sender plugins",id:"recipient-sender-plugins",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rule-matcher-plugins"},"Rule matcher plugins"),Object(a.b)("p",null,"Rules are used to define if a notification should be sent to associated RecipientSenders."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DefaultRuleMatcher :"),Object(a.b)("br",{parentName:"p"}),"\n","This rule matcher allows to check into notification content if a json property match a specific value. If so,  the notification is sent to associated senders.",Object(a.b)("br",{parentName:"p"}),"\n","Configuration parameters are :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"attributeToSeek : attribut name to search for the notification json content. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"attributeValueToSeek : attribut value to match."),Object(a.b)("p",{parentName:"li"},"To configure this plugin use the here  under configuration block in import module ",Object(a.b)("a",{parentName:"p",href:"api/configuration"},"configuration")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"DefaultRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"attributeValueToSeek", "type":"STRING", "value":"{attribute to searh for}"},\n      {"name":"attributeToSeek", "type":"STRING", "value":"{value to match}"}\n    ]\n  }\n}      \n')),Object(a.b)("h2",{id:"recipient-sender-plugins"},"Recipient sender plugins"),Object(a.b)("p",null,"Senders are used to define how to send notification to recipients."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"RabbitMQSender :"),Object(a.b)("br",{parentName:"p"}),"\n","This  sender is used to send notification on a specific RabbitMQ couple exchange/queue.",Object(a.b)("br",{parentName:"p"}),"\n","Configuration parameters are :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"exchange : Name  of the  exchange to use")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"queueName : Name of the queue to use"),Object(a.b)("p",{parentName:"li"},"To configure this plugin use the here  under configuration block in import module ",Object(a.b)("a",{parentName:"p",href:"api/configuration"},"configuration")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},' {\n     "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n     "value": {\n     "pluginId":"RabbitMQSender",\n     "label":"{label}",\n     "businessId":"{uniqueIdentifier}",\n     "version":"1.0.0",\n     "priorityOrder":0,\n     "active":true,\n     "parameters":[\n       {"name":"exchange", "type":"STRING", "value":"{exchange name to use}"},\n       {"name":"queueName", "type":"STRING", "value":"{queue name to use}"}\n     ]\n   }\n},\n')))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return t?i.a.createElement(f,u(u({ref:n},l),{},{components:t})):i.a.createElement(f,u({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);