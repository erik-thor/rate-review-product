import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
          <div className="footer__inner">
            <div className="footer-branding">
              <h3>Wehkamp</h3>
            </div>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
      );
    }
}

export default Footer;

