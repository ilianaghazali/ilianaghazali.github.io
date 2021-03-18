(window.webpackJsonp=window.webpackJsonp||[]).push([[1237],{1308:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(2703)),i={id:"backend-framework-starters-geojson",title:"GeoJSON starter",slug:"/development/backend/framework/starters/geojson/"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-geojson",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-geojson",isDocsHomePage:!1,title:"GeoJSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/geojson-starter.md",slug:"/development/backend/framework/starters/geojson/",permalink:"/docs/1.4.0/development/backend/framework/starters/geojson/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/geojson-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Feign starter",permalink:"/docs/1.4.0/development/backend/framework/starters/feign/"},next:{title:"GSON starter",permalink:"/docs/1.4.0/development/backend/framework/starters/gson/"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to use the starter",id:"how-to-use-the-starter",children:[]},{value:"How to build geometry",id:"how-to-build-geometry",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"This starter is an implementation of the ",Object(a.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"RFC 7946 -  The GeoJSON Format"),"."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),Object(a.b)("p",null,"Business dependency"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>geojson-starter</artifactId>\n</dependency>\n")),Object(a.b)("p",null,"Dependency :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../gson/"},"GSON starter"))),Object(a.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(a.b)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),Object(a.b)("h2",{id:"how-to"},"How to"),Object(a.b)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),Object(a.b)("p",null,"You can use default ",Object(a.b)("inlineCode",{parentName:"p"},"Feature")," class or implements your own feature extending ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractFeature")," to customize your ID type and your properties wrapper."),Object(a.b)("h3",{id:"how-to-build-geometry"},"How to build geometry"),Object(a.b)("p",null,"The interface and builder class ",Object(a.b)("inlineCode",{parentName:"p"},"IGeometry")," helps you building valid geometry objects."))}l.isMDXComponent=!0},2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);