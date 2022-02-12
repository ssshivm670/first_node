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

app.get('/', (req, res) => {
    res.redirect('/get-items')
})

// Get all entries from mongodb
app.get('/get-items', (req, res) => {
    Items.find()
        .then(result => res.render('index', { items: result }))
        .catch((err) => console.log(err));
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
})


//Always add in the bottom coz if added before any route then that page will be inaccessible
app.use((req, res) => {
    res.render('error');

})