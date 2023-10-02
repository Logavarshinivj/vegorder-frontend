// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";

// export default function Navbar() {

//   const [cartItem, setCartItem] = useState([]);
//   // const navigate = useNavigate();
//   const addToCart = (item) => {
//     setCartItem([...cartItem, item]);
//   };
//   const removeFromCart = (item) => {
//     setCartItem(cartItem.filter((i) => i != item));
//   };
//   const handlecartClear = () => {
//     setCartItem([]);
//   };
//   return (
//     <div>
//     <nav
//       className="navbar navbar-expand-lg navbar-light "
//       style={{ backgroundColor: "#e3f2fd" }}
//     >
//       <a className="navbar-brand" href="#">
//        Buy Veggies
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Login
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Cart
//             </a>
//           </li>
//           <li>
//           <Button color="inherit" onClick={() => navigate("/cart")}>
//             cart
//           </Button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     </div>
//   );
// }
