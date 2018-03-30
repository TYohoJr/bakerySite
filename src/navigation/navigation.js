import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import "./navigation.css"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  test() {
    debugger
  }
  render() {
    return (
      <div>
        <div>
          <Navbar color="faded" light expand="md">
            {/* <NavbarBrand>The Cake Lady</NavbarBrand> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons" onClick={this.test}>Home</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons">Pricing</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons">Order</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons">About</Button>
                </NavItem>
                <NavItem className="navbar-navitem">
                  <Button className="navbar-buttons">Contact</Button>
                </NavItem>
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
