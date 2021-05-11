const DBconnect = require('../config/database')

const SemiBySub ={
    load_semesters : async ()=>{
        const insertSql = 'SELECT * FROM semesters'
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    },
    load_filter_subject : async (semesterId)=>{
        const value = [semesterId]
        const insertSql = `SELECT subject_code ,subject_name from subjects WHERE NOT EXISTS (SELECT subject_code FROM semesterbysubject WHERE subjects.subject_code = semesterbysubject.subject_code and semesterbysubject.semester_id = ? )`
        const [rows] = await DBconnect.promise().execute(insertSql,value)
        return rows
    },
    addSemiBySub: async (semesterID,SubjectCode)=>{
        const value = [semesterID,SubjectCode]
        const insertSql = "INSERT INTO `semesterbysubject`(`semester_id`, `subject_code`) VALUES (?,?)"
        const [rows] = await DBconnect.promise().execute(insertSql,value)
        return rows
    }

}
module.exports = SemiBySub