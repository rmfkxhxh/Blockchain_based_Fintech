// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';
import { getLatestBlock, getBlocks, createBlock, addBlock, isValidNewBlock } from './block.js';
import random from 'random';

const sockets = [];
const MessageType = {
    // RESPONSE_MESSAGE: 0,
    // SENT_MESSAGE: 1,

    // 최신 블록 요청
    QUERY_LATEST: 0,
    // 모든 블록 요청
    QUERY_ALL: 1,
    // 요청에 따른 블록 전달
    RESPONSE_BLOCKCHAIN: 2
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({ port: p2pPort });
    server.on('connection', (ws, req) => {
        console.log("initp2p:", req.headers.host)
        initConnection(ws);
        write(ws, queryAllMessage());
    });

    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    console.log("initconnection:")
    sockets.push(ws);
    initMessageHandler(ws);
    // write(ws, queryAllMessage());
};

const connectToPeer = (newPeer) => {
    // console.log('sockets: ', sockets);
    const ws = new WebSocket(newPeer);
    ws.on('open', () => { initConnection(ws); console.log("connected to:", newPeer); return true; })
    ws.on('error', () => {
        console.log('failed to connect to new peer : ', newPeer);
        console.log('failed to connect to ws.remoteAddress : ', newPeer);
        return false;
    })
}

const getPeers = () => {
    return sockets;
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data); //ev.data? test
        switch (message.type) {
            // case MessageType.RESPONSE_MESSAGE: // 메세지 받았을때
            //     break;
            // case MessageType.SENT_MESSAGE: // 보내진 메세지
            //     console.log(message.message);
            //     break;
            case MessageType.QUERY_LATEST:
                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMessage());
                break;
            case MessageType.RESPONSE_BLOCKCHAIN: // 내가 위에서 요청한 블록 데이터를 받음
                console.log(ws._socket.remoteAddress, ' : ', message.data)
                replaceBlockchain(message.data)
                // handleBlockchainResponse(message);
                break;
        }
    })
}

const isValidBlockchain = (receivedBlockchain) => {
    // 같은 제네시스 블록인가
    if (JSON.stringify(receivedBlockchain[0]) === JSON.stringify(getBlocks()[0])) {
        return false;
    }
    // 체인 내의 모든 블록을 확인
    let tempBlock = receivedBlockchain[0];
    for (let i = 1; i < receivedBlockchain.length; i++) {
        console.log("receivedBlockchain ", receivedBlockchain)
        if (isValidNewBlock(receivedBlockchain[i], receivedBlockchain[i - 1]) == false) {
            return false;
        }
    }
    return true;
}

const replaceBlockchain = (receivedBlockchain) => {
    if (isValidBlockchain(receivedBlockchain)) {
        let blocks = getBlocks()
        if (receivedBlockchain.length > blocks.length) {
            console.log('받은 블록체인 길이가 길다')
            blocks = receivedBlockchain;
        } else if (receivedBlockchain.length == blocks.length && random.boolean()) {
            console.log('받은 블록체인 길이가 같다')
            blocks = receivedBlockchain;
        }
    } else {
        console.log('받은 블록체인에 문제가 있음');
    }
}

const handleBlockchainResponse = (receivedBlockchain) => {
    // 받은 블록체인 보다 현재 블록체인이 더 길다. (안바꿈)

    // 받은 블록체인과 현재 블록체인이 같다. (안바꿈 or 바꿈)

    // 받은 블록체인이 현재 블록체인보다 길면 바꾼다. 

    // 
}

// 마지막 요청 보내기
const queryLastestMessage = () => {
    return ({
        "type": MessageType.QUERY_LATEST,
        "data": null
    })
}

// 전체 요청
const queryAllMessage = () => {
    return ({
        "type": MessageType.QUERY_ALL,
        "data": null
    })
}

// 마지막 요청 응답하기
const responseLatestMessage = () => {
    return ({
        "type": MessageType.RESPONSE_BLOCKCHAIN,
        "data": JSON.stringify(getLatestBlock()) /* 내가 가지고 있는 체인의 마지막 블록 */
    })
}

// 요청 전체 응답하기

const responseAllMessage = () => {
    return ({
        "type": MessageType.RESPONSE_BLOCKCHAIN,
        "data": JSON.stringify(getBlocks()) /* 내가 가지고 있는 전체 블록 */
    })
}

const write = (ws, message) => {
    // console.log("write() : ", message)
    ws.send(JSON.stringify(message));
}

const broadcasting = (message) => { // broadcasting
    sockets.forEach((socket) => {
        // console.log(socket);
        write(socket, message);
    })
}

// 내가 새로운 블록을 채굴했을 때 연결된 노드들에게 전파
const mineBlock = (blockData) => { // 블록 생성(createBlock), 배열에 추가(getLatestBlock), 만든 블록 전파 (responseLatestMessage) 
    const newBlock = createBlock(blockData); // newblock
    if (addBlock(newBlock, getLatestBlock())) {
        // broadcasting(responseLatestMessage()); // responseLatestMessage를 broadCasting에 넣어서 모든 소켓에 전달.
    }
}

export { initP2PServer, connectToPeer, getPeers, broadcasting, mineBlock } // mineBlock export