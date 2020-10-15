---
title: Ajax基本技术原理案例分析之一
date: 2020-10-12
categories: Javascript
---

#### 1. 项目创建

1. 创建目录： `ajax-base-master` / `public`

2. 初始化项目`root`:  

   ```bash
   git install express
   ```

3. 创建服务器： `server.js`

   ```js
   const express = require('express')
   const path = require('path')
   const app = express()
   
   // 配置静态资源： HTML、CSS、JS、Image
   app.use(express.static(path.join(__dirname,'public')))
   
   const port = process.env.NODE_ENV || 3000
   
   app.listen(()=>console.log(`Server running on port: http://localhost:${port}...`))
   ```

4. 创建静态文件：`index.html`

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
   </head>
   <body>
     <div class="container">渔舟唱晚 响穷彭蠡之滨 雁阵惊寒 声断衡阳之浦</div>
     <button>Ajax Demo</button>
     <script></script>
   </body>
   </html>
   ```

5. Ajax 请求数据的四个步骤

   1. 对象创建

      ```js
      let xml;
      if(XMLHttpRequest) {
        xml = new XMLHttpRequest()
      }else{
        xml = new ActiveXObject('Mircrosoft.XMLHTTP')
      }
      ```

   2. 设置请求方式

      ```js
      xml.open("GET",url,true)
      ```

   3. 调用回调函数

      ```js
      xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){}
      }
      ```

   4. 发送请求

      ```js
      xml.send(null)
      ```

6. 为`server.js`添加路由

   ```js
   app.get('/get', async(req,res) => {
     await res.send("落霞与孤鹜齐飞 秋水共长天一色")
   })
   ```

7. 为`indexhtml`注册事件

   ```js
   const url = "http://localhost:3000/get"
   const div = document.querySelector('div')
   const btn = document.querySelector('button')
   btn.addEventListener("click",function(){
     let xml;
     if(XMLHttpRequest) {
       xml = new XMLHttpRequest()
     }else{
       xml = new ActiveXObject('Mircrosoft.XMLHTTP')
     }
     xml.open("GET",url,true)
     xml.onreadystatechange = function(){
       if(xml.readyState == 4 && xml.status == 200){
         div.innerHTML = xml.responseText
       }
     }
     xml.send()
   })
   ```

8. 切换到`root`目录，启动`Server`

   ```bash
   $ nodemon server.js
   ```

9. 浏览器`url`： `http://localhost:3000`

   - 点击按钮，文件内容更换为： `落霞与孤鹜齐飞 秋水共长天一色`
   - 观察`url`并没有改变；

10. 原始代码

    - `server.js`
    - `index.html`

11.  关于Ajax基本原理的`TypeScript`版本介绍

    [参考文档](https://yuanmin650304.github.io/2020/10/15/JavaScript/JS/Ajax-base-for-Typescript/)