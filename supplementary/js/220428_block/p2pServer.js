// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';

const sockets = [];

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({ port: p2pPort });
    server.on('connection', (ws) => {
        initConnection(ws);
    });
    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    console.log('connect to : ', ws);
};

export { initP2PServer }