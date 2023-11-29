// const http =require("http")




// http.createServer((req,res)=>{
//     res.write("This is node js")
//     console.log(req.url);
//     console.log("noodmon use");
//     res.end()
// }).listen(9567);


// local module access

// const myfun = require("./localmodule")

// myfun();


// variable access in local modul

// const text = require("./localmodule")
// console.log(text.name);
// text.great()



// npm package texting

// let cli = require("cli-color")
let uc=require("upper-case");
// console.log(cli.yellow.bgCyan.underline("this npm method"));
console.log(uc.upperCase("this largest text"));  //just small error