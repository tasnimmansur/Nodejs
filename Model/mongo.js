var mongoose    =   require("mongoose");
var Schema   = mongoose.Schema;
var http = require ('http');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/mydb';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

var userSchema  = new Schema({
    "userEmail" : String,
    "userPassword" : String
});
// create model(table)
module.exports = mongoose.model('userLogin',userSchema);



