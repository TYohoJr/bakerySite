import React from "react";
import "./AboutPage.css";
import { connect } from "react-redux";

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                About Page
            </div>
        )
    }
}

export default connect((state) => (state))(AboutPage);