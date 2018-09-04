import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LogonContainer from "../components/login/LogonContainer";
import Courses from '../components/courses/Courses';

	

	//It has the same API as <Route />
	//It renders a </Route> and âsses all the props through it 
	//It checks if the user is authenticad, if they are
	// it rendeers the "component" prop, if not, it redirects the user to login
	const PrivateRoute = ({ component: Component,isAuthenticated: isAuthenticated,  ...rest }) => (
	  <Route {...rest} render={(props) => (isAuthenticated === true ? <Component {...props} />: <Redirect to='/login' />
	  )} />
	)



class RoutesApp extends React.Component{
	constructor (props, context){
		super(props, context);
		 var handler = this.handler.bind(this)
		this.state = {
			isAuthenticated : false
		};
	}

	handler = (isAuthenticated) =>{
	    this.setState({
	      isAuthenticated: isAuthenticated
	    })
  }

	
	
	render(){
		return(
			<Router>
				<div>
	               <Switch > 	                 
	                  <Route exact path='/Login' handler = {this.handler} render = {(props)=>(<LogonContainer {...props} handler = {this.handler}/>)} />
	                  <PrivateRoute path ='/Courses' component={Courses} isAuthenticated ={this.state.isAuthenticated}/>
	               </Switch>
	            </div>
			</Router>
		);
	}
}

export default RoutesApp;
