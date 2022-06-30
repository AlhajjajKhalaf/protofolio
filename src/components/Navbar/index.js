import './style.css'
import React, { useState, createContext } from 'react'
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  // const [clickTest, setClickTest] = useState("false")
  // console.log(clickTest)
  return (
    <div className="NavBar">
      <div className='divOne'>
        <h2>k H</h2>
      </div>

      <div className='divTow'>
        <h2>Home</h2>
        <h2>Skills</h2>
        <h2>project</h2>
        <h2>About me</h2>
        <h2>Contant</h2>
      </div>
    </div> 
  )
}

export default Navbar
