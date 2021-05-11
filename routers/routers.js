const router = require('express').Router()
const markRoute = require("./markRoute")
const subjectRoute = require("./subjectRoute")
const studentRoute = require("./studentRoute")
const numberRoute = require('./numberRoute')
const semesterRoute = require('./semesterRoute')
const semiBysubRoute = require('./semiBySubRoute')
const ShaikhUniversity = require('../controller/ShaikhUniversity')
const insertNumberRoute = require('./insertNumberRoute')

router.get('/dashboard', ShaikhUniversity.dashboardShow)
router.get('/',ShaikhUniversity.home)
router.get('/success',(req,res)=>{
    res.render('../views/success.ejs',{title:'success'})
})
router.get('/error',(req,res)=>{
    res.render('../views/error.ejs',{title:'success'})
})
router.get('*',(req,res)=>{
    res.render('../views/404.ejs',{layout:'layouts/404'})
})

module.exports = [markRoute,studentRoute,numberRoute,semesterRoute,subjectRoute,semiBysubRoute,insertNumberRoute,router]
