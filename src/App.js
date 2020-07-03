import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';


class App extends Component {
	
	render() {
		return (
			<div className="App wrapper wrapper-full_width">
				<div id="overlay"></div>
				<Router>
					<Switch>
						<Route exact path={['/','/home']} component={Home}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
