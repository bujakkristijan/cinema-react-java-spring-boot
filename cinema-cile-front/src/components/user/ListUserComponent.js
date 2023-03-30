import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';
import './ListUserComponent.css';


const ListUserComponent = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
   getAllUsers();
  }, [])
  
  const getAllUsers = () =>{
    UserService.getAllUsers().then(response =>{
      console.log(response.data);
      setUsers(response.data);
    }).catch(error =>{
      console.log(error);
    });
  }

  const alertAreYouSureDelete = () =>{
    console.log("open");
  }

  return (
    <div className='container'>
      <h1 className='h1-users'>Users</h1>
        <table className='table table-hover'>
          
          <thead>
            <tr>
              <th className='theadth'>ID</th>
              <th className='theadth'>Name and surname</th>
              <th className='theadth'>Username</th>
              <th className='theadth'>Email</th>
              <th className='theadth'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(
                user =>
                <tr className='table-content-row' key={user.id}>
                  <td className='td-content'>{user.id}</td>
                  <td className='td-content'>{user.nameSurname}</td>
                  <td className='td-content'>{user.username}</td>
                  <td className='td-content'>{user.email}</td>
                  <td>
                    <button className='btnDelete' onClick={() => alertAreYouSureDelete(user.id)}>Deactivate</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListUserComponent