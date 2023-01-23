import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          
            <NavLink exact to="/" className="nav-logo">
              Cinema cile
              
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item-button">
                <NavLink
                  exact
                  to="/login"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          
        </nav>
      </>
    );
}

export default Navbar