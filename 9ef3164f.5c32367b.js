(window.webpackJsonp=window.webpackJsonp||[]).push([[1642],{1712:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(2701)),b={id:"frontend-introduction-eslint",title:"REGARDS ESLint rules",sidebar_label:"Lint",slug:"/development/frontend/introduction/eslint"},i={unversionedId:"development/frontend/frontend-introduction-eslint",id:"version-1.4.0/development/frontend/frontend-introduction-eslint",isDocsHomePage:!1,title:"REGARDS ESLint rules",description:"Presentation",source:"@site/versioned_docs/version-1.4.0/development/frontend/eslint-config-es6-rules.md",slug:"/development/frontend/introduction/eslint",permalink:"/docs/1.4.0/development/frontend/introduction/eslint",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/eslint-config-es6-rules.md",version:"1.4.0",sidebar_label:"Lint",sidebar:"version-1.4.0/dev",previous:{title:"Architecture overview",permalink:"/docs/1.4.0/development/frontend/introduction/architecture"},next:{title:"How to develop new features",permalink:"/docs/1.4.0/development/frontend/introduction/index"}},c=[{value:"Presentation",id:"presentation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Imported rules",id:"imported-rules",children:[{value:"eslint rules",id:"eslint-rules",children:[]},{value:"eslint-config-airbnb",id:"eslint-config-airbnb",children:[]},{value:"plugin:react",id:"pluginreact",children:[]},{value:"plugin:react-perf",id:"pluginreact-perf",children:[]},{value:"plugin:lodash",id:"pluginlodash",children:[]},{value:"plugin:promise",id:"pluginpromise",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"presentation"},"Presentation"),Object(l.b)("p",null,"The module ",Object(l.b)("inlineCode",{parentName:"p"},"@regardsoss/eslint-config-es6-rules")," (webapp/eslint-config-es6-rules/) provides REGARDS' ESLint configuration. It is referenced by root ",Object(l.b)("inlineCode",{parentName:"p"},"webapp/.eslintrc")," file, which is the root ESLint configuration file for REGARDS front-end project."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"We export here under ESLint configurations for your usage."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rules package"),Object(l.b)("th",{parentName:"tr",align:null},"import mode"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eslint"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"recommended")),Object(l.b)("td",{parentName:"tr",align:null},"Standard Javascript rules provided by eslint")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eslint-config-airbnb"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all")),Object(l.b)("td",{parentName:"tr",align:null},"Additional standard and ES6 Javascript rules")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plugin:react"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"recommended")),Object(l.b)("td",{parentName:"tr",align:null},"Specific rules for react library")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plugin:react-perf"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"recommended")),Object(l.b)("td",{parentName:"tr",align:null},"Specific good practices rules for react library")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plugin:lodash"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"recommended")),Object(l.b)("td",{parentName:"tr",align:null},"Specific rules for lodash library")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plugin:promise"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"recommended")),Object(l.b)("td",{parentName:"tr",align:null},"Enforce best practices for JavaScript promises")))),Object(l.b)("p",null,"To use our configuration package add the code here under to your ",Object(l.b)("inlineCode",{parentName:"p"},".eslintrc")," configuration file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "parser": "babel-eslint",\n  "extends": [\n    "@regardsoss/eslint-config-es6-rules"\n  ]\n}\n')),Object(l.b)("p",null,"You need to add the following dependencies to your package.json : "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "eslint": "^5.9.0",\n  "eslint-config-airbnb": "~17.1.0",\n  "eslint-plugin-import": "~2.14.0",\n  "eslint-plugin-jsx-a11y": "~6.1.2",\n  "eslint-plugin-lodash": "^3.1.0",\n  "eslint-plugin-mocha": "^5.2.0",\n  "eslint-plugin-promise": "^4.0.1",\n  "eslint-plugin-react": "~7.11.1",\n  "eslint-plugin-react-perf": "^2.0.9"\n}\n')),Object(l.b)("h2",{id:"imported-rules"},"Imported rules"),Object(l.b)("p",null,"In the next sections you can find for each rules package the custom configuration made for REGARDS project.\nBy default, all rules are imported without modification from each package the references rules here are disabled or modified."),Object(l.b)("h3",{id:"eslint-rules"},"eslint rules"),Object(l.b)("p",null,"To see all javascript rules set by eslint : ",Object(l.b)("a",{parentName:"p",href:"http://eslint.org/docs/rules/"},"http://eslint.org/docs/rules/")),Object(l.b)("p",null,"Special configuration for eslint rules :"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rule"),Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"func-names"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"Allow anonymous functions")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"global-require"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max-len"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-console"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spaced-comment"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-unused-vars"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"Do not check arguments. Ignore unused variable on functions arguments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-confusing-arrow"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-warning-comments"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"Raise a warning if a TODO or FIXME is find in comments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"semi"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"Disallows semicolons as the end of statements (except to disambiguate statements beginning with [, (, /, +, or -)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-mixed-operators"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-destructuring"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function-paren-newline"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"eslint-config-airbnb"},"eslint-config-airbnb"),Object(l.b)("p",null,"To see all javascript rules set by eslint-config-airbnb : ",Object(l.b)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"https://github.com/airbnb/javascript")),Object(l.b)("p",null,"Special configuration for eslint-config-airbnb rules :"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rule"),Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/no-extraneous-dependencies"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/no-named-as-default"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/no-named-as-default-member"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/prefer-default-export"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/named"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import/no-commonjs"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"Prevent the usage of CommonJS, ignore for node")))),Object(l.b)("h3",{id:"pluginreact"},"plugin:react"),Object(l.b)("p",null,"To see all javascript rules set by plugin:react : ",Object(l.b)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react"},"https://github.com/yannickcr/eslint-plugin-react")),Object(l.b)("p",null,"Special configuration for plugin:react rules :"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rule"),Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-es6-class"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"require-extension"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"require-default-props"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-stateless-function"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"react/display-name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"Only detect sipaly names of components during debug")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jsx-uses-react"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jsx-uses-vars"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"react-in-jsx-scope"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jsx-no-undef"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"destructuring-assignment"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jsx-wrap-multilines"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-access-state-in-setstate"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jsx-closing-tag-location"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"pluginreact-perf"},"plugin:react-perf"),Object(l.b)("p",null,"To see all javascript rules set by plugin:react-perf : ",Object(l.b)("a",{parentName:"p",href:"https://github.com/cvazac/eslint-plugin-react-perf"},"https://github.com/cvazac/eslint-plugin-react-perf")),Object(l.b)("p",null,"Special configuration for plugin:react-perf rules : None"),Object(l.b)("h3",{id:"pluginlodash"},"plugin:lodash"),Object(l.b)("p",null,"To see all javascript rules set by plugin:lodash : ",Object(l.b)("a",{parentName:"p",href:"https://github.com/wix/eslint-plugin-lodash"},"https://github.com/wix/eslint-plugin-lodash")),Object(l.b)("p",null,"Special configuration for plugin:lodash rules : "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rule"),Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"import-scope"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"For single method imports")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-noop"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"Disable useless rule (_.noop instead of empty annonnymous function)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-lodash-method"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"This rule is not satisfying")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prefer-constant"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"We do not use lodash constants factory")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prop-shorthand"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"Not so readable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"matches-prop-shorthand"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"We prefer the explicit declaration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-exclusive-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max-top-level-suites"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"handle-done-callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-top-level-hooks"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-return-and-callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-sibling-hooks"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-global-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-hooks-for-single-case"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"All React tests contains before and after whether having 1 or more tests")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-mocha-arrows"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mocha/no-nested-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null},"We do not use mocha context so we can use lambdas")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mocha/no-skipped-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mocha/no-nested-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mocha/no-identical-title"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Activated")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mocha/no-synchronous-tests"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"We wrote sync tests")))),Object(l.b)("h3",{id:"pluginpromise"},"plugin:promise"),Object(l.b)("p",null,"To see all javascript rules set by plugin:promise : ",Object(l.b)("a",{parentName:"p",href:"https://github.com/xjamundx/eslint-plugin-promise"},"https://github.com/xjamundx/eslint-plugin-promise")),Object(l.b)("p",null,"Special configuration for plugin:promise rules : "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"rule"),Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-callback-in-promise"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"We call done from Mocha inside async tests")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"no-nesting"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"Rule is not adequate without async / await")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"avoid-new"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"This is handy to create custom promises!")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"catch-or-return"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null},"We do not always return a promise on react component since most of the time nobody consumes them")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"always-return"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Disabled")),Object(l.b)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),o=p(n),u=a,s=o["".concat(b,".").concat(u)]||o[u]||m[u]||l;return n?r.a.createElement(s,i(i({ref:t},d),{},{components:n})):r.a.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var d=2;d<l;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);