import NavbarComponent from "./components/navbar/NavbarComponent";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";
import Navbar from "./components/navbar-component/Navbar";
import RegistrationComponent from "./components/registration/RegistrationComponent";
import ListUserComponent from "./components/user/ListUserComponent";
import ListMovieComponent from "./components/movie/ListMovieComponent";
function App() {
  return (
    <Router>
      {/* <NavbarComponent/> */}
      <Navbar/>
      <div className="router-components">
      <Routes>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="/registration" element={<RegistrationComponent/>}></Route>
        <Route path="/users" element={<ListUserComponent/>}></Route>
        <Route path="/movies" element={<ListMovieComponent/>}></Route>
      </Routes>
      </div>
     
    </Router>
  );
}

export default App;
