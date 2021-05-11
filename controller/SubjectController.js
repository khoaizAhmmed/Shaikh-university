const Subjects = require('../models/Subjects.js')

const SubjectController ={
    
    show : async (req,res)=>{
        res.render('../views/add-subject.ejs' , {title:'Add subject'})
    },
    addSubject : async(req,res)=>{
        const {code,name,type,credit} = req.body
        await Subjects.addSubject(code,name,type,credit)
        res.render('../views/success.ejs',{title:"success"})
    },
    showSubjects: async(req,res)=>{
       const subjects = await Subjects.showSubjects()
       res.render('../views/subjects.ejs',{subjects,title:'subjects'})
    }

}
module.exports = SubjectController
