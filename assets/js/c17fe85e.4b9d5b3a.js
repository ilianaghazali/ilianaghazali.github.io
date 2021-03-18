(window.webpackJsonp=window.webpackJsonp||[]).push([[1980],{2052:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),b=(a(0),a(2703)),p={id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/fem/api/rest/"},i={unversionedId:"development/backend/regards/fem/api/backend-fem-rest-api",id:"version-1.4.0/development/backend/regards/fem/api/backend-fem-rest-api",isDocsHomePage:!1,title:"Feature Manager REST API",description:"{@import feature-management-intro.md}",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/feature-management-rest-api.md",slug:"/development/backend/fem/api/rest/",permalink:"/docs/1.4.0/development/backend/fem/api/rest/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/feature-management-rest-api.md",version:"1.4.0",sidebar_label:"Feature Manager REST",sidebar:"version-1.4.0/dev",previous:{title:"Feature Manager configuration API",permalink:"/docs/1.4.0/development/backend/fem/api/configuration/"},next:{title:"Feature Manager AMQP API",permalink:"/docs/1.4.0/development/backend/fem/api/amqp/"}},c=[{value:"REST API",id:"rest-api",children:[{value:"Feature Creation request example",id:"feature-creation-request-example",children:[]},{value:"Feature Patch request example",id:"feature-patch-request-example",children:[]}]}],o={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("h2",{parentName:"p"},"Overview"),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",Object(b.b)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),Object(b.b)("li",{parentName:"ul"},"Create, patch or delete data references,"),Object(b.b)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),Object(b.b)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",Object(b.b)("inlineCode",{parentName:"li"},"Storage Management"),".")),Object(b.b)("p",{parentName:"p"},"To edit this repository, a data producer has to send ",Object(b.b)("strong",{parentName:"p"},"requests"),"."),Object(b.b)("p",{parentName:"p"},"At the moment, 2 API are available :"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},"Messaging API (",Object(b.b)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),Object(b.b)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",Object(b.b)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",Object(b.b)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",Object(b.b)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),Object(b.b)("p",{parentName:"p"},Object(b.b)("img",{parentName:"p",src:"/schemas/feature_management/architectural_concepts_fem.png",alt:"Feature management architectural concepts"})),Object(b.b)("p",{parentName:"p"},"Under the hood, those reponsabilities are divided between two modules: ",Object(b.b)("inlineCode",{parentName:"p"},"featureprovider")," and ",Object(b.b)("inlineCode",{parentName:"p"},"feature"),". ",Object(b.b)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",Object(b.b)("inlineCode",{parentName:"p"},"feature")," module."),Object(b.b)("p",{parentName:"p"},"API are documented in detail below."),Object(b.b)("h2",{parentName:"p"},"Request payload"),Object(b.b)("p",{parentName:"p"},"Regardless of the API used, payload of each API is expected in ",Object(b.b)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),Object(b.b)("p",{parentName:"p"},"The basic structure is as follows :"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},"A required ",Object(b.b)("inlineCode",{parentName:"li"},"id"),","),Object(b.b)("li",{parentName:"ul"},"A required ",Object(b.b)("inlineCode",{parentName:"li"},"type")," with value ",Object(b.b)("inlineCode",{parentName:"li"},"Feature"),","),Object(b.b)("li",{parentName:"ul"},"An optional ",Object(b.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),Object(b.b)("li",{parentName:"ul"},"An optional set of ",Object(b.b)("inlineCode",{parentName:"li"},"properties"),".")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),Object(b.b)("p",{parentName:"p"},"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},"An ",Object(b.b)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",Object(b.b)("strong",{parentName:"li"},"expected only")," when updating a reference."),Object(b.b)("li",{parentName:"ul"},"A required ",Object(b.b)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",Object(b.b)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),Object(b.b)("li",{parentName:"ul"},"A required ",Object(b.b)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),Object(b.b)("li",{parentName:"ul"},"An optional ",Object(b.b)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",Object(b.b)("inlineCode",{parentName:"li"},"Storage Management"),").")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),Object(b.b)("a",{name:"payloadppt"}),Object(b.b)("h3",{parentName:"p"},"Payload detailed properties"),Object(b.b)("h4",{parentName:"p"},"Feature"),Object(b.b)("table",{parentName:"p"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"Path"),Object(b.b)("th",{parentName:"tr",align:"center"},"Type"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"id"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Id from provider"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"urn"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("div",{parentName:"p",className:"admonition admonition-danger alert alert--danger"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"Urn is only expected in update and deletion requests!"))),Object(b.b)("h4",{parentName:"p"},"Files"),Object(b.b)("table",{parentName:"p"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"Path"),Object(b.b)("th",{parentName:"tr",align:"center"},"Type"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"locations[].storage"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Storage"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"locations[].url"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Url location"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.dataType"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"MIME type"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.filename"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Filename"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.filesize"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"Number")),Object(b.b)("td",{parentName:"tr",align:"center"},"File size"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"attributes.checksum"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Checksum"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")))),Object(b.b)("div",{parentName:"p",className:"admonition admonition-danger alert alert--danger"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"Algorithm & cheksum are required if data have to be stored by ",Object(b.b)("inlineCode",{parentName:"p"},"Storage Management"),"."))),Object(b.b)("a",{name:"metadatappt"}),Object(b.b)("h2",{parentName:"p"},"Request metadata"),Object(b.b)("p",{parentName:"p"},"As the payload, regardless of the API used, metadata is often associated with a request. "),Object(b.b)("h3",{parentName:"p"},"Metadata detailed properties"),Object(b.b)("table",{parentName:"p"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"Path"),Object(b.b)("th",{parentName:"tr",align:"center"},"Type"),Object(b.b)("th",{parentName:"tr",align:"center"},"Description"),Object(b.b)("th",{parentName:"tr",align:"center"},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.session"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.storages"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"Array")),Object(b.b)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",Object(b.b)("inlineCode",{parentName:"td"},"Storage Management")),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"Array")),Object(b.b)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),Object(b.b)("td",{parentName:"tr",align:"center"},"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"metadata.priority"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("inlineCode",{parentName:"td"},"String")),Object(b.b)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),Object(b.b)("td",{parentName:"tr",align:"center"}))))),Object(b.b)("h2",{id:"rest-api"},"REST API"),Object(b.b)("p",null,"For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata."),Object(b.b)("p",null,"The structure is as follows :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Required ",Object(b.b)("inlineCode",{parentName:"li"},"metadata")," that apply to ",Object(b.b)("strong",{parentName:"li"},"all features"),","),Object(b.b)("li",{parentName:"ul"},"A required ",Object(b.b)("inlineCode",{parentName:"li"},"type")," with value ",Object(b.b)("inlineCode",{parentName:"li"},"FeatureCollection"),","),Object(b.b)("li",{parentName:"ul"},"Required ",Object(b.b)("inlineCode",{parentName:"li"},"features")," containing a set of ",Object(b.b)("a",{parentName:"li",href:"#payloadppt"},"GeoJson feature"),".")),Object(b.b)("p",null,"Example of feature creation collection:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "session": "session",\n        "sessionOwner": "owner",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "requestOwner": "owner",\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),Object(b.b)("p",null,"Example of feature update collection:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),Object(b.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"Session & session owner are not supported in update metadata!"))),Object(b.b)("h3",{id:"feature-creation-request-example"},"Feature Creation request example"),Object(b.b)("p",null,Object(b.b)("h3",{parentName:"p"},"Request"),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"URL")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"/features")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"URL template")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"/features")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Method")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"POST")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Headers")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),Object(b.b)("p",null,Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Data params")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata" : {\n    "sessionOwner" : "owner",\n    "session" : "session",\n    "storages" : [ {\n      "pluginBusinessId" : "disk"\n    } ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : null,\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "files" : [ {\n      "locations" : [ {\n        "storage" : null,\n        "url" : "http://www.test.com/filename.xml"\n      } ],\n      "attributes" : {\n        "dataType" : "RAWDATA",\n        "mimeType" : "application/xml",\n        "filename" : "filename",\n        "filesize" : 100,\n        "algorithm" : "MD5",\n        "checksum" : "checksum"\n      }\n    } ],\n    "id" : "MyId",\n    "geometry" : {\n      "coordinates" : [ 10.0, 20.0 ],\n      "type" : "Point",\n      "bbox" : null,\n      "crs" : null\n    },\n    "normalizedGeometry" : null,\n    "properties" : {\n      "data_type" : "TYPE01",\n      "file_characterization" : {\n        "valid" : true\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),Object(b.b)("p",null,Object(b.b)("h3",{parentName:"p"},"Response"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Code:")," 201 Created")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Headers:")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json;charset=UTF-8"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Content:")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "MyId" : "d481292a-8cd3-4f8c-bb01-5359648f05f9"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : null\n}\n'))),Object(b.b)("p",null,"API return maps of granted and denied requests :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),Object(b.b)("li",{parentName:"ul"},"Denied property maps feature id to a list of rejection causes.")),Object(b.b)("h3",{id:"feature-patch-request-example"},"Feature Patch request example"),Object(b.b)("p",null,Object(b.b)("h3",{parentName:"p"},"Request"),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"URL")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"/features")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"URL template")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"/features")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Method")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"PATCH")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Headers")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),Object(b.b)("p",null,Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Data params")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata" : {\n    "storages" : [ ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "files" : [ ],\n    "id" : "MyId",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "file_characterization" : {\n        "invalidation_date" : "2019-12-03T12:31:42.466Z",\n        "valid" : false\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),Object(b.b)("p",null,Object(b.b)("h3",{parentName:"p"},"Response"),Object(b.b)("ul",{parentName:"p"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Code:")," 201 Created")),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Headers:")),Object(b.b)("p",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json;charset=UTF-8"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(b.b)("p",{parentName:"p"},Object(b.b)("strong",{parentName:"p"},"Content:")),Object(b.b)("pre",{parentName:"p"},Object(b.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1" : "23c92735-b24b-4c87-818b-f4c46cf82c96"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : null\n}\n'))),Object(b.b)("p",null,"API return maps of granted and denied requests :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),Object(b.b)("li",{parentName:"ul"},"Denied property maps feature urn to a list of rejection causes.")))}l.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=l(a),s=n,O=m["".concat(p,".").concat(s)]||m[s]||d[s]||b;return a?r.a.createElement(O,i(i({ref:t},o),{},{components:a})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,p=new Array(b);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<b;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);