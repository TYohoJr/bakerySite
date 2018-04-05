import React from "react";
import "./OrderForm.css";
import { Input, Button } from "reactstrap";
import axios from "axios";
import { connect } from 'react-redux';

class OrderForm extends React.Component {
    constructor() {
        super();
        this.changeUserName = this.changeUserName.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder() {
        axios.post("submitOrder", { username: this.props.usernameReducer.username }).then((result) => {
            console.log(result)
            switch (result.data.code) {
                case "23505":
                    alert(`Error: Username already exists`)
                    break;
                default:
                    alert(`Order sucessfully submitted on ${result.headers.date}`)
            }
        })
    }

    changeUserName(e) {
        this.props.dispatch({
            type: "changeUsername",
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input type="text" value={this.props.usernameReducer.username} onChange={this.changeUserName} placeholder="username goes here" />
                <Button onClick={this.createOrder}>Submit Order</Button>
            </div>
        )
    }
}

export default connect((state) => (state))(OrderForm);