(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},821:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(2701)),p={},c={unversionedId:"development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response",id:"version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response",isDocsHomePage:!1,title:"http-response",description:"Response",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response.md",slug:"/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateUnValidFeatureUpdateRequest/http-response.md",version:"1.4.0"},i=[{value:"Response",id:"response",children:[]}],s={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 422 Unprocessable Entity")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json;charset=UTF-8"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : { },\n  "denied" : {\n    "empty" : false\n  },\n  "messages" : null\n}\n')))}l.isMDXComponent=!0}}]);