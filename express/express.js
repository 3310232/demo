const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
    res.send({name:'zs',age:20,gender:'男'})
})

app.post('/user',(req,res)=>{
    res.send('请求成功')
})
app.listen(8080,()=>{ 
    console.log('80')
})

