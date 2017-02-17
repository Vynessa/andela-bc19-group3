var express = require('express');
var app = express();

var port = 5000;

app.set('view engine', 'html')
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port, function(){
console.log('Server running on port ' + port);
});