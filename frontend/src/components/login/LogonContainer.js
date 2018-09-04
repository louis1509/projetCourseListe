'use strict';
import React, {Component} from 'react';
import  {Tabs, Tab, Row, Col} from 'react-bootstrap';
import Login from "./loginForm/Login";
import Registration from "./registrationForm/Registration";

class LogonContainer extends React.Component {        
    constructor(props, context) {
        super(props, context);
        //functions
        this.handleSelect = this.handleSelect.bind(this);
        //Label
        this.login           ="Connectez- vous";
        this.registration    ="Inscrivez vous";

        this.state = {
            title :'Connectez vous',
            key   : 1
        };

     }

     handleSelect(key){
        if(key === 1) this.setState({title : "Connectez vous"});
        if(key === 2) this.setState({title : "Inscrivez vous"});         
     }

        render(){
            return (
                <div>        
                    <Row className="show-grid">
                        <Col sm={6} smOffset={3}>
                            <Row>
                                <Col sm={6} smOffset={4}>
                                    <h2><strong>{this.state.title}</strong></h2>
                                </Col>
                             </Row>
                             <Tabs onSelect={this.handleSelect} 
                                id="controlled-tab-example">
                                <Tab eventKey={1} title={this.login}>
                                    <br/>
                                    <Login history={this.props.history} handler={this.props.handler} />
                                </Tab>
                                <Tab eventKey={2} title={this.registration}>
                                     <br/>
                                    <Registration/>
                                </Tab>
                            </Tabs>
                        </Col>
                      </Row>
                  </div>
            );
        }

}

export default LogonContainer;