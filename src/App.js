import React, { Component } from 'react';
import './App.css';
import Product from './general/Card.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="grid-3">
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
