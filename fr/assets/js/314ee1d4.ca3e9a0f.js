(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},570:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2703)),c={id:"crawler-configure-connection",title:"Configure a connection to an external database",slug:"/user-guide/crawler/configure-connection/"},i={unversionedId:"user-documentation/5-crawler/crawler-configure-connection",id:"version-1.4.0/user-documentation/5-crawler/crawler-configure-connection",isDocsHomePage:!1,title:"Configure a connection to an external database",description:"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.",source:"@site/versioned_docs/version-1.4.0/user-documentation/5-crawler/configure-database.md",slug:"/user-guide/crawler/configure-connection/",permalink:"/fr/docs/1.4.0/user-guide/crawler/configure-connection/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/5-crawler/configure-database.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Introduction",permalink:"/fr/docs/1.4.0/user-guide/crawler/introduction/"},next:{title:"Configure datasources",permalink:"/fr/docs/1.4.0/user-guide/crawler/configure-datasources/"}},u=[],s={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Pour configurer une connexion \xe0 une base de donn\xe9es externe, veuillez suivre les \xe9tapes suivantes.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Depuis ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Add data"))," et la carte ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Configure connection to external databases"))," puis sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Add")),".")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-connections.png",alt:"database",width:"800"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Donnez le nom de la connexion, s\xe9lectionnez un plugin de connexion \xe0 une base de donn\xe9es selon votre type de base. Entrez un utilisateur, son mot de passe, une adresse d\u2019acc\xe8s \xe0 une base de donn\xe9es, son port et son nom.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-connection.png",alt:"database",width:"800"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cliquez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Save"))),Object(o.b)("li",{parentName:"ul"},"Testez ensuite la connexion en appuyant sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"play")),", un message s\u2019affiche pour indiquer que la connexion est fonctionnelle.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/5-crawler/crawler-connected.png",alt:"connected",width:"800"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Appuyez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Previous"))," pour revenir \xe0 la carte ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawling")))),Object(o.b)("p",null,"Vous pouvez d\xe9sormais ",Object(o.b)("a",{parentName:"p",href:"../configure-datasources/external-databases/"},"ajouter des \xe9l\xe9ments au catalogue depuis cette nouvelle source de donn\xe9es")))}l.isMDXComponent=!0}}]);