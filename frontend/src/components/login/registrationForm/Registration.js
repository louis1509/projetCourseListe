'use strict'; 
import React, {Component} from 'react';
import  {ControlLabel, FormControl, HelpBlock, FormGroup, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';

class Registration extends React.Component {
	constructor(props, context){
		super(props, context)

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
				login	 		: '',
				password 		: '',
				confirmPassword : '',
				groupName 		: ''
		};
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.password !== this.state.confirmPassword){
			return;
		} 
		const {login, password, groupName} = this.state;
    	axios.post('http://localhost:3000/users/create',  {login, password, groupName})
    	.then(res=>{
    		console.log(res);
    		console.log(res.data);
    	});
    	
 	 }

 	 handleChange(event){
 	 	const target = event.target;
 	 	const value = target.value;
 	 	const name = target.name;

 	 	this.setState({
 	 		[name] : value
 	 	});
 	 }

	render(){
		return(
			<form className="registration" onSubmit={this.handleSubmit}>
			 <FormGroup controlId="usernameREgistration"
	         //validationState={this.getValidationState()}
	         >
	          <ControlLabel>Nom d'utilisateur</ControlLabel>
	          <FormControl type="text" value={this.state.login} placeholder="Enter text" onChange={this.handleChange} name="login"/>
	          <FormControl.Feedback />
	        </FormGroup>

	        <FormGroup controlId="firstPassword">
	          <ControlLabel>Mot de passe</ControlLabel>
	          <FormControl type="password" value={this.state.password} placeholder="Enter text" onChange={this.handleChange} name="password"/>
	          <FormControl.Feedback />
	        </FormGroup>

	        <FormGroup controlId="confirmPassword">
	          <ControlLabel>Confirmer le mot de passe</ControlLabel>
	          <FormControl type="password" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} name="confirmPassword"/>
	          <FormControl.Feedback />
	        </FormGroup>

		    <FormGroup controlId="selectGroup">
		      <ControlLabel>Select</ControlLabel>
		      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} name="groupName">
		        <option value="select">select</option>
		        <option value="other">...</option>
		      </FormControl>
		    </FormGroup>
			<br/>
			<Row>
          		<Col sm={5} smOffset={4}>
            		<Button bsStyle="primary" type="submit">Enregistrer</Button>
          		</Col>
        	</Row>
		</form>
		);
	}

}

export default Registration;