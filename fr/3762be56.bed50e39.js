(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},634:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(2701)),c={id:"crawler-reset-catalog",title:"Reset the catalog",slug:"/user-guide/crawler/reset-catalog"},i={unversionedId:"user-documentation/5-crawler/crawler-reset-catalog",id:"version-1.4.0/user-documentation/5-crawler/crawler-reset-catalog",isDocsHomePage:!1,title:"Reset the catalog",description:"A partir de l'\xe9cran Add data et la carte Crawling, vous pouvez d\xe9clencher la r\xe9indexation du catalogue en cliquant sur l'ic\xf4ne de suppression  Reset catalog depuis la carte Crawling.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/user-documentation/5-crawler/reset-catalog.md",slug:"/user-guide/crawler/reset-catalog",permalink:"/fr/docs/1.4.0/user-guide/crawler/reset-catalog",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/user-documentation/5-crawler/reset-catalog.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Monitor datasource crawling",permalink:"/fr/docs/1.4.0/user-guide/crawler/monitor-crawling"},next:{title:"Introduction",permalink:"/fr/docs/1.4.0/user-guide/catalog/introduction"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A partir de l'\xe9cran ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Add data"))," et la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Crawling")),", vous pouvez d\xe9clencher la r\xe9indexation du catalogue en cliquant sur l'ic\xf4ne de suppression ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"reset",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Reset catalog"))," depuis la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Crawling")),"."),Object(o.b)("hr",null),Object(o.b)("p",null,"L'action ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Reset catalog"))," aura pour effet de supprimer toutes les aspirations issues de vos sources de donn\xe9es. Les indexations vont ensuite \xeatre recr\xe9\xe9es en fonction des aspirations configur\xe9es dans ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"configure-datasources"},"Configure datasources")),"."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-reset-catalog.png",alt:"reset catalog",width:"800"})))}l.isMDXComponent=!0}}]);