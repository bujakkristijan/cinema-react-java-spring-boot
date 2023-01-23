import NavbarComponent from "./components/navbar/NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";
import Navbar from "./components/navbar-component/Navbar";
function App() {
  return (
    <Router>
      {/* <NavbarComponent/> */}
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginComponent/>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
