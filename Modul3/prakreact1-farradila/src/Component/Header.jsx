import React, { useState } from 'react';
import {  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,DropdownMenu, DropdownItem, Form } from 'reactstrap';

    const Example = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
      
        return (
          <div>
            <Navbar color="dark" light expand="lg">
              <NavbarBrand href="/">Navbar</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto">
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Profile</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href="/">Profile</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>Option</DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

    export default Example;