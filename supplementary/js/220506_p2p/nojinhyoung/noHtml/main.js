// p2p 서버 초기화, 사용
// http 서버 초기화, 사용
// 블록체인 함수 사용

import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";
import {initWallet } from "./wallet.js"

// 포트등의 숫자 코드에 직접 보여주는건 프로그래머만 -> env(환경변수)에서 제어할 수 있게 짜주는게 관리에 용이
const httpPort = parseInt(process.env.HTTP_PORT) || 3001; 
const p2pPort = parseInt(process.env.P2P_PORT) || 6001; 

initWallet();
initHttpServer(httpPort);
initP2PServer(p2pPort);

// 연결되는 속도가 차이나서 p2p가 더 빠른듯 비동기 식의 이유