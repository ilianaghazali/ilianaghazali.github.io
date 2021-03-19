(window.webpackJsonp=window.webpackJsonp||[]).push([[1112],{1184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(2703)),o={id:"fem-introduction",title:"Introduction",slug:"/user-guide/import-data/fem/introduction/"},s={unversionedId:"user-documentation/4_3-fem/fem-introduction",id:"version-1.4.0/user-documentation/4_3-fem/fem-introduction",isDocsHomePage:!1,title:"Introduction",description:"REGARDS vous permet \xe9galement d'importer des fichiers de donn\xe9es par messages AMQP, n\xe9cessairement au format GeoJSON.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/user-documentation/4_3-fem/introduction-fem.md",slug:"/user-guide/import-data/fem/introduction/",permalink:"/fr/docs/1.4.0/user-guide/import-data/fem/introduction/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/4_3-fem/introduction-fem.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Monitor session acquisitions",permalink:"/fr/docs/1.4.0/user-guide/import-data/scanned-files/monitor-sessions/"},next:{title:"Manage features",permalink:"/fr/docs/1.4.0/user-guide/import-data/fem/manage-features/"}},c=[],u={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"REGARDS vous permet \xe9galement d'importer des fichiers de donn\xe9es par messages AMQP, n\xe9cessairement au format GeoJSON.\nContrairement aux fichiers de donn\xe9es respectant le format OAIS et pouvant \xeatre directement import\xe9s depuis le ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Product Manager")),", ces types de fichiers n'ont pas de m\xe9tadonn\xe9es permettant de les p\xe9renniser (historique d\xe9crivant la donn\xe9e par exemple). Ainsi, ces fichiers ne sont pas transform\xe9s en AIP.\nPar ailleurs, ils ne sont pas accessibles depuis l'interface d'administration de REGARDS, mais en base de donn\xe9es depuis le service FEM."),Object(a.b)("p",null,"Apprenez \xe0 ",Object(a.b)("a",{parentName:"p",href:"../manage-features/"},"cr\xe9er et g\xe9rer des features")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Une version ult\xe9rieure de REGARDS pr\xe9voit la possibilit\xe9 de les g\xe9rer et les visualiser depuis l'interface d'administration"))))}d.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),l=r,f=p["".concat(o,".").concat(l)]||p[l]||m[l]||a;return n?i.a.createElement(f,s(s({ref:t},u),{},{components:n})):i.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);