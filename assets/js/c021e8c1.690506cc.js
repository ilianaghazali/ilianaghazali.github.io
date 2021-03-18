(window.webpackJsonp=window.webpackJsonp||[]).push([[1960],{2032:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2703)),i={id:"depracated-cli",title:"REGARDS Command line interface",slug:"/setup/deprecated/cli/"},c={unversionedId:"setup/deprecated/depracated-cli",id:"setup/deprecated/depracated-cli",isDocsHomePage:!1,title:"REGARDS Command line interface",description:"Start the system",source:"@site/docs/setup/deprecated/cli.md",slug:"/setup/deprecated/cli/",permalink:"/docs/setup/deprecated/cli/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/setup/deprecated/cli.md",version:"current"},s=[{value:"Start the system",id:"start-the-system",children:[]},{value:"Check the components status",id:"check-the-components-status",children:[]},{value:"Stop the components",id:"stop-the-components",children:[]},{value:"Contents of the installation directory",id:"contents-of-the-installation-directory",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"start-the-system"},"Start the system"),Object(o.b)("p",null,"In order to start REGARDS, you will have to run specific commands."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the ",Object(o.b)("inlineCode",{parentName:"p"},"Security Level")," you choosed was ",Object(o.b)("inlineCode",{parentName:"p"},"Enforce")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"and you installed ",Object(o.b)("strong",{parentName:"li"},"all")," the components on the current host, you can start the whole system in a single command:")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh start\n")),Object(o.b)("p",{parentName:"li"},"Previously, it is necessary to add these commands to the ",Object(o.b)("strong",{parentName:"p"},"sudoers")," configuration file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sudoers.d/regards\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/start_microservice.sh\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/status_microservice.sh\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/stop_microservice.sh\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"and you installed ",Object(o.b)("strong",{parentName:"li"},"some")," components on the current host, you will need to start each component installed with the following command (remember to always begin the components in the good start order):")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} start\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the ",Object(o.b)("inlineCode",{parentName:"p"},"Security Level")," you choosed was ",Object(o.b)("inlineCode",{parentName:"p"},"Standard"),", you will need to start each component installed with the following command (remember to always begin the components in the good start order):"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/bin/start_microservice.sh -t {component_name}\n")),Object(o.b)("p",null,"Microservices start order :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"config")," : All microservices get their centralized configuration from this microservice"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"registry")," : All microservices register themself to this registry"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"admin-instance")," : All microservices get their database connections information from this microservice"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"admin")," : All microservices get users information from this microservice"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"dam")," : Handle data management")),Object(o.b)("p",null,"Once those microservices are up you start all remaining microservices"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"authentication")," : All microservices use this microservice to check user authentications"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"catalog")," : Handle project catalog"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"storage")," : Handle data files storage"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ingest")," : Handle SIP ingestion"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"fem")," : Feature manager. Handle GeoJson features"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"dataprovider")," : Handle SIP generation"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"order")," : handle orders"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"frontend")," : All microservices use this microservice to check user authentications"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"access-instance")," : Configuration of instance HMI (admin instance & portal)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"access-project")," : Configration of projet HMI"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"gateway")," : Load balancer")),Object(o.b)("h2",{id:"check-the-components-status"},"Check the components status"),Object(o.b)("p",null,"You can check if a given component is currently running."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} status\n")),Object(o.b)("h2",{id:"stop-the-components"},"Stop the components"),Object(o.b)("p",null,"You can stop a given component which is currently running."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/bin/stop_microservice.sh -t {component_name} stop\n")),Object(o.b)("h2",{id:"contents-of-the-installation-directory"},"Contents of the installation directory"),Object(o.b)("p",null,"The contents of the installation directory with all the microservices is :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"bin/\nbootstrap-access-instance.jar\nbootstrap-access-project.jar\nbootstrap-administration.jar\nbootstrap-authentication.jar\nbootstrap-catalog.jar\nbootstrap-config.jar\nbootstrap-dam.jar\nbootstrap-dataprovider.jar\nbootstrap-frontend.war\nbootstrap-order.jar\nbootstrap-registry.jar\nbootstrap-ingest.jar\nbootstrap-gateway.jar\nconfig/\nlib/\nlogs/\nplugins/\nsbin/\nrun/\nwww/\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"config")," folder contains among others the logback configuration file for each microservice, in the the subfolders ",Object(o.b)("strong",{parentName:"p"},"config/logback/{microservice-name}"),". This subfolders contains the log4j context configuration file as ",Object(o.b)("a",{parentName:"p",href:"https://logback.qos.ch/manual/configuration.html"},"logback.xml"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"plugins")," folder contains a subfolder foreach microservice ",Object(o.b)("strong",{parentName:"p"},"plugins/{microservice-name}"),". This subfolders must contains the plugins to used for the specified microservice."))}p.isMDXComponent=!0},2703:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);