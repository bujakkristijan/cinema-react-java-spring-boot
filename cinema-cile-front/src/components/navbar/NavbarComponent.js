import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {


    const [isMobile, setIsMobile] = useState(false);
    
    const handleClick = () => setIsMobile(!isMobile);

    
   
    const handleHamburgerHtml = () =>{
        if(isMobile == true){
            
            console.log("ismobile" + isMobile);
             return <i className='fa fa-times'></i>

        }
        else{
            
            console.log("usao u else " + isMobile)
            return <i className='fa fa-bars'></i>
        }
        
    }

  return (
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul 
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick = {handleClick}
        >
            <Link to="/" className='home'>
                <li>Movies</li>
            </Link>
            <Link to="/" className='home'>
                <li>Projections</li>
            </Link>
            <Link to="/" className='home'>
                <li>Users</li>
            </Link>
            <Link to="/login" className='login'>
                <li>Login</li>
            </Link>
            <Link to="/" className='signup'>
                <li>Sign up</li>
            </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={handleClick}>
            <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
    </nav>
  )
}

export default NavbarComponent