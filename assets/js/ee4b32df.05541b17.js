(window.webpackJsonp=window.webpackJsonp||[]).push([[2431],{2503:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(2703)),s={id:"depracated-izpack",title:"Deploy with IzPack",slug:"/setup/deprecated/izpack/"},c={unversionedId:"setup/deprecated/depracated-izpack",id:"version-1.4.0/setup/deprecated/depracated-izpack",isDocsHomePage:!1,title:"Deploy with IzPack",description:"For now, the only way to deploy REGARDS on servers is to use an IzPack package.",source:"@site/versioned_docs/version-1.4.0/setup/deprecated/izpack.md",slug:"/setup/deprecated/izpack/",permalink:"/docs/1.4.0/setup/deprecated/izpack/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/setup/deprecated/izpack.md",version:"1.4.0"},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run command",id:"run-command",children:[]},{value:"Step-by-step installation",id:"step-by-step-installation",children:[{value:"Inital configuration",id:"inital-configuration",children:[]},{value:"Mandatory components to install",id:"mandatory-components-to-install",children:[]},{value:"Scalable microservices",id:"scalable-microservices",children:[]},{value:"HMI services",id:"hmi-services",children:[]},{value:"Security",id:"security",children:[]},{value:"General parameters",id:"general-parameters",children:[]},{value:"Microservice configuration",id:"microservice-configuration",children:[]}]}],l={toc:i};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For now, the only way to deploy REGARDS on servers is to use an ",Object(o.b)("a",{parentName:"p",href:"http://izpack.org/"},Object(o.b)("strong",{parentName:"a"},"IzPack")," package"),"."),Object(o.b)("p",null,"If you don't have compiled the REGARDS IzPack installer, feel free to download it on our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-deployment/releases"},"github release page"),"."),Object(o.b)("p",null,"Ensure you have ","[setup components (COTS) that REGARDS relies on]"," before continuing this tutorial."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"In order to run the Izpack installer, you need these dependencies :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"groovy 1.8.9"),Object(o.b)("li",{parentName:"ul"},"OpenJDK 1.8")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Notice : ")," Groovy must be accessible from default install path /usr/bin/groovy.\nIf not, you can create a link :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ln -s /custom/install/dir/groovy /usr/bin/groovy\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In case of securized installation, the REGARDS installation directory must be owned by the user who run the installation commands.")),Object(o.b)("h2",{id:"run-command"},"Run command"),Object(o.b)("p",null,"To run the REGARDS installer, run the command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"java -jar REGARDS-OSS-Installer.jar\n")),Object(o.b)("p",null,"After your first installation, you can provide an XML file to automatically fill the IzPack installer:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"java -jar REGARDS-OSS-Installer.jar auto-install-values.xml\n")),Object(o.b)("p",null,"The file ",Object(o.b)("inlineCode",{parentName:"p"},"auto-install-values.xml")," can be generated at the end of the manual installation. However IzPack do not save password in the file, you will need to edit the file to add password by yourself."),Object(o.b)("h2",{id:"step-by-step-installation"},"Step-by-step installation"),Object(o.b)("h3",{id:"inital-configuration"},"Inital configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Target Path\n------------------------\nSelect the installation path:  [/usr/local/regards]\n")),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/regards")," to override the default value ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/regards"),"."),Object(o.b)("h3",{id:"mandatory-components-to-install"},"Mandatory components to install"),Object(o.b)("p",null,"Afterwards, you will need to choose which components you want to install on the current server.\nThese mandatory components cannot be runned in multiples instances, but don't be afraid they don't have that much job to do."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you do not installed them on the current server, you'll need to install them somewhere else.\n{: .tip .plus}")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Select Installation Packages\n------------------------\nSelect the packs you want to install:\n\n  [x] Pack 'core' required\n------------------------------------\n  [x] Include optional pack 'config'\n------------------------------------\n")),Object(o.b)("p",null,"The Configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------\n  [x] Include optional pack 'registry'\n--------------------------------------\n")),Object(o.b)("p",null,"The Registry server is the second component to start, it provides the global components registry. This server is accessed by all REGARDS components to retrieve the adresses of other ones."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [x] Include optional pack 'gateway'\n-------------------------------------\n")),Object(o.b)("p",null,"The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.",Object(o.b)("br",{parentName:"p"}),"\n","This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------------\n  [x] Include optional pack 'admin-instance'\n--------------------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"admin-instance")," microservice provides services (accounts, notifications, projects...) shared between all REGARDS projects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"-----------------------------------\n  [x] Include optional pack 'admin'\n-----------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," microservice provides services (users rights, users groups...) for each project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------------\n  [x] Include optional pack 'authentication'\n--------------------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"authentication")," microservice validates users when they log in."),Object(o.b)("h3",{id:"scalable-microservices"},"Scalable microservices"),Object(o.b)("p",null,"With our IzPack, you can install ",Object(o.b)("strong",{parentName:"p"},"multiple instances of each microservice")," on ",Object(o.b)("strong",{parentName:"p"},"multiple physical or virtual hosts"),". The only requirement is that all these hosts can communicate throught ",Object(o.b)("strong",{parentName:"p"},"HTTPS protocol"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Start by installing one instance of each needed microservice and if the performances of the system are too low, you can install more instances later.\n{: .tip .plus}")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you choose to not install the Configuration server, you will have to provide an existing Configuration server so that components you are currently installing can connect to it.\n{: .tip .plus}")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [ ] Include optional pack 'storage'\n-------------------------------------\n")),Object(o.b)("p",null,"This is a facultative microservice that stores your data and metadata on a safe storage. If you have already a system that meets this need, you can safely ignore it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"---------------------------------\n  [x] Include optional pack 'dam'\n---------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DataManagement")," microservice handle dynamic modelisation, crawling and indexation. ",Object(o.b)("strong",{parentName:"p"},"This microservice uses a lot of RAM and CPU.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [x] Include optional pack 'catalog'\n-------------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Catalog")," microservice makes REGARDS users research."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"-----------------------------------\n  [ ] Include optional pack 'order'\n-----------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Order")," microservice gathers data ordered by users."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"------------------------------------\n  [ ] Include optional pack 'ingest'\n------------------------------------\n------------------------------------------\n  [ ] Include optional pack 'dataprovider'\n------------------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Ingest")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Data Provider")," are facultatives microservices that scans data lakes and submit them to REGARDS indexation."),Object(o.b)("h3",{id:"hmi-services"},"HMI services"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"---------------------------------------------\n  [x] Include optional pack 'access-instance'\n---------------------------------------------\n--------------------------------------------\n  [x] Include optional pack 'access-project'\n--------------------------------------------\n--------------------------------------\n  [x] Include optional pack 'frontend'\n--------------------------------------\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," service provides the React interface we've made and these ",Object(o.b)("inlineCode",{parentName:"p"},"access-*")," services store the HMI customisation and configuration."),Object(o.b)("h3",{id:"security"},"Security"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"What system security do you want to use?\n\n0  [x] Normal\n1  [ ] Enhanced\nInput selection:\n")),Object(o.b)("p",null,"If you have correctly followed the ","[Configuration guide]",", you can select the Enhanced security mode. If you don't, just pass to the next section."),Object(o.b)("p",null,"REGARDS needs to know which users and groups you have setup on your system. You can just accept default values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nUser Data\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nSecurity customization\n\nExec user [regards]\n\n\n------------------------------------------\n\nRegards group [regards]\n\nExec group [rsexec]\n\nAdmin group [rsadmin]\n\nRuntime group [rsrun]\n")),Object(o.b)("h3",{id:"general-parameters"},"General parameters"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"General parameters\n\nThe first project to add [project1]\n")),Object(o.b)("p",null,"The project name cannot be changed and will be used in the URI and by the API."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Public domain to access project: this is the public address users will use to access project user/admin interfaces and services. This address depends on your web server configuration.\nAddress [https://172.26.47.195/user/project1]\n")),Object(o.b)("p",null,"REGARDS needs to know how future users will be able to access using their browser to the server. You can edit this configuration later on the instance admin panel."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Proxy confguration for internet access\nHost []\n\nPort [0]\n")),Object(o.b)("p",null,"REGARDS can access to files store somewhere else. In that case, it will use that proxy configuration to retrieve the file.",Object(o.b)("br",{parentName:"p"}),"\n","If you specify the NoProxy option, you need to separate every address by the ",Object(o.b)("inlineCode",{parentName:"p"},",")," caracter. Every adress is considerated as a regex."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Cipher key location[]\n/opt/regards/regards.key\nCipher initialization vector []\n1234567812345678\n")),Object(o.b)("p",null,"If you followed the ","[Configuration guide]",", the Cipher key location is ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/regards/regards.key"),". The Cipher initialization vector must contain 16 digits."),Object(o.b)("h3",{id:"microservice-configuration"},"Microservice configuration"),Object(o.b)("p",null,"For every microservice you want to install, it will ask you :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"<Microservice name> microservice\n\n--\x3e Row 1: Host [0.0.0.0]\nPort [9031]\n")),Object(o.b)("p",null,"The host value ",Object(o.b)("inlineCode",{parentName:"p"},"0.0.0.0")," means that every connection, either a local one (",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1"),") or a foreign one, is accepted."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can provide ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1")," if you don't install REGARDS on several servers AND you have a reverse proxy (otherwise the gateway would not answer)\n{: .tip .plus}")),Object(o.b)("p",null,"Moreover, if a microservice depends on RabbitMQ, PostgresSQL or ElasticSearch, it will ask the configuration of the associated COTS."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You should get the following RabbitMQ configuration")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"User Data\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nMessage broker configuration\n\nRabbitMQ\nHost [localhost]\nPort [5672]\nUsername []\nregards_adm\nPassword\nregards_adm\n\n------------------------------------------\n\nRabbitMQ management\nHost [localhost]\n\nPort [15672]\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PostgresSQL configuration")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Cross projects database | OR | First project's database\nUrl [localhost:5432/rs_instance]\n\nUsername []\nrs_postgres\nPassword\n***********\n")),Object(o.b)("p",null,"You should have two different databases, ",Object(o.b)("inlineCode",{parentName:"p"},"rs_instance")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rs_project1"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Elasticsearch")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Elasticsearch\nHost [localhost]\n\nPort [9200]\n")),Object(o.b)("h4",{id:"rs-config"},"rs-config"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"The workspaces basic directory [/opt/regards/workspace]\n")),Object(o.b)("h4",{id:"rs-admin-instance"},"rs-admin-instance"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Administration instance microservice properties\n\nInstance admin\nEmail []\nregards@cnes.fr\nPassword\n**********\n")),Object(o.b)("p",null,"It asks you the id of the most powerfull user of the system. Don't forget its password!"),Object(o.b)("h4",{id:"rs-storage"},"rs-storage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\nCache directory [/opt/regards/rs-storage-cache]\n")),Object(o.b)("p",null,"Default values are fine to begin with."),Object(o.b)("h4",{id:"rs-dam"},"rs-dam"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Documents local storage folder\nPath [/opt/regards/rs-dam-document-storage]\n")),Object(o.b)("p",null,"Store files associated with Documents, Collections and Datasets."),Object(o.b)("h4",{id:"rs-order"},"rs-order"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nOrders bucket size in Mb [100]\n\nOrders validation period in days [3]\n\nDays before sending mail notification [7]\n\nPassphrase used to generate token [order's passphrase]\nla bonne longueur pour les jambes, c'est quand les pieds touchent bien par terre\nMaximum number of displayable files [5000]\n\nMaximum number of job's order per user [2]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\nPeriodic files availability check (cron format)\nValue [0 23 * * 7 *]\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Passphrase used to generate token")," needs to be long and unique"),Object(o.b)("h4",{id:"rs-ingest"},"rs-ingest"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\n\n------------------------------------------\n\nAIPs bulk request size\nSize [1000]\n")),Object(o.b)("h4",{id:"rs-data-provider"},"rs-data-provider"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"------------------------------------------\n\nJobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\n\n------------------------------------------\n\nWaitings time\n\nFor ingestion of new SIPs [5000]\n\nFor chains activation [300000]\n\n\nFolders\n\nCycles and ORF configuration [/opt/regards/config/regards/dataprovider]\n\nTranslation files [plugins/translations]\n\nPlugins configuration [plugins/confs]\n\nChain's cycles [/data/cycles]\n\nORF file history [/data/chains/cycles]\n")),Object(o.b)("p",null,"Let default values"),Object(o.b)("h4",{id:"rs-admin-instance-1"},"rs-admin-instance"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Security\n\nWhich rules should follow the user accounts ?\n\nAccount period of validity in days [30]\n\n\n------------------------------------------\n\nPasswords\nMust match the regex [[a-z0-9]*]\n\nOr else users will receive the message [Password must contain letters or numbers]\n\nPeriod of validity (days) [350]\n\n\n------------------------------------------\n\nWhen connecting\nNumber of attemps before locking the account [5]\nSMTP Configuration\n\nREGARDS keeps you in touch via emails. You can provide a specific SMTP server or leave the default one.\nHost [smtp.gmail.com]\n\nPort [465]\n\nUsername []\n\nPassword\n\nMail address for no reply [regards@noreply.fr]\n")),Object(o.b)("h4",{id:"rs-frontend"},"rs-frontend"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Gateway\nUrl [http://localhost:8000]\n")),Object(o.b)("p",null,"Set the public URI of REGARDS"),Object(o.b)("p",null,"That's it ! You can jump to the ","[CLI guide]"," to launch REGARDS."))}p.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);