(window.webpackJsonp=window.webpackJsonp||[]).push([[1950],{2020:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(2701)),i={id:"backend-framework-starters-authentication",title:"Authentication starter",slug:"/development/backend/framework/starters/authentication"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-authentication",id:"development/backend/framework/starters/backend-framework-starters-authentication",isDocsHomePage:!1,title:"Authentication starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/authentication-starter.md",slug:"/development/backend/framework/starters/authentication",permalink:"/docs/development/backend/framework/starters/authentication",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/framework/starters/authentication-starter.md",version:"current",sidebar:"dev",previous:{title:"AMQP starter",permalink:"/docs/development/backend/framework/starters/amqp"},next:{title:"Cloud starter",permalink:"/docs/development/backend/framework/starters/cloud"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to use",id:"how-to-use",children:[]},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",children:[]}]}],l={toc:u};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter is used to retrieve current user properties regardless of the authentication management."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards-starter</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Business dependency"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Dependency :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"None")),Object(o.b)("p",null,"Used by :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"security"},"Security starter"))),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Starter autoconfigures beans ",Object(o.b)("strong",{parentName:"p"},"unless it already exists")," :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IAuthenticationResolver")," to retrieve current user and role at runtime,")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In production, the implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," must be ",Object(o.b)("strong",{parentName:"p"},"thread safe"),"."))),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"how-to-use"},"How to use"),Object(o.b)("p",null,"Just inject bean in your component."),Object(o.b)("h3",{id:"how-to-override-default-behaviour"},"How to override default behaviour"),Object(o.b)("p",null,"Create your own ",Object(o.b)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," bean to implement your own authentication info retrieval."))}d.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);