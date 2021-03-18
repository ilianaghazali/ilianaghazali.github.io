(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),i=s(t),m=a,u=i["".concat(c,".").concat(m)]||i[m]||b[m]||r;return t?o.a.createElement(u,p(p({ref:n},d),{},{components:t})):o.a.createElement(u,p({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var d=2;d<r;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},606:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(2703)),c={id:"backend-dam-document-api",title:"REGARDS Document API",sidebar_label:"Document",slug:"/development/backend/dam/api/document/"},p={unversionedId:"development/backend/regards/dam/api/backend-dam-document-api",id:"version-1.4.0/development/backend/regards/dam/api/backend-dam-document-api",isDocsHomePage:!1,title:"REGARDS Document API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/document-api.md",slug:"/development/backend/dam/api/document/",permalink:"/fr/docs/1.4.0/development/backend/dam/api/document/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/document-api.md",version:"1.4.0",sidebar_label:"Document"},l=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Create a new doculent",id:"create-a-new-doculent",children:[]},{value:"Update a document",id:"update-a-document",children:[]},{value:"Delete document",id:"delete-document",children:[]},{value:"Retrieve one document",id:"retrieve-one-document",children:[]},{value:"Retrieve documents",id:"retrieve-documents",children:[]}],d={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(r.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(r.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(r.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"scope")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>\n")),Object(r.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(r.b)("a",{parentName:"p",href:"../../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(r.b)("p",null,"To access endpoints from ",Object(r.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>\n")),Object(r.b)("h1",{id:"documentcontroller"},"DocumentController"),Object(r.b)("h2",{id:"create-a-new-doculent"},"Create a new doculent"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/documents`\n\n    ***URL template**\n\n    `/documents`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "DOCUMENT",\n  "ipId" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",\n  "creationDate" : "2019-07-19T17:14:31.788Z",\n  "model" : {\n    "id" : 8,\n    "name" : "documentModelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "ProviderId3",\n    "entityType" : "DOCUMENT",\n    "label" : "label",\n    "model" : "documentModelName1",\n    "files" : { },\n    "tags" : [ ],\n    "id" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DOCUMENT",\n    "id" : 17,\n    "ipId" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",\n    "creationDate" : "2019-07-19T17:14:31.809Z",\n    "model" : {\n      "id" : 8,\n      "name" : "documentModelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId3",\n      "entityType" : "DOCUMENT",\n      "label" : "label",\n      "model" : "documentModelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/documents/17"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/documents"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/documents/17"\n  } ]\n}\n'))),Object(r.b)("h2",{id:"update-a-document"},"Update a document"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/documents/11`\n\n    ***URL template**\n\n    `/documents/{document_id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "DOCUMENT",\n  "id" : 11,\n  "ipId" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",\n  "creationDate" : "2019-07-19T17:14:31.275Z",\n  "model" : {\n    "id" : 5,\n    "name" : "documentModelName2",\n    "description" : "model desc",\n    "type" : "DOCUMENT"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "ProviderId2new",\n    "entityType" : "DOCUMENT",\n    "label" : "document1clone",\n    "model" : "documentModelName2",\n    "files" : { },\n    "tags" : [ ],\n    "id" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DOCUMENT",\n    "id" : 11,\n    "ipId" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",\n    "creationDate" : "2019-07-19T17:14:31.275Z",\n    "lastUpdate" : "2019-07-19T17:14:31.487Z",\n    "model" : {\n      "id" : 5,\n      "name" : "documentModelName2",\n      "description" : "model desc",\n      "type" : "DOCUMENT"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId2new",\n      "entityType" : "DOCUMENT",\n      "label" : "document1clone",\n      "model" : "documentModelName2",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/documents/11"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/documents"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/documents/11"\n  } ]\n}\n'))),Object(r.b)("h2",{id:"delete-document"},"Delete document"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/documents/20`\n\n    ***URL template**\n\n    `/documents/{document_id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(r.b)("h2",{id:"retrieve-one-document"},"Retrieve one document"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/documents/7`\n\n    ***URL template**\n\n    `/documents/{document_id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DOCUMENT",\n    "id" : 7,\n    "ipId" : "URN:AIP:DOCUMENT:PROJECT:318818e4-9eb7-4f1c-87ef-b5ed05a5988f:V1",\n    "creationDate" : "2019-07-19T17:14:30.894Z",\n    "model" : {\n      "id" : 3,\n      "name" : "documentModelName2",\n      "description" : "model desc",\n      "type" : "DOCUMENT"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId2",\n      "entityType" : "DOCUMENT",\n      "label" : "label",\n      "model" : "documentModelName2",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DOCUMENT:PROJECT:318818e4-9eb7-4f1c-87ef-b5ed05a5988f:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/documents/7"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/documents"\n  } ]\n}\n'))),Object(r.b)("h2",{id:"retrieve-documents"},"Retrieve documents"),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/documents`\n\n    ***URL template**\n\n    `/documents`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(r.b)("p",null,Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(r.b)("p",null,Object(r.b)("h4",{parentName:"p"},"Request"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "DOCUMENT",\n      "id" : 3,\n      "ipId" : "URN:AIP:DOCUMENT:PROJECT:646823c0-5e04-4072-89e3-e9c0cb10af97:V1",\n      "creationDate" : "2019-07-19T17:14:30.399Z",\n      "model" : {\n        "id" : 1,\n        "name" : "documentModelName2",\n        "description" : "model desc",\n        "type" : "DOCUMENT"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId2",\n        "entityType" : "DOCUMENT",\n        "label" : "label",\n        "model" : "documentModelName2",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DOCUMENT:PROJECT:646823c0-5e04-4072-89e3-e9c0cb10af97:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/documents"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DOCUMENT",\n      "id" : 4,\n      "ipId" : "URN:AIP:DOCUMENT:PROJECT:6222400a-6022-4685-8dcd-b04d29bf354c:V1",\n      "creationDate" : "2019-07-19T17:14:30.399Z",\n      "model" : {\n        "id" : 1,\n        "name" : "documentModelName2",\n        "description" : "model desc",\n        "type" : "DOCUMENT"\n      },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:910ebff4-acbc-4607-9bc4-7d2d9bfd750e:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId3",\n        "entityType" : "DOCUMENT",\n        "label" : "label",\n        "model" : "documentModelName2",\n        "files" : { },\n        "tags" : [ "URN:AIP:COLLECTION:PROJECT:910ebff4-acbc-4607-9bc4-7d2d9bfd750e:V1" ],\n        "id" : "URN:AIP:DOCUMENT:PROJECT:6222400a-6022-4685-8dcd-b04d29bf354c:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/documents"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/documents?page=0&size=10&sort=id,asc"\n  } ]\n}\n'))))}s.isMDXComponent=!0}}]);