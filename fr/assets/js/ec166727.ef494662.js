(window.webpackJsonp=window.webpackJsonp||[]).push([[2402],{2474:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(2703)),o={id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/storage/plugins/security-delegation/"},s={unversionedId:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",id:"version-1.4.0/development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",isDocsHomePage:!1,title:"Security delegation plugins",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/storage/plugins/security-delegation-plugins.md",slug:"/development/backend/storage/plugins/security-delegation/",permalink:"/fr/docs/1.4.0/development/backend/storage/plugins/security-delegation/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/plugins/security-delegation-plugins.md",version:"1.4.0",sidebar_label:"Security delegation",sidebar:"version-1.4.0/dev",previous:{title:"Data storage plugins",permalink:"/fr/docs/1.4.0/development/backend/storage/plugins/data-storage/"},next:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/storage/events/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This extension point allows to define if a user has access to a given AIP and its files. By default the security is delegated to the catalog microservice with the CatalogSecurityDelegation plugin"))),Object(i.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/catalog-security-delegation/src/main/java/fr/cnes/regards/modules/storage/plugins/security/CatalogSecurityDelegation.java"},"CatalogSecurityDelegation")," : Delegate access rights to catalog microservice"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/security/NoCatalogSecurityDelegationPlugin.java"},"NoCatalogSecurityDelegationPlugin")," : Allow access to all stored AIPs without any security check to all users.")),Object(i.b)("h2",{id:"interface"},"Interface"),Object(i.b)("p",null,"   ",Object(i.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/ISecurityDelegation.java"},"ISecurityDelegation")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"To learn more about how to create your own plugin see ",Object(i.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),Object(i.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISecurityDelegation {\n\n    /**\n     * Return URNs of which access is granted from given ones\n     */\n    @Override\n    public Set<UniformResourceName> hasAccess(Collection<UniformResourceName> urns){\n\n    }\n\n    /**\n     * Allow to know if the current user has access to a given AIP, through its ipId\n     * @param ipId identifier of aip that we are wondeering if we have access to.\n     * @return weither we have access to the aip or not\n     */\n    @Override\n    public boolean hasAccess(String ipId) {\n\n    }\n\n    /**\n     * @return weither the current user has access to features returning collections of AIP\n     */\n    @Override\n    public boolean hasAccessToListFeature() {\n\n    }\n   \n}\n')))}u.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(o,".").concat(g)]||p[g]||d[g]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);