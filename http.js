const http = require('http')


http.createServer((req,res)=>{
    res.write("hyy zack are you oke now")
    res.end()
}).listen(3000)