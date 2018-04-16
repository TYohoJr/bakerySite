import React from "react";
import "./LandingPage.css";
import { connect } from 'react-redux';
import Directions from "../Directions/Directions";

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
                        Original Design
                    <img className="landing-page-pic" src={require('../cake-images-top/lego.jpg')} alt="baby cake" />
                    </div>
                    <div className="landing-page-divs">
                        <img className="landing-page-pic" src={require('../cake-images/overflow-chocolate.jpg')} alt="chocolate cake" />
                        Outstanding Taste
                </div>
                </div>
                <div id="directions">
                    <Directions />
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(LandingPage);