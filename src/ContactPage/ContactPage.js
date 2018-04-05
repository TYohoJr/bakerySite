import React from "react";
import "./ContactPage.css";
import { connect } from "react-redux";

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                Contact Page
            </div>
        )
    }
}

export default connect((state) => (state))(ContactPage);