const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/add-item', (req,res)=>{
    res.render('add-item');
})


//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res)=>{
    res.render('error');

})