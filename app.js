var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.json());

//To get the access for the functions defined in index.js class
var routes = require('./routes/imagefile');

app.use(express.static(path.join(__dirname + '/public')));
app.set('views', __dirname + 'views');

mongoose.connect('mongodb://localhost:27017/upload');

app.use('/', routes);

app.get('/images', function(req, res) {

    routes.getImages(function(err, genres) {
        if (err) {
            throw err;

        }
        res.json(genres);

    });
});

app.get('/images/:id', function(req, res) {

    routes.getImageById(req.params.id, function(err, genres) {
        if (err) {
            throw err;
        }

        res.send(genres.path)
    });

});

app.listen(8087);

console.log('Running on port 8087');