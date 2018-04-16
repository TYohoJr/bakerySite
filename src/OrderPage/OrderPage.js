import React from "react";
import "./OrderPage";
import OrderForm from "../OrderForm/OrderForm.js";
import { connect } from 'react-redux';

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <p>**Submitting an order requires a $20 deposit that will be credited towards your order total upon final payment**</p>
                <OrderForm />
            </div>
        )
    }
}

export default connect((state) => (state))(OrderPage);