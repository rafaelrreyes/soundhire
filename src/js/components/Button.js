import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonVal: 0
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.onButtonClick} 
                    value={this.props.label}>
                {this.state.buttonVal}
                </button>
            </div>
        )
    }

    onButtonClick(event) {
        this.setState({
            buttonVal: this.state.buttonVal + 1
        });
        console.log(event.target.value);
        console.log(this.state.buttonVal);
    }
}