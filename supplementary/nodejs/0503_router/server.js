const express = require('express')
const app = express()
const router = require('./routes')
const nunjucks = require('nunjucks')
// const bodyParser = require

app.use(express.urlencoded({extended:true,})) // req.body)


app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app,
})

app.use(router)


// const routers = express.Router();
// app.use('/a', routers.get('/b', (req, res) => {
//     res.send('a/b')
// }))


app.listen(3000, () => {
    console.log(`server start http://localhost:3000`)
})

/*
GET /board/list
GET /board/view
GET /board/update
GET /board/write

POST /board/delete
POST /board/write
POST /board/update
*/