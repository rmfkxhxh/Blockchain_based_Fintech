// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';

const sockets = [];
const MessageType = {
    RESPONSE_MESSAGE: 0,
    SENT_MESSAGE: 1,

    // 최신 블록 요청
    // 모든 블록 요청
    // 요청에 따른 블록 전달
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({ port: p2pPort });
    server.on('connection', (ws, req) => {
        console.log(req.headers.host)
        initConnection(ws);
        initMessageHandler(ws);
    });

    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);

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
            case MessageType.RESPONSE_MESSAGE: // 메세지 받았을때
                break;
            case MessageType.SENT_MESSAGE: // 보내진 메세지
                console.log(message.message);
                break;
        }
    })

}

const write = (ws, message) => {
    // console.log("write() : ", message)
    ws.send(JSON.stringify(message));
}

const SendMessage = (message) => { // broadcasting
    sockets.forEach((socket) => {
        // console.log(socket);
        write(socket, message);
    })
}
// const resposeMessage = () => {

// }

export { initP2PServer, connectToPeer, getPeers, SendMessage }