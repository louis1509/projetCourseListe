'use strict';

import React, {Component} from 'react';
import { Row, Col, Panel, Table} from 'react-bootstrap';

import './Courses.css';


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
	  <li>{number}</li>
	);
class Courses extends React.Component{

	constructor(props, context){
		super(props, context);
		this.state = {
			nom : 'louis'
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
								      <th class="col-1">Nom</th>
								      <th class="col-3">qt</th>
								      <th class="col-3">prix</th>
								      <th class="col-5">Acheté</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td>1</td>
								      <td>Mark</td>
								      <td>Otto</td>
								      <td>@mdo</td>
								    </tr>
								    <tr>
								      <td>2</td>
								      <td>Jacob</td>
								      <td>Thornton</td>
								      <td>@fat</td>
								    </tr>
								    <tr>
								      <td>3</td>
								      <td colSpan="2">Larry the Bird</td>
								      <td>@twitter</td>
								    </tr>
								  </tbody>
								</Table>

				            </Panel.Body>
				          </Panel.Collapse>
				        </Panel>
						
					</Col>
				</Row>
			</div>
		);
	}
}
export default Courses;