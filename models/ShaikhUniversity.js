const DBconnect = require('../config/database')

const ShaikhUniversity ={
    allStudents : async()=>{
       const insertSql = 'SELECT COUNT(*) as allStudents FROM `students`' 
       const [rows] = await DBconnect.promise().execute(insertSql)
       return rows
    },
    allSemesters :async()=>{
        const insertSql = 'SELECT COUNT(*) as allSemesters FROM `semesters`' 
       const [rows] = await DBconnect.promise().execute(insertSql)
       return rows
    },
    allSubjects :async()=>{
        const insertSql = 'SELECT COUNT(*) as allSubjects FROM `subjects`' 
       const [rows] = await DBconnect.promise().execute(insertSql)
       return rows
    }
    
}
module.exports = ShaikhUniversity