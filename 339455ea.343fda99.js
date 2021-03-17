(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return t?a.a.createElement(b,l(l({ref:n},u),{},{components:t})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},592:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(2701)),i={id:"backend-framework-starters-module",title:"Module starter",slug:"/development/backend/framework/starters/module"},l={unversionedId:"development/backend/framework/starters/backend-framework-starters-module",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-module",isDocsHomePage:!1,title:"Module starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/module-starter.md",slug:"/development/backend/framework/starters/module",permalink:"/docs/1.4.0/development/backend/framework/starters/module",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/module-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Microservice starter",permalink:"/docs/1.4.0/development/backend/framework/starters/microservice"},next:{title:"Multitenant starter",permalink:"/docs/1.4.0/development/backend/framework/starters/multitenant"}},d=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"How to",id:"how-to",children:[{value:"Implement a module manager",id:"implement-a-module-manager",children:[]}]}],u={toc:d};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Gives access to standard system exceptions,"),Object(o.b)("li",{parentName:"ul"},"Centralizes system exception transformation into REST exception,"),Object(o.b)("li",{parentName:"ul"},"Brings the module manager engine logic.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards-starter</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Business dependency"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>module-regards</artifactId>\n</dependency>\n")),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"implement-a-module-manager"},"Implement a module manager"),Object(o.b)("p",null,"To do this, you have to implement a module manager inheriting abstract class ",Object(o.b)("inlineCode",{parentName:"p"},"AbstractModuleManager")," (and implementing ",Object(o.b)("inlineCode",{parentName:"p"},"IModuleManager"),") and ",Object(o.b)("strong",{parentName:"p"},"annotated as a Spring component"),"."),Object(o.b)("p",null,"In the same package as your module configuration manager, you have to create a ",Object(o.b)("inlineCode",{parentName:"p"},"module.properties")," file containing following required properties:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Your module properties\nmodule.id=<your module id>\nmodule.name=<your module name for display purpose>\nmodule.description=<your module description for display purpose>\nmodule.version=<your module version>\nmodule.author=<author>\nmodule.legalOwner=<author,client, ...>\nmodule.documentation=<url>\n")),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"IModuleManager#importConfiguration")," will only be called if imported file matches the same ",Object(o.b)("inlineCode",{parentName:"p"},"module.id")," properties."),Object(o.b)("p",null,"At last, to adjust your exported JSON configuration, you can annotate your exported POJO with ",Object(o.b)("inlineCode",{parentName:"p"},"@ConfigIgnore"),"."),Object(o.b)("h4",{id:"importexport-configuration"},"Import/export configuration"),Object(o.b)("p",null,"For instance,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class MyModuleManager extends AbstractModuleManager {\n\n    @Override\n    public void importConfiguration(ModuleConfiguration configuration) throws ModuleException {\n        for (ModuleConfigurationItem<?> item : configuration.getConfiguration()) {\n            if (MyPOJO.class.isAssignableFrom(item.getKey())) {\n                MyPOJO pojo = item.getTypedValue();\n                // Do something to import configuration\n            }\n        }\n    }\n\n    @Override\n    public ModuleConfiguration exportConfiguration() {\n        List<ModuleConfigurationItem<?>> configuration = new ArrayList<>();\n        // Fill list using ModuleConfigurationItem#build\n        return ModuleConfiguration.build(info, configuration);\n    }\n}\n")),Object(o.b)("h4",{id:"ready"},"Ready"),Object(o.b)("p",null,"Override default method. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"isReady")," is only called if ",Object(o.b)("inlineCode",{parentName:"p"},"isReadyImplemented")," return ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'    default ModuleReadinessReport<S> isReady() {\n        throw new UnsupportedOperationException("Ready feature not implemented");\n    }\n\n    default boolean isReadyImplemented() {\n        return false;\n    }\n')),Object(o.b)("h4",{id:"restart"},"Restart"),Object(o.b)("p",null,"Override default method."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"restart")," is only called if ",Object(o.b)("inlineCode",{parentName:"p"},"isRestartImplemented")," return ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'    default ModuleRestartReport restart() {\n        throw new UnsupportedOperationException("Restart feature not implemented");\n    }\n\n    default boolean isRestartImplemented() {\n        return false;\n    }\n')))}c.isMDXComponent=!0}}]);