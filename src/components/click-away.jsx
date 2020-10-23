import React, { Component } from 'react';
import WhoAreAccenture from './who-accenture.jsx';
import HowAccentureClients from './how-accenture.jsx';
import WhatAccentureBelieves from './what-accenture.jsx';

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
                this.setState({ showWhat: !this.setState.showWhat });
                this.setState({ 
                    showWho: false,
                    showHow: false,
                    showCommunityImpact: false,
                    showAwards: false,
                    showSuccessStories: false
                });
                break;
                case "showHow":
                this.setState({ showHow: !this.setState.showHow });
                this.setState({ 
                    showWho: false,
                    showWhat: false,
                    showCommunityImpact: false,
                    showAwards: false,
                    showSuccessStories: false
                });
                break;
                default:
                return null;
        }
    }

    render() {
        const { showWho, showWhat, showHow } = this.state;
        return (
            <div className="find-out-about-accenture">
            <div className="about-btns">
            <div className="abt-acc-btn" onClick={() => this.hideComponent("showWho")}>
             Who?
            </div>
            <div className="abt-acc-btn" onClick={() => this.hideComponent("showWhat")}>
             What?
            </div>
            <div className="abt-acc-btn" onClick={() => this.hideComponent("showHow")}>
             How?
            </div> 
            </div>
            <div className="reveal-about-accenture">
            { showWho && <WhoAreAccenture /> }
            { showHow && <HowAccentureClients /> }
            { showWhat && <WhatAccentureBelieves />}
            </div>
           </div>
        )
    }

}

export default ClickAbout;