import React, { Component } from 'react';
import './App.css';
import Card from './general/Card.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="grid-3">
        <Header />
        <Card
          commentsUrl="http://localhost:3000/comments"
          currentUserId="1" />
        <Footer />
      </div>
    );
  }
}

export default App;
