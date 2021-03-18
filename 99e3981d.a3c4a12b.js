(window.webpackJsonp=window.webpackJsonp||[]).push([[1590],{1662:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(2701)),i={id:"frontend-packages-lazy-modules-order-cart",title:"Frontend - Dynamic module Order Cart",sidebar_label:"Order cart",slug:"/development/frontend/packages/lazy-modules/order-cart"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-order-cart",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-order-cart",isDocsHomePage:!1,title:"Frontend - Dynamic module Order Cart",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/order-cart.md",slug:"/development/frontend/packages/lazy-modules/order-cart",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-cart",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/order-cart.md",version:"1.4.0",sidebar_label:"Order cart",sidebar:"version-1.4.0/dev",previous:{title:"Frontend - Dynamic module Menu",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/menu"},next:{title:"Frontend - Dynamic module Order History",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-history"}},d=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays, for logged user, the current order cart content. Please note that his module must be instanciated once, in a dynamic container, to enable the order cart functionnality in interface menus and search results. However, instantiating it more than once instance is useless - only the first instance found will be used - and may be risky, depending on the global interface configuration."),Object(a.b)("h2",{id:"module-structure"},"Module structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," .\n \u251c\u2500\u2500 src\n |   \u251c\u2500\u2500\n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information\n |   \u251c\u2500\u2500 components      : React component to display panels\n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions\n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization\n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)\n |   \u251c\u2500\u2500 main.js         : Module exported index\n |   \u251c\u2500\u2500 reducer.js      : Redux reducers\n |   \u2514\u2500\u2500 router.js       : React-router configuration\n \u251c\u2500\u2500 tests\n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file\n \u2514\u2500\u2500 README.md\n")),Object(a.b)("h2",{id:"route"},"Route"),Object(a.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(a.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(a.b)("p",null,"This module as a dynamic configurable module exposes its own:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"moduleContainer : Main module React component used to display this module,"),Object(a.b)("li",{parentName:"ul"},"adminContainer : Main module React component used to display the administration panel of this module,"),Object(a.b)("li",{parentName:"ul"},"reducer : To configure the general Redux Store."),Object(a.b)("li",{parentName:"ul"},"styles : Styles of the module"),Object(a.b)("li",{parentName:"ul"},"messages : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(a.b)("li",{parentName:"ul"},"dependencies : The needed resources (backend enpoints) to display each part of the module")),Object(a.b)("h2",{id:"internationalization"},"Internationalization"),Object(a.b)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}s.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.a.createElement(f,l(l({ref:n},c),{},{components:t})):o.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);