import CryptoJS from 'crypto-js'
import _ from 'lodash'              // 배열기능이 있고 깊은 복사의 유용한 기능들이 있는 라이브러리

import { getUnspentTxOuts } from './block.js'
import { getPublicKeyFromWallet, getPrivateKeyFromWallt } from './wallet.js'
import { broadcastingTransactionPool } from './p2pServer.js'

// let unspentTxOuts = []; // UnspentTxOut []
const COINBASE_AMOUNT = 50;



class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}


// let trans = [...transactionPool] 깊은 복사가 되지만 1단계까지만 됨
// 얕은 복사만 일어나게 된다 ( 구조체 안에 다른 클래스의 배열들안에 다른 데이터들 처럼 중첩되었기 때문 )

// 코인을 어디로 얼만큼 보냈는가
class TxOut {
    constructor(address, amount) {
        this.address = address;           // string
        this.amount = amount;             // number        
    }
}

// 보내진 코인이 실제로 소유했다에 대한 증거
class TxIn {
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId;         // string
        this.txOutIndex = txOutIndex;   // number
        this.sign = sign;               // string
    }
}

// 구조체 안에 스트링이 있고 다른 클래스 배열들(안에 다른데이터) 로 구성 
class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id;                   // string
        this.txIns = txIns;             // TxIn []
        this.txOuts = txOuts;           // TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns 에 있는 내용들을 하나의 문자열로 만든다.
    // const txInsContent = transaction.txIns
    //     .map((txIn) => txIn.txOutId + txIn.txOutIndex)
    //     .reduce((a, b) => a + b, '');
    /* 아래가 조금 복잡
    const txInsContent = transaction.txIns.map((txIn) => {
        (txIn.txOutId + txIn.txOutIndex).reduce((a, b) => {
            a + b, ''
    })
    */

    // txOuts 에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txOuts
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => a + b, '');

    // 위 두 내용을 다 합해서 hash 처리한다.
    return CryptoJS.SHA256(/* txInsContent */ + txOutsContent).toString()
}
// 이 내용이 변조되지않았다

// transaction signature 
const signTxIn = (transaction, txInIndex, privateKey) => {
    // const txIn = transaction.txIns[txInIndex];

    // TODO : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER();
    return signature;
}
// 누가 보냈는지

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
    // console.log('2 : ',tx);

    // 2. 트랜잭션 풀에 추가
    transactionPool.push(tx);

    // 3. 주변 노드에 전파
    broadcastingTransactionPool();

    return tx;
}

const createTransaction = (address, amount) => {

    // 미사용 TxOuts에서 사용할 내용들을 추출
    const { includeTxOuts, leftoverAmount } = findTxOutsForAmount(amount, getUnspentTxOuts());
    // 서명되지 않은 TxIns구성
    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn);
    console.log('unsignedTxIns', unsignedTxIns)

    const tx = new Transaction();
    // TxIns 서명

    tx.txOuts = createTxOuts(address, amount, leftoverAmount)
    tx.id = getTransactionId(tx);

    // console.log('1 : ',tx.txOuts);

    return tx;
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출 // 내가 올린것과 남이 올린것을 구분지어줄거야
    const txIns = _(transactionPool)
        .map((tx) => tx.txIns) // transactionPool 안에서 txIns들만  하나씩 가져와서 새로운 배열을 구성한다
        .flatten() // 일차원 배열로 만들어준다
        .value();

    console.log('트랜잭션 풀 : ', transactionPool);
    console.log('트랜잭션 풀안의 Inputs : ', txIns);

    const removable = [];
    for (const unspentTxOuts of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOuts.txOutIndex &&
                txIn.txOutId === unspentTxOuts.txOutId;
        })

        if (findTxIn === undefined) {

        }
        else {
            removable.push(unspentTxOuts);
        }
    }

    _.without(myUnspentTxOuts, ...removable);
}

const findTxOutsForAmount = (amount, filterUnspentTxOuts) => {
    let currentAmount = 0;
    const includeTxOuts = [];

    for (const unspentTxOuts of filterUnspentTxOuts) {
        includeTxOuts.push(unspentTxOuts);

        currentAmount = currentAmount + unspentTxOuts.amount;
        if (currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount;
            return { includeTxOuts, leftoverAmount };
        }
    }

    throw Error('보내려는 금액보다 보유 금액이 적다!!');
}

const createUnsignedTxIn = (unspentTxOuts) => {
    const txIn = new TxIn();
    txIn.txOutId = unspentTxOuts.txOutId;
    txIn.txOutIndex = unspentTxOuts.txOutIndex;

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
    //     throw Error('추가하려는 트랜잭션이 올바르지 않습니다. : ', transaction);
    // }

    // 중복되는지 
    if (!isValidateTxForPool(transaction)) {
        throw Error('추가하려는 트랜잭션이 트랜잭션 풀에 있습니다. : ', transaction);
    }

    transactionPool.push(transaction);
}

const isValidateTransaction = (transaction, unspentTxOuts) => {
    // 트랜잭션 아이디가 올바르게 구성되어있는지
    if (getTransactionId(transaction) !== transaction.id) {
        console.log('invalid transaction id : ', transaction.id);
        return false;
    }

    const totalTxInValues = transaction.txIns
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts))
        .reduce((a, b) => (a + b), 0); // 데이터값에 따라 스트링은 이어붙여주고 숫자int 는 합해준다. 객체지향 프로그램에선 오버로딩!! 이름은 같은데 매개변수의 타입에 따라 다른함수 기능을 하는것을 오버로딩이라고 한다. 나온값들을 합해서 하나의 값으로 짧은 에로우 펑션은 {} 생략 가능

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
    // 트랜잭션 풀에 있는 txIns 들과 transaction 에 txIns 들을 비교해서 같은 것이 있는지 확인
    const txPoolIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value(); // 속에 있는걸 겉으로 꺼내왔다

    const containTxIn = (txIn) => {
        return _.find(txPoolIns, (txPoolIn) => {
            return txIn.txOutIndex === txPoolIn.txOutIndex &&
                txIn.txOutId === txPoolIn.txOutId;
        })
    }

    for (const txIn of transaction.txIns) {
        if (containTxIn(txIn)) {
            console.log('이미 존재하는 트랜잭션입니다. : ', transaction.id);
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
                removable.push(tx)
                break;
            }
        }
    }
    transactionPool = _.without(transactionPool, ...removable);
}

const isInTx = (txIn) => {
    const findTxOut = _(unspentTxOuts).find((uTxO) => {
        uTxO.txOutIndex === txIn.txOutIndex &&
            uTxO.txOutId === txIn.txOutId
    });

    return findTxOut !== undefined;
}

// processTransaction(transactions /* Transaction[] */, [] /* UnspentTxOut[] */, 0 /* blockIndex */);
const processTransaction = (transactions, unspentTxOuts, blockIndex) => {

    // console.log("processTransaction", transactions)
    // 1. 예외처리 (트랜잭션 구조를 검증하는 과정)
    // if (isValidateBlockTransaction(transactions , unspentTxOuts , blockIndex)) {
    //     console.log('invalid processTransaction!')
    //     return null;
    // }

    // 2. 미사용 txouts를 추출하는 과정
    // 2_1. 블록에 있는 데이터 (처리해야 할 트랜잭션 정보) 중에서 txIns로 소모된 txOuts(UnspentTxOut)를 구성
    const consumedTxOuts = transactions.map((tx) => tx.txIns) // txIns로 구성된 배열로 변경
        .reduce((a, b) => a.concat(b), [])
        .map((txIn) => new UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0));
    // console.log("consumedTxOuts", consumedTxOuts)
    // 2_2. 새로 들어온 트랜잭션 정보에서 추출한 UnspentTxOut 생성
    const newUnspentTxOuts = transactions.map((tx) => {
        return tx.txOuts.map((txOut) => new UnspentTxOut(tx.id, blockIndex, txOut.address, txOut.amount));
    })
        .reduce((a, b) => a.concat(b), []);
    // console.log("newUnspentTxOuts", newUnspentTxOuts)
    // 2_3. 기존 UnspentTxOut - 소모된 UnspentTxOut + newUnspentTxOuts 을 추가
    // 두 1차원 배열의 (txOutId와 txOutIndex 를 비교해서 같은 요소)를 filter 하는 코드를 만들어보자.
    const resultUnspentTxOuts = (unspentTxOuts.filter((uTxO) => !checkSameElement(consumedTxOuts, uTxO.txOutIndex, uTxO.txOutId))).concat(newUnspentTxOuts);

    unspentTxOuts = resultUnspentTxOuts;
    return resultUnspentTxOuts;
}

const checkSameElement = (txOuts, txOutIndex, txOutId) => {
    return txOuts.find((txOut) => txOut.txOutId === txOutId && txOut.txOutIndex === txOutIndex);
}


// let transactionPool = [getCoinbaseTransaction(getPublicKeyFromWallet(), 1)];
// let transactionPool = [getLatestBlock().data];
let transactionPool = [];
const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);
}






export { getTransactionPool, sendTransaction, addToTransactionPool, getCoinbaseTransaction, updateTransactionPool, processTransaction }