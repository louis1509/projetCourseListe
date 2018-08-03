'use strict'; 
import React, {Component} from 'react';
import  {ControlLabel, FormControl, HelpBlock, FormGroup} from 'react-bootstrap';

class Registration extends React.Component {
	constructor(props, context){
		super(props, context)

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
    	alert('A name was submitted: ' + this.state.value);
    	e.preventDefault();
 	 }

	render(){
		return(
			<form className="registration" onSubmit={this.handleSubmit}>
				 <FormGroup
	          controlId="formBasicText"
	         //validationState={this.getValidationState()}
	        >
	          <ControlLabel>Working example with validation</ControlLabel>
	          <FormControl
	            type="text"
	            //value={this.state.value}
	            //placeholder="Enter text"
	            //onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	          <HelpBlock>Validation is based on string length.</HelpBlock>
	        </FormGroup>

			</form>
		);
	}

}

export default Registration;