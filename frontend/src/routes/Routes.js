import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/login/Login';


class RoutesApp extends React.Component{
	constructor (props, context){
		super(props, context);
	}

	render(){
		return(
			<Router>
				<div>
	               <Switch>	                 
	                  <Route exact path='/Login' component={Login} />
	               </Switch>
	            </div>
			</Router>
		);
	}
}

export default RoutesApp;