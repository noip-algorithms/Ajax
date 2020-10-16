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