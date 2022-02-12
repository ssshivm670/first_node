const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req,res)=>{
    res.sendFile('./views/index.html', { root : __dirname});
})

app.get('/add-item', (req,res)=>{
    res.sendFile('./views/add-item.html', { root : __dirname});
})


//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res)=>{
    res.sendFile('./views/error.html', { root : __dirname});

})