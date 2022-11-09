import React, { Component } from 'react';
import thumbnail from './img.webp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-header">
          <img src={thumbnail} className="product-image" alt="product image" />
          <h2>Productname</h2>
        </div>
        <p className="product-description">
          Lorem ipsum dolor et.
        </p>
      </div>
    );
  }
}

export default App;
