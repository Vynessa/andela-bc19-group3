var express = require('express');
var app = express();

var port = 3030;

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})


app.get('/rooms', function(req, res){
  res.sendFile(__dirname + '/rooms.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/meetingroom', function(req, res){
	res.sendFile(__dirname + '/meetingroom.html')
})

app.get('/gameroom', function(req, res){
	res.sendFile(__dirname + '/gameroom.html')
})

app.get('/quiettimeroom', function(req, res){
	res.sendFile(__dirname + '/quiettimeroom.html')
})

app.get('/learningroom', function(req, res){
	res.sendFile(__dirname + '/learningroom.html')
})

app.get('/workingroom', function(req, res){
	res.sendFile(__dirname + '/workingroom.html')
})

app.listen(port, function(){
console.log('Server running on port ' + port);
});