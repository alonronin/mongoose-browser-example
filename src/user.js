var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Type = Schema.Types;

var schema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, min: 18 }
});


module.exports = schema;


