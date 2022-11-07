
import './App.css';
import './componentes/Nav.css';
import './componentes/Footer';
import Home from './componentes/Home';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Menu from './componentes/Menu';
import { Link, Route, Routes } from "react-router-dom"; 
import Footer from './componentes/Footer';



export default function App() {
  return (
   /* <div className="App">
    <Proof/>
    </div>
    */
    <div> 
            <header id="header" className="d-flex flex-column justify-content-center">

<nav id="navbar" className="navbar nav-menu">
  <ul>
    <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house-door-fill"></i> <span><Link to="/">Home</Link></span></a></li>
    <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person-fill"></i><span>About</span></a></li>
    <li><a href="#menu" className="nav-link scrollto"><i className="bi bi-grid-fill"></i><span><Link to="/menu">Menu</Link></span></a></li>
    <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-geo-alt-fill"></i><span>Contact</span></a></li>
  </ul>
</nav> 
</header>
    
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <About/> 
      <Contact/> 
      <Footer/> 

    </div>
    
        
  );

}







