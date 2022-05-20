import CryptoJS from 'crypto-js'
import _ from 'lodash'

import { getPublicKeyFromWallet, getPrivateKeyFromWallet } from './wallet.js'
import { broadcastiongTransactionPool } from './p2pServer.js'
import { getLatestBlock, getUnspentTxOuts } from './block.js'

const COINBASE_AMOUNT = 50;

let transactionPool = []
const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);
}

class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

// 코인을 어디로 얼만큼 보냈는가
class TxOut {
    constructor(address, amount) {
        this.address = address; // string
        this.amount = amount;   // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn {
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex;   // number
        this.sign = sign;   // string
    }
}

class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id;   // string
        this.txIns = txIns; // TxIn []
        this.txOuts = txOuts;   // TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    // const txInsContent = transaction.txIns
    //     .map((txIn) => txIn.txOutId + txIn.txOutIndex)
    //     .reduce((a, b) => a + b, '');

    // txOuts에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txOuts
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => a + b, '');

    // 위의 두 내용을 다 합해서 hash처리한다.
    return CryptoJS.SHA256(/*txInsContent +*/ txOutsContent).toString();
}

// transaction signature
const signTxIn = (transaction, txInIndex, privateKey) => {
    //const txIn = transaction.txIns[txInIndex];

    // TODO : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER();
    return signature;
}

// coinbase Transaction
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transaction();

    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    const txOut = new TxOut();
    txOut.address = address;
    txOut.amount = COINBASE_AMOUNT;

    tr.txIns = [txIn];
    tr.txOuts = [txOut];
    tr.id = getTransactionId(tr);

    return tr;
}

const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    const tx = createTransaction(address, amount);
    console.log('2 sendTransaction 결과는 : ', tx);

    // 2. 트랜잭션 풀에 추가
    transactionPool.push(tx);

    // 3. 주변 노드에 전파
    broadcastiongTransactionPool();

    return tx;
}

const createTransaction = (address, amount) => {    

    // 미사용 TxOuts에서 사용할 내용들을 추출
    const {includeTxOuts, leftoverAmount} = findTxOutsForAmount(amount, getUnspentTxOuts());
    // 서명되지 않은 TxIns 구성
    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn);
    console.log('unsignedTxIns : ', unsignedTxIns);

    const tx = new Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(address, amount, leftoverAmount);
    tx.id = getTransactionId(tx); 

    console.log('1 createTransaction 결과는 : ', tx.txOuts);

    return tx;
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출
    const txIns = _(transactionPool)
            .map((tx) => tx.txIns)
            .flatten()
            .value();

    console.log('트랜잭션 풀 : ', transactionPool);
    console.log('트랜잭션 풀안의 Inputs : ', txIns);

    const removable = [];
    for (const unspentTxOut of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOut.txOutIndex &&
                txIn.txOutId === unspentTxOut.txOutId;
        })

        if (findTxIn === undefined) {

        }
        else {
            removable.push(unspentTxOut);
        }
    }

    return _.without(myUnspentTxOuts, ...removable);
}

//5, 5, 5, 5, 5 내가 보내려는 amount 17
const findTxOutsForAmount = (amount, filteredUnspentTxOuts) => {
    let currentAmount = 0;
    const includeTxOuts = [];

    for (const unspentTxOut of filteredUnspentTxOuts) {
        includeTxOuts.push(unspentTxOut);

        currentAmount = currentAmount + unspentTxOut.amount;
        if (currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount;
            return { includeTxOuts, leftoverAmount };
        }
    }

    throw Error('보내려는 금액보다 보유 금액이 적다!!');
}

const createUnsignedTxIn = (unspentTxOut) => {
    const txIn = new TxIn();
    txIn.txOutId = unspentTxOut.txOutId;
    txIn.txOutIndex = unspentTxOut.txOutIndex;

    return txIn;
}

const createTxOuts = (address, amount, leftoverAmount) => {
    const txOut = new TxOut(address, amount);
    if (leftoverAmount > 0) {
        const leftoverTxOut = new TxOut(getPublicKeyFromWallet(), leftoverAmount);
        return [leftoverTxOut, txOut];
    }
    else {
        return [txOut];
    }
}

const addToTransactionPool = (transaction) => {
    // 올바른 트랜잭션인지
    // if (!isValidateTransaction(transaction, unspentTxOuts)) {
    //     throw Error('추가하려는 트랜잭션이 올바르지 않다!!', transaction);
    // }

    // 중복되는지
    if (!isValidateTxForPool(transaction)) {
        throw Error('추가하려는 트랜잭션이 트랜잭션 풀에 있다!!', transaction);
    }

    transactionPool.push(transaction);
}

const isValidateTransaction  = (transaction, unspentTxOuts) => {
    if (getTransactionId(transaction) !== transaction.id) {
        console.log('invalid transaction id : ', transaction.id);
        return false;
    }

    const totalTxInValues = transaction.txIns
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts))
        .reduce((a, b) => (a + b), 0);

    const totalTxOutValues = transaction.txOuts
        .map((txOut) => txOut.amount)
        .reduce((a, b) => (a + b), 0);

    if (totalTxInValues !== totalTxOutValues) {
        console.log('totalTxInValues !== totalTxOutValues id : ', transaction.id);
        return false;
    }

    return true;
}

const getTxInAmount = (txIn, unspentTxOuts) => {
    const findUnspentTxOut = unspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId &&
        uTxO.txOutIndex === txIn.txOutIndex);

    return findUnspentTxOut.amount;
}

const isValidateTxForPool = (transaction) => {
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
            console.log('이미 존재하는 트랜잭션이다!! id : ', transaction.id);
            return false;
        }
    }

    return true;
}

const updateTransactionPool = () => {
    const removable = [];
    // 1. 현재 트랜잭션 풀에 있는 트랜잭션 중에 
    // 사용되지 않은 TxOuts내용과 일치하지 않는 트랜잭션들을 제거한다.
    for (const tx of transactionPool) {
        for (const txIn of tx.txIns) {
            if (isInTx(txIn)) {

            }
            else {
                removable.push(tx);
                break;
            }
        }
    }

    transactionPool = _.without(transactionPool, ...removable);
}

const isInTx = (txIn) => {
    const findTxOut = _(unspentTxOuts).find((uTxO) => { return uTxO.txOutIndex === txIn.txOutIndex &&
    uTxO.txOutId === txIn.txOutId});

    return findTxOut !== undefined;
}

const processTransaction = (transactions, unspentTxOuts, blockIndex) => {
    // 2. 미사용 txouts를 추출하는 과정
    // 2_1. 블록에 있는 데이터 (처리해야 할 트랜잭션 정보) 중에서 txIns로 소모된 txOuts(UnspentTxOut)를 구성
    const consumedTxOuts = transactions.map((tx) => tx.txIns)
        .reduce((a, b) => a.concat(b), [])
        .map((txIn) => new UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0));


    // 2_2. 새로 들어온 트랜잭션 정보에서 추출한 UnspentTXout 생성
    const newUnspentTxOuts = transactions.map((tx) => {
        return tx.txOuts.map((txOut) => new UnspentTxOut(tx.id, blockIndex, txOut.address, txOut.amount));
    })
    .reduce((a, b) => a.concat(b), []);

    // 2_3. 기존 UnspentTxOut - 소모된 UnspentTxOut + newUnspentTXout을 추가
    // 두 1차원 배열의 txOutId와 txOutIndex를 비교해서 같은 요소를 filter하는 코드를 
    // 만들어보자.
    const resultUnspentTxOuts = (unspentTxOuts.filter((uTxO) => !checkSameElement(consumedTxOuts, uTxO.txOutIndex, uTxO.txOutId))).concat(newUnspentTxOuts);
    console.log('processTransactions : ', transactions)

    unspentTxOuts = resultUnspentTxOuts;
    return resultUnspentTxOuts;
}

const checkSameElement = (txOuts, txOutIndex, txOutId) => {
    return txOuts.find((txOut) => txOut.txOutId === txOutId && txOut.txOutIndex === txOutIndex);
}


export {getTransactionPool, addToTransactionPool, getCoinbaseTransaction, processTransaction, updateTransactionPool, sendTransaction}