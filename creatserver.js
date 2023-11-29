
/* *************************************************
              http
*************************************************** */
// var http = require('http')
// const { listeners } = require('process')

// http.createServer((req,res)=>{
//     res.write("welcome to nodejs")
//     // res.end()

// }).listen(4000)






/* *************************************************
            fs & http
*************************************************** */
var http=require('http')
var fs=require('fs')

http.createServer((req,res)=>{

    fs.readFile("index.html","utf-8",(err,data)=>{
        res.write(err)
        res.end()

    })

}).listen(2222)