import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";
import RegistrationComponent from "./components/registration/RegistrationComponent";
import ListUserComponent from "./components/user/ListUserComponent";
import ListMovieComponent from "./components/movie/ListMovieComponent";
import NavbarComponent from './components/navbar/NavbarComponent';
function App() {
  return (
    <Router>
      {/* <NavbarComponent/> */}
      <div className='main-container'>
        <NavbarComponent/>
        <div className="router-components">
        <Routes>
          <Route path="/" element={<LoginComponent/>}></Route>
          <Route path="/login" element={<LoginComponent/>}></Route>
          <Route path="/registration" element={<RegistrationComponent/>}></Route>
          <Route path="/users" element={<ListUserComponent/>}></Route>
          <Route path="/movies" element={<ListMovieComponent/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
