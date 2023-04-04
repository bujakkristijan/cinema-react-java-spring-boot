import React, {useState} from 'react';
import './LoginComponent.css';
import LoginService from '../../services/LoginService';
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { jwtInterceptor } from '../interceptor/interceptor';


const LoginComponent = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitLogin = (e) =>{

    e.preventDefault();

    const loginParams = {username, password};
    LoginService.login(loginParams).then((response) =>{
      alert("Login params" + loginParams.username + " " + loginParams.password); 
      let responseFromServer = response.data.messageInvalidUsernameOrPassword.toString();
      if(responseFromServer == "no"){
        localStorage.token = response.data.token;
        jwtInterceptor();
        alert("Successful login! Token: " + localStorage.token);
        localStorage.role = decodeTokenAndReturnRole(response.data.token);
        console.log("ROLE LOCALSTORAGE" + localStorage.role);
        navigateDependingOnRole(localStorage.role);
        
      }
      else if(responseFromServer == "yes"){
        alert("Invalid login! Try again");
      }
    })

  }

  const navigateDependingOnRole = (role) =>{
    if(role === "ADMIN"){
      navigate("/users");
    }
    if(role === "USER"){
      navigate("/projections");
    }
    
  }

  const decodeTokenAndReturnRole = (token) =>{
    let decodedToken = jwtDecode(token);
    let role = decodedToken.role;
    return role;
  }

  const alertSuccess = () =>{
    alert("successful login!");
  }

  return (
    <div className="login-box">
      <div className='login-label-container'>
        <i id="faLogin" className="fa fa-sign-in" aria-hidden="true"></i>
        <label className='loginLabel'>Sign in</label>
      </div>
      <form className='login-form'>
        <input 
          className='input' 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
          >
        </input>
        <input 
          className='input' 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          >
        </input>
        <button onClick = {submitLogin} className='login' type="submit" id="login-button">Login</button>
        <div className='registration-div'>
          <div className='registration-label'>Don't have an account?&nbsp;</div>
          <Link className='registration-link' to='/registration'>Register</Link>
        </div>
      </form>
  </div>
  )
}

export default LoginComponent