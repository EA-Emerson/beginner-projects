// import React from 'react';
import { Link } from 'react-router-dom';
// import Service from './service';
const Navbar = () => {
    return ( 
        <nav className='navbar'>
        <img src='logo192.png' className='logoimg' alt='Logo'/>
        <ul className='list'>
            <li className='links'><Link to="/">Home</Link></li>
            <li className='links'>Portfolio</li>
            <li className='links' ><Link to="/about">About</Link></li>
            <li className='links'><Link to="/service">Services</Link></li>
            <li className='links'><Link to="/contact">Contact Us</Link></li>
            {/* <Link to={<Service/>}>hvhbhb</Link> */}
           
        </ul>
    </nav>
     );
}
 
export default Navbar;