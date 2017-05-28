// import libraries
// react and react dom and component

// instantiate app class extends component
	// render
		// return jsx

// reactdom.render(app, document.get by id)

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render(){
		return <h1>Hello World</h1>;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));