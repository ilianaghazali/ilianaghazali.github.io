(window.webpackJsonp=window.webpackJsonp||[]).push([[258,294],{2717:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),o=a.n(l),c=a(2703),i=a(2707),s=a(2702),m=a(2706),u=a(55),f=a.n(u),d=a(22);var E=function(){var e=Object(d.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement("div",{className:f.a.col_1},o.a.createElement("p",null,o.a.createElement("strong",null,"A framework and a set of plugins to build scientific archives.")),o.a.createElement("p",null,"REGARDS is an Open Source data valorization product, highly flexible to various themes, modular, efficient, long-lasting, evolutionary and scalable, aims at providing services to Mission Centers and laboratories, and is able to deal with huge amount of data. ",o.a.createElement("br",null),"Our goal is to allow a strong commitment from user community in the development of modules and plugins."),o.a.createElement("p",null,o.a.createElement("strong",null,"We welcome ",o.a.createElement("a",{href:t.url+"/blob/master/CONTRIBUTING.md"},"your contributions")," to make these documents better.")),o.a.createElement("div",null,o.a.createElement("img",{src:"/img/logos/courbe-institutionnelle-signature_y110-inverser.png"})))};function g(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),f=Object(m.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?f:a}:{to:u},s),l)}var b=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(m.a)(i.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:f.a.container_grid},o.a.createElement(E,null),r&&r.length>0&&r.map((function(e,t){return o.a.createElement("div",{key:t,className:f.a.col_2},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(g,e))}))):null)}))),(i||a)&&o.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&o.a.createElement("div",{className:"margin-bottom--sm"},i.href?o.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:_stylesModule.default.footerLogoLink},o.a.createElement(b,{alt:i.alt,url:u})):o.a.createElement(b,{alt:i.alt,url:u})),a?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)):null}},327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a(2712),c=a(2705);t.default=function(){var e=Object(l.default)().siteConfig,t=Object(c.useVersions)(),a=Object(c.useLatestVersion)(),n=t.find((function(e){return"current"===e.name})),i=t.filter((function(e){return e!==a&&"current"!==e.name}));return e.organizationName,e.projectName,r.a.createElement(o.a,{title:"Versions",description:"REGARDS Versions page listing all documented site versions"},r.a.createElement("main",{className:"container margin-vert--lg"},r.a.createElement("h1",null,"REGARDS documentation versions"),n&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Current version (Stable)"),r.a.createElement("p",null,"Here you can find the documentation for current released version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,n.label),r.a.createElement("td",null,r.a.createElement("a",{href:n.path+"/user-guide"},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:"release-notes/v"+n.label},"Release Notes")))))),i.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),r.a.createElement("p",null,"Here you can find documentation for previous versions of REGARDS."),r.a.createElement("table",null,r.a.createElement("tbody",null,i.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",null,e.label),r.a.createElement("td",null,r.a.createElement("a",{href:e.path+"/user-guide"},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:"release-notes/v"+e.label},"Release Notes")))})))))))}}}]);