import React from 'react';
import './LoginComponent.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const LoginComponent = () => {
  return (
    <div className="login-box">
    <h1>Login</h1>
    <form className='login-form'>
      <input className='input' type="text" placeholder="Username" id="login-input">
      </input>
      <input className='input' type="password" placeholder="Password" id="login-input">
      </input>
      <button className='login' type="submit" id="login-button">Login</button>
      <div className='registration-div'>
        <div className='registration-label'>Don't have an account?&nbsp;</div>
        <Link className='registration-link' to='/registration'>Register</Link>
      </div>
      
    </form>
  </div>
  )
}

export default LoginComponent