'use strict';

import React, {Component} from 'react';
import { Row, Col, Panel, Table, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon, Checkbox} from 'react-bootstrap';
import axios from 'axios';


class ListeCourses extends React.Component{
	constructor(props, context){
		super(props, context);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			provisions : [],
			update 	   : false
		};
	}
	getProvisions(){
		axios.get('http://localhost:3000/provisions/allByGroupName',{withCredentials: true})
			.then((response)=>{
				this.setState({provisions : response.data});
			})
			.catch((error)=>{
				console.log('erreur while getting all provisions by group name : ' + error);
				alert('erreur ' + error);
			});
	}

	componentDidUpdate(prevProps, prevState) {
    	if(prevProps.update !== this.props.update){
    		this.getProvisions();
    	}
    	
	}

	componentDidMount(){
		//fetching data
		this.getProvisions();

	}
	 handleChange(event) {
     	console.log('handle change buy provisions');
     	console.log('event.target.name', event.target.name);
	    console.log('event.target.value', event.target.value);
	    console.log('event.target.checked', event.target.checked);
     	axios.put('http://localhost:3000/provisions/update',{id : event.target.name, buy : event.target.checked},{withCredentials: true})
     	.then((response)=>{
     			console.log('has been updated')
     	})
     	.catch((error)=>{

     		});
  	}

	render(){
		return(

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
			    {this.state.provisions.map((row,index)=>{
			    	return 	<tr>
			    				<td>{row.name}</td>
			    				<td>{row.quantity}</td>
			    				<td>{row.price}</td>
			    				<td><Checkbox onChange={this.handleChange} name={row._id}></Checkbox></td>
			    			</tr>
			    		})
				}
			  </tbody>
			</Table>
			);
	}
}

export default ListeCourses;