
import React, {Component} from 'react';
import './Login.css';
import { Alert ,Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

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
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>

          <ControlLabel>Username with validation</ControlLabel>
          <FormControl
            type="text"
            
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>   
        </FormGroup>

         <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>

          <ControlLabel>password with validation</ControlLabel>
          <FormControl
            type="password"
            
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>   
        </FormGroup>

        <Button type="submit">Submit</Button>

          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too  good.
        </Alert>


      </form>
    );
  }
}

export default Login;
