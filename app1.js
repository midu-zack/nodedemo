var fs = require('fs')
//**********************
// // async
//**********************
// fs.readFile('./test.text','utf-8',(err,data)=>{
//     console.log(data);
    
// })


//**********************
// // sync
//**********************

// console.log("reading file......");


//**********************
// //sync
//**********************
// const data= fs.readFileSync('./test.text','utf-8')
// console.log('sync',data);





//**********************
// callbackhell
//**********************
fs.readFile('test.text','utf-8',(err,data)=>{
    console.log(data);
    fs.readFile('test.text',"utf-8",(err1,data1)=>{
        console.log(data1);
        fs.readFile('test.text','utf-8',(err2,data2)=>{
            console.log(data2);
                fs.writeFile('test.text')
        })
    })
})