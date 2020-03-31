import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router-dom';
import { Jumbotron,Container,Row,Col,Image,Button } from 'react-bootstrap';
import './Home.css';

class HomeComponent extends Component {
    

    render() {
        return (
        	<Container>
        		<Jumbotron>
        			<h2>Welcome to Website</h2>
        			<p>This is how to build a website in react</p>
        			<Link to="./about" >
        			<Button bsStyle="primary">About</Button>
        			</Link>
        		</Jumbotron>
        	</Container>
            
        );
    }
}

export default HomeComponent;
