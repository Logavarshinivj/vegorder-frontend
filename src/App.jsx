import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Button } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Cart } from './pages/Cart'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import StripeCheckout from 'react-stripe-checkout'
import { Order } from './pages/Order'
import { useEffect } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


// function App() {
 

//   return (
//    <div>
//      {/* <h1>GET YOUR MEALS</h1> */}
//      <Navbar/>
//      <Home/>
//    </div>
//   )
// }

// export default App


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";

 function App() {

  const auth=localStorage.getItem('user')
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate("/login-veggies",{replace: true})
  }

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };
// const addToCart = (item) => {
//   const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItem(savedCart);
// }
// useEffect(() => addToCart(), []);



  const removeFromCart = (item) => {
    setCartItem(cartItem.filter((i) => i != item));
  };
  const handlecartClear = () => {
    setCartItem([]);
  };
  
  return (
    <div>
      
      <div>
      {auth?  
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a className="navbar-brand" href="/">
       Buy Veggies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">
              Login
            </a> */}
              <Button onClick={logout}  color="inherit">Logout</Button>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li> */}
          <li>
          <Button color="inherit" className='cart-icon' onClick={() => navigate("/cart")}>
          <Badge  color="error">
            <ShoppingCartIcon/>
            {cartItem.length === 0 ? "" : cartItem.length}
            </Badge>
          </Button>
          </li>
        </ul>
      </div>
    </nav>:
    <nav  className="navbar navbar-expand-lg navbar-light "
    style={{ backgroundColor: "#e3f2fd" }}>
       <a className="navbar-brand" href="/">
       Buy Veggies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/register-veggies">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login-veggies">
              Login
            </a>
              
          </li>
  
        </ul>
      </div>
    </nav>
}
    </div>
    <div>

    </div>

    <div className="App">
        {/* <Routes> */}
          {/* <Route
            path="/"
            element={
             <Home/>
            }
          /> */}
          {/* </Routes> */}
          <Routes>
          <Route element={<Private/>}>
          <Route path="/" exact element={<Home  addToCart={addToCart}
                removeFromCart={removeFromCart} />}/>
                </Route>
       
                    <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
               
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                handlecartClear={handlecartClear}
              />
            }
             />
             <Route path="/order" exact element={<Order></Order>}/>
             <Route path="/register-veggies" exact element={<Register></Register>}/>
             <Route path="/login-veggies" exact element={<Login></Login>}/>
            
            
             
          </Routes>
    </div>
    </div>
  )
}
function Private(){
  
  const auth=localStorage.getItem('user')
   return auth? <Outlet/>:<Navigate to="register-veggies"/>

}
export default App
