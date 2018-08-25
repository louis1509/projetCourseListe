'use strict'; 
import React, {Component} from 'react';
import  {ControlLabel, FormControl, HelpBlock, FormGroup, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';

class Registration extends React.Component {
	constructor(props, context){
		super(props, context)

		this.handleSubmit 	= this.handleSubmit.bind(this);
		this.handleChange 	= this.handleChange.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);

		this.state = {
				login	 		: '',
				password 		: '',
				confirmPassword : '',
				groupName 		: '',
				newGroupName	: '',

				loginIsUnique	: '',
				passwordIsGood	: ''

		};
	}

	handleFocusOut(e){
		e.preventDefault();
		if(e.target.name === 'login'){
			axios.get('http://localhost:3000/users/' + this.state.login)
				.then(res=>{
					res.data.login !== this.state.login ? this.setState({loginIsUnique : 'success'}) : this.setState({loginIsUnique : 'error'}); 
				})
				.catch((err) =>{
					console.log('erreur when getting one users on handleFocusOut : ' +  err);
				});
			} else if (e.target.name === 'confirmPassword'){
				this.state.password === this.state.confirmPassword ? this.setState({passwordIsGood : 'success'}): this.setState({passwordIsGood	: 'error'});
		}
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.password !== this.state.confirmPassword || this.state.loginIsUnique !== 'success'){
			return;
		}

		const {login, password, groupName,newGroupName} = this.state;
		if(this.state.loginIsUnique = 'success' && this.state.passwordIsGood == 'success'){
			axios.post('http://localhost:3000/users/create',  {login, password, groupName,newGroupName})
		    	.then(res=>{
		    		console.log(res);
		    		console.log(res.data);
		    });
		}	
 	 }

 	 handleChange(event){
 	 	const target = event.target;
 	 	const value = target.value;
 	 	const name = target.name;

 	 	this.setState({
 	 		[name] : value
 	 	});
 	 	console.log(this.state.groupName);
 	 }

	render(){
		return(
			<form className="registration" onSubmit={this.handleSubmit}>
			 <FormGroup controlId="usernameREgistration" validationState={this.state.loginIsUnique}
	         >
	          <ControlLabel>Nom d utilisateur</ControlLabel>
	          <FormControl type="text" value={this.state.login} placeholder="Enter text" onChange={this.handleChange} 
	          onBlur={this.handleFocusOut} name="login"/>
	          <FormControl.Feedback />	          
	           { this.state.loginIsUnique === 'error' && this.state.login !=='' ? <HelpBlock>Ce nom existe déja</HelpBlock> : null }
	        </FormGroup>

	        <FormGroup controlId="firstPassword" validationState ={this.state.passwordIsGood}>
	          <ControlLabel>Mot de passe</ControlLabel>
	          <FormControl type="password" value={this.state.password} placeholder="Enter text" onChange={this.handleChange} name="password"/>
	          <FormControl.Feedback />
	        </FormGroup>

	        <FormGroup controlId="confirmPassword" validationState ={this.state.passwordIsGood}>
	          <ControlLabel>Confirmer le mot de passe</ControlLabel>
	          <FormControl type="password" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} 
	          onBlur={this.handleFocusOut} name="confirmPassword"/>
	          {this.state.passwordIsGood === 'error' && this.state.confirmPassword !=='' ? <HelpBlock> Le mot de passe est différent</HelpBlock> : null}
	          <FormControl.Feedback />
	        </FormGroup>

		    <FormGroup controlId="selectGroup">
		      <ControlLabel>Select</ControlLabel>
		      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} name="groupName">
		        <option value="select">select</option>
		        <option value="new"> nouveau groupe </option>
		      </FormControl>
		    </FormGroup>
		    {this.state.groupName === 'new' ? 
		    <FormGroup controlId="newGroupName">
				<ControlLabel>Nom dutilisateur</ControlLabel>
         		<FormControl type="text" placeholder="Enter username" onChange={this.handleChange} name ="newGroupName"/>
        	</FormGroup>
 			: null}
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