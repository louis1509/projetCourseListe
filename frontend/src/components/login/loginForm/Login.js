
import React, {Component} from 'react';
import './Login.css';
import { Alert ,Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Row, Col} from 'react-bootstrap';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 'test'
    };
  }

  getValidationState() {
    console.log('test')
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    alert('retest')
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <FormGroup controlId="usernameLogin">

          <ControlLabel>Nom d'utilisateur</ControlLabel>
          <FormControl type="text" placeholder="Enter text" onChange={this.handleChange}/>
        </FormGroup>

         <FormGroup controlId="formBasicText">
          <ControlLabel>Mot de passe</ControlLabel>
          <FormControl  type="password"  placeholder="Enter text"/> 
        </FormGroup>
        <br/>
        <Row>
          <Col sm={5} xs={12} smOffset={4} >
            <Button  bsStyle="success" type="submit">Connexion</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default Login;
