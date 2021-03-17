(window.webpackJsonp=window.webpackJsonp||[]).push([[2427],{2497:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(2701)),a={id:"frontend-packages-business-components",title:"REGARDS business components",sidebar_label:"Overview - Business components",slug:"/development/frontend/packages/business-components"},s={unversionedId:"development/frontend/components/frontend-packages-business-components",id:"version-1.4.0/development/frontend/components/frontend-packages-business-components",isDocsHomePage:!1,title:"REGARDS business components",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/business-index.md",slug:"/development/frontend/packages/business-components",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/business-index.md",version:"1.4.0",sidebar_label:"Overview - Business components",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS components",permalink:"/fr/docs/1.4.0/development/frontend/packages/components"},next:{title:"Microservice plugin configurator",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/microservice-plugin-configurator"}},c=[{value:"Description",id:"description",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/business")," folder provides re-usable business oriented modules, each of them holding a set of React Component often shared between admin and user applications. The complete list of those modules is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"admin-data-entities-attributes-management: Component to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, ..) attributes configurator form "),Object(i.b)("li",{parentName:"ul"},"attributes-common: Components to display a REGARDS attribute configuration field for standard, dynamic and regroupements attributes"),Object(i.b)("li",{parentName:"ul"},"endpoints-common: Backend global client to retrieve access rights on microservices endpoints "),Object(i.b)("li",{parentName:"ul"},"entities-common: Components to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, DATA, ....) description or apply a service on entity"),Object(i.b)("li",{parentName:"ul"},"global-system-error: Application decorator to handle server requests errors"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"business-components/microservice-plugin-configurator"},"microservice-plugin-configurator"),": Component to configure any backend plugin of any REGARDS microservice "),Object(i.b)("li",{parentName:"ul"},"order-common: Components to handle REGARDS orders"),Object(i.b)("li",{parentName:"ul"},"project-handler: Application decorator to retrieve current project "),Object(i.b)("li",{parentName:"ul"},"user-metadata-common: Component to display a REGARDS user metadata configator fields. Used for user creation/updates")))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(b,s(s({ref:n},p),{},{components:t})):o.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);