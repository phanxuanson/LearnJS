import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          Navbar
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              
                Home <span className="sr-only">(current)</span>
              
            </li>
            <li className="nav-item">
              
                Features
              
            </li>
            <li className="nav-item">
              
                Pricing
              
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
