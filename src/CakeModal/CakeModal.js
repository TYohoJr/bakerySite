import React from "react";
import "./CakeModal.css";
import { Button, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

export default class CakeModal extends React.Component {
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
                <Button color="primary" onClick={this.toggle}>Examples</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <Table id="cake-modal-table">
                            <thead>
                                <tr>
                                    <th>Frosting Basic</th>
                                    <th>Frosting Wedding</th>
                                    {/* <th>Fondant Simple</th>
                                    <th>Fondant 3D/Complex</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="cake-modal-img" src={require("../cake-images/chocolate-frosting.jpg")} alt="example cake" />
                                    </td>
                                    <td>
                                        <img className="cake-modal-img" src={require("../cake-images-top/wedding1.jpg")} alt="example cake" />
                                    </td>
                                    {/* <td>
                                        <img className="cake-modal-img" src={require("../cake-images-top/flowers.jpg")} alt="example cake" />
                                    </td>
                                    <td>
                                        <img className="cake-modal-img" src={require("../cake-images-top/jedi.jpg")} alt="example cake" />
                                    </td> */}
                                </tr>
                                <tr>
                                    <th>Fondant Simple</th>
                                    <th>Fondant 3D/Complex</th>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="cake-modal-img" src={require("../cake-images-top/flowers.jpg")} alt="example cake" />
                                    </td>
                                    <td>
                                        <img className="cake-modal-img" src={require("../cake-images-top/jedi.jpg")} alt="example cake" />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}