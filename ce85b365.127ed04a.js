(window.webpackJsonp=window.webpackJsonp||[]).push([[2126],{2198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(2701)),i={id:"frontend-packages-lazy-modules-search-graph",title:"Frontend - Dynamic module Search Graph",sidebar_label:"Search graph",slug:"/development/frontend/packages/lazy-modules/search-graph"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-search-graph",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-search-graph",isDocsHomePage:!1,title:"Frontend - Dynamic module Search Graph",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/search-graph.md",slug:"/development/frontend/packages/lazy-modules/search-graph",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/search-graph",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/search-graph.md",version:"1.4.0",sidebar_label:"Search graph",sidebar:"version-1.4.0/dev",previous:{title:"Frontend - Dynamic module Project List",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/project-list"},next:{title:"Frontend - Dynamic module Search Results",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/search-results"}},s=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays a navigation tree into the REGARDS collections and datasets where each level corresponds to a given collection model - except the last one that shows only datasets.\nIt offers description functionnality for each entity and shows, using detail toggle, the specified datasets attributes. The module also shows and drives a search-results table:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When user clicks a dataset, the search-results table displays all dataobjects related to that dataset"),Object(o.b)("li",{parentName:"ul"},"When user clicks a tag (in description dialog), the search-results table displays all dataobjects related to that tag")),Object(o.b)("h2",{id:"module-structure"},"Module structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," . \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),Object(o.b)("h2",{id:"route"},"Route"),Object(o.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(o.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(o.b)("p",null,"This module as a dynamic configurable module exposes its own:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),Object(o.b)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),Object(o.b)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),Object(o.b)("li",{parentName:"ul"},"styles           : Styles of the module"),Object(o.b)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(o.b)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),Object(o.b)("h2",{id:"internationalization"},"Internationalization"),Object(o.b)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);