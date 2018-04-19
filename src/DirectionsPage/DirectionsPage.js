import React from "react";
import "./DirectionsPage.css";
import Directions from "../Directions/Directions";
import { connect } from 'react-redux';

class DirectionsPage extends React.Component {
    render() {
        return (
            <div>
                {/* Display the Directions component */}
                {/* This is it's own component simply for future proofing of adding more content to this tab */}
                <Directions />
            </div>
        )
    }
}

export default connect((state) => (state))(DirectionsPage);