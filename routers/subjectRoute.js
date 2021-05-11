const router = require('express').Router()
const SubjectController = require('../controller/SubjectController')

router.get('/add-subject', SubjectController.show)
router.post('/add-subject',SubjectController.addSubject)
router.get('/subjects',SubjectController.showSubjects)

module.exports = router
