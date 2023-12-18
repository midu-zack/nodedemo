var fs=require('fs')

// readfile

// fs.readFile('./test.text','utf-8', (err,data)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log(data);
//     }
// })


// creatfile

// fs.writeFile('new.text',"hey zack how are you ",(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("file created");
//     }
// })



// apppentfile

// fs.appendFile('new.text',"hey zack how are you \n ",(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("file created");
//     }
// })


// renamefile

// fs.rename("./sample.text","./zack.text",(err)=>{
// if(err){
//     console.log(err);
// }
// console.log("file renamed");
// })



// deletefiles

fs.unlink('./lamiya.js',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("this file deleted");
})


