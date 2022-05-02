// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express'; //속도나 크기면에서 require에 비해 compact함
// const express = require('express'); 
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';
import { connectToPeer, getPeers, SendMessage } from './p2pServer.js'
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(express.static(__dirname + "/public"))
    app.set('view engine', 'html');
    nunjucks.configure('views', {
        express: app,
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/', (req, res) => {

        res.render('p2pclient')
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/blocks', (req, res) => {

        res.send(createBlock(req.body.data));

    })
    app.post('/addPeer', (req, res) => {

        const { ipAddress, port } = req.body

        let fullAddress = "ws://" + ipAddress + ":" + port;
        console.log(fullAddress)
        connectToPeer(fullAddress);
        console.log("connectToPeer")

    })
    app.get('/addPeer', (req, res) => {
        res.redirect('/')

    })
    app.get('/peers', (req, res) => {
        res.send(getPeers());

    })
    app.post('/sendMessage', (req, res) => {
        
        let data= {

            "message" : req.body.msg,
            "type" : parseInt(req.body.type)
        }
        console.log(data)
        
        SendMessage(data);

    })
    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    });
};
export { initHttpServer }