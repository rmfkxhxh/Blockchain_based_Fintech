/* 
    암호화

    블록체인 
        탈중앙화
        분산원장관리

        무결성 : 정보는 일반적으로 수정이 가능한데, 이는 권한이 있는 사용자에게만 허가 
        기밀성 : 정보를 저장하고 전송하면서 부적절한 노출을 방지, 정보 보안의 주된 목적
        가용성 : 활용되어야 할 정보에 접근할 수 없다면, 기밀성과 무결성이 훼손된 것만큼이나 무의미하다.

    지갑 
        프라이빗키 으로 퍼블릭키를 만들수 있지만 퍼블릭키로 프라이빗키를 유추할수 없다
    private Key 
    public Key 

    타원 곡선 디지털 서명 알고리즘 (ECDSA)
    
    영지식증명 (Zero Knowledge Proof)
        증명하는 사람(A), 증명을 원하는 사람(B) 
        A와 B는 증명된 내용에 합의
        그 외의 사람들은 동의하지 않는다.
        증명하는 과정에서 A는 B에게 아무런 정보도 주지 않는다. 
*/

import ecdsa from 'elliptic'
import fs from 'fs';

const ec = new ecdsa.ec('secp256k1');
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'defalut' );
const privateKeyFile = privateKeyLocation + '/private_key';

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();
    
    // console.log(privateKey);
    // console.log(privateKey.toString(16));

    return privateKey.toString(16)
}

const initWallet = () => {
    // 이미 만들어져 있을 때
    if (fs.existsSync(privateKeyFile)) {
        console.log('지갑에 비밀키가 만들어져 있음');
        return;
    } 

    if (!fs.existsSync('wallet/')) { fs.mkdirSync('wallet/'); }                     // 폴더가 없으면 만들어줘
    if (!fs.existsSync(privateKeyLocation)) { fs.mkdirSync(privateKeyLocation); }   // 폴더에 로케이션이 없으면 만들어줘

    const privateKey = createPrivateKey();
    fs.writeFileSync(privateKeyFile, privateKey);
}

const getPrivateKeyFromWallt = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8');
    return buffer.toString();
}

const getPublicKeyFromWallet = () => {
    const privateKey = getPrivateKeyFromWallt();
    const publicKey = ec.keyFromPrivate(privateKey, 'hex');

    // console.log(publicKey.getPublic().encode('hex'));        

    return publicKey.getPublic().encode('hex')
}


//initWallet();
console.log(getPrivateKeyFromWallt());
console.log(getPublicKeyFromWallet());
export { initWallet, getPublicKeyFromWallet, getPrivateKeyFromWallt }



// var string = '045f91db2dc67817c4af3fa7eb3f325ed77d0c759cba0d4adb7a05eca6fc9efc02d723a8ca40d78d70873a2e3497b36b1866ce3c0f24b22691ca79565ef2fbe068';

// console.log(string.length);


// TODO api 중 숫자를 단어로 바꿔주는거 쓸거임