const exprees = require('express')
const router = exprees.Router()
// 引入封装后的数据库操作
const db = require('./model/db')
router.get('/',(req,res)=>{
     db.query('select * from user', [],(results,fields)=>{
         // 打印结果在控制台
         console.log(results);

     })
})

module.exports = router