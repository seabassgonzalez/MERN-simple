// require path package
// require router for express to define routes

// app.get to get router at root '/' function(request response)
	// return index.html file using res.sendFile (path.join current path, and index html file)

// module.exports route

var path = require('path');
var router = require('express').Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../../client/index.html'});

module.exports = router;