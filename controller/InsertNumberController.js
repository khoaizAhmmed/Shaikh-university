const InsertNumber = require('../models/InsertNumber')
const Semester = require('../models/Semester')
const students = require('../models/Students')

const InsertNumberController ={
    InsertNumber: async(req,res)=>{
        try{
         const {studentID,semesterID,session,subjectCode,written,viva,assignment,quiz}  =req.body 
        let insertNumber;
        if(Array.isArray(studentID)){
            for(var i =0;i<studentID.length;i++){
                insertNumber = await InsertNumber.insertNumber(
                    session,
                    semesterID,
                    subjectCode,
                    studentID[i],
                    written[i],
                    viva[i],
                    assignment[i],
                    quiz[i]
                )
            }
        }else{
            insertNumber = await InsertNumber.insertNumber(
                session,
                semesterID,
                subjectCode,
                studentID,
                written,
                viva,
                assignment,
                quiz
            )
        }
        res.render('../views/success.ejs',{title:"success"})
        }
        catch(err){
            console.log(err)
            res.render('../views/error.ejs',{title:"error"})
        }
       
    },
    result: async(req,res)=>{
        const semesters = await Semester.semesterShow()
        res.render('../views/result.ejs',{semesters,title:'result',layout:'layouts/result'})
    },
    showResult : async(req,res)=>{
        const {session,semesterID,studentID} = req.body
            let student = await students.searchStudent(studentID)
            let result = await InsertNumber.showResult(session,semesterID,studentID)
        if(result==0){
           result = undefined
        }
        res.render('../views/show-result.ejs',{student,result,title:'result',layout:'layouts/result'})

    }
    
}
module.exports= InsertNumberController


