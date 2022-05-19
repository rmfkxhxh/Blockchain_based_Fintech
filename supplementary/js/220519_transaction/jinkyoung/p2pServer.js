// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws'
import { WebSocketServer } from 'ws'
import { getBlocks, getLatestBlock, createBlock, addBlock, isValidNewBlock, replaceBlockchain } from './block.js'
import { getTransactionPool, addToTransactionPool } from './transaction.js'

const MessageType = {
    // RESPONSE_MESSAGE : 0,
    // SENT_MESSAGE : 1

    // 최신 블록 요청
    QUERY_LATEST : 0,
    // 모든 블록 요청
    QUERY_ALL : 1,
    // 블록 전달
    RESPONSE_BLOCKCHAIN : 2,

    QUERY_TRANSACTION_POOL : 3,
    RESPONSE_TRANSACTION_POOL : 4
}

const sockets = [];

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort});
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

const connectionToPeer = (newPeer) => {
    console.log(newPeer);
    const ws = new WebSocket(newPeer);
    ws.on('open', () => { initConnection(ws); console.log('Connect peer : ', newPeer); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        switch(message.type)
        {
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
                handleBlockchainResponse(message.data);
                break;
            case MessageType.QUERY_TRANSACTION_POOL:
                write(ws, responseTransactionPoolMessage());
                break;
            case MessageType.RESPONSE_TRANSACTION_POOL:
                handleTransactionPoolResponse(message.data);
                break;
        }
    })
}

const handleBlockchainResponse = (receiveBlockchain) => {
    const newBlocks = JSON.parse(receiveBlockchain);
    // 받아온 블록의 마지막 인덱스가 내 마지막 블록의 인덱스보다 크다.
    const latestNewBlock = newBlocks[newBlocks.length - 1];
    console.log('받아온 마지막 블록 : ', latestNewBlock);
    const latestMyBlock = getLatestBlock();
    console.log('내 마지막 블록 : ', latestMyBlock);

    if (latestNewBlock.index > latestMyBlock.index)
    {
        // 받아온 마지막 블록의 previousHash와 내 마지막 블록의 hash를 확인한다.
        if (latestNewBlock.previousHash === latestMyBlock.hash)
        {
            if (addBlock(latestNewBlock, latestMyBlock))
            {
                // 제한된 플러딩을 사용한다. flooding
                broadcasting(responseLatestMessage());
            }
        }
        // 받아온 블록의 전체 크기가 1인 경우 -> 재요청
        else if (newBlocks.length === 1)
        {
            broadcasting(queryAllMessage());
        }
        // 그외
        // 받은 블록체인보다 현재 블록체인이 더 길거나 (안 바꿈)    
        // 같으면. (바꾸거나 안 바꿈)
        // 받은 블록체인이 현재 블록체인보다 길면 바꾼다.
        else 
        {
            replaceBlockchain(newBlocks);
        }
    }
}

const handleTransactionPoolResponse = (recieveTransactionPool) => {
    const receiveTransactions = JSON.parse(recieveTransactionPool)
    console.log('receiveTransactions : ', receiveTransactions);

    receiveTransactions.forEach((transaction) => {
        addToTransactionPool(transaction);

        // 다시 전파
    });
}

const queryLatestMessage = () => {
    return ({ 
            "type":MessageType.QUERY_LATEST,
            "data":null  })
}

const queryAllMessage = () => {
    return ({ 
            "type":MessageType.QUERY_ALL,
            "data":null  })
}

const responseLatestMessage = () => {
    return ({ 
        "type":MessageType.RESPONSE_BLOCKCHAIN,
        "data":JSON.stringify([getLatestBlock()])  })
}

const responseAllMessage = () => {
    return ({ 
        "type":MessageType.RESPONSE_BLOCKCHAIN,
        "data":JSON.stringify(getBlocks())  })
}

const responseTransactionPoolMessage = () => {
    return ({ 
        "type":MessageType.RESPONSE_TRANSACTION_POOL,
        "data":JSON.stringify(getTransactionPool())  })
}

const write = (ws, message) => {
    console.log('write() ', ws._socket.remoteAddress, ' : ', message);
    ws.send(JSON.stringify(message));
}

const broadcasting = (message) => {
    sockets.forEach( (socket) => {
        write(socket, message);
    });
}

const mineBlock = (blockData) => {
    const newBlock = createBlock(blockData);
    if (addBlock(newBlock, getLatestBlock()))
    {
        broadcasting(responseLatestMessage());
    }
}

const broadcastiongTransactionPool = () => {
    broadcasting(responseTransactionPoolMessage())
}


export { initP2PServer, connectionToPeer, getPeers, broadcasting, mineBlock, broadcastiongTransactionPool }