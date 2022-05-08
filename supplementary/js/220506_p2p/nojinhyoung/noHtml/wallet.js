/*
    today - 암호화

    탈중앙화 
    분산원장관리 

    무결성 : 정보는 일반적으로 수정이 가능한데, 이는 권한있는 사용자에게만 허가 (일부 정보만 가능, 블록체인에 연결된 것은 불가능)
    기밀성 : 정보를 저장하고 전송하면서 부적절한 노출을 방지, 정보 보안의 주된 목적
    가용성 : 활용되어야할 정보에 접근할 수 없다면, 기밀성과 무결성이 훼손된 것만큼이나 무의미하다

    지갑
    private key 
    public key

    타원 곡선 디지털 서명 알고리즘 (ECDSA) 
        private key로 public key 생성은 가능해도 반대는 불가능

    영지식증명 (zero knowledge proof) - 어린이를 위한 영지식 증명 참조 
        증명하는 사람(A), 증명을 원하는 사람(B)
        A와 B는 증명된 내용에 합의
        그 외의 사람들은 동의하지 않습니다 -> 당사자들만 합의 
        증명하는 과정에서 A는 B에게 아무런 정보도 주지 않는다 
*/

// npm install elliptic -> 타원 곡선 디지털 서명 알고리즘 (ECDSA)
import ecdsa from 'elliptic';
import fs from 'fs';

const ec = new ecdsa.ec('secp256k1'); 
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'default');
const privateKeyFile = privateKeyLocation + '/private_key';

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair(); // generate
    const privateKey = keyPair.getPrivate();
    // console.log(privateKey);
    // console.log(privateKey.toString(16)); // private key

    return privateKey.toString(16);
}

const initWallet = () => {
    // 이미 만들어져 있을 때 
    if(fs.existsSync(privateKeyFile)) {
        console.log("지갑에 비밀키가 이미 만들어져 있음")
        return;
    }

    if(!fs.existsSync('wallet/'))   fs.mkdirSync('wallet/');
    if(!fs.existsSync(privateKeyLocation))   fs.mkdirSync(privateKeyLocation);

    const privatekey = createPrivateKey();
    fs.writeFileSync(privateKeyFile, privatekey);
}

const getPrivateKeyFromWallet = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8');
    // console.log(buffer);
    return buffer.toString();
}

const getPublicKeyFromWallet = () => {
    const privateKey = getPrivateKeyFromWallet();
    const publicKey = ec.keyFromPrivate(privateKey, 'hex'); // 16진수로 
    // console.log(publicKey.getPublic().encode('hex'));       // 04로 시작하는 16진수 return
    return publicKey.getPublic().encode('hex');
}

// initWallet();
// getPrivateKeyFromWallet();
// getPublicKeyFromWallet();
export { initWallet, getPublicKeyFromWallet };