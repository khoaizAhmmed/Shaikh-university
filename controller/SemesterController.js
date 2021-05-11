const Semester = require("../models/Semester")


 const SemesterController ={
   show: async (req,res)=>{
        res.render('../views/add-semester.ejs', {title:'Add semester'})
    },
    
    addSemester : async( req,res)=>{
        const {semesterName} = req.body
        const addSemesterName = await Semester.addSemester(semesterName)
        res.render('../views/success.ejs',{title:"success"})
    },
    semesterShow: async(req,res)=>{
        const semesters = await Semester.semesterShow()
        const semiBysub = await Semester.semesterBySub()
        res.render('../views/semesters.ejs',{semiBysub,semesters,title:"Semesters"})
    }
 } 

 module.exports = SemesterController