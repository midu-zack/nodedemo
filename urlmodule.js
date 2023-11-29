// var url = require('url')

// var restl= url.parse("http./midu.zack/about.com/xyzcombany")

// console.log(restl);


var url =require('url')
var fs  =require('fs')
var http =require('http')

http.createServer((req,res)=>{
    
    var parse = url.parse(req.url)

    fs.readFile("."+ parse.pathname,(err,data)=>{

        if(err){

            res.writeHead(404,{'Content-type':"/test.html"})

            return res.end("Error page not found");
        }

        res.writeHead(200,{'Content-type':"/test.html"})
        res.write(data)
        res.end()
        
    })
  
 

}).listen(3020)