import React from "react";
import "./LayersGuideModal.css";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class LayersGuideModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button id="cake-modal-btn" color="primary" onClick={this.toggle}>Guide</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <img src={require("../images/servings-guide.jpg")} alt="servings guide"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}