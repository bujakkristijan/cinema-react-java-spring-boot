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


const LoginComponent = () => {
  return (
    <div class="login-box">
    <h1>Login</h1>
    <form className='login-form'>
      <input className='input' type="text" placeholder="Username" id="login-input">
      </input>
      <input className='input' type="password" placeholder="Password" id="login-input">
      </input>
      <button className='login' type="submit" id="login-button">Login</button>
    </form>
  </div>
  )
}

export default LoginComponent