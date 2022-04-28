// 블록체인 관련 함수
// 블록 구조 설계
/*
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜젝션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값 (블록의 유일성 - key값)
    previousHash : 이전 블록의 hash (이전 블록을 참조)

*/
import CryptoJS from 'crypto-js'

class Block {
    constructor(index, data, timestamp, hash, previousHash) {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}



const getBlocks = () => {
    return blocks;
}

const calculateHash = (index, data, timestamp, previousHash) => {
    console.log((index + data + timestamp + previousHash).toString())
    return CryptoJS.SHA256((index + data + timestamp + previousHash).toString()).toString();
}

const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks',
        new Date().getTime() / 1000, 0, 0)
    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash);
    // blocks.push(genesisBlock);
    return genesisBlock;
}

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000; //초단위로
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash);
    const nextBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash)

    if (isValidNewBlock(nextBlock, previousBlock)) {
        blocks.push(nextBlock);
        return nextBlock;
    }
    
    console.log("failed to create new block");
    return null;
}

// let testHash = calculateHash(10, 20, 30, 40);
// console.log(testHash)

// 블록의 무결성 검증
/*
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전의 블록의 hash이다.
    블록의 구조가 일치해야한다.

*/
const isValidBlockStructure = (newBlock) => {
    if (typeof (newBlock.index) === 'number'
        && typeof (newBlock.data) === 'string'
        && typeof (newBlock.timestamp) === 'number'
        && typeof (newBlock.hash) === 'string'
        && typeof (newBlock.previousHash) === 'string') {
        return true;
    } else {
        return false;
    }

}

const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1) {
        console.log('invalid index');
        return false;
    }
    else if (newBlock.previousHash !== previousBlock.hash) {
        console.log('invalid previousHash');
        return false;
    }
    else if (!isValidBlockStructure(newBlock)) {
        console.log('invalid block structure');
        return false;
    }

    return true;
}

const blocks = [createGenesisBlock()];

export { getBlocks, createBlock }