import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import MainComponent from './components/MainComponent';
import Menu from './components/MenuComponent';
class App extends Component {

  render() {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }
}

export default App;
