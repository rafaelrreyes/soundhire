import React, { Component } from 'react';

export default class MainMenu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/musicians">Musicians</a></li>
                    <li><a href="/djs">DJs</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        );
    }
}