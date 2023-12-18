var fs=require('fs')
var http=require('http')

var html = fs.readFileSync('index.html',"utf-8",)

let url= http.createServer((req,res)=>{
         
        res.end(html)
 
});

url.listen(3000,()=>{

    console.log("working");
})
 