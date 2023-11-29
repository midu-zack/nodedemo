// console.log("hello node js");
// console.log("hey chellooo");







// reading input & waiting output

const readline = require('readline')
const rel =readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rel.question("please enter your name ",(name)=>{ //just question asking
    console.log("your enterd :"+name);
    rel.close() //already closing
})  

rel.on('close',()=>{ //methos on    
    console.log("interface closed");
    process.exit()
})

const http = require('http')

const server =http.createServer(( request,response)=>{
  
})


server.listen(8000,'127.0.0.1 ',()=>{
    console.log('server has started!!!!');
})