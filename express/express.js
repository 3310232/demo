const express = require('express')
const app = express()
const mysql = require('mysql2')
const db = mysql.createPool({
    host:'127.0.0.1',
    // post:'80',
    user:'root',
    password:'123456',
    database:'my_db_01'
})

db.query('select * from users',(err,res)=>{
    if(err){
        return console.log(err.message)
    }else{
        return console.log(res)
    }
})
const cors = require('cors')
app.use(cors())
const example = require('./example')
app.use(example)

app.get('/test',(req,res)=>{
    res.send({name:'zs',age:20,gender:'男'})
})

app.post('/user',(req,res)=>{
    res.send('请求成功')
})
app.listen(8080,()=>{ 
    console.log('80')
})

