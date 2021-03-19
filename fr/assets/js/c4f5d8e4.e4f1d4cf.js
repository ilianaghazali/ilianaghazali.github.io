(window.webpackJsonp=window.webpackJsonp||[]).push([[2016,316,874,957],{2088:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(2713),s=a(17),c=a(59),o=a(58);t.default=function(){var e=Object(s.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(n.a,{title:t.title+" Home",description:"REGARDS HOME describing learning basics"},r.a.createElement(c.default,null),r.a.createElement(o.default,null))}},2715:function(e,t,a){"use strict";var l=a(3),r=a(7),n=a(0),s=a.n(n),c=a(2705),o=a(2708),i=a(2704),m=a(2709),u=a(56),d=a.n(u),E=a(17);var f=function(){return Object(E.default)(),s.a.createElement("div",{className:d.a.col_1},s.a.createElement("p",null,s.a.createElement("strong",null,"A framework and a set of plugins to build scientific archives.")),s.a.createElement("p",null,"REGARDS is an Open Source data valorization product, highly flexible to various themes, modular, efficient, long-lasting, evolutionary and scalable, aims at providing services to Mission Centers and laboratories, and is able to deal with huge amount of data. ",s.a.createElement("br",null),"Our goal is to allow a strong commitment from user community in the development of modules and plugins."),s.a.createElement("p",null,s.a.createElement("strong",null,"We welcome ",s.a.createElement("a",{href:"https://github.com/RegardsOss/RegardsOss.github.io/blob/master/CONTRIBUTING.md"},"your contributions")," to make these documents better.")),s.a.createElement("div",null,s.a.createElement("img",{src:"/img/logos/courbe-institutionnelle-signature_y110-inverser.png"})))};function g(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,i=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),d=Object(m.a)(a,{forcePrependBaseUrl:!0});return s.a.createElement(o.a,Object(l.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?d:a}:{to:u},i),n)}var h=function(e){var t=e.url,a=e.alt;return s.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.useThemeConfig)().footer,t=e||{},a=t.copyright,l=t.links,r=void 0===l?[]:l,n=t.logo,o=void 0===n?{}:n,u=Object(m.a)(o.src);return e?s.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},s.a.createElement("div",{className:d.a.container_grid},s.a.createElement(f,null),r&&r.length>0&&r.map((function(e,t){return s.a.createElement("div",{key:t,className:d.a.col_2},null!=e.title?s.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?s.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.a.createElement("li",{key:e.href||e.to,className:"footer__item"},s.a.createElement(g,e))}))):null)}))),(o||a)&&s.a.createElement("div",{className:"footer__bottom text--center"},o&&o.src&&s.a.createElement("div",{className:"margin-bottom--sm"},o.href?s.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:_stylesModule.default.footerLogoLink},s.a.createElement(h,{alt:o.alt,url:u})):s.a.createElement(h,{alt:o.alt,url:u})),a?s.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)):null}},57:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement("div",{className:"cards__item__box"},r.a.createElement("div",{className:"cards__item__pic-wrap"},r.a.createElement("img",{className:"cards__item__img",alt:"Text img",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h2",{className:"cards__item__title"},e.title),r.a.createElement("div",{className:"cards__item__text"},e.text)))))}},58:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(57);a(60);t.default=function(){return r.a.createElement("div",{id:"basics",className:"cards"},r.a.createElement("h1",null,"Learn REGARDS basics"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(n.default,{src:"/img/icons/satellite.svg",title:"Safely preserve your data",text:r.a.createElement("div",null,r.a.createElement("p",null," REGARDS is primary designed ",r.a.createElement("b",null,"to store data and their metadata")," from spatial agency on ",r.a.createElement("b",null,"safe storage systems"),"."),r.a.createElement("p",null," To do this, the system design leans on the OAIS (Open Archival Information System) recommendation of the",r.a.createElement("a",{href:"https://public.ccsds.org",target:"blank_"}," CCSDS ")),r.a.createElement("p",null," Consequently, the system allows ",r.a.createElement("b",null,"high-performance ingestion")," of data and metadata available from providers, either in ",r.a.createElement("b",null,"standard or non-standard formats"),"."))}),r.a.createElement(n.default,{src:"img/icons/server.svg",title:"Harvest any metadata from anywhere.",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS can ",r.a.createElement("b",null,"harvest and index")," metadata ",r.a.createElement("b",null,"from any source"),". Just use an existing data source plugin or develop your own."),r.a.createElement("p",null,"REGARDS indexes metadata in a metacatalog structured by ",r.a.createElement("b",null,"hot defined data models"),". and relying on the powerfull search engine ",r.a.createElement("a",{href:"https://www.elastic.co/fr/products/elasticsearch",target:"blank_"}," ElasticSearch"),"."))}),r.a.createElement(n.default,{src:"img/icons/browser.svg",title:"Deep search",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS provides a simple, fast and efficient interface for discovering and accessing data.",r.a.createElement("br",null)),r.a.createElement("p",null,"Its metacatalog API provides a ",r.a.createElement("a",{href:"http://www.opensearch.org/Home",target:"blank_"}," standard OpenSearch API ")," (with parameter, geo and time extensions) and responses in ",r.a.createElement("a",{href:"http://geojson.org/",target:"blank_"},"GeoJson standard format"),"."))})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(n.default,{src:"img/icons/solar-system.svg",title:"Support for georeferenced and astronomical data",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS is able to index and search Earth and Mars localized data as well as astronomical ones."))}),r.a.createElement(n.default,{src:"img/icons/download.svg",title:"Download your data from everywhere",text:r.a.createElement("div",null,r.a.createElement("p",null,"Regardless of the storage system(s) you connect to REGARDS, it will serve all your files through a HTTP server."))}),r.a.createElement(n.default,{src:"img/icons/shield.svg",title:"Manage your access rights on functionnalities, metadata, data",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS allows ",r.a.createElement("b",null,"to limit access to functionnalities")," through the concept of ",r.a.createElement("b",null,"role"),". Default roles exist but you can create your own and define special user profile. ",r.a.createElement("b",null,"A user is always attached to a single role"),"."),r.a.createElement("p",null,"Furthermore, REGARDS allows to limit metadata and data accesses through the concept of ",r.a.createElement("b",null,"group"),". A group define accesses to one or more dataset. To be able to access these datasets, ",r.a.createElement("b",null,"a user will have to be attached to one or more groups"),"."))})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(n.default,{src:"img/icons/cloud-computing.svg",title:"Scale as your need",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS is a cloud native system and more precisely a microservice architecture. The system core integrates ",r.a.createElement("b",null,"load balancing for batch jobs")," to enable hot-plugging of system resources."))}),r.a.createElement(n.default,{src:"img/icons/jigsaws.svg",title:"Customize the system as your need",text:r.a.createElement("div",null,r.a.createElement("p",null,"REGARDS is an extensible plugin architecture. The system core integrates a ",r.a.createElement("b",null,"plugin engine")," enabling an integrator to customize system behaviors."))})))))}},59:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=(a(61),a(2707));t.default=function(){return r.a.createElement("div",{className:"heroContainer"},r.a.createElement("video",{src:"/videos/stars.mp4",autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,r.a.createElement(n.a,{id:"homepage.title1"},"Welcome to"),r.a.createElement("br",null)," ",r.a.createElement(n.a,{id:"homepage.title2"},"REGARDS OSS Website")),r.a.createElement("h2",null,r.a.createElement(n.a,{id:"homepage.tagline"},"A framework and a set of plugins to build scientific archives.")),r.a.createElement("div",{id:"heroArrow"},r.a.createElement("a",{href:"#basics"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Scroll")))}}}]);