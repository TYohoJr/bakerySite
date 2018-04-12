import React from 'react';
import "./MapModal.css";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Directions from '../Directions/Directions';

export default class MapModal extends React.Component {
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
      <div id="map-modal-div" className="test">
        <Button id="map-modal-btn" color="primary" onClick={this.toggle}>Map</Button>
        <Modal id="map-modal-content" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Directions />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
