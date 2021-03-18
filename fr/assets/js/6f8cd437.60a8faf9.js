(window.webpackJsonp=window.webpackJsonp||[]).push([[1123],{1195:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(2703)),a={id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/"},c={unversionedId:"development/frontend/components/business/frontend-packages-business-components-microservice-plugin",id:"version-1.4.0/development/frontend/components/business/frontend-packages-business-components-microservice-plugin",isDocsHomePage:!1,title:"Microservice plugin configurator",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/microservice-plugin-configurator/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",version:"1.4.0",sidebar_label:"Microservice plugin configurator",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS business components",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/"},next:{title:"Dynamic lazy loadable modules",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules/"}},s=[{value:"Description",id:"description",children:[]},{value:"PluginFormContainer",id:"pluginformcontainer",children:[]},{value:"PluginListContainer",id:"pluginlistcontainer",children:[]}],l={toc:s};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"This business component is common standard tool to render a configurator form for any plugin of any microservice.",Object(i.b)("br",{parentName:"p"}),"\n","This component uses the standard plugin API of any microservice to retrieve plugins meta informations needed for configuration."),Object(i.b)("h3",{id:"pluginformcontainer"},"PluginFormContainer"),Object(i.b)("p",null,"Component to display a plugin form editor"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    render() {\n        return (\n            <PluginFormContainer\n                microserviceName='rs-catalog' // Microservice of the plugin to configure\n                pluginId='' // Plugin unique identifier to configure\n                pluginConfigurationId='' // Only for edition of an existing plugin configuration\n                formMode='create||edit||copy'\n                backUrl='' // Return route (back button on editor bottom)\n            />\n        )\n    }\n}\n")),Object(i.b)("h3",{id:"pluginlistcontainer"},"PluginListContainer"),Object(i.b)("p",null,"Component to display a select field containing all possible plugin implemtations of a given plugin type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    onPluginSelection = (pluginDefinition) => {\n        console.info('selected plugin',pluginDefinition.id)\n    }\n    \n    render() {\n        return (\n            <PluginListContainer\n                title='' // Title of the list\n                selectLabel='' // Hint text of the select field\n                microserviceName='rs-catalog' // Microservice of the plugin type\n                pluginType='' // Plugin type\n                selectedPluginId='' // Default selected plugin identifier\n                handleSelect={this.onPluginSelection} // Function callback when a plugin implemtentation is selected.\n                errorText='' // error message to display on top of the list or null if no error.\n            />\n        )\n    }\n}\n")))}p.isMDXComponent=!0},2703:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=t,g=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return r?o.a.createElement(g,c(c({ref:n},l),{},{components:r})):o.a.createElement(g,c({ref:n},l))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);