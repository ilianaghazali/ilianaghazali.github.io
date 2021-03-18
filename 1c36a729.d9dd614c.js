(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(g,i(i({ref:r},u),{},{components:t})):a.a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},370:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(2701)),s={id:"crawler-configure-datasources",title:"Configure datasources",sidebar_label:"Configure datasources introduction",slug:"/user-guide/crawler/configure-datasources"},i={unversionedId:"user-documentation/5-crawler/crawler-configure-datasources",id:"version-1.4.0/user-documentation/5-crawler/crawler-configure-datasources",isDocsHomePage:!1,title:"Configure datasources",description:"L'\xe9cran de configuration des aspirations de donn\xe9es (accessible depuis la carte Crawling, puis  Map data sources to internal models ), vous permet de cr\xe9er des aspirations ou de g\xe9rer celles que vous avez pr\xe9c\xe9demment configur\xe9es.",source:"@site/versioned_docs/version-1.4.0/user-documentation/5-crawler/configure-datasource.md",slug:"/user-guide/crawler/configure-datasources",permalink:"/docs/1.4.0/user-guide/crawler/configure-datasources",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/5-crawler/configure-datasource.md",version:"1.4.0",sidebar_label:"Configure datasources introduction",sidebar:"version-1.4.0/manual",previous:{title:"Configure a connection to an external database",permalink:"/docs/1.4.0/user-guide/crawler/configure-connection"},next:{title:"Crawl data from external databases",permalink:"/docs/1.4.0/user-guide/crawler/configure-datasources/external-databases"}},c=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Cr\xe9er les sources d&#39;aspiration',id:"cr\xe9er-les-sources-daspiration",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> G\xe9rer les sources d&#39;aspiration',id:"g\xe9rer-les-sources-daspiration",children:[]}],u={toc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"L'\xe9cran de configuration des aspirations de donn\xe9es (accessible depuis la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Crawling")),", puis ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/configure.png",alt:"configure",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Map data sources to internal models"))," ), vous permet de cr\xe9er des aspirations ou de g\xe9rer celles que vous avez pr\xe9c\xe9demment configur\xe9es."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"cr\xe9er-les-sources-daspiration"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Cr\xe9er les sources d'aspiration"),Object(o.b)("p",null,"Vous pouvez ajouter deux types de sources de donn\xe9es selon vos besoins."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Depuis des sources de donn\xe9es internes \xe0 REGARDS :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"depuis des ",Object(o.b)("a",{parentName:"li",href:"configure-datasources/aips"},"AIPs au format OAIS")),Object(o.b)("li",{parentName:"ul"},"depuis des ",Object(o.b)("a",{parentName:"li",href:"configure-datasources/fem"},"features du feature manager")))),Object(o.b)("li",{parentName:"ul"},"Depuis des sources de donn\xe9es externes \xe0 REGARDS :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"depuis une ",Object(o.b)("a",{parentName:"li",href:"configure-datasources/external-databases"},"base de donn\xe9es externe")),Object(o.b)("li",{parentName:"ul"},"depuis une ",Object(o.b)("a",{parentName:"li",href:"configure-datasources/opensearch"},"source web OpenSearch"))))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"g\xe9rer-les-sources-daspiration"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," G\xe9rer les sources d'aspiration"),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-datasources.png",alt:"datasources",width:"800"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vous pouvez activer ou d\xe9sactiver les aspirations avec les ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/toggle-button.png",alt:"toggle",height:"25"})," toggles buttons. Si vous choisissez d'en d\xe9sactiver une, l'indexation du catalogue ne s'effectuera plus \xe0 partir de cette source de donn\xe9es."),Object(o.b)("li",{parentName:"ul"},"Vous pouvez modifier les aspirations ou les supprimer. Attention, seules les sources de donn\xe9es non associ\xe9es \xe0 un jeu de donn\xe9es peuvent \xeatre supprim\xe9es. Cliquez ici pour en savoir plus sur les ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"../data-organization/collections-datasets"},"Datasets"))))))}l.isMDXComponent=!0}}]);