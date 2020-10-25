/*
	Name: Arshdeep Singh
	Student ID: 301118326
	Date: 2020-09-7
*/

var port=process.env.PORT || 8080;
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

//Middleware to parse POST and GET requests
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({extended: true})); 

//Using Routes in seperate index.js file
var router=require('./routes/index.js');
app.set('view engine', 'ejs');

//Setting up the session for user login
app.use(session({
	secret: '#123#',
	resave: false,
  	saveUninitialized: true
}));

app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));
app.listen(port);
console.log('Server running at localhost:'+port);

module.exports=app