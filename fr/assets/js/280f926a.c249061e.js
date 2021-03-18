(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||s;return a?r.a.createElement(m,i(i({ref:t},c),{},{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},483:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),s=(a(0),a(2703)),o={id:"crawler-external-databases",title:"Crawl data from external databases",slug:"/user-guide/crawler/configure-datasources/external-databases/"},i={unversionedId:"user-documentation/5-crawler/crawler-external-databases",id:"version-1.4.0/user-documentation/5-crawler/crawler-external-databases",isDocsHomePage:!1,title:"Crawl data from external databases",description:"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS",source:"@site/versioned_docs/version-1.4.0/user-documentation/5-crawler/database.md",slug:"/user-guide/crawler/configure-datasources/external-databases/",permalink:"/fr/docs/1.4.0/user-guide/crawler/configure-datasources/external-databases/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/5-crawler/database.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Configure datasources",permalink:"/fr/docs/1.4.0/user-guide/crawler/configure-datasources/"},next:{title:"Crawl data opensearch web source",permalink:"/fr/docs/1.4.0/user-guide/crawler/configure-datasources/opensearch/"}},l=[],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Avant de pouvoir configurer une source de donn\xe9es depuis une base externe, vous devez obligatoirement avoir ",Object(s.b)("a",{parentName:"p",href:"../../../data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue"))),Object(s.b)("hr",null),Object(s.b)("p",null,"Dans la carte ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Map datasources to internal models"))," puis sur ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Add")),"."),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"S\xe9lectionnez ensuite le mode ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"crawl data from an external data source")),".")),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource-database.png",alt:"database",width:"800"})),Object(s.b)("p",null,"Vous entrez ensuite l'\xe9diteur de cr\xe9ation d'une source de donn\xe9es compos\xe9 de trois \xe9tapes successives."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Select a connection"))),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Choisissez dans la liste d\xe9roulante la connexion que vous venez de configurer puis appuyez\nsur ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Next"))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Specify datasource attributes"))),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Configurez ensuite les attributs correspondants \xe0 votre source de donn\xe9es :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"entrez le libell\xe9 de votre choix,"),Object(s.b)("li",{parentName:"ul"},"la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es,"),Object(s.b)("li",{parentName:"ul"},"choisissez ensuite le mod\xe8le que vous avez pr\xe9c\xe9demment import\xe9,"),Object(s.b)("li",{parentName:"ul"},"le type de plugin pour d\xe9finir la mani\xe8re dont les donn\xe9es de la base de donn\xe9es externe vont \xeatre mapp\xe9es. Il y a actuellement deux types de mappings. Le plugin ",Object(s.b)("em",{parentName:"li"},"postgresql-datasource")," permet de lier plusieurs attributs de plusieurs tables externes au mod\xe8le de donn\xe9es et ",Object(s.b)("em",{parentName:"li"},"postgresql-datasource-single-table"),", permettant de lier les attributs d'une seule table."),Object(s.b)("li",{parentName:"ul"},"Vous pouvez associer si vous le voulez une liste de tags aux donn\xe9es qui seront aspir\xe9es. Ils pourront faciliter les recherches dans le catalogue."))))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Data mapping"))," :"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"C'est sur cet \xe9cran que le mapping entre les donn\xe9es de la base externe et le mod\xe8le de REGARDS s\u2019effectue."),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource-database-step-3.png",alt:"database",width:"800"}))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Dans le bloc ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Connection browser"))," vous pouvez visualiser les tables externes.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Quel que soit le plugin de mapping que vous utilisez :"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"vous devrez faire la correspondance des attributs dans la section ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Links between model attributes and the connection")),"."),Object(s.b)("li",{parentName:"ul"},"dans la premi\xe8re colonne, vous trouverez les attributs communs \xe0 toutes les donn\xe9es dans REGARDS et les attributs sp\xe9cifiques au mod\xe8le que vous avez import\xe9."),Object(s.b)("li",{parentName:"ul"},"dans la deuxi\xe8me colonne, vous devez remplir l'attribut correspondant dans votre table. Il y a des sp\xe9cificit\xe9s en fonction du plugin que vous avez choisi :"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Si vous avez choisi le plugin ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"postgresql-datasource"))," :"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"tout d'abord, s\xe9lectionnez les tables qui seront mapp\xe9es par REGARDS dans la clause FROM, WHERE, ","[","GROUP BY et HAVING]"),Object(s.b)("li",{parentName:"ul"},"ensuite, s\xe9lectionnez chaque attribut individuellement avec la clause SELECT"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Si vous avez choisi le plugin ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"postgresql-datasource-single-table"))),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"s\xe9lectionnez la table qui sera utilis\xe9e pour le mapping."),Object(s.b)("li",{parentName:"ul"},"la section ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Links between model attributes and the connection")),", vous propose deux mani\xe8res de s\xe9lectionner les attributs. Vous pouvez directement choisir l'attribut de la table gr\xe2ce \xe0 la liste d\xe9roulante ou cocher la case ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Use SQL"))," pour \xe9crire la clause du SELECT."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Cliquez ensuite sur le bouton ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Save")),". Vous serez ensuite redirig\xe9 vers la liste des aspirations de donn\xe9es.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"V\xe9rifiez la cr\xe9ation de votre aspiration de donn\xe9es. Une fois l'aspiration cr\xe9\xe9e vous pouvez suivre son traitement dans ",Object(s.b)("a",{parentName:"p",href:"../../monitor-crawling/"},"Monitoring"),"."))))))}u.isMDXComponent=!0}}]);