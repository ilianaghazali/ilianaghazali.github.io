(window.webpackJsonp=window.webpackJsonp||[]).push([[1118],{1190:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),s=(r(0),r(2703)),c={},l={unversionedId:"development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response",id:"development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response",permalink:"/fr/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsProjectAdminTest/http-response.md",version:"current"},a=[],i={toc:a};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 61,\n    "totalPages" : 7,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "description" : "Updates the setting managing the access requests",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "AccessSettingsController",\n      "resource" : "/accesses/settings",\n      "verb" : "PUT",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/1"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/1"\n    } ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "description" : "Retrieves the settings managing the access requests",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "AccessSettingsController",\n      "resource" : "/accesses/settings",\n      "verb" : "GET",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/2"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/2"\n    } ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "description" : "Allow admins to invalidate the license of the project for all the users of the project",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "LicenseController",\n      "resource" : "/license/reset",\n      "verb" : "PUT",\n      "defaultRole" : "ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/3"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/3"\n    } ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "description" : "Retrieve if the current user has accepted the license of the project",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "LicenseController",\n      "resource" : "/license",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/4"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/4"\n    } ]\n  }, {\n    "content" : {\n      "id" : 5,\n      "description" : "Allow current user to accept the license of the project",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "LicenseController",\n      "resource" : "/license",\n      "verb" : "PUT",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/5"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/5"\n    } ]\n  }, {\n    "content" : {\n      "id" : 6,\n      "description" : "Retrieve all resources for the given microservice and the given controller",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "MicroserviceResourceController",\n      "resource" : "/resources/microservices/{microservicename}/controllers",\n      "verb" : "GET",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/6"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/6"\n    } ]\n  }, {\n    "content" : {\n      "id" : 7,\n      "description" : "Retrieve all resources for the given microservice and the given controller",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "MicroserviceResourceController",\n      "resource" : "/resources/microservices/{microservicename}/controllers/{controllername}",\n      "verb" : "GET",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/7"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/7"\n    } ]\n  }, {\n    "content" : {\n      "id" : 9,\n      "description" : "Retrieve accessible resource accesses of the user among the given microservice",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "MicroserviceResourceController",\n      "resource" : "/resources/microservices/{microservicename}",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/9"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/9"\n    } ]\n  }, {\n    "content" : {\n      "id" : 10,\n      "description" : "update the list of all metadata of the user",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "ProjectUserMetadataController",\n      "resource" : "/users/{user_id}/metadatas",\n      "verb" : "PUT",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/10"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/10"\n    } ]\n  }, {\n    "content" : {\n      "id" : 11,\n      "description" : "remove all the metadata of the user",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "ProjectUserMetadataController",\n      "resource" : "/users/{user_id}/metadatas",\n      "verb" : "DELETE",\n      "defaultRole" : "PROJECT_ADMIN"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/11"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/resources/11"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "first",\n    "href" : "http://localhost:8080/resources?page=0&size=10&sort=id,asc"\n  }, {\n    "rel" : "self",\n    "href" : "http://localhost:8080/resources?page=0&size=10&sort=id,asc"\n  }, {\n    "rel" : "next",\n    "href" : "http://localhost:8080/resources?page=1&size=10&sort=id,asc"\n  }, {\n    "rel" : "last",\n    "href" : "http://localhost:8080/resources?page=6&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2703:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=t,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||s;return r?o.a.createElement(m,l(l({ref:n},i),{},{components:r})):o.a.createElement(m,l({ref:n},i))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,c=new Array(s);c[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var i=2;i<s;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);