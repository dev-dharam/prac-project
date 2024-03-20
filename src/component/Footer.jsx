import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024 Your Website. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer