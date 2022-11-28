import React, { Component } from 'react';
import './App.css';
import Card from './general/Card.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="grid-3">
        <Header />
        <Card
          commentsUrl="http://localhost:3000/comments"
          currentUserId="1" />
      </div>
    );
  }
}

export default App;
