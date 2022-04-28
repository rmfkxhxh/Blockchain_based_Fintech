// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express'; //속도나 크기면에서 require에 비해 compact함
// const express = require('express'); 
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';

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

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    });
};
export { initHttpServer }