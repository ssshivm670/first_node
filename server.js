const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = 'localhost'

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html'); 
    fs.readFile('./view/index.html',(err,data)=>{
        if(err){
            console.log('Ooh nooooo',err);
            res.end();
        }else {
            res.end(data);
        }
    });
});

server.listen(port, hostname, ()=>{
    console.log(`listening on port ${port}`);
})