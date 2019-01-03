import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/components/Header";
import MainMenu from "./js/components/MainMenu";
import MainComponent from "./js/components/MainComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// font awesome initiation (should move this to its own file or own method, maybe initialize a class and fire off in constructor)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<MainMenu />
					<MainComponent/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById("main-container")
);
