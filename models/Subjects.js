const DBconnect = require('../config/database')

const Subjects ={
    addSubject : async (subCode,subName,subType,subCredit)=>{
        const value = [subCode,subName,subType,subCredit]
        const insertSql = 'INSERT INTO `subjects`(`subject_code`, `subject_name`, `subject_type`, `subject_credit`) VALUES (?,?,?,?)'
        const [rows] = await DBconnect.promise().execute(insertSql,value)
        return rows
    },
    showSubjects : async()=>{
        const insertSql = 'SELECT * FROM `subjects`'
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    }
} 
module.exports = Subjects