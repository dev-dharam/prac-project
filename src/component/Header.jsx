import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {

  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold md:w-1/4">
          <Link to={"/"}>India</Link>
        </div>
        <div className="flex-grow md:flex-shrink md:w-1/3 relative rounded-lg overflow-hidden">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            placeholder="Search..."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md absolute right-0 bottom-0">
            Search
          </button>
        </div>
        <div className='md:block hidden md:w-1/3'>
          <div className=' flex justify-end'>
          <Link to={"/login"} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-4">
            Login
          </Link>
          <Link to={"/signup"} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </Link>
          </div>
        </div>
          {
            <button className='text-white text-3xl md:hidden'><IoMdMenu /></button>
          }
      </div>
    </nav>
  );
};

export default Header;
