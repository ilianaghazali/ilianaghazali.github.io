(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{1152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(2701)),i={id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html"},d={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-embedded-html",id:"development/frontend/modules/frontend-packages-lazy-modules-embedded-html",isDocsHomePage:!1,title:"Frontend - Dynamic module Embedded HTML",description:"Description",source:"@site/docs/development/frontend/modules/embedded-html.md",slug:"/development/frontend/packages/lazy-modules/embedded-html",permalink:"/docs/development/frontend/packages/lazy-modules/embedded-html",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/frontend/modules/embedded-html.md",version:"current",sidebar_label:"Embedded HTML",sidebar:"dev",previous:{title:"Frontend - Dynamic module Authentication",permalink:"/docs/development/frontend/packages/lazy-modules/authentication"},next:{title:"Frontend - Dynamic module Licenses",permalink:"/docs/development/frontend/packages/lazy-modules/licenses"}},l=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It acts as an IFrame container to embed HTML content by its URL. It may be used to create banner, footer, page content and so on..."),Object(a.b)("h2",{id:"module-structure"},"Module structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),Object(a.b)("h2",{id:"route"},"Route"),Object(a.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(a.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(a.b)("p",null,"This module as a dynamic configurable module exposes its own:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),Object(a.b)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),Object(a.b)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),Object(a.b)("li",{parentName:"ul"},"styles           : Styles of the module"),Object(a.b)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(a.b)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),Object(a.b)("h2",{id:"internationalization"},"Internationalization"),Object(a.b)("p",null,"  All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}s.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return t?r.a.createElement(b,d(d({ref:n},c),{},{components:t})):r.a.createElement(b,d({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);