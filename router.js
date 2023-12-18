var fs=require('fs')
var http=require('http')

var html = fs.readFileSync('new.html',"utf-8",)

let url= http.createServer((request,response)=>{
         
       var path= request.url
        // console.log(path);
        // res.end(path)

        if(path==='/' || path.toLocaleLowerCase() === '/home'){
            response.writeHead(200)
            response.end(html.replace('{{%contant%}}'))


        }else if(path.toLocaleLowerCase() === '/phonenumber'){
            response.writeHead(200) 
            response.end(html.replace('{{%contant%}}'))

    //     }else if(path.toLocaleLowerCase() === '/age'){

    //     response.end(html)

        }
        else if(path.toLocaleLowerCase() === '/gmail'){
        response.writeHead(200)     
        response.end(html.replace('{{%contant%}}'))
 
       }else{
        response.writeHead(200) 
        response.end(html)
       }   
        
    
 
});

url.listen(3000,()=>{

    console.log("working");
})
 