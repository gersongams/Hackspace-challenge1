var express = require('express'),
    app = express(),
    pug = require('pug');

var server = require('http').Server(app);
var port = process.env.PORT || 3000;

var io = require('socket.io')(server);
var Vue = require('vue');


server.listen(port, function () {
    console.log("Listening on *:" + port);
});

app.use(express.static(__dirname));


var developersLanding = require('./developers-landing'),
    developersDetail = require('./developers-detail'),
    chatDetail = require('./chat-detail');

app.set('views', '.');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.redirect('/developers');
});

app.get('/developers', developersLanding.controller);
app.get('/developers/:developerId', developersDetail.controller);
app.get('/chat', chatDetail.controller);

app.get('/onlineusers', function(request,response) {
    //console.log(io.sockets.adapter.rooms);
    response.send(io.sockets.adapter.rooms);
});

io.on('connection', function (socket) {
    console.log('A user connected:' + socket.id);

    //Tell all clients that someone connected
    io.emit('user joined', socket.id)

    // The client sends 'chat.message' event to server
    socket.on('chat.message', function (message) {
        //Emit this event to all clients connected to it
        io.emit('chat.message', message);
    });

    //client sends "user typing" event to server
    socket.on('user typing', function (username) {
        io.emit('user typing', username);
    });

    //client sends 'stopped typing' event to server
    socket.on('stopped typing', function (username) {
        io.emit('stopped typing', username);
    });


    socket.on('disconnect', function () {
        console.log('User left: ' + socket.id);

        //Tell all clients that someone disconnected
        socket.broadcast.emit('user left', socket.id);
    });
});
