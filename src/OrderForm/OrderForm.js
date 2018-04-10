import React from "react";
import "./OrderForm.css";
import axios from "axios";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PayPal from "../PayPal/PayPal";

class OrderForm extends React.Component {
    constructor() {
        super();
        this.onEmailChange = this.onEmailChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.state = {
            text: ""
        }
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
        }).catch((error) => {
            console.log(error)
        })
    }

    onEmailChange(e) {
        this.props.dispatch({
            type: "changeUsername",
            username: e.target.value
        })
    }

    onTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form id="order-form-person">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="John Smith" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="tel" name="number" id="number" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="555-555-5555" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="size">Event Size: </Label>{this.props.usernameReducer.username}
                        <Input type="range" min="1" max="200" name="size" id="size" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address-street" id="address-street" placeholder="street address" />
                        <Input type="text" name="address-city" id="address-city" placeholder="city" />
                        <Input type="text" name="address-state" id="address-state" placeholder="state" />
                        <Input type="text" name="address-zip" id="address-zip" placeholder="zip code" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date Needed</Label>
                        <Input type="date" name="date" id="date" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="size">Event Size</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Additional Comments:</Label>
                        <Input type="textarea" maxLength="300" onChange={this.onTextChange} name="text" id="exampleText" />
                        <small>{this.state.text.length}/300</small>
                    </FormGroup>
                    <Label>Continue to cake info in left form =></Label>
                </Form>
                <Form id="order-form-cake">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="John Smith" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="tel" name="number" id="number" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="555-555-5555" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="size">Event Size: </Label>{this.props.usernameReducer.username}
                        <Input type="range" min="1" max="200" name="size" id="size" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address-street" id="address-street" placeholder="street address" />
                        <Input type="text" name="address-city" id="address-city" placeholder="city" />
                        <Input type="text" name="address-state" id="address-state" placeholder="state" />
                        <Input type="text" name="address-zip" id="address-zip" placeholder="zip code" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date Needed</Label>
                        <Input type="date" name="date" id="date" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="size">Event Size</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Additional Comments:</Label>
                        <Input type="textarea" maxLength="300" onChange={this.onTextChange} name="text" id="exampleText" />
                        <small>{this.state.text.length}/300</small>
                    </FormGroup>
                    <div id="submit-order-btns">
                        <Button onClick={this.createOrder}>Submit Order</Button>
                        <p>Complete PayPal checkout to complete order</p>
                        <PayPal />
                    </div>
                </Form>
            </div>
        )
    }
}

export default connect((state) => (state))(OrderForm);