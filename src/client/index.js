import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./js/components/MainComponent";
import Header from "./js/components/Header";
import MainMenu from "./js/components/MainMenu";
import Footer from "./js/components/Footer";
import Button from "./js/components/Button";
import UserTextField from "./js/components/UserTextField";

// font awesome initiation (should move this to its own file or own method, maybe initialize a class and fire off in constructor)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

class MainContainer extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MainMenu />
				<MainComponent />
				<UserTextField />
				<Footer />
				<Button label="test" />
			</div>
		)
	}
}

ReactDOM.render(
	<MainContainer />, 
	document.getElementById("main-container")
);
