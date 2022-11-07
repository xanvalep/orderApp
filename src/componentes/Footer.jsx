import React from 'react';
import './Footer.css';



function Footer () {
    return(
        <footer id="footer" className="d-flex flex-column justify-content-center">
     <nav id="footer" className="navbar nav-foot">
        <ul>
          <li><a href="#facebook" className="nav-link scrollto active"><i className="bi bi-facebook"></i><span>facebook</span></a></li>
          <li><a href="#twiter" className="nav-link scrollto"><i className="bi bi-twitter"></i><span>twiter</span></a></li>
          <li><a href="#instagram" className="nav-link scrollto"><i className="bi bi-instagram"></i><span>instagram</span></a></li>
          <li><a href="#youtube" className="nav-link scrollto"><i className="bi bi-whatsapp"></i><span>whatsapp</span></a></li>
          
          
        </ul>
      </nav> 
        </footer>
        
      );
}
export default Footer