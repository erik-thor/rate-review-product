import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="header__inner">
            <div className="header-branding">
              <h6>Wehkamp</h6>
            </div>
            <div className="header-links">
              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
      );
    }
}

export default Header;

