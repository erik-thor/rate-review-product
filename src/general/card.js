import React, { Component } from 'react';
import thumbnail from './images/img.webp';
import StarRating from './product-meta';

class App extends Component {
    render() {
      return (
        <div className="product">
          <div className="product-header">
            <StarRating />
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

