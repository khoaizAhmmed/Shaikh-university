const DBconnect = require("../config/database");

const MarksDistribution = {
  show: async () => {
    const insertSql = "SELECT * FROM semesters";
    const [rows] = await DBconnect.promise().execute(insertSql);
    return rows;
  },
  semBysub: async (semesterID) => {
    const value = [semesterID];
    const insertSql = `SELECT ss.semester_id ,sem.semester_name ,ss.subject_code ,sub.subject_name , sub.subject_credit FROM semesterbysubject AS ss , subjects AS sub , semesters AS sem WHERE  ss.subject_code = sub.subject_code and ss.semester_id =sem.semester_id and ss.semester_id = ${value}`;
    const [rows] = await DBconnect.promise().execute(insertSql);
    return rows;
  },
  getCredit: async (subjectCODE) => {
    const value = [subjectCODE];
    const insertSql = `SELECT subject_code as subjectCode , subject_credit as subjectCredit FROM subjects WHERE subject_code = ?`;
    const [rows] = await DBconnect.promise().execute(insertSql, value);
    return rows;
  },
  subCredit: async (subjectCODE) => {
    const value = [subjectCODE];
    const insertSql =
      "SELECT subject_credit ,subject_code FROM subjects WHERE subject_code = ? ";
    const [row] = await DBconnect.promise().execute(insertSql, value);
    return row;
  },
  addMarkDistrbution: async (
    semesterID,
    subjectCode,
    wt,
    wp,
    vt,
    vp,
    at,
    ap,
    qt,
    qp
  ) => {
    const value = [semesterID, subjectCode, wt, wp, vt, vp, at, ap, qt, qp];
    const insertSql =
      "INSERT INTO `marks_distribution`( `semseter_id`, `subject_code`, `written_total`, `written_pass`, `viva_total`, `viva_pass`, `assignment_total`, `assignment_pass`, `quiz_total`, `quiz_pass`) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const [rows] = await DBconnect.promise().execute(insertSql, value);
    return rows;
  },
  passMark: async()=>{
     const insertSql= 'SELECT subject_code,written_pass,viva_pass,assignment_pass,quiz_pass FROM `marks_distribution`'
     const [rows] = await DBconnect.promise().execute(insertSql);
    return rows;
  }
};
module.exports = MarksDistribution;

