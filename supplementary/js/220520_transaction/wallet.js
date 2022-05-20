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
// console.log(getPrivateKeyFromWallt());
// console.log(createPublickey());

const createPublickey  = (privateKey) => {
    const publicKey = ec.keyFromPrivate(privateKey, 'hex')  
    return publicKey.getPublic().encode('hex')
}

export { initWallet, getPublicKeyFromWallet, getPrivateKeyFromWallt , createPrivateKey, createPublickey}



// var string = '045f91db2dc67817c4af3fa7eb3f325ed77d0c759cba0d4adb7a05eca6fc9efc02d723a8ca40d78d70873a2e3497b36b1866ce3c0f24b22691ca79565ef2fbe068';

// console.log(string.length);


// TODO api 중 숫자를 단어로 바꿔주는거 쓸거임