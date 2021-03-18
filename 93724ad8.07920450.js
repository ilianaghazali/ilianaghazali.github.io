(window.webpackJsonp=window.webpackJsonp||[]).push([[1524],{1596:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(2701)),o={id:"crawler-monitor-crawling",title:"Monitor datasource crawling",slug:"/user-guide/crawler/monitor-crawling"},s={unversionedId:"user-documentation/5-crawler/crawler-monitor-crawling",id:"version-1.4.0/user-documentation/5-crawler/crawler-monitor-crawling",isDocsHomePage:!1,title:"Monitor datasource crawling",description:"Pour suivre les aspirations de donn\xe9es, cliquez sur Ajout de donn\xe9es dans le menu lat\xe9ral de REGARDS, puis dans la carte Crawling, cliquez sur  Monitor data crawling .",source:"@site/versioned_docs/version-1.4.0/user-documentation/5-crawler/monitor-crawling.md",slug:"/user-guide/crawler/monitor-crawling",permalink:"/docs/1.4.0/user-guide/crawler/monitor-crawling",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/5-crawler/monitor-crawling.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Craw features from FEM",permalink:"/docs/1.4.0/user-guide/crawler/configure-datasources/fem"},next:{title:"Reset the catalog",permalink:"/docs/1.4.0/user-guide/crawler/reset-catalog"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pour suivre les aspirations de donn\xe9es, cliquez sur ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Ajout de donn\xe9es"))," dans le menu lat\xe9ral de REGARDS, puis dans la carte ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",Object(i.b)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"25"})," ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Monitor data crawling"))," ."),Object(i.b)("hr",null),Object(i.b)("p",null,"L'\xe9cran pr\xe9sente la liste des aspirations de donn\xe9es en cours ou termin\xe9es. "),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:"/images/user-documentation/5-crawler/crawler-monitor.png",alt:"add datasource",width:"800"})),Object(i.b)("p",null,"Plusieurs informations sont disponibles :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Label"))," correspond au nom donn\xe9 \xe0 la cha\xeene d'aspiration lors de sa cr\xe9ation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Last ingest date"))," indique la derni\xe8re date de scan de la source d'aspiration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Duration"))," dur\xe9e de la derni\xe8re aspiration en secondes. Celle-ci n'est pas affich\xe9e dans le cas o\xf9 la colonne ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Status"))," n'est pas ",Object(i.b)("em",{parentName:"li"},"FINISHED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Status"))," indique le statut du traitement de l'aspiration, accompagn\xe9 d'un panneau cliquable d\xe9crivant la stacktrace du traitement Il y a sept \xe9tats possibles :",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"NEW"),", si la datasource n'a encore jamais \xe9t\xe9 scann\xe9e,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"STARTED"),", si la datasource a \xe9t\xe9 prise en compte et est en train d'\xeatre scann\xe9e,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"FINISHED"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e sans erreur,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"FINISHED_WITH_WARNINGS"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e avec des alertes,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"ERROR"),", si la derni\xe8re aspiration de donn\xe9es s'est termin\xe9e en erreur,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"NOT_FINISHED"),", si la derni\xe8re aspiration ne s'est pas enti\xe8rement termin\xe9e,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"INACTIVE"),", si l'aspiration de donn\xe9es n'est pas activ\xe9e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Number of entities"))," indique le nombre de donn\xe9es trait\xe9es lors de la derni\xe8re aspiration."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"Next ingest date"))," affiche la prochaine date d'aspiration de donn\xe9es pr\xe9vue.")),Object(i.b)("p",null,"Il y a \xe9galement des boutons d'action :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:"/images/user-documentation/regards-icons/admin/refresh.png",alt:"refresh",height:"20"})," le bouton ",Object(i.b)("b",null,Object(i.b)("i",null,"Refresh"))," mets \xe0 jour les informations de la page"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:"/images/user-documentation/regards-icons/admin/clock.png",alt:"clock",height:"20"})," les boutons ",Object(i.b)("b",null,Object(i.b)("i",null,"Schedule an ingestion"))," permettent de d\xe9marrer une nouvelle aspiration. Cela n'a un impact que sur les nouvelles donn\xe9es n'ayant pas encore \xe9t\xe9 aspir\xe9es. Cette fonctionnalit\xe9 est utile si vous ne souhaitez pas attendre la prochaine aspiration programm\xe9e."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"reset",height:"20"})," les boutons ",Object(i.b)("b",null,Object(i.b)("i",null,"Delete"))," suppriment les donn\xe9es aspir\xe9es dans le catalogue et relancent l'aspiration de la totalit\xe9 de la source.")))}u.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);