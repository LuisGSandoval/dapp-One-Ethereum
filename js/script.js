
let Web3 = require('web3');
let ABIOne = `[
{
"constant": false,
"inputs": [
    {
        "name": "_name",
        "type": "string"
    }
],
"name": "set",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "get",
"outputs": [
    {
        "name": "",
        "type": "string"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
}
]`

let web3 = new Web3();

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    setContrractOne()
    startEthService();
} else {
    alert('please add a wallet type of app')
}

function setContrractOne() {
    let instance = web3.eth.contract(ABIOne)
    //.at('0xd2fe7df8f3f34dfe4df77cd375e4b4189fb3a9a6')
    console.log(instance)
}

function startEthService() {

}
