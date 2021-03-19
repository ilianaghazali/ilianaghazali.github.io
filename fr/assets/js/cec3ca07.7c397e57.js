(window.webpackJsonp=window.webpackJsonp||[]).push([[2117],{2189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(2703)),s={id:"fem-manage-features",title:"Manage features",slug:"/user-guide/import-data/fem/manage-features/"},o={unversionedId:"user-documentation/4_3-fem/fem-manage-features",id:"user-documentation/4_3-fem/fem-manage-features",isDocsHomePage:!1,title:"Manage features",description:"G\xe9rez vos features par messages AMQP.",source:"@site/docs/user-documentation/4_3-fem/manage-features.md",slug:"/user-guide/import-data/fem/manage-features/",permalink:"/fr/docs/user-guide/import-data/fem/manage-features/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/user-documentation/4_3-fem/manage-features.md",version:"current",sidebar:"manual",previous:{title:"Introduction",permalink:"/fr/docs/user-guide/import-data/fem/introduction/"},next:{title:"Introduction",permalink:"/fr/docs/user-guide/crawler/introduction/"}},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Cr\xe9er des features',id:"cr\xe9er-des-features",children:[{value:"Par le service feature",id:"par-le-service-feature",children:[]},{value:"Par le service feature provider",id:"par-le-service-feature-provider",children:[]}]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> G\xe9rez les features',id:"g\xe9rez-les-features",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"G\xe9rez vos features par messages AMQP.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"cr\xe9er-des-features"},Object(i.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Cr\xe9er des features"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir ",Object(i.b)("a",{parentName:"p",href:"../../../data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Data"))," pour qu'elles puissent \xeatre interpr\xe9t\xe9es."))),Object(i.b)("p",null,"Pour cr\xe9er des features, il existe deux types de services propos\xe9s par le feature manager :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"feature"))," permet de directement soumettre des fichiers contenant des features par messages AMQP."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"feature provider")),", permet de cr\xe9er des features \xe0 partir de scans de fichiers de donn\xe9es. Cette op\xe9ration n\xe9cessite l'utilisation de plugins, qui seront ensuite r\xe9f\xe9renc\xe9s dans la configuration du microservice fem.")),Object(i.b)("h3",{id:"par-le-service-feature"},"Par le service feature"),Object(i.b)("p",null,"Pour envoyer des features dans REGARDS, suivez le tutoriel ",Object(i.b)("a",{parentName:"p",href:"../../../../development/backend/fem/api/amqp/"},"Feature Manager AMQP API"),".\nIl vous expliquera comment :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cr\xe9er des fichiers afin de stocker des features dans REGARDS. Ceux-ci sont compos\xe9s de trois parties principales :",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"$headers"))," :",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"regards.tenant")),", le projet sur lequel vous souhaites ajouter des features"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"regards.request.id")),", l'identifiant de la requ\xeate envoy\xe9e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"regards.request.date")),", la date \xe0 laquelle la demande est soumise au format ISO 8601"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"regards.request.owner")),", le propri\xe9taire de la donn\xe9e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"metadata")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"session"))," le nom identifiant le groupe de donn\xe9es ajout\xe9"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"sessionOwner")),", le fournisseur de donn\xe9es"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"storages")),", la liste des espaces de stockage sur lesquels vous souhaitez sauvegarder des fichiers suppl\xe9mentaires. Cette liste peut \xeatre vide."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"priority")),", permet de prioriser la prise en compte de la requ\xeate de r\xe9f\xe9rencement (",Object(i.b)("em",{parentName:"li"},"HIGH"),", ",Object(i.b)("em",{parentName:"li"},"NORMAL"),", ou ",Object(i.b)("em",{parentName:"li"},"LOW"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"feature")),", une liste de features au format GeoJSON"))),Object(i.b)("li",{parentName:"ul"},"Publier des requ\xeates de cr\xe9ation de features"),Object(i.b)("li",{parentName:"ul"},"Suivre le statut des requ\xeates envoy\xe9es")),Object(i.b)("h3",{id:"par-le-service-feature-provider"},"Par le service feature provider"),Object(i.b)("p",null,"Pour d\xe9velopper des plugins de cr\xe9ation de features par extraction de donn\xe9es, suivez le tutoriel ",Object(i.b)("a",{parentName:"p",href:"../../../../development/backend/fem/plugins/feature-factory/"},"Feature Factory Plugins")),Object(i.b)("h2",{id:"g\xe9rez-les-features"},Object(i.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," G\xe9rez les features"),Object(i.b)("p",null,"Le tutoriel ",Object(i.b)("a",{parentName:"p",href:"../../../../development/backend/fem/api/amqp/"},"Feature Manager AMQP API")," vous expliquera \xe9galement comment modifier et supprimer des features par messages AMQP."),Object(i.b)("p",null,"Par ailleurs, vous pouvez aussi g\xe9rer les features depuis le catalogue \xe0 l'aide de ",Object(i.b)("a",{parentName:"p",href:"../../../data-services/ui-services/"},"plugins d'interface suppl\xe9mentaires"),". Notez que vous devrez obligatoirement avoir configur\xe9 une ",Object(i.b)("a",{parentName:"p",href:"../../../crawler/configure-datasources/fem/"},"aspiration de donn\xe9es depuis le feature manager"),"."))}l.isMDXComponent=!0},2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||i;return r?n.a.createElement(d,o(o({ref:t},c),{},{components:r})):n.a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);