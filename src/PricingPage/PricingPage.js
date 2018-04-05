import React from "react";
import "./PricingPage.css";
import { connect } from "react-redux";

class PricingPage extends React.Component {
    render() {
        return (
            <div>
                Pricing Page
            </div>
        )
    }
}

export default connect((state) => (state))(PricingPage);