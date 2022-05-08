const express = require('express')
const app = express()
const router = require('./routes')
const nunjucks = require('nunjucks')
// const bodyParser = require

app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app,
})

app.use(express.urlencoded({extended:true,})) // req.body)
app.use(router)


app.listen(3000, () => {
    console.log(`server start http://localhost:3000`)
})

