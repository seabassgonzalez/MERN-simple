// import necessary packages
// fs and express
// routes from server file indexRoutes 

// create app
// instantiate var app equal to express()

// define view engine
// app.set view engine to html
// app.engine(html function(path options callbacks))
	// fs. readfile(path standard utf 8 encoding and callback to be used on contents of file)

// middle ware to accept requests and processes them
// tell express to return static files at root folder where bundle.js exists
// app.use express.static file path

// routes to route endpoint
// app.use imported indexRoutes
 
// error handler for other types of requests
// app.use (function error, request, response, next)
	// if errors, respond with error status or 500

// export app

var fs = require('fs');
var express = require('express');

// import routes
var indexRoutes = require('./routes/index');

// create app
var app = express();

// view engine
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
	fs.readFile(path, 'utf-8', callback);
});

// middleware
app.use(express.static(path.join(__dirname, '../client')));

// routes
app.use('/', indexRoutes);

// error handler
app.use(function(err, req, res, next){
	res.status(err.status || 500);
});

// export app
module.exports = app;