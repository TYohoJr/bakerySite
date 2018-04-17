import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import "./Navigation.css";
import { connect } from 'react-redux';
import LandingPage from "../LandingPage/LandingPage";
import PricingPage from "../PricingPage/PricingPage";
import OrderPage from '../OrderPage/OrderPage';
import ExamplesPage from "../ExamplesPage/ExamplesPage";
import DirectionsPage from "../DirectionsPage/DirectionsPage";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setHomePage = this.setHomePage.bind(this);
    this.setPricingPage = this.setPricingPage.bind(this);
    this.setOrderPage = this.setOrderPage.bind(this);
    this.setExamplesPage = this.setExamplesPage.bind(this);
    this.setDirectionsPage = this.setDirectionsPage.bind(this);
  }

  toggle() {
    this.props.dispatch({
      type: "navbarToggle",
      isOpen: !this.props.navbarReducer.isOpen
    })
  }

  setHomePage() {
    this.props.dispatch({
      type: "setPage",
      currentPage: <LandingPage />
    })
  }

  setPricingPage() {
    this.props.dispatch({
      type: "setPage",
      currentPage: <PricingPage />
    })
  }

  setOrderPage() {
    this.props.dispatch({
      type: "setPage",
      currentPage: <OrderPage />
    })
  }

  setExamplesPage() {
    this.props.dispatch({
      type: "setPage",
      currentPage: <ExamplesPage />
    })
  }

  setDirectionsPage() {
    this.props.dispatch({
      type: "setPage",
      currentPage: <DirectionsPage />
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.props.navbarReducer.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setHomePage}>Home</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setExamplesPage}>Gallery</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setPricingPage}>Pricing</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setOrderPage}>Order</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setDirectionsPage}>Directions</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default connect((state) => (state))(Navigation);