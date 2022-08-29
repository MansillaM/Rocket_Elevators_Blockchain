const { parse } = require('dotenv');
var express = require('express');
var app = express();
const port = 3000
var fs = require('fs');
const Web3 = require('web3');
// const provider = new Web3.providers.HttpProvider("http://localhost:8545/")
const contract = require("@truffle/contract");
const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "design audit must clinic jealous love oil robot arrive advance hard permit";
const provider = new Web3(new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic
  },
  providerOrUrl: "https://blockchain.codeboxxtest.xyz"
}));

//Important Data
const contractNFT = "./build/contracts/MansillaRocket.json";
const abi = JSON.parse(fs.readFileSync(contractNFT));
const contractAddress = "0x7d9FF1C6672F6Ce7468e5A3c699A2eFF9eDA76A8";
const MansillaRock = contract(abi, contractAddress);

//Web3 Provider
MansillaRock.setProvider(provider.currentProvider);


app.get('/getWalletToken/:_owner' , async (req, res) => {
  const instance = await MansillaRock.at(contractAddress)
  let result = await instance.walletOfOwner(req.params._owner)
  res.send(result)
})

app.get('/metaData/:tokenId' , async (req, res) => {
  const instance = await MansillaRock.at(contractAddress);
  let result = await instance.tokenURI(req.params.tokenId);
  res.json(result);
})

app.post('/gift/:address' , async (req, res) => {
  let accounts = await provider.eth.getAccounts();
  let mainAccount = accounts[0];
  const instance = await MansillaRock.at(contractAddress);
  let result = await instance.giveFreeNFT(req.params.address, {
    from: mainAccount
  })
  res.send(result);
})

app.post('/mint/:address' , async (req, res) => {
  let accounts = await provider.eth.getAccounts();
  let mainAccount = accounts[0];
  const instance = await MansillaRock.at(contractAddress);
  let result = await instance.safeMint(req.params.address, {
    from: mainAccount
  })
  res.send(result);
})

app.get('/eligibleAddress/:address', async (req, res) => {
    const instance = await MansillaRock.at(contractAddress);
    let result = await instance.eligibleAddress(req.params.address);
    res.send(result)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})