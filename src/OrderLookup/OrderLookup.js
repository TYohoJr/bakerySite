import React from 'react';
import "./OrderLookup.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import axios from "axios";
import { connect } from 'react-redux';

class OrderLookup extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.orderLookup = this.orderLookup.bind(this);
        this.onEmailLookupChange = this.onEmailLookupChange.bind(this);
        this.state = {
            modal: false,
            emailLookup: '',
            orderTable: ''
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    orderLookup() {
        axios.post("/orderLookup", { email: this.state.emailLookup }).then((result) => {
            if (result.data) {
                this.setState({
                    orderTable:
                        <div>
                            <Table id="lookup-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Email</th>
                                        <th>Date Ordered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{result.data.name}</td>
                                        <td>{result.data.address_city}, {result.data.address_state}</td>
                                        <td>{result.data.email}</td>
                                        <td>"Date?"</td>
                                    </tr>
                                    <tr>
                                        <th>Layer 1 (diameter in inches)</th>
                                        <th>Layer 2</th>
                                        <th>Layer 3</th>
                                        <th>Layer 4</th>
                                    </tr>
                                    <tr>
                                        <td>{result.data.layer_1_size}</td>
                                        <td>{result.data.layer_2_size}</td>
                                        <td>{result.data.layer_3_size}</td>
                                        <td>{result.data.layer_4_size}</td>
                                    </tr>
                                    <tr>
                                        <th>Flavor</th>
                                        <th>Frosting/Fondant</th>
                                        <th>Delivery/Pickup</th>
                                        <th>Plate Type</th>
                                    </tr>
                                    <tr>
                                        <td>{result.data.flavor}</td>
                                        <td>{result.data.frosting_fondant}</td>
                                        <td>{result.data.delivery}</td>
                                        <td>{result.data.plates}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>Comments: {result.data.comments}</p>
                        </div>
                })
            } else {
                this.setState({
                    orderTable: <p>No order associated with {this.state.emailLookup}</p>
                })
            }
        })
    }

    onEmailLookupChange(e) {
        let email = e.target.value.toLowerCase();
        this.setState({
            emailLookup: email
        })
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Order Lookup</Button>
                <Modal id="modal-test" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="lookup-modal-parts" toggle={this.toggle}>Order Lookup</ModalHeader>
                    <ModalBody className="lookup-modal-parts">
                        <input type="text" onChange={this.onEmailLookupChange} placeholder="Enter your email" />
                        <Button onClick={this.orderLookup}>Order Lookup</Button>
                        {this.state.orderTable}
                    </ModalBody>
                    <ModalFooter className="lookup-modal-parts">
                        <Button color="secondary" onClick={this.toggle}>Done</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(OrderLookup);