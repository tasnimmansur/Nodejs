var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/mydb');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create User schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model(table)
module.exports = mongoose.model('userLogin',userSchema);