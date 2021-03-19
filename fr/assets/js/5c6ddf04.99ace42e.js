(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{1032:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2703)),s={id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance/"},i={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-instance",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-jpa-instance",isDocsHomePage:!1,title:"JPA instance starter",description:"Configuration",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/jpa-instance-starter.md",slug:"/development/backend/framework/starters/jpa-instance/",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/jpa-instance/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/jpa-instance-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"HATEOAS starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/hateoas/"},next:{title:"JPA multitenant starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/jpa-multitenant/"}},c=[{value:"Use transaction with instance",id:"use-transaction-with-instance",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Disable JPA instance support\nregards.jpa.instance.enabled=false # disable JPA instance support\nregards.jpa.instance.embedded=true # Activate embedded mode with HSQLDB\nregards.jpa.instance.embeddedPath=target # Path for embedded databases files\nregards.jpa.instance.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.url=jdbc:postgresql://localhost:5432/postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.username=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.password=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\nregards.jpa.instance.disableInstanceEntityAnnotation # Used to use instance starter alone without jpa-multitenant-starter.\n")),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter."),Object(o.b)("h1",{id:"disableinstanceentityannotation"},"disableInstanceEntityAnnotation"),Object(o.b)("p",null,"Used to disable usage of InstanceEntity annotation. Only use this option if you don't use the jpa-multitenant-starter."),Object(o.b)("h2",{id:"use-transaction-with-instance"},"Use transaction with instance"))}p.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return n?a.a.createElement(b,i(i({ref:t},d),{},{components:n})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);