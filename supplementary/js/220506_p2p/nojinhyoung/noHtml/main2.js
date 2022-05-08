import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";
import {initWallet } from "./wallet.js"

// 혼자 test 용 포트 새로 만듬
// 포트등의 숫자 코드에 직접 보여주는건 프로그래머만 -> env(환경변수)에서 제어할 수 있게 짜주는게 관리에 용이
const httpPort3002 = parseInt(process.env.HTTP_PORT) || 3002; 
const p2pPort6002 = parseInt(process.env.P2P_PORT) || 6002;

initWallet();
initHttpServer(httpPort3002);
initP2PServer(p2pPort6002);