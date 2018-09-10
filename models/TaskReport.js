var mongoose = require('mongoose');
var reportSchema = new mongoose.Schema({
    TaskName: { type: String },
    Email: { type: String },
    Des:{ type: String },
    AssignDate: { type: String },
    ReportData: { type: String }

});
module.exports = mongoose.model('ReportCollection', reportSchema)

