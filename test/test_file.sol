// SPDX-License-Identifier: GPL-3.0
        
// pragma solidity >=0.4.22 <0.9.0;
// This import is automatically injected by Remix
// import "remix_tests.sol"; 
// This import is required to use custom transaction context
// Although it may fail compilation in 'Solidity Compiler' plugin
// But it will work fine in 'Solidity Unit Testing' plugin
// import "remix_accounts.sol";
// import "../contracts/MansillaRocket.sol";
// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
// contract testSuite {
//     MansillaRocket MSR;
//     /// 'beforeAll' runs before all other tests
//     /// More special functions are: 'beforeEach', 'beforeAll', 'afterEach' & 'afterAll'
//     function beforeAll() public {
//         MSR = new MansillaRocket("MansillaRocket","MSR","ipfs");
//     }
//     function checkCost() public {
//         assert.equal(MSR.cost(),10000000000000000,"Not Right");
//     }
//     function checkMaxMint() public {
//         assert.equal(MSR.maxMintAmount(),2,"Not Right");
//     }
//     function checkMaxSupply() public {
//         assert.equal(MSR.maxSupply(),25,"Not Right");
//     }
//     function checkOwner() public {
//         assert.equal(MSR.owner(), MSR.owner(),"Not Right");
//     }
//     function isRevealed() public {
//         assert.equal(MSR.revealed(), false,"Not Right");
//     }
//     /// Custom Transaction Context: https://remix-ide.readthedocs.io/en/latest/unittesting.html#customization
//     /// #sender: account-1
//     /// #value: 100
//     function checkSenderAndValue() public payable {
//         // account index varies 0-9, value is in wei
//         assert.equal(msg.sender, TestsAccounts.getAccount(1), "Invalid sender");
//         assert.equal(msg.value, 100, "Invalid value");
//     }
// }