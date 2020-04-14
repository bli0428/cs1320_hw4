// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const db = require('../database.js');

// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    response.render('room', {title: 'Chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
}

function createRoom(req, res) {
    let roomId = roomGenerator.roomIdGenerator();
    // Make sure that each room id is unique
    async () => {
        let count = await db.Room.findOne.count({id: roomId});
        while (count > 0) {
            try {
                roomId = roomGenerator.roomIdGenerator();
                count = await db.Room.findOne.count({id: roomId});
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    db.addRoom(roomId, roomId);
    res.json(roomId);
}

function getMessages(req, res) {
    const roomId = req.params.roomName;
    db.Room.findOne({id: roomId})
    .then((doc) => {
        res.json(doc.messages);
    })
}

function postMessage(req, res) {
    const roomId = req.params.roomName;
    console.log(req.body);
    db.Room.collection.updateOne({id: roomId}, 
        {$push: {messages: 
            {nickname: req.body.nickname, message:req.body.message, datetime: req.body.datetime
            }}});
    
}

module.exports = {
    getRoom, createRoom, postMessage, getMessages
};