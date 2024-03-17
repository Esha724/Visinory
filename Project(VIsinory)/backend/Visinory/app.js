const express = require('express')
const app= express()
 const port= 2000
 const config =require('./config/db')

 const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended:true}))
const adminroutes = require('./routes/adminroutes')
app.use("/admin",adminroutes)

 app.listen(port, ()=>{
    console.log("server is running at "+port)
 })