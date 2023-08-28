import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <Link className='nav' to='/'>Main</Link> <br/>
        <Link to='/about'>About</Link>
    </nav>
  )
}
