(window.webpackJsonp=window.webpackJsonp||[]).push([[2394],{2464:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),s=(n(0),n(2701)),i={id:"depracated-installation-source",title:"Installation from source",slug:"/setup/deprecated/installation-source"},l={unversionedId:"setup/deprecated/depracated-installation-source",id:"version-1.4.0/setup/deprecated/depracated-installation-source",isDocsHomePage:!1,title:"Installation from source",description:"Here is the tutorial to compile the IzPack installer that you can use to install REGARDS on any server.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/deprecated/from-sources.md",slug:"/setup/deprecated/installation-source",permalink:"/fr/docs/1.4.0/setup/deprecated/installation-source",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/deprecated/from-sources.md",version:"1.4.0"},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Build",id:"build",children:[]},{value:"Install with root",id:"install-with-root",children:[]}],c={toc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Here is the tutorial to compile the IzPack installer that you can use to install REGARDS on any server.",Object(s.b)("br",{parentName:"p"}),"\n","If you do not care about compiling REGARDS by yourself, jump ","[to the next step]","."),Object(s.b)("h2",{id:"requirements"},"Requirements"),Object(s.b)("p",null,"Build relies on :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Maven 3.3+"),Object(s.b)("li",{parentName:"ul"},"OpenJDK 8"),Object(s.b)("li",{parentName:"ul"},"Groovy 2.4+"),Object(s.b)("li",{parentName:"ul"},"Node.js 8.10+"),Object(s.b)("li",{parentName:"ul"},"Npm 5.7.1+")),Object(s.b)("p",null,"Permissions :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You shall not use the root user while compiling REGARDS, as any other software.")),Object(s.b)("h2",{id:"build"},"Build"),Object(s.b)("p",null,"First, you need to compile every REGARDS server components and the HMI."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/RegardsOss/regards-bom.git\ncd regards-bom\nmvn install -DskipTests -P install\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-microservice.git\ncd regards-microservice\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-admin.git\ncd regards-admin\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-cloud.git\ncd regards-cloud\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-storage.git\ncd regards-storage\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-dam.git\ncd regards-dam\nmvn clean install -Dmaven.test.skip=true -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-catalog.git\ncd regards-catalog\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-access.git\ncd regards-access\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-ingest.git\ncd regards-ingest\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-dataprovider.git\ncd regards-dataprovider\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-order.git\ncd regards-order\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-frontend.git\ncd regards-frontend/webapp\nnpm install\nnpm run build:production\nnpm run build:plugins\ncd ../frontend-boot/\nmvn clean install -DskipTests -Dwebapp.dir=../webapp -P install\n")),Object(s.b)("p",null,"Now every REGARDS components are installed, the last step is to generate the REGARDS Izpack installer."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ../..\ngit clone https://github.com/RegardsOss/regards-deployment.git\ncd regards-deployment\nmvn install -DskipTests -P install,delivery\n")),Object(s.b)("p",null,"Inside the ",Object(s.b)("inlineCode",{parentName:"p"},"regards-deployment")," repository, grab the IzPack installer located in ",Object(s.b)("inlineCode",{parentName:"p"},"./izpack/installer/target/REGARDS-OSS-Installer.jar"),".",Object(s.b)("br",{parentName:"p"}),"\n","You will use that file ","[in the IzPack setup]"," to continue the installation."),Object(s.b)("h2",{id:"install-with-root"},"Install with root"),Object(s.b)("p",null,"There is no known issue with Java to compile with the root user.",Object(s.b)("br",{parentName:"p"}),"\n","If you want to run the regards-frontend compilation, you have to add the hereunder line in your .npmrc file.\nIf your root user does not have any .npmrc file yet, you can create it in your root user home directory. You can read ",Object(s.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/npmrc"},"npm documentation about npmrc here"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"unsafe-perm=true\n")))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);