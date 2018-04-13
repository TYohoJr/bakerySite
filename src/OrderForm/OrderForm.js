import React from "react";
import "./OrderForm.css";
import axios from "axios";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PayPal from "../PayPal/PayPal";
import CakeModal from "../CakeModal/CakeModal";
import MapModal from "../MapModal/MapModal";
import LayersGuideModal from "../LayersGuideModal/LayersGuideModal";

class OrderForm extends React.Component {
    constructor() {
        super();
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onAddressCityChange = this.onAddressCityChange.bind(this);
        this.onAddressStateChange = this.onAddressStateChange.bind(this);
        this.onAddressStreetChange = this.onAddressStreetChange.bind(this);
        this.onAddressZipChange = this.onAddressZipChange.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onDateNeededChange = this.onDateNeededChange.bind(this);
        this.onLayerOneSizeChange = this.onLayerOneSizeChange.bind(this);
        this.onLayerTwoSizeChange = this.onLayerTwoSizeChange.bind(this);
        this.onLayerThreeSizeChange = this.onLayerThreeSizeChange.bind(this);
        this.onLayerFourSizeChange = this.onLayerFourSizeChange.bind(this);
        this.onFlavorChange = this.onFlavorChange.bind(this);
        this.onFrostingChange = this.onFrostingChange.bind(this);
        this.onFondantChange = this.onFondantChange.bind(this);
        this.onFrostingFondantChange = this.onFrostingFondantChange.bind(this);
        this.onDeliveryChange = this.onDeliveryChange.bind(this);
        this.onPlatesChange = this.onPlatesChange.bind(this);
        this.state = {
            text: "",
            newForm: '',
        }
    }

    createOrder() {
        axios.post("/createOrder", { order: this.props.orderCakeReducer, info: this.props.orderFormReducer }).then((result) => {
            alert(result.data.message);
        }).catch((error) => {
            console.log(error)
        })
    }

    submitOrder() {
        axios.post("/submitOrder", { username: this.props.orderFormReducer.username }).then((result) => {
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

    onUserNameChange(e) {
        this.props.dispatch({
            type: "changeUsername",
            username: e.target.value
        })
    }

    onAddressCityChange(e) {
        this.props.dispatch({
            type: "changeAddressCity",
            addressCity: e.target.value
        })
    }

    onAddressStreetChange(e) {
        this.props.dispatch({
            type: "changeAddressStreet",
            addressStreet: e.target.value
        })
    }

    onAddressStateChange(e) {
        this.props.dispatch({
            type: "changeAddressState",
            addressState: e.target.value
        })
    }

    onAddressZipChange(e) {
        this.props.dispatch({
            type: "changeAddressZip",
            addressZip: e.target.value
        })
    }

    onTextChange(e) {
        this.setState({
            text: e.target.value
        })
        this.props.dispatch({
            type: "changeText",
            text: e.target.value
        })
    }

    onEmailChange(e) {
        e.target.value = e.target.value.toLowerCase();
        this.props.dispatch({
            type: "changeEmail",
            email: e.target.value
        })
    }

    onNumberChange(e) {
        this.props.dispatch({
            type: "changeNumber",
            number: e.target.value
        })
    }

    onDateNeededChange(e) {
        this.props.dispatch({
            type: "changeDateNeeded",
            dateNeeded: e.target.value
        })
    }

    onLayerOneSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerOneSize",
            layerOneSize: e.target.value
        })
    }

    onLayerTwoSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerTwoSize",
            layerTwoSize: e.target.value
        })
    }

    onLayerThreeSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerThreeSize",
            layerThreeSize: e.target.value
        })
    }

    onLayerFourSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerFourSize",
            layerFourSize: e.target.value
        })
    }

    onFlavorChange(e) {
        this.props.dispatch({
            type: "changeFlavor",
            flavor: e.target.value
        })
    }

    onFrostingChange() {
        this.setState({
            newForm: <div>
                <FormGroup>
                    <Label for="flavor">Frosting Type</Label>
                    <Input type="select" name="frosting" id="flavor" onChange={this.onFrostingFondantChange}>
                        <option>choose one:</option>
                        <option>Chocolate</option>
                        <option>Lemon</option>
                        <option>Strawberry</option>
                        <option>Buttercream</option>
                    </Input>
                </FormGroup>
            </div>
        })
    }

    onFondantChange() {
        this.setState({
            newForm: <div>
                <FormGroup>
                    <Label for="flavor">Fondant Type</Label>
                    <Input type="select" name="fondant" id="flavor" onChange={this.onFrostingFondantChange}>
                        <option>choose one:</option>
                        <option>Simple</option>
                        <option>3D/Complex</option>
                    </Input>
                </FormGroup>
            </div>
        })
    }

    onFrostingFondantChange(e) {
        this.props.dispatch({
            type: "changeFrostingFondant",
            frostingFondant: e.target.value
        })
    }

    onDeliveryChange(e) {
        this.props.dispatch({
            type: "changeDelivery",
            delivery: e.target.value
        })
    }

    onPlatesChange(e) {
        this.props.dispatch({
            type: "changePlates",
            plates: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form id="order-form-person">
                    <h2 className="order-header">Your Info</h2>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" onChange={this.onUserNameChange} placeholder="John Smith" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="tel" name="number" id="number" onChange={this.onNumberChange} placeholder="555-555-5555" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address-street" placeholder="street address" onChange={this.onAddressStreetChange} />
                        <Input type="text" name="address-city" placeholder="city" onChange={this.onAddressCityChange} />
                        <Input type="text" name="address-state" placeholder="state" onChange={this.onAddressStateChange} />
                        <Input type="text" name="address-zip" placeholder="zip code" onChange={this.onAddressZipChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date Needed</Label>
                        <Input type="date" name="date" id="date" onChange={this.onDateNeededChange} placeholder="example@email.com" />
                    </FormGroup>
                    <Label>Continue to cake info form =></Label>
                </Form>
                <Form id="order-form-cake">
                    <h2 className="order-header">Cake Info</h2>
                    <h5 className="label-float">Layer Sizes:</h5>
                    <LayersGuideModal />
                    <FormGroup>
                        <Label for="layerOneSize">Layer 1 Size</Label>
                        <Input type="select" name="layerOneSize" onChange={this.onLayerOneSizeChange}>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="layerTwoSize">Layer 2 Size</Label>
                        <Input type="select" name="layerTwoSize" onChange={this.onLayerTwoSizeChange}>
                            <option>N/A</option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="layerThreeSize">Layer 3 Size</Label>
                        <Input type="select" name="layerThreeSize" onChange={this.onLayerThreeSizeChange}>
                            <option>N/A</option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="layerFourSize">Layer 4 Size</Label>
                        <Input type="select" name="layerFourSize" onChange={this.onLayerFourSizeChange}>
                            <option>N/A</option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="flavor">Flavor</Label>
                        <Input type="select" name="flavor" onChange={this.onFlavorChange}>
                            <option>Select:</option>
                            <option>Yellow</option>
                            <option>Chocolate</option>
                            <option>Lemon</option>
                            <option>Strawberry</option>
                            <option>Red Velvet</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label className="label-float" for="frosting">Frosting/Fondant</Label>
                        <CakeModal />
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onChange={this.onFrostingChange} />{' '}
                                Frosting
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onChange={this.onFondantChange} />{' '}
                                Fondant
                            </Label>
                        </FormGroup>
                        {this.state.newForm}
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label className="label-float" for="delivery">Delivery/Pickup</Label>
                        <MapModal />
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="delivery" value="delivery" onClick={this.onDeliveryChange} />{' '}
                                Delivery
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="delivery" value="pickup" onClick={this.onDeliveryChange} />{' '}
                                Pickup
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label for="plates">Carboard or Plastic Cake Plates</Label>
                        <p><small>Carboard is free. Plastic costs a deposit that is refunded upon return of the plates</small></p>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="cardboard" onClick={this.onPlatesChange} />{' '}
                                Cardboard
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="plastic" onClick={this.onPlatesChange} />{' '}
                                Plastic ($10 deposit)
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Additional Comments:</Label>
                        <p><small>Tell me more details about the cake you want!</small></p>
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