import React from "react";
import "./LandingPage.css";
import { connect } from 'react-redux';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.changeActivePage = this.changeActivePage.bind(this);
    }

    changeActivePage() {
        this.props.dispatch({
            type: "changeActivePage",
            activePage: "This is the NEW active page!!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.props.activePageReducer.activePage}</div>
                <button onClick={this.test}>Server Test</button>
                <button onClick={this.changeActivePage}>Change Active Page</button>
            </div>
        )
    }
}

export default connect((state) => (state))(LandingPage);