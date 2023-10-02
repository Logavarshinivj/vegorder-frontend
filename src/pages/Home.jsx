import React from 'react'
import Food from '../components/Food';
import { useState } from 'react';
import { useEffect } from 'react';
// import food from "../food.js"
export const Home = ({addToCart}) => {
    const food=[
        {
        name:"Tomato",
        price:120,
        image:"https://static.toiimg.com/thumb/msid-64222678,width-1280,resizemode-4/64222678.jpg"
        },
        {
        name:"kari soru",
        price:260,
        image:"https://b.zmtcdn.com/data/dish_photos/75a/40ccc8326b81ab23b050c8546568375a.jpg?output-format=webp"
        },
        {
        name:"veg meals",
        price:120,
        image:"https://b.zmtcdn.com/data/dish_photos/75a/40ccc8326b81ab23b050c8546568375a.jpg?output-format=webp"
        },
        {
            name:"veg meals",
            price:"120",
            image:"https://b.zmtcdn.com/data/dish_photos/75a/40ccc8326b81ab23b050c8546568375a.jpg?output-format=webp"
            },
        
        ];

        const[item,setItem]=useState([])
        useEffect(()=>{
            fetch("https://vegorder-backend-3y5e.vercel.app/get-items")
            .then((res)=>res.json())
            .then((data)=>setItem(data))
          },[])

  return (
    <div>
       <div className="row">
        {/* {food.map(food=>{ */}
            {/* return */}

            
             {/* <div className="col-md-3 p-3"> */}
                <div className='m-5'>
                    {/* <Food food={food}/> */}
                    <div className='itemlist' >
                    {item.map((itm,index)=>(<Food item={itm} id={index}  addToCart={addToCart}/>))}
                    </div>
                  
            </div>
            </div>
         
       </div>
    // </div>
    
  )
}
