import React from "react";
import "./OrderForm.css";
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PayPal from "../PayPal/PayPal";
import CakeModal from "../CakeModal/CakeModal";
// import MapModal from "../MapModal/MapModal";
import LayersGuideModal from "../LayersGuideModal/LayersGuideModal";
import axios from "axios";

class OrderForm extends React.Component {
    constructor() {
        super();
        // Bind ALL the functions!!!
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onAddressCityChange = this.onAddressCityChange.bind(this);
        this.onAddressStateChange = this.onAddressStateChange.bind(this);
        this.onAddressStreetChange = this.onAddressStreetChange.bind(this);
        this.onAddressZipChange = this.onAddressZipChange.bind(this);
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
        this.verifyOrder = this.verifyOrder.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.pickCookie = this.pickCookie.bind(this);
        this.pickCupcake = this.pickCupcake.bind(this);
        this.pickNoSide = this.pickNoSide.bind(this);
        this.pickCookieStyle = this.pickCookieStyle.bind(this);
        this.pickCookieAmount = this.pickCookieAmount.bind(this);
        this.pickCupcakeStyle = this.pickCupcakeStyle.bind(this);
        this.pickCupcakeAmount = this.pickCupcakeAmount.bind(this);
        this.state = {
            text: "",
            newForm: '',
            // Inital state of checkout button to verify order before proceeding
            checkoutBtn: <div>
                <Button id="submit-btn-green" className="submit-btn" onClick={this.verifyOrder}>Submit Order</Button>
            </div>,
            newSideForm: '',
            newSideFormAmount: ''
        }
    }

    verifyOrder() {
        // Make data structure more understandable
        let orderInfo = this.props.orderFormReducer;
        let orderDetails = this.props.orderCakeReducer;
        // Change the first layer from a string to a number for computation
        orderDetails.layerOneSize = Number(orderDetails.layerOneSize);
        // Check to see if the sizes of the layers are in the correct order
        switch (true) {
            case (orderDetails.layerOneSize < orderDetails.layerTwoSize):
                return alert("Please arrange the layers largest to smallest");
            case (orderDetails.layerOneSize < orderDetails.layerThreeSize):
                return alert("Please arrange the layers largest to smallest");
            case (orderDetails.layerOneSize < orderDetails.layerFourSize):
                return alert("Please arrange the layers largest to smallest");
            case (orderDetails.layerTwoSize < orderDetails.layerThreeSize):
                return alert("Please arrange the layers largest to smallest");
            case (orderDetails.layerTwoSize < orderDetails.layerFourSize):
                return alert("Please arrange the layers largest to smallest");
            case (orderDetails.layerThreeSize < orderDetails.layerFourSize):
                return alert("Please arrange the layers largest to smallest");
            default:
                break;
        }
        // Check if all required fields are populated
        if (orderInfo.email && orderInfo.username && orderInfo.addressCity && orderInfo.addressState && orderInfo.addressStreet && orderInfo.addressZip && orderInfo.number && orderInfo.dateNeeded && orderInfo.contact && orderDetails.flavor && orderDetails.frostingFondant && orderDetails.delivery && orderDetails.plates) {
            axios.post("/checkDuplicate", { email: this.props.orderFormReducer.email }).then((result) => {
                if (result.data.duplicateCheck) {
                    alert(result.data.message);
                } else {
                    console.log(result)
                    // If verify is successful change button to the payapl checkout button
                    this.setState({
                        checkoutBtn: <div>
                            <h3>Complete PayPal checkout to complete order</h3>
                            <PayPal />
                        </div>
                    })
                }
            })
        } else {
            alert("Please fill out all fields");
        }
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
        // Change email to lowercase to simplify order lookup in the future
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
            layerOneSize: Number(e.target.value)
        })
    }

    onLayerTwoSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerTwoSize",
            layerTwoSize: Number(e.target.value)
        })
    }

    onLayerThreeSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerThreeSize",
            layerThreeSize: Number(e.target.value)
        })
    }

    onLayerFourSizeChange(e) {
        this.props.dispatch({
            type: "changeLayerFourSize",
            layerFourSize: Number(e.target.value)
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
                        <option>Other/Multiple</option>
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

    onContactChange(e) {
        this.props.dispatch({
            type: "changeContact",
            contact: e.target.value
        })
    }

    pickCookie() {
        this.setState({
            newSideForm: <div>
                <FormGroup>
                    <Label for="flavor">Cookies Style</Label>
                    <Input type="select" name="side" id="side" onChange={this.pickCookieStyle}>
                        <option>Select:</option>
                        <option>4 - Ice Cream</option>
                        <option>5 - Emoji</option>
                        <option>6 - Carrots</option>
                        <option>10 - Christmas</option>
                        <option>11 - Snowmen</option>
                        <option>12 - Christmas 2</option>
                        <option>16 - Graduation</option>
                        <option>17 - Pinwheel</option>
                        <option>Other/Multiple</option>
                    </Input>
                </FormGroup>
            </div>,
            newSideFormAmount: <div>
                <FormGroup>
                    <Label for="flavor">Amount needed</Label>
                    <Input type="select" name="side" id="side" onChange={this.pickCookieAmount}>
                        <option>Select:</option>
                        <option>1/2 Dozen</option>
                        <option>1 Dozen</option>
                        <option>2 Dozen</option>
                    </Input>
                </FormGroup>
            </div>
        })
    }

    pickCupcake() {
        this.setState({
            newSideForm: <div>
                <FormGroup>
                    <Label for="flavor">Cupcakes Style</Label>
                    <Input type="select" name="side" id="side" onChange={this.pickCupcakeStyle}>
                        <option>Select:</option>
                        <option>1 - Bouquet</option>
                        <option>2 - Event</option>
                        <option>3 - Fancy</option>
                        <option>8 - Garden</option>
                        <option>13 - Hearts</option>
                        <option>14 - Frosting</option>
                        <option>15 - Oreo</option>
                        <option>Other/Multiple</option>
                    </Input>
                </FormGroup>
            </div>,
            newSideFormAmount: <div>
                <FormGroup>
                    <Label for="flavor">Amount needed</Label>
                    <Input type="select" name="side" id="side" onChange={this.pickCupcakeAmount}>
                        <option>Select:</option>
                        <option>1/2 Dozen</option>
                        <option>1 Dozen</option>
                        <option>2 Dozen</option>
                    </Input>
                </FormGroup>
            </div>
        })
    }

    pickCookieStyle(e) {
        this.props.dispatch({
            type: 'changeCookieStyle',
            cookieStyle: e.target.value
        })
    }

    pickCookieAmount(e) {
        this.props.dispatch({
            type: 'changeCookieAmount',
            cookieAmount: e.target.value
        })
    }

    pickCupcakeStyle(e) {
        this.props.dispatch({
            type: 'changeCupcakeStyle',
            cupcakeStyle: e.target.value
        })
    }

    pickCupcakeAmount(e) {
        this.props.dispatch({
            type: 'changeCupcakeAmount',
            cupcakeAmount: e.target.value
        })
    }

    pickNoSide() {
        this.props.dispatch({
            type: 'changeNoSide'
        })
        this.setState({
            newSideForm: '',
            newSideFormAmount: ''
        })
    }

    render() {
        return (
            <div>
                {/* Info Details */}
                <Form id="order-form-person">
                    <h2 className="order-header">Your Info</h2>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" maxLength="30" onChange={this.onUserNameChange} placeholder="John Smith" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" maxLength="30" onChange={this.onEmailChange} placeholder="example@email.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="number" name="number" onChange={this.onNumberChange} placeholder="555-555-5555" />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label for="contact">Contact Preference</Label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="contact" value="email" onClick={this.onContactChange} />{' '}
                                Email
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="contact" value="phone" onClick={this.onContactChange} />{' '}
                                Phone
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address-street" maxLength="50" placeholder="street address" onChange={this.onAddressStreetChange} />
                        <Input type="text" name="address-city" maxLength="30" placeholder="city" onChange={this.onAddressCityChange} />
                        <Input type="text" name="address-state" maxLength="2" placeholder="state" onChange={this.onAddressStateChange} />
                        <Input type="text" name="address-zip" maxLength="5" placeholder="zip code" onChange={this.onAddressZipChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date Needed</Label>
                        <Input type="date" name="date" onChange={this.onDateNeededChange} placeholder="example@email.com" />
                    </FormGroup>
                    <Label>Continue to cake info form =></Label>
                </Form>
                {/* Cake Details */}
                <Form id="order-form-cake">
                    <h2 className="order-header">Cake Info</h2>
                    <h5 className="label-float">Layer Sizes:</h5>
                    <LayersGuideModal />
                    <FormGroup>
                        <Label for="layerOneSize">Layer 1 Size <b>Largest Layer</b></Label>
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
                            <option>Other/Multiple</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label className="label-float" for="frosting">Frosting/Fondant</Label>
                        <CakeModal />
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onClick={this.onFrostingChange} />{' '}
                                Frosting
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onClick={this.onFondantChange} />{' '}
                                Fondant
                            </Label>
                        </FormGroup>
                        {this.state.newForm}
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <h5>Add Cookies or Cupcakes to your cake order!</h5>
                        <Label for="side">Cookies & Cupcakes</Label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="side" onClick={this.pickNoSide} />{' '}
                                None
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="side" onClick={this.pickCookie} />{' '}
                                Cookies
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="side" onChange={this.pickCupcake} />{' '}
                                Cupcakes
                            </Label>
                        </FormGroup>
                        {this.state.newSideForm}
                        {this.state.newSideFormAmount}
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label for="delivery">Delivery/Pickup</Label>
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
                        <Label for="plates">Cardboard or Plastic Cake Plates</Label>
                        <p><small>Carboard is free. Plastic costs $10 that is refunded upon return of the plates</small></p>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="cardboard" onClick={this.onPlatesChange} />{' '}
                                Cardboard
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="plastic" onClick={this.onPlatesChange} />{' '}
                                Plastic
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Additional Comments:</Label>
                        <p><small>Tell me more details about the cake you want! Theme, colors etc.<br />Please also explain all "Other/Multiple" choices</small></p>
                        <Input type="textarea" maxLength="500" onChange={this.onTextChange} name="text" id="exampleText" />
                        <small>{this.state.text.length}/500</small>
                    </FormGroup>
                    <div id="submit-order-btns">
                        {this.state.checkoutBtn}
                    </div>
                </Form>
            </div>
        )
    }
}

export default connect((state) => (state))(OrderForm);