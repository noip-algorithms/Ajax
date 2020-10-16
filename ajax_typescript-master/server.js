const express = require('express')
const path = require('path') 
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/get', async(req,res) => {
  await res.send("落霞与孤鹜齐飞 秋水共长天一色")
})

const PORT = process.env.NODE_ENV || 3000

const server = app.listen(PORT,()=>{
  const port = server.address().port
  console.log(`Server running at port: http://localhost:${port}...`)
})
