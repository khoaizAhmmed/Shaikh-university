const NumberDistribution = require("../models/NumberDistribution")
const NumberController = {
    show : async (req,res)=>{
        const {semesterID} = req.params   
        let semBysub
        let students
        if( semesterID != null|| semesterID != undefined){
            semBysub = await NumberDistribution.semBysub(semesterID)  
            students = await NumberDistribution.studentShow(semesterID)  
        }
        const semesters = await NumberDistribution.load_semesters()
        res.render("../views/number-distribution.ejs",{semesterID,semesters,semBysub,students,title: 'Number-distribution'})
    },
    totalNumber : async(req,res)=>{
        try{
            const {subjectCode} = req.params
            const data = await NumberDistribution.totalNumber(subjectCode)
            res.json(data)
        }
        catch(err){
            console.log(err)
            res.render('../views/error.ejs',{title: "error"})
        }


    },
    submitResult: async(req,res)=>{
        console.log(req.body)
    }
}
module.exports = NumberController