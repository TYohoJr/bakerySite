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
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setHomePage = this.setHomePage.bind(this);
    this.setPricingPage = this.setPricingPage.bind(this);
    this.setOrderPage = this.setOrderPage.bind(this);
    this.setAboutPage = this.setAboutPage.bind(this);
    this.setContactPage = this.setContactPage.bind(this);
  }

  toggle() {
    this.props.dispatch({
      type: "navbarToggle",
      isOpen: !this.props.navbarReducer.isOpen
    })
  }

  setHomePage() {
    this.props.dispatch({
      type: "setLandingPage",
      currentPage: <LandingPage />
    })
  }

  setPricingPage() {
    this.props.dispatch({
      type: "setPricingPage",
      currentPage: <PricingPage />
    })
  }

  setOrderPage() {
    this.props.dispatch({
      type: "setOrderPage",
      currentPage: <OrderPage />
    })
  }

  setAboutPage() {
    this.props.dispatch({
      type: "setAboutPage",
      currentPage: <AboutPage />
    })
  }

  setContactPage() {
    this.props.dispatch({
      type: "setContactPage",
      currentPage: <ContactPage />
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar color="faded" light expand="md">
            {/* <NavbarBrand>The Cake Lady</NavbarBrand> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.props.navbarReducer.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setHomePage}>Home</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setPricingPage}>Pricing</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setOrderPage}>Order</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setAboutPage}>About</Button>
                </NavItem>
                {/* <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.setContactPage}>Contact</Button>
                </NavItem> */}
                {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default connect((state) => (state))(Navigation);