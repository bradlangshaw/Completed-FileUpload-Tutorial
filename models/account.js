// create a Staff-account model with mongoose to do CRUD operations
var mongoose = require('mongoose');
var schema = mongoose.Schema;

//refrence passport-local-mongoose to make this model usable for managing staff members.
let plm = require('passport-local-mongoose');

//create the Staff-account schema. username and passport are include automatically
let accountSchema = new mongoose.Schema({});


accountSchema.plugin(plm);

// make this model public
module.exports = mongoose.model('Account', accountSchema);