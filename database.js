// Database related code

const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
    {
        id: String,
        name:String,
        messages: [{
            nickname:String,
            message:String,
            datetime: Date
        }]
    });

const Room = mongoose.model('Room', RoomSchema);

function addRoom(id, name) {
    Room.collection.insertOne({id: id, name: name, messages: []})
}

function init() {
(async () => {
    console.log('Connecting to database...');
    try {
        await mongoose.connect('mongodb+srv://cs132:csci1320@cluster0-0wplh.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(error);
    }
    console.log('Successfully connected!');
})();
}

function close() {
    mongoose.disconnect();
}

module.exports = {
    Room, init, close, addRoom
};