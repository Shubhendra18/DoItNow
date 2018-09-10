var express = require('express');
var router = express.Router();
var ReportCollection = require('../models/TaskReport');
var multer = require('multer');
const DIR = './Reports/';
var path = require('path');
var filepath;
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, "DIN" + Date.now() + file.originalname);
    }
});
var upload = multer({ storage: storage }).single("ReportData");

router.post('/sendReport1', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        this.path = req.file.path;
        console.log(this.path);
        return res.send("Upload Completed for " + path);
    });
});
router.post('/sendReport', function (req, res, next) {
    var newReport = new ReportCollection({
        TaskName: req.body.TaskName,
        Email: req.body.Email,
        Des: req.body.Des,
        AssignDate: req.body.AssignDate,
        ReportData: this.path
    });
    console.log(this.path);
    console.log(req.body.TaskName);
    console.log(this.path);

    newReport.save((err, Employee) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: Employee });

    });
});

// router.post('/', upload.single('file'), function (req, res, next) {
//     console.log(req.body);
//     console.log(req.file);
//     var newUpload = {
//       name: req.body.name,
//       created: Date.now(),
//       file: req.file
//     };
//     Upload.create(newUpload, function (err, next) {
//       if (err) {
//         next(err);
//       } else {
//         res.send(newUpload);
//       }
//     });
//   });


router.get('/readReport', (req, res, next) => {
    ReportCollection.find({}, (err, AllData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: AllData });
    });
});
router.post('/download', function (req, res, next) {
    filepath = path.join(__dirname, '../Reports') + '/' + req.body.filename;
    res.sendfile(filepath);
});
module.exports = router;