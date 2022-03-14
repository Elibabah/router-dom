import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <ul>
            <li><Link to="router-dom/">Home</Link></li>
            <li><Link to="router-dom/contact">Contact</Link></li>
            <li><Link to="router-dom/about">About</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  