(window.webpackJsonp=window.webpackJsonp||[]).push([[2041],{2111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(2701)),p={},i={unversionedId:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response",id:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response",isDocsHomePage:!1,title:"http-response",description:"Response",source:"@site/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response.md",slug:"/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response",permalink:"/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllOwner/http-response.md",version:"current"},c=[{value:"Response",id:"response",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 6,\n      "owner" : "default_user@regards.fr",\n      "label" : "order2",\n      "creationDate" : "2020-09-07T14:46:26.721Z",\n      "expirationDate" : "2020-09-10T14:46:26.721Z",\n      "percentCompleted" : 0,\n      "filesInErrorCount" : 0,\n      "availableFilesCount" : 0,\n      "status" : "PENDING",\n      "statusDate" : "2020-09-07T14:46:26.721Z",\n      "waitingForUser" : false,\n      "datasetTasks" : [ ]\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/user/orders?page=0&size=20"\n  } ]\n}\n')))}s.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,O=b["".concat(p,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(O,i(i({ref:n},l),{},{components:t})):a.a.createElement(O,i({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);