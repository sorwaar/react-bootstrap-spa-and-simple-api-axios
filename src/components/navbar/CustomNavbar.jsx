import React, { Component, PropTypes } from 'react';
import { Navbar,Nav,NavItem,Form,FormControl,Button,NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    

    render() {
        return (
        	<Navbar bg="dark" variant="dark" collapseOnSelect>
			    <Navbar.Brand><Link to="/">WEBSITE</Link></Navbar.Brand>
			    <Navbar.Toggle/>
        		<Navbar.Collapse>

				    <Nav className="mr-auto">
				    	<Nav.Item><Nav.Link herf="/">Home</Nav.Link></Nav.Item>
				    	<Nav.Item><Nav.Link herf="/about">About</Nav.Link></Nav.Item>
				    </Nav>
        		</Navbar.Collapse>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-info">Search</Button>
				    </Form>
			  </Navbar>            
        );
    }
}

export default CustomNavbar;
