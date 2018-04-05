import React from "react";
import "./OrderPage";
import OrderForm from "../OrderForm/OrderForm.js";
import { connect } from 'react-redux';

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <OrderForm />
            </div>
        )
    }
}

export default connect((state) => (state))(OrderPage);