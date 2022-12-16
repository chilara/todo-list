import React from 'react'
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='todo-logo'/> 
      <h1>My Todo-s</h1>
    </div>
    
  )
}

export default Header