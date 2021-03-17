(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return t?a.a.createElement(b,c(c({ref:r},s),{},{components:t})):a.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},367:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(2701)),i={id:"backend-framework-starters-encryption",title:"Encryption starter",slug:"/development/backend/framework/starters/encryption"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-encryption",id:"development/backend/framework/starters/backend-framework-starters-encryption",isDocsHomePage:!1,title:"Encryption starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/encryption-starter.md",slug:"/development/backend/framework/starters/encryption",permalink:"/fr/docs/development/backend/framework/starters/encryption",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/framework/starters/encryption-starter.md",version:"current",sidebar:"dev",previous:{title:"Cloud starter",permalink:"/fr/docs/development/backend/framework/starters/cloud"},next:{title:"Feign starter",permalink:"/fr/docs/development/backend/framework/starters/feign"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]}],s={toc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This stater enables encryption, and decryption, for sensible plugin parameters and databases password."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Add stater dependency to your POM (version depends on the REGARDS BOM)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>encryption-starter</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"This stater defines its own properties. It can be found in CipherProperties class."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"regards.cipher.key-location=<path to cipher key>\nregards.cipher.iv=<value of initialization vector>\n")),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Starter autoconfigures: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IEncryptionService to manage encryption and decryption. By default we use AESEncryptionService.")))}u.isMDXComponent=!0}}]);