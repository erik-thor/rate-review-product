import React, { Component } from 'react';
import thumbnail from './images/img.webp';
import Comments from "./Comments"

class Card extends Component {
    render() {
      return (
        <div className="product">
          <div className="product__inner">
            <div className="product-image">
              <img src={thumbnail} className="product-image" alt="product" />
            </div>
            <div className="product-content">
              <h2 className="product-title">Productname</h2>
              <p className="product-description">
                Lorem ipsum dolor et.
              </p>
            </div>
          </div>
          <Comments
          commentsUrl="http://localhost:3000/comments"
          currentUserId="1" />
        </div>
      );
    }
}

export default Card;

