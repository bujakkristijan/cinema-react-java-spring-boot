import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationComponent.css';
import UserService from '../../services/UserService';

const RegistrationComponent = () => {

const [nameSurname, setNameSurname] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const navigate = useNavigate();

const submitRegistration = (e) =>{

    e.preventDefault();

    const user = {nameSurname, username, password, email};
    console.log("usao submit registration")
    UserService.register(user).then((response) =>{
      let responseFromServer = response.data.toString();
      if(responseFromServer == "success"){
        alert("Uspesno registrovan!");
        navigate("/login");
      }
    })

}

  return (
    <div className='registration-box'>
        <div className='registration-label-container'>
          <i id="faRegistration" class="fa fa-user-plus" aria-hidden="true"></i>
          <label className='registrationLabel'>Registration</label>
        </div>
        <form className='registration-form'>
            <input
              className='input'
              type='text'
              placeholder='Name Surname'
              value={nameSurname}
              onChange = {(e) => setNameSurname(e.target.value)}
            >
            </input>
            <input
              className='input'
              type='text'
              placeholder='Username'
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            >
            </input>
            <input
              className='input'
              type='text'
              placeholder='Password'
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            >
            </input>
            <input
              className='input'
              type='text'
              placeholder='Email'
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            >
            </input>
            <button onClick={submitRegistration} className='registrationBtn' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegistrationComponent