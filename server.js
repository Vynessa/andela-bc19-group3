'use strict';

var express = require('express');

var app = express();

var port = 3000;

app.use(express.static(process.cwd() + './public'));
app.use(expres.static(process.cwd() + './src/views'));

app.get('/', function (req, res) {
    res.send('Hello Vanessa!!!!');
});

app.get('/rooms', function (req, res) {
    res.send('rooms');
});

app.get('/about', function(req,res){
    res.send('About Group members');
});

app.listen(port, function () {
    console.log('Listen on port: ' + port);
});