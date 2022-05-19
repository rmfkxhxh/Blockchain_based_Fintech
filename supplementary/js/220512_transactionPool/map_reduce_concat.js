class TxIn {
        constructor(txOutId, txOutIndex) {
                this.txOutId = txOutId; // string
                this.txOutIndex = txOutIndex;   // number
        }
}
class TxOut {
        constructor(txOutId, txOutIndex) {
                this.txOutId = txOutId; // string
                this.txOutIndex = txOutIndex;   // number
        }
}

class Transaction {
        constructor(txOut) {
                this.txOut = txOut; // TxIn []
        }
        // constructor(txIns) {
        //         this.txIns = txIns; // TxIn []
        // }
}


const unspentTxOuts = [];
for (let i = 0; i < 3; i++) {
        unspentTxOuts.push(new TxOut('address', i));
}




const consumedTxOuts = [];
for (let i = 1; i < 4; i++) {
        consumedTxOuts.push(new TxOut('address', i));
}




const isSameElement = (cTxOuts, txOutIndex, txOutId) => {
        return cTxOuts.find((txOut) => txOut.txOutId === txOutId && txOut.txOutIndex === txOutIndex)
}

const result = unspentTxOuts.filter((uTxo) => !isSameElement(consumedTxOuts, uTxo.txOutIndex, uTxo.txOutId))
// console.log(unspentTxOuts)
// console.log(consumedTxOuts)
// console.log(result)

// let t = [];
// if(!t){
//         t.push('a')
//         console.log('false')
// } else {
//         console.log('true')
// }