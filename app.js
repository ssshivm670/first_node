const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongodb = 'mongodb+srv://admin:admin123@firstnode.g36tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTED");
        app.listen(3000);
    })
    .catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        { name: 'mobile phone', price: 1000 },
        { name: 'book', price: 10 },
        { name: 'computer', price: 1500 },
    ]
    res.render('index', { items });
})

app.get('/add-item', (req, res) => {
    res.render('add-item');
})


//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res) => {
    res.render('error');

})