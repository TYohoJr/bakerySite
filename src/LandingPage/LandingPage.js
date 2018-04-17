import React from "react";
import "./LandingPage.css";
import { connect } from 'react-redux';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div id="landing-page-div">
                    <div className="landing-page-divs">
                        <img className="landing-page-pic" src={require('../images/ingredients.jpg')} alt="ingredients" />
                        Made from scratch using the best ingredients
                    </div>
                    <div className="landing-page-divs">
                        Original Designs
                    <img className="landing-page-pic" src={require('../cake-images-top/lego.jpg')} alt="baby cake" />
                    </div>
                    <div className="landing-page-divs">
                        <img className="landing-page-pic" src={require('../cake-images/overflow-chocolate.jpg')} alt="chocolate cake" />
                        Outstanding Taste
                    </div>
                </div>
                <div id="landing-page-info">
                    <img className="landing-page-laura" src={require("../images/laura-yoho.jpg")} alt="laura yoho" />
                    <p>test</p>
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(LandingPage);