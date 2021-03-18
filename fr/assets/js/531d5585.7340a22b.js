(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},914:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(2703)),i={id:"backend-dam-datasource-plugins",title:"Datasource plugin",sidebar_label:"Datasource",slug:"/development/backend/dam/plugins/datasource/"},s={unversionedId:"development/backend/regards/dam/plugins/backend-dam-datasource-plugins",id:"version-1.4.0/development/backend/regards/dam/plugins/backend-dam-datasource-plugins",isDocsHomePage:!1,title:"Datasource plugin",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/plugins/data-source-plugins.md",slug:"/development/backend/dam/plugins/datasource/",permalink:"/fr/docs/1.4.0/development/backend/dam/plugins/datasource/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/plugins/data-source-plugins.md",version:"1.4.0",sidebar_label:"Datasource",sidebar:"version-1.4.0/dev",previous:{title:"Computed attribute plugins",permalink:"/fr/docs/1.4.0/development/backend/dam/plugins/computed-attribute/"},next:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/dam/events/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This extension point allows you to crawl data from any source into the REGARDS catalog."))),Object(o.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/aip-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/AipDataSourcePlugin.java"},"AIPDataSourcePlugin")," : To crawl data from the AIP storage microservice (rs-storage)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/postgresql-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/PostgreDataSourcePlugin.java"},"PostgreDataSourcePlugin")," : To crawl data from a postgres database"),Object(o.b)("li",{parentName:"ul"},"WebServicePlugin : ",Object(o.b)("inlineCode",{parentName:"li"},"Not released yet")," To crawl data from a standard opensearch web service with geojson response format.")),Object(o.b)("h2",{id:"interface"},"Interface"),Object(o.b)("p",null,"  ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/datasources/plugins/IDataSourcePlugin.java"},"IDataSourcePlugin")),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"To learn more about how to create your own plugin see ",Object(o.b)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),Object(o.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "ExempleDataObjectsAccessPlugin", version = "4.0.0-SNAPSHOT",\n        description = "Allow access to dataObjects",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class DataSourcePlugin implements IDataSourcePlugin {\n\n  @PluginParameter(name = "modelName", label = "model name", description = "Associated data source model name")\n  private String modelName;\n\n  @PluginParameter(name = "refreshRate", defaultValue = "86400", optional = true,\n            label = "refresh rate", description = "Crawling refresh rate in seconds (minimum delay between two consecutive crawls)")\n  private Integer refreshRate;\n\n  @Override\n  public String getModelName() {\n    return modelName;\n  }\n\n  @Override\n  public int getRefreshRate() {\n    return refreshRate;\n  }\n\n  /**\n    * Returns a {@link Page} of new entities meeting the paging restriction provided in the {@code Pageable} object.\n    * @param tenant tenant to build URN\n    * @param pageable the pagination information\n    * @param date Allows to filter the new entities created after this date parameter (can be null)\n    * @return a page of entities\n    */\n  @Override\n  public Page<DataObjectFeature> findAll(String tenant, Pageable pageable, OffsetDateTime date) throws DataSourceException {\n    long totalElements = 0L;\n    List<DataObjectFeature> features = new ArrayList<>();\n    // ... here is the business code to retrieve the DataObjectFeatures to add into the REGARDS catalog.\n    // The features to returned are wrapped pages in order to handle a large number of features.\n    return new PageImpl<>(features, pageable, totalElements);\n  }\n}\n\n')))}u.isMDXComponent=!0}}]);