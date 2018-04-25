import React from "react";
import "./OrderPage";
import OrderForm from "../OrderForm/OrderForm.js";
import { connect } from 'react-redux';

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <p>**Submitting an order only requires a $20 deposit that will be credited towards your order total upon final payment!!**</p>
                <p>**After your deposit is accepted, you will receive a confirmation call/email to finalize the design**</p>
                <OrderForm />
            </div>
        )
    }
}

export default connect((state) => (state))(OrderPage);