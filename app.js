const express = require('express')
const app = express()

require('dotenv').config() 
const expressLayouts = require('express-ejs-layouts')

const router =  require('./routers/routers.js')
app.set('view engine','ejs')
app.set('layout',"layouts/layout")
app.use(express.static(__dirname +'/public'))

app.use(express.urlencoded({extended:true}))
app.use(expressLayouts)

// router
app.use(router)


app.listen(process.env.PORT, ()=>{
    'server running' + process.env.PORT
})