class TxIn {
    constructor(txOutId, txOutIndex) {
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex;   // number
    }
}

class Transaction {
    constructor(txIns) {
        this.txIns = txIns; // TxIn []
    }
}

const transactions = [];
for (let j = 0; j < 2; j++)
{
    const txIns = [];
    for(let i = 0; i < 3; i++)
    {
        txIns.push(new TxIn('address', i));
    }
    transactions.push(new Transaction(txIns));
}
console.log(transactions);
console.log('');

const consumedTxOuts1 = transactions.map((tx) => tx.txIns);
console.log('======================================================')       
console.log(consumedTxOuts1);
console.log('');


const consumedTxOuts2 = transactions.map((tx) => tx.txIns)
        .reduce((a, b) => a.concat(b), []);
console.log('======================================================')        
console.log(consumedTxOuts2);
console.log('');


const consumedTxOuts3 = transactions.map((tx) => tx.txIns)
        .reduce((a, b) => a.concat(b), [])
        .map((txIn) => txIn.txOutIndex);
console.log('======================================================')       
console.log(consumedTxOuts3);
console.log('');
