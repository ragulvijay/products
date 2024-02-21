import React from 'react'
import Data from './Data'
import CardItem from './CardItem'


const List = ({addToCart}) => {
  return (
    <section>
        
        {Data.map((user) =>(
            <CardItem user={user}  key={user.id}  addToCart={()=>{addToCart(user)}}/>
        ))
        }
        </section>
  )
}

export default List
