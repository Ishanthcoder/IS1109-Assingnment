import React from "react";
import "./index.css";

function NavBar() {
  return (
    
  <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        
      </a>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#intro">
            <span className="icon">
                <i className="fas fa-home"></i>
                </span>
          Home
        </a>
  
          
         
            
            <a className="navbar-item" href="#contact">
                <span className="icon">
                    <i className="fas fa-envelope"></i>
                    </span>
              <span>Contacts</span>
            </a>

            
            
          
        </div>
      </div>
  
    
    
  </nav>
  );
}


export default NavBar;
