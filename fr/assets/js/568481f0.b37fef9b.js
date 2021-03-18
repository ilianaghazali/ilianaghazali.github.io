(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var s=r(0),n=r.n(s);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.a.createElement(b,o(o({ref:t},u),{},{components:r})):n.a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},939:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var s=r(3),n=r(7),a=(r(0),r(2703)),i={id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},o={unversionedId:"user-documentation/7-data-services/data-services-processing-services",id:"version-1.4.0/user-documentation/7-data-services/data-services-processing-services",isDocsHomePage:!1,title:"Add processing services",description:"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.",source:"@site/versioned_docs/version-1.4.0/user-documentation/7-data-services/processing-services.md",slug:"/user-guide/data-services/processing-services/",permalink:"/fr/docs/1.4.0/user-guide/data-services/processing-services/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/7-data-services/processing-services.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Add UI services",permalink:"/fr/docs/1.4.0/user-guide/data-services/ui-services/"},next:{title:"Introduction",permalink:"/fr/docs/1.4.0/user-guide/order/introduction/"}},c=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Configuration des services de traitement de donn\xe9es',id:"configuration-des-services-de-traitement-de-donn\xe9es",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Application des services de traitement de donn\xe9es',id:"application-des-services-de-traitement-de-donn\xe9es",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.")),Object(a.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"user menu",height:"200"}),Object(a.b)("img",{src:"/images/user-documentation/7-data-services/processing-services/processing-services-card.png",alt:"user menu",height:"200"}),Object(a.b)("hr",null),Object(a.b)("h2",{id:"configuration-des-services-de-traitement-de-donn\xe9es"},Object(a.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Configuration des services de traitement de donn\xe9es"),Object(a.b)("p",null,"La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Catalog Access"))," et la carte ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Services")),"."),Object(a.b)("p",null,"Il n'existe actuellement pas de services de traitements de donn\xe9es m\xe9tier dans REGARDS. Enrichissez l'utilisation de l'interface utilisateur en d\xe9veloppant vos propres services de traitement de donn\xe9es. Une fois qu'il sera disponible dans votre projet, ajoutez-le en appuyant sur le bouton ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Add"))," de la carte ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Catalog Access")),"."),Object(a.b)("p",null,"Configurez-le selon votre utilisation :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Si vos plugins n\xe9cessitent des param\xe8tres, choisissez si vous souhaitez que leurs valeurs soient :",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"fixe")),", l'administrateur d\xe9cide d'une valeur qui sera utilis\xe9e pour tous les traitements"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"dynamique")),", \xe0 chaque utilisation du plugin, il sera demand\xe9 de fournir une valeur. Il est possible de contraindre celle-ci parmi une liste de valeurs possibles."))),Object(a.b)("li",{parentName:"ul"},"Choisissez si vous voulez l'activer pour tous les jeux de donn\xe9es au travers du param\xe8tre ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Activate this service for datas of every datasets"))," (par d\xe9faut la valeur n'est pas activ\xe9e). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de donn\xe9es, suivez l'\xe9tape 5 de la ",Object(a.b)("a",{parentName:"li",href:"../../data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"))),Object(a.b)("div",{align:"center"},Object(a.b)("img",{src:"/images/user-documentation/7-data-services/processing-services/service-create.png",alt:"create service",width:"800"})),Object(a.b)("p",null,"Une fois la configuration termin\xe9e, appuyez sur le bouton ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Add"))," et retrouvez-le dans la liste des services applicables dans le catalogue. V\xe9rifiez qu'il soit dans l'\xe9tat actif."),Object(a.b)("h2",{id:"application-des-services-de-traitement-de-donn\xe9es"},Object(a.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Application des services de traitement de donn\xe9es"),Object(a.b)("p",null,"Les services de traitements sont applicables sur les donn\xe9es du catalogue accessible depuis ",Object(a.b)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),"."),Object(a.b)("p",null,"Sur chaque donn\xe9e, vous pouvez appuyer sur le bouton ",Object(a.b)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear wheel",height:"25"})," ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Services"))," pour voir les services associ\xe9s. Cliquez ensuite sur le service de traitement que vous souhaitez ex\xe9cuter. Vous pouvez \xe9galement les appliquer sur un groupe en cochant plusieurs cases et en appuyant sur le bouton qui s'affichera dans la barre au-dessus des donn\xe9es. Cela est uniquement possible lorsque le service le permet."),Object(a.b)("div",{align:"center"},Object(a.b)("img",{src:"/images/user-documentation/7-data-services/processing-services/catalog-processing-services.png",alt:"services",width:"800"})))}l.isMDXComponent=!0}}]);