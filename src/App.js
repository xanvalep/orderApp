
import './App.css';

import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Menu from './componentes/Menu';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Footer/>
    <Home/>  
    <About/>
    <Menu/> 

    <Contact/> 
    </div>
  );
}

export default App;
