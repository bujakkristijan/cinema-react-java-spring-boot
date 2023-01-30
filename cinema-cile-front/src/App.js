import NavbarComponent from "./components/navbar/NavbarComponent";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";
import Navbar from "./components/navbar-component/Navbar";
function App() {
  return (
    <Router>
      {/* <NavbarComponent/> */}
      <Navbar/>
      <div className="router-components">
      <Routes>
        <Route path="/login" element={<LoginComponent/>}>

        </Route>
      </Routes>
      </div>
     
    </Router>
  );
}

export default App;
