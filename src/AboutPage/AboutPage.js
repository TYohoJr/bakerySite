import React from "react";
import "./AboutPage.css";
import { connect } from "react-redux";

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                 <h3>The Cake Lady</h3>
                <div>
                    <img className="about-photo-mugshot" src={require("../images/placeholder.png")} alt="Laura Yoho" />
                </div>
                <p>
                    My name is Laura Yoho...
                </p>
            </div>
        )
    }
}

export default connect((state) => (state))(AboutPage);