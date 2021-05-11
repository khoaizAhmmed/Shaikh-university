const router = require('express').Router()
const StudentController = require('../controller/StudentController')

router.get('/add-student/:studentID?',StudentController.show)
router.post('/add-student',StudentController.addStudent)
router.get('/students',StudentController.studentsShow)
router.post('/searchstudent',StudentController.searchStudent)
router.get('/editStudent/:studentID',StudentController.editShow)
router.post('/update-student',StudentController.studentUpdate)

module.exports = router