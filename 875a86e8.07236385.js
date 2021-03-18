(window.webpackJsonp=window.webpackJsonp||[]).push([[1398],{1470:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),a=(n(0),n(2701)),c={},i={unversionedId:"development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request.md",slug:"/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request",permalink:"/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-request.md",version:"1.4.0"},s=[],p={toc:s};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/roles/NEW_ROLE/resources`\n\n    ***URL template**\n\n    `/roles/{role_name}/resources`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0},2701:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=t,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?o.a.createElement(f,i(i({ref:r},p),{},{components:n})):o.a.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);