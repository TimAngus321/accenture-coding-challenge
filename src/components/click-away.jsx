import React, { Component } from 'react';
import WhoAreAccenture from './who-accenture.jsx';

class ClickAbout extends Component {
    constructor() {
        super();
        this.state = {
            name: 'aboutAccenture',
            showWho: false,
            showWhat: false,
            showHow: false,
            showCommunityImpact: false,
            showAwards: false,
            showSuccessStories: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        switch(name) {
            case "showWho":
                this.setState({ showWho: !this.setState.showWho });
                this.setState({ 
                    showWhat: false,
                    showHow: false,
                    showCommunityImpact: false,
                    showAwards: false,
                    showSuccessStories: false
                });
                break;
            case "showWhat":
                this.setState({ showWho: !this.setState.showWhat });
                this.setState({ 
                    showWho: false,
                    showHow: false,
                    showCommunityImpact: false,
                    showAwards: false,
                    showSuccessStories: false
                });
        }
    }

    render() {
        const { showWho, showHow } = this.state;
        return (
            <div>
            <div className="abt-acc-btn" onClick={() => this.hideComponent("showWho")}>
             Who?
            </div>
            <div className="abt-acc-btn" onClick={() => this.hideComponent("showHow")}>
             How?
            </div>
            <div className="reveal-about-accenture">
            { showWho && <WhoAreAccenture /> }
            { showHow && <WhoAreAccenture /> }
            </div>
            </div>
        )
    }

}

export default ClickAbout;