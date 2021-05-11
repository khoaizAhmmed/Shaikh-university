const DBconnect = require('../config/database')

const Semester ={
    addSemester : async(semesterName)=>{
        const value = [semesterName]
        const insertSql = 'INSERT INTO semesters (semester_name) VALUES (?) '

        const [rows] = await DBconnect.promise().execute(insertSql,value)
        return rows
    },
    semesterShow: async()=>{
        const insertSql = 'SELECT * FROM `semesters`'
        const [row] = await DBconnect.promise().execute(insertSql)
        return row
    },
    semesterBySub:async()=>{
        const insertSql ='SELECT ss.semester_id as semesterId, sem.semester_name as semesterName , ss.subject_code as subjectCode,sub.subject_name as subjectName FROM semesterbysubject as ss,semesters as sem ,subjects as sub WHERE ss.semester_id = sem.semester_id and ss.subject_code = sub.subject_code ORDER by semesterId'
        const [row] = await DBconnect.promise().execute(insertSql)
        return row
    }

}
module.exports = Semester