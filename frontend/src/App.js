import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesApp from './routes/Routes';
import { CookiesProvider } from 'react-cookie';

class App extends Component {
  render() {
    return (
    <CookiesProvider>
      <RoutesApp/>
    </CookiesProvider>
    );
  }
}

export default App;
