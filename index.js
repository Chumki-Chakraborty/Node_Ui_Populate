const express=require('express')
const ejs=require('ejs')
const app=express()
// ---------------------Body-Parser-------------------//
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// ------------mongodb connection-------------------//
const dotenv=require('dotenv')
dotenv.config()

const Momngodb_Connection=require('./config/database')
Momngodb_Connection()
// --------------------------view engine-----------------//
app.set('view engine',"ejs")
app.set('views',"views")
// ----------------------------webroute----------------------//
const webroute=require('./route/webroute')
app.use(webroute)

const port=1000
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})