const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
    watch:true
})

app.get('/',(req,res)=>{
    res.render('index2')
})

const server = app.listen(3000,()=>{
    console.log(`server start`)
})

const io = require('socket.io')(server,{
    cors: { origin: '*' },
})

const chat = io.of('/chat')

console.log(chat)
chat.on('connection', socket =>{
    let c_id
    socket.on('joinRoom', chatRoom => {
        c_id = chatRoom
        socket.join(chatRoom)
        console.log('current_room : ',chatRoom)
    })

    socket.on('leaveRoom', chatRoom => {
        socket.leave(chatRoom)
        console.log('leave room : ', chatRoom)
        
    })

    socket.on('message', (msg)=> {
        const {author, data, c_id:curr_id} = msg
        console.log(msg)

        chat.to(curr_id).emit('send',msg)
    })

    socket.on('disconnect',()=>{
        console.log(c_id,'번 나감~')
        socket.leave(c_id)
    })
})