import React from 'react'
import { Link } from "react-router-dom"
import avatar2 from "../images/avatar2.jpg"
//import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
  
function Header() {
  return (
    <div className="container nav_container">
      <Link to="/" className="nav_logo" >
        <img src={avatar2} alt="logo" />
      </Link>
      <ul className="nav_menu">
        <li> <Link to="/profile"> Profile Images </Link></li>
        <li> <Link to="/create"> Create Post </Link></li>
        <li> <Link to="/authors"> Authors </Link></li>
        <li> <Link to="/logout"> Log-Out </Link></li>
      </ul>
      <button className="nav_toggle_btn"> 
         <AiOutlineClose />
      </button>
   </div>
  )
}

export default Header;