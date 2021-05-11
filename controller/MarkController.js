const MarksDistribution = require("../models/MarksDistribution.js");

const MarkController = {
  show: async (req, res) => {
    const { semesterID, subjectCODE } = req.params;
    let semBysub;
    let getCredit;
    if (semesterID != null || semesterID != undefined) {
      semBysub = await MarksDistribution.semBysub(semesterID);
    }
    if (subjectCODE != null || subjectCODE != undefined) {
      getCredit = await MarksDistribution.getCredit(subjectCODE);
    }
    const semester = await MarksDistribution.show();
    res.render("../views/mark-distribution", {
      semester,
      semBysub,
      semesterID,
      subjectCODE,
      getCredit,
      title: "Mark Distribution",
    });
  },
  subCredit: async (req, res) => {
    const { subjectCODE } = req.params;
    const subCredit = await MarksDistribution.subCredit(subjectCODE);
    res.json(subCredit);
  },
  addMarkDistrbution: async (req, res) => {
    try {
      const {
        semesterID,
        subjectCode,
        wt,
        wp,
        vt,
        vp,
        at,
        ap,
        qt,
        qp,
      } = req.body;
      console.log(req.body);
      let add = await MarksDistribution.addMarkDistrbution(
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
      );
      //   console.log(add);
      res.render("../views/success.ejs", { title: "success" });
    } catch (err) {
      //   console.log(err);
      res.render("../views/error.ejs", { title: "error" });
    }
  },
  passMark : async (req,res)=>{
     const passMark = await MarksDistribution.passMark()
     res.json(passMark)
  }
};
module.exports = MarkController;
