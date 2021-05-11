const DBconnect = require("../config/database");

const InsertNumber ={
    insertNumber:async(session,semesterID,subjectCode,studentID,written,viva,assignment,quiz)=>{
        const value = [session,semesterID,subjectCode,studentID,written,viva,assignment,quiz]
       const insertSql = 'INSERT INTO `insertnumber`(session,semester_id,subject_code, student_id, written, viva,assignment,quiz) VALUES (?,?,?,?,?,?,?,?)'
        const [rows] = await DBconnect.promise().query(insertSql,value);
    return rows;
    },
    showResult : async(session,semesterID,studentID)=>{
        const insertSql = `SELECT marks.session,marks.semester_id,marks.subject_code,sub.subject_name,sub.subject_credit,marks.student_id,marks.written,marks.viva,marks.assignment,marks.quiz FROM insertnumber as marks ,subjects as sub WHERE marks.subject_code =sub.subject_code AND marks.session ='${session}'  And marks.semester_id ='${semesterID}' And marks.student_id ='${studentID}'`
        const [rows] = await DBconnect.promise().execute(insertSql);
    return rows;
    }
}
module.exports = InsertNumber