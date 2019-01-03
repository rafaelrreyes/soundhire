import React, { Component } from "react";

class TabsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(index) {
        this.setState({
            selectedIndex: index
        });
    }

    renderTabs() {
        const { children } = this.props;
        const { selectedIndex } = this.state;
        return children.map((tab, tabIndex) => {
            return React.cloneElement(tab, {
                onClick: this.handleTabClick,
                key: tabIndex,
                tabIndex: tabIndex,
                isActive: tabIndex === selectedIndex
            });
        });
    }

    renderTabContent() {
        const tabs = this.props.children;
        const selectedIndex = this.state.selectedIndex;
        if (tabs[selectedIndex]) {
            return tabs[selectedIndex].props.children;
        }
    }

    render() {
        return (
            <div>
                <ul className="tabs-list">
                    {this.renderTabs()}
                </ul>
                <div className="tab-content">
                    {this.renderTabContent()}
                </div>
            </div>
        )
    }
}

export default TabsView;