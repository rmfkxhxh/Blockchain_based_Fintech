import CryptoJS from "crypto-js";
import _ from 'lodash';
import { getPublicKeyFromWallet, getPrivateKeyFromWallet } from './wallet.js'

const COIN_BASE_AMOUNT = 50;

let transactionPool = [];

const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);
}
// 깊은 복사 -> 1차원적
// let trans = [...transactionPool]

// 얕은 복사 -> 메모리 주소값 복사

let transactions = [];
let unspentTxOuts = [];
if (transactions) {
    unspentTxOuts = processTransaction(transactions, [], 0); //  processTransaction() return하는 데이터는 UnspentTxOut[] 이다.
}

const getUnspentTxOuts = () => {
    return _.cloneDeep(unspentTxOuts);
}

class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txInIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}


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

const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    const tx = createTransaction(address, amount);

    // 2. 트랜잭션 풀
    transactionPool.push(tx);

    // 3. 주변 노드에 전파


    return tx;
}

const createTransaction = (amount, address) => {
    // 1. 아직 처리되지 않았지만 트랜잭션 풀에 올라가 있는 내용을 확인
    const myAddress = getPublicKeyFromWallet();

    // TODO : Arrow function 형태 확인
    // unspentTxOuts.filter(uTxO => uTxO === myAddress)
    const myUnspentTxOuts = unspentTxOuts.filter((uTxO) => { uTxO.address === myAddress });

    const filteredUnspentTxOuts = filterTxPoolTxs(myUnspentTxOuts);
    // 2. 거래 사용되지 않은 TxOuts을 구성, 트랜잭션에 필요한 코인을 확인

    const { includeTxOuts, leftoverAmount } = findTxOutsForAmount(amount, filteredUnspentTxOuts);

    // 넘기는 금액은 다시 나한테 전달
    // 내가 보유한 TxOuts 10, 15, 20, 40
    // 내가 지금 만들고 싶은 트랜잭션 코인 60 === 85 (25)

    // 3. 서명 전의 TxIns로 구성
    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn);

    // 4. 트랜잭션 구성
    const tx = new Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(address, amount, leftoverAmount); // 받는 사람 주소
    tx.id = getTransactionId(tx);

    tx.txIns = tx.txIns.map((txIn) => {
        txIn.sign = singTxIn(tx, tx.txIn.txOutIndex, getPrivateKeyFromWallet())
        return txIn
    });

    return tx;
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출
    const txIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();

    console.log("transactionPool : ");
    console.log(transactionPool);

    console.log("\ntxIns : ");
    console.log(txIns);
    const removable = [];
    for (const unspentTxOut of myUnspentTxOuts) {
        const findTXIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOut.txOutIndex &&
                txIn.txOutId === unspentTxOut.txOutId;
        })
        if (findTXIn === undefined) {
            removable.push(unspentTxOut);
        }
    };

    return _.without(myUnspentTxOuts, ...removable);
}

const findTxOutsForAmount = (amount, filteredUnspentTxOuts) => {
    let currentAmount = 0;
    const includeTxOuts = [];
    for (const unspentTxOut of filteredUnspentTxOuts) {

        includeTxOuts.push(unspentTxOut);

        currentAmount += unspentTxOut.amount;
        if (currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount;
            return { includeTxOuts, leftoverAmount };
        }
    }
    throw Error('not enough unspentTxOut amount');
}

const createUnsignedTxIn = (unspentTxOut) => {
    const txIn = new TxIns();
    txIn.txOutId = unspentTxOut.txOutId;
    txIn.txOutIndex = unspentTxOut.txOutIndex;

    return txIn;
}

const createTxOuts = (address, amount, leftoverAmount) => {
    const txOut = new TxOuts(address, amount);
    if (leftoverAmount > 0) {
        const leftoverTxOut = new TxOuts(getPublicKeyFromWallet(), leftoverAmount);
        return [leftoverAmount, txOut];
    } else {
        return [txOut];
    }
}

const addToTransactionPool = (transaction) => {
    // 올바른 트랙젝션인지
    if (!isValidateTransaction(transaction, unspentTxOuts)) {
        throw Error('addToTransactionPool : Invalid transaction\n', transaction);
    }

    // 중복되는지
    if (!isValidateTransactionPool(transaction)) {
        throw Error('addToTransactionPool : Invalid transaction pool\nalready exists\n', transaction);
    }

    transactionPool.push(transaction);

}

const isValidateTransaction = (transaction, unspentTxOuts) => {
    if (getTransactionId(transaction) !== transaction.id) {
        console.log('invalid transaction id : ', transaction.id);
        return false;
    }

    const totalTxInValues = transaction.txIns
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts)) //amount 값 추출
        .reduce((a, b) => (a + b), 0); //숫자니까 0으로 초기화
    //reduce() overloading 데이터 type에 따라 +해줌 (숫자는 연산, string은 합치기)

    const totalTxOutValue = transaction.txOuts
        .map((txOut) => txOut.amount)
        .reduce((a, b) => (a + b), 0);
    if (!totalTxInValues === totalTxOutValue) {
        console.log('invalid total amount from transaction id : ', transaction.id)
        console.log('totalTxInValues : ', totalTxInValues);
        console.log('totalTxOutValue : ', totalTxOutValue);
        return false;
    }

    return true;
}

const isValidateTransactionPool = (transaction) => {
    // 트랜잭션 풀에 있는 txIns들과 transaction에 txIns들을 비교해서 같은 것이 있는지 확인
    const txPoolIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();

    const containTxIn = (txIn) => {
        return _.find(txPoolIns, (txPoolIn) => {
            return txIn.txOutIndex === txPoolIn.txOutIndex &&
                txIn.txOutId === txPoolIn.txOutId;
        })
    }
    for (const txIn of transaction.txIns) {
        if (containTxIn(txIn)) {
            console.log('transaction already exists : ', transaction.id);
            return false;
        }
    }

    return true;
}

const getTxInAmount = (txIn, unspentTxOuts) => {
    const findUnspentTxOut = unspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId &&
        uTxO.txOutIndex === txIn.txOutIndex);

    return findUnspentTxOut.amount;
}

const updateTransactionPool = () => {
    const removable = [];
    // 1.현재 트랜잭션 풀에 있는 트랜잭션 중에
    // 사용되지 않은 TxOuts내용과 일치하지 않는 트랜잭션들을 제거한다.
    for (const tx of transactionPool) {
        for (const txIn of tx.txIns) {
            if (isInTx(txIn)) {

            } else {
                removable.push(tx)
                break;
            }
        }
    }
    transactionPool = _.without(transactionPool, ...removable);
}

const isInTx = (txIn) => {
    const findTxOut = _(unspentTxOuts).find((uTxO) => { //배열로 boolean인지 true값의 value인지
        return uTxO.txOutIndex === txIn.txOutIndex &&
            uTxO.txOutId === txIn.txOutId;
    });
    return findTxOut !== undefined;
}


const processTransaction = (transactions, unspentTxOuts, blockIndex) => {
    // 1. 예외처리 (트랜잭션 구조를 검증하는 과정) 
    if (!isValidateTransaction(transactions, unspentTxOuts, blockIndex)) {
        console.log('invalid processTransaction');
        return null;
    }

    // 2. 미사용 txouts를 추출하는 과정
    // 2_1. 블록에 있는 데이터 (처리해야할 트랜잭션 정보) 중에서 txIns로 소모된 txOuts (UnspentTxOut)를 구성
    const consumedTxOuts = transactions.map((tx) => tx.txIns)
        .reduce((a, b => a.concat(b)), [])
        .map((txIn) => new UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0))

    // 2_2. 새로 들어온 트랜잭션 정보에서 추출한 UnspentTxOut 생성
    const newUnspentTxOuts = transactions.map((tx) => {
        return tx.txOuts.map((txOut) => { new UnspentTxOut(tx.id, blockIndex, txOut.address, txOut.amount) })

    })
        .reduce((a, b) => a.concat(b), [])
    // 2_3. 기존 UnspentTxout - 소모된 UnspentTxout + new UnspentTxOut을 추가
    // 두 1차원 배열의 txOutId와 txOutIndex를 비교해서 같은 요소를 filter하는 코드를 만들어보자.
    for (const unspentTxOut of myUnspentTxOuts) {
        const findTXIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOut.txOutIndex &&
                txIn.txOutId === unspentTxOut.txOutId;
        })
        if (findTXIn === undefined) {
            removable.push(unspentTxOut);
        }
    };

    // const removable = [];
    // for (const uTxO of unspentTxOuts) {
    //     for (const cTxO of consumedTxOuts) {
    //         if (uTxO.txOutId === cTxO.txOutId && uTxO.txOutIndex === cTxO.txOutIndex) {
    //             removable.push(tx);
    //         }
    //     }
    // }
    // const consumedRemovedUnspentTxOuts = _.without(unspentTxOuts, ...removable);
    // const isConsumedTxOut = (uTxO) => {
    //     consumedTxOuts.map((cTxO) => {
    //         if (uTxO.txOutId === cTxO.txOutId && uTxO.txOutIndex === cTxO.txOutIndex) {
    //             return true
    //         } else {
    //             false
    //         }
    //     })
    // } 

    const resultUnSpentTxOuts = unspentTxOuts.filter((uTxo) => !isSameElement(consumedTxOuts, uTxo.txOutIndex, uTxo.txOutId))
        .concat(newUnspentTxOuts);
    unspentTxOuts = resultUnSpentTxOuts;
    return resultUnSpentTxOuts;

}
const isSameElement = (cTxOuts, txOutIndex, txOutId) => {
    return cTxOuts.find((txOut) => txOut.txOutId === txOutId && txOut.txOutIndex === txOutIndex)
}
export {
    getTransactionPool, sendTransaction, addToTransactionPool,
    getCoinbaseTransaction, updateTransactionPool, processTransaction, getUnspentTxOuts
}