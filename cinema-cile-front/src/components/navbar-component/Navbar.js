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
              <img className="logo" src={require('../../images/cinema-logo.png')} alt=''/>
              
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  
                  to="/"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Projections
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Myreservations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/movies"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  
                  to="/users"
                
                  className="nav-link"
                  onClick={handleClick}
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item-button">
                <NavLink
                  
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
        <div className="navbar-bottom-line"></div> 
      </>
    );
}

export default Navbar