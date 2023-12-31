const express = require('express');
const ejs = require('ejs');
const homeRoute = require('./routes/home');
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const bodyParser = require('body-parser')
const app = express()

const port = 3000

mongoose.connect("mongodb://localhost:27017/crud", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;

db.on('error', () => console.log("data base not connected"))
db.once('open', () => {
    console.log("DB connected sussessfully")
})


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', homeRoute)

app.listen(port, () => console.log(`app listening on port ${port}!`));