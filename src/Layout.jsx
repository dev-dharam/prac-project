import React from 'react'
import Header from './comonent/Header'
import Footer from './comonent/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout