'use strict';
import React, {Component} from 'react';
import  {Tabs, Tab} from 'react-bootstrap';
import Login from "./loginForm/Login";
class LogonContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
     }
        render(){
            return (
                <Tabs
                   // activeKey={this.state.key}
                   // onSelect={this.handleSelect}
                    id="controlled-tab-example"
                >
                    <Tab eventKey={1} title="Tab 1">
                        <Login/>
                    </Tab>
                    <Tab eventKey={2} title="Tab 2">
                        Tab 2 content
                    </Tab>
                </Tabs>
            );
        }

}

export default LogonContainer;