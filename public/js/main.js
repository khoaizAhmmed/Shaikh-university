
function myFunction(){
    let x = document.getElementById('semester_value').value
        window.location.href =`/add-semester-by-subject/${x}`
        console.log(x)
};

function Student(event) {
    let studentId = event.target.value
    window.location.href = `/add-student/${studentId}`
   };

function mySemester() {
    let semester = document.getElementById('mysemester').value
        window.location.href =`/mark-distribution/${semester}`
}
 function creditGet(event){
   const creditShow = document.getElementById('getCreditShow')
    let subCode = event.target.value
     fetch(`/mark-distributions/${subCode}`)
   .then(res=>res.json())
   .then(d=>d.map(s=>{
    creditShow.value = s.subject_credit
   }))
 }

function myCal() {
    const Wpass = document.getElementById('Wpass').value
    const Vpass = document.getElementById('Vpass').value
    const Apass = document.getElementById('Apass').value
    const Qpass = document.getElementById('Qpass').value
    const Credit = document.getElementById('getCreditShow').value
    const Bar = document.getElementById('progressBar')
    let a = Number(Wpass)
    let b = Number(Vpass)
    let c = Number(Apass)
    let d = Number(Qpass)
    console.log(Credit)
    if(Credit == 3){
        const perc = a+b+c+d
 
        Bar.style.width = (perc<=100) ?`${perc}%` : alert('This subject Credit 3 enter number less than 100')
    }
    if(Credit ==1.5){
        const perc = (a+b+c+d)*2
        console.log(perc)
        Bar.style.width = (perc<=100) ?  `${perc}%` : alert('This subject Credit 1.5 enter number less than 50')
    }
}
function getSubject(event){
        let semester = event.target.value
        window.location.href =`/number-distribution/${semester}`
        console.log(semester)

}

function SubjectCode(event){
    const getSubjectCode = event.target.value
    let Wnum = document.getElementsByClassName('Wnum')
    let Vnum = document.getElementsByClassName('Vnum')
    let Anum = document.getElementsByClassName('Anum')
    let Qnum = document.getElementsByClassName('Qnum')

    fetch(`/number-distributions/${getSubjectCode}`)
    .then(res=>res.json())
    .then(data=>data.map(n=>{
      let w =  n.written_total
      let v =  n.viva_total
      let a =  n.assignment_total
      let q =  n.quiz_total
       console.log(w,v,a,q);
        for(let i =0 ; i<[Wnum,Vnum,Anum,Qnum].length ;i++){
            Wnum[i].max =w;
            Vnum[i].max = v;
            Anum[i].max = a;
            Qnum[i].max = q;
        }

    }))
}
function goStudents(){
    window.location.href = '/students'
}
function goSemesters(){
    window.location.href = '/semesters'
}
function goSubjects(){
    window.location.href = '/subjects'
}

function searchStudent(){
    
}
