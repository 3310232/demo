const express = require('express')
const router = express.Router()
// router.get('/test',(req,res)=>{
//     res.send('get user')
// })
router.get('/user',(req,res)=>{
    res.send('post user')
})
module.exports = router