const DBconnect = require('../config/database')

const NumberDistribution ={
    load_semesters : async ()=>{
        const insertSql = 'SELECT * FROM semesters'
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    },
    semBysub : async(semesterID)=>{
        const value =[semesterID]
        const insertSql = `SELECT ss.semester_id ,sem.semester_name ,ss.subject_code ,sub.subject_name , sub.subject_credit FROM semesterbysubject AS ss , subjects AS sub , semesters AS sem WHERE  ss.subject_code = sub.subject_code and ss.semester_id =sem.semester_id and ss.semester_id = ${value}`
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    },
    studentShow : async (semesterID)=>{
        const value = [semesterID]
        const insertSql = ` SELECT student_id,student_name,semester_id FROM students WHERE semester_id = ${value}`
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    },
    totalNumber : async(subjectCode)=>{
        const insertSql = `SELECT subject_code,written_total,viva_total,assignment_total,quiz_total FROM marks_distribution WHERE subject_code = '${subjectCode}'`
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    }
}
module.exports =NumberDistribution