import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomeView from "../views/HomeView";
import MusiciansView from "../views/MusiciansView";
import ContactView from "../views/ContactView";
import AboutView from "../views/AboutView";

const test = () => <div>test</div>;
export default class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Route path="/musicians" component={MusiciansView} />
                    <Route path="/about" exact component={AboutView} />
                    <Route path="/contact" exact component={ContactView} />
                </Switch>
            </div>
        )
    }
}