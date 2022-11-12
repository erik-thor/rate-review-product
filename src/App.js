import React, { Component } from 'react';
import './App.css';
import Product from './general/Card.js'

class App extends Component {
  render() {
    return (
      <div className="grid-3">
        <Product />
      </div>
    );
  }
}

export default App;
