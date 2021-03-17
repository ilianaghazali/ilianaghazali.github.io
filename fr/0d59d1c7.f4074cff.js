(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(2701)),i={id:"swarm-quick-setup",title:"Quick setup",slug:"/setup"},s={unversionedId:"setup/swarm-quick-setup",id:"version-1.4.0/setup/swarm-quick-setup",isDocsHomePage:!1,title:"Quick setup",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/swarm-quick-setup.md",slug:"/setup",permalink:"/fr/docs/1.4.0/setup",editUrl:"https://github.com/ilianaghazali/ilianaghazali.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/swarm-quick-setup.md",version:"1.4.0",sidebar:"version-1.4.0/install",next:{title:"REGARDS Command line interface",permalink:"/fr/docs/1.4.0/setup/swarm/cli"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create your inventory",id:"create-your-inventory",children:[{value:"Create your hosts file",id:"create-your-hosts-file",children:[]},{value:"Create your group_vars folder",id:"create-your-group_vars-folder",children:[]}]},{value:"Login to Docker registry",id:"login-to-docker-registry",children:[]},{value:"Install the stack",id:"install-the-stack",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This section introduce how to deploy a REGARDS stack thanks to ansible on a docker swarm environment.",Object(o.b)("br",{parentName:"p"}),"\n","All REGARDS docker images are available on our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages?repo_name=regards-deployment"},"github repository"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As we install REGARDS docker swarm in a securized way, the docker configuration is rewritten by our ansible playbook on every nodes configured."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Docker swarm installation of REGARDS is available for CentOS, Ubuntu and fedora linux distributions."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install Ansible version ",Object(o.b)("inlineCode",{parentName:"li"},"2.6.2")," at least ",Object(o.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"},"docs.ansible.com")),Object(o.b)("li",{parentName:"ol"},"Download ",Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/RegardsOss.github.io/releases/download/V1.2.1/regards-playbook.zip"},"regards-playbook"),".")),Object(o.b)("h2",{id:"create-your-inventory"},"Create your inventory"),Object(o.b)("h3",{id:"create-your-hosts-file"},"Create your hosts file"),Object(o.b)("p",null,"Once you download and extract the ",Object(o.b)("inlineCode",{parentName:"p"},"regards-playbook"),", you need to create an inventory that saves the configuration of your setup. Create a folder inside the ",Object(o.b)("inlineCode",{parentName:"p"},"regards-playbook/inventories/"),", using by exemple a subset of the server hostname you want to install REGARDS on."),Object(o.b)("p",null,"Let's suppose we want to create an inventory on a computer named ",Object(o.b)("inlineCode",{parentName:"p"},"regards-cnes.host.com")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir regards-playbook/inventories/regards-cnes\ncd regards-playbook/inventories/regards-cnes\n")),Object(o.b)("p",null,"Let's create an ",Object(o.b)("inlineCode",{parentName:"p"},"hosts")," file that defines nodes that will be used during this deployment."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cat >> hosts << FIN_CAT\n[ansible_host]\nansible ansible_connection=local ansible_python_interpreter='{{ansible_playbook_python}}'\n\n[ansible_host:vars]\ngen_certificates_group_name=docker_nodes\n\n[regards_nodes]\n[1] Keep next line if you run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_connection=local\n[2] Keep next line if you don't run Ansible on the server where REGARDS will be installed. Do not edit ansible_host value.\nregards-master ansible_host='{{ global_stack.master_node_host_name }}' ansible_user=XXX ansible_password=XXX\n[3] Keep next lines if you have more than 1 server.\nregards-slave-1 ansible_host=host-server2 ansible_user=XXX ansible_password=XXX\nregards-slave-2 ansible_host=host-server3 ansible_user=XXX ansible_password=XXX\n[4] You can omit ansible_user=XXX and ansible_password=XXX\" if you don't need user/password to log on that node\n\n\n[master]\nregards-master\n\n[slaves]\n[5] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[docker_nodes]\nregards-master\n[6] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\n\n[swarm_manager]\nregards-master\n\n[swarm_workers]\n[7] Removes the next line if you have only one server, or adapt\nregards-slave-[1:2]\nFIN_CAT\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Variable"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ansible_host")),Object(o.b)("td",{parentName:"tr",align:"left"},"hostname of the server")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ansible_user")),Object(o.b)("td",{parentName:"tr",align:"left"},"user login to log on by ssh to configure & install")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ansible_password")),Object(o.b)("td",{parentName:"tr",align:"left"},"user password to log on by ssh to configure & install")))),Object(o.b)("p",null,"Remove all lines begining with ",Object(o.b)("inlineCode",{parentName:"p"},"[1-7]")," and make appropriate changes following your needs. You have two exemples provided inside regards-playbook: ",Object(o.b)("inlineCode",{parentName:"p"},"inventories/demo/hosts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"inventories/demo/hosts"),"."),Object(o.b)("h3",{id:"create-your-group_vars-folder"},"Create your group_vars folder"),Object(o.b)("p",null,"Now you've configured where you want to install REGARDS, you need to configure what and how you want to install, using a folder named ",Object(o.b)("inlineCode",{parentName:"p"},"group_vars")," inside your inventory."),Object(o.b)("h4",{id:"copy-an-existing-group_vars-folder"},"Copy an existing group_vars folder"),Object(o.b)("p",null,"First, you need to initialise the ",Object(o.b)("inlineCode",{parentName:"p"},"group_vars")," folder using one of these commands, depending of the number of servers you have :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# cd regards-playbook/inventories/regards-cnes\n# Install REGARDS on one server - using demo inventory\ncp -R ../../demo/group_vars ./\n\n# Install REGARDS on several servers - using multihosts inventory\ncp -R ../../multihosts/group_vars ./\n")),Object(o.b)("p",null,"Following chapter explains how to adapt these configurations to your needs, dependending the inventory you choosed. You can find ",Object(o.b)("a",{parentName:"p",href:"setup/swarm/advanced-setup"},"here")," the full list of possibilities that our playbook offers."),Object(o.b)("h4",{id:"customise-a-demos-based-inventory"},"Customise a demo's based inventory"),Object(o.b)("p",null,"Edit the file ",Object(o.b)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Variable"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),Object(o.b)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",Object(o.b)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.workdir")),Object(o.b)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),Object(o.b)("td",{parentName:"tr",align:"left"},"Docker working directory")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),Object(o.b)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",Object(o.b)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_regards.version")),Object(o.b)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")))),Object(o.b)("h4",{id:"customise-a-multihostss-based-inventory"},"Customise a multihosts's based inventory"),Object(o.b)("p",null,"Edit the file ",Object(o.b)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/all/main.yml")," with :"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Variable"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.master_node_host_name")),Object(o.b)("td",{parentName:"tr",align:"left"},"Server hostname where the regards stack is installed. For local installation you can use the ",Object(o.b)("inlineCode",{parentName:"td"},"hostname")," unix command to find it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.workdir")),Object(o.b)("td",{parentName:"tr",align:"left"},"REGARDS swarm stack install directory")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.docker.workdir")),Object(o.b)("td",{parentName:"tr",align:"left"},"Docker working directory")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_stack.docker.network_interface")),Object(o.b)("td",{parentName:"tr",align:"left"},"Name of the network interface used to access to your server. For local installation you can use the ",Object(o.b)("inlineCode",{parentName:"td"},"ifconfig")," unix command to find it")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"global_regards.version")),Object(o.b)("td",{parentName:"tr",align:"left"},"Version of REGARDS to install")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In multi nodes deployment mode, the ",Object(o.b)("inlineCode",{parentName:"p"},"global_stack.workdir")," value have to be the same accessible directory on each nodes (e.g. NFS mount)."))),Object(o.b)("h2",{id:"login-to-docker-registry"},"Login to Docker registry"),Object(o.b)("p",null,"We're currently storing our Docker image on Github. To be able to fetch them, you require an access token."),Object(o.b)("p",null,"Visit ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/configuring-docker-for-use-with-github-packages#authenticating-with-a-personal-access-token"},"this link")," and ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"this link")," to get an overview on how to let your Docker engine be able to fetch REGARDS images."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you do not fetch image directly on Github, adapt this step to your environment, as you may need to login on your private Docker registry."))),Object(o.b)("h2",{id:"install-the-stack"},"Install the stack"),Object(o.b)("p",null,"When configuration has been saved, you need to run the following command :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# cd regards-playbook/\nansible-playbook -i inventories/<inventory name> setup-vm.yml <additional parameters>\n\n# Connect threw SSH to your master node and login to Github or adapt it to your environment\n# cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u <MY USERNAME> --password-stdin\n\n# If you are installing locally REGARDS (ansible_connection=local inside inventories/<inventory name>/hosts),\n# the setup-vm.yml has added you into a group but it won't be effective until you've restarted your session.\n# Ensures the command id return you the group `dockermapgid` or the next playbook will timeout\n\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n")),Object(o.b)("p",null,"With :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<inventory name>")," is the name of the inventory you've created"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<additional parameters>")," can be replaced by ",Object(o.b)("inlineCode",{parentName:"li"},"--ask-become-pass")," if you need to give the password when you switch to root, empty otherwise"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"[setup-vm|regards].yml")," are playbook you're executing, here we want to install SWARM then REGARDS.")),Object(o.b)("p",null,"These commands will succeed with one of these lovely message :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"[..]\nPLAY RECAP *******************************************************************************************************\nregards-master                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nregards-slave                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\n")),Object(o.b)("p",null,"With an exemple :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# cd regards-playbook/\n> ansible-playbook -i inventories/regards-cnes setup-vm.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=158 changed=8 unreachable=0 failed=0 skipped=22 rescued=0 ignored=0\nregards-slave-1  : ok=86 changed=8 unreachable=0 failed=0 skipped=4 rescued=0 ignored=0\n\n# I don't need to connect to the remote VM using SSH as:\n# - on my specific setup, Docker images are stored on a private repository\n# - the playbook is runned from my desktop and not directly on regards-master\n\n> ansible-playbook -i inventories/regards-cnes regards.yml --ask-become-pass\n[..]\nPLAY RECAP *******************************************************************************************************\nregards-master   : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\nregards-slave-1  : ok=23 changed=8 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Seeing red lines is normal, as some tasks produce error that can safely ignored if they do not block the playbook execution. What really matters is ",Object(o.b)("inlineCode",{parentName:"p"},"failed=0")," in the recap."))),Object(o.b)("p",null,"Congratulations, your REGARDS installation is over. System is starting and will be up soon. You can access web interfaces at :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instance administration : http://<master_node_host_name>"),Object(o.b)("li",{parentName:"ul"},"Administration : http://<master_node_host_name>/admin/demo"),Object(o.b)("li",{parentName:"ul"},"Portal : http://<master_node_host_name>"),Object(o.b)("li",{parentName:"ul"},"User interface : http://<master_node_host_name>/user/demo")),Object(o.b)("p",null,"You can now monitor and administrate the deployed stack thanks to cli commands as explained at ",Object(o.b)("a",{parentName:"p",href:"setup/swarm/cli"},"Administration")))}b.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(u,s(s({ref:t},c),{},{components:n})):r.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);