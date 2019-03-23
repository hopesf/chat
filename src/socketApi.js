const socketio = require("socket.io");
const socketAuthorization = require('../middleware/socketAuthorization');
const io = socketio();

const socketApi = {
    io
};

//libs (online kullanicinin redisdeki verisi)
const Users = require('./lib/Users');

//socket authorization (redisdeki session verisini socket io ya baglayabilmeye yariyor)
io.use(socketAuthorization);

io.on('connection', socket =>{
   console.log('Hos geldin '+ socket.request.user.name);
    Users.upsert(socket.id, socket.request.user);

    socket.on('disconnect', socket =>{
        console.log('bir kullanici ayrildi');
    });
});


module.exports = socketApi;