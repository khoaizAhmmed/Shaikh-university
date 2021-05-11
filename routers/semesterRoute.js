const router = require('express').Router()
const SemesterController = require('../controller/SemesterController')

router.get('/add-semester',SemesterController.show)
router.post('/add-semester',SemesterController.addSemester)
router.get('/semesters',SemesterController.semesterShow)

module.exports = router