var express = require('express');
var multer = require('multer');
var app = express();
var port = 5000;

app.set('port', port);

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({storage: storage}).array('photo', 5);

app.get('/', function(resuest, response) {
    response.sendFile(__dirname +"/index.html");
});

app.post('/', function(request, response) {
    upload(request, response, function(err) {
        if(err) {
            console.log('Error Occured');
            return;
        }

        console.log(request.files);
        response.end('Your Files Uploaded');
        console.log('Photo Uploaded');
    })
});

var server = app.listen(port, function () {
    console.log('Listening on port ' + server.address().port)
});

