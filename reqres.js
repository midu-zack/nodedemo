var http = require('http')

var fs = require('fs');

// create server

const server = http.createServer((req,res)=>{
    res.end( html)
  


});
server.listen(4696,()=>{
    console.log('server has started');

})

// datas taking in a html file


let html = fs.readFileSync('index.html',"utf-8")
