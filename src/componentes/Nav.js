import React from 'react';
import './Nav.css';

function Nav () {
    return(
      <header id="header" className="d-flex flex-column justify-content-center">

      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house-door-fill"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person-fill"></i><span>About</span></a></li>
          <li><a href="#menu" className="nav-link scrollto"><i className="bi bi-grid-fill"></i><span>menu</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-geo-alt-fill"></i><span>Contact</span></a></li>
        </ul>
      </nav> 
    </header>
        
      );
}
export default Nav