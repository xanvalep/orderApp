import React from 'react';
import './About.css';


function Home () {
    return(
    

  <section id="about" className="about">
 
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2> About</h2>
        
      </div>

      <div className="row">
     
        <div className="col-lg-3 pt-4 pt-lg-0 content">
        <img className='prod-img' alt='prueba' src='https://picsum.photos/200/300?grayscale'/>    
        </div>
        <div className="col-lg-9 mb-5 pt-4 pt-lg-0 content">
        <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-lg-9 mb-5 pt-4 pt-lg-0 content">
        <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-lg-3 mb-5  pt-4 pt-lg-0 content">
        <img className='prod-img' alt='prueba' src='https://picsum.photos/200/300?grayscale'/>    
        </div>
      </div>
      
      <div className="row">
      <div className="col-lg-12 pt-4 pt-lg-0 content">
      <img className='prod-img bigph' alt='prueba' src='https://picsum.photos/1100/400?grayscale' />    
        </div>
       
      </div>

    </div>
  </section>
   
  
        
      );
}
export default Home