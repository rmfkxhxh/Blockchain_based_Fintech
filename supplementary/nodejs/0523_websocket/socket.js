const webSocket = require('ws')


let sockets = [];

module.exports = (server) => {
    console.log('웹소켓 시작')
    const wss = new webSocket.Server({ server })

    wss.on('connection', (ws, req) => {
        ws.id = req.headers['sec-websocket-key']

        sockets.push(ws)
        // ws.send('web7722님 환영합니다')
        // console.log('hello socket')
        // console.log(req.headers)
        // console.log(ws)
        const obj1 = {
            type: 'message', payload:
                'web7722님 환영합니다'
        }
        const obj2 = { type: 'add', payload: 1 }
        ws.send(JSON.stringify(obj1))
        ws.send(JSON.stringify(obj2))

        ws.on('close', ()=> {
            console.log('사용자가 도망쳣다.')
            sockets = sockets.filter(v => v.id !== ws.id)
            console.log(sockets.length)
        })
        
    })
    function broadcast(data, id) {
        sockets.forEach(ws => {
            if (ws.id !== id) {
            ws.send(data)

            }
        })
    }
}