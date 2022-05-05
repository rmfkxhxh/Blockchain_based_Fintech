// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws'
import { WebSocketServer } from 'ws'
import { getBlocks, getLatestBlock, createBlock, addBlock, isValidNewBlock, replaceBlockchain, isValidBlockchain } from './block.js'


const MessageType = {
    // RESPONSE_MESSAGE : 0,
    // SENT_MESSAGE : 1

    // 최신 블록 요청
    QUERY_LATEST: 0,
    // 모든 블록 요청
    QUERY_ALL: 1,
    // 블록 전달
    RESPONSE_BLOCKCHAIN: 2
}

const sockets = [];

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({ port: p2pPort });
    server.on('connection', (ws) => {
        initConnection(ws);
    })

    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);
    write(ws, queryAllMessage());
}

const connectToPeer = (newPeer) => {
    console.log(newPeer);
    const ws = new WebSocket(newPeer);
    ws.on('open', () => { initConnection(ws); console.log('Connect peer : ', newPeer); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        switch (message.type) {
            // case MessageType.SENT_MESSAGE:      // 메시지 받았을 때
            //     console.log(ws._socket.remoteAddress, ' : ', message.message);
            //     break;
            case MessageType.QUERY_LATEST:

                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMessage());
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:
                console.log(ws._socket.remoteAddress, ' : ', message.data);
                replaceBlockchain(message.data);
                //handleBlockchainResponse(message);
                break;
        }
    })
}


const handleBlockchainResponse = (receiveBlockchain) => {
    // 받은 블록체인보다 현재 블록체인이 더 길거나 (안 바꿈)

    // 같으면. (바꾸거나 안 바꿈)

    // 받은 블록체인이 현재 블록체인보다 길면 바꾼다.

}

const queryLatestMessage = () => {
    return ({
        "type": MessageType.QUERY_LATEST,
        "data": null
    })
}

const queryAllMessage = () => {
    return ({
        "type": MessageType.QUERY_ALL,
        "data": null
    })
}

const responseLatestMessage = () => {
    return ({
        "type": MessageType.QUERY_LATEST,
        "data": getLatestBlock()
    })
}

const responseAllMessage = () => {
    return ({
        "type": MessageType.RESPONSE_BLOCKCHAIN,
        "data": JSON.stringify(getBlocks())
    })
}

const write = (ws, message) => {
    console.log('write() ', ws._socket.remoteAddress, ' : ', message);
    ws.send(JSON.stringify(message));
}

const broadcasting = (message) => {
    sockets.forEach((socket) => {
        write(socket, message);
    });
}

const mineBlock = (blockData) => {
    const newBlock = createBlock(blockData);
    if (addBlock(newBlock, getLatestBlock())) {
        broadcasting(responseLatestMessage());
        broadcasting(responseAllMessage());
    }
}

// 내가 새로운 블록을 채굴했을 때 연결된 노드들에게 전파


export { initP2PServer, connectToPeer, getPeers, broadcasting, mineBlock }