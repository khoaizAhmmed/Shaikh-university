
async function result() {
  let passMarks = await fetch("/passmark")
    .then((res) => res.json())
    .then((data) => data);
  let tableData = document.getElementById("tableData");
  let totalPoints = document.getElementById("totalPoints");
  let totalGrade = document.getElementById("totalGrade");
  let resultTag = document.getElementById("resultTag");

  sum =0
  fail =0
 

  for (let i = 0, row; (row = tableData.rows[i]); i++) {
    const subCode = row.querySelector(".subCode").textContent;
    const subCredit = row.querySelector(".subCredit").textContent;
    const Wmarks = row.querySelector(".Wmarks");
    const Vmarks = row.querySelector(".Vmarks");
    const Amarks = row.querySelector(".Amarks");
    const Qmarks = row.querySelector(".Qmarks");
    const totalMarks = row.querySelector(".totalMarks");
    const markPoint = row.querySelector(".markPoint");
    const markGrade = row.querySelector(".markGrade");

    const WmarksNumber = Number(Wmarks.textContent);
    const VmarksNumber = Number(Vmarks.textContent);
    const AmarksNumber = Number(Amarks.textContent);
    const QmarksNumber = Number(Qmarks.textContent);
    let TotalMarks = WmarksNumber + VmarksNumber + AmarksNumber + QmarksNumber;
    totalMarks.textContent = TotalMarks;

    
    const passMark = passMarks.find(
        (mark) => mark.subject_code == subCode
      );
     let ispass = true
    if (WmarksNumber < Number(passMark.written_pass)) {
      Wmarks.style.color = "red";
      ispass = false;
    }
    if (VmarksNumber < Number(passMark.viva_pass)) {
      Vmarks.style.color = "red";
      ispass = false;
    }
    if (AmarksNumber < Number(passMark.assignment_pass)) {
      Amarks.style.color = "red";
      ispass = false;
    }

    if (QmarksNumber < Number(passMark.quiz_pass)) {
      Qmarks.style.color = "red";
      ispass = false;
    }
     if(!ispass){
       TotalMarks=0
     }
    if(subCredit==='1.5'){
        TotalMarks = TotalMarks*2
    }
   
    console.log(totalMarks)
    console.log(typeof subCredit)
    switch (true) {
      case (TotalMarks > 80) :
          markPoint.textContent = "4.00";
          markGrade.textContent = "A+";
          break;
      case (TotalMarks >= 75 && TotalMarks <= 79) :
          markPoint.textContent = "3.75";
          markGrade.textContent = "A";
          break;
      case (TotalMarks >= 70 && TotalMarks <=74) :
          markPoint.textContent = "3.50";
          markGrade.textContent = "A-";
          break;
      case (TotalMarks >= 65 && TotalMarks <= 69) :
          markPoint.textContent = "3.25";
          markGrade.textContent = "B+";
          break;
      case  (TotalMarks >= 60 && TotalMarks <= 64) :
          markPoint.textContent = "3.00";
          markGrade.textContent = "B";
          break;
      case (TotalMarks >= 55 && TotalMarks <= 59) :
          markPoint.textContent = "2.75";
          markGrade.textContent = "B-";
          break;
      case (TotalMarks >= 50 && TotalMarks <= 54) :
          markPoint.textContent = "2.50";
          markGrade.textContent = "C+";
          break
      case  (TotalMarks >= 45 && TotalMarks <= 49) :
          markPoint.textContent = "2.25";
          markGrade.textContent = "C";
          break;
      case  (TotalMarks >= 40 && TotalMarks <= 44) :
          markPoint.textContent = "2.00";
          markGrade.textContent = "D";
          break;
      case (TotalMarks < 40) :
          markPoint.textContent = "0.00";
          markGrade.textContent = "F";
          markGrade.style.color = "red"; 
          break; 
  }

 
 
   fail+=Number(!ispass)
    let m = markPoint.innerText
    sum+=Number(m)
  }
  if(fail===0){
    resultTag.innerHTML= 'PASS'
    resultTag.style.color ='green'
  }else if(fail<=1){
    resultTag.innerHTML= `FAIL in ${fail} Subject`
    resultTag.style.color ='red'
  }else if(fail<=2){
    resultTag.innerHTML= `FAIL in ${fail} Subjects`
    resultTag.style.color ='red'
  }else{
    resultTag.innerHTML= `FAIL`
    resultTag.style.color ='red'
  }
  console.log(fail)


  let avgPoints =Number(sum/3)
  totalPoints.innerHTML = avgPoints.toFixed(2)
  if(fail>0){
    totalPoints.innerHTML = '0.00'
  }
 
  switch (true) {
    case (avgPoints >= 4) :
       
      totalGrade.innerHTML = "A+";
        break;
    case (avgPoints >= 3.75 && avgPoints<4 ) :
      totalGrade.innerHTML = "A";
        break;
    case (avgPoints >= 3.5 && avgPoints<3.75 ) :
      totalGrade.innerHTML = "A-";
        break;
    case (avgPoints >= 3.25 &&avgPoints < 3.5) :
      totalGrade.innerHTML = "B+";
        break;
    case  (avgPoints >= 3 &&avgPoints <3.25) :
      totalGrade.innerHTML = "B";
        break;
    case (avgPoints >= 2.75 &&avgPoints < 3) :
        
      totalGrade.innerHTML = "B-";
        break;
    case (avgPoints >= 2.5 &&avgPoints <2.75) :
      totalGrade.innerHTML = "C+";
        break
    case  (avgPoints >= 2.25 &&avgPoints <2.5) :
      totalGrade.innerHTML = "C";
        break;
    case  (avgPoints >= 2 && avgPoints<2.25) :
      totalGrade.innerHTML = "D";
        break;
    case (avgPoints < 2) :
      totalGrade.innerHTML = "F";
      totalGrade.style.color ='red'
        break;
    default:
      totalGrade.innerHTML = "F";
      totalGrade.style.color ='red'
}
}
result();

