const ShaikhUniversity = require('../models/ShaikhUniversity')

const ShaikhUniversityController ={
    dashboardShow: async(req,res)=>{
        try{
            const allStudents = await ShaikhUniversity.allStudents()
            const allSemesters = await ShaikhUniversity.allSemesters()
            const allSubjects = await ShaikhUniversity.allSubjects()
            res.render('../views/index.ejs', {allStudents,allSemesters,allSubjects,title:'Dashboard'})
        }
        catch(err){
            console.log(err);
        }
    },
    home:async(req,res)=>{
        res.render('../views/home.ejs',{layout: 'layouts/home'})
    }
}

module.exports = ShaikhUniversityController