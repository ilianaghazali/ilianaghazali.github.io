(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:r},s),{},{components:t})):a.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},925:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(2701)),i={layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"},c={unversionedId:"development/backend/framework/modules/reporting",id:"development/backend/framework/modules/reporting",isDocsHomePage:!1,title:"Requirement report",description:"Prerequisites",source:"@site/docs/development/backend/framework/modules/reporting.md",slug:"/development/backend/framework/modules/reporting",permalink:"/fr/docs/development/backend/framework/modules/reporting",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/backend/framework/modules/reporting.md",version:"current"},p=[],s={toc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Automatic reporting collection is running with ",Object(o.b)("strong",{parentName:"p"},"JUnit tests"),"."),Object(o.b)("h1",{id:"report-annotation"},"Report annotation"),Object(o.b)("p",null,"Add dependency to test artifact (if not already defined) :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.microservices</groupId>\n    <artifactId>microservice-core-test</artifactId>\n    <scope>test</scope>\n</dependency>\n")),Object(o.b)("p",null,"Use :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Requirement("DSL_REQUIREMENT?")\n')),Object(o.b)("p",null,"many times to identify all requirements associated to your test."),Object(o.b)("p",null,"Use :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Purpose("Purpose of your test?")\n')),Object(o.b)("p",null,"to describe the unit test."),Object(o.b)("h1",{id:"sample"},"Sample"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Requirement("REGARDS_DSL_DAM_MOD_010")\n@Requirement("REGARDS_DSL_DAM_MOD_020")\n@Purpose("Get model attributes to manage data models")\n@Test\npublic void testSomething() {\n}\n')),Object(o.b)("h1",{id:"how-to-generate-requirement-reports"},"How to generate requirement reports?"),Object(o.b)("p",null,"Maven test plugins has to be configured to add a specific reporting listener."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n    <executions>\n      <execution>\n        <goals>\n          <goal>integration-test</goal>\n          <goal>verify</goal>\n        </goals>\n      </execution>\n    </executions>\n  </plugin>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n  </plugin>\n</plugins>\n</pluginManagement>\n")),Object(o.b)("h1",{id:"where-reports-are-generated"},"Where reports are generated?"),Object(o.b)("p",null,"Reports are generated in maven default build directory (i.e. target) under ",Object(o.b)("strong",{parentName:"p"},"requirement-reports")," directory. A report starts with ",Object(o.b)("strong",{parentName:"p"},"RQMT-")," prefix and is saved as an XML file."),Object(o.b)("h1",{id:"how-to-generate-an-aggregated-report"},"How to generate an aggregated report"),Object(o.b)("p",null,"Use REGARDS ",Object(o.b)("strong",{parentName:"p"},"Maven report plugin"),"."),Object(o.b)("p",null,"From the root directory of your microservice :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mvn fr.cnes.regards.microservices:report-maven-plugin:1.0-SNAPSHOT:gen --non-recursive\n")),Object(o.b)("p",null,"An XLSX file (Windows office document) is created under target directory."))}u.isMDXComponent=!0}}]);