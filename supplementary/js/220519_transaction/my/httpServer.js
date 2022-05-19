// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
// const epress = require('express') // 전부다 가져온다.
import express from 'express';              // 필요한 것만 가져와서 간결하게 쓸수 있다.
import bodyParser from 'body-parser';
import { getBlocks, createBlock, getUnspentTxOuts } from './block.js';
import { connectionToPeer, getPeers, mineBlock } from './p2pServer.js';
import { getPublicKeyFromWallet } from './wallet.js'
import { getTransactionPool, sendTransaction } from './transaction.js'
// import path from 'path';

// 초기화 함수
const initHttpServer = (myHttpPoryt) => {
    const app = express();
    // const __dirname = path.resolve();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        //res.sendFile(path.join(__dirname, './index.html'));;
        res.send('Hello, World!');;
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    // app.post('/createblock', (req, res) => {
    //     const data = req.body.data
    //     res.send(createBlock(data));        
    // })

    app.post('/createblock', (req, res) => {
        res.send(createBlock(req.body.data));
    })

    app.post('/mineBlock', (req, res) => {
        res.send(mineBlock(req.body.data));
    })

    app.post('/peers', (req, res) => {
        res.send(getPeers())
    })

    app.post('/addPeer', (req, res) => {
        console.log('/addrPeer : ', req.body.message);
        res.send(connectionToPeer(req.body.data));
    })

    // app.post('/sendMessage', (req, res) => {
    //     res.send(sendMessage(req.body.data))
    // })

    // app.post('/allblocks', (req, res) => {
    //     res.send(responseAllMessage(req.body.data))
    // })

    // app.use('/latestblock', (req, res) => {
    //     res.send(responseLatestMessage(req.body.data))
    // })

    app.post('/allblocks', (req, res) => {
        res.send(queryAllMessage(req.body.data))
    })

    app.use('/latestblock', (req, res) => {
        res.send(queryLatestMessage(req.body.data))
    })

    app.get('/address', (req, res) => {
        const address = getPublicKeyFromWallet();
        res.send({ 'address': address });
    })

    app.post('/sendTransaction', (req, res) => {
        const address = req.body.address;           // 트랙잭션 아웃 정보
        const amount = req.body.amount;             // 트랙잭션 아웃 정보

        res.send(sendTransaction(address, amount));
    })

    app.get('/transactions', (req, res) => {
        res.send(getTransactionPool());
    })

    app.get('/unspentTxOuts', (req, res) => {
        res.send(getUnspentTxOuts())
    })

    app.listen(myHttpPoryt, () => {
        console.log('listening httpServer Port : ', myHttpPoryt);
    })
}

export { initHttpServer }