'use strict';

import React, {Component} from 'react';
import { Row, Col, Panel, Table, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon, Checkbox} from 'react-bootstrap';
import axios from 'axios';


class ListeCourses extends React.Component{
// 	static getDerivedStateFromProps(props, state) {
//     if (props.test !== state.test) {
//     	this.forceUpdate();
//       return  {test : props.update};
        
//     }
// }

	constructor(props, context){
		super(props, context);
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
		console.log('componentDidUpdate');
		console.log('prevProps.update',prevProps.update);
		console.log('this.props.update',this.props.update);
		//this.setState{}
    	if(prevProps.update !== this.props.update){
    		this.getProvisions();
    	}
    	
	}

	componentDidMount(){
		//fetching data
		this.getProvisions();

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
			    {this.state.provisions.map((row)=>{
			    	return 	<tr>
			    				<td>{row.name}</td>
			    				<td>{row.quantity}</td>
			    				<td>{row.price}</td>
			    				<td><Checkbox></Checkbox></td>
			    			</tr>
			    		})
				}
			  </tbody>
			</Table>
			);
	}
}

export default ListeCourses;