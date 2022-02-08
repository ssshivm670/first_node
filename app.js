const fs = require('fs');

//read file 
// fs.readFile('./files/note.txt', (err, data)=>{
//     if(err) {
//         console.log(23444);
//     } else {
//         console.log(data.toString());
//     }
// });

//write
// fs.writeFile('./files/note.txt','new message', (err, data)=>{
//     if(err) {
//         console.log(23444);
//     } else {
//         console.log('new message created');
//     }
// })

// append file

// fs.appendFile('./files/note.txt','\nnew message', (err, data)=>{
//     if(err) {
//         console.log(23444);
//     } else {
//         console.log('new message created');
//     }
// })

//create folder 
// if(!fs.existsSync('./files/newfolder')){
//     fs.mkdir('./files/newfolder',(err)=> {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('new folder created');
//         }
//     })
// }else {
//     console.log('folder exist');
// }

// delete folder 
// if(fs.existsSync('./files/newfolder')){
//     fs.rmdir('./files/newfolder',(err)=> {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('deleted');
//         }
//     })
// }else {
//     console.log('folder does not exist');
// }

//delete file 
// if(fs.existsSync('./files/note.txt')){
//     fs.unlink('./files/note.txt',(err)=> {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(' file deleted');
//         }
//     })
// }else {
//     console.log('file does not exist');
// }