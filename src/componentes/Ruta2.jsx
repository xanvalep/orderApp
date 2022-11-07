function Ruta2() {
    return <div>
         <ul>
          <li>
            ir ruta2
    
            </li>
          <li>ir otro</li>
          <li>ir obj css</li>
    
    </ul>
        <h2>Esta es la ruta 2</h2>
    </div>
}



function Form() {
  return (
      <section id="order" class="orde">
     <div className="container" data-aos="fade-up">
     <div class="row mt-1">
     <div class="col-sm-9">
     <div class="info">
       <div class="address">
       
      <h4>Pedido:</h4>
      <p></p>
      <h4>Valor:</h4>
      <p><span className="price">$12.50</span></p>
      </div>
   </div>

     </div>
     <div class="col-sm-3">
     <div class="info">
       <div class="address">
 
     
      </div>
   </div>

     </div>
     </div>
    <form>
    <input class="btn btn-primary" type="button" value="Input"></input>
    </form>
      
      
     </div>
    
     <Form />
    </section>
     
  )
}



export default Ruta2;


