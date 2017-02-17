var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
    name:{type:String},
    available:{type:String},
    number:{type:Number},
    maxNumber:{type:Number}
});


module.exports = mongoose.model('room', roomSchema);

// var rooms = [
//     {
//         name: "gamesRoom",
//         available:"currently free",
//         number:5,
//         maxNumber:8
//     },
//     {
//         name: "quietTimeRoom",
//         available:"currently booked",
//         number:0,
//         maxNumber:3
//     },
//     {
//         name: "learningRoom",
//         available:"currently free",
//         number:4,
//         maxNumber:5
//     },
//     {
//         name: "workingRoom",
//         available:"currently free",
//         number:1,
//         maxNumber:8
//     }
// ];

// exports.seedRooms = function (){
//     room.find({}).exec(function(error, collection){
//             if(collection.length === 0){
//                 for (var i = 0; i<rooms.length; i++){
//                     room.create(rooms[i]);
//                 }
//             }
//         });
// };