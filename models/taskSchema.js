var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
    TaskName: { type: String },
    Desc: { type: String },
    AssignDate: { type: String },
    CompleteDate: { type: String },
    MemberEmail: { type: String }

});
module.exports = mongoose.model('TaskCollection', taskSchema)

