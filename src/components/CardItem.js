import React from 'react'
import './CardItem.css'

function CardItem({ user,addToCart}) {
    const{title,img,price,desc}=user;
        

    
  return (
    <div>
      <section>
        
            
            <div className="card" >
                <img src={img} alt='bij' />
                <h2>{title}</h2>
                <p>{desc}</p>
                <p>${price}</p>
                <button className='add-cart' onClick={()=>{addToCart(user)}}  >Add to Cart</button>

            </div>
            
        
            
    </section>
    </div>
  )
}

export default CardItem
