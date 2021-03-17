(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,j=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(j,b(b({ref:t},c),{},{components:n})):i.a.createElement(j,b({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2724:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/OrderMapping-d4edfed33d83c911740555f44fb2ebe8.png"},677:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(2701)),o={id:"backend-framework-modules-jobs",title:"Jobs",sidebar_label:"Jobs",slug:"/development/backend/framework/modules/jobs"},b={unversionedId:"development/backend/framework/modules/backend-framework-modules-jobs",id:"version-1.4.0/development/backend/framework/modules/backend-framework-modules-jobs",isDocsHomePage:!1,title:"Jobs",description:"Jobs module allows to execute tasks in parallel on several microservices.",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/modules/jobs.md",slug:"/development/backend/framework/modules/jobs",permalink:"/docs/1.4.0/development/backend/framework/modules/jobs",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/modules/jobs.md",version:"1.4.0",sidebar_label:"Jobs",sidebar:"version-1.4.0/dev",previous:{title:"Web socket starter",permalink:"/docs/1.4.0/development/backend/framework/starters/web-socket"},next:{title:"Develop a new microservice",permalink:"/docs/1.4.0/development/backend/framework/dev-microservice"}},s=[{value:"Job creation",id:"job-creation",children:[]},{value:"Job life cycle",id:"job-life-cycle",children:[{value:"Statuses",id:"statuses",children:[]},{value:"AMQP events",id:"amqp-events",children:[]}]},{value:"Completion",id:"completion",children:[]},{value:"Tasks",id:"tasks",children:[{value:"Principle",id:"principle",children:[]},{value:"Conception",id:"conception",children:[]},{value:"Specific microservice implementation",id:"specific-microservice-implementation",children:[]}]}],c={toc:s};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Jobs module allows to execute tasks in parallel on several microservices."),Object(r.b)("p",null,"Jobs module can be used by any microservice. When used, ",Object(r.b)("inlineCode",{parentName:"p"},"t_job_info")," and ",Object(r.b)("inlineCode",{parentName:"p"},"t_job_parameters")," tables are created into the microservice database/schema."),Object(r.b)("p",null,"The daemon ",Object(r.b)("inlineCode",{parentName:"p"},"JobService")," is launched to manage jobs, it permanently searches for jobs to execute following a priority provided by job submitter."),Object(r.b)("p",null,"To submit a job, it is necessary to create a ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," object containing informations about the job (ie. job parameters, job instantiation class, ...).\n",Object(r.b)("inlineCode",{parentName:"p"},"Job")," instantiation class must implement ",Object(r.b)("inlineCode",{parentName:"p"},"IJob")," interface or better, inherit ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractJob")," class."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Job")," object is never manipulated by developers, only ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," is available. ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," contains job status and job informations\nsuch as percent completion, start and end dates...  "),Object(r.b)("h2",{id:"job-creation"},"Job creation"),Object(r.b)("p",null,"To create a job, developers must create a ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," object by providing following attributes :  "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Name"),Object(r.b)("th",{parentName:"tr",align:"center"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"locked"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"Boolean")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"false")," means your job will be cleaned by an automatic cleaning process")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"priority"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"Integer")),Object(r.b)("td",{parentName:"tr",align:"left"},"Job priority")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"parameters"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"Set<JobParameter>")),Object(r.b)("td",{parentName:"tr",align:"left"},"Job parameters")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"owner"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},"The email of the job owner")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"className"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:"left"},"Job class name to execute")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"expirationDate"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"OffsetDateTime")," ",Object(r.b)("em",{parentName:"td"},"optional")),Object(r.b)("td",{parentName:"tr",align:"left"},"When provided and reached, ",Object(r.b)("inlineCode",{parentName:"td"},"JobInfoService")," will mark the job as ",Object(r.b)("inlineCode",{parentName:"td"},"FAILED"))))),Object(r.b)("p",null,"Two methods permits ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," creation :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JobInfoService.createAsPending")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JobInfoService.createAsQueued"))),Object(r.b)("p",null,"There is two job statuses :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PENDING")," means ",Object(r.b)("inlineCode",{parentName:"li"},"JobInfo")," is only created in database, and will need another manual state change to ",Object(r.b)("inlineCode",{parentName:"li"},"QUEUED")," to be taken in account by ",Object(r.b)("inlineCode",{parentName:"li"},"JobService"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"QUEUED")," means ",Object(r.b)("inlineCode",{parentName:"li"},"JobInfo")," is created in database and will be taken into account by JobService as soon as possible (ie. ",Object(r.b)("inlineCode",{parentName:"li"},"JobService")," will soon create a ",Object(r.b)("inlineCode",{parentName:"li"},"Job")," from this ",Object(r.b)("inlineCode",{parentName:"li"},"JobInfo")," and will execute it).")),Object(r.b)("p",null,"Every instance of the same microservice will contains a ",Object(r.b)("inlineCode",{parentName:"p"},"JobService")," that fills its thread pool with jobs from all tenants. If the pool contains an empty slot, it searches for the next tenant having job to do with the highest priority and so on.  "),Object(r.b)("p",null,"To sum up, here is an example of Job creation :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Set<JobParameter> parameters = Sets.newHashSet();\nparameters.add(new JobParameter(<your job>.SOME_PARAMETER_NAME, "42"));\nJobInfo jobInfo = new JobInfo(false, 0, parameters, authResolver.getUser(), <your job>.class.getName())\njobInfo.setExpirationDate(OffsetDateTime.now().plusDays(40));\njobInfoService.createAsQueued(jobInfo);\nLOGGER.debug("New job scheduled uuid={}", jobInfo.getId().toString());\n')),Object(r.b)("h2",{id:"job-life-cycle"},"Job life cycle"),Object(r.b)("h3",{id:"statuses"},"Statuses"),Object(r.b)("p",null,"Once the ",Object(r.b)("inlineCode",{parentName:"p"},"JobService")," chooses a ",Object(r.b)("inlineCode",{parentName:"p"},"QUEUED")," ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo"),", its status becomes ",Object(r.b)("inlineCode",{parentName:"p"},"TO_BE_RUN"),".",Object(r.b)("br",{parentName:"p"}),"\n","Then the ",Object(r.b)("inlineCode",{parentName:"p"},"JobService")," will prepare the ",Object(r.b)("inlineCode",{parentName:"p"},"Job")," by setting its parameters and eventually creating its workspace, if that's needed. Once finished, the job status becomes ",Object(r.b)("inlineCode",{parentName:"p"},"RUNNING")," and the Job is executed by the ",Object(r.b)("inlineCode",{parentName:"p"},"JobService")," thread pool.",Object(r.b)("br",{parentName:"p"}),"\n","If it fails, its status is set to ",Object(r.b)("inlineCode",{parentName:"p"},"FAILED")," and stacktrace is saved in the ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfo")," database object.",Object(r.b)("br",{parentName:"p"}),"\n","If it succeeds, its status is set to ",Object(r.b)("inlineCode",{parentName:"p"},"SUCCEEDED"),".  "),Object(r.b)("p",null,"It is possible to ask for stopping a job with method ",Object(r.b)("inlineCode",{parentName:"p"},"JobInfoService.stopJob"),". This method is asynchronous and may be inefficient if job cannot be cancelled or if job has already finished.",Object(r.b)("br",{parentName:"p"}),"\n","In case job is cancelled, its status is changed to ",Object(r.b)("inlineCode",{parentName:"p"},"ABORTED"),".",Object(r.b)("br",{parentName:"p"}),"\n","In case the expiration date, when provided, has been reached whereas job is still in ",Object(r.b)("inlineCode",{parentName:"p"},"QUEUED")," state, its status becomes ",Object(r.b)("inlineCode",{parentName:"p"},"FAILED")," (provided stacktrace used to indicate JobInfo failed error is then used to indicate expiration date has been reached).  "),Object(r.b)("h3",{id:"amqp-events"},"AMQP events"),Object(r.b)("p",null,"Some (important) status changes are notified with an AMQP broadcast event (",Object(r.b)("inlineCode",{parentName:"p"},"JobEvent"),") :\n",Object(r.b)("inlineCode",{parentName:"p"},"ABORTED"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FAILED"),", ",Object(r.b)("inlineCode",{parentName:"p"},"RUNNING"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SUCCEEDED"),"."),Object(r.b)("h2",{id:"completion"},"Completion"),Object(r.b)("p",null,"Most of jobs will take a long time to finish, so when that's possible, you should implement the job progression."),Object(r.b)("p",null,"To do so, it is necessary to inherit ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractJob")," (which is a good idea in all cases by the way).\nThen, it is necessary to implement method ",Object(r.b)("inlineCode",{parentName:"p"},"getCompletionCount")," giving a total ",Object(r.b)("em",{parentName:"p"},"tick")," count.\nFinally, during job execution ie into ",Object(r.b)("inlineCode",{parentName:"p"},"run")," method, it is necessary to call method ",Object(r.b)("inlineCode",{parentName:"p"},"advanceCompletion")," the same number\nas ",Object(r.b)("inlineCode",{parentName:"p"},"getCompletionCount")," returned one.\nThanks to that, at any time during job execution, it is possible to know progression percentage.\nThis is said, to avoid database saturation, this value is updated into database only one time per second (this value is configurable with ",Object(r.b)("em",{parentName:"p"},"regards.jobs.completion.update.rate.ms")," property).  "),Object(r.b)("h2",{id:"tasks"},"Tasks"),Object(r.b)("p",null,"In order to chain jobs, to execute ",Object(r.b)("em",{parentName:"p"},"Job1")," only when ",Object(r.b)("em",{parentName:"p"},"Job2")," and ",Object(r.b)("em",{parentName:"p"},"Job3")," are finished for example, reliant tasks exists."),Object(r.b)("h3",{id:"principle"},"Principle"),Object(r.b)("p",null,"The principle of reliant tasks is to provide all complex chain management into objects from rs-microservice and let\nuser just define its specific microservice behavior in its own entities (which inherit provided ones)."),Object(r.b)("h3",{id:"conception"},"Conception"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AbstractReliantTask")," is an abstract parameterized entity (mapped on ",Object(r.b)("inlineCode",{parentName:"p"},"t_task")," table with a ",Object(r.b)("em",{parentName:"p"},"JOINED")," inheritance strategy) having :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"an optional ",Object(r.b)("strong",{parentName:"li"},"OneToOne")," relation to a ",Object(r.b)("inlineCode",{parentName:"li"},"JobInfo")," (mapped with association table ",Object(r.b)("inlineCode",{parentName:"li"},"t_task_job_info"),"),"),Object(r.b)("li",{parentName:"ul"},"a ",Object(r.b)("strong",{parentName:"li"},"ManyToMany")," relation to several parameterized ",Object(r.b)("inlineCode",{parentName:"li"},"AbstractReliantTask")," (mapped with association table ",Object(r.b)("inlineCode",{parentName:"li"},"ta_tasks_reliant_tasks"),"), to specify the dependency between others tasks and the current one.")),Object(r.b)("p",null,"Of course, this is implementing a tree structure that needs to be stopped. ",Object(r.b)("inlineCode",{parentName:"p"},"LeafTask")," inherits ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractReliantTask")," to\nspecify a task without reliant tasks."),Object(r.b)("h3",{id:"specific-microservice-implementation"},"Specific microservice implementation"),Object(r.b)("p",null,"Here is ",Object(r.b)("em",{parentName:"p"},"rs-order")," example :"),Object(r.b)("p",null,Object(r.b)("img",{src:n(2724).default})),Object(r.b)("p",null,"An order contains one task per dataset, each of that contains several files tasks. A files task is a task responsible of retrieving several files from ",Object(r.b)("em",{parentName:"p"},"rs_storage"),". This retrieval is done thanks to a job."),Object(r.b)("p",null,"In this case, ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractReliantTask")," is responsible to provide progress advancement and dependencies between dataset tasks and files tasks, user doesn't need to think about this."),Object(r.b)("p",null,"In term of mapping, ",Object(r.b)("inlineCode",{parentName:"p"},"DatasetTask")," is mapped to ",Object(r.b)("inlineCode",{parentName:"p"},"t_dataset_task")," and ",Object(r.b)("inlineCode",{parentName:"p"},"FilesTask")," to ",Object(r.b)("inlineCode",{parentName:"p"},"t_files_tasks"),", these two tables are joined to ",Object(r.b)("inlineCode",{parentName:"p"},"t_task")," with a foreign key.\nThis allows to add specific properties to these 2 entities being completely independent to ones defined into ",Object(r.b)("em",{parentName:"p"},"rs_microservice"),"."),Object(r.b)("p",null,"Finally, ",Object(r.b)("em",{parentName:"p"},"rs-order"),", which is the root entity, is mapped to ",Object(r.b)("inlineCode",{parentName:"p"},"t_order")," table and defines following ",Object(r.b)("inlineCode",{parentName:"p"},"NamedEntityGraph")," :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@NamedEntityGraph(name = "graph.order",\n    attributeNodes = @NamedAttributeNode(value = "datasetTasks", subgraph = "graph.order.datasetTasks"),\n    subgraphs = { @NamedSubgraph(name = "graph.order.datasetTasks",\n            attributeNodes = @NamedAttributeNode(value = "reliantTasks")) })\n')),Object(r.b)("p",null,"sub graph depth is only 1 because tree has a depth of one and thanks to the use of LeafTask which avoids trying to\naccess reliantTask lazy persistent set (which is empty but throws a lazy exception when accessed).\nPlease, keep that in mind when creating your own entity structure."),Object(r.b)("p",null,"Simple ",Object(r.b)("inlineCode",{parentName:"p"},"IOrderRepository")," example (to avoid multiple ",Object(r.b)("strong",{parentName:"p"},"select")," and load entire tree with one request) :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public interface IOrderRepository extends JpaRepository<Order, Long> {\n    @EntityGraph("graph.order")\n    Order findOneById(Long id);\n}\n')))}l.isMDXComponent=!0}}]);