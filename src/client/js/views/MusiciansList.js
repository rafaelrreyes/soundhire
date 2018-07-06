import React, { Component } from "react";
import MusiciansListItem from "./MusiciansListItem";

export default class MusiciansList extends Component {
    constructor(props) {
        super(props);
        
        // musicians list view state
        this.state = {
            currentlySelectedMusician: null,
            musicians: []
        }
    }

    render() {
        return (
            <div className="row h-100 justify-content-center align-items-center">
                <ul className="list-group">
                    {this.state.musicians}
                </ul>
            </div>
        );
    }


    componentDidMount() {   
        fetch('/api/musicians/get')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let musicianViewItems = [];
                data.musicians.map(musician => {
                    musicianViewItems.push(
                        <MusiciansListItem
                            key={musician.user_id}
                            img_url={musician.img_url}
                            name={musician.name} 
                            rating={musician.rating}
                            genre={musician.genre}
                            instrument={musician.instrument}
                            description={musician.description}
                        />
                    );
                });

                this.setState({
                    musicians: musicianViewItems   //setting this state.musicians = scoped musicians
                });
            });
        ;
    }
}