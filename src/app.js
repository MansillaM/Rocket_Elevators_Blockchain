var express = require('express')
var app = express()
const Web3 = require('web3');
const contractNFT = "../build/contracts/MansillaRocket.json"

// step 1: parse json
// step 2: access abi
// step 3: get object from json, object.object to access
// step 4: use abi with web3
// step 5: call function with web3 contract instance

const port = 3000
const web3 = new Web3("http://localhost:8545/")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})