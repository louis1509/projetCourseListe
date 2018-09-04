'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Panel, Table, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon, Checkbox} from 'react-bootstrap';

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
			provisionPrice		: ''
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
								<h1>Bienvenue {this.state.nom}</h1>
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
				              {/*<ul>{listItems}</ul> */}
								<Table id="tableCourses" responsive>
								  <thead>
								    <tr>
								      <th className="col-sm-5 col-xs-5">Nom</th>
								      <th className="col-sm-3 col-xs-3">qt</th>
								      <th className="col-sm-3 col-xs-3">prix</th>
								      <th className="col-sm-1 col-xs-1">Acheté</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td>Melons de melun</td>
								      <td>1</td>
								      <td>4,25 euros</td>
								      <td><Checkbox checked></Checkbox></td>
								    </tr>
								    <tr>
								      <td>2</td>
								      <td>Jacob</td>
								      <td>Thornton</td>
								      <td><Checkbox></Checkbox></td>
								    </tr>
								    <tr>
								      <td>3</td>
								      <td colSpan="2">Larry the Bird</td>
								      <td><Checkbox></Checkbox></td>
								    </tr>
								  </tbody>
								</Table>

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