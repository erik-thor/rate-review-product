import React, { Component } from 'react';
import './App.css';
import Product from './general/Card.js'
import Comments from "./general/Comments";

class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Comments
          commentsUrl="http://localhost:3000/comments"
          currentUserId="1" />
      </div>
    );
  }
}

export default App;
