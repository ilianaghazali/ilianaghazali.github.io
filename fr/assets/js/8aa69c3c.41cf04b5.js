(window.webpackJsonp=window.webpackJsonp||[]).push([[1428],{1500:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(2703)),c={id:"backend-framework-dev-microservice",title:"Develop a new microservice",sidebar_label:"How to create a microservice",slug:"/development/backend/framework/dev-microservice/"},i={unversionedId:"development/backend/framework/backend-framework-dev-microservice",id:"version-1.4.0/development/backend/framework/backend-framework-dev-microservice",isDocsHomePage:!1,title:"Develop a new microservice",description:"REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/dev-microservice.md",slug:"/development/backend/framework/dev-microservice/",permalink:"/fr/docs/1.4.0/development/backend/framework/dev-microservice/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/dev-microservice.md",version:"1.4.0",sidebar_label:"How to create a microservice",sidebar:"version-1.4.0/dev",previous:{title:"Jobs",permalink:"/fr/docs/1.4.0/development/backend/framework/modules/jobs/"},next:{title:"Plugins introduction",permalink:"/fr/docs/1.4.0/development/backend/framework/modules/plugins/"}},l=[{value:"Requirements for development",id:"requirements-for-development",children:[]},{value:"Common features",id:"common-features",children:[]},{value:"Create your first microservice",id:"create-your-first-microservice",children:[]},{value:"Create your first module",id:"create-your-first-module",children:[]},{value:"Configure microservice to run locally with a remote REGARDS server instance",id:"configure-microservice-to-run-locally-with-a-remote-regards-server-instance",children:[]},{value:"Test the microservice",id:"test-the-microservice",children:[]},{value:"Centralize your new microservice configuration",id:"centralize-your-new-microservice-configuration",children:[]},{value:"References",id:"references",children:[]}],s={toc:l};function p(e){var r=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available."),Object(o.b)("h2",{id:"requirements-for-development"},"Requirements for development"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Git client"),Object(o.b)("li",{parentName:"ul"},"Maven 3.x"),Object(o.b)("li",{parentName:"ul"},"JDK 1.8")),Object(o.b)("h2",{id:"common-features"},"Common features"),Object(o.b)("p",null,"Each microservice offers the features :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"REST Resources authorization access by user ROLES"),Object(o.b)("li",{parentName:"ul"},"Access to the Cloud Eureka Registry client to communicate with others microservices"),Object(o.b)("li",{parentName:"ul"},"Access to the Cloud Config Server to centralize configurations properties"),Object(o.b)("li",{parentName:"ul"},"Swagger Interface : ",Object(o.b)("a",{parentName:"li",href:"http://address:port/swagger-ui.html"},"http://address:port/swagger-ui.html"))),Object(o.b)("h2",{id:"create-your-first-microservice"},"Create your first microservice"),Object(o.b)("p",null,"To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone the git rs-microservice repository  ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/RegardsOss/regards-bom.git\ngit clone https://github.com/RegardsOss/regards-microservice.git\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Compile and install the maven project  ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd regards-bom\nmvn clean install -DskipTests\n\ncd regards-microservice\nmvn clean install -DskipTests\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate the new microservice in another folder than rs-microservice thanks to the maven project archetype:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir ../myMicroservice\ncd ../myMicroservice\nmvn archetype:generate -DarchetypeCatalog=local\n")),Object(o.b)("p",null,"You have many archetype proposed to you, under the format"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"number: [local|remote] -> archetype_group_id:archetype_artifact_id (archetype_description)\n")),Object(o.b)("p",null,"find the line"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"X: local -> fr.cnes.regards.microservices:microservice-archetype (microservice-archetype)\n")),Object(o.b)("p",null,"and enter ",Object(o.b)("inlineCode",{parentName:"p"},"X")),Object(o.b)("p",null,"where X is the actual number of the microservice creation archetype. Then enter the requested fields as follow :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"groupId")," : fr.cnes.regards.microservices.mymicroservice"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"artifactId")," : mymicroservice"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"version")," : press enter to apply default value"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package")," : press enter to apply default value"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"microserviceDescription")," : My microservice description"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"microserviceName")," : mymicroservice"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"microserviceTitle")," : My Microservice")),Object(o.b)("h2",{id:"create-your-first-module"},"Create your first module"),Object(o.b)("p",null,"Once you have created the microservice container, you have to create modules."),Object(o.b)("p",null,"To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inside the microservice root folder, execute the following command to generate a module")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  cd myMicroservice\n  mvn archetype:generate -DarchetypeCatalog=local\n")),Object(o.b)("p",null,"Choose the right archetype (",Object(o.b)("inlineCode",{parentName:"p"},"fr.cnes.regards.modules:module-archetype"),") and enter requested field as follow :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"groupId")," : fr.cnes.regards.modules"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"artifactId")," : my-module"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"version")," : press enter to apply default value"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package")," : press enter to apply default value")),Object(o.b)("p",null,"Add the following dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"bootstrap-myMicroservice/pom.xml")," file (for instance, with the module artifact id ",Object(o.b)("inlineCode",{parentName:"p"},"myModule"),") :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.modules</groupId>\n  <artifactId>my-module-rest</artifactId>\n  <version>1.0-SNAPSHOT</version>\n</dependency>\n")),Object(o.b)("h2",{id:"configure-microservice-to-run-locally-with-a-remote-regards-server-instance"},"Configure microservice to run locally with a remote REGARDS server instance"),Object(o.b)("p",null,"In order to help developers test their microservice, local configuration files are available when you generate a microservice through the maven archetype. Those files are :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/main/resources/application-local-properties"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/main/resources/bootstrap-local-properties"),".")),Object(o.b)("p",null,"Fill those configuration files with the missing informations."),Object(o.b)("h2",{id:"test-the-microservice"},"Test the microservice"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To compile the new microservice :")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService\nmvn clean install\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To run the new microservice :")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService/bootstrap-myMicroservice\nmvn spring-boot:run -Dspring.profiles.active=local\n16:07:14.417 [main            ]    INFO o.s.b.c.e.j.JettyEmbeddedServletContainer - Jetty started on port(s) 8999 (http/1.1)\n16:07:14.421 [main            ]    INFO o.s.c.n.e.EurekaDiscoveryClientConfiguration - Updating port to 8999\n16:07:14.429 [main            ]    INFO f.c.r.microservices.Application - Started Application in 16.691 seconds (JVM running for 23.349)\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To authenticate :")),Object(o.b)("p",null,"To get an authentication token, the following POST request should be send to the authentication microservice :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://host:port/oauth/token?grant_type=password&username=regards-admin@c-s.fr&password=root_admin&scope=project1' \\\n-H 'accept: application/json' \\\n-H 'Cache-Control: no-cache' \\\n-H 'authorization: Basic Y2xpZW50OnNlY3JldA=='\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"API exemple access :")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:8999/api/greeting/ -H "Authorization: Bearer <user_acces_token>"\ncurl http://localhost:8999/api/me/ -H "Authorization: Bearer <admin_acces_token>"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Swagger UI access :")," ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8999/swagger-ui.html"},"http://localhost:8999/swagger-ui.html")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," : To add new REST resource follow example on file"),Object(o.b)("p",null," ",Object(o.b)("inlineCode",{parentName:"p"},"myModule/myModule-rest/src/main/java/fr/cnes/regards/modules/myModule/GreetingsController.java")),Object(o.b)("h2",{id:"centralize-your-new-microservice-configuration"},"Centralize your new microservice configuration"),Object(o.b)("p",null," To centralize the configuration of your microservice, you can copy your application-local.properties file to the rs-config microservice installation directory :  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cp myMicroservice/bootstrap-myMycroservice/src/main/resources/application-local.properties rs-config/config/regards/myMicroservice.properties\n")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("p",null,"You can also find a tutorial documentation on how to build REGARDS plugins and microservices ",Object(o.b)("a",{target:"_blank",href:t(2706).default},"here"),"  "))}p.isMDXComponent=!0},2703:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return t?a.a.createElement(d,i(i({ref:r},s),{},{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2706:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"}}]);