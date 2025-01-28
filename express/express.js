const express = require('express')
const app = express()
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

