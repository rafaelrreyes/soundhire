import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./js/components/MainComponent";
import Header from "./js/components/Header";
import MainMenu from "./js/components/MainMenu";
import Footer from "./js/components/Footer";
import Button from "./js/components/Button";
import UserTextField from "./js/components/UserTextField";

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
