import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './NavbarComponent.css'
import LoginService from '../../services/LoginService';

const NavbarComponent = () => {
    console.log("WTF")

    // kada se stisne na bilo koji link (ne mora da se poziva komponenta) renderuje se ponovo NavbarComponent
    // jedino ovako nakon uspesnog logina se uspesno sakrivaju i pokazuju odgovarajuci linkovi u navbaru na osnovu role 
    // iz localStorage.role
    // proveriti zasto ovo mora, iako se nigde ne koristi, odnosno zasto uopste se renderuje svaki put kada se bilo koji link
    // stisne, nije mi jasno zasto ovako radi !!! verovatno postoji i drugi nacin
    const navigate = useNavigate();

    // useEffect(() => {
    //     setUserRole(localStorage.role);
    //     console.log("localstorage role " + localStorage.role)
    //     console.log("userRole" + userRole)
    //   }, [localStorage.role]);

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

    const logout = () =>{
        LoginService.logout().then((response) =>{
            let responseFromServer = response.data;
            if(responseFromServer === "valid"){
                clearLocalStorage();
                alert("Succesfully signed out! ");
                navigate("/login");
            }
            else if(responseFromServer === "invalid"){
                alert("Something went wrong!");
            }      
        })
    }

    const clearLocalStorage = () =>{
        localStorage.clear();
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
            {localStorage.role === "USER" && <li className='nav-list-item'>
                <Link className='nav-link'>My reservations</Link>
            </li>}
            {localStorage.role === "ADMIN" && <li className='nav-list-item'>
                <Link to='/movies' className='nav-link'>Movies</Link>
            </li>}
            <li className='nav-list-item'>
                <Link className='nav-link'>Projections</Link>
            </li>
            {localStorage.role === "ADMIN" && <li className='nav-list-item'>
                <Link className='nav-link'>Halls</Link>
            </li>}
            {localStorage.role === "USER" && <li className='nav-list-item'>
                <Link className='nav-link'>My profile</Link>
            </li>}
            {localStorage.role === "ADMIN" && <li className='nav-list-item'>
                <Link to='/users' className='nav-link'>Users</Link>
            </li>}
            <li className='nav-list-item' id='li-loginBtn'>
                {/* morao sam u div dodatni da stavim sve da bi lepo pozicionirao preko display flex!!!! */}
                {localStorage.token == null && <div className='signInContainer'>
                    <i id="faLoginBtn" className="fa fa-sign-in" aria-hidden="true"></i>
                    <Link to='/login' className='login-btn'>Sign in</Link>
                </div> }
                {localStorage.token != null  && <div className='signInContainer'>
                    <i id="faLoginBtn" className="fa fa-sign-out" aria-hidden="true"></i>
                    <button className='logout-btn' onClick={() => logout()}>Sign out</button>
                </div> }
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