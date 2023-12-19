// node create server 

// const http = require('http')

// http.createServer((req,res)=>{
//     res.end("hello")
// }).listen(3999)




// Express create server

const express = require('express')

const app = express()

app.get("/",(req,res)=>{

    res.send('where are you from')

}).listen(2000)



