// peer to peer = p2p, 노드 vs 노드, 개인과 개인, 서로가 필요한 정보를 복사해주며 공유해가며 통신
// 다른노드와 통신을 위한 서버 
import WebSocket from 'ws'
import { WebSocketServer } from 'ws'; // 포트만 넣어주면 서버만들어주는 친구
import { getBlocks, getLatestBlock, createBlock, addblock, replaceBlockchain } from './block.js'
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

const sockets = []; // 

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort})
    server.on('connection', (ws) => {
        initConnection(ws);        
        //console.log("온건가?")
    })
    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);

    write(ws, queryAllMessage());
    //console.log("ddd")
}

const connectionToPeer = (newPeer) => {  // newPeer = ip:port
    console.log(newPeer)
    const ws = new WebSocket(newPeer) // ws = 상대방의 웹소켓 정보
    ws.on('open', () => { initConnection(ws); console.log('Connect peer : ', newPeer ); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })    
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data); // 메시지를 제이슨으로 변경

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
                //replaceBlockchain(message.data);
                handleBlockchainResponse(message.data);
                break;
            case MessageType.QUERY_TRANSACTION_POOL:
                write(ws, responseTransactionPoolMessage());
                break;
            case MessageType.RESPONSE_TRANSACTION_POOL:
                handleTransactionPoolResponse(message.data)
                break;
        }
    })
}

const handleBlockchainResponse = (receiveBlockchain) => {
    const newBlocks = JSON.parse(receiveBlockchain)
    // 받아온 블록의 마지막 인덱스가 내 마지막 블록의 인덱스보다 크다. 
    const latestNewBlock = newBlocks[newBlocks.length - 1];
    console.log('받아온 마지막 블록 : ', latestNewBlock)
    const latestMyBlock = getLatestBlock();    
    console.log('내 마지막 블록 : ', latestMyBlock)
    
    // 받아온 마지막 블록의 previousHash와 내 마지막 블록의 hash를 확인한다.
    if(latestNewBlock.index > latestMyBlock.index)
    {    
        if (latestNewBlock.previousHash === latestMyBlock.hash)
        {
            if (addblock(latestNewBlock, latestMyBlock)) 
            {   // 제한된 flooding 플러딩을 사용한다 = 최대한 많이 전파한다
                broadcasting(responseLatestMessage());
            } 
        }
        // 받아온 블록의 전체 크기가 1인 경우 -> 재요청
        else if(newBlocks.length === 1)
        {
            broadcasting(queryAllMessage());
        }
        else
        {
            replaceBlockchain(newBlocks);
            // 그외
            // // 받은 블록체인보다 현재 블록체인이 더 길다 (안바꿈)
            // // 같으면. (바꾸거나 안바꿈) // 
            // // 받은 블록체인이 현재 블록체이보다 더 길면 (바꿈)
        }        
    }    
}

const handleTransactionPoolResponse = (recieveTransactionPool) => {
    const receivedTransactions = JSON.parse(recieveTransactionPool)
    console.log('recieveTransactionPool : ', receivedTransactions);

    receivedTransactions.map((transaction) => {
        console.log(transaction)
        addToTransactionPool(transaction);
        // 중복검사, 트랜잭션 풀에 추가
        

        // 다시 전파
    })
    // addToTransactionPool
}

const queryLatestMessage = () => {
    return ({ 
            "type" : MessageType.QUERY_LATEST, 
            "data" : null })
}

const queryAllMessage = () => {
    return ({ 
            "type" : MessageType.QUERY_ALL, 
            "data" : null })
}

const responseLatestMessage = () => {
    return ({
            "type" : MessageType.RESPONSE_BLOCKCHAIN, 
            "data" : JSON.stringify([getLatestBlock()]) }) /* 내가 가지고 있는 체인의 마지막 블록 */ 
}

const responseAllMessage = () => {
    return ({
            "type" : MessageType.RESPONSE_BLOCKCHAIN, 
            "data" : JSON.stringify(getBlocks()) }) /* 내가 가지고 있는 전체 블록 */
}

const responseTransactionPoolMessage = () => {
    return ({
            "type" : MessageType.RESPONSE_TRANSACTION_POOL,
            "data" : JSON.stringify(getTransactionPool()) })
}

const write = (ws, message) => { // ws 보낼 상대방의 웹소켓정보 
    console.log('write()', ws._socket.remoteAddress, ' : ', message);
    ws.send(JSON.stringify(message)) // 제이슨을 메시지로 변경 
} // 내가 상대방의 메시지를 


const broadcasting = (message) => {
    sockets.forEach( (socket) => {
        write(socket, message);
    });
}

const mineBlock = (blockdata) => {
    const newBlock = createBlock(blockdata);
    if(addblock(newBlock, getLatestBlock()))
    {
        broadcasting(responseLatestMessage());
    }
}

// JSON.parse 와 JSON.stringify 서로 변경할수 있다.
// const responseMessage = () => {
//     console.log()
// }

// 내가 새로운 블록을 채굴했을 때 연결된 노드들에게 전파

const broadcastingTransactionPool = () => {
    broadcasting(responseTransactionPoolMessage())
}

export { initP2PServer, connectionToPeer, getPeers, broadcasting, mineBlock, broadcastingTransactionPool}
