(window.webpackJsonp=window.webpackJsonp||[]).push([[2289],{2361:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(2703)),o={id:"frontend-view-international",title:"Internationalization",sidebar_label:"Internationalization",slug:"/development/frontend/view/international/"},s={unversionedId:"development/frontend/components/frontend-view-international",id:"development/frontend/components/frontend-view-international",isDocsHomePage:!1,title:"Internationalization",description:"Description",source:"@site/docs/development/frontend/components/internationalization.md",slug:"/development/frontend/view/international/",permalink:"/fr/docs/development/frontend/view/international/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/development/frontend/components/internationalization.md",version:"current",sidebar_label:"Internationalization",sidebar:"dev",previous:{title:"Backend interactions",permalink:"/fr/docs/development/frontend/data/clients/"},next:{title:"Material and module themes",permalink:"/fr/docs/development/frontend/view/theme/"}},l=[{value:"Description",id:"description",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"How to",id:"how-to",children:[{value:"Internationalize text in REGARDS",id:"internationalize-text-in-regards",children:[]},{value:"Connect with internationalization context",id:"connect-with-internationalization-context",children:[]},{value:"Using I18nProvider",id:"using-i18nprovider",children:[]},{value:"Using withI18n",id:"using-withi18n",children:[]},{value:"I18n messages files",id:"i18n-messages-files",children:[]},{value:"Use parameter in messages",id:"use-parameter-in-messages",children:[]},{value:"More informations",id:"more-informations",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@regards/i18n")," (web_modules/utils/i18n) module holds components and tools designed to simplify the internationalization of all messages in the REGARDS frontend. "),Object(r.b)("p",null,"The REGARDS internationalization implementation uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," library."),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"To use the REGARDS ",Object(r.b)("inlineCode",{parentName:"p"},"I18nProvider")," you must add the here under packages to your package.json dependencies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"@regardsoss/i18n"),Object(r.b)("li",{parentName:"ul"},"react-intl")),Object(r.b)("h2",{id:"how-to"},"How to"),Object(r.b)("h3",{id:"internationalize-text-in-regards"},"Internationalize text in REGARDS"),Object(r.b)("p",null,"In components ",Object(r.b)("strong",{parentName:"p"},"with i18n context")," (see later sections), you can retrieve internationalized messages using:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"this.context.intl.formatMessage")," method, which produces a string out of the two parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"First parameter is an object, where field ",Object(r.b)("inlineCode",{parentName:"li"},"id")," is the message key"),Object(r.b)("li",{parentName:"ul"},"Second parameter is an object, where each field key is the value key in messages (allowing messages with dynamic values)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FormattedMessage")," component which builds a React.Element. It has the two following fields:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id"),", that is the message key"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"values"),", corresponding to formatMessage second parameter")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Notes :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To use the ",Object(r.b)("inlineCode",{parentName:"li"},"formatMessage")," method of the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/yahoo/react-intl"},"react-intl")," library, you need to define the react component context with the react-intl properties. To do so, you can use the ",Object(r.b)("inlineCode",{parentName:"li"},"i18nContextType"),"\nof the ",Object(r.b)("inlineCode",{parentName:"li"},"@regardsoss/i18n")," package. The FormattedMessage component does not require to explicitely mention context type."),Object(r.b)("li",{parentName:"ul"},"In many cases, when setting an HTML node title property for instance, the value must be a string (and not a React.Element). In such cases, the developer has to use formatMessage method.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { i18nContextType } from '@regardsoss/i18n'\nimport { FormattedMessage } from 'react-intl'\n\nexport class ExampleComponent extends React.Component {\n\n  static contextTypes = {\n      ...i18nContextType,\n    }\n\n  render() {\n    const internationalizedMessage = this.context.intl.formatMessage({ id: 'example.message' })\n    return (\n      <div>\n        <span>{internationalizedMessage}</span>\n        <FormattedMessage id=\"example.message\" />\n      </div>\n    )\n  }\n}\n\n")),Object(r.b)("h3",{id:"connect-with-internationalization-context"},"Connect with internationalization context"),Object(r.b)("p",null,"In REGARDS, the internationalization context can be provided to children by using either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"I18nProvider")," component"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"withI18n")," decorator function")),Object(r.b)("p",null,"Those two methods are detailed in sections below."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: I18N connectors also define an optional parameter/property called ",Object(r.b)("inlineCode",{parentName:"em"},"stackCallingContext")," (false by default). That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context messages to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context messages while API components still access messages in their own context.")),Object(r.b)("h3",{id:"using-i18nprovider"},"Using I18nProvider"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"I18nProvider")," component provides internationalization context to its React children as demonstrated in example below.\nIt defines the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"messages")," : an object, where first level key is locale (like 'en' or 'fr') and second level key are messages keys. Most of the time, we import directly the messages folder index.js file, as it exports {en:enMessage, fr:frMessages}, which matches expected shape."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stackCallingContext"),": an optional boolean, false by default. See note in parent section for more detail.")),Object(r.b)("p",null,"Example :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { I18nProvider } from '@regardsoss/i18n'\nimport messages from '../i18n' // will contain {en:..., fr:...}\n\nexport class ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <I18nProvider messages={messages}>\n        <ExampleComponent />\n      </I18nProvider>\n    )\n  }\n}\n")),Object(r.b)("p",null,"In the previous example, ExampleComponent will be able to access the i18n through context ",Object(r.b)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",Object(r.b)("strong",{parentName:"p"},"I18NProvider children"),", in the React meaning."),Object(r.b)("p",null,"For instance, in the following React tree, B and C can access messages context, but A can not."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<A>\n  <I18nProvider messages={messages}>\n      <B>\n        <C />\n      </B>\n  </I18nProvider>\n</A>\n")),Object(r.b)("h3",{id:"using-withi18n"},"Using withI18n"),Object(r.b)("p",null,"To use the REGARDS withI18n decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with I18NProvider properties described before):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"messages")," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stackCallingContext"))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { withI18n } from '@regardsoss/i18n'\nimport messages from '../i18n'\n\nclass ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <FormattedMessage id=\"example.message\" />\n    )\n  }\n}\n\nexport withI18n(messages)(ExampleContainer)\n")),Object(r.b)("p",null,"The use of ",Object(r.b)("inlineCode",{parentName:"p"},"withI18n(messages)(ExampleContainer)")," means that messages context will be defined for ExampleContainer and all its children. Therefore, if we define the ",Object(r.b)("inlineCode",{parentName:"p"},"contextTypes")," in this container, it will be able accessing the messages through its context."),Object(r.b)("p",null,"The instruction ",Object(r.b)("inlineCode",{parentName:"p"},"import messages from '../i18n")," corresponds to messages files import explained in the next section."),Object(r.b)("h3",{id:"i18n-messages-files"},"I18n messages files"),Object(r.b)("p",null,"As explained in the previous sections, the ",Object(r.b)("inlineCode",{parentName:"p"},"I18nProvider")," component or ",Object(r.b)("inlineCode",{parentName:"p"},"withI18n")," method expects to receive an object that maps a list of locales onto a list of messages. For each locale object, keys will be the message key and value the internationalized message.\nIn REGARDS, by design, each locale messages dictionnary is defined in a file named ",Object(r.b)("inlineCode",{parentName:"p"},"messages.{LOCALE}.i18n.js"),", where {LOCALE} is locale shorthand ('en', 'fr')."),Object(r.b)("p",null,"The example below illustrates a messages.en.i18n.js file content:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.en, // form messages, required when dealing with forms\n  'example.message' : 'Example message to display',\n  'other.example.message' : 'Other example message to display'\n}\n\nexport default messages\n")),Object(r.b)("p",null,"And here is the similar example for a messages.fr.i18n.js file content:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.fr, // form messages, required when dealing with forms\n  'example.message' : 'Message d\\'exemple \xe0 afficher',\n  'other.example.message' : 'Un autre message d\\'exemple \xe0 afficher'\n}\n\nexport default messages\n")),Object(r.b)("p",null,"To regroup the multiple language files, we usually create an index.js file as : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import en from './messages.en.i18n'\nimport fr from './messages.fr.i18n'\n\nmodule.exports = {\n  en,\n  fr,\n}\n\n")),Object(r.b)("p",null,"That file exports precisely what the ",Object(r.b)("inlineCode",{parentName:"p"},"messages")," parameter/property consumes when using withI18n or I18nProvider."),Object(r.b)("h3",{id:"use-parameter-in-messages"},"Use parameter in messages"),Object(r.b)("p",null,"With the reac-intl library, it is possible to use parameters in internationalizzed message.",Object(r.b)("br",{parentName:"p"}),"\n","Let's illustrate how to create it."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a parametrized message")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"'example.message.with.parameter': 'Hello {name} ?'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Provide parameter when rendering")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"  static contextTypes = {\n    ...i18nContextType,\n  }\n    \n  render() {\n    const name = 'john'\n    const message = this.context.intl.formatMessage({ id: 'example.message.with.parameter' }, { name })\n    return (\n      <div>\n        <span>{message}</span>\n        <FormattedMessage \n          id=\"example.message.with.parameter\"\n          values={{ name }} \n        />\n      </div>\n    )\n  }\n")),Object(r.b)("h3",{id:"more-informations"},"More informations"),Object(r.b)("p",null,"As the REGARDS I18nProvider is used only to provide messages to the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," library all\ncomponents that have the message context can use any ",Object(r.b)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," functionality. You can refer to the official documentation to see more functionalities like ",Object(r.b)("inlineCode",{parentName:"p"},"Date internationalization")," or ",Object(r.b)("inlineCode",{parentName:"p"},"HTML display"),"."))}p.isMDXComponent=!0},2703:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||r;return t?i.a.createElement(u,s(s({ref:n},c),{},{components:t})):i.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);