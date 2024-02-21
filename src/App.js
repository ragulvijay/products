import React, { useState } from 'react'
import Navbar from './components/Navbar'
import List from './components/List'
import Cart from './components/Cart'
import './App.css'



function App() {
  const[show,setShow]=useState(true);
  const[cart,setCart]=useState([]);

  const addToCart=(item)=>{
    let present=false;
    cart.forEach(element => {
      if(element.id===item.id){
        present=true;
      }
    }
    );
    if (present){
      alert("Item already in cart")
    }
    else{
      alert("Item added to cart")
    }


    setCart([...cart, item]) 

    
  }
  
    



  

  

  return (
  
    <React.Fragment>
      
      <Navbar size={cart.length} setShow={setShow}/>
      {show ?<List addToCart={addToCart}/>: <Cart cart={cart} setCart={setCart}/>}
      
     
    </React.Fragment>
    
  )
}



export default App;



