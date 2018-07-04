import React, { Component } from "react";

export default class UserTextField extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            inputValue: "" 
        };
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChanged}/>
                Value of the input: {this.state.inputValue}
            </div>
        );
    }

    onInputChanged(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
}