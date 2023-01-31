"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6,sidebar_label:"Ethermint Tutorial",description:"Build a sovereign rollup with Ethermint, Celestia and Rollkit"},r="Ethermint",l={unversionedId:"tutorials/ethermint",id:"tutorials/ethermint",title:"Ethermint",description:"Build a sovereign rollup with Ethermint, Celestia and Rollkit",source:"@site/docs/tutorials/ethermint.md",sourceDirName:"tutorials",slug:"/tutorials/ethermint",permalink:"/pr-preview/pr-78/docs/tutorials/ethermint",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/ethermint.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Ethermint Tutorial",description:"Build a sovereign rollup with Ethermint, Celestia and Rollkit"},sidebar:"tutorialSidebar",previous:{title:"CosmWasm Tutorial",permalink:"/pr-preview/pr-78/docs/tutorials/cosmwasm"}},s={},u=[{value:"Ethermint Dependencies",id:"ethermint-dependencies",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Setting Up Your Ethermint Node",id:"setting-up-your-ethermint-node",level:3},{value:"Golang Dependency",id:"golang-dependency",level:3},{value:"Rollkit installation",id:"rollkit-installation",level:2},{value:"ethermintd Installation",id:"ethermintd-installation",level:3},{value:"Setting Up Your Environment for Ethermint on Celestia",id:"setting-up-your-environment-for-ethermint-on-celestia",level:2},{value:"Run A Celestia Light Node",id:"run-a-celestia-light-node",level:3},{value:"Instantiating the Ethermint Rollup",id:"instantiating-the-ethermint-rollup",level:3},{value:"Deploy A Solidity Smart Contract on Ethermint Sovereign Rollup with Foundry",id:"deploy-a-solidity-smart-contract-on-ethermint-sovereign-rollup-with-foundry",level:2},{value:"About Foundry",id:"about-foundry",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Initialize development environment",id:"initialize-development-environment",level:4},{value:"Updating the contract and tests",id:"updating-the-contract-and-tests",level:4},{value:"Updating the deployment script",id:"updating-the-deployment-script",level:4},{value:"Deploying locally",id:"deploying-locally",level:4},{value:"Deploying to the Ethermint Sovereign Rollup",id:"deploying-to-the-ethermint-sovereign-rollup",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethermint"},"Ethermint"),(0,a.kt)("p",null,"Ethermint is a Comsos-SDK library that integrates an EVM compiler\nfrom Geth."),(0,a.kt)("p",null,"This would allow you to deploy Solidity or Vyper Ethereum smart contracts\nin order to build Ethereum-based applications."),(0,a.kt)("p",null,"In this tutorial, we will be going over how to use Rollkit to deploy\nan Ethereum-based sovereign rollup that uses Cosmos-SDK and Ethermint."),(0,a.kt)("p",null,"You can learn more about Ethermint ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethermint.zone"},"here"),"."),(0,a.kt)("admonition",{title:"note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial will explore developing with Rollkit,\nwhich is still in Alpha stage. If you run into bugs, please write a Github\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/issues/new"},"Issue ticket"),"\nor let us know in our ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/rollkit"},"Telegram"),'.\nFurthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.')),(0,a.kt)("admonition",{title:"caution",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Mocha Testnet.\nIf you choose to use Arabica Devnet,\nyou will need to modify the script manually.")),(0,a.kt)("p",null,"In this tutorial, we will go over the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ethermint-dependencies"},"Setting Up Your Ethermint Dependencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rollkit-installation"},"Setting Up Rollkit on Ethermint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-your-environment-for-ethermint-on-celestia"},"Instantiate a local network for your Ethermint chain connected to Celestia")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#deploy-a-solidity-smart-contract-on-ethermint-sovereign-rollup-with-foundry"},"Deploying an Ethereum smart contract on your Ethermint Rollup with Foundry"))),(0,a.kt)("h2",{id:"ethermint-dependencies"},"Ethermint Dependencies"),(0,a.kt)("p",null,"This section will guide you through installing the dependencies\nyou need for the deployment process of an Ethermint Sovereign Rollup\non Celestia."),(0,a.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,a.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,a.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,a.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,a.kt)("h3",{id:"setting-up-your-ethermint-node"},"Setting Up Your Ethermint Node"),(0,a.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,a.kt)("h3",{id:"golang-dependency"},"Golang Dependency"),(0,a.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,a.kt)("p",null,"If you are using a Linux distribution, you can install Golang\nby following our tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/environment#install-golang"},"here"),"."),(0,a.kt)("h2",{id:"rollkit-installation"},"Rollkit installation"),(0,a.kt)("h3",{id:"ethermintd-installation"},"ethermintd Installation"),(0,a.kt)("p",null,"Here, we are going to pull down the ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermint")," from the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/ethermint"},"Celestia repository"),".\nWe will install Rollkit to this version of Ethermint.\nRollkit is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's Data Availability network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/celestiaorg/ethermint.git\ncd ethermint\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.7-rollmint-v0.5.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221013213714-8be9b54c8c21\ngo mod tidy && go build ./...\nmake install\n")),(0,a.kt)("p",null,"You can check if ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermintd")," is installed by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ethermintd\n")),(0,a.kt)("h2",{id:"setting-up-your-environment-for-ethermint-on-celestia"},"Setting Up Your Environment for Ethermint on Celestia"),(0,a.kt)("p",null,"Now the ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermintd")," binary is built, we need to setup a local network\nthat communicates between ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermintd")," and Rollkit."),(0,a.kt)("h3",{id:"run-a-celestia-light-node"},"Run A Celestia Light Node"),(0,a.kt)("p",null,"All sovereign rollups need to submit their transaction data to\nCelestia."),(0,a.kt)("p",null,"Here, we must first setup a Celestia Light Node with testnet tokens."),(0,a.kt)("p",null,"You can do this by following this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"here"),"."),(0,a.kt)("h3",{id:"instantiating-the-ethermint-rollup"},"Instantiating the Ethermint Rollup"),(0,a.kt)("p",null,"With a Celestia Light Node running in one terminal session,\nwe can proceed to generate the Ethermint rollup."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermint")," directory, we have a helpful bash script that\nallows you to instantiate a local Ethermint sovereign rollup on Celestia."),(0,a.kt)("admonition",{title:"caution",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you are on macOS, you will need to install md5sha1sum before starting your\nrollup:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install md5sha1sum\n"))),(0,a.kt)("p",null,"Run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ethermint\nbash init.sh\n")),(0,a.kt)("p",null,"This bash script does everything needed to initialize your Ethermint\nrollup."),(0,a.kt)("p",null,"First, we need to setup some environment variables."),(0,a.kt)("admonition",{title:"Networks",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The commands below are for Mocha. If you're using Arabica, you'll need to\nreplace the RPC endpoint with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/arabica-devnet#rpc-endpoints"},"one for Arabica"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\nDA_BLOCK_HEIGHT=$(curl https://rpc-mocha.pops.one/block | jq -r '.result.block.header.height')\n")),(0,a.kt)("p",null,"If you are running this on Mocha Testnet or Arabica Devnet, you need to run your\nlight node with an account that has Mocha or Arabica tokens. Visit the faucet\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/arabica-devnet#arabica-devnet-faucet"},"here"),"."),(0,a.kt)("p",null,"With this setup complete, we can now start our Ethermint Rollup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ethermintd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000,"fee":6000}\' --rollmint.namespace_id $NAMESPACE_ID --rollmint.da_start_height $DA_BLOCK_HEIGHT \n')),(0,a.kt)("p",null,"You should start seeing logs about the chain starting.\nThey will look similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'1:27AM INF Unlocking keyring\n1:27AM INF starting ABCI with Tendermint\n1:27AM INF service start impl=EventBus module=events msg={}\n1:27AM INF service start impl=PubSub module=pubsub msg={}\nbadger 2022/11/23 01:27:54 INFO: All 0 tables opened in 0s\nbadger 2022/11/23 01:27:54 INFO: Discard stats nextEmptySlot: 0\nbadger 2022/11/23 01:27:54 INFO: Set nextTxnTs to 0\n1:27AM INF service start impl=IndexerService module=txindex msg={}\n1:27AM INF WARNING: using default DA block time DABlockTime=30000 module=BlockManager\n1:27AM INF initializing blockchain state from genesis.json\n1:27AM INF created new capability module=ibc name=ports/transfer\n1:27AM INF port binded module=x/ibc/port port=transfer\n1:27AM INF claimed capability capability=1 module=transfer name=ports/transfer\n1:27AM INF asserting crisis invariants inv=1/11 module=x/crisis name=gov/module-account\n1:27AM INF asserting crisis invariants inv=2/11 module=x/crisis name=staking/module-accounts\n1:27AM INF asserting crisis invariants inv=3/11 module=x/crisis name=staking/nonnegative-power\n1:27AM INF asserting crisis invariants inv=4/11 module=x/crisis name=staking/positive-delegation\n1:27AM INF asserting crisis invariants inv=5/11 module=x/crisis name=staking/delegator-shares\n1:27AM INF asserting crisis invariants inv=6/11 module=x/crisis name=bank/nonnegative-outstanding\n1:27AM INF asserting crisis invariants inv=7/11 module=x/crisis name=bank/total-supply\n1:27AM INF asserting crisis invariants inv=8/11 module=x/crisis name=distribution/nonnegative-outstanding\n1:27AM INF asserting crisis invariants inv=9/11 module=x/crisis name=distribution/can-withdraw\n1:27AM INF asserting crisis invariants inv=10/11 module=x/crisis name=distribution/reference-count\n1:27AM INF asserting crisis invariants inv=11/11 module=x/crisis name=distribution/module-account\n1:27AM INF asserted all invariants duration=3.783918 height=0 module=x/crisis\n1:27AM INF service start impl=RPC msg={}\n1:27AM INF service start impl=Node msg={}\n1:27AM INF serving HTTP listen address={"IP":"127.0.0.1","Port":26657,"Zone":""}\n1:27AM INF starting P2P client\n1:27AM INF listening on address=/ip4/143.244.145.92/tcp/26656/p2p/12D3KooWCrCqYheUBURCzzUqgxWFVFvFYPJ6nonTPN9uVQ4cXK5H module=p2p\n1:27AM INF listening on address=/ip4/127.0.0.1/tcp/26656/p2p/12D3KooWCrCqYheUBURCzzUqgxWFVFvFYPJ6nonTPN9uVQ4cXK5H module=p2p\n1:27AM INF no seed nodes - only listening for connections module=p2p\n1:27AM INF starting Celestia Data Availability Layer Client baseURL=http://localhost:26659 module=da_client\n1:27AM INF working in aggregator mode block time=30000\n1:27AM INF Creating and publishing block height=1 module=BlockManager\n1:27AM INF minted coins from module account amount=2059726034250856481aphoton from=mint module=x/bank\n1:27AM INF submitting block to DA layer height=1 module=BlockManager\n1:28AM INF Starting JSON-RPC server address=0.0.0.0:8545\n1:28AM INF Starting JSON WebSocket server address=0.0.0.0:8546\n1:28AM INF successfully submitted rollmint block to DA layer daHeight=25422 module=BlockManager rollmintHeight=1\n1:28AM INF commit synced commit=436F6D6D697449447B5B323130203138352031373920362035322031333820373020313032203135322038302032323920313232203132342036332031382032313920313039203337203832203631203334203139302031323520393020323133203835203232382032323420323232203134203739203131305D3A317D\n1:28AM INF indexed block height=1 module=txindex\n1:28AM INF Creating and publishing block height=2 module=BlockManager\n1:28AM INF minted coins from module account amount=2059726403014551280aphoton from=mint module=x/bank\n1:28AM INF submitting block to DA layer height=2 module=BlockManager\n1:28AM INF successfully submitted rollmint block to DA layer daHeight=25423 module=BlockManager rollmintHeight=2\n1:28AM INF commit synced commit=436F6D6D697449447B5B3630203231332038372032313820383920313920323034203230322031363320383120323235203235352036352032323820313530203232392032333320323139203233322032343420313334203337203134342031303320313634203138382031393720323339203230342032303120323138203130325D3A327D\n1:28AM INF indexed block height=2 module=txindex\n1:28AM INF Creating and publishing block height=3 module=BlockManager\n1:28AM INF minted coins from module account amount=2059726771778267119aphoton from=mint module=x/bank\n1:28AM INF submitting block to DA layer height=3 module=BlockManager\n1:29AM INF successfully submitted rollmint block to DA layer daHeight=25424 module=BlockManager rollmintHeight=3\n1:29AM INF commit synced commit=436F6D6D697449447B5B313520323038203831203131203235332032322037322031393020333220323130203634203235332032303920313839203934203137203431203135203230302039362031383920323820313736203132332037352032392031393320313831203134312032303520323231203232325D3A337D\n1:29AM INF indexed block height=3 module=txindex\n1:29AM INF Creating and publishing block height=4 module=BlockManager\n1:29AM INF minted coins from module account amount=2059727140542003996aphoton from=mint module=x/bank\n1:29AM INF submitting block to DA layer height=4 module=BlockManager\n1:29AM INF successfully submitted rollmint block to DA layer daHeight=25425 module=BlockManager rollmintHeight=4\n1:29AM INF commit synced commit=436F6D6D697449447B5B313433203332203639203732203134342034352037302034302032392032303120393720313137203235312031393320313738203137362031353920323038203231372036312032362031353720353320393820323234203230352031373020313920313034203138372031323220385D3A347D\n1:29AM INF indexed block height=4 module=txindex\n1:29AM INF Creating and publishing block height=5 module=BlockManager\n')),(0,a.kt)("p",null,"With that, we have kickstarted our ",(0,a.kt)("inlineCode",{parentName:"p"},"ethermintd")," network!"),(0,a.kt)("h2",{id:"deploy-a-solidity-smart-contract-on-ethermint-sovereign-rollup-with-foundry"},"Deploy A Solidity Smart Contract on Ethermint Sovereign Rollup with Foundry"),(0,a.kt)("p",null,"In this guide you'll learn how to deploy a Solidity smart contract to\nthe Ethermint chain you just instantiated on Celestia with\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"Foundry"),"."),(0,a.kt)("h3",{id:"about-foundry"},"About Foundry"),(0,a.kt)("p",null,"Foundry is a portable, fast and modular toolkit for Ethereum application development."),(0,a.kt)("p",null,"Foundry is made up of three components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/forge"},(0,a.kt)("strong",{parentName:"a"},"Forge"))," - Ethereum\ntesting framework (like Truffle, Hardhat and DappTools)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/cast"},(0,a.kt)("strong",{parentName:"a"},"Cast"))," - CLI for\ninteracting with EVM smart contracts, sending transactions, and getting chain data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/tree/master/anvil"},(0,a.kt)("strong",{parentName:"a"},"Anvil"))," - Local\nEthereum node, similar to Ganache or Hardhat Network.")),(0,a.kt)("p",null,"We'll use all three to create, test, and deploy our Solidity project."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To learn more about Foundry, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh"},"Foundry Book"),".")),(0,a.kt)("h3",{id:"getting-started"},"Getting started"),(0,a.kt)("h4",{id:"initialize-development-environment"},"Initialize development environment"),(0,a.kt)("p",null,"First, be sure to\n",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/getting-started/installation.html"},"install Foundry"),"\non your local development environment."),(0,a.kt)("p",null,"Next, create a new project and change into the directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge init celestia-ethermint-app\ncd celestia-ethermint-app\n")),(0,a.kt)("p",null,"Foundry has created an example smart contract located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Counter.sol"),"."),(0,a.kt)("h4",{id:"updating-the-contract-and-tests"},"Updating the contract and tests"),(0,a.kt)("p",null,"Let's update the contracts to include a basic counter example. Open the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.sol")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Counter {\n    int private count;\n    \n    constructor(int _count) {\n        count = _count;\n    }\n\n    function incrementCounter() public {\n        count += 1;\n    }\n    function decrementCounter() public {\n        count -= 1;\n    }\n\n    function getCount() public view returns (int) {\n        return count;\n    }\n}\n")),(0,a.kt)("p",null,"Next, let's create a test for this contract."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"test/Counter.T.Sol")," and update the code with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport \"forge-std/Test.sol\";\nimport 'src/Counter.sol';\n\ncontract CounterTest is Test {\n    Counter counter;\n    function setUp() public {\n        counter = new Counter(10);\n    }\n\n    function testGetCount() public {\n        int value = counter.getCount();\n        assertEq(value, 10);\n        emit log_int(value);\n    }\n\n    function testIncrement() public {\n        counter.incrementCounter();\n        counter.incrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 12);\n        emit log_int(value);\n    }\n\n    function testDecrement() public {\n        counter.decrementCounter();\n        int value = counter.getCount();\n        assertEq(value, 9);\n        emit log_int(value);\n    }\n}\n")),(0,a.kt)("p",null,"Foundry uses ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html"},"Dappsys Test")," to\nprovide basic logging and assertion functionality. It's included in the Forge\nStandard Library."),(0,a.kt)("p",null,"Here, we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"assertEq")," to assert equality. You can view all of the assertion\nfunctions available\n",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html?highlight=log_int#asserting"},"here"),"."),(0,a.kt)("p",null,"Next, we can test the contract using ",(0,a.kt)("strong",{parentName:"p"},"Forge")," with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge test -vv\n")),(0,a.kt)("p",null,"A successful test will have output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\u280a] Compiling...\n[\u2830] Installing solc version 0.8.17\n[\u2812] Successfully installed solc 0.8.17\n[\u2806] Compiling 18 files with 0.8.17\n[\u2811] Solc 0.8.17 finished in 3.59s\nCompiler run successful\n\nRunning 3 tests for test/Counter.t.sol:ContractTest\n[PASS] testDecrement() (gas: 12350)\nLogs:\n  9\n\n[PASS] testGetCount() (gas: 8510)\nLogs:\n  10\n\n[PASS] testIncrement() (gas: 13285)\nLogs:\n  12\n\nTest result: ok. 3 passed; 0 failed; finished in 2.24ms\n")),(0,a.kt)("h4",{id:"updating-the-deployment-script"},"Updating the deployment script"),(0,a.kt)("p",null,"Now that we've tested the contract, let's try deploying it locally using\n",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/tutorials/solidity-scripting.html"},"Solidity Scripting"),"."),(0,a.kt)("p",null,"To do so, update the deloyment script at ",(0,a.kt)("inlineCode",{parentName:"p"},"script/Counter.s.sol")," with the\nfollowing code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport "forge-std/Script.sol";\n\nimport {Counter} from "src/Counter.sol";\n\ncontract CounterScript is Script {\n    function setUp() public {}\n\n    function run() public {\n        vm.startBroadcast();\n        new Counter(10);\n        vm.stopBroadcast();\n    }\n}\n')),(0,a.kt)("p",null,"Now we can use this script to deploy our smart contract to either a live or\ntest network."),(0,a.kt)("h4",{id:"deploying-locally"},"Deploying locally"),(0,a.kt)("p",null,"Next start Anvil, the local testnet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"anvil --port 9545\n")),(0,a.kt)("p",null,"Once started, Anvil will give you a local RPC endpoint as well as a handful\nof Private Keys and Accounts that you can use."),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"ANVIL_KEY")," with one of the private keys generated by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export ANVIL_KEY=<anvil-private-key>\n")),(0,a.kt)("p",null,"And set the RPC URL as an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export RPC_URL=http://127.0.0.1:9545\n")),(0,a.kt)("p",null,"We can now use the local RPC along with one of the private keys to deploy locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Counter.s.sol:CounterScript --fork-url \\\n$RPC_URL  --private-key $ANVIL_KEY --broadcast\n")),(0,a.kt)("p",null,"Once the contract has been deployed locally, Anvil will log out the contract address."),(0,a.kt)("p",null,"Next, set the contract address as an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<contract-address>\n")),(0,a.kt)("p",null,"We can then test sending transactions to it with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast send"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--private-key $ANVIL_KEY --rpc-url $RPC_URL\n')),(0,a.kt)("p",null,"We can then perform read operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getCount()(int)" --rpc-url $RPC_URL\n')),(0,a.kt)("h4",{id:"deploying-to-the-ethermint-sovereign-rollup"},"Deploying to the Ethermint Sovereign Rollup"),(0,a.kt)("p",null,"Now that we've deployed and tested locally, we can deploy to our\nEthermint chain."),(0,a.kt)("p",null,"First, we will need to export the private key generated by\nthe ethermint ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=$(ethermintd keys unsafe-export-eth-key mykey --keyring-backend test)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Here, the key name from ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"mykey")," but you can modify\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," to change the name of your key.")),(0,a.kt)("p",null,"Now, we can start deploying the smart contract to our Ethermint chain."),(0,a.kt)("p",null,"To do so, run the following script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Counter.s.sol:CounterScript \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY --broadcast\n")),(0,a.kt)("p",null,"Set the contract address in the output as the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDRESS")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<new-contract-address>\n")),(0,a.kt)("p",null,"Once the contract has been deployed to the Ethermint rollup, we can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"cast send")," to test sending transactions to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS "incrementCounter()" \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY \n')),(0,a.kt)("p",null,"We can then perform read operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getCount()(int)" --rpc-url http://localhost:8545\n')))}p.isMDXComponent=!0}}]);