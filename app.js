const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/items');

const app = express();
app.use(express.urlencoded({extended: true}));

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
    res.redirect('/get-items')
})

// Get all entries from mongodb
app.get('/get-items', (req, res) => {
    Item.find()
        .then(result => res.render('index', { items: result }))
        .catch((err) => console.log(err));
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
})


app.post('/items',(req,res)=>{
    console.log(req.body);
    const item = new Item(req.body);
    item.save()
        .then(()=>{res.redirect('/get-items')})
})

app.get('/items/:id',(req,res)=>{
    console.log(req.params);
    const { params: {
        id
    }} = req;
    Item.findById(id).then(result=>{
        console.log(result);
        res.render('item-detail',{item:result});
    })
});

//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res) => {
    res.render('error');

})