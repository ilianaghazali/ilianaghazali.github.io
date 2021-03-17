(window.webpackJsonp=window.webpackJsonp||[]).push([[1496],{1566:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(2701)),i={id:"development-manual",title:"Development manual",slug:"/development"},c={unversionedId:"development/development-manual",id:"development/development-manual",isDocsHomePage:!1,title:"Development manual",description:"Development contexts",source:"@site/docs/development/regards-developpement-manual.md",slug:"/development",permalink:"/docs/development",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/regards-developpement-manual.md",version:"current",sidebar:"dev",next:{title:"REGARDS architecture concepts",permalink:"/docs/development/backend/architecture/concepts"}},l=[{value:"Development contexts",id:"development-contexts",children:[{value:"Backend",id:"backend",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"Create a new microservice",id:"create-a-new-microservice",children:[]},{value:"Create a new Microservice plugin",id:"create-a-new-microservice-plugin",children:[]},{value:"Contribute to REGARDS",id:"contribute-to-regards",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"development-contexts"},"Development contexts"),Object(a.b)("h3",{id:"backend"},"Backend"),Object(a.b)("p",null,"REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"development/backend/framework/dev-microservice"},"Microservice"))," : In order to add new functionalities to REGARDS system throught new REST endpoints"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"development/backend/framework/modules/plugins"},"Microservice plugin"))," : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Java 1.8"),Object(a.b)("li",{parentName:"ul"},"Maven 3.3.1+"),Object(a.b)("li",{parentName:"ul"},"Git client")),Object(a.b)("h3",{id:"frontend"},"Frontend"),Object(a.b)("p",null,"REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"development/frontend/plugins/service"},"UI service plugin"))," : In order to add new functionalities availables from the consultables data id the project user HMI."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"development/frontend/plugins/criteria"},"UI search criterion widget"))," : In order to add new criterion types in REGARDS search forms."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"development/frontend/plugins/"},"UI Module plugin"))," : In order to add a totaly new bundle of functionalities")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"npm 4+"),Object(a.b)("li",{parentName:"ul"},"Git client")),Object(a.b)("h2",{id:"create-a-new-microservice"},"Create a new microservice"),Object(a.b)("p",null,"Refer to ",Object(a.b)("a",{parentName:"p",href:"development/backend/framework/dev-microservice"},"develop a new microservice")," page to create your own microservice."),Object(a.b)("h2",{id:"create-a-new-microservice-plugin"},"Create a new Microservice plugin"),Object(a.b)("p",null,"Refer to the following pages to develop your own plugins."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"development/backend/framework/modules/plugins"},"Backend plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"development/frontend/plugins"},"Frontend plugins"))),Object(a.b)("h2",{id:"contribute-to-regards"},"Contribute to REGARDS"),Object(a.b)("p",null,"You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team."))}u.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);