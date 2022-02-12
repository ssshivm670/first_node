const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req,res)=>{
    const items = [
        {name: 'mobile phone', price: 1000},
        {name: 'book', price: 10},
        {name: 'computer', price: 1500},
    ]
    res.render('index', { items});
})

app.get('/add-item', (req,res)=>{
    res.render('add-item');
})


//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res)=>{
    res.render('error');

})