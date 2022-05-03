import CryptoJS from 'crypto-js';

class Block {
    constructor(index, data, timestamp, hash, previousHash, difficulty, nonce) {
        this.index = index;         // n번째 블록
        this.data = data;           // 블록 데이터
        this.timestamp = timestamp; // 생성 시간
        this.hash = hash;           // 이거만 계산하면 됨
        this.previousHash = previousHash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}

const calculateHash = (index, data, timestamp, previousHash, difficulty, nonce) => {
    return CryptoJS.SHA256(`${index + data + timestamp + previousHash + difficulty + nonce}`).toString();
}

// 작업증명 재현 -> 증명과정 필요 -> 아무거나 형태가 비슷하다고 블록으로 인정될게 아니다
// 0 두 개로 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다
// 16진수 64자라 
// 16진수 1자리 -> 2진수 4자리 256개의 0과 1로 표현 

const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', 0, 0, 0, 0, 0);

    // genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash, genesisBlock.difficulty, genesisBlock.nonce);
    genesisBlock.hash = calculateHash(0);

    return genesisBlock;
}

const getBlocks = () => {
    return blocks;
}

const getLatestBlock = () => {
    return blocks[blocks.length - 1];
}

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextDifficulty = 1;
    const nextNonce = findNonce(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty);

    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash, nextDifficulty, nextNonce);

    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash, nextDifficulty, nextNonce);

    return newBlock;
}

const addBlock = (newBlock, previousBlock) => {
    if (isValidNewBlock(newBlock, previousBlock)) {
        blocks.push(newBlock);
        console.log('block added')
        return true;
    }
    return false;
}

// 블록의 무결성 검증
/**
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전 블록의 hash이다.
    블록의 구조가 일치해야 한다.
 */
const isValidBlockStructure = (newBlock) => {
    if (typeof (newBlock.index) === 'number'
        && typeof (newBlock.data) === 'string'
        && typeof (newBlock.timestamp) === 'number'
        && typeof (newBlock.hash) === 'string'
        && typeof (newBlock.previousHash) === 'string'
        && typeof (newBlock.difficulty) === 'number'
        && typeof (newBlock.nonce) === 'number') {
        return true;
    }

    return false;
}
const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1) {
        console.log('invalid index');
        return false;
    } else if (newBlock.previousHash !== previousBlock.hash) {
        console.log('invalid previousHash');
        return false;
    } else if (!isValidBlockStructure(newBlock)) {
        console.log('invalid block structure')
        return false;
    }

    return true;
}

// 문제 해결을 검사하는 함수
const hashMatchDifficulty = (hash, difficulty) => {
    const binaryHash = hexToBinary(hash);
    const requiredPrefix = '0'.repeat(difficulty); // prefix 접두어 0 몇개 체크용 -> 난이도(difficulty) 만큼 있니 비교용

    return binaryHash.startsWith(requiredPrefix); // startsWith 문자열이 어떤 문자열로 시작하는지 판별 매서드
}

const hexToBinary = (hex) => {
    const lookupTable = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
        'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111',
    }

    // ex) 03cf 이 들어오면
    // binary = 0000 0011 1100 1111 
    let binary = '';
    for (let i = 0; i < hex.length; i++) {
        if (lookupTable[hex[i]]) {
            binary += lookupTable[hex[i]];
        } else {
            console.log('invalid hex : ', hex);
            return null;
        }
    }

    return binary;
}

const findNonce = (index, data, timestamp, previousHash, difficulty) => {
    let nonce = 0;

    while (true) {
        let hash = calculateHash(index, data, timestamp, previousHash, difficulty, nonce);

        if (hashMatchDifficulty(hash, difficulty)) {
            return nonce;
        } else {
            nonce++;
        }
    }
}


let blocks = [createGenesisBlock()];

export { getBlocks, createBlock, getLatestBlock, addBlock, isValidNewBlock, blocks}