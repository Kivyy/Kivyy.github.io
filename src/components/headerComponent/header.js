import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="container-fluid nav-section">
            <Link to='/' className=" home-btn"><strong>Home</strong></Link>
            <Link to='/about' className=" about-btn"><strong>About</strong></Link>
            <Link to='/projects' className=" project-btn"><strong>Projects</strong></Link>
            <Link to='/contact' className=" contact-btn"><strong>Contact</strong></Link>
          </div>
      </header>
    );
  }
}


export default Header;
