'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Panel, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon, Checkbox} from 'react-bootstrap';

import ListeCourses from './ListeCourses';
import './Courses.css';



const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
	  <li>{number}</li>
	);
class Courses extends React.Component{

	constructor(props, context){
		super(props, context);
		this.handleSubmit 		= this.handleSubmit.bind(this);
		this.handleChange 		= this.handleChange.bind(this);
		this.handleChangeNumber = this.handleChangeNumber.bind(this);

		this.state = {
			provisionName 		: '',
			provisionQuantity 	: '',
			provisionPrice		: '',
			name 				: '',
			isProvisionAdded	: false
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		const {name, quantity, price}= this.state;
		console.log('handle submit courses.js : ' + {name, quantity, price})
		// Send a POST request
		axios({
  			method: 'post',
  			url: 'http://localhost:3000/provisions/create',
 			data: {
			    name 		: this.state.provisionName,
			    quantity 	: this.state.provisionQuantity,
			   	price	  	: this.state.provisionPrice
		 },
			withCredentials:true
		})
		.then((response)=>{
			console.log('provision saved : ' + response);
			this.setState({isProvisionAdded : true});


		})
		.catch((err)=>{
			console.log('error while saving provision : ' + err);
		});


	}

	handleChange(e){
    	const target  = e.target;
	    const value   = target.value;
	    const name    = target.name;

      	this.setState({
	      [name] : value
	    });	    
  }

  handleChangeNumber(e){
  	 const re = /^[0-9\b]+$/;
  	 const target  = e.target;
	 const value   = target.value;
	 const name    = target.name;
     if (value == '' || re.test(value)) {
         this.setState({
         	[name]: value
         });
      } 
  }

	render(){
		return(

			<div id="coursesContainer">
				 <Row className="show-grid">
	                 <Col sm={6} smOffset={3}>
	                 	<Row>
	                 		<Col sm={6} smOffset={3}>
								<h1>Bienvenue {this.state.name}</h1>
							</Col>
						</Row>
						<Panel id="courses-container-panel" defaultExpanded>
				          <Panel.Heading>
				            <Panel.Title toggle>
				              Ma liste de courses
				            </Panel.Title>
				          </Panel.Heading>
				          <Panel.Collapse>
				            <Panel.Body id="courses-container-panel-body">
								<ListeCourses update={this.state.isProvisionAdded} />
				            </Panel.Body>
				          </Panel.Collapse>
				        </Panel>

					    <Form id="provisionsAdding" inline onSubmit={this.handleSubmit}>
					       <Row>
				        		<Col sm={5}>
							  		<FormGroup controlId="formInlineName">
							    		<FormControl type="text" placeholder="Jane Doe" value={this.state.provisionName} onChange={this.handleChange} name="provisionName"/>
							  		</FormGroup>
							  	</Col>
							  	<Col sm={3}>
							  		<FormGroup controlId="formInlineEmail">
							    		<FormControl type="text" placeholder="jane.doe@example.com" value={this.state.provisionQuantity} onChange={this.handleChangeNumber} name="provisionQuantity"/>
							 		 </FormGroup>
							  	</Col>
							   	<Col sm={3}>
							 		<FormGroup controlId="formInlineEmail">
							    		<FormControl type="text" placeholder="jane.doe@example.com" value={this.state.provisionPrice} onChange={this.handleChange} name="provisionPrice"/>
							  		</FormGroup>
							  	</Col>
							  	<Col sm={1}>
							  		<Button type="submit" bsStyle="success" >
							  			<Glyphicon glyph="plus" />
      								</Button>
							  	</Col>
							</Row>
						</Form>	
					</Col>
				</Row>
			</div>
		);
	}
}
export default Courses;