const express = require('express')
const router = express.Router()
const boardRouter = require('./board')

router.get('/', (req,res) => {
    res.render("index")
    // index
    //routes/index.js
    //../views/index.html
    //views/index.html
})

router.use('/board', boardRouter)

/*
이번주내에
게시판과 db 구축까지
*/

module.exports = router