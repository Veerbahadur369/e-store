import React, { Fragment } from 'react'
import Sidebar from '../Components/profile/Sidebar'
import Mainpage from '../Components/profile/Mainpage'
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Profile() {
 

 
 
  return (
    <Fragment>
       <div className='flex text-center  bg-[#242a2f]'>
      <Sidebar />
      <Mainpage />
       </div>
       
    </Fragment>
  )
}

export default Profile
