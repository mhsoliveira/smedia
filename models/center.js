var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var centerSchema = new Schema({
    type: String,
    name: String,
    url: String,
    likes: [{ count: Number, date: Date }]
},{ collection: 'centers'});



// Mongoose Model definition
var Centers = mongoose.model('JString', centerSchema,'centers');

module.exports = mongoose.model('Center', centerSchema,'centers');
