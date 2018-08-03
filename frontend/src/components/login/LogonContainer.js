'use strict';
import React, {Component} from 'react';
import  {Tabs, Tab, Row, Col} from 'react-bootstrap';
import Login from "./loginForm/Login";
import Registration from "./registrationForm/Registration";

class LogonContainer extends React.Component {        
    constructor(props, context) {
        super(props, context);
        this.login           ="Connectez- vous";
        this.registration    ="Inscrivez vous";
     }
        render(){
            return (
                <div>        
                    <Row className="show-grid">
                        <Col sm={6} smOffset={3}>
                            <Row>
                                <Col sm={6} smOffset={4}>
                                    <h2><strong>Connectez vous</strong></h2>
                                </Col>
                             </Row>
                             <Tabs
                               // activeKey={this.state.key}
                               // onSelect={this.handleSelect}
                                id="controlled-tab-example">
                                <Tab eventKey={1} title={this.login}>
                                    <br/>
                                    <Login/>
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