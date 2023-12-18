var fs = require('fs')

// var readableStream = fs.createReadStream(__dirname+'/test.text',{encoding:'utf-8'})
    var writableStream = fs.createWriteStream()
// readableStream.on('data',(chunksDatas)=>{
//     console.log("chunksDatas",chunksDatas);
// })

// readableStream.on('error',(err)=>{
//     console.log("Please check Error:"+err);
// })



// pipe

ReadableStream.pipe(WritableStream)