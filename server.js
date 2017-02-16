'use strict';

var express = require('express');
var mongoose = require('mongoose');

var roomModel = require('./model/room');

var app = express();

var port = 3000;

app.set('views', './src/views');
app.set("view engine", "ejs");


app.use(express.static(process.cwd() + 'public'));
app.use(express.static(process.cwd() + './src/views'));

app.get('/', function (req, res) {
    res.render('file');
});

app.get('/rooms', function (req, res) {
    res.send('Room View');
});

app.get('/about', function (req, res) {
    res.send('About Group members');
});

mongoose.connect('mongodb://localhost/RoomChecker');

var db = mongoose.connection;
db.on ('error', console.error.bind(console, 'connection error:'));
db.once ('open', function(){
    console.log('Successfully connected to mongodb database');
});
app.listen(port, function () {
    console.log('Listen on port: ' + port);
});