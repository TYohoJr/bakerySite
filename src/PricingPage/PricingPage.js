import React from "react";
import "./PricingPage.css";
import { connect } from "react-redux";
import PricingForm from "../PricingForm/PricingForm";
import Directions from "../Directions/Directions";

class PricingPage extends React.Component {
    render() {
        return (
            <div>
                <PricingForm />
                <div>
                    <Directions />
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(PricingPage);