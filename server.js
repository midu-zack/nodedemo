const http = require('http')

const url = require('url')

const server =http.createServer((req,res)=>{

    const rurl = url.parse(rurl,true).pathname
    if(rurl==='/')
{
     res.write("hello from server")
    res.end()
}
   
})

server.listen(8282);


 