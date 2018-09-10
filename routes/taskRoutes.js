var express = require('express');
var router = express.Router();
var Task = require('../models/taskSchema');

router.post('/createTask', (req, res, next) => {
    var newTask = new Task({
        TaskName: req.body.TaskName,
        Desc: req.body.Desc,
        AssignDate: req.body.AssignDate,
        CompleteDate: req.body.CompleteDate,
        MemberEmail: req.body.MemberEmail,
    });
    newTask.save((err, Task) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: Task });

    });
});
router.get('/readTask', (req, res, next) => {
    Task.find({}, (err, AllData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: AllData });
    });
});

router.post('/readTaskByEmployee/:Email', (req, res, next) => {
    Task.find({ MemberEmail: req.params.Email }, (err, AllData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: AllData });
    });
});
module.exports = router;