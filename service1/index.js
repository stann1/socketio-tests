var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(require('body-parser').json())

app.post('/event', function (req, res) {
    console.log(`sent event to room ${req.body.entity}-entity` , req.body.time)
    io.to(`${req.body.entity}-entity`).emit('event', req.body.time)
    res.json({ success: true, time: req.body.time });
});

io.on('connection', (socket)=>{
    if(socket.handshake.headers.cookie.includes('consentio')) { // authenticate user and get entity id
        console.log('socket connected and joined room 10-entity')
        socket.join('10-entity'); // join entity room.
    }
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});