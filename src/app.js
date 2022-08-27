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
const contractAddress = "0x9ffd408e1a5b4f0fd26c553b03e40330d7d129f8";
const MansillaRock = contract(abi, contractAddress);

//Web3 Provider
MansillaRock.setProvider(provider);


app.get('/getWalletToken/:_owner' , async (req, res) => {
  const instance = await MansillaRock.at(contractAddress)
  let result = await instance.walletOfOwner(req.params._owner)
  res.send(result)
})

app.get('/metaData/:tokenId' , async (req, res) => {
  const instance = await MansillaRock.at(contractAddress);
  let result = await instance.tokenURI(req.params.tokenId);
  res.send(result);
})

app.post('/gift/:address' , async (req, res) => {
  const instance = await MansillaRock.at(contractAddress);
  let result = await instance.giveFreeNFT(req.params.address)
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