(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),l=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),m=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,b=d["".concat(a,".").concat(u)]||d[u]||p[u]||r;return n?l.a.createElement(b,i(i({ref:t},s),{},{components:n})):l.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},877:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n(3),l=n(7),r=(n(0),n(2701)),a={id:"frontend-view-theme",title:"Material and module themes",sidebar_label:"Theme",slug:"/development/frontend/view/theme"},i={unversionedId:"development/frontend/components/frontend-view-theme",id:"development/frontend/components/frontend-view-theme",isDocsHomePage:!1,title:"Material and module themes",description:"Description",source:"@site/docs/development/frontend/components/theme.md",slug:"/development/frontend/view/theme",permalink:"/docs/development/frontend/view/theme",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/frontend/components/theme.md",version:"current",sidebar_label:"Theme",sidebar:"dev",previous:{title:"Internationalization",permalink:"/docs/development/frontend/view/international"},next:{title:"Redux form",permalink:"/docs/development/frontend/view/forms"}},c=[{value:"Description",id:"description",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"How to",id:"how-to",children:[{value:"Get properties from the MUI and module themes context",id:"get-properties-from-the-mui-and-module-themes-context",children:[]},{value:"Connect with Material UI theme context",id:"connect-with-material-ui-theme-context",children:[]},{value:"Connect with MUI and module theme",id:"connect-with-mui-and-module-theme",children:[]},{value:"1. Declare style builder",id:"1-declare-style-builder",children:[]},{value:"2. Connect component to module theme provider",id:"2-connect-component-to-module-theme-provider",children:[]},{value:"3. Add context type",id:"3-add-context-type",children:[]}]}],s={toc:c};function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@regards/theme")," (web_modules/utils/theme) projects holds components and tools designed to simplify the use of global ",Object(r.b)("a",{parentName:"p",href:"http://www.material-ui.com/#/customization/themes"},"Material-ui")," theme - called MUI theme in the next lines - over all REGARDS frontend react components. MUI theme holds a dictionnary of variables, sorted by categories, defining styles like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"padding"),Object(r.b)("li",{parentName:"ul"},"margin"),Object(r.b)("li",{parentName:"ul"},"borders"),Object(r.b)("li",{parentName:"ul"},"colors "),Object(r.b)("li",{parentName:"ul"},"and so on...")),Object(r.b)("p",null,"Beside MUI theme, some of the ",Object(r.b)("inlineCode",{parentName:"p"},"regards/theme")," components also provides a connector with ",Object(r.b)("inlineCode",{parentName:"p"},"module theme")," context. The context corresponds to specific variables built by a theme builder function for a component or a group of components."),Object(r.b)("p",null,"Both MUI and module themes context will be detailed in following sections."),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"To use the REGARDS theme components and tools you must add the here under package to your package.json dependencies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"@regardsoss/theme")),Object(r.b)("h2",{id:"how-to"},"How to"),Object(r.b)("h3",{id:"get-properties-from-the-mui-and-module-themes-context"},"Get properties from the MUI and module themes context"),Object(r.b)("p",null,"In components ",Object(r.b)("strong",{parentName:"p"},"with theme context")," (see later sections), you can retrieve theme properties in:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"this.context.muiTheme"),": That object holds Material UI theme categories, palette, card, and so on. Please refer to Material UI official documentation for more details about that object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"this.context.moduleTheme"),": That object holds module theme, as exported by the theme builder function.")),Object(r.b)("p",null,"In order to access those context elements, the component must declare the ",Object(r.b)("inlineCode",{parentName:"p"},"themeContextType")," in ",Object(r.b)("inlineCode",{parentName:"p"},"contextTypes"),", as shown in example below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { themeContextType } from '@regardsoss/theme'\n\nexport class ExampleComponent extends React.Component {\n\n  static contextTypes = {\n      ...themeContextType,\n  }\n\n  render() {\n    const mainColor = this.context.muiTheme.palette.priamy1Color\n    const someModuleStyle = this.context.moduleTheme.aValue\n    ...\n  }\n}\n")),Object(r.b)("h3",{id:"connect-with-material-ui-theme-context"},"Connect with Material UI theme context"),Object(r.b)("p",null,"In REGARDS, the MUI theme context can be provided to children by using ",Object(r.b)("strong",{parentName:"p"},"ThemeProvider")," component like demonstrated in following exmaple. Please note that this connector adds only MUI theme context, not the module theme."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { ThemeProvider } from '@regardsoss/theme'\n\nexport class ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <ThemeProvider>\n        <ExampleComponent />\n      </ThemeProvider>\n    )\n  }\n}\n")),Object(r.b)("p",null,"In the previous example, ExampleComponent will be able to access the MUI theme variables through context ",Object(r.b)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",Object(r.b)("strong",{parentName:"p"},"ThemeProvider children"),", in the React meaning."),Object(r.b)("p",null,"Note: Most of the time, REGARDS developer doesn't need to use the ThemeProvider, as MUI Theme context is provided in all REGARDS applications."),Object(r.b)("h3",{id:"connect-with-mui-and-module-theme"},"Connect with MUI and module theme"),Object(r.b)("p",null,"As explained before in this page, REGARDS allows a component or a group of components to define custom styles, called ",Object(r.b)("inlineCode",{parentName:"p"},"module styles"),", through a style builder function. The developer should follow the next steps to define and access such theme in components."),Object(r.b)("h3",{id:"1-declare-style-builder"},"1","."," Declare style builder"),Object(r.b)("p",null,"The style builder function produces a javascript object based on MUI theme as parameter. Such object must be structured to match component(s) needs at render time. By convention in REGARDS, style builder functions are placed in styles.js files. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// content of styles.js\n\n/**\n * Builds module style on theme\n */\nexport default theme => ({ // MUI theme is provided as function parameter, to access MUI colors and such...\n  myCustomPane: {\n    color: theme.palette.textColor,\n  }\n  // ...\n})\n")),Object(r.b)("p",null,"When dealing with styles, we also declare frequently an index.js file, that only exports the style builder function in an object like { style: styleBuilderFunction }. That makes it easier to instantiate context later on."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// content of index.js\nimport styles from './styles'\n\nmodule.exports = { styles }\n\n")),Object(r.b)("h3",{id:"2-connect-component-to-module-theme-provider"},"2","."," Connect component to module theme provider"),Object(r.b)("p",null,"In REGARDS, the MUI and module theme contexts can be provided to children by using either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"ModuleStyleProvider")," component")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"withModuleStyle")," decorator function"),Object(r.b)("p",{parentName:"li"},"Those two methods are detailed in sections below."),Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Note: Theme connectors also define an optional parameter/property called ",Object(r.b)("inlineCode",{parentName:"em"},"stackCallingContext")," (false by default). That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context themes to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context themes while API components still access themes in their own context.")))),Object(r.b)("h4",{id:"2a-using-modulestyleprovider"},"2",".","a Using ModuleStyleProvider"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ModuleStyleProvider")," component provides MUI module themes context to its React children, as demonstrated in example below.\nIt defines the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"module"),": an object with a single field ",Object(r.b)("inlineCode",{parentName:"li"},"styles"),", holding the style builder function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stackCallingContext"),": an optional boolean, false by default. See note in parent section for more detail.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"  import { ModuleStyleProvider } from '@regardsoss/theme'\n  import ExampleComponent from './ExampleComponent'\n  import moduleStyles from '../../styles' // assuming there is an index.js\n\n  export class ExampleContainer extends React.Component {\n\n    render() {\n      return (\n        <ModuleStyleProvider module={moduleStyles}>\n          <ExampleComponent />\n        </ModuleStyleProvider>)\n    }\n  }\n")),Object(r.b)("p",null,"In the previous example, ExampleComponent will be able to access muiTheme and moduleTheme through context ",Object(r.b)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",Object(r.b)("strong",{parentName:"p"},"ModuleStyleProvider children"),", in the React meaning."),Object(r.b)("p",null,"For instance, in the following React tree, B and C can access themes through context, but A can not."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<A>\n  <ModuleStyleProvider module={moduleStyles}>\n      <B>\n        <C />\n      </B>\n  </ModuleStyleProvider>\n</A>\n")),Object(r.b)("h4",{id:"2b-using-withmodulestyle"},"2",".","b Using withModuleStyle"),Object(r.b)("p",null,"To use the REGARDS withModuleStyle decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with ModuleStyleProvider properties described before):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"module")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stackCallingContext"))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { withModuleStyle } from '@regardsoss/theme'\nimport moduleStyles from '../../styles' // assuming there is an index.js\n\nclass ExampleContainer extends React.Component {\n\n  render() {\n    // ...\n  }\n}\n\nexport withModuleStyle(moduleStyles)(ExampleContainer)\n")),Object(r.b)("p",null,"The use of ",Object(r.b)("inlineCode",{parentName:"p"},"withModuleStyle(moduleStyles)(ExampleContainer)")," means that module theme context will be defined for ExampleContainer and all its children. Therefore, if we define the ",Object(r.b)("inlineCode",{parentName:"p"},"contextTypes")," in this container, it will be able accessing the module theme through its context."),Object(r.b)("h3",{id:"3-add-context-type"},"3","."," Add context type"),Object(r.b)("p",null,"Finally, theme context can be used in container children, and in container itself when withModuleStyle decorator method was used. To access it, as seen in first 'how to' section, the developer has to declare context types, like in example below."),Object(r.b)("p",null,"Example: a component declaring and consuming theme context:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { withModuleStyle } from '@regardsoss/theme'\nimport moduleStyles from '../../styles' // assuming there is an index.js\n\nclass CompleteExample extends React.Component {\n\n  static contextTypes = {\n      ...themeContextType,\n  }\n\n  render() {\n    const { moduleTheme, muiTheme } = this.context\n    const styleFromTheme = { color: muiTheme.palette.textColor }\n    return (\n      <div>\n        <div style={styleFromTheme}>Using MUI theme color </div>\n        { /* \n        we suppose here that style builder returned something like \n        { completeExample: { border: '1px solid red', ...} } \n        */ }\n        <div style={moduleTheme.completeExample.style}>Using some module theme </div>\n      </div>\n    )\n    // ...\n  }\n}\n\nexport withModuleStyle(moduleStyles)(CompleteExample)\n")))}m.isMDXComponent=!0}}]);