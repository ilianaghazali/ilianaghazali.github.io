(window.webpackJsonp=window.webpackJsonp||[]).push([[2235],{2307:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(2703)),i={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-gson",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-gson",isDocsHomePage:!1,title:"GSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/gson-starter.md",slug:"/development/backend/framework/starters/gson/",permalink:"/docs/1.4.0/development/backend/framework/starters/gson/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/gson-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"GeoJSON starter",permalink:"/docs/1.4.0/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/docs/1.4.0/development/backend/framework/starters/hateoas/"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",children:[]},{value:"Register a type adapter",id:"register-a-type-adapter",children:[]},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",children:[]},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",children:[]},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",children:[]},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",children:[]},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",children:[]}]}],s={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter is making easier the use of GSON with new features."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n")),Object(o.b)("p",null,"To avoid conflict between Jackson and GSON with SPRING, set the following property :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"spring.http.converters.preferred-json-mapper=gson\n")),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Starter autoconfigures a ",Object(o.b)("strong",{parentName:"p"},"GsonHttpMessageConverter")," automatically injected in available HTTP message converters."),Object(o.b)("p",null,"Il autoconfigures a ",Object(o.b)("inlineCode",{parentName:"p"},"Gson")," instance with default adapters and filters plus the introspected ones."),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"create-type-adapters-or-adapter-factories"},"Create type adapters or adapter factories"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/gson"},"GSON reference project"),"."),Object(o.b)("h3",{id:"register-a-type-adapter"},"Register a type adapter"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapter")," with a ",Object(o.b)("strong",{parentName:"p"},"no arg constructor")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-as-a-component"},"Register a type adapter as a component"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterBean")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-factory"},"Register a type adapter factory"),Object(o.b)("p",null,"Just create a class implementing ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," with a ",Object(o.b)("strong",{parentName:"p"},"no arg constructor"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-factory-as-a-component"},"Register a type adapter factory as a component"),Object(o.b)("p",null,"Just create a class implementing ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"Component"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),Object(o.b)("h3",{id:"work-with-polymorphic-classes"},"Work with polymorphic classes"),Object(o.b)("h4",{id:"register-a-gsonable-polymorphic-factory"},"Register a ",Object(o.b)("inlineCode",{parentName:"h4"},"Gsonable")," polymorphic factory"),Object(o.b)("p",null,"Just annotate the top interface or abstract class of a hierarchical set of classes with ",Object(o.b)("inlineCode",{parentName:"p"},"Gsonable"),". Under the hood, the starter will register a dynamically created ",Object(o.b)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory"),". You optionnaly can specify the discriminator name in ",Object(o.b)("inlineCode",{parentName:"p"},"Gsonable")," and the discriminator values on sub types through ",Object(o.b)("inlineCode",{parentName:"p"},"GsonDiscriminator"),"."),Object(o.b)("p",null,"During GSON serialization, factory will inject a discriminator property whose name is either ",Object(o.b)("inlineCode",{parentName:"p"},"@type@")," or the specified one and the value is either the class name or the specified discriminator value.",Object(o.b)("br",{parentName:"p"}),"\n","During deserialization, factory build the target object according to its discriminator value."),Object(o.b)("h4",{id:"register-a-custom-polymorphic-factory"},"Register a custom polymorphic factory"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory")," and annotated with either ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," or ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n')),Object(o.b)("h3",{id:"exclude-field-from-serialization"},"Exclude field from serialization"),Object(o.b)("p",null,"Just annotate field with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonIgnore")," to exclude a particular field."))}l.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);