// import packages
// path to define directory paths
// webpack 

// module.exports settings object
	// entry set to app.js
	// output set to object
		// 	path set to rootpath
		// 	filename set to bundle.js
	// 	module object instructions for transpiling
		// 	loaders array containing object
			// 	test to catch js and jsx files
			// 	loader set to string babel-loader
			// 	exclude set to node modules
			// 	query instructions for babel
				// 	presets set to array es2015 and react

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query:{
				presets: ['es2015', 'react']
			}
		}]
	}
}