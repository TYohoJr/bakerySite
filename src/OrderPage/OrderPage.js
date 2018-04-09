import React from "react";
import "./OrderPage";
import OrderForm from "../OrderForm/OrderForm.js";
import { connect } from 'react-redux';
import PayPal from "../PayPal/PayPal";

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <OrderForm />
                <PayPal/>
            </div>
        )
    }
}

export default connect((state) => (state))(OrderPage);