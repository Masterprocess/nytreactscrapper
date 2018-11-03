import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">New York Times Scraper</h5>
          <p className="grey-text text-lighten-4">Search the NYT at your leisure.</p>
        </div>
        <div className="col l2 offset-l4 s12">
          <h5 className="white-text">Check me out!</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="http://www.christopherrackley.com/" target="_blank" rel="noopener noreferrer">My Portfolio</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/christopher-rackley/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2017 Chris Rackley
      </div>
    </div>
  </footer>
);

export default Footer;
