// var http = require('http')
// var fs = require('fs')


// var html=fs.readFileSync('index.html','utf-8') 
// http.createServer((request,response)=>{

//     response.end(html)
//     console.log("server creation setup");
//     // response.end("A server creation")


// }).listen(2333,()=>{
//     console.log("SERVER is WORKING ");
// });






















 








var http = require('http')

http.createServer((require,response)=>{
    response.end("SERVER")


})
.listen(4000,()=>{
    console.log(" SERVER IS WORKING ");
})