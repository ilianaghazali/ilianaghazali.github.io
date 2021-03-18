(window.webpackJsonp=window.webpackJsonp||[]).push([[1253],{1324:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),r=(t(0),t(2701)),s={id:"backend-framework-starters-amqp",title:"AMQP starter",slug:"/development/backend/framework/starters/amqp"},o={unversionedId:"development/backend/framework/starters/backend-framework-starters-amqp",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-amqp",isDocsHomePage:!1,title:"AMQP starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/amqp-starter.md",slug:"/development/backend/framework/starters/amqp",permalink:"/docs/1.4.0/development/backend/framework/starters/amqp",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/amqp-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"AMQP monitoring starter",permalink:"/docs/1.4.0/development/backend/framework/starters/amqp-monitoring"},next:{title:"Authentication starter",permalink:"/docs/1.4.0/development/backend/framework/starters/authentication"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to publish a message",id:"how-to-publish-a-message",children:[]},{value:"How to subscribe to a subscribable message",id:"how-to-subscribe-to-a-subscribable-message",children:[]},{value:"How to poll a pollable message",id:"how-to-poll-a-pollable-message",children:[]},{value:"Transaction",id:"transaction",children:[]}]},{value:"Constraints on the use of RabbitMQ",id:"constraints-on-the-use-of-rabbitmq",children:[{value:"Namespace",id:"namespace",children:[]},{value:"Purpose of AMQP client",id:"purpose-of-amqp-client",children:[]}]}],c={toc:l};function b(e){var n=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,s,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"This starter is used to enable multitenant messaging."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-regards-starter</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"Business dependency"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-regards</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"Dependency :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter"))),Object(r.b)("p",null,"Prerequisites :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"AMQP starter needs admin access on the server to manage virtual host"),". At the moment, it relies on ",Object(r.b)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"RabbitMQ"))),Object(r.b)("p",null,"Properties :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-properties"},"# From multitenant starter, optional set of tenants to initialize at bootstrap during bean construction.\nregards.bootstrap-tenants=\n\n# RabbitMQ host\nspring.rabbitmq.host=localhost\n# RabbitMQ port.\nspring.rabbitmq.port=5672\n# Property indicating the username used to connect and manage the broker, for the\n# AMQP starter, this user must have permissions to add virtual hosts and permissions\nspring.rabbitmq.username=\n# Password of the user\nspring.rabbitmq.password=\n\n# Virtual host management host\nregards.amqp.management.host=localhost\n# Virtual host management port\nregards.amqp.management.port=15672\n# Multitenancy messaging strategy\n# SINGLE means that a single virtual host will share all messages from all tenants.\n# MULTI means a virtual host is created for each tenant guaranteeing a total partitioning but increasing significantly memory and cpu consumption.\nregards.amqp.management.mode=SINGLE\n\n# Identification\n# Microservice type identifier (used to restrict event cast)\n# We advise you to use ${spring.application.name}.\nregards.amqp.microservice.type-identifier=\n# Microservice instance identifier (used for event broadcasting).\n# Must be unique by microservice type to ensure all instances will receive an event\nregards.amqp.microservice.instance-identifier=\n\n# Enable AMQP transaction manager if no external transaction manager is available\n# This property is only useful if no {@link PlatformTransactionManager} is provided by a database or else.\nregards.amqp.internal.transaction=false\n")),Object(r.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(r.b)("p",null,"Starter autoconfigures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IRabbitVirtualHostAdmin")," to manage virtual hosts. Only RabbitMQ implementation exists at the moment."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IAmqpAdmin")," to administrate the message broker(create queues, exchanges, bindings with proper names)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RabbitAdmin")," to send and receive message from the right tenant using ",Object(r.b)("inlineCode",{parentName:"li"},"MultitenantSimpleRoutingConnectionFactory")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MultitenantSimpleRoutingConnectionFactory")," to manage virtual host connections"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AmqpEventHandler")," to listen to tenant creation or deletion events")),Object(r.b)("p",null,"For working with tenant messages or events :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IPoller")," responsible for any polling request from the message broker to the application. It is the bean to ",Object(r.b)("inlineCode",{parentName:"li"},"Autowired")," when you want to poll messages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ISubscriber")," responsible for any subscribing to the message broker. This is the bean to ",Object(r.b)("inlineCode",{parentName:"li"},"Autowired")," when you want to subscribe to an object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IPublisher")," responsible for any publishing from the application to the message broker. This is the bean to ",Object(r.b)("inlineCode",{parentName:"li"},"Autowired")," when you want to send messages to other microservices.")),Object(r.b)("p",null,"For working with instance messages or events, you have to use ",Object(r.b)("inlineCode",{parentName:"p"},"IInstancePoller"),", ",Object(r.b)("inlineCode",{parentName:"p"},"IInstanceSubscriber")," and ",Object(r.b)("inlineCode",{parentName:"p"},"IInstancePublisher"),"."),Object(r.b)("h2",{id:"how-to"},"How to"),Object(r.b)("p",null,"AMQP starter runs in a multitenant context so it relies on multitenant tenant resolution :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A subscriber automatically subscribes to each tenant for an event using ",Object(r.b)("inlineCode",{parentName:"li"},"ITenantResolver"),"."),Object(r.b)("li",{parentName:"ul"},"A publisher automatically publishes an event on current tenant using ",Object(r.b)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver"),"."),Object(r.b)("li",{parentName:"ul"},"A poller automatically polls an event on current tenant using ",Object(r.b)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver"),".")),Object(r.b)("p",null,"Elements below are used to describe AMQP functionalities in following schemas."),Object(r.b)("p",null,Object(r.b)("img",{alt:"AMQP legend",src:t(2752).default})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Queue names are generated using microservice identification properties when required where"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\xb5s")," is equivalent to microservice identifier property."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\xb5si")," is equivalent to microservice instance identifier property.")))),Object(r.b)("h3",{id:"how-to-publish-a-message"},"How to publish a message"),Object(r.b)("p",null,"To publish a message on the broker, you have to use the ",Object(r.b)("inlineCode",{parentName:"p"},"IPublisher")," interface and its ",Object(r.b)("inlineCode",{parentName:"p"},"publish")," methods."),Object(r.b)("h4",{id:"broadcast-a-subscribable-message"},"Broadcast a subscribable message"),Object(r.b)("p",null,"First, create the message (i.e. a simple POJO) implementing ",Object(r.b)("inlineCode",{parentName:"p"},"ISubscribable"),".\nAnnotate this message with ",Object(r.b)("inlineCode",{parentName:"p"},"@Event")," and define the event ",Object(r.b)("strong",{parentName:"p"},"target")," (see below)."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Queue whose name is built with a microservice instance identifier is not totally safe. Indeed, if the corresponding microservice instance is stopped and never restarted, queue may not be consumed anymore and its messages lost. Be sure to be resilient with these types of messages!"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Broadcast message",src:t(2753).default})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Event(target = Target.ALL)\npublic class HelloMessage implements ISubscribable {\n}\n")),Object(r.b)("p",null,"Then publish the message :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPublisher publisher;\n\npublic void publishHello() {\n   HelloMessage message = new HelloMessage();\n   publisher.publish(message);\n}\n")),Object(r.b)("h4",{id:"unicast-a-subscribable-message"},"Unicast a subscribable message"),Object(r.b)("p",null,"Create the message implementing ",Object(r.b)("inlineCode",{parentName:"p"},"ISubscribable"),".\nAnnotate this message with ",Object(r.b)("inlineCode",{parentName:"p"},"@Event"),", set mode to ",Object(r.b)("strong",{parentName:"p"},"UNICAST")," and define the event ",Object(r.b)("strong",{parentName:"p"},"target")," (see below)."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Unicast message",src:t(2754).default})),Object(r.b)("h4",{id:"working-message-unicast"},"Working message (unicast)"),Object(r.b)("p",null,"Working message is stored in a working queue and is consumed synchronously on-demand."),Object(r.b)("p",null,"First, create the message implementing ",Object(r.b)("inlineCode",{parentName:"p"},"IPollable"),".\nAnnotate this message with ",Object(r.b)("inlineCode",{parentName:"p"},"@Event")," and define the event ",Object(r.b)("strong",{parentName:"p"},"target")," (see below)."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Worker queue",src:t(2755).default})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"A message is only handled by a single poller (i.e. worker).")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Event(target = Target.ALL)\npublic class PollMessage implements IPollable {\n\n}\n")),Object(r.b)("p",null,"Then publish the message :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPublisher publisher;\n\npublic void publishHello() {\n   PollMessage message = new PollMessage();\n   publisher.publish(message);\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"IPublish")," manages ",Object(r.b)("strong",{parentName:"p"},"message priority"),". Just define the priority in the publish method."))),Object(r.b)("h3",{id:"how-to-subscribe-to-a-subscribable-message"},"How to subscribe to a subscribable message"),Object(r.b)("p",null,"To subscribe to a message, you have to use the ",Object(r.b)("inlineCode",{parentName:"p"},"ISubscriber")," interface and its ",Object(r.b)("inlineCode",{parentName:"p"},"subscribeTo")," method."),Object(r.b)("p",null,"First, create a message handler implementing ",Object(r.b)("inlineCode",{parentName:"p"},"IHandler")," to listen to the message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class HelloHandler implements IHandler<HelloMessage> {\n\n  @Override\n  public void handle(TenantWrapper<HelloMessage> wrapper) {\n      // Retrieve your message from tenant wrapper\n      HelloMessage message = wrapper.getContent();\n      // Do something\n  }\n}\n")),Object(r.b)("p",null,"Then subscribe to the message :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate ISubscriber subscriber;\n\npublic void subscribeToHello() {\n   subscriber.subscribeTo(HelloMessage.class, new HelloHandler());\n}\n")),Object(r.b)("p",null,"You can stop listener using ",Object(r.b)("inlineCode",{parentName:"p"},"unsubscribeFrom")," method."),Object(r.b)("h3",{id:"how-to-poll-a-pollable-message"},"How to poll a pollable message"),Object(r.b)("p",null,"To poll a message, you have to use the ",Object(r.b)("inlineCode",{parentName:"p"},"IPoller")," interface and its ",Object(r.b)("inlineCode",{parentName:"p"},"poll")," method."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Polling process requires a tenant! So before polling, you must guarantee a tenant is properly set."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPoller poller;\n\npublic void simplePollMessage() {\n  TenantWrapper<PollMessage> wrapper = poller.poll(PollMessage.class);\n  // Do something with the message\n}\n")),Object(r.b)("h3",{id:"transaction"},"Transaction"),Object(r.b)("p",null,"Transaction is supported through classic Spring ",Object(r.b)("inlineCode",{parentName:"p"},"Transactional")," annotation."),Object(r.b)("p",null,"If en error occurs in a transaction, a message to publish won't be published, a pollable or subscribable message will be unacked and turn back to its queue."),Object(r.b)("h4",{id:"external-transaction"},"External transaction"),Object(r.b)("p",null,"If a ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformTransactionManager")," is on the classpath, AMQP will automatically synchronize its behaviour with an existing transaction."),Object(r.b)("h4",{id:"internal-transaction"},"Internal transaction"),Object(r.b)("p",null,"If no external ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformTransactionManager")," exists, you can enable internal one with related property."),Object(r.b)("h2",{id:"constraints-on-the-use-of-rabbitmq"},"Constraints on the use of RabbitMQ"),Object(r.b)("h3",{id:"namespace"},"Namespace"),Object(r.b)("p",null,'All virtual hosts defined and used by REGARDS are prefixed by "regards".'),Object(r.b)("h3",{id:"purpose-of-amqp-client"},"Purpose of AMQP client"),Object(r.b)("p",null,"The only purpose of the AMQP client is to handle the multi tenancy communication with the message broker. That means creating virtual hosts on the broker dynamically to ensure that each tenant's communications are isolated from the others. Therefore, the user used by the application to interact with RabbitMQ has to have privileges to create and modify virtual hosts."))}b.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?i.a.createElement(d,o(o({ref:n},c),{},{components:t})):i.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2752:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAACOCAIAAABCJsOcAAAij0lEQVR42u2dDVQV17XHEwFBAfkQ8AaQIIJKCKLB4EcQKTGKRaMopGp5Ph/NF0WrBhKjpWKVJ7Y2zXLxLMuSiDFGrMTFMj6WNfapjamm4iuPRynxIcEIIkGDQTRoqOH97914MpmZe5nL572w/2vWXeeeOefM3Dszv9lnz5l9HmpnsVgsy9ZD/BewWCzmFIvFYjGnWCwWc4rFYrGYUywWi8WcYrFYzCkWi8ViTrFYLOYUi8ViMadYLBaLOcVisZhTLBaLxZxisVgs5hTLotXS0lJSUlJUVJSXl7d169ZMg3Jzc5Fz5syZmzdv8l/EnGKx+kenTp0Cj6ZMmeLg4PCQSU2aNCk9Pf3YsWOtra38vzGnWKxeV01Nzeuvv+7v7y8lkYvXI7rgSaOfjAqKeXb8nMVYHp36A/+p0bqAcUNsbEQxV1fXtWvXVlVV8d/InGKxekXowcEsEtaTo7tnwMzYac+/Nm9r3rO/ec/YMn/73sjUTSFxS8Esqmhra7tq1Srwjv9S5hSL1ZPKzc2FNUSgGfXY5BkpGQt+vc8EnlSXWa9s839iBjUC3uXn5/Mfy5xisXpAtbW1s2fPJrj4TJr+g/RfmYsn2fL067/1DXmCGoyNjb127Rr/ycypTnT16tX33nsvLS1t2bJl4RLhKzKxCgX4Tx+0Ki0t1el0AMpQR+cnlqV0k1DSZWpyupunF1r29/cvLy/nv5o5pa5Tp069+OKL4RqEYhcuXOC/frCpsLDQ0ckJKPEYGzw3c1cPQoqWeVvzxoRNoT7g0aNH+Q9nTn1PFy9e1EgoGa1QkQ/AIIKUox5SvuGR87fv7XFI0bLg1/uCZ8WSc51RxZz6TujKyQCELh4yYTHdunWLyiCBr7t375Z1BiGU5GMwGLp7Li4uwEfAzNgu+MvNXcLj/4WsKmyX/3zmVPvmzZul0MHXTt1PKKCsxYdhAKu2tnaUwScFS6oPIEXLhKi52KJOp2O3+mDnFHptgjULFiwQLieQCKYTunXR0dG0Fgl8RaagGAqjiqiu2gFsbW19XqGecpFaSJeTdoN+6YEDBwbkGUZP9zzGBvded0+1Axg4OQLbxbnHF/mg5hSgQyRCb466eFocVShAtEIV6gaiEVUrrKWlBeeZvb29h0QnTpzo5g++f/9+ZGQkuNC//7t0N/BLnZ2d09LSBt7plZubS0/3nvlFTp9BSrjVR3qNwtaxD3ydD+p+H/gizCilo8qEPvjgA2FYGesqEqdWrFghyz99+vQnn3xC6aamJpDr8uXLYlVRUVFdXR3S9+7dw6qGhgbQE5miDOqi2Xnz5pWVlYk2m5ubUbixsRH7c+TIkRs3bojGkVlcXFxRUSEsILR28uRJExWluyr2R9aadDfa2tqwSph40lpiK0UGWdeTh5s3b44wuKV6dgiC9uWplzdi605OTuh78qU+eDkl9MYbb8iMJpBIAAgJfJWZWqhiuk3iFHoNJx4IFzDyk5OT7ezscNkjvXPnTpQ5e/YszBNc80gPGzYMaw8dOgRk4GtMTAzlwC4jMIlBhvHx8WJbH330EXKioqJQzMbGxsvLC0TAFpEZEhKCT2wUxTIyMsTLZREREdiEakUyl2T7I2tNuhv0S1NTU5W10FR1dbWbm5u3tzfVzcnJsZZzKz09nQZz9gukaBk/bRb2AXvClzpzql24oqSOKqWkbqlOHQd09UqFzhHyQSVhzAMWuHqR2LdvHzIPHz6M9JIlS9BDJE7NmDEDF//x48eR3r59O9beuXOHSAErRsapadOmwQorLy8HcRITE4ks2ARMm/r6erKAUBEN0qqUlBTViqr7I2tNuhuCU8paSLz11lvIJEbv2bPn2LFjVnFi1dTUgN3Y8+6POO/Ogq3b2NhClvkCoMwJizMKVrNVu1ytwJ4SjioYUMgRSEICX2VuqS7bU1BoaCjQUFlZiQJvvvkmclauXIn08uXL0U8Em5AuKSmhi180RWkABWmZf4pws2vXLvoKmsB+IbJs27aNMpHAV9Hjw09AGdWKqvvzzjvvSFuT7obYPWWtqqoq4M/R0ZGMLMDLWp61kzE16rHJ/Qipjmd/06Is1qSSOWFxiPF1y5Yt1uhytQJOSYUuXqduKe2HUOmfgsAFWoXOUXNzM3LQqUQO7JGDD4Tbi7mcEiMkxo8fHxwcTJzau3cvZe7evRtfYZrR14CAAJhyqhVV9+f999+XtqbKKWWtxsZGFMAn7EdYagAWjEqcl5Z/YvmO9tPbsykZ/c6pmat/Se/TSC1oi+KUOMnxFajy9fWVWklKf6jUA4u00uUqc3GqeloHNadOnTpl2oOOAmYdQpgVb0lEwYawivoUSUlJVJiYsm7dOnT3oqKi5s6dS/0+JadwspKZJu2fEm50Oh16VfSICk1Rm6AGlYH5hm4dblxAFe54WJWVlaVaUXV/ZK1Jd0PsnrIW2XE4d3Hm4bxEeaDZ8jmFo4wfMtzds88GTJlefAKCsD/df1jc25y6cuUKji/6CvTVmD8UFwLW0hmOtNTXqeriVHpaBzunYHSIvp6wnpAQfUAUMOsQyiSuc1gi+IrDJsrjoOLAINPLy+vo0aPGOAUBAcQIGaeWLl3q5uZGfnG6BUm3CB0+fBj3OmQCWKtXrzZWUXV/lK2J3ZDunqwW3QwBLOGh279/v+WfVXSBjY2OswRIYXkifgX2Z9WqVZbJKZxO9gbRcaez2oQ/VMYpqa9T1cUp840ypzqGUKWlpYmXZkj4iszefqcPRxQHXktJHFqpVSIOPzKxSntd0xU73R/ZbpioBWOq0x2zHE2cNBl/y/SXNphFk9kb3oxYuQ7L1OR02arotGxaFbkqswucikzdhP0JDAy0TE7BSIcxjlsgsCJGMpvwh8o4JfUhqLo4ZZ5W5pTcUbXAILPcUv0i6eHvm4oDWLj2bAzRgU1H5lQusVt2D3V0JsvxyX9dKxmx+Xt7Z1dlvvblh//+Nu3S9evXLbbfV1lZCZMK9hSNwlP1h54/fx6ZO3fubH/w4FvGKVUXp8zTypz6nqTP+yz8X8CxxBGtrq7us4oDWOfOndOPrvTy7sorxD9O7YjPOcINcKFM/xkd/hfdY090uevnbXBRYd8s2T+1Y8cO4XVV9YdSFy8mJqahoYGQBE5JfZ2qLk6lz4E5ZZWcYvWgioqK9H6WCWFdAwpgRFQKmBlLwYU74qDbO8z5xX90mVMBYU+ikS6PTuobTkHTpk0TLn+lP7TdMM6ZcgheZMtLXa5KFydzaoD0+1g9qLy8PFwVo5+M6hpQACMgidgESLn4dExFM3Hxyu640sdFPmOl7/opnZj3DDJRTLujljnFGqTaunUriDBu9qIuM2XikmRhQ1HC7dHAbj7yeyw2Ae1kZmbyAWJOsVjtYAGIMH7O4u5gxX3MeDEYZYiNTcz633T3Rb85i5lTzCkWq8fsKX2og5TvhjiSo4o5xZxisSzFP0WLZ9DjglMOI9zmbf19Nzk1dsbTHIuKOcVidYie9/mGR3aZKZOXvix7D2H0lJndfRv5qact8HkfiznF6h/R+ClnnW8Xn/dt2mU3zJHwFLLgxyI99SevdodTjxjmeT9z5oxyhzMyMo4ePWpWiJXKykqUOXv2rJZ8WVxpeiWjpaWFNkTvuLQbRiFQDspTTmlpKXYjPj5+6dKlqqM0uxmbuy8DXuMfxv/MnGJZinAFDjEM/hYDNc0bPxUS3jGfe7A+JkxYwk+63/ubv33vECPj0cEUGxubhoYGs0KsGBuRpJov4kpLA7DQWy9QXFwcFaP3hyEaUrBnzx6k7ezskB8QEEDDo2QDFLoZm1v23muvqrGxEf+zkuzMKVa/KTh0YteCuoQnrVaO6hwZMKGbvT96v2/SpEnKXQUmAIL2zkKstLW1FRcXw8KimNeCR7J406r5Iq60NAALcSokJIQCYEBIBAcHE6dwVYM+fn5+ACi1DMNKGulMChpl7CMYYtgivRJfUVFBQV3EKvwK4oXgFEWPuXLlimhB9nuNRfEmnTx5Ej8WVZCARUmZyvDZcQYxp1iWog0bf44LYEJsonnv923OFe/3SUd1Pv36b4fY2nWn9xcyf7lqqDxcfrjJU6hFEyFWsCooKAhfKWChiPkDyoBlaMHNzY3iOqnmCxxIA7AQp4g+FAYSCXoVBuUPHTqEhDSWJKAjC5bdbjyWJKiB/JUrV9bX12MfwsLCKPYWvaVMgRnQl6TqoCEFgcEnUUb5e41F8RZmIEqGh4djFaxF1dgyUE5ODv6TrkUBY06xel4Uf8pcF5XPpOl0Gbv7j5N7wWMTu9P70xmcU8qQzTAZkE8vl5gIsQLzAZQhvw+uVVz5hJWoqChckyARai1fvlxwSpYvOCUNwCKiHeBizsjI2LhxIxIUYxrlKSFzkKEARWGUcUoZm1vYXyAmCEIeMSAMOZs2bWo3vEgI04ZiSVJsbnqjnt5wVv5eY1G86Q+kNvfu3UuvQ6vGliEXFfJRhTnFsgjhOnRyHoGTcubqX/Z78KlZr2wDL1xdXYV/WojMFnLomAixQl0bGCMwTFDGxcWFeLRnzx5aGxoaCqtEcEqWLzglDWwgOIUrGdc/touE4BRd6gcPHhQ7AEDgV9B7xZ3aU+Qjh00kNcooAIMIFCPzT8l8VbLfayyaG8WGpDaxRfp1qrFlxJ8jzCvmFKv/tfaVVywkPvroSfo3e9euXavcSdzzZZxSDbECXmDV+vXrL1y4gJ6XmJWDbArI398fl7S4FGX5pjmFXqeNQbBlBKewIdHLQz7qEmXWrFmjxT8FAbL0NrKIDkqNk1FZV1cHu+bmzZuq9FH+XmOcIhuKDFJYYfTrjIXPJkOsa0NDmFOsXlFNTY3d0KF6p8ZrO/oRUnrflmHCGbqly0ThnOjKMRFiZd26dUijMC5FmFrCnoKtBPuFovXTNLGq+eLClgZgEZwiJEFICE61G8KNkAMLBhFIQXaN1NXdbjw2N4CIHh84u3nzZhG/H+Six4vgRWKivh9dWlqqSh/l7zXGKZpLJTw8HFYSxWwAp1Rjy7Q/GFhnYj4q5hSrH5T6szXdCfDSI8uoCWEmIg6jM+Xs7EyXsYkQKxcvXvT29kYanwsXLoTtQ5ccDAeKNx0dHU3ziQh3uDRfemGLACyCU+R4cnR0FCYPcQqfqEI2EbGPOlPSoQnGYnMDjoK/6FFihwEd6vqJuYvQZTPW71P+3kuXLhnrIcKkwo8Fy4jL+O3tarFlIPzPKNa1c6lXOIX7RklJSX5+Pm5KmZmZ2dnZSCPHAif8YPWeamtrHYYNx8k6ZcWafoHU1GT93FwODg6qxpTwN+NK1vJzVCOlGAtUbSKAtWqwaWOidiiKCzpQNEtId0QhX7TsgJbIMLDRsrKyaJQDbD1pn1cZWwbU7vJYrYd6Fk+FhYXPPRfv6DjsITU5ONgnJCQUFBQoPZqsAam3DYMVhzo6z83c1ceQmrc1z9nDq9N3+qqrq2EvcETWrqmxsREWk729PbqT6CHCODU2AQK6kPifTdww+ohTOBsCAkYLJPmPHR4zzzN+2SNJL/gmJHk/M99z7DhHsVan01nR/OOs7igqRv9incfY4Pnb9/YZpBb8eh/1+HAP79SKR89FhCFnmav6+nr0NGEogQCy8Z9SoUcsHoP2D6dqampinp4l8PTSOv93jjzxx/PTlUvBsSk/TR+DMlQY9naX+cqyFl27dm2Ut08330w2dxnz1By6HWLrfAgGgLrLqZKSEveR+pEyI1xt0zYFFp+bpkoo2fLz7HGeXvqhdK6urpYWWp/V49I/5jc4qoJinu2DmUeDf/gjckvh5OQ/nzmlh9RwRz1u0KeDraSFUGJ5/7+enPC4/iUJW1tbRtWA1/EPP7Q3vNkLq6r3OoCAoP/0p+mkEo+ZWIOaU+juubvrLanJES5FpyPMghQtML6mRrqRVSVeX2QNVJ04cYKsKo+xwb3hVp+3Nc/L4JOCJcWQYk51aGbUNLKkugYpgargUGfyVfGohQGv0tJSdw9P/auwzq7Tnn+tZ4cgDHN1J58Ud/eYUx3Kyckhn9T+/wzvMqREB9DdQ98j4CeAg0HXrl2LnBVND1J8Jk3/Qfqvuj/inMwoerrHjnPmVIdg+IwJ0D/BSdsU2E1ICbc63Ql5XNUg0a7f/c7RuSOEy6jHJkemburaC8beEyMeHmJDfb3c3Fw2yZlT36mwsJCGIGh8uqdlGROoP2sLCgr4kAwSXb9+ff2GDXZD7TsCkuh8J8QmTn9pg+kooPO37wXUQuYvd3s0kAhla2v78ssv8wAX5pRcixPm4vx4aZ1/T0EKy0/Tx6DNhIQEPiSDSrW1ta++tt4vYKz0vQUnL2905UY/GTVu9qLxcxZj8Z/+NL6CTSJgnv69XFfXtWvX8hMY5pR6p4/GIhgbzInlg4+nxi70EkvSC6PfK+7EjVVwbApZ77KunyxS/ebNm6WRTM3abYrgxYfcMnXmzJlVP/tZ4PgJNoZA5iYUEhKSnp5+9OjRATY1OasnOVVSUkKdPhPQKTodoQ9BP3TICFdbRyf9aefqZnfoxJOmURU0Qf+8RjaWShqp3sXFhd7AFuGotUsa+odlycIRxzkADOXl5WU+UE5OTlFREVimnIiBxZxSUX5+vj6o0DzPTjk1+4cdZX78vC++vr41yDSnYp/VR67A2anklIi2sWmTPiD/gQMHmpqaKDp9cXExhaZuN8SjwNksjVjYbhi2c+TIERFssLm5GTlklFF0eqmBJo1yT5KFo1fdLovFsixOUfyw+GWPaOcU+Z5e29IJpxKS9M8Qs7OzTXCKxkPs379fBMyngNPthpA3omsQERFBNtfcuXMpyDyVBKcoDjTF/ZHGAGpXRLlXDUev3C6LxbI4TsEI18c5fMG3U0556exnRLtHPOU2ZMjD6P116qJCm6iF9pWc8vPzi4+Pj4uLs7GxQe8P1g3xAjxCur6+nmYcAjgAF1qVkpIiDTJPQbxMcEoZ5X7nzp3KcPSy7fIJxGJZtz3l4TUUkJo20+2Z+Z6//8OkTh/5PbdijDF7ytfXF+BYsGABTB7pBETbtm2jYkhIY9SHh4d7e3tTkHmKbE/tmOCUMsq9ajh62XZZLJYlcurdd9811z+lcZm30L9T/5TU64R8MZk1UUZEEQoICEDXjKK4UpR+2D7EKQqJTfP/nD17VnBKGeUehZXh6GXbZbFYlsgpiv2u5XmfuZwaHzzK2PM+Y5wS4wwqKyvRJYyMjASqtmzZglVZWVllZWVILFy4EL3CpKQk4hTNoRYTE9PQ0EATYxCnlFHu6YmBLBy9sQm7WSyWBXGqra3N0dHB9PipLnDK2PgpjZxqN8xxhO4hTRW5evVqynzjjTdoPA6QZG9vT+MSkpOTqRgRTfjRZVHu29XC0TOnWCwr4BSU+Nwiix2PrgySD7BSGHyp7hmkrK6Mcq8MR89isayAU73xfl/gOE9+v4/FYvUYp2Ch+Pg8wvESWCyW5XKq/cGo9BGutuaGG1aNP+Xj687xp1gsVg9zql0/a+CsHonnOXGyJ8fzZLFYvcKpmpqakR7u3YyPPj1Kx/HRWSxWb3Gq3RA7wcnJscvzzYRMHMnzzbBYrN7lFKHKw8ODfFWv/dKM+fu8fV15/j4Wi9UXnKIOYHR0tPb5kMcGuYn5kLm7x2Kx+oJTpLy8PBoOLoAVM88zftkjSS/4JiR5PzPfM2iCm1ir0+lycnLYcc5isfqUU+2GcVWFhYVLly51cnJSjRjr4OCwaNGigoICHuHNYrH6h1NSYJWUlOTn52dnZ2dmZuIT1ta5c+d4GCeLxbIUTrFYLBZzisViMadYLBaLOcVisVjMKRaLxZxisVgs5hSLxWIxp1gsFnOKxWKxLI1TYiT6jh07aCQ60sjhV/lYLFY/c0rLm30JCQkFBQX86gyLxeoHTuXm5gYGBgokBXs5JIa6vzTV69UoXep0r6Vh7qE+LrJICfy/s1isPuJUTU3N7NmzBZ6y5vj8bXXI9V9MVi4V6x7PjvUN9vku8lRVVRX/+ywWq3c5JSJ5ug+3zXn20Ws/n6RKKNmyJ2GMj4cLR/K0Rv3z/v2qa19+/OmVP/7PpQG5fFT5+cX6G//8/jy1LCvmlD4yumGK88d1w2AraSGUWC69OnGKvztHRrc6SP21qu6/P6tvvnP3Vuu9hq9a6r68pVyabrd+++230or3v/32y5avrzapFP7iq9tt/5RDoaX1Xv1NlcbRAjYtK4zqjc13VPfk+q0797+/JxBaMNb4ra/vYtOlNQ1/uVjLqBoInEJ3z2OkfgqGWWOcL68PMwtStMD4mhvsyTPNWJFgSQFSuIDLLjeYtkrOVH6OC55qgUSn/l5jovCHZdWXGpqo8N22f56/dNV045/8X93X9zqeHdc03jzxv5+ZKPyn8s/AUyp8++43Z/+v1nTj+IEAH1AFq4qPuNVzKnrWLLKkugYpgaopYzx45j5rEbp7MEZgUmnpQAEQrd+0waI5Xlatpfzn17+C7YNul5bCf/7HZeCy9stmjb05GFwg4EmTuJRyEJDFnvARt25O5eTkkE+qbM3jXYaU6ACOch/BMyFbhXANN399V7uvB8YODBONhYEeWF7aG4eVpBFqZCWBg9ob/+p2Kz75iFsxp2D4BAaM0ZPl2Ue7CakOt3riWBqswOOqLJ9ToIP2q72ittEsj3tVw5dmFL5mRmH0Q/9Rd117+fqbLcwp6+ZUYWEhDUHQ+HRPy/LYaH3vr6CggA+GhXOq7stb2q/28itfwErSXr7SHJSYVRi7gZ3RXp5+Jh9xK+bUjxIXgylZc3x6ClJYsmP1s2klJCTwwWBOMadY3eUUOn1Owx3AFGODOcXy5xcn/Fu4R9wE18RQ9+KV40wXrlj3OL1Yo9r1KysrS0lJiY+PT0pK+vjjj/mAMaeYU8wpUyopKaFOn2nuvPNcgM3DD7s62DwTNMJp6BBU2bWwE2fWRH8vFFOOpSoqKrKxsXFzc4uLi3N2dkaZffv28TFjTjGnmFNGlZ+fD1LARDJBnLoNYSDUOA+Hqlcn4uunaaHuw21DRg0zzanlEaPRcl5ennRzMK9AqODg4KYm/fiaxsZGDw+PsLAwUeDixYsA2cmTJ+nrvXv3Tpw40dDQQPmXL1+m/Obm5iKDkC9yULKurk7UQvrGjRtI4BNW25EjR7B1rEJCtE86ffo0mqK6EPYNtbBvxcXFFRUVzKmByqmWlpbnDTp8+DDlIEE5/AjIsji1Y8cO0OSlqV6mjSmU2TzbR0quTl1Uq2b6oVZ2drbMmEImNioll0hnZGSId5sjIiJuGIR0TEzMsGHD7Ozs7O3t0Wesrq4G7Ly9vUNCQsQAiI8++gjpt956C2mqhTRAg8TkyZNRHQkAEVUovXHjRpS8f//+vHnz8JXaP3ToEDIBKeRQ48nJycypgcopOk8gmPaUQycDxJN7WxanMjMzcVRejdKZIA66eHrLaLG/Wa50tIlaaF+6OXTxkHnw4EHlnnzyySfEBbCDSJGSkkJn0owZM5B5/PhxpLdv3w4AIQEjCLX27Nlz7Ngx05xavnw5MleuXKnvru7ahXRoaKifn5/YH7qdLlmyBMad4BRACQurvr6eOTWwOYUbEm5R9w1CAsa+lFMyW1vVllfNbGtrw+mHHJzY0o3ClodFj7VIiNc2lFuR2fvUG0CCqqj2HlSb0l7S6u2p3EX+MoeUlhEMqTN0Sntq//79MoeUGLa+bds2rBI9svDwcFhMdCalpqaSlU7p8vJyR8N7iDCCAJfS0lLTnDpw4IBoH7YY0rh/EpIIXgDZihUrQEOkq6qqiFMoz/6pwcAp3A7xecIgJF588UXilKqtrWrLKzNRPSgoCLXoRF23bp3UXkMmTm+sRQdTdStSJSYmYi16Eri5ogyqGDvbVZvSXtKiOfXuu+926p/6+GX9HWZ+sKvIGefhMN3PyTSnlk3xUfqnKioqkAm4iBzcvqKiopDYvXs3VsFoovyAgAAcdVVOkWMrNzcXhxCH3NnZGf/7+fPnsXbnzp1Ye/bsWSmnyHyDJSXuk4JTdFKCmwcfCC3T+bp3717m1GDgFM4TXK4ZGRkbN25Egqx1nCeqtraqLa/MvHz5Mt1QkRMTEwOKIUFn46ZNm5DG2YU0oKO6FanxhbVr1qxBGrdbqmKMPqpNaS9p0ZyCMaLleV/cBFcU+8kUz7eXjAGwkP7pNC/TVUJHu6k+74uPjyfcgOL4j5BOS0tDPgxaGxubyMhIoGrLli36IV1ZWaqcgqWD8wmnBezY2bNnk9F+584d8mQ1NDQQfbRwipCE2x02BFzOnTtXZA6Gp5DMKTpPcB7Cmsa5h4TglKqtrWrLq2YCMWghLCwM+S4uLu2G2JOix4BOHEFHdStiD0E9cfPGSW6aU6pNaS9p0ZzSj58aZt/p+Km6DWErnvCwG/IwSuITwDLd9TMxfgo54Ajgom/Kzg7cEV0/AN7XVz9AFMBavXq1+GdlnGpqagJQyN8JYwp9SaqenJxMdQlzWjhFznvaGS8vr6NHjzKnBiGn3nzzTRuDYI8LTqna2qq2vDKzoKAAddevX3/hwgXcmOlkIxuKzjEYXAQdY1uR+nNxGpOnSXBKtfeg2pT2khbNKei5uNkax6N/kTH58vowfHZ/PDqOLrkAlKtgGd3XECoIxhRKKjMhc/8v2plB+MCFOUXXLWhCtz0kBKdUbW1VW16ZuXbtWtQFI8Aj3HrJnkKPAZnh4eHoSaBBgo7qVqTDdOhxJBAD20dwSrX3oNqU9pKWzqnCQ3/o8ff7gnVO/H4fc8paOIU0QANTSDib6L6ltLVVbXllJvji7e2Nr/hcuHAhLDUaMAiTys3NDdgi6x7gUN2KVGTrYS111ohTqr0HY01pL2nRnEK3y2fUyJ6Ml5AwhuMlMKcGxnh0VVvbmC0vy5RVLC8vz8rKgmWE9JUrV2iQjRaL/t4DSTllrPdgbIc1lrRcTkH5e96m+FPmhhtWjT/l5z6M408xp/i9GZkaGxthvNjb26Mfh84gLC/pCCwtjg4Zp6xdXYnnOeupaT0Sz3OqnxPH82ROMadUVV9fv2/fvtTU1NzcXPESmHbL7uDBg+fPnx/UnKqpqRnp4tzN+Ohzglw4Prp1cepqk3mc0h5yU4+eqzfMKWwep/5+pZHfQx50nGqn+WYMYxS6ON+MjyPPN2N1nLrR8rVZITdLqq9qLPxhWXWd5njnWK7c+Mr0DA7S5a9VdZcamrQ3fr35DnNqgHCKUDXSdQT5qn63yIz5+/xc7Xn+PqvTx59euXm79ZS22RCwNN1uvdyoNSo57J3Wb9o0oud4WfWdu99oN6kAqeY7dzXOKHHy7zU377TyPA4Dh1PUASRfldb5kL0cxHzI3N2zLtG8WKDPn8o7p8lnX9ykWlqmcvjLxVqaxa/hq5ZOaXJcb3ndajfMJ9jpPFdY/lZzjeYTBDQ7bRygvHHra54Xa6BxipSXl+ej8xJRVgCjxFD3l6Z6vRqlS53utTTMHX1DsVan0+Xk5LDj3OpEXACq0C367IumitrG8itfKBfgDCyTVvziq9u47FULwyaq/bJZOqnn7bvfgHEwr5SFkYnGb3393VSj97/99mrTLTSi2vinV29grXTSU1hVsK1MNH6jpRWQOlP5Oc8zOgA51W4YV1VYWPijhHin4d8hSSoHe/tFixYVFBRwsB6rRhUu5jPmeMetbt520I0hNWA5JQVWSUlJfn5+dnZ2ZmYmPmFtnTt3jodxslgsS+EUi8ViMadYLBZzisVisZhTLBaLxZxisVjMKRaLxWJOsVgsFnOKxWIxp1gsFos5xWKxmFMsFovFnGKxWCzmFIvFYk6xWCxWr+v/AUXiAqbNzcihAAAAAElFTkSuQmCC"},2753:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/amqp_tuto_subscription_broadcast-8777640d9606e963d4a58de869fa2627.png"},2754:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/amqp_tuto_subscription_unicast-d46945f1c71fce61ce5de7fc79912501.png"},2755:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/amqp_tuto_worker_queues-f42a848868b6347ffeec72719c14ff20.png"}}]);