import CryptoJS from 'crypto-js';
import _ from 'lodash';     // 배열에서 할 수 있는 것들과 거의 유사한다. 깊은복사와 관련된 것들을 유용하게 사용할 수 있다.
import { getPublicKeyFromWallet, getPrivateKeyFromWallet } from './wallet.js';

const COINBASE_AMOUNT = 50;

let transactionPool = [];   // let을 사용하면 안에 있는 데이터가 열심히 바낄것이다.  같은 메모리주소에 들어갈수있는 변수가 여러개를 줄 수 있다.
const getTransactionPool = () => {
    return _.cloneDeep(transactionPool); // 깊은 복사를 해준다.
}



// let trans = [...transactionPool]    // 깊은 복사가 되지만 한단계만 된다. 

// 얕은 복사

// let unspentTxOuts = []; // UnspentTxOut [] 사용되지 않은 트랜잭션
let unspentTxOuts = processTransaction(transactionPool /* Transaction[] */, [] /* UnspentTxout[] */, 0 /* blockIndex */); //  processTransaction() return하는 데이터는 UnspentTxOut[] 이다.
const getUnspentTxOuts = () => {
    return _.cloneDeep(unspentTxOuts);
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
    constructor(address, amount) {  // 누구한태 얼마를 준다.
        this.address = address;     // datatype : string
        this.amount = amount;       // datatype : number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거  를 역으로 영지식증명을 통해 계산(추적,확인) 할수있다. 
class TxIn {
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId;         // datatype : string
        this.txOutIndex = txOutIndex;   // datatype : number
        this.sign = sign;               // datatype : string
    }
}

class Transaction { 
    constructor(id, txIns, txOuts) {
        this.id = id;       // datatype : string
        this.txIns = txIns; // datatype : TxIn []
        this.txOuts = txOuts; // datatype : TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transaction.txIns
        .map((txIn) => txIn.txOutId + txIn.txOutIndex)
        // reduce는 0번부터 9번까지 숫자가 들어있는 배열이 있엇다고 하면 0번과 그 다음것을 계산을하여 그 다음값이 시작값이 된다. 최종적으로 하나의 값이 나온다.
        .reduce((a, b) => a + b, '');
    
        // txOuts에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txOuts
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => a + b, '');

    // 위의 두 내용을 다 합해서 hash처리한다.
    return CryptoJS.SHA256(txInsContent + txOutsContent).toString();
}

// transaction signature

const signTxIn = (transaction, txInIndex, privateKey) => {
    // const txIn = transaction.txIns[txInIndex];

    // TODO : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER(); // id를 서명하는것 toDER incoding하는 방식중의 하나 점점 발전해오는 incoding방식
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

// 트랜잭션이 언제 처리되는지 > 블록에 담길때 
// 트랜잭션자체는 많이 만들어질수 있다. 여러사람이 트랜잭션을 만들지만 바로 처리되는것이 아닌 블록에 담기는 것이 의미가 있다.
const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    const tx = createTransaction();

    // 2. 트랜잭션 풀에 추가
    transactionPool.push(tx);

    // 3. 주변 노드에 전파


    return tx;
}

const createTransaction = (amount, address) => {
    // 1. 아직 처리되지 않았지만 트랜잭션 풀에 올라가 있는 내용을 확인
    const myAddress = getPublicKeyFromWallet();
    const myUnspentTxOuts = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress) // 내가 가지고 있는 코인들 중에서 내 주소로 된 애들
    // TODO : ArrowFunction 형태 확인
    // unspentTxOuts.filter(uTxO => uTxO.address === myAddress);

    const filteredUnspentTxOuts = filterTxPoolTxs(myUnspentTxOuts);

    // 2. 거래에 사용되지 않은 TxOuts을 구성, 트랜잭션에 필요한 코인을 확인
    // 넘기는 금액은 다시 나한테 전달
    const { includeTxOuts, leftoverAmount } = findTxOutsForAmount(amount, filteredUnspentTxOuts);

    // 3. 서명 전의 TxIns로 구성
    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn); //includeTxOuts요소하나하나가 createUnsignedTxIn의 매개변수로 들어간다.

    // 4. 트랜잭션을 구성
    const tx = new Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(address, amount, leftoverAmount);
    tx.id = getTransactionId(tx);

    tx.txIns = tx.txIns.map((txIn) => {
        txIn.sign = signTxIn(tx, txIn.txOutIndex, getPrivateKeyFromWallet());
        return txIn;
    });
    return tx;
    // 내가 보유한 TxOuts 10, 15, 20, 40 
    // 내가 지금 만들고 싶은 트랜잭션 코인 60 ==== 85 (25)
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출
    const txIns = _(transactionPool)
            .map((tx) => tx.txIns)
            .flatten() // flatten() 1차원 배열로 만들어준다.
            .value(); // 위 값의 value값으로만 처리해주겠다.

    console.log('트랜잭션 풀 : ', transactionPool);
    console.log('트랜잭션 풀안의 Inputs : ', txIns);

    const removable = [];
    for (const unspentTxOut of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, (txIn) => {
            return txIn.txOutIndex === unspentTxOut.txOutIndex && txIn.txOutId === unspentTxOut.txOutId;
        })

        if (findTxIn === undefined) {

        } 
        else {
            removable.push(unspentTxOut);
        }
    }

    return _.without(myUnspentTxOuts, ...removable);
}

const findTxOutsForAmount = (amount, filteredUnspentTxOuts) => {
    let currentAmount = 0;
    const includeTxOuts = [];
    
    for (const unspentTxOut of filteredUnspentTxOuts) {
        includeTxOuts.push(unspentTxOut);

        currentAmount = currentAmount + unspentTxOut.amount;
        if (currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount;
            return { includeTxOuts, leftoverAmount }; // javascript는 2개의 값을 return할 수 있다.
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
// 트랜잭션 풀에 다른 트랜잭션을 추가하려고 할때 중복되는 것을 확인한다. 
const addToTransactionPool = (transaction) => {
    // 올바른 트랜잭션인지
    if (!isValidateTransaction(transaction, unspentTxOuts)) {
        throw Error('추가하려는 트랜잭션이 올바르지 않다!!!.', transaction);
    }
    // 중복되는지 
    if (!isValidateTxForPool(transaction)) {
        throw Error('추가하려는 트랜잭션이 트랜잭션 풀에 있다!!!.', transaction);
    }

    transactionPool.push(transaction);
}

const isValidateTransaction = (transaction, unspentTxOuts) => {
    if (getTransactionId(transaction) !== transaction.id) {
        console.log('invalid transaction id : ', transaction.id);
        return false;
    }

    const totalTxInValues = transaction.txIns
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts))
        .reduce((a, b) => (a + b), 0); // 0은 초기값이다. {}는 생략한것 짧은 형태일때 뺀것이다.

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
    const findUnspentTxOut = unspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId && uTxO.txOutIndex === txIn.txOutIndex);
    // 트랙잭션의 인수들중에 같은 수들을 뽑아낸다.
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
            return txIn.txOutIndex === txPoolIn.txOutIndex && txIn.txOutId === txPoolIn.txOutId;
        });
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
    
    const removable = []; // 모으는 함수
    // 1. 현재 트랙잭션 풀에 있는 트랜잭션 중에 
    // 사용되지 않은 txOuts내용과 일치하지 않는 트랜잭션들을 제거한다.
    for (const tx of transactionPool) {
        for (const txIn of tx.txIns) {
            if (isInTx(txIn)) {

            }
            else {
                removable.push(tx);
                break; // 찾은시점에서 바로 break 포문은 찾은시점에서 바로 끝난다.
            }
        }
    }

    _.without(transactionPool, ...removable);
}

const isInTx = (txIn) => {
    const findTxOut = _(unspentTxOuts).find((uTx0) => {
        return uTxO.txOutIndex === txIn.txOutIndex && uTx0.txOutId === txIn.txOutId
    });

    return findTxOut !== undefined; // undefined 못찾은것 undefined가 아니면 찾은것
}

const processTransaction = (transactions, unspentTxOuts, blockIndex) => {
    // 1. 예외처리 (트랜잭션 구조를 검증하는 과정) 
    if (!isValidateBlockTransaction(transactions, unspentTxOuts, blockIndex)) {
        console.log('invalid processTransaction');
        return null;
    }

    // 2. 미사용 txouts를 추출하는 과정
    // 2_1. 블록에 있는 데이터 (처리해야할 트랜잭션 정보)

}

export { getTransactionPool , addToTransactionPool, getCoinbaseTransaction, getUnspentTxOuts, processTransaction, updateTransactionPool}