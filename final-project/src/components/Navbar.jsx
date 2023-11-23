import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { SearchBox } from './SearchBox';
import logo from '../logo.svg';
import {Link} from "react-router-dom"
import menu from "../lib/menu.json"

export const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  return (
    <div className='absolute inset-x-0 top-0 bg-red-300'>
      <div className='flex justify-between flex-row font-medium'>
        <Link to={"./"}><img src={logo} className='app-logo w-20 h-10 my-3' alt='logo' /></Link>
        <div className='md:flex flex-wrap gap=10 flex-row font-medium '>
            <ul className='flex my-2 mx-8 bg-'>
                {
                  menu.map((item,index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))
                }
            </ul>
        </div>
        
        <div className='flex duration-200 ease-in'>
        <div class="my-3">
          <SearchBox/>
        </div>
        <button onClick={() => setOpenMenu(!openMenu)} className='my-5 mx-2'>
        <FaBars/>
      </button>
      <div className={`w-52 bg-red-200 transform ease-in  ${openMenu ? "translate-x-0 block":" translate-x-full hidden"} duration-200 `}>
        <ul>
          <li className='bg-white hover:bg-gray-200 cursor-pointer'>Home </li>
        </ul>
      </div>
        </div>
    
    </div>
    </div>
  );
};

