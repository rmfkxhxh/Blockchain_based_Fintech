// const Web3 = require('web3');

// const web3 = new Web3(Web3.givenProviders || "ws://localhost:8545");
// console.log(web3);

const connectPromise = async () => {
    let web3;
    let accounts;

    if (window.ethereum) { //메타마스크 설치되어있을때
        console.log('1. connectPromise');
        web3 = new Web3(window.ethereum);
        // console.log(Web3)
        
    } else {
        console.log('메타마스크 설치 필요!');
    }
    if (web3) {
        console.log('2. connectPromise');
        accounts = await web3.eth.requestAccounts();
        console.log(accounts);
    }
}
connectWallet.addEventListener('click', async () => {
    console.log('connectWallet clicked')
    connectPromise();
})

// https://web3js.readthedocs.io/en/v1.7.3/glossary.html