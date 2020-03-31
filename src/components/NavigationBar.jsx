import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar,NavDropdown, NavLink } from 'react-bootstrap';

 export const NavigationBar = (props) => {
    return (
    	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand href="/">Website</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
		      	<Nav.Item><Link className="nav-link" to="/" >Home</Link></Nav.Item>
				<Nav.Item><Link className="nav-link" to="/about" >About</Link></Nav.Item>
				<Nav.Item><Link className="nav-link" to="/contact" >Contact</Link></Nav.Item>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
        
    );
};


export default NavigationBar;
