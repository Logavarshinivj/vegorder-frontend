import React from 'react'
import { Button } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';

export const Cart = ({ cartItem, removeFromCart, handlecartClear }) => {
  const totalPrice = cartItem.reduce((price, item) => price + item.price, 0);
  const navigate = useNavigate();
  const makePayment=(token)=>{
    const body={
      token,
      totalPrice,
      cartItem,
    }
    console.log(body)
handlecartClear();
        navigate("/order")
}


  return (
    <div className="my-cart">
      <div className="cart">
      <div>
        <h1>cart Items</h1>
      </div>
      {cartItem.length === 0 && <div>No items Are added</div>}
      <div className="clear-button">
        {cartItem.length >= 1 && (
          <Button variant="contained" onClick={handlecartClear} color="error">
            Clear All
          </Button>
        )}
      </div>
      <div className="cart-items">
        {cartItem.map((item, _id) => (
          <div className="item" key={item._id}>
            <img src={item.image} alt={item.name} className="image-cart" />
            <p className="name">{item.name}</p>

            <div>
              <button className="cart-btn" onClick={() => removeFromCart(item)}>
                <IconButton color="error">
                 <DeleteIcon/>
                </IconButton>
              </button>
            </div>

            <h4>{item.price} Rs/-</h4>
          </div>
        ))}
      </div>
      <div className="total-price">
        <div> TotalPrice -{totalPrice} Rs/-</div>
      </div>
      <div>
     
     <StripeCheckout name="Buy Vegetables" amount={totalPrice*100} currency='INR' 
     stripeKey='pk_test_51NuYBISFYgTxdzKkKPUwF7e6RWnPp2yCxI1rl9kI1dPLl9M5iOBhoGQxoq210Oo61XC1VQyhIRjNMDCC0udwEJKx00N3S68AHD'
     token={makePayment}  shippingAddress>
        <Button variant="contained">
          Order now
        </Button>
     </StripeCheckout>
    </div>
    </div>
    </div>

  )
 }
// import React, { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';

// export const Cart = ({ removeFromCart ,item,cartItem,setCartItem}) => {
 
//   const totalPrice = cartItem.reduce((price, item) => price + item.price, 0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load cart items from localStorage when the component mounts
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItem(savedCart);
//   }, []);

//   useEffect(() => {
  
//     // const price = cartItem.reduce((price, item) => price + item.price, 0);
//     // setTotalPrice(price);

    
//     localStorage.setItem('cart', JSON.stringify(cartItem));
//   }, [cartItem]);

//   const handlecartClear = () => {
//     // Clear the cart and update localStorage
//     setCartItem([]);
//   };

//   const makePayment = (token) => {
//     // Process payment here
//     const body={
//             token,
//             totalPrice,
//             cartItem,
//           }
//     // After successful payment, clear the cart
//     handlecartClear();

//     navigate("/order");
//   };

//   return (
//     <div className="my-cart">
//       <div className="cart">
//         <div>
//           <h1>Cart Items</h1>
//         </div>
//         {cartItem.length === 0 && <div>No items are added</div>}
//         <div className="clear-button">
//           {cartItem.length >= 1 && (
//             <Button variant="contained" onClick={handlecartClear} color="error">
//               Clear All
//             </Button>
//           )}
//         </div>
//         <div className="cart-items">
//           {cartItem.map((item, _id) => (
//             <div className="item" key={item._id}>
//               <img src={item.image} alt={item.name} className="image-cart" />
//               <p className="name">{item.name}</p>

//               <div>
//                 <button className="cart-btn" onClick={() => removeFromCart(item)}>
//                   <IconButton color="error">
//                     <DeleteIcon />
//                   </IconButton>
//                 </button>
//               </div>

//               <h4>{item.price} Rs/-</h4>
//             </div>
//           ))}
//         </div>
//         <div className="total-price">
//           <div> Total Price - {totalPrice} Rs/-</div>
//         </div>
//         <div>
//           <StripeCheckout
//             name="Buy Vegetables"
//             amount={totalPrice * 100}
//             currency="INR"
//             stripeKey="pk_test_51NuYBISFYgTxdzKkKPUwF7e6RWnPp2yCxI1rl9kI1dPLl9M5iOBhoGQxoq210Oo61XC1VQyhIRjNMDCC0udwEJKx00N3S68AHD"
//             token={makePayment}
//             shippingAddress
//           >
//             <Button variant="contained">Order now</Button>
//           </StripeCheckout>
//         </div>
//       </div>
//     </div>
//   );
// };
