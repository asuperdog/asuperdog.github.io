// 加载框架内容
const express = require('express')

// 加载路由
const router = require('./router')

// 获取函数实例
const app = express()

app.use(function(err,req, res, next){
    console.error(err.stack)
    res.status(500).send('somethink broke')
})

app.use(router)

 


// 监听3000端口
app.listen(3000, () => console.log('app run on 3000'))

app.get('/', (req, res) => {
    res.send('index')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/home', (req, res) => {
    res.send('home')
})

 