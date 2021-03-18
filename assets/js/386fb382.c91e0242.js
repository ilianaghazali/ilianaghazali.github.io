(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),c=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(b,l(l({ref:n},s),{},{components:t})):o.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},638:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),o=t(7),a=(t(0),t(2703)),i={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelControllerIT/exportModel/http-response.md",version:"1.4.0"},p=[],s={toc:p};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},'  **Headers:**\n\n  `Content-Disposition:attachment; filename="model-EXPORT_MODEL.xml"`\n  `Content-Type:application/xml`\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n')))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n<?xml version="1.0" encoding="UTF-8"?>\n<model>\n    <name>EXPORT_MODEL</name>\n    <description>Exported model</description>\n    <type>COLLECTION</type>\n    <attribute alterable="true" optional="false">\n        <label>ForTests</label>\n        <name>att_boolean</name>\n        <type>BOOLEAN</type>\n    </attribute>\n    <attribute alterable="false" optional="false">\n        <label>ForTests</label>\n        <name>att_string</name>\n        <type>STRING</type>\n    </attribute>\n    <fragment>\n        <name>GEO</name>\n        <description>Geographic information</description>\n        <attribute alterable="false" optional="false">\n            <label>ForTests</label>\n            <name>CRS</name>\n            <type>STRING</type>\n            <restriction>\n                <enumeration>\n                    <value>Earth</value>\n                    <value>Mars</value>\n                    <value>Venus</value>\n                </enumeration>\n            </restriction>\n        </attribute>\n    </fragment>\n    <fragment>\n        <name>Contact</name>\n        <description>Contact information</description>\n        <attribute alterable="false" optional="false">\n            <label>ForTests</label>\n            <name>Phone</name>\n            <type>STRING</type>\n            <restriction>\n                <pattern>[0-9 ]{10}</pattern>\n            </restriction>\n        </attribute>\n    </fragment>\n</model>\n\n')))}c.isMDXComponent=!0}}]);