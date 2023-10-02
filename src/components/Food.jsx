import React from 'react'
import { useState } from 'react'

export default function Food({item,addToCart}) {
  const[quantity,setQuantity] =useState(1)
  return (
    <div  className='shadow-lg p-3 mb-5 bg-white rounded'>
     <h1>{item.name}</h1>
     <img src={item.image} className='img-fluid' style={{height:"200px",width:"300px"}}/>
     <div className='flex-container'>
       <div className='w-100 m-1'> <div className='sample'><p>Quantity(1kg)</p>
        {/* <select className='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x,i)=>{
                return <option value={i+1}>{i+1}kg</option>
            })}
        </select> */}
        </div>
        </div>
        <div className='w-100 m-1'>
          <div className='m-1 w-100'>
          <p className='m-1 w-100'>Price: {item.price*quantity}₹</p>
          </div>
        </div>
     </div>

     <div className='m-1 w-100'><button className='btn' onClick={() => addToCart(item)}>ADD TO CART</button></div>

    </div>
  )
}
