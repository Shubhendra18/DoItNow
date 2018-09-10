var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name: { type: String },
    Address: { type: String },
    Email: { type: String },
    Password: { type: String }

});
module.exports = mongoose.model('EmployeeCollection', obj)

