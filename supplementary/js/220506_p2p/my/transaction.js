import CryptoJS from "crypto-js";

const COIN_BASE_AMOUNT = 50;

// 코인을 어디로 얼만큼 보냈는가
class TxOuts {
    constructor(address, amount) {
        this.address = address; // string
        this.amount = amount; // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIns {
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex; // number
        this.sign = sign; // string
    }
}

class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id; // string
        this.txIns = txIns; // TxIn []
        this.txOuts = txOuts; // TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns 에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transaction.txIns
        .map((txIn) => txIn.txOutId + txIn.txOutIndex)
        .reduce((a, b) => a + b, '')

    // txOut에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txOuts
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => a + b, '')


    // 위의 두 내용을 다 합해서 hash처리한다.
    return CryptoJS.SHA256(txInsContent + txOutsContent).toString();
}

// transaction signature
const singTxIn = (transaction, txInIndex, privateKey) => {
    // const txIn = transaction.txIns[txInIndex];


    // todo : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER();
    return signature;

}


// coinbase transaction
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transaction();

    const txIn = new TxIns();

    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    const txOut = new TxOuts();
    txOut.address = address;
    txOut.amount = COIN_BASE_AMOUNT;

    tr.txIns = [txIn];
    tr.txOuts = [txOut];

    tr.id = getTransactionId(tr);

    return tr;
}