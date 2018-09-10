var express = require('express');
var router = express.Router();
var EmployeeCollection = require('../models/employeeSchema');

router.post('/create', (req, res, next) => {
    var ec = new EmployeeCollection({
        Name: req.body.Name,
        Address: req.body.Address,
        Email: req.body.Email,
        Password: req.body.Password
    });
    ec.save((err, Employee) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: Employee });

    });
});
router.get('/read', (req, res, next) => {
    EmployeeCollection.find({}, (err, AllData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: AllData });
    });
});

router.put('/update', (req, res, next) => {
    EmployeeCollection.findById(req.body._id, (err, UpdatedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        UpdatedData.Name = req.body.Name;
        UpdatedData.Address = req.body.Address;
        UpdatedData.Email = req.body.Email;
        UpdatedData.Password = req.body.Password;
        UpdatedData.save((err, UpdatedData) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: UpdatedData });
        });
    });
});
router.delete('/delete/:id', (req, res, next) => {
    EmployeeCollection.findOneAndRemove({ _id: req.params.id }, (err, deletedData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: deletedData });

    });
});

router.post('/userLogin', (req, res, next) => {
    EmployeeCollection.find({ $and: [{ "Email": req.body.Email }, { "Password": req.body.Password }] },
        (err, AllData) => {
            if (err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: AllData });
        });
});

module.exports = router;