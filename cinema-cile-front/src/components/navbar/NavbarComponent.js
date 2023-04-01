import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarComponent.css'

const NavbarComponent = () => {

    const hideMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "-200px";
        navLinks.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"; /* da vrati normalno */
    }

    const showMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "0"; // po defaultu u css-u za male ekrane je stavljeno da je -200, ukoliko stisne dugme, postaje right: 0, pa se pojavi  meni
        navLinks.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)"; /* da zatamni pozadinu */
    }

  return (
    <>
    <div className='navbar'>
    <Link to='/home' className='nav-logo' >
        <img className='img-logo' src={require('../../images/cinema-logo.png')} alt=''></img>
    </Link>
    <div className='nav-links' id='navLinks'>
        <i id="x-menu"className="fa fa-times" onClick={hideMenu}></i>
        <ul className='nav-ul'>
            <li className='nav-list-item'>
                <Link className='nav-link'>My reservations</Link>
            </li>
            <li className='nav-list-item'>
                <Link to='/movies' className='nav-link'>Movies</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link'>Projections</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link'>Halls</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link'>My profile</Link>
            </li>
            <li className='nav-list-item'>
                <Link to='/users' className='nav-link'>Users</Link>
            </li>
            <li className='nav-list-item' id='li-loginBtn'>
                {/* morao sam u div dodatni da stavim sve da bi lepo pozicionirao preko display flex!!!! */}
                <div className='signInContainer'>
                    <i id="faLogin" class="fa fa-sign-in" aria-hidden="true"></i>
                    <Link to='/login' className='login-btn'>Sign in</Link>
                </div>  
            </li>
        </ul>
    </div>
    <i id="menu" className="fa fa-bars" onClick={showMenu}></i>
</div>
<div className='nav-bottom-line'></div>
</>
  )
}

export default NavbarComponent