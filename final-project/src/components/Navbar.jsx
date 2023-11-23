// Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import logo from '../logo.svg';
import menu from '../lib/menu.json'; // Adjust the path accordingly

// Component for rendering navigation links
const NavLinks = () => (
  <ul className='flex my-2 mx-8'>
    {menu.map((item, index) => (
      <li key={index}>
        {/* Link component from react-router-dom for navigation */}
        <Link to={item.path}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

// Component for rendering the mobile menu
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className='text-black flex gap-2 items-start'>
    <button
            onClick={() => setOpenMenu(!openMenu)}
            className='block md:hidden my-3 mx-2 text-white p-4 cursor-pointer'
            >
            {/* Button for toggling the mobile menu */}
            <FaBars />
          </button>
  <div
    className={`fixed bg-black bg-opacity-50 backdrop-blur transform z-50 inset-y-0 right-0 w-1/2 md:w-52 h-screen ease-in ${
      openMenu ? 'translate-x-0' : ' translate-x-full hidden'
    } duration-200 `}
    >
      <div className='text-white px-4 pt-4'>
       <button onClick={() => setOpenMenu(false)}><FaTimesCircle size={18}/></button>
      </div>
    <ul>
      {menu.map((item, index) => (
        <li
        key={index}
        className='text-white hover:text-black hover:bg-gray-200 cursor-pointer'
        >
          {/* Link component for mobile menu items */}
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
      </div>
);
}

// Main Navbar component
const Navbar = () => {
  

  return (
    <div className='absolute z-40 inset-x-0 text-white top-0 px-6'>
      <div className='flex justify-between flex-row font-medium'>
        {/* Logo linking to the home page */}
        <Link to={'./'}>
          <img src={logo} className='app-logo w-20 h-10 my-3' alt='logo' />
        </Link>
        <div className='hidden md:flex flex-wrap gap-10 flex-row font-medium'>
          {/* Render the navigation links */}
          <NavLinks />
        </div>

        <div className='flex gap-6 duration-200 items-start ease-in'>
          <div className='hidden md:block my-3 fill-white text-white'>
            {/* Component for the search box */}
            <SearchBox />
          </div>
          
          {/* Render the mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

