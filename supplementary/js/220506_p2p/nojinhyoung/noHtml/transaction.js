import CryptoJs from "crypto-js";

// 블록당 코인
const COIN_BASE_AMOUNT = 50;

// 코인을 어디로 얼만큼 보냈는가 
class TxOut {
    constructor(address, amount) {
        this.address = address;         // string
        this.amount = amount;           // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거 (영지식증명용 증거 들)
class TxIn {    // txOut으로 txIn을 해석하므로 구성이 이렇다
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId;         // string
        this.txOutIndex = txOutIndex;   // number
        this.sign = sign;               // string
    }
}

class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id;                   // string
        this.txIns = txIns;             // TxIn[]
        this.txOuts = txOuts;           // TxOut[]
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns에 있는 내용들을 하나의 문자열로 변환
    const txInsContent = transaction.txIns.map((txIn) => {
        // map 배열의 각 요소들을 건드릴때 사용
        (txIn.txOutId + txIn.txOutIndex).reduce((a, b) => {     
            // reduce 배열의 각 요소들을 하나의 결과값으로 만들때 사용
            a + b, ''
        })
    })
    // txOuts에 있는 내용들을 하나의 문자열로 변환
    const txOutsContent = transaction.txOuts.map((txOut) => {
        (txOut.address + txOut.amount).reduce((a, b) => {     
            a + b, ''
        })
    })
    // 위의 두 내용을 다 합해서 hash 처리
    return CryptoJs.SHA256(txInsContent + txOutsContent).toString();
}

// transaction signature
const signTxIn = (transaction, txInIndex, privateKey) => {
    const txIn = transaction.txIns[txInIndex];

    // TODO : 구현 확인 
    const signature = toHexString(privateKey, transaction.id).toDER();
    // toDER 인코딩 방식 중에 하나 
    return signature;
}

// coinbase transaction 
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transaction();
    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    tr.txIns = [txIn];

    const txOut = new TxOut();
    txOut.address = address;
    txOut.amount = COIN_BASE_AMOUNT;

    tr.txOuts = [txOut];

    tr.id = getTransactionId(tr);

    return tr;
}