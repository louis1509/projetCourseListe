
import React, {Component} from 'react';
import './Login.css';
import { Alert ,Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Row, Col} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

import axios from 'axios';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
   
    this.handleChange = this.handleChange.bind(this);
   

    this.state = {
      login           : '',
      password        : '',
      isAuthenticated : false,
    };
  }

  getCook(cookiename)  {
    // Get name followed by anything except a semicolon
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  }

 check(){
      console.log('checking...');
      if(this.getCook('token'))this.setState({isAuthenticated :true});
      else this.setState({isAuthenticated :false});     
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
    console.log('props : ' + this.props);
    const {login, password} = this.state;
  
    
    if(this.state.login !== '' && this.state.password != '') {
            
        axios.post('http://192.168.1.13:3000/users/login', {login, password})
        .then(res => {
          console.log(res);
          document.cookie = "token = " + res.data; // this bad solution is because i did not find the way to set cookie with cors request with axios or fetch
          //redirection
          console.log('redirection');
          this.check();
          this.props.handler(this.state.isAuthenticated);
          this.props.history.push('/courses');
       
          
        })
        .catch(err =>{
          console.log('erreur tentative de connexion : ' +  err);
        });
    }

  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit.bind(this)}>
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
