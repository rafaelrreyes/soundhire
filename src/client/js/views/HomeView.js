import React, { Component } from "react";
import TabsView from "../components/Tabs";
import Tab from "../components/Tab";

class HomeView extends Component {
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
        return (
            <section>
                <h1>Hire a DJ, or just find someone to jam with.</h1>
                <div>
                    <TabsView>
                        <Tab label="All">
                            <p>All content</p>
                        </Tab>
                        <Tab label="Musicians">
                            <p>Musicians</p>
                        </Tab>
                        <Tab label="DJs">
                            <p>DJs</p>
                        </Tab>
                    </TabsView>
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

export default HomeView;