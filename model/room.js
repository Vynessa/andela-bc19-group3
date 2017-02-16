var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
    name:{type:String},
    available:{type:String},
    number:{type:Number},
});


module.exports = mongoose.model('room', roomSchema);

var rooms = [
    
];