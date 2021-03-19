(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(f,l(l({ref:t},s),{},{components:r})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(2703)),i={id:"release-notes-v1.0.0",title:"Version 1.0.0",slug:"/v1.0.0/"},l={unversionedId:"notes/release-notes-v1.0.0",id:"notes/release-notes-v1.0.0",isDocsHomePage:!1,title:"Version 1.0.0",description:"Released on: July, 2020",source:"@site/release_notes/notes/V1.0.0.md",slug:"/v1.0.0/",permalink:"/fr/release-notes/v1.0.0/",version:"current",sidebar:"release_notes",previous:{title:"Version 1.1.0",permalink:"/fr/release-notes/v1.1.0/"},next:{title:"Version 0.4.1",permalink:"/fr/release-notes/v0.4.1/"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Released on: ",Object(a.b)("strong",{parentName:"p"},"July, 2020"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"}))),Object(a.b)("p",null,"Features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add new operator role in the system with limited access to administration fonctionalities, created to manage data catalog."),Object(a.b)("li",{parentName:"ul"},"Add configurable access rights on documents"),Object(a.b)("li",{parentName:"ul"},"Add complete frontend config export from admin HMI"),Object(a.b)("li",{parentName:"ul"},'"Remake" of the storage microservice. Improvements :',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Allow to reference files that are already stored (when user doesn't want files to be restored)"),Object(a.b)("li",{parentName:"ul"},"Store small size files in archives to avoid inode issues"),Object(a.b)("li",{parentName:"ul"},"Copy files from one storage system to another."),Object(a.b)("li",{parentName:"ul"},'Remove complex system of "allocation strategy" plugins. Storage locations are now defined in the provided SIP.'))),Object(a.b)("li",{parentName:"ul"},'"Remake" of the ingestion microservice',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Removed storage functionnalities"),Object(a.b)("li",{parentName:"ul"},"Improve performances and error recovery"),Object(a.b)("li",{parentName:"ul"},"Remove configuration from the Ingest Chain, now all this configuration is provided by dataprovider (or any other SIP provider)"))),Object(a.b)("li",{parentName:"ul"},"Fix geospacial geometry sanitization on dateline"),Object(a.b)("li",{parentName:"ul"},"Multiple HMI improvements on the user catalog and the admin HMI")))}p.isMDXComponent=!0}}]);