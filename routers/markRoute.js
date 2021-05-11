const router = require('express').Router()
const MarkController = require('../controller/MarkController.js')


router.get('/mark-distribution/:semesterID?', MarkController.show);
router.get('/mark-distributions/:subjectCODE?', MarkController.subCredit);
router.post('/mark-distribution',MarkController.addMarkDistrbution)
router.get('/passMark',MarkController.passMark)

module.exports = router