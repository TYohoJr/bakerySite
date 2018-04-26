import React from "react";
import "./PricingForm.css";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ServingsModal from "../ServingsModal/ServingsModal";
import CakeModal from "../CakeModal/CakeModal";

class PricingForm extends React.Component {
    constructor() {
        super();
        // Bind ALL the functions!
        this.onEmailChange = this.onEmailChange.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.pickFrosting = this.pickFrosting.bind(this);
        this.pickFondant = this.pickFondant.bind(this);
        this.pickFrostingDetails = this.pickFrostingDetails.bind(this);
        this.pickDelivery = this.pickDelivery.bind(this);
        this.pickPickup = this.pickPickup.bind(this);
        this.pickFlavor = this.pickFlavor.bind(this);
        this.pickCardboard = this.pickCardboard.bind(this);
        this.pickPlastic = this.pickPlastic.bind(this);
        this.resetTotal = this.resetTotal.bind(this);
        this.pickNoSide = this.pickNoSide.bind(this);
        this.pickCookie = this.pickCookie.bind(this);
        this.pickCupcake = this.pickCupcake.bind(this);
        this.pickCookieStyle = this.pickCookieStyle.bind(this);
        this.pickCookieAmount = this.pickCookieAmount.bind(this);
        this.pickCupcakeStyle = this.pickCupcakeStyle.bind(this);
        this.pickCupcakeAmount = this.pickCupcakeAmount.bind(this);
        this.state = {
            newForm: '',
            exampleImage: '',
            newSideForm: '',
            newSideFormAmount: ''
        }
    }

    calculateTotal() {
        // Set initial state of all variables used in the calculation
        let total;
        let cookie = null;
        let cupcake = null;
        let delivery = null;
        let flavor = null;
        let frosting = null;
        let plates = null;
        let cakeSize = this.props.cakeSizeReducer.totalCakeHeight
        let cakeDetails = this.props.pricingFormReducer
        if (typeof cakeSize !== "number") {
            this.props.dispatch({
                type: "calculateEstimateTotal",
                estimateTotal: "Please select cake size"
            })
            return;
        }
        // Make sure all required fields are filled out
        if (!cakeDetails.delivery || !cakeDetails.flavor || !cakeDetails.frosting || !cakeDetails.plates) {
            this.props.dispatch({
                type: "calculateEstimateTotal",
                estimateTotal: "Please fill out all fields"
            })
            return;
        }
        // All the switch statements to determine price based on value
        switch (cakeDetails.delivery) {
            case "delivery":
                delivery = 20
                break;
            case "pickup":
                delivery = 0
                break;
            default:
                delivery = 0
        }
        switch (cakeDetails.flavor) {
            case "Yellow":
                flavor = 10
                break;
            case "Chocolate":
                flavor = 10
                break;
            case "Lemon":
                flavor = 10
                break;
            case "Strawberry":
                flavor = 10
                break;
            case "Red Velvet":
                flavor = 10
                break;
            case "Other/Multiple":
                flavor = 10
                break;
            default:
                flavor = 0
        }
        switch (cakeDetails.frosting) {
            case "Buttercream":
                frosting = 10
                break;
            case "Chocolate":
                frosting = 10
                break;
            case "Lemon":
                frosting = 10
                break;
            case "Strawberry":
                frosting = 10
                break;
            case "Other/Multiple":
                frosting = 10
                break;
            case "Simple":
                frosting = 25
                break;
            case "3D/Complex":
                frosting = 50
                break;
            default:
                frosting = 0
        }
        switch (cakeDetails.plates) {
            case "cardboard":
                plates = 0
                break;
            case "plastic":
                plates = 10
                break;
            default:
                plates = 0
        }
        switch (cakeDetails.cookieAmount) {
            case "1/2 Dozen":
                cookie = 7.5
                break;
            case "1 Dozen":
                cookie = 15
                break;
            case "2 Dozen":
                cookie = 30
                break;
            default:
                cookie = 0
        }
        switch (cakeDetails.cupcakeAmount) {
            case "1/2 Dozen":
                cupcake = 20
                break;
            case "1 Dozen":
                cupcake = 40
                break;
            case "2 Dozen":
                cupcake = 80
                break;
            default:
                cupcake = 0
        }
        // Use new totals to calculate estimate
        total = Math.floor((cakeSize * 6) + (flavor * (cakeSize / 8)) + (frosting * (cakeSize / 8)) + delivery + plates + cookie + cupcake)
        this.props.dispatch({
            type: "calculateEstimateTotal",
            estimateTotal: total
        })
    }

    onEmailChange(e) {
        this.props.dispatch({
            type: "changeUsername",
            username: e.target.value
        })
    }

    pickFrosting() {
        this.setState({
            newForm: <div>
                <FormGroup>
                    <Label for="flavor">Frosting Type</Label>
                    <Input type="select" name="frosting" id="flavor" onChange={this.pickFrostingDetails}>
                        <option>Select:</option>
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

    pickFondant() {
        this.setState({
            newForm: <div>
                <FormGroup>
                    <Label for="flavor">Fondant Type</Label>
                    <Input type="select" name="fondant" id="flavor" onChange={this.pickFrostingDetails}>
                        <option>Select:</option>
                        <option>Simple</option>
                        <option>3D/Complex</option>
                    </Input>
                </FormGroup>
            </div>
        })
    }

    pickFrostingDetails(e) {
        this.props.dispatch({
            type: 'setFrosting',
            frosting: e.target.value
        })
    }

    pickDelivery() {
        this.props.dispatch({
            type: 'setDelivery',
            delivery: "delivery"
        })
    }

    pickPickup() {
        this.props.dispatch({
            type: 'setDelivery',
            delivery: "pickup"
        })
    }

    pickFlavor(e) {
        this.props.dispatch({
            type: 'setFlavor',
            flavor: e.target.value
        })
    }

    pickCardboard() {
        this.props.dispatch({
            type: 'setPlates',
            plates: "cardboard"
        })
    }

    pickPlastic() {
        this.props.dispatch({
            type: 'setPlates',
            plates: "plastic"
        })
    }

    resetTotal() {
        this.props.dispatch({
            type: 'resetTotal'
        })
        this.setState({
            newForm: '',
            newSideForm: '',
            newSideFormAmount: ''
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

    pickNoSide() {
        this.props.dispatch({
            type: 'setNoSide'
        })
        this.setState({
            newSideForm: '',
            newSideFormAmount: ''
        })
    }

    pickCookieStyle(e) {
        this.props.dispatch({
            type: 'setCookieStyle',
            cookieStyle: e.target.value
        })
    }

    pickCookieAmount(e) {
        this.props.dispatch({
            type: 'setCookieAmount',
            cookieAmount: e.target.value
        })
    }

    pickCupcakeStyle(e) {
        this.props.dispatch({
            type: 'setCupcakeStyle',
            cupcakeStyle: e.target.value
        })
    }

    pickCupcakeAmount(e) {
        this.props.dispatch({
            type: 'setCupcakeAmount',
            cupcakeAmount: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form id="pricing-form">
                    <FormGroup>
                        <Label className="label-float" for="servings">Total Cake Height (inches)</Label>
                        <ServingsModal />
                        <Input disabled type="text" name="servings" id="servings" value={`Total Height (inches): ${this.props.cakeSizeReducer.totalCakeHeight}`} placeholder="Total Cake Size (use calculator above)" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="flavor">Flavor</Label>
                        <Input type="select" name="flavor" id="flavor" onChange={this.pickFlavor}>
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
                                <Input type="radio" name="frosting" onClick={this.pickFrosting} />{' '}
                                Frosting
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onClick={this.pickFondant} />{' '}
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
                                <Input type="radio" name="side" onClick={this.pickCupcake} />{' '}
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
                                <Input type="radio" name="delivery" value="delivery" onClick={this.pickDelivery} />{' '}
                                Delivery
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="delivery" value="pickup" onClick={this.pickPickup} />{' '}
                                Pickup
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label for="plates">Carboard or Plastic Cake Plates</Label>
                        <p><small>Carboard is free. Plastic costs a deposit that is refunded upon return of the plates</small></p>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="cardboard" onClick={this.pickCardboard} />{' '}
                                Cardboard
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="plates" value="plastic" onClick={this.pickPlastic} />{' '}
                                Plastic ($10 deposit)
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <Button id="estimate-btn" className="submit-btn" onClick={this.calculateTotal}>Estimate Total</Button>
                    <Button className="reset-btn" onClick={this.resetTotal} id="pricing-reset-btn" type="reset">Reset</Button>
                    <p className="label-float">Your estimate is: $<b>{this.props.calculateEstimateReducer.estimateTotal}</b></p>
                </Form>
            </div>
        )
    }
}

export default connect((state) => (state))(PricingForm);