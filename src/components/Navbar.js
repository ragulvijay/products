import React from 'react'
import cart from '../components/cart.png'
import '../components/navbar.css'


const Navbar=({size,setShow})=> {
  return (
    <>
    <div className='container'>
        <h2 className='text-center'onClick={()=>setShow(true)}>Shopping</h2>
        <div className='cart' onClick={()=>setShow(false)}>
        <img className='cart-img' src={cart} alt="" /><sup>{size}</sup>
        </div>
    </div>
    </>
    
  )
}

export default Navbar
