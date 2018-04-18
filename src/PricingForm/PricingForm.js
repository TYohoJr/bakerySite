import React from "react";
import "./PricingForm.css";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ServingsModal from "../ServingsModal/ServingsModal";
import CakeModal from "../CakeModal/CakeModal";
// import MapModal from "../MapModal/MapModal";

class PricingForm extends React.Component {
    constructor() {
        super();
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
        this.state = {
            newForm: '',
            exampleImage: ''
        }
    }

    calculateTotal() {
        let total;
        let delivery = null;
        let flavor = null;
        let frosting = null;
        let plates = null;
        let cakeSize = this.props.cakeSizeReducer.totalCakeSize
        let cakeDetails = this.props.pricingFormReducer
        if (!cakeSize) {
            this.props.dispatch({
                type: "calculateEstimateTotal",
                estimateTotal: "Please select cake size"
            })
            return;
        }
        if (!cakeDetails.delivery || !cakeDetails.flavor || !cakeDetails.frosting || !cakeDetails.plates) {
            this.props.dispatch({
                type: "calculateEstimateTotal",
                estimateTotal: "Please fill out all fields"
            })
            return;
        }
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
            case "Other":
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
        total = Math.floor((cakeSize * 6) + (flavor * (cakeSize / 8)) + (frosting * (cakeSize / 8)) + delivery + plates)
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

    pickFondant() {
        this.setState({
            newForm: <div>
                <FormGroup>
                    <Label for="flavor">Fondant Type</Label>
                    <Input type="select" name="fondant" id="flavor" onChange={this.pickFrostingDetails}>
                        <option>choose one:</option>
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
    }

    render() {
        return (
            <div>
                <Form id="pricing-form">
                    <FormGroup>
                        <Label className="label-float" for="servings">Total Cake Height</Label>
                        <ServingsModal />
                        <Input disabled type="text" name="servings" id="servings" value={`Total Height: ${this.props.cakeSizeReducer.totalCakeHeight}`} placeholder="Total Cake Size (use calculator above)" />
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
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label className="label-float" for="frosting">Frosting/Fondant</Label>
                        <CakeModal />
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onChange={this.pickFrosting} />{' '}
                                Frosting
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="frosting" onChange={this.pickFondant} />{' '}
                                Fondant
                            </Label>
                        </FormGroup>
                        {this.state.newForm}
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <Label for="delivery">Delivery/Pickup</Label>
                        {/* <MapModal /> */}
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