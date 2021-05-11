const SemiBySub = require('../models/SemiBySub.js')

const SemiBySubController ={
    load_semester :async (req,res)=>{
        const {semesterId} = req.params
        let semBySub
        if( semesterId != null|| semesterId != undefined){
            semBySub = await SemiBySub.load_filter_subject(semesterId)
        }
        const semester = await SemiBySub.load_semesters()
        res.render('../views/semester-by-subject.ejs' , {data:semester ,semBySub,semesterId, title : "Semester By subject"})
    },
    addSemiBySub : async(req,res)=>{
     const {semesterID,subjectCode} = req.body
        await SemiBySub.addSemiBySub(semesterID,subjectCode)
        res.render('../views/success.ejs',{title: "success"})
    }
}
module.exports = SemiBySubController