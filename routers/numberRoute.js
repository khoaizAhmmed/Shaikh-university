const router = require('express').Router()
const NumberController = require('../controller/NumberController.js')

router.get('/number-distribution/:semesterID?',NumberController.show)
router.get('/number-distributions/:subjectCode?',NumberController.totalNumber)
router.post('/submit-result',NumberController.submitResult)

module.exports = router