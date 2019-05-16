var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function() {
    console.log("port is running")
});

// Aystex kapum enq classnery

var Grass = require("modulner/Grass.js");
var GrassEater = require("modulner/GrassEater.js");
var Gishatich = require("modulner/Gishatich.js");
var Napastak = require("modulner/Napastak.js");
var Vorsord = require("modulner/Vorsord.js");
var LivingCreature = require("modulner/LivingCreature.js");

// haytararum enq zangvacner

grassArr = [];
GrassEaterArr = [];
GishatichArr = [];
Napastak = [];
Vorsord = [];
LivingCreature = [];
