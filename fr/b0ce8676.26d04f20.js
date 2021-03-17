(window.webpackJsonp=window.webpackJsonp||[]).push([[1790],{1860:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(2701)),a={id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator"},c={unversionedId:"development/frontend/components/business/frontend-packages-business-components-microservice-plugin",id:"version-1.4.0/development/frontend/components/business/frontend-packages-business-components-microservice-plugin",isDocsHomePage:!1,title:"Microservice plugin configurator",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/microservice-plugin-configurator",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",version:"1.4.0",sidebar_label:"Microservice plugin configurator",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS business components",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components"},next:{title:"Dynamic lazy loadable modules",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules"}},s=[{value:"Description",id:"description",children:[]},{value:"PluginFormContainer",id:"pluginformcontainer",children:[]},{value:"PluginListContainer",id:"pluginlistcontainer",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"This business component is common standard tool to render a configurator form for any plugin of any microservice.",Object(i.b)("br",{parentName:"p"}),"\n","This component uses the standard plugin API of any microservice to retrieve plugins meta informations needed for configuration."),Object(i.b)("h3",{id:"pluginformcontainer"},"PluginFormContainer"),Object(i.b)("p",null,"Component to display a plugin form editor"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    render() {\n        return (\n            <PluginFormContainer\n                microserviceName='rs-catalog' // Microservice of the plugin to configure\n                pluginId='' // Plugin unique identifier to configure\n                pluginConfigurationId='' // Only for edition of an existing plugin configuration\n                formMode='create||edit||copy'\n                backUrl='' // Return route (back button on editor bottom)\n            />\n        )\n    }\n}\n")),Object(i.b)("h3",{id:"pluginlistcontainer"},"PluginListContainer"),Object(i.b)("p",null,"Component to display a select field containing all possible plugin implemtations of a given plugin type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    onPluginSelection = (pluginDefinition) => {\n        console.info('selected plugin',pluginDefinition.id)\n    }\n    \n    render() {\n        return (\n            <PluginListContainer\n                title='' // Title of the list\n                selectLabel='' // Hint text of the select field\n                microserviceName='rs-catalog' // Microservice of the plugin type\n                pluginType='' // Plugin type\n                selectedPluginId='' // Default selected plugin identifier\n                handleSelect={this.onPluginSelection} // Function callback when a plugin implemtentation is selected.\n                errorText='' // error message to display on top of the list or null if no error.\n            />\n        )\n    }\n}\n")))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(g,c(c({ref:n},l),{},{components:t})):o.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);