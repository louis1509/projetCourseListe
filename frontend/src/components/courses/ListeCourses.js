'use strict';

import React, {Component} from 'react';
import { Row, Col, Panel, Table, Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon, Checkbox} from 'react-bootstrap';


class ListeCourses extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {

		};
	}

	componentDidMount(){
		//fetching data
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
			);
	}
}

export default ListeCourses;