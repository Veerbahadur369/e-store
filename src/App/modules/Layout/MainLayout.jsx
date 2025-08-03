import React from 'react'
import Navbar from '../../share/Navbar'
import  {Outlet} from 'react-router-dom'
import Footer from '../../share/Footer'

function MainLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
