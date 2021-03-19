(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(s,".").concat(b)]||u[b]||g[b]||r;return a?i.a.createElement(d,c(c({ref:t},o),{},{components:a})):i.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<r;o++)s[o]=a[o];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2706:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"},916:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(2703)),s={id:"backend-catalog-service-plugins",title:"Catalog service plugins",sidebar_label:"Catalog service",slug:"/development/backend/catalog/service-plugins/"},c={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-service-plugins",id:"development/backend/regards/catalog/plugins/backend-catalog-service-plugins",isDocsHomePage:!1,title:"Catalog service plugins",description:"Overview",source:"@site/docs/development/backend/regards/catalog/plugins/catalog-service-plugins.md",slug:"/development/backend/catalog/service-plugins/",permalink:"/fr/docs/development/backend/catalog/service-plugins/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/regards/catalog/plugins/catalog-service-plugins.md",version:"current",sidebar_label:"Catalog service",sidebar:"dev",previous:{title:"REGARDS search API",permalink:"/fr/docs/development/backend/catalog/search-api/"},next:{title:"Search engine plugins",permalink:"/fr/docs/development/backend/catalog/search-engine-plugins/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Usages",id:"usages",children:[{value:"Apply service on one entity",id:"apply-service-on-one-entity",children:[]},{value:"Apply service on one multiple entities",id:"apply-service-on-one-multiple-entities",children:[]},{value:"Apply service on entities from a search query",id:"apply-service-on-entities-from-a-search-query",children:[]}]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Implementation",id:"implementation",children:[]}],o={toc:l};function p(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This extension point allows to provide a business processing on catalog meda data. "))),Object(r.b)("p",null,"Each business service plugin is accessible through a unique microservice endpoint :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"@POST http://<host>:<port>/api/v1/rs-catalog/services/{servideId}/apply\n")),Object(r.b)("p",null,"To define on which entities of the catalog the service must be applied you have to provide a json body like :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "entityId": "", // [Optional] Entity identifier to apply plugin service on one uniq entity\n    "entitiesId":[], // [Optional] Entities ids to apply plugin service on multiple entities\n    "entityType":"", // [Optional] One of [COLLECTION, DATA, DATASET, DOCUMENT] Combined with the search query \'q\' parameter. Entities type to apply plugin service on. \n    "q":"", // [Optional] Search query to apply on catalog to define\n    "dynamicParameters": { // [Optional]\n        // Specific plugin parameters applied at runtime\n    }\n}\n')),Object(r.b)("p",null,"Each business service plugin return a stream of typed data in the response header. The implemention section of this page explains how to return typed results like ",Object(r.b)("inlineCode",{parentName:"p"},"JSON"),", ",Object(r.b)("inlineCode",{parentName:"p"},"XML"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Image")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Octet-stream"),"."),Object(r.b)("h2",{id:"usages"},"Usages"),Object(r.b)("h3",{id:"apply-service-on-one-entity"},"Apply service on one entity"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "entityId": "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1"\n}\n')),Object(r.b)("h3",{id:"apply-service-on-one-multiple-entities"},"Apply service on one multiple entities"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ]\n}\n')),Object(r.b)("h3",{id:"apply-service-on-entities-from-a-search-query"},"Apply service on entities from a search query"),Object(r.b)("p",null,"You can see the ",Object(r.b)("a",{parentName:"p",href:"../search-api/"},"How to build a query")," page. The query is provided in the body like :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "DATA",\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n')),Object(r.b)("p",null,"For a search query application you can also execlude some entites from the search results by setting the entitiesId parameter :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "DATA",\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ],\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n')),Object(r.b)("p",null," REGARDS provides many implementation of this extension :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/MultiDownloadPlugin.java"},"MultiDownloadPlugin")," : Allow to download multiple selected entities in one zip archive."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java"},"SampleServicePlugin")," : Example implementation")),Object(r.b)("h2",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IService.java"},"IService")," : Base interface extended by the specific interfaces defined here under."),Object(r.b)("p",{parentName:"li"},"To help developpers to make different service application you can also use the specific interfaces :")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IEntitiesServicePlugin.java"},"IEntitiesServicePlugin")," : To create a service applicable to multiple entities selection.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/ISingleEntityServicePlugin.java"},"ISingleEntityServicePlugin")," : To create a service application only to a single entity selection"))),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"To learn more about how to create your own plugin see ",Object(r.b)("a",{parentName:"p",href:"../../framework/modules/plugins/"},"Plugins"),"."),Object(r.b)("p",null,"You can implements two type of catalog services following the here under exemples :  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(description = "Single entity service plugin", id = SingleEntityServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.ONE }, entityTypes = { EntityType.DATA })\npublic class SingleEntityServicePlugin implements ISingleEntityServicePlugin {\n\n    public static final String PLUGIN_ID = "singleEntityPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntity(String entityId, HttpServletResponse response) {\n        // Retrieve entity to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entityId), 0, 1);\n        // ....\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(description = "Multiple entities service plugin", id = MultiEntitiesServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.MANY }, entityTypes = { EntityType.DATA })\npublic class MultiEntitiesServicePlugin extends AbstractCatalogServicePlugin implements IEntitiesServicePlugin {\n\n    public static final String PLUGIN_ID = "multiEntitiesPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntities(List<String> entitiesId,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), 0, 100);\n        while (dos.hasNext()) {\n            Pageable nextPage = dos.nextPageable();\n            dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), nextPage.getPageNumber(),\n                                               nextPage.getPageSize());\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnQuery(String pOpenSearchQuery, EntityType pEntityType,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos;\n        try {\n            dos = serviceHelper.getDataObjects(pOpenSearchQuery, 0, 100);\n            while (dos.hasNext()) {\n                Pageable nextPage = dos.nextPageable();\n                dos = serviceHelper.getDataObjects(pOpenSearchQuery, nextPage.getPageNumber(), nextPage.getPageSize());\n            }\n        } catch (OpenSearchParseException e) {\n            return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, "Error retrieving entities from catalog");\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n')),Object(r.b)("p",null,"NOTE : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"@CatalogServicePlugin : Annotation to define scope of service plugin."),Object(r.b)("li",{parentName:"ul"},"AbstractCatalogServicePlugin : Allow to add the common plugin parameter to associate a service to all datasets of the catalog"),Object(r.b)("li",{parentName:"ul"},"A tutorial on how to create a plugin is available ",Object(r.b)("a",{target:"_blank",href:a(2706).default},"here"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java"},"SampleServicePlugin")," is an exemple of how to implements this extension point to create your own business logic.  "),Object(r.b)("p",null,"In order to help you retrieving datas from the queried parameters the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/ServiceHelper.java"},"ServiceHelper")," can be autowired on any of your plugin implementations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IServiceHelper serviceHelper;\n")),Object(r.b)("p",null,"The exemple service :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Extends ",Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/AbstractCatalogServicePlugin.java"},"AbstractCatalogServicePlugin")," to add a standard plugin parameter to allow access to the service on specified catalog datasets. The Administration HMI allows you to define access to catalog services for each dataset."),Object(r.b)("li",{parentName:"ul"},"Implements the two interfaces ",Object(r.b)("inlineCode",{parentName:"li"},"IEntitiesServicePlugin")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ISingleEntityServicePlugin")," to allow application with one or many entities."),Object(r.b)("li",{parentName:"ul"},"Shows you how to specify the service return type (octet-stream, image, json or xml) through the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/CatalogPluginResponseFactory.java"},"CatalogPluginResponseFactory")," class.")))}p.isMDXComponent=!0}}]);