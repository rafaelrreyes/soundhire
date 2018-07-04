import React, { Component } from "react";
import MusiciansList from "../views/MusiciansList";

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MusiciansList />
            </div>
        )
    }
}