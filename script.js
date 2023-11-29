// const result = setInterval(() => {
//     console.log("muhammed midlaj");
// }, 1000);

// setTimeout(() => {
//     // console.log(" Midu zack");
//     clearInterval(result);
    
// }, 4000);


// ****************************
         //  samples
// *******************************


// console.log("running");

// const array = ["a","b","c"]

// // array.push("d");
// const newarray = [...array,"d","e","f"] //spread opreator

// console.log(newarray);


// function newfun(){
//     console.log("running at time 3 position ");
// }
// newfun()


// const newfun= ()=>  95;
 
// console.log(newfun());




 /* ************************
            advance
 ************************** */


//  console.log(globalThis);

// console.log(__filename);

// console.log(__dirname);




 /* ************************
            module
 ************************** */  

//  const path = require("path")

//  console.log(path.parse(__filename).ext);

// console.log(path.join(__dirname,"API","script.js"));

// const fs = require("fs");

// console.log(fs);
// const crush = "ago"

// fs.appendFile(path.join(__dirname, "/texting ","midlaj.text"),`\n your name :${crush}`,(error)=>{

//     if(error) throw error;
 
// })


// fs.readFile(path.join(__dirname, "/texting ","midlaj.text"),"utf8"  ,(error,data)=>{

//     if(error) throw error;

//     console.log(data);
 
// })


// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("message",(data)=>{
//     console.log(data);
// })

// emitter.on("chatting",(data)=>{
//     console.log(data.text2);
// })

// emitter.emit("message",{text : "yes i coming"});
// mugalile same method thanne aan idh simple aaki use aakam
// emitter.emit("message"," I will reasrching in your method ")
// emitter.emit("message"," Sorry your i not understant ")
// emitter.emit("message"," this method events ,all are events ")
// emitter.emit("message"," your very important peroson ")


// emitter.emit("chatting",{text2 :" Sorry i am very busy"})










 /* **********************************
            Events
 ************************************** */

        const events = require("events");
            
        const Eminettor = new events.EventEmitter();
        // define event
         Eminettor.on('hey zack', () => {

            console.log("texting in nodejs");
            
        })
        // invoke
        Eminettor.emit('hey zack')



        const event = require("events");
            
        const Eventeminettor = new event.EventEmitter();
        // define event
        Eventeminettor.on('sum', (a,b) => {
            let result = a+b;
            console.log('sum',result );
            
        })
        // invoke
        Eventeminettor.emit('sum',"= ",90,20)

