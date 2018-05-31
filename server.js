var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/nodetest');

//on connection
mongoose.connection.on('connected', () => {
    console.log("Successfully connected to database @ 27017");
});

//Error on Connection
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("Error while connecting to database  " + err);
    }
});

var port = 3000;

var app = express();

app.use(cors());
app.use(bodyparser.json());

//routes
app.use('/api', route);

app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, function () {
    console.log("Connected to the port::: " + port);
})

app.use("/", function (req, res) {
    res.send("Hello World");
});

app.post('/quotes', function (req, res) {
    console.log("Successfully Completed!!!!");
    res.sendFile(__dirname + '/success.html');
});