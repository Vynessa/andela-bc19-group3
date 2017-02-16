var mongoose = require(mongoose);

var roomSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    author:{type:String},
});


module.exports = mongoose.model('room', roomSchema);

var rooms = [
    
]