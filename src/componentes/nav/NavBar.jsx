import UserIndex from "..//users/UserIndex";
import LoginView from "../Login";
import Home from "../Home";
import Menu from "../Menu";
import LogButton from "../nav/LogButton";
import { Link, Route, Routes } from "react-router-dom"; 

 export default function NavBar (props) {

  return(
    <div className="mx-5 mt-5"> 

    <header id="header" className="d-flex flex-column justify-content-center">
    <nav id="navbar" className="navbar nav-menu">
    <ul>
        <li> <span><Link  className="nav-link scrollto active" to="/"><i className="bi bi-house-door-fill">Home</i></Link></span></li>
        <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person-fill"></i><span>About</span></a></li>
        <li> <span><Link  className="nav-link scrollto active" to="/menu"><i className="bi bi-house-door-fill">Menu</i></Link></span></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-geo-alt-fill"></i><span>Contact</span></a></li>
        <li><span><LogButton logged={props.logged } /></span></li>
        <li> <span><Link  className="nav-link scrollto active" to="/userAdmin"><i className="bi bi-house-door-fill">Admin</i></Link></span></li>
    </ul>
     </nav> 
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/login" element={<LoginView/>}/>
      <Route path="/userAdmin" element={<UserIndex/>}/>
      </Routes>
    
    
    </div>
  );
}
