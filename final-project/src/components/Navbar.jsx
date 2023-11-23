// Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
    {/* Add a link to the registration page */}
    <li>
      <Link to="/register">Register</Link>
    </li>
  </ul>
);

// Component for rendering the mobile menu
const MobileMenu = ({ isOpen }) => (
  <div
    className={`w-52 bg-red-200 transform ease-in  ${
      isOpen ? 'translate-x-0 block' : ' translate-x-full hidden'
    } duration-200 `}
  >
    <ul>
      {menu.map((item, index) => (
        <li
          key={index}
          className='bg-white hover:bg-gray-200 cursor-pointer'
        >
          {/* Link component for mobile menu items */}
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
      {/* Add a link to the registration page in the mobile menu */}
      <li className='bg-white hover:bg-gray-200 cursor-pointer'>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  </div>
);

// Main Navbar component
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='absolute inset-x-0 top-0'>
      <div className='flex justify-between flex-row font-medium'>
        {/* Logo linking to the home page */}
        <Link to={'./'}>
          <img src={logo} className='app-logo w-20 h-10 my-3' alt='logo' />
        </Link>
        <div className='md:flex flex-wrap gap-10 flex-row font-medium'>
          {/* Render the navigation links */}
          <NavLinks />
        </div>

        <div className='flex duration-200 ease-in'>
          <div className='my-3'>
            {/* Component for the search box */}
            <SearchBox />
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className='my-5 mx-2'
          >
            {/* Button for toggling the mobile menu */}
            <FaBars />
          </button>
          {/* Render the mobile menu */}
          <MobileMenu isOpen={openMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
