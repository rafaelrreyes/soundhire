import React, { Component } from "react";

export default class MusiciansList extends Component {
    constructor(props) {
        super(props);
        
        // musicians container
        this.state = {
            musicians: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {/* {this.renderMusiciansList()} */}
                    {this.state.musicians}
                </ul>
            </div>
        );
    }

    // renderMusiciansList() {
        
    // }

    componentDidMount() {
        fetch('http://localhost:8080/soundhire/src/tests/json/musicians/get')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let musicians = data.results.map(musician => {
                    return (
                        <li>{musician.name}</li>
                    )
                });
                this.setState({
                    musicians   //setting this state.musicians = scoped musicians
                });

                console.log(`musicians: ${this.state.musicians}`);
            });
        ;
    }
}