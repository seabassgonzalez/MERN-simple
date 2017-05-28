// import necessary packages
// path fs and express

// create app
// instantiate var app equal to express()

// define view engine
// app.set view engine to html
// app.engine(html function(path options callbacks))
	// fs. readfile(path standard utf 8 encoding and callback to be used on contents of file)

// middle ware to accept requests and processes them
// tell express to return static files at root folder where bundle.js exists
// app.use express.static file path

// routes
// app.get at root '/' function(request response)
	// return index.html file using res.sendFile (path.join current path, and index html file)
 
// error handler for other types of requests
// app.use (function error, request, response, next)
	// if errors, respond with error status or 500

// server
// tell server to run on some port e.g. 8000 instantiate port variable
// tell server to listen on that point
	// log message to console to confirm listening on port


var path = require('path');
var fs = require('fs');
var express = require('express');

// create app
var app = express();

// view engine
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
	fs.readFile(path, 'utf-8', callback);
});

// middleware
app.use(express.static(__dirname));

// routes
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

// error handler
app.use(function(err, req, res, next){
	res.status(err.status || 500);
});

// serve app
var port = 8000;
app.listen(port, function(){
	console.log('running at localhost:' + port);
});
