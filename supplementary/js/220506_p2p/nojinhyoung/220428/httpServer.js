// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
// 웹 -> express 명령어 해석 -> body-parser
// const express = require('express') // 통채로 다 불러옴 
// import 사용시 필요한 애만 불러옴 => 속도와 크기면에서 우세

import express from 'express'; 
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import path from 'path';
import { createBlock, getBlocks } from './block.js';
import { connectionToPeer, getPeers, sendMessage, getMessage } from './p2pServer.js';

const __dirname = path.resolve();
// 초기화 함수 

const initHttpServer = (myHttpPort) => {
    const myMessage = [];
    let yourMessage;

    const app = express();
    app.set('view engine', 'html')
    nunjucks.configure('views', {
        express:app
    });
    app.use(express.static(__dirname+'/public'));
    // app.use(express.urlencoded({extended:true}));
    // app.use(express.json());
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        // res.send("Hello, World!");
        yourMessage = getMessage();
        res.render("chat", {myMessage: myMessage, yourMessage: yourMessage});
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/createBlock', (req, res) => {
        res.send(createBlock(req.body.data));
    })

    app.get('/peers', (req, res) => {
        res.send(getPeers());
    })

    app.post('/addPeer', (req, res) => {
        console.log(req.body.data);
        res.send(connectionToPeer(req.body.data))
    })    
    
    app.post('/sendMessage', (req, res) => {
        let newMessage = sendMessage(req.body.data)
        myMessage.push(`나 :  ${req.body.data.message}`);
        console.log(req.body.data.message);
        res.send(newMessage);
    })    

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    })
}

export { initHttpServer }