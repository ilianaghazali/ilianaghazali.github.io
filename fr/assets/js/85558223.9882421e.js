(window.webpackJsonp=window.webpackJsonp||[]).push([[1382],{1454:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(2703)),i={layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"},c={unversionedId:"development/backend/framework/modules/reporting",id:"version-1.4.0/development/backend/framework/modules/reporting",isDocsHomePage:!1,title:"Requirement report",description:"Prerequisites",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/modules/reporting.md",slug:"/development/backend/framework/modules/reporting",permalink:"/fr/docs/1.4.0/development/backend/framework/modules/reporting",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/modules/reporting.md",version:"1.4.0"},p=[],s={toc:p};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Automatic reporting collection is running with ",Object(a.b)("strong",{parentName:"p"},"JUnit tests"),"."),Object(a.b)("h1",{id:"report-annotation"},"Report annotation"),Object(a.b)("p",null,"Add dependency to test artifact (if not already defined) :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.microservices</groupId>\n    <artifactId>microservice-core-test</artifactId>\n    <scope>test</scope>\n</dependency>\n")),Object(a.b)("p",null,"Use :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Requirement("DSL_REQUIREMENT?")\n')),Object(a.b)("p",null,"many times to identify all requirements associated to your test."),Object(a.b)("p",null,"Use :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Purpose("Purpose of your test?")\n')),Object(a.b)("p",null,"to describe the unit test."),Object(a.b)("h1",{id:"sample"},"Sample"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Requirement("REGARDS_DSL_DAM_MOD_010")\n@Requirement("REGARDS_DSL_DAM_MOD_020")\n@Purpose("Get model attributes to manage data models")\n@Test\npublic void testSomething() {\n}\n')),Object(a.b)("h1",{id:"how-to-generate-requirement-reports"},"How to generate requirement reports?"),Object(a.b)("p",null,"Maven test plugins has to be configured to add a specific reporting listener."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n    <executions>\n      <execution>\n        <goals>\n          <goal>integration-test</goal>\n          <goal>verify</goal>\n        </goals>\n      </execution>\n    </executions>\n  </plugin>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n  </plugin>\n</plugins>\n</pluginManagement>\n")),Object(a.b)("h1",{id:"where-reports-are-generated"},"Where reports are generated?"),Object(a.b)("p",null,"Reports are generated in maven default build directory (i.e. target) under ",Object(a.b)("strong",{parentName:"p"},"requirement-reports")," directory. A report starts with ",Object(a.b)("strong",{parentName:"p"},"RQMT-")," prefix and is saved as an XML file."),Object(a.b)("h1",{id:"how-to-generate-an-aggregated-report"},"How to generate an aggregated report"),Object(a.b)("p",null,"Use REGARDS ",Object(a.b)("strong",{parentName:"p"},"Maven report plugin"),"."),Object(a.b)("p",null,"From the root directory of your microservice :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mvn fr.cnes.regards.microservices:report-maven-plugin:1.0-SNAPSHOT:gen --non-recursive\n")),Object(a.b)("p",null,"An XLSX file (Windows office document) is created under target directory."))}u.isMDXComponent=!0},2703:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);