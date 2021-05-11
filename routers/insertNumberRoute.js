const router = require('express').Router()
const InsertNumberController = require('../controller/InsertNumberController')

router.post('/insertnumber',InsertNumberController.InsertNumber)
router.get('/result',InsertNumberController.result)
router.post('/result',InsertNumberController.showResult)

module.exports = router