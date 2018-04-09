import React from 'react';
import "./ServingsModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

class ServingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.onFirstLayerChange = this.onFirstLayerChange.bind(this);
        this.onSecondLayerChange = this.onSecondLayerChange.bind(this);
        this.onThirdLayerChange = this.onThirdLayerChange.bind(this);
        this.onFourthLayerChange = this.onFourthLayerChange.bind(this);
        this.calculateEstimatePrice = this.calculateEstimatePrice.bind(this);
        this.onEventChange = this.onEventChange.bind(this);
        this.onPartyChange = this.onPartyChange.bind(this);
        this.state = {
            modal: false,
            totalServings: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    calculateEstimatePrice() {
        let total;
        let firstServings;
        let secondServings;
        let thirdServings;
        let fourthServings;
        let layerPrices = this.props.pricingFormReducer;
        switch (layerPrices.eventType) {
            case "party":
                switch (layerPrices.firstLayerPrice) {
                    case 4:
                        firstServings = 4
                        break;
                    case 6:
                        firstServings = 8
                        break;
                    case 8:
                        firstServings = 16
                        break;
                    case 10:
                        firstServings = 26
                        break;
                    case 12:
                        firstServings = 36
                        break;
                    default:
                        firstServings = 0
                }
                switch (layerPrices.secondLayerPrice) {
                    case 4:
                        secondServings = 4
                        break;
                    case 6:
                        secondServings = 8
                        break;
                    case 8:
                        secondServings = 16
                        break;
                    case 10:
                        secondServings = 26
                        break;
                    case 12:
                        secondServings = 36
                        break;
                    default:
                        secondServings = 0
                }
                switch (layerPrices.thirdLayerPrice) {
                    case 4:
                        thirdServings = 4
                        break;
                    case 6:
                        thirdServings = 8
                        break;
                    case 8:
                        thirdServings = 16
                        break;
                    case 10:
                        thirdServings = 26
                        break;
                    case 12:
                        thirdServings = 36
                        break;
                    default:
                        thirdServings = 0
                }
                switch (layerPrices.fourthLayerPrice) {
                    case 4:
                        fourthServings = 4
                        break;
                    case 6:
                        fourthServings = 8
                        break;
                    case 8:
                        fourthServings = 16
                        break;
                    case 10:
                        fourthServings = 26
                        break;
                    case 12:
                        fourthServings = 36
                        break;
                    default:
                        fourthServings = 0
                }
                break;
            case "event":
                switch (layerPrices.firstLayerPrice) {
                    case 4:
                        firstServings = 4
                        break;
                    case 6:
                        firstServings = 12
                        break;
                    case 8:
                        firstServings = 22
                        break;
                    case 10:
                        firstServings = 36
                        break;
                    case 12:
                        firstServings = 56
                        break;
                    default:
                        firstServings = 0
                }
                switch (layerPrices.secondLayerPrice) {
                    case 4:
                        secondServings = 4
                        break;
                    case 6:
                        secondServings = 12
                        break;
                    case 8:
                        secondServings = 22
                        break;
                    case 10:
                        secondServings = 36
                        break;
                    case 12:
                        secondServings = 56
                        break;
                    default:
                        secondServings = 0
                }
                switch (layerPrices.thirdLayerPrice) {
                    case 4:
                        thirdServings = 4
                        break;
                    case 6:
                        thirdServings = 12
                        break;
                    case 8:
                        thirdServings = 22
                        break;
                    case 10:
                        thirdServings = 36
                        break;
                    case 12:
                        thirdServings = 56
                        break;
                    default:
                        thirdServings = 0
                }
                switch (layerPrices.fourthLayerPrice) {
                    case 4:
                        fourthServings = 4
                        break;
                    case 6:
                        fourthServings = 12
                        break;
                    case 8:
                        fourthServings = 22
                        break;
                    case 10:
                        fourthServings = 36
                        break;
                    case 12:
                        fourthServings = 56
                        break;
                    default:
                        fourthServings = 0
                }
                break;
            default:
            alert("You must select an event type!")
        }
        total = firstServings + secondServings + thirdServings + fourthServings;
        console.log(this)
        this.setState({
            totalServings: total
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onFirstLayerChange(e) {
        this.props.dispatch({
            type: "changeFirstLayerPrice",
            firstLayerPrice: Number(e.target.value)
        })
    }

    onSecondLayerChange(e) {
        this.props.dispatch({
            type: "changeSecondLayerPrice",
            secondLayerPrice: Number(e.target.value)
        })
    }

    onThirdLayerChange(e) {
        this.props.dispatch({
            type: "changeThirdLayerPrice",
            thirdLayerPrice: Number(e.target.value)
        })
    }

    onFourthLayerChange(e) {
        this.props.dispatch({
            type: "changeFourthLayerPrice",
            fourthLayerPrice: Number(e.target.value)
        })
    }

    onEventChange() {
        this.props.dispatch({
            type: "eventChange",
            eventType: "event"
        })
    }

    onPartyChange() {
        this.props.dispatch({
            type: "eventChange",
            eventType: "party"
        })
    }

    useNumber() {
        this.props.dispatch({
            type:"",
            
        })
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Help Calculate Servings</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Servings Guide (click to zoom)</ModalHeader>
                    <ModalBody>
                        <img src={require("../images/servings-guide.jpg")} alt="servings guide" />
                        <FormGroup tag="fieldset">
                            <Label for="event">Event/Party</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="event" value="party" onClick={this.onPartyChange} />{' '}
                                    Party
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="event" value="event" onClick={this.onEventChange} />{' '}
                                    Event
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label for="layers">Size of 1st layer (inches)</Label>
                                <Input type="select" name="layer1" id="layers" onChange={this.onFirstLayerChange} multiple>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Size of 2nd layer (inches)</Label>
                                <Input type="select" name="layer2" id="layers" onChange={this.onSecondLayerChange} multiple>
                                    <option>N/A</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Size of 3rd layer (inches)</Label>
                                <Input type="select" name="layer3" id="layers" onChange={this.onThirdLayerChange} multiple>
                                    <option>N/A</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Size of 4th layer (inches)</Label>
                                <Input type="select" name="layer4" id="layers" onChange={this.onFourthLayerChange} multiple>
                                    <option>N/A</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                            </FormGroup>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <div className="total-servings-text">
                            Total Servings:{this.state.totalServings}
                        </div>
                        <Button color="primary" onClick={this.calculateEstimatePrice}>Calculate</Button>{' '}
                        <Button color="danger" onClick={this.useNumber}>Use This Number</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(ServingsModal);