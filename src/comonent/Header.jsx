import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="flex-grow md:flex-shrink md:w-1/3 relative">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            placeholder="Search..."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md absolute right-0 bottom-0">
            Search
          </button>
        </div>
        <div>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-4">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
