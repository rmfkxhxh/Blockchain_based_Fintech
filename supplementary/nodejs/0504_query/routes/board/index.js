const express = require('express')
const router = express.Router()
//MVC 패턴
//컨트롤러 추가
const boardController = require('./board.controller')

router.get('/list', boardController.list);
router.get('/view', boardController.view);
router.get('/write', boardController.write);
router.get('/update', boardController.update);

router.get('/delete', boardController.deleteAction); //post form 태그 생략을 위함
router.post('/write', boardController.writeAction);
router.post('/update', boardController.updateAction);



module.exports = router