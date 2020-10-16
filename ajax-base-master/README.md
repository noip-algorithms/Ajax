---
title: Ajax异步请求案例
date: 2020-10-12
categories: Javascript
---

#### 1. 项目说明

1. 创建如下前端页面

   ![页面](https://s1.ax1x.com/2020/10/16/0bJuKf.png)

2. 点击B按钮，通过Ajax从后端接收到图片的`src`,渲染新的图片，页面不发生刷新

   ![Ajax更换图片](https://s1.ax1x.com/2020/10/16/0bJmxP.png)

#### 2. 步骤

1. 后端

   - 创建目录： `ajax-base-master` / `public`

   - 初始化项目`root`:  

     ```bash
     git install express
     ```

   - 创建服务器/配置静态资源： `server.js`

     ```js
     //1. 引入express框架
     const express = require('express')
     //6. 引入路径处理模块
     const path = require('path')
     //2. 创建web服务器
     const app = express()
     //5. 静态资源访问服务功能
     app.use(express.static(path.join(__dirname, 'public')))
     
     //3. 设置端口
     const PORT = process.env.NODE_ENV || 3000
     //4. 监听端口
     const server = app.listen(PORT,()=>{
       console.log(`Server running at port: http://localhost:${PORT}...`)
     })
     ```

   - 启动服务:` server.js`根目录

     ```bash
     $ nodemon server.js
     ```

   - 视图

     ![启动server](https://s1.ax1x.com/2020/10/16/0bNVPJ.png)

   - 配置路由

     ```js
     app.get('/get', async(req,res) => {
       await res.send("落霞与孤鹜齐飞 秋水共长天一色")
     })
     ```

2. #### 前端

   - 创建静态资源目录： 参见视图

   - 创建静态文件：`index.html`

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Demo for ajax base master</title>
       <link rel="shortcut icon" href="imgs/favicon.ico" type="image/x-icon">
       <link rel="stylesheet" href="css/index.css">
     </head>
     <body>
       <div class="card">
         <h2>Hello World!</h2>
         <img src="imgs/photo.jpg" alt="photo">
         <ul>
           <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis amet consequatur eligendi, autem molestias nostrum ratione animi temporibus beatae quo expedita accusamus delectus sapiente distinctio! Quibusdam cumque numquam unde dolorem.</li>
           <li><button></button></li>
         </ul>
       </div>
       <script src="js/index.js"></script>
     </body>
     </html>
     ```

     

   - 创建静态文件： `less/indexless`，保存时自动生成`css/index.css`

     ```css
     * {
       margin: 0;
       padding: 0;
       list-style: none;
     }
     .center {
       display: flex;
       justify-content: center;
       align-items: center;
     }
     body {
       min-height: 100vh;
       .center;
       .card{
         width: 280px;
         padding: 15px;
         box-shadow: 1px 2px 4px rgba(0,0,0,.5);
         h2 {
           text-align: center;
           line-height: 60px;
         }
         img {
           height: 150px;
           width: 100%;
         }
         ul {
           padding: 20px 0;
           li {
             line-height: 20px; 
             &:nth-of-type(2) {
               float: right;
               margin: 10px auto 0;
               button {
                 width: 30px;
                 height: 30px;
                 border-radius: 50%;
                 background: green;
                 outline: none;
                 border: 0px;
                 font-size: 20px;
                 color: #fff;
                 box-shadow: 1px 2px 6px rgba(0,0,0.5);
               }
             }     
           }
         }
       }
     }
     ```

     

   - 创建静态文件： `js/index.js`

   - Ajax 请求数据的四个步骤

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

        

   - `index.js`

     ```js
     // 5. 设置访问路由
     const url = "http://localhost:3000/get"
     
     // 6. 获取元素
     const img = document.querySelector('img')
     const btn = document.querySelector('button')
     
     // 7. 事件监听
     btn.addEventListener("click",function(){
     
       // 1. 创建代理对象
       let xml;
       if(window.XMLHttpRequest) {
         xml = new XMLHttpRequest()
       }else{
         xml = new ActiveXObject('Mircrosoft.XMLHTTP')
       }
       // 2. 设置请求方式
       xml.open("GET",url,true)
     
       // 3. 发送请求
       xml.send(null)
       
       // 4. 获取服务端发给客户端的数据
       xml.onreadystatechange = function(){
         if(xml.readyState == 4 && xml.status == 200){
           img.src = xml.responseText
         }
       }
     })
     ```

     

   - 浏览器`url`： `http://localhost:3000`
   - 点击按钮，更换图片
   - 观察`url`并没有改变；

1. 关于Ajax基本原理的`TypeScript`版本介绍

   [参考文档](https://yuanmin650304.github.io/2020/10/15/JavaScript/JS/Ajax-base-for-Typescript/)