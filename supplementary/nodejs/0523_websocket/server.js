const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const router = require('./routes')

app.use(express.json());

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})

app.use(router)

const result = app.listen(3000, () => {
    console.log("http://localhost:3000")
})

require('./socket.js')(result) //래핑

