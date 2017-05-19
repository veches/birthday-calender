//@ts-check

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('app'));
app.get(['/birthday/:id?'], function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'))
});

app.listen(8000, function () {
    console.log("server running on: http://localhost:8000");
});