
var express = require('express');
var app = express();

var port = 5000;

app.set('view engine', 'html')
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, function () {
    console.log('Server running on port ' + port);


    // var express = require('express');
    // var mongoose = require('mongoose');

    // var roomModel = require('./model/room');


    // mongoose.connect('mongodb://localhost/RoomChecker');

    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function () {
    //     console.log('Successfully connected to mongodb database');
    //     roomModel.seedRooms();
    // });
});