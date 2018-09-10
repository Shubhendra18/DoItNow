var express = require('express');
var http = require('http');
var app = express();
var appRoutes = require('./routes/employeeRoutes');
var taskRoutes = require('./routes/taskRoutes');
var reportRoutes = require('./routes/reportRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors=require('cors');
const path = require('path');
mongoose.connect('mongodb://him12:him123@ds163650.mlab.com:63650/digiangulardb');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);
app.use('/', taskRoutes);
app.use('/', reportRoutes);
app.use('/Reports',express.static('Reports'));
http.createServer(app).listen(8080);
console.log("BackEnd Server Is On ", 8080);






