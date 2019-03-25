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

const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT
}));


io.on('connection', socket =>{
    Users.upsert(socket.id, socket.request.user);

    Users.list(users =>{
       io.emit('onlineList', users);
    });

    socket.on('disconnect', () => {
        Users.remove(socket.request.user._id);

        Users.list(users =>{
            io.emit('onlineList', users);
        });
    });

});


module.exports = socketApi;