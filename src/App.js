
import './App.css';
import './componentes/nav/Nav.css';
import './componentes/Footer';
import NavBar from './componentes/nav/NavBar';
import Footer from './componentes/Footer';






export default function App() {
  return (
   /* <div className="App">
    <Proof/>
    </div>
    */
    <div> 
       <Footer/>      
    
      <NavBar logged={false}/>  
    </div>
    
        
  );

}







