const http = require('http')
const url = require("url")



const server = http.createServer((req,res)=>{
    const rurl = url.parse(req.url,true).pathname;

    if(rurl=='/'){
        res.write("Create A server ")

         res.end()
    }else if(rurl == '/home'){
        res.write("Server ")

         res.end()
    }else{
        res.write("Server  zack ")

         res.end()
    }
 
    

})
server.listen(8080)