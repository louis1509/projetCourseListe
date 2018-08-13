
import React, {Component} from 'react';
import './Login.css';
import { Alert ,Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      login     : '',
      password  : ''
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
    const target  = e.target;
    const value   = target.value;
    const name    = target.name;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(e){    
    e.preventDefault();
    const {login, password} = this.state;


    if(this.state.login !== '' && this.state.password != '') {
            
        axios.post('http://localhost:3000/users/login', {login, password})
        .then(res => {
          console.log(res);
          document.cookie = "token = " + res.data; // this bad solution is because i did not find the way to set cookie with cors request with axios or fetch
        })
        .catch(err =>{
          console.log('erreur tentative de connexion : ' +  err);
        });
    }

  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <FormGroup controlId="usernameLogin">

          <ControlLabel>Nom dutilisateur</ControlLabel>
          <FormControl type="text" placeholder="Enter username" onChange={this.handleChange} name ="login"/>
        </FormGroup>

         <FormGroup controlId="formBasicText">
          <ControlLabel>Mot de passe</ControlLabel>
          <FormControl  type="password"  placeholder="Enter password" onChange={this.handleChange} name="password"/> 
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
