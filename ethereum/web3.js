import Web3 from 'web3';
const HDWalletProvider = require('truffle-hdwallet-provider');

let web3;


if(typeof window != 'undefined' && window.web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);

}else{

  const provider = new HDWalletProvider(
  'worry height frozen panther grape senior fringe spike surprise animal panic shoulder',
  'https://rinkeby.infura.io/v3/6190b083ceb947068a32876d3aff4c8c');
   web3 = new Web3(provider);
}


export default web3;