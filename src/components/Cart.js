import React, { useState } from 'react'
import './cart.css'



const Cart = ({cart,setCart,handlechange}) => {
   


    const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    const removebtn=(id)=>{
        const newCart=cart.filter((user)=>user.id!==id)
        setCart(newCart)
    }


  return (
    
    <>
    {
        cart.map((user) =>  (
            <div className='card-bio' key={user.id}>
                <div className='card-img'>
                        <img src={user.img} alt='vijay' />
                    </div>
                    <div className='card-content'>
                        <p>Name: {user.title}</p>
                        </div>
                        <div className='card-btn'>
                            <button onClick={incrementQuantity}>+</button>
                            <button>{quantity}</button>
                            <button onClick={decrementQuantity}>
                            -
                            </button>
                            </div>
                            <div className='card-price'>
                                <p>Price: {user.price}</p>   
                                <button onClick={()=>removebtn(user.id)}>Remove</button>  
                                                      
                            </div>
                            
                            
                </div>
                
                
            
            
        ))
    }
    <div className='cart-footer'>
    
        <span>Total Price: {cart.reduce((acc, item)=>acc+item.price, 0)}</span>
        <p>Quantity: {cart.length}</p>
        
        
                            
        


        
        </div>

    </>
   
  )
}

export default Cart
















// <div className='cart'>
// <div className='cart-header'>
//     <h1>Cart</h1>
// </div>
// <div className='cart-body'>
//     {
//         cart.map((user, index)=>{
//             return(
//                 <div key={index} className='cart-item'>
//                     <img src={user.image} alt={user.name} />
//                     <div className='cart-item-details'>
//                         <h3>{user.title}</h3>
//                         <p>Price: {user.price}</p>
//                         <p>Quantity: {user.quantity}</p>
//                     </div>
//                 </div>
//             )
//         })
//     }
// </div>
// <div className='cart-footer'>
//     <button onClick={()=>setShow(1)}>Checkout</button>
// </div>
// </div>
// {
// show==1 && <div className='checkout'>
//     <h1>Checkout</h1>
// </div>
// }
// </>