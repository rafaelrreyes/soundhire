import React, { Component } from "react";

export default class HomeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'All',
            location: ''    //should probably make this auto set to users location
        };
    }

    handleSearchChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    render() {

        const tabprops = {
            'display': 'inline-flex',
            'list-style': 'none',
        };

        return (
            <section>
                <h1>Hire a DJ, or just find someone to jam with.</h1>
                <div>
                    <div>
                        <ul style={tabprops}>
                            <li>All</li>
                            <li>Musicians</li>
                            <li>DJs</li>
                            <li>Groups/Bands</li>
                        </ul>
                    </div>
                    <div>
                        <form>
                            <input type="search" placeholder="Enter a location..."></input>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
