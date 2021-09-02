const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'worry height frozen panther grape senior fringe spike surprise animal panic shoulder',
  'https://rinkeby.infura.io/v3/6190b083ceb947068a32876d3aff4c8c'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({gasPrice: "20000000000",gas: "2100", from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();