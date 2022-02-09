const http = require('http');

const port = 3000;
const hostname = 'localhost'

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<body class="app"></body>')
    res.write('<h3>welcome to haveli</h3>');
    res.write('<p>run for life</p>');
    res.end();
});

server.listen(port, hostname, ()=>{
    console.log(`listening on port ${port}`);
})