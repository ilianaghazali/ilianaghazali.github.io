(window.webpackJsonp=window.webpackJsonp||[]).push([[2446],{2518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(2703)),o={layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"},c={unversionedId:"development/backend/framework/modules/multitenant-database",id:"version-1.4.0/development/backend/framework/modules/multitenant-database",isDocsHomePage:!1,title:"Microservice multitenant database",description:"Overall",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/modules/multitenant-database.md",slug:"/development/backend/framework/modules/multitenant-database",permalink:"/fr/docs/1.4.0/development/backend/framework/modules/multitenant-database",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/modules/multitenant-database.md",version:"1.4.0"},l=[{value:"Overall",id:"overall",children:[]},{value:"Initial and static configuration",id:"initial-and-static-configuration",children:[]}],s={toc:l};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overall"},"Overall"),Object(i.b)("p",null,Object(i.b)("img",{src:n(2738).default})),Object(i.b)("p",null,'Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.'),Object(i.b)("p",null,'To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".',Object(i.b)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.'),Object(i.b)("p",null,'At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Retrieve all tenants"),Object(i.b)("li",{parentName:"ol"},"For each tenants retrieve microservices database connections."),Object(i.b)("li",{parentName:"ol"},"Create the pool of connections."),Object(i.b)("li",{parentName:"ol"},"Listen to tenant and connection event to handle a new project or an update on an existing connection.  ")),Object(i.b)("h2",{id:"initial-and-static-configuration"},"Initial and static configuration"),Object(i.b)("p",null,'At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :'),Object(i.b)("p",null,"Disable JPA multitenant support  (default true if not present)",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.enabled"),"=true"),Object(i.b)("p",null,"Activate embedded mode with HSQLDB",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.embedded"),"=true"),Object(i.b)("p",null,"Path for embedded databases files",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.embeddedPath"),"=target"),Object(i.b)("p",null,"Not mandatory if embedded mode is activated",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.dialect"),"=org.hibernate.dialect.PostgreSQLDialect"),Object(i.b)("p",null,"database user name for tenant x",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".tenant"),"=example"),Object(i.b)("p",null,"database url for tenant x (Not mandatory if embedded mode is activated)\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".url"),"=jdbc:postgresql://localhost:5432/test1"),Object(i.b)("p",null,"database user name for tenant x (Not mandatory if embedded mode is activated)",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".userName"),"=postgres"),Object(i.b)("p",null,"database user password for tenant x (Not mandatory if embedded mode is activated)",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".password"),"=postgres  "),Object(i.b)("p",null,"database driver for tenant x (Not mandatory if embedded mode is activated)",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".driverClassName"),"=org.postgresql.Driver"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"x")," : Integer value for tenant index starting with 0."))}d.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2738:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/jpa-c95d1c9086d0ca823f2c745c5022908a.png"}}]);