(window.webpackJsonp=window.webpackJsonp||[]).push([[1444],{1516:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),o=(a(0),a(2703)),i={id:"catalog-protocols",title:"Interoperability protocols",slug:"/user-guide/catalog/protocols/"},s={unversionedId:"user-documentation/6-catalog-consultation/catalog-protocols",id:"user-documentation/6-catalog-consultation/catalog-protocols",isDocsHomePage:!1,title:"Interoperability protocols",description:"Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos donn\xe9es dans le catalogue. Dans cette page, vous apprendrez \xe0 configurer un protocole de recherche standardis\xe9 bas\xe9 sur OpenSearch, pour effectuer des recherches sur votre catalogue m\xeame depuis l'ext\xe9rieur de REGARDS.",source:"@site/docs/user-documentation/6-catalog-consultation/protocols.md",slug:"/user-guide/catalog/protocols/",permalink:"/fr/docs/user-guide/catalog/protocols/",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/docs/user-documentation/6-catalog-consultation/protocols.md",version:"current",sidebar:"manual",previous:{title:"Toponyms server",permalink:"/fr/docs/user-guide/catalog/toponyms/"},next:{title:"Introduction",permalink:"/fr/docs/user-guide/data-services/introduction/"}},c=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Introduction',id:"introduction",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Opensearch',id:"opensearch",children:[{value:"Description",id:"description",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Utilisation",id:"utilisation",children:[]}]}],l={toc:c};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos donn\xe9es dans le catalogue. Dans cette page, vous apprendrez \xe0 configurer un protocole de recherche standardis\xe9 bas\xe9 sur OpenSearch, pour effectuer des recherches sur votre catalogue m\xeame depuis l'ext\xe9rieur de REGARDS.")),Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"catalog access menu",height:"200"}),Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/search-protocols-card.png",alt:"search protocols card",height:"200"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"introduction"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Introduction"),Object(o.b)("p",null,"La gestion des protocoles de recherche est accessible depuis la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols"))," du menu ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Catalog Access")),".\nCliquez sur le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"List"))," de la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols"))," ."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-update.png",alt:"protocol list",width:"800"})),Object(o.b)("p",null,"Vous constaterez qu'il existe d\xe9j\xe0 un protocole de recherche par d\xe9faut et non supprimable ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"REGARDS search protocol")),". Il est interne \xe0 REGARDS et utilis\xe9 pour faire toutes les recherches dans le catalogue, n\xe9anmoins, il n'est pas interop\xe9rable avec d'autres services web. Si vous avez besoin de le rendre compatible avec des services autres que REGARDS, suivez les \xe9tapes ci-dessous pour cr\xe9er un plugin de recherche bas\xe9 sur un protocole largement utilis\xe9 Opensearch."),Object(o.b)("p",null,"Si vous souhaitez ajouter un autre format de communication, vous pouvez d\xe9velopper votre propre plugin."),Object(o.b)("h2",{id:"opensearch"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Opensearch"),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Il est possible d'int\xe9rroger le catalogue REGARDS gr\xe2ce au protocol ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dewitt/opensearch"},"Opensearch"),". "),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Cliquez sur le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Add"))," de la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols")),".\nVous serez redirig\xe9 vers l'\xe9cran ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Configure search protocol")),", renseignez les param\xe8tres suivants :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Label"))," la description de votre protocole qui appara\xeetra dans la liste des protocoles"),Object(o.b)("li",{parentName:"ul"},"S\xe9lectionnez ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Use this search protocol for every search on catalog"))," pour que ce protocole soit utilis\xe9 sur l'ensemble des donn\xe9es du catalogue ou ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Use this search protocol only for search on the selected dataset")),", pour restreindre la recherche \xe0 un jeu de donn\xe9es en particulier. Dans ce cas, choisissez-le dans la liste d\xe9roulante."),Object(o.b)("li",{parentName:"ul"},"Cliquez sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Choose a search protocol"))," et appuyez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"opensearch"))," puis ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"New configuration")),", un nouveau bloc de configuration s'affichera.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-create.png",alt:"protocol create",width:"800"})),Object(o.b)("p",null,"Remplissez ensuite tous les champs relatifs au protocole Opensearch:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Pour plus d'informations sur le protocole ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Opensearch")),", lisez la description suivante sur ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md"},"github"),"."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Label"))," ",Object(o.b)("em",{parentName:"p"},"[Obligatoire]"),", le nom de protocole dans REGARDS. Ce nom sera utilis\xe9 comme discriminant dans l'url de recherche avec : http://regards/api/v1/rs-catalog/label/dataobjects/search.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Les param\xe8tres du search engine ",Object(o.b)("em",{parentName:"p"},"[Optionnel]")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Title")),", un nom identifiant votre search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Description")),", une br\xe8ve description du search engine. Elle doit faire 1024 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Email")),", le contact en charge du search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Tags"))," , une collection de mots utilis\xe9s pour identifier le search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Short name")),", un nom identifiant votre search engine. Il doit faire 16 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Long name")),", un nom identifiant votre search engine. Il doit faire 48 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Image")),", l'ic\xf4ne utilis\xe9e pour votre search engine. Quand cela est possible, ajoutez une image 16x16 de type image/x-icon (comme des /favicon.ico) et une image 64x64 de type image/jpeg ou image/png"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Attribution")),", les organisations que l'on peut citer pour dans le d\xe9veloppement du search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Path of the attribute in data model for the last update date")),", la derni\xe8re date de modification des m\xe9tadonn\xe9es")))),Object(o.b)("p",null,"Rendre les extensions compatibles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search time extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", rend le protocole compatible \xe0 l'extension standard Opensearch ",Object(o.b)("em",{parentName:"li"},"time"),". En cochant cette case, vous devrez renseigner la fa\xe7on de r\xe9cup\xe9rer les param\xe8tres ",Object(o.b)("em",{parentName:"li"},"start")," et ",Object(o.b)("em",{parentName:"li"},"end")," dans le tableau ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration")),". N'h\xe9sitez \xe0 vous appuyer sur les diff\xe9rents tooltips pour vous aidez."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search regards extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", tous les attributs autres que ceux standard au protocole Opensearch sont mapp\xe9s avec l'extension ",Object(o.b)("em",{parentName:"li"},"regards")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search media extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", ajoute des liens de r\xe9f\xe9rencement \xe0 tous les fichiers associ\xe9s aux donn\xe9es comme les thumbnails, les donn\xe9es brutes, les documents, etc.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Le protocole est compatible \xe0 l'extension geo par d\xe9faut depuis le chemin properties.geometry du mod\xe8le. N\xe9anmoins vous pouvez changer le chemin d'acc\xe8s en le param\xe9trant dans le tableau ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration"))))),Object(o.b)("p",null,"Exemple de configuration de l'extension ",Object(o.b)("em",{parentName:"p"},"time")," dans le tableau ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration"))," :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Depuis le tableau ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Parameters")),", appuyez sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Add"))," :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ajouter l'attribut start :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Opensearch name of the parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : start"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Name of the extension parameters"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : start"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Namespace of the extension parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : time"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Enable generation of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : False"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Limit number of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : -"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Full json path of the associated REGARDS attribute"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : properties.start_date"))))),Object(o.b)("li",{parentName:"ul"},"ajouter l'attribut end :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Opensearch name of the parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : end"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Name of the extension parameters"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : end"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Namespace of the extension parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : time"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Enable generation of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : False"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Limit number of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : -"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Full json path of the associated REGARDS attribute"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : properties.stop_date")))),Object(o.b)("p",null,"Une fois votre configuration termin\xe9e, appuyez sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Create"))," et retrouvez votre protocole dans la liste des protocoles de recherche."),Object(o.b)("p",null,"En cliquant sur le bouton info, vous pourrez acc\xe9der au endpoint de recherche afin de v\xe9rifier le fonctionnement du protocole et de r\xe9cup\xe9rer le descripteur."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-info.png",alt:"protocol info",width:"800"})),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Pensez \xe0 rendre vos jeux de donn\xe9es disponibles depuis l'ext\xe9rieur en autorisant l'acc\xe8s aux jeux de donn\xe9es et objets pour le groupe public. Pour plus d'informations, r\xe9f\xe9rez-vous \xe0 la page ",Object(o.b)("a",{parentName:"p",href:"../../data-organization/data-access-rights/"},"Configure data access rights")))),Object(o.b)("h3",{id:"utilisation"},"Utilisation"),Object(o.b)("p",null,"Une fois votre protocol de recherche opensearch configur\xe9, vous pouvez acc\xe9der dans un premier temps au fichier opensearchdescription.xml qui premet \xe0 tout syst\xe8me de conna\xeetre le moyen d'interroger le catalogue REGARDS avec l'url suivante en remplacant LABEL par le label de votre configuration."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://regards.fr/api/v1/rs-catalog/engines/LABEL/dataobjects/search/opensearchdescription.xml"},"http://regards.fr/api/v1/rs-catalog/engines/LABEL/dataobjects/search/opensearchdescription.xml")),Object(o.b)("p",null,"Ce fichier contient alors la descirption au format :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<OpenSearchDescription xmlns:parameters="http://a9.com/-/spec/opensearch/extensions/parameters/1.0/" xmlns="http://a9.com/-/spec/opensearch/1.1/">\n  <Description>description</Description>\n  <Contact>regards@c-s.fr</Contact>\n  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start_date={start_date}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/atom+xml" rel="results">\n    <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>\n    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\\.\\,\\-]*$" title="Defined by \'west, south, east, north\' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>\n    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>\n    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>\n    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>\n    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>\n  </Url>\n  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start_date={start_date}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/geo+json" rel="results">\n    <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>\n    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\\.\\,\\-]*$" title="Defined by \'west, south, east, north\' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>\n    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>\n    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>\n    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>\n    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>\n  </Url> \n  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start={time:start}&end={time:end}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/json" rel="results">\n    <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>\n    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>\n    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\\.\\,\\-]*$" title="Defined by \'west, south, east, north\' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>\n    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>\n    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>\n    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>\n    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>\n    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>\n  </Url>\n  <Query role="example" searchTerms="feature.properties.regards.tstart:{ISO-8601 date}"/>\n  <Developer>http://www.c-s.fr CS GROUP Team</Developer>\n  <AdultContent>false</AdultContent>\n  <Language>en</Language>\n  <InputEncoding>UTF-8</InputEncoding>\n  <OutputEncoding>UTF-8</OutputEncoding>\n</OpenSearchDescription>\n')),Object(o.b)("p",null,"Une fois ce descripteur obtenue vous pouvez requ\xeater le catalague REGARDS gr\xe2ce aux URL fournies et en utilisant les param\xe8tre de recherche d\xe9finis.\nVoici un exemple de requ\xeate et le r\xe9sultat associ\xe9 au format json:"),Object(o.b)("p",null,"http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?start_date=2010-01-01T00:00:00.000Z&maxRecords=2&page=0&scope=project"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n    "totalResults": 400155,\n    "startIndex": 0,\n    "itemsPerPage": 2,\n    "query": {\n      "searchFilters": {\n        "maxRecords": "2",\n        "page": "0",                                                                   \n      }\n    },\n    "description": "description",\n    "links": [\n      {\n        "rel": "self",\n        "type": "application/geo+json",\n        "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/search?maxRecords=2&page=0&size=2"\n      },\n      {\n        "rel": "next",\n        "type": "application/geo+json",\n        "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/search?maxRecords=2&page=-1&size=2"\n      }\n    ],\n    "id": "5306f265-3703-4e8f-8e56-e8751bc94318",\n    "title": "title"\n  },\n  "features": [\n    {\n      "id": "URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1",\n      "geometry": null,\n      "normalizedGeometry": null,\n      "properties": {\n        "providerId": "L2_HR_PIXC:6a92ad40-aed9-3108-bd08-4b46f5841004",\n        "links": [\n          {\n            "rel": "alternate",\n            "type": "application/geo+json",\n            "title": "GeoJson link for URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1",\n            "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1"\n          }\n        ],\n        "title": "L2_HR_PIXC:6a92ad40-aed9-3108-bd08-4b46f5841004"\n      },\n      "type": "Feature"\n    },\n    {\n      "id": "URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1",\n      "geometry": null,\n      "normalizedGeometry": null,\n      "properties": {\n        "providerId": "L2_HR_RiverTile:1964edb4-403b-36a1-881f-9fd3fc359b8e",\n        "links": [\n          {\n            "rel": "alternate",\n            "type": "application/geo+json",\n            "title": "GeoJson link for URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1",\n            "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1"\n          }\n        ],\n        "title": "L2_HR_RiverTile:1964edb4-403b-36a1-881f-9fd3fc359b8e"\n      },\n      "type": "Feature"\n    }\n  ],\n  "type": "FeatureCollection"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," : Vous remarquerez dans toutes les URL de recherche d\xe9finies dans le fichier descripteur un param\xe8tre : ",Object(o.b)("inlineCode",{parentName:"p"},"scope=project"),". Ce param\xe8tre doit \xeatre obligatoirement fourni pour pr\xe9ciser sur quel projet de l'instance REGARDS la recherche est r\xe9alis\xe9e."))}m.isMDXComponent=!0},2703:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(a),b=r,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?n.a.createElement(d,s(s({ref:t},l),{},{components:a})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);