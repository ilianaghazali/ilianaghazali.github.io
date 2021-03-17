(window.webpackJsonp=window.webpackJsonp||[]).push([[2049],{2119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(2701)),c={layout:"classic-docs",title:"Generate a new microservice module","short-title":"Generate module"},l={unversionedId:"development/backend/regards/module/create-module",id:"development/backend/regards/module/create-module",isDocsHomePage:!1,title:"Generate a new microservice module",description:"Once you have created the microservice container, you have to create modules.",source:"@site/docs/development/backend/regards/module/create-module.md",slug:"/development/backend/regards/module/create-module",permalink:"/docs/development/backend/regards/module/create-module",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/module/create-module.md",version:"current"},i=[],u={toc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you have created the microservice container, you have to create modules."),Object(o.b)("p",null,"To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the root folder of the microservice")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate a new module")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeCatalog=local\n")),Object(o.b)("p",null,"Choose the right archetype (",Object(o.b)("inlineCode",{parentName:"p"},"fr.cnes.regards.modules:helloworld-module-archetype"),") and enter requested field as follow :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"groupId : ",Object(o.b)("inlineCode",{parentName:"li"},"fr.cnes.regards.modules")),Object(o.b)("li",{parentName:"ul"},"artifactId : the module name in camel case, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"microModules")),Object(o.b)("li",{parentName:"ul"},"version : press enter to apply default value"),Object(o.b)("li",{parentName:"ul"},"package : press enter to apply default value"),Object(o.b)("li",{parentName:"ul"},"Add the following dependency to ",Object(o.b)("inlineCode",{parentName:"li"},"bootstrap-myMicroservice/pom.xml")," file:")),Object(o.b)("p",null,'For instance, with the module artifact id "myModule" :'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.modules.myModule</groupId>\n    <artifactId>myModule-rest</artifactId>\n    <version>1.0-SNAPSHOT</version>\n  </dependency>\n")))}d.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),s=n,b=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return r?a.a.createElement(b,l(l({ref:t},u),{},{components:r})):a.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);