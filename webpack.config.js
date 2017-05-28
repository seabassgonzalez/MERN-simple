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
			// 	loader set to babel-loader
			// 	exclude set to node modules
			// 	query instructions for babel
				// 	presets set to array es2015 and react