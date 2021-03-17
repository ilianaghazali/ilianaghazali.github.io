(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},952:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(2701)),i={id:"frontend-packages-lazy-modules-project-about-page",title:"Frontend - Dynamic module Project About Page",sidebar_label:"Project about page",slug:"/development/frontend/packages/lazy-modules/project-about-page"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-project-about-page",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-project-about-page",isDocsHomePage:!1,title:"Frontend - Dynamic module Project About Page",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/project-about-page.md",slug:"/development/frontend/packages/lazy-modules/project-about-page",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/project-about-page",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/project-about-page.md",version:"1.4.0",sidebar_label:"Project about page",sidebar:"version-1.4.0/dev",previous:{title:"Frontend - Dynamic module Order History",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-history"},next:{title:"Frontend - Dynamic module Project List",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/project-list"}},c=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the project about page in an iframe. It stores the 'do not show again' state option in local web browser storage.\nNote: This module is automatically instantiated by the menu module when setting up the corresponding option."),Object(a.b)("h2",{id:"module-structure"},"Module structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," .\n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file    \n \u2514\u2500\u2500 README.md  \n")),Object(a.b)("h2",{id:"route"},"Route"),Object(a.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(a.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(a.b)("p",null,"This module as a dynamic configurable module exposes its own:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),Object(a.b)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),Object(a.b)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),Object(a.b)("li",{parentName:"ul"},"styles           : Styles of the module"),Object(a.b)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(a.b)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),Object(a.b)("h2",{id:"internationalization"},"Internationalization"),Object(a.b)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}d.isMDXComponent=!0}}]);