import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const valueUpdate = (e) => {
    const {name, value} = e.target;

    setUserData(() => {
      return{
        ...userData,
        [name]: value
      }
    })
  }

  const dataSave = async (e) => {
    e.preventDefault();

    const {name, email, password} = userData;

    if(!name || !email || !password){
      return alert("Please Fill All fields!");
    }

    const res = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password})
    });
    console.log(res)
    const serverres = await res.json();
    console.log(serverres)
  }



  return (
    <>
      <div className="flex justify-center items-center h-[85vh] bg-gray-100">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80" onSubmit={dataSave}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input id="name" value={userData.name} onChange={valueUpdate} name='name' type="text" placeholder="Enter your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input id="email" value={userData.email} onChange={valueUpdate} name='email' type="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <div className="relative">
              <input id="password" value={userData.password} onChange={valueUpdate} name='password' type={showPassword ? "text" : "password"} placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <div className='absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>

          <h6 className='mt-5'>Create New <Link to={"/login"} className='text-[#3b82f6]'>Account</Link></h6>
        </form>
      </div>
    </>
  );
};

export default Signup;
