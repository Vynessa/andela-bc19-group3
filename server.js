'use strict';

var express = require('express');


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


app.listen(port, function () {
    console.log('Listen on port: ' + port);
});