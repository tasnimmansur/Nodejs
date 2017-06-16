var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Artist = require('./artist');

var connection = mongoose.createConnection("mongodb://localhost/auto_increment");
autoIncrement.initialize(connection);

//mongoose.connect('mongodb://localhost/auto_increment');


connection.on('error',console.error.bind(console,"Connection error"));
connection.once('open',function callback() {
    console.log("Connection established via :" + connection);
});

/*app.get('/', function(req, res){

    Artist.create({
        name: "artistName",
        fpimage: "Cover"

    }, function(err, artist){
        if(err) {
            console.log(err);
        } else {
            artist.save();
            console.log(artist);
            res.send('Hi ')
        }
    });
});
*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server has started on Port: '+app.get('port'));
});



