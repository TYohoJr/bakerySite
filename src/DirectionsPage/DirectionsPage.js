import React from "react";
import "./DirectionsPage.css";
import Directions from "../Directions/Directions";
import { connect } from 'react-redux';

class DirectionsPage extends React.Component {
    render() {
        return (
            <div>
                <Directions/>
            </div>
        )
    }
}

export default connect((state) => (state))(DirectionsPage);