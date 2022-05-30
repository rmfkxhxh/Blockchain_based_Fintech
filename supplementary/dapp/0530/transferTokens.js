const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(
   new Web3.providers.HttpProvider("http://localhost:8545"));
var assert = require('assert');

const source = fs.readFileSync(
   'c:/Ethereum/mocha/SimpleCoin/SimpleCoin.sol', 'utf8');
const compiledContract = solc.compile(source, 1);
const abi = compiledContract.contracts[':SimpleCoin'].interface;
const bytecode = '0x' + compiledContract.contracts[':SimpleCoin'].bytecode;
const gasEstimate = web3.eth.estimateGas({ data: bytecode }) + 100000;

const SimpleCoinContractFactory = web3.eth.contract(JSON.parse(abi));
web3.personal.unlockAccount(sender, senderPassword);
const simpleCoinInstance = SimpleCoinContractFactory.new(initialSupply, {
    from : sender,
    data: bytecode,
    gas: gasEstimate
}, function (e, contracy) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + 'transaction Hash: ' + contract.transactionHash);
    }
})
// describe('SimpleCoin', function() {
//   this.timeout(5000);
//   describe('SimpleCoin constructor', function() {
//     it('Contract owner is sender', function(done) {
//         //arrange 
//         let sender = web3.eth.accounts[1]; 
//         let initialSupply = 10000; 


//         //act
//         let simpleCoinInstance = SimpleCoinContractFactory.new(initialSupply, {
//             from: sender, data: bytecode, gas: gasEstimate}, 
//             function (e, contract){ 
//             if (typeof contract.address !== 'undefined') {
//                     //assert
//                     assert.equal(contract.owner(), sender);
//                     done();
//             }
//         });
//     });
//  });
// });