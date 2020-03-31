import React from 'react';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
  	<React.Fragment>
  		<NavigationBar/>
    		<Layout>
	    		<Switch>
		    		<Route exact path="/" component={Home}/> 
		    		<Route path="/about"  component={About}/>
		    		<Route path="/contact"  component={Contact}/>
		    		<Route component={NotFound}/>
	    		</Switch>
	    	</Layout>
    </React.Fragment>
  );
}

export default App;
