const express = require('express');
const mongoose = require('mongoose');
const Items = require('./models/items');

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

// Create new entry in mondo db
app.get('/create-item',(req,res)=> {
    const item = new Items({
        name: 'phone',
        price: 1000
    });
    item.save()
        .then(result=> res.send(result));
})

// Get all entries from mongodb
app.get('/get-items',(req,res)=>{
    Items.find()
        .then(result=>res.send(result));
});


//Get item by ID from mongoDB
app.get('/get-item',(req,res)=>{
    Items.findById('6207a15c60386e37382a41bb')
        .then((result)=>res.send(result))
});

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