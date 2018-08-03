'use strict'; 
import React, {Component} from 'react';
import  {ControlLabel, FormControl, HelpBlock, FormGroup, Button, Row, Col} from 'react-bootstrap';

class Registration extends React.Component {
	constructor(props, context){
		super(props, context)

		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
				value : 'louis'
		};
	}

	handleSubmit(e){
    	alert('A name was submitted: ' + this.state.value);
    	e.preventDefault();
 	 }

	render(){
		return(
			<form className="registration" onSubmit={this.handleSubmit}>
			 <FormGroup controlId="formBasicText"
	         //validationState={this.getValidationState()}
	         >
	          <ControlLabel>Nom d'utilisateur</ControlLabel>
	          <FormControl type="text"
	            //value={this.state.value}
	            //placeholder="Enter text"
	            //onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	        </FormGroup>

	        <FormGroup controlId="firstPassword"
	         //validationState={this.getValidationState()}
	        >
	          <ControlLabel>Mot de passe</ControlLabel>
	          <FormControl type="passwort"
	            //value={this.state.value}
	            //placeholder="Enter text"
	            //onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	        </FormGroup>

	        <FormGroup controlId="confirmPassword"
	         //validationState={this.getValidationState()}
	        >
	          <ControlLabel>Confirmer le mot de passe</ControlLabel>
	          <FormControl type="passwort"
	            //value={this.state.value}
	            //placeholder="Enter text"
	            //onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	        </FormGroup>

		    <FormGroup controlId="formControlsSelect">
		      <ControlLabel>Select</ControlLabel>
		      <FormControl componentClass="select" placeholder="select">
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