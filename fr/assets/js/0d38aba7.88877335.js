(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return i}));var a=t(3),r=t(7),o=(t(0),t(2703)),s={id:"backend-dam-dataset-api",title:"REGARDS Dataset API",sidebar_label:"Dataset",slug:"/development/backend/dam/api/dataset/"},c={unversionedId:"development/backend/regards/dam/api/backend-dam-dataset-api",id:"version-1.4.0/development/backend/regards/dam/api/backend-dam-dataset-api",isDocsHomePage:!1,title:"REGARDS Dataset API",description:"How to access API endpoints",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/dataset-api.md",slug:"/development/backend/dam/api/dataset/",permalink:"/fr/docs/1.4.0/development/backend/dam/api/dataset/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/dataset-api.md",version:"1.4.0",sidebar_label:"Dataset",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Collection API",permalink:"/fr/docs/1.4.0/development/backend/dam/api/collection/"},next:{title:"REGARDS Datasource API",permalink:"/fr/docs/1.4.0/development/backend/dam/api/datasource/"}},p=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Retrieve datasets",id:"retrieve-datasets",children:[]},{value:"Retrive dataset attributes",id:"retrive-dataset-attributes",children:[]},{value:"Create a new dataset",id:"create-a-new-dataset",children:[]},{value:"Validate a dataset subsetting request",id:"validate-a-dataset-subsetting-request",children:[]},{value:"Update dataset",id:"update-dataset",children:[]},{value:"Delete dataset",id:"delete-dataset",children:[]},{value:"Retrieve dataset includes data attributes",id:"retrieve-dataset-includes-data-attributes",children:[]},{value:"Retrieve one dataset",id:"retrieve-one-dataset",children:[]}],l={toc:p};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(o.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(o.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(o.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(o.b)("inlineCode",{parentName:"p"},"scope")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>\n")),Object(o.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(o.b)("a",{parentName:"p",href:"../../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(o.b)("p",null,"To access endpoints from ",Object(o.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>\n")),Object(o.b)("h1",{id:"datasetcontroller"},"DatasetController"),Object(o.b)("h2",{id:"retrieve-datasets"},"Retrieve datasets"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets`\n\n    ***URL template**\n\n    `/datasets`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 3,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 14,\n      "ipId" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId1",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/14"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/14"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 15,\n      "ipId" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId3",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/15"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/15"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 16,\n      "ipId" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId4",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/16"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/16"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets?page=0&size=10&sort=id,asc"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"retrive-dataset-attributes"},"Retrive dataset attributes"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/attributes`\n\n    ***URL template**\n\n    `/datasets/attributes`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "datasetIds" : [ ],\n  "modelNames" : [ "datasetModel" ]\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 4,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 26,\n      "name" : "vcount",\n      "type" : "LONG",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.vcount"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "START_DATE",\n      "description" : "date at which the acquisition of the data has started",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.START_DATE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "FILE_SIZE",\n      "description" : "file size",\n      "type" : "INTEGER",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.FILE_SIZE"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "STOP_DATE",\n      "description" : "date at which the acquisition of the data has ended",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.STOP_DATE"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/attributes?page=0&size=20"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"create-a-new-dataset"},"Create a new dataset"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets`\n\n    ***URL template**\n\n    `/datasets`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "DATASET",\n  "metadata" : {\n    "dataObjectsGroups" : { }\n  },\n  "ipId" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n  "creationDate" : "2020-05-11T11:37:51.766Z",\n  "model" : {\n    "id" : 16,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "DATASET"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "licence" : "licence",\n    "providerId" : "DS21",\n    "entityType" : "DATASET",\n    "label" : "dataSet21",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ ],\n    "id" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DATASET",\n    "subsettingClause" : {\n      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"\n    },\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 24,\n    "ipId" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n    "creationDate" : "2020-05-11T11:37:51.931Z",\n    "model" : {\n      "id" : 16,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "DS21",\n      "entityType" : "DATASET",\n      "label" : "dataSet21",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DATASET:PROJECT:5e80e118-4262-4995-baaf-a4972ae1a941:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/24"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasets"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasets/24"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasets/24"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"validate-a-dataset-subsetting-request"},"Validate a dataset subsetting request"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/isValidSubsetting?dataModelName=dataModel`\n\n    ***URL template**\n\n    `/datasets/isValidSubsetting?dataModelName=dataModel`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "query" : "properties.DO_NOT_EXIST:10"\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "validity" : false\n}\n'))),Object(o.b)("h2",{id:"update-dataset"},"Update dataset"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/25`\n\n    ***URL template**\n\n    `/datasets/{dataset_id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "DATASET",\n  "metadata" : {\n    "dataObjectsGroups" : { }\n  },\n  "id" : 25,\n  "ipId" : "URN:AIP:DATASET:PROJECT:c8f11167-d6bd-4715-b53b-22f9ff6db3c4:V1",\n  "creationDate" : "2020-05-11T11:37:58.152Z",\n  "model" : {\n    "id" : 20,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "DATASET"\n  },\n  "tags" : [ "URN:AIP:DATASET:PROJECT:0d18c548-7927-4df9-b907-04885611e111:V1" ],\n  "groups" : [ ],\n  "feature" : {\n    "licence" : "licence",\n    "providerId" : "ProviderId1",\n    "entityType" : "DATASET",\n    "label" : "label",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ "URN:AIP:DATASET:PROJECT:0d18c548-7927-4df9-b907-04885611e111:V1" ],\n    "id" : "URN:AIP:DATASET:PROJECT:c8f11167-d6bd-4715-b53b-22f9ff6db3c4:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DATASET",\n    "subsettingClause" : {\n      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"\n    },\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 25,\n    "ipId" : "URN:AIP:DATASET:PROJECT:c8f11167-d6bd-4715-b53b-22f9ff6db3c4:V1",\n    "creationDate" : "2020-05-11T11:37:58.152Z",\n    "lastUpdate" : "2020-05-11T11:37:58.942Z",\n    "model" : {\n      "id" : 20,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ "URN:AIP:DATASET:PROJECT:0d18c548-7927-4df9-b907-04885611e111:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "ProviderId1",\n      "entityType" : "DATASET",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:0d18c548-7927-4df9-b907-04885611e111:V1" ],\n      "id" : "URN:AIP:DATASET:PROJECT:c8f11167-d6bd-4715-b53b-22f9ff6db3c4:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/25"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasets"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasets/25"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasets/25"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"delete-dataset"},"Delete dataset"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/11`\n\n    ***URL template**\n\n    `/datasets/{dataset_id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 204 No Content"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(o.b)("h2",{id:"retrieve-dataset-includes-data-attributes"},"Retrieve dataset includes data attributes"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/data/attributes?page=1`\n\n    ***URL template**\n\n    `/datasets/data/attributes?page=1`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "datasetIds" : [ ],\n  "modelNames" : [ "datasetModel" ]\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 25,\n    "totalPages" : 2,\n    "number" : 1\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 84,\n      "name" : "DATA_SET_ID",\n      "description" : "id of the dataset",\n      "type" : "INTEGER",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.DATA_SET_ID"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 92,\n      "name" : "ANSE6_STRING",\n      "type" : "STRING",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.ANSE6_STRING"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 86,\n      "name" : "DATA_AUTHOR",\n      "description" : "name of the author",\n      "type" : "STRING",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.DATA_AUTHOR"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 87,\n      "name" : "DATA_AUTHOR_COMPANY",\n      "description" : "author\'s company name",\n      "type" : "STRING",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.DATA_AUTHOR_COMPANY"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 88,\n      "name" : "DATA_CREATION_DATE",\n      "description" : "date at which the data was created into the datasource",\n      "type" : "DATE_ISO8601",\n      "unit" : "unitless",\n      "fragment" : {\n        "id" : 1,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : true,\n      "optional" : false,\n      "label" : "forTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.DATA_CREATION_DATE"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "first",\n    "href" : "http://localhost:8080/datasets/data/attributes?page=0&size=20"\n  }, {\n    "rel" : "prev",\n    "href" : "http://localhost:8080/datasets/data/attributes?page=0&size=20"\n  }, {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/data/attributes?page=1&size=20"\n  }, {\n    "rel" : "last",\n    "href" : "http://localhost:8080/datasets/data/attributes?page=1&size=20"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"retrieve-one-dataset"},"Retrieve one dataset"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets/17`\n\n    ***URL template**\n\n    `/datasets/{dataset_id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DATASET",\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 17,\n    "ipId" : "URN:AIP:DATASET:PROJECT:8c130e3a-fc80-43f6-bc6d-52b30d8798ec:V1",\n    "creationDate" : "2020-05-11T11:37:38.438Z",\n    "model" : {\n      "id" : 14,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ "URN:AIP:DATASET:PROJECT:5b09ee5c-a1ea-4112-89fd-0efef4cd3435:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "ProviderId1",\n      "entityType" : "DATASET",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:5b09ee5c-a1ea-4112-89fd-0efef4cd3435:V1" ],\n      "id" : "URN:AIP:DATASET:PROJECT:8c130e3a-fc80-43f6-bc6d-52b30d8798ec:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/17"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasets"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasets/17"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasets/17"\n  } ]\n}\n'))))}i.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),i=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||o;return t?r.a.createElement(u,c(c({ref:n},l),{},{components:t})):r.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);