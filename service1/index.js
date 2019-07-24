var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(require('body-parser').json())

app.post('/event', function (req, res) {
    const nsp = io.of(`/${req.body.entity}`);
    nsp.emit('notif', req.body.time);
    
    res.json({ success: true, time: req.body.time });
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});