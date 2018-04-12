import React from "react";
import "./PricingPage.css";
import { connect } from "react-redux";
import PricingForm from "../PricingForm/PricingForm";

class PricingPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <PricingForm />
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(PricingPage);