//1. 引入express框架
const express = require('express')
//6. 引入路径处理模块
const path = require('path')
//2. 创建web服务器
const app = express()
//5. 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

app.get('/get', async(req,res) => {
  await res.send("imgs/photo1.jpg")
})

//3. 设置端口
const PORT = process.env.NODE_ENV || 3000
//4. 监听端口
const server = app.listen(PORT,()=>{
  console.log(`Server running at port: http://localhost:${PORT}...`)
})
