const express = require('express')
const router = express.Router()
//MVC 패턴
//컨트롤러 추가
const boardController = require('./board.controller')

router.get('/list', boardController.list);

router.get('/view', boardController.view);

router.get('/write', boardController.write);

router.get('/update', boardController.update);

router.post('/write', boardController.writeAction);

module.exports = router