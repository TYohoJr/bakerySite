import React from "react";
import "./PricingForm.css";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ServingsModal from "../ServingsModal/ServingsModal";

class PricingForm extends React.Component {
    constructor() {
        super();
        this.onEmailChange = this.onEmailChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.state = {
            text:""
        }
    }

    calculateTotal() {
    
    }

    onEmailChange(e) {
        this.props.dispatch({
            type: "changeUsername",
            username: e.target.value
        })
    }

    onTextChange(e) {
        this.setState({
            text:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="servings">Total Servings</Label> <ServingsModal/>
                        <Input type="number" name="servings" id="servings" value={this.props.usernameReducer.username} onChange={this.onEmailChange} placeholder="Total Servings Needed" />
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
                        <Input type="textarea" maxlength="300" onChange={this.onTextChange}name="text" id="exampleText" />
                        <small>{this.state.text.length}/300</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <Button onClick={this.createOrder}>Submit Order</Button>
            </div>
        )
    }
}

export default connect((state) => (state))(PricingForm);