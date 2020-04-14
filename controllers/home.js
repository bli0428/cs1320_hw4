// Controller handler to handle functionality in home page

// Example for handle a get request at '/' endpoint.

const db = require('../database.js');

function getHome(request, response){
  // do any work you need to do, then
  // Access database here
  const getRooms = async () => { return db.Room.collection.find().toArray() };
  getRooms().then((rooms) => {
    response.render('home', {rooms: rooms, title: 'Lobby'})});
}

module.exports = {
    getHome
};