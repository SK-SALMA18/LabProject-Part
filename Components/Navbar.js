import React from 'react'
import '../nav.css';
import {Link} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
function Navbar() {
  return (
    <div>
      <CssBaseline/>
      <nav className='navbar'>
          <ul className ='nav-ul'>
            <Link to='/labTable' className='nav-links'>
            <li className='nav-item'>Add Laboratorist</li>
            </Link>
            <Link to='/laboratorist' className='nav-links'>
            <li className='nav-item'>Laboratorist Data</li>
            </Link>
            <Link to='/report' className='nav-links'>
            <li className='nav-item'>Report Data</li>
            </Link>
            <Link to='/reporttable' className='nav-links'>
            <li className='nav-item'>Report List</li>
            </Link>
            <Link to='/inventory' className='nav-links'>
            <li className='nav-item'>Inventory Management</li>
            </Link>
            <Link to='/instrument' className='nav-links'>
            <li className='nav-item'>Instrument Equipment</li>
            </Link>
          </ul>
</nav>
    </div>
  )
}

export default Navbar;