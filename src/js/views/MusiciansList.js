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
        fetch('/api/musicians/get')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let musicianViewItems = [];
                let musicians = data.musicians.map(musician => {
                    musicianViewItems.push(<li key={musician.name}>{musician.name}</li>);
                });

                this.setState({
                    musicians: musicianViewItems   //setting this state.musicians = scoped musicians
                });

                console.log(`musicians: ${this.state.musicians}`);
            });
        ;
    }
}