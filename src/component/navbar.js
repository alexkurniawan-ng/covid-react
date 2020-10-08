import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem, Nav } from 'reactstrap';

class NavbarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            collapsed: false
        }
    }

    btCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() { 
        return ( 
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand className="mr-auto">Covid19</NavbarBrand>
                    <NavbarToggler onClick={this.btCollapse} className="mr-2"></NavbarToggler>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem>
                                <Link to="/province" className="nav-link">Province</Link>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem>
                                <Link to="/countries" className="nav-link">Countries</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default NavbarComp;