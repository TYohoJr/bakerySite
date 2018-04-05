import React from "react";
import "./LandingPage.css";
import { connect } from 'react-redux';
import ImageCarousel from "../ImageCarousel/ImageCarousel";

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <ImageCarousel />
            </div>
        )
    }
}

export default connect((state) => (state))(LandingPage);