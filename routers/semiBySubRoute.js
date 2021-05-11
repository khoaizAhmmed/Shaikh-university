const router = require('express').Router()
const SemiBySubController = require("../controller/SemiBySubController")

router.get('/add-semester-by-subject/:semesterId?', SemiBySubController.load_semester)
router.post('/add-semester-by-subject', SemiBySubController.addSemiBySub)

module.exports = router