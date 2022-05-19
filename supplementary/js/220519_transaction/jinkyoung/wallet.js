/*
    암호화

    탈중앙화
    분산원장관리

    무결성 : 정보는 일반적으로 수정이 가능한데, 이는 권한 있는 사용자에게만 허가
    기밀성 : 정보를 저장하고 전송하면서 부적절한 노출을 방지, 정보 보안의 주된 목적
    가용성 : 활용되어야 할 정보에 접근할 수 없다면, 기밀성과 무결성이 훼손된 
             것만큼이나 무의미하다.

    지갑
    private Key
    public Key

    타원 곡선 디지털 서명 알고리즘 (ECDSA)

    영지식증명 (Zero Knowledge Proof)

    증명하는 사람(A), 증명을 원하는 사람(B)
    A와 B는 증명된 내용에 합의'
    그 외의 사람들은 동의하지 않습니다.
    증명하는 과정에서 A는 B에게 아무런 정보도 주지 않는다.
*/

import ecdsa from 'elliptic';
import fs from 'fs';

const ec = new ecdsa.ec('secp256k1');
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'default');
const privateKeyFile = privateKeyLocation + '/private_key';

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();
    // console.log(privateKey);
    // console.log(privateKey.toString(16));

    return privateKey.toString(16);
}

const initWallet = () => {
    // 이미 만들어져 있을 때
    if (fs.existsSync(privateKeyFile)) {
        console.log('지갑에 비밀키가 만들어져 있음');
        return;
    }

    if (!fs.existsSync('wallet/')) { fs.mkdirSync('wallet/'); }
    if (!fs.existsSync(privateKeyLocation)) { fs.mkdirSync(privateKeyLocation); }

    const privateKey = createPrivateKey();
    fs.writeFileSync(privateKeyFile, privateKey);
}

const getPrivateKeyFromWallet = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8');
    return buffer.toString();
}

const getPublicKeyFromWallet = () => {
    const privateKey = getPrivateKeyFromWallet();
    const publicKey = ec.keyFromPrivate(privateKey, 'hex');

    // TODO : 131자리 확인
    //    043391008a5302cd9683fea6ef3dd52601f46b9d2cba98ab0c60fa53bdc06817c19ffc50b378a80c54f939fa55e2e8295480737daa9d3f8454d8922156b5d222af 
    return publicKey.getPublic().encode('hex');
}

export { getPublicKeyFromWallet, getPrivateKeyFromWallet, initWallet }