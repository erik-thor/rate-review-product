import React, { Component } from 'react';
import thumbnail from './images/img.webp';

class App extends Component {
    render() {
      return (
        <div className="product">
          <div className="product-header">
            <div className="product-meta">
            </div>
            <img src={thumbnail} className="product-image" alt="product" />
          </div>
          <h2 className="product-title">Productname</h2>
          <p className="product-description">
            Lorem ipsum dolor et.
          </p>
      </div>
      );
    }
}

export default App;

