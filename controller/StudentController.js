const Students = require('../models/Students.js')

const StudentController ={
    show : async (req,res)=>{
        const {studentID} = req.params
        
        let StudentID
        if( studentID != null|| studentID != undefined){
             StudentID = await Students.idSearch(studentID)
            if(StudentID.length===1){
                StudentID = 'This ID already Exist'
            }
        }
        const semester = await Students.show()
        res.render('../views/add-student' ,{semester,StudentID,studentID, title: "Add Student"})
    },
    addStudent: async(req,res)=>{
        const {studentID,session,name,fname,department,semester,gender,birth,address,email} = req.body
        await Students.addStudent(studentID,session,name,fname,department,semester,gender,birth,address,email)
        res.render('../views/success.ejs',{title:"success"})
        
    },
    studentsShow: async(req,res)=>{
        try{
            const students = await Students.studentsShow()
            // res.json(students)
            res.render('../views/students.ejs',{students,title:"students"})
        }
        catch(err){
            console.log(err);
        }
    },
    editShow: async(req,res)=>{
        try{
            const {studentID} = req.params
            const student = await Students.editShow(studentID)
            const semester = await Students.show()
             
            res.render('../views/edit-student.ejs',{semester,student,title:"Edit-Student"})
        }
        catch(err){
            console.log(err);
        }
    },
    searchStudent:async(req,res)=>{
         const {studentID}=req.body
            const students = await Students.searchStudent(studentID)
         res.render('../views/students.ejs',{students,title:"students"})
    },
    studentUpdate : async(req,res)=>{
        try{
            const {studentID,session,name,fname,department,semester,gender,birth,address,email}= req.body
            await Students.studentUpdate(session,name,fname,department,semester,gender,birth,address,email,studentID)
            res.render('../views/success.ejs',{title:"success"})
        }
        catch(err){
            console.log(err)
            res.render('../views/error.ejs',{title:"error"})
        }
    }
}
module.exports = StudentController