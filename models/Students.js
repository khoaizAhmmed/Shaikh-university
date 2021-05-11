const DBconnect = require('../config/database')

const Students ={
    show : async ()=>{
        const insertSql = 'SELECT * FROM semesters'
        const [rows] = await DBconnect.promise().execute(insertSql)
        return rows
    },
    idSearch : async(studentID)=>{
        const value = [studentID]
        const insertSql =` SELECT student_id FROM students WHERE student_id LIKE '${value}'`
        const [row] = await DBconnect.promise().execute(insertSql)
        return row

    },
    addStudent : async(studentID,session,studentName,studentFname,studentDep,semesterID,studentG,studentBirth,studentAd,studentEmail)=>{
        const value = [studentID,session,studentName,studentFname,studentDep,semesterID,studentG,studentBirth,studentAd,studentEmail]
        const insertSql = 'INSERT INTO `students`(`student_id`, `session`, `student_name`, `student_fname`, `student_department`, `semester_id`, `student_gender`, `student_birth`, `student_address`, `student_email`) VALUES (?,?,?,?,?,?,?,?,?,?)'
        const [row] = await DBconnect.promise().execute(insertSql,value)
        return row
    },
    studentsShow: async()=>{
    const insertSql = 'SELECT st.student_id,st.session, st.student_name, st.student_fname, st.student_department, st.semester_id,sem.semester_name, st.student_gender,  st.student_birth, st.student_address, st.student_email, st.created_at, st.updated_at FROM students AS st , semesters AS sem WHERE st.semester_id = sem.semester_id'
    const [row] = await DBconnect.promise().execute(insertSql)
    return row
    },
    editShow: async(studentID)=>{
        const value = [studentID]
        const insertSql = 'SELECT `student_id`, `session`, `student_name`, `student_fname`, `student_department`, `semester_id`, `student_gender`,student_birth, `student_address`, `student_email`, `created_at`, `updated_at` FROM `students` WHERE student_id = ?'
        const [row] = await DBconnect.promise().execute(insertSql,value)
        return row
    },
    searchStudent : async(studentID)=>{
      const insertSql =`SELECT st.student_id,st.session, st.student_name, st.student_fname, st.student_department, st.semester_id,sem.semester_name, st.student_gender, st.student_birth, st.student_address, st.student_email, st.created_at, st.updated_at FROM students AS st , semesters AS sem WHERE st.semester_id = sem.semester_id AND st.student_id LIKE '${studentID}'`
        const [row] = await DBconnect.promise().execute(insertSql)
        return row
    },
    studentUpdate :async(session,name,fname,department,semesterID,gender,birth,address,email,studentID)=>{
        const value = [session,name,fname,department,semesterID,gender,birth,address,email,studentID]

      const  insertSql = 'UPDATE `students` SET `session`=?,`student_name`=?,`student_fname`=?,`student_department`=?,`semester_id`=?,`student_gender`=?,`student_birth`=?,`student_address`=?,`student_email`=? WHERE student_id = ?'
      const [row] = await DBconnect.promise().execute(insertSql,value)

        return row
    }
}
module.exports = Students