import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LogonContainer from "../components/login/LogonContainer";
import Courses from '../components/courses/Courses';

	const isAuthenticated = {

		isAuthenticated: false,
		check(){
			console.log('checking...');
			if(getCook('token'))this.isAuthenticated =true;
			else this.isAuthenticated = true;			
		}
	}

	function getCook(cookiename)  {
	  // Get name followed by anything except a semicolon
	  var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	  // Return everything after the equal sign, or an empty string if the cookie name not found
	  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
	  }

	//It has the same API as <Route />
	//It renders a </Route> and âsses all the props through it 
	//It checks if the user is authenticad, if they are
	// it rendeers the "component" prop, if not, it redirects the user to login
	const PrivateRoute = ({ component: Component, ...rest }) => (
	  <Route {...rest} render={(props) => (isAuthenticated.isAuthenticated === true ? <Component {...props} />: <Redirect to='/login' />
	  )} />
	)



class RoutesApp extends React.Component{
	constructor (props, context){
		super(props, context);
		isAuthenticated.check();
	}

	
	
	render(){
		return(
			<Router>
				<div>
	               <Switch>	                 
	                  <Route exact path='/Login' render = {(props)=>(<LogonContainer {...props} />)} />
	                  <PrivateRoute path ='/Courses' component={Courses} />
	               </Switch>
	            </div>
			</Router>
		);
	}
}

export default RoutesApp;