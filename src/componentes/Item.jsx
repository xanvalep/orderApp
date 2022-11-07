import React from 'react';

function Item() {
  return(
    
    <div class="row">
        <GroceryList/>
      </div>
      
      
  );
}

function GroceryList() {
  const items = [
    {id: 1, name: 'Margherita',ingredients: 'Fresh tomatoes, fresh mozzarella, fresh basil'},
    {id: 2, name: 'Formaggio', ingredients: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)'},
    {id: 3, name: 'Chicken', ingredients: 'Fresh tomatoes, mozzarella, chicken, onions'},
    {id: 4, name: 'Pineapple o clock', ingredients: 'Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil'},
    {id: 5, name: 'Meat Town', ingredients: 'Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken'},
    {id: 6, name: 'Parma', ingredients: 'Fresh tomatoes, mozzarella, parma, bacon, fresh arugula'},
    ];
  return (
    <>
      <ul>
        {items.map((item) => <li key={item.id}>
        <div className="row">
       
        <div className="col-sm-3">
        <img className='prod-img bigph' alt='prueba' src='https://picsum.photos/100' />    
        </div>
        <div className="col-sm-9">
        <div className="row">
        <div className="col-sm-9">
        <h1><b>{item.name}</b> <span className="price">$12.50</span></h1>
         <p className="w3-text-grey">{item.ingredients}</p>
        </div>
        <div className="col-sm-3">
          
         <MyForm />

          
        
        </div>
        </div>
         

        </div>
        
      </div>  
      <hr />
         
          </li>)}
      </ul>
    </>
  );


}


function MyForm() {
  return (
    <form className=''>
      <div className="row">
    <div className="col">
    <select className="form-select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>
    </div>
    <div className="col">
      <input type="number" className="form-control" placeholder="Unidades"></input>
      
    </div>
  </div>
      
    </form>
  )
}



export default Item