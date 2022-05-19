import { createGenesisBlock } from "./block.js";
import { getCoinbaseTransaction, processTransaction, getTransactionId, getTxInAmount } from "./transaction.js";
import { getPublicKeyFromWallet } from "./wallet.js";


// functions
const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);
}

const getUnspentTxOuts = () => {
    return _.cloneDeep(unspentTxOuts);
}
// let blocks;
let unspentTxOuts = [];
let transactionPool = [];
let blocks;

//genesis block
const genesisBlock = createGenesisBlock();
genesisBlock.data = [getCoinbaseTransaction(getPublicKeyFromWallet(), genesisBlock.index + 1)]; // 제네시스 블록을 생성한 사람에게 50 minting함
// addToTransactionPool(genesisBlock.data);
transactionPool.concat(genesisBlock.data)

if (!blocks) {
    console.log('add genesisblock')
    blocks = [genesisBlock];
    if (blocks.length === 1) {
        const genesisUnspentTxOuts = [];
        // genesisUnspentTxOuts.push(createUnspentTxOut('', 1, genesisBlock.data.txOuts[0].address, genesisBlock.data.txOuts[0].amount)) // txOutId, txOutIndex, address, amount
        unspentTxOuts = processTransaction(transactionPool, genesisUnspentTxOuts, 0)
    };
}
console.log(genesisBlock)
export { getTransactionPool, getUnspentTxOuts }
