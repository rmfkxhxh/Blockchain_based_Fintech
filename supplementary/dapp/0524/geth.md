## geth main net

### 설치
mac : https://geth.ethereum.org/docs/install-and-build/installing-geth
window : https://geth.ethereum.org/downloads/

### 설치 확인
설치시 geth --help 로 확인 => 안될 경우 환경변수 설정 필요

geth console -> 이더리움 메인넷에 접속

터미널 하나 더 열고 
window : geth attach ipc:\\.\pipe\geth.ipc 
mac : geth attach ipc:~/.ethereum/geth.ipc

용량 주의 -> 총 1테라가 넘어가니 확인만하고 날리기

## geth attach ipc:\\.\pipe\geth.ipc 
instance: Geth/v1.10.17-stable-25c9b49f/windows-amd64/go1.18
coinbase: ? 이거 왜 안보일까 -> account가 없어서
at block: 0 (Thu Jan 01 1970 09:00:00 GMT+0900 (KST))
 datadir: C:\Users\User\AppData\Local\Ethereum
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

### > web3.version
{
  api: "0.20.1",
  ethereum: undefined,
  network: "1",
  node: "Geth/v1.10.17-stable-25c9b49f/windows-amd64/go1.18",
  whisper: undefined,
  getEthereum: function(callback),
  getNetwork: function(callback),
  getNode: function(callback),
  getWhisper: function(callback)
}

### > web3.version.api
"0.20.1"

### > var apiversion = web3.version.api
undefined

### > net
{
  listening: true,
  peerCount: 9,
  version: "1",
  getListening: function(callback),
  getPeerCount: function(callback),
  getVersion: function(callback)
}

### > admin.nodeInfo
{
  enode: "enode://c2148453843bd9c5b2af647d35f3fe56ab94e0c6d38651aa28a9f836b1e1386e410d5910207813365d4ce23218499109c8163b1acf4716a33be26ba07da63c65@14.7.171.217:30303",
  enr: "enr:-Ka4QBbfrzPlDe24tg_Z1oZMRf-iPJc4S2VpzJaTNq0bev6_EQIEh-lm0GMvMpK7sw1OahEg8kHEERoyQddAT3frc_-GAYDz30CJg2V0aMrJhPxk7ASDEYwwgmlkgnY0gmlwhA4Hq9mJc2VjcDI1NmsxoQPCFIRThDvZxbKvZH018_5Wq5TgxtOGUaooqfg2seE4boRzbmFwwIN0Y3CCdl-DdWRwgnZf",
  id: "61aa3e511116aa258f8763303490ae77ea5f718795baff9ade315ce91bab158a",
  ip: "14.7.171.217",
  listenAddr: "[::]:30303",
  name: "Geth/v1.10.17-stable-25c9b49f/windows-amd64/go1.18",
  ports: {
    discovery: 30303,
    listener: 30303
  },
  protocols: {
    eth: {
      config: {
        arrowGlacierBlock: 13773000,
        berlinBlock: 12244000,
        byzantiumBlock: 4370000,
        chainId: 1,
        constantinopleBlock: 7280000,
        daoForkBlock: 1920000,
        daoForkSupport: true,
        eip150Block: 2463000,
        eip150Hash: "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0",
        eip155Block: 2675000,
        eip158Block: 2675000,
        ethash: {},
        homesteadBlock: 1150000,
        istanbulBlock: 9069000,
        londonBlock: 12965000,
        muirGlacierBlock: 9200000,
        petersburgBlock: 7280000
      },
      difficulty: 17179869184,
      genesis: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
      head: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
      network: 1
    },
    snap: {}
  }
}

### > admin.peers
[{
    caps: ["eth/66", "snap/1"],
    enode: "enode://68814e6a27fad242efdbcb5cf9c74609d0db391feafe7135d6aa88f01490377b521582370d3d49e74a729ef2bb5dcdd641036257f767a5ec6efbc5b4ebeb6830@84.17.42.218:30303",
    enr: "enr:-J-4QKrkgAIelaQlfeD6GbwR_gOhlx4rakkL-Q9ot1fut7dFbX7RE1pyjORKoRa7ODG9_tuvGioO0sUBlOCWvChshU2CATeDZXRox8aEIMMn_ICCaWSCdjSCaXCEVBEq2olzZWNwMjU2azGhAmiBTmon-tJC79vLXPnHRgnQ2zkf6v5xNdaqiPAUkDd7hHNuYXDAg3RjcIJ2X4N1ZHCCdl8",
    id: "139b1d5faf2339bbfe1280a105c42c639f5e6e826e20268d0428fe0ab32d10ce",
    name: "Geth/v1.10.15-stable/linux-amd64/go1.18",
    network: {
      inbound: false,
      localAddress: "192.168.0.237:63441",
      remoteAddress: "84.17.42.218:30303",
      static: false,
      trusted: false
    },
    protocols: {
      eth: {
        difficulty: 4.980642764251852e+22,
        head: "0x6d5efdecf776266d11c3da50a11fcdc5cd23f6e8d27796aab31c9acc5c1e24d2",
        version: 66
      },
      snap: {
        version: 1
      }
    }
}, {
    caps: ["eth/66"],
    enode: "enode://62b4b92edcd842fddbea0b34a6f544f6cfd025727ea12e1937a86da0daaa8139245dfc92eb543d21adb0d2ef0b2841ab84bd7cfa31524c50af108b44920d39df@95.216.188.255:30303",
    id: "be26bb8ff43d801881ad9da1440f335bd6518ca7f1d4e6074e1139e0ab449621",
    name: "Geth/v1.0.0-alpha1-33ebea74/linux-amd64/go1.17.8",
    network: {
      inbound: false,
      localAddress: "192.168.0.237:63488",
      remoteAddress: "95.216.188.255:30303",
      static: false,
      trusted: false
    },
    protocols: {
      eth: "handshake"
    }
}, {
    caps: ["eth/66", "snap/1"],
    enode: "enode://471057d071c2d0a5a0008255f39cff4a9e0ca695d9f290b98f81e05a9db1f9e4042520945b646b75c71a8373e8dbddec06ea33b8a7b501201abaaff64b001001@212.102.60.119:30303",
    enr: "enr:-J-4QJGiANyzj_cKAu4CeaaVSz91Sdk0zsta8oSGcpHyrcSoN3I9MQe9M6T6ocY1_i09kX95r3N45Dv5K8GDUkn3pd6CASKDZXRox8aEIMMn_ICCaWSCdjSCaXCE1GY8d4lzZWNwMjU2azGhA0cQV9BxwtCloACCVfOc_0qeDKaV2fKQuY-B4FqdsfnkhHNuYXDAg3RjcIJ2X4N1ZHCCdl8",
    id: "e9b288e40fe0925690e163b4580bc5b6d72562d85128a64109a300264463e0b7",
    name: "Geth/v1.10.15-stable/linux-amd64/go1.18",
    network: {
      inbound: false,
      localAddress: "192.168.0.237:63299",
      remoteAddress: "212.102.60.119:30303",
      static: false,
      trusted: false
    },
    protocols: {
      eth: {
        difficulty: 4.980641291150061e+22,
        head: "0xca28e56336e806e96b50622cf9921c52ed566a0e496b98604677cf75053fb308",
        version: 66
      },
      snap: {
        version: 1
      }
    }
}]

### > eth.blockNumber -> 자기가 채굴한 블록의 마지막 넘버
0

### > eth.getBlock(eth.blockNumber)
{
  difficulty: 17179869184,
  extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
  gasLimit: 5000,
  gasUsed: 0,
  hash: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x0000000000000000000000000000000000000000",
  mixHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
  nonce: "0x0000000000000042",
  number: 0,
  parentHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
  receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 540,
  stateRoot: "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",
  timestamp: 0,
  totalDifficulty: 17179869184,
  transactions: [],
  transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  uncles: []
}

### > eth.mining -> 채굴중이냐?
false

### 새 account 생성
C:\Users\User>geth account new
INFO [05-24|12:13:12.608] Maximum peer count                       ETH=50 LES=0 total=50
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:

Your new key was generated

Public address of the key:   0x43F84abFB897d3f191e0CA70Ca9e6b34ABDFbBB3
Path of the secret key file: C:\Users\User\AppData\Local\Ethereum\keystore\UTC--2022-05-24T03-13-33.913926700Z--43f84abfb897d3f191e0ca70ca9e6b34abdfbbb3

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!

### C:\Users\User>geth attach ipc:\\.\pipe\geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.10.17-stable-25c9b49f/windows-amd64/go1.18
coinbase: 0x43f84abfb897d3f191e0ca70ca9e6b34abdfbbb3            => new account 생성하니 생김 
at block: 0 (Thu Jan 01 1970 09:00:00 GMT+0900 (KST))
 datadir: C:\Users\User\AppData\Local\Ethereum
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit

### > eth.accounts
["0x43f84abfb897d3f191e0ca70ca9e6b34abdfbbb3"]

### > eth.getBalance(eth.accounts[0])
0

### 채굴 설정 (재실행해야한다)
geth --mine --miner.threads=10

### > miner.start()
null => 코드 좀 작성하고 해줘야 가능

### > miner.stop()
null

