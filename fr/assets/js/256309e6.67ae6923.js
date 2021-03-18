(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{2703:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||a;return r?o.a.createElement(u,i(i({ref:t},c),{},{components:r})):o.a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},456:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(2703)),s={id:"backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",slug:"/development/backend/framework/starters/amqp-monitoring/"},i={unversionedId:"development/backend/framework/starters/backend-framework-starters-amqp-monitoring",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-amqp-monitoring",isDocsHomePage:!1,title:"AMQP monitoring starter",description:"1\\. Configuration",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/amqp-monitoring-starter.md",slug:"/development/backend/framework/starters/amqp-monitoring/",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/amqp-monitoring/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/amqp-monitoring-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS framework starters",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/"},next:{title:"AMQP starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/amqp/"}},l=[{value:"4.1. How to publish <strong>LogEvent</strong> to the <strong>Metrics</strong> module",id:"41-how-to-publish-logevent-to-the-metrics-module",children:[]},{value:"4.2. How to log events to SYSLOG",id:"42-how-to-log-events-to-syslog",children:[]},{value:"4.3. How to log security events to SYSLOG",id:"43-how-to-log-security-events-to-syslog",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"1-configuration"},"1","."," Configuration"),Object(a.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-monitoring-regards-starter</artifactId>\n</dependency>\n")),Object(a.b)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),Object(a.b)("p",null,"Starter autoconfigures:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"regardsAmqpAppender")," is a logback appender. It is responsible to publish some ",Object(a.b)("strong",{parentName:"li"},"LogEvent")," to a publisher for the current tenant."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"IMonitoringLogEvent")," is used subcribe to ",Object(a.b)("strong",{parentName:"li"},"LogEvent")," form all known tenants.")),Object(a.b)("h1",{id:"3-the-metrics-module"},"3","."," The ",Object(a.b)("strong",{parentName:"h1"},"Metrics")," module"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Metrics")," module define a subscriber to subscribe to the ",Object(a.b)("strong",{parentName:"p"},"LogEvent")," publish for all the tenants. And for each tenant, each ",Object(a.b)("strong",{parentName:"p"},"LogEvent")," are persisted to the tenant's database. The ",Object(a.b)("inlineCode",{parentName:"p"},"LogEventHandler")," implements ",Object(a.b)("inlineCode",{parentName:"p"},"ILogEventHandler")," and define a method ",Object(a.b)("inlineCode",{parentName:"p"},"handle"),"."),Object(a.b)("h1",{id:"4-how-to"},"4","."," How to"),Object(a.b)("h2",{id:"41-how-to-publish-logevent-to-the-metrics-module"},"4.1. How to publish ",Object(a.b)("strong",{parentName:"h2"},"LogEvent")," to the ",Object(a.b)("strong",{parentName:"h2"},"Metrics")," module"),Object(a.b)("p",null,"To publish ",Object(a.b)("strong",{parentName:"p"},"LogEvent")," to the ",Object(a.b)("strong",{parentName:"p"},"Metrics")," module, it is necessary to add the logback appender ",Object(a.b)("strong",{parentName:"p"},"regardsAmqpAppender")," to the logback.xml file. This is done in logback.xml file from each microservice's bootstrap."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<appender name="regardsAmqpAppender"\n  class="ch.qos.logback.ext.spring.DelegatingLogbackAppender">\n  <filter\n    class="fr.cnes.regards.framework.logbackappender.RegardsAmqpAppenderFilter">\n    <level>INFO</level>\n  </filter>\n</appender>\n\n<logger name="fr.cnes.regards" level="INFO" additivity="true">\n  <appender-ref ref="regardsAmqpAppender" />\n</logger>\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"RegardsAmqpAppenderFilter")," defined a list of package for which each log should be publish to the ",Object(a.b)("strong",{parentName:"p"},"Metrics")," module."),Object(a.b)("h2",{id:"42-how-to-log-events-to-syslog"},"4.2","."," How to log events to SYSLOG"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL0</facility>\n  <suffixPattern>${SYSLOG_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n<root level="info">\n  <appender-ref ref="SYSLOG" />\n</root>\n')),Object(a.b)("p",null,"The pattern ",Object(a.b)("strong",{parentName:"p"},"SYSLOG_PATTERN")," is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."),Object(a.b)("h2",{id:"43-how-to-log-security-events-to-syslog"},"4.3","."," How to log security events to SYSLOG"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG-SECU" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL1</facility>\n  <suffixPattern>${SYSLOG_SECURITY_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n\x3c!-- Log the user request authentication --\x3e\n<logger name="fr.cnes.regards.framework.authentication" level="INFO">\n  <appender-ref ref="SYSLOG-SECU" />\n</logger>\n')),Object(a.b)("p",null,"The pattern ",Object(a.b)("strong",{parentName:"p"},"SYSLOG_SECURITY_PATTERN")," is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."))}p.isMDXComponent=!0}}]);