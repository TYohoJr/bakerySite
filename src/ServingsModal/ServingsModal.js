import React from 'react';
import "./ServingsModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

class ServingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.onFirstLayerChange = this.onFirstLayerChange.bind(this);
        this.onSecondLayerChange = this.onSecondLayerChange.bind(this);
        this.onThirdLayerChange = this.onThirdLayerChange.bind(this);
        this.onFourthLayerChange = this.onFourthLayerChange.bind(this);
        this.calculateEstimatePrice = this.calculateEstimatePrice.bind(this);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    calculateEstimatePrice() {
        let totalHeight = 4;
        let layerSizes = this.props.layerSizeReducer;
        if (layerSizes.secondLayerSize) totalHeight = totalHeight + 4
        if (layerSizes.thirdLayerSize) totalHeight = totalHeight + 4
        if (layerSizes.fourthLayerSize) totalHeight = totalHeight + 4
        let total = (layerSizes.firstLayerSize + layerSizes.secondLayerSize + layerSizes.thirdLayerSize + layerSizes.fourthLayerSize)
        this.props.dispatch({
            type: "totalCakeSize",
            totalCakeSize: total,
            totalCakeHeight:totalHeight
        })
        this.toggle()
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onFirstLayerChange(e) {
        this.props.dispatch({
            type: "changeFirstLayerSize",
            firstLayerSize: Number(e.target.value)
        })
    }

    onSecondLayerChange(e) {
        this.props.dispatch({
            type: "changeSecondLayerSize",
            secondLayerSize: Number(e.target.value)
        })
    }

    onThirdLayerChange(e) {
        this.props.dispatch({
            type: "changeThirdLayerSize",
            thirdLayerSize: Number(e.target.value)
        })
    }

    onFourthLayerChange(e) {
        this.props.dispatch({
            type: "changeFourthLayerSize",
            fourthLayerSize: Number(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <Button id="size-calculator-btn" color="primary" onClick={this.toggle}>Cake Size Calculator</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Servings Guide<br/>(Each layer is 4 inches tall)</ModalHeader>
                    <ModalBody>
                        <img src={require("../images/servings-guide.jpg")} alt="servings guide" />
                        <FormGroup tag="fieldset">
                            <FormGroup>
                                <Label for="layers">Diameter of 1st layer (inches)</Label>
                                <Input required type="select" name="layer1" id="layers" onChange={this.onFirstLayerChange} multiple>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Diameter of 2nd layer (inches)</Label>
                                <Input type="select" name="layer2" id="layers" onChange={this.onSecondLayerChange} multiple>
                                    <option>N/A</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Diameter of 3rd layer (inches)</Label>
                                <Input type="select" name="layer3" id="layers" onChange={this.onThirdLayerChange} multiple>
                                    <option>N/A</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Input>
                                <Label for="layers">Diameter of 4th layer (inches)</Label>
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
                        <Button color="primary" onClick={this.calculateEstimatePrice}>Calculate</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(ServingsModal);