var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

var artistSchema = new mongoose.Schema({
    name: String,
    fpimage: String,
    id:{type:Number, default:0, unique: true}

});

module.exports = mongoose.model('Artist', artistSchema);

artistSchema.plugin(autoIncrement.plugin,{
    model: 'artistSchema',
    field: 'id',
    startAt: 1,
    incrementBy:1
});
