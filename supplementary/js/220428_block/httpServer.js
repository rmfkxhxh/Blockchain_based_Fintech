// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express'; //속도나 크기면에서 require에 비해 compact함
// const express = require('express'); 
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';
import { connectToPeer, getPeers, SendMessage } from './p2pServer.js'

// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/blocks', (req, res) => {
        // console.log("req.body: ", req.body.data)
        res.send(createBlock(req.body.data));
        // res.send('new block created with data: ' + req.body.data + '\n' + getBlocks())
    })
    app.post('/addPeer', (req, res) => {
        res.send(connectToPeer(req.body.newPeer));
        // if (connectToPeer(req.body.newPeer)) {
        //     res.send(connectToPeer(req.body.newPeer))
        // } else {
        //     res.send('failed to connect')
        // }
    })
    app.get('/peers', (req, res) => {
        res.send(getPeers());

    })
    app.post('/sendMessage', (req, res) => {
        res.send(SendMessage(req.body.data));
    })
    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    });
};
export { initHttpServer }