import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MainMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/musicians">Musicians</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        );
    }
}