import React from 'react'
import { BiHeart, BiHeartCircle, BiShoppingBag } from 'react-icons/bi'
import { FaProductHunt } from 'react-icons/fa'
import { FaBagShopping,  FaGear } from 'react-icons/fa6'
import { GiBigGear } from 'react-icons/gi'

function Sidebar() {
  const data = JSON.parse(localStorage.getItem("userLogined"));
  return (
    <div className='bg-[#1f2229] h-[90vh] w-[15vw] sticky flex flex-col gap-60 border-r hoveborder-[#433fa2] '>
      <div>
      <button className='text-2xl flex gap-4 hover:bg-[#422fa2] w-full px-3  focus:border-l-4 focus:bg-[#433fa2] mt-2 text-white py-2'><FaBagShopping/> <h1>Product</h1> </button>
      <button className='text-2xl flex gap-4 hover:bg-[#422fa2] w-full px-3  focus:border-l-4 focus:bg-[#433fa2] mt-2 text-white py-2'><BiShoppingBag/><h1>Order</h1></button>
      <button className='text-2xl flex gap-4 hover:bg-[#422fa2] w-full px-3  focus:border-l-4 focus:bg-[#433fa2] mt-2 text-white py-2'><BiHeart/><h1>Favorite</h1></button>
      <button className='text-2xl flex gap-4 hover:bg-[#422fa2] w-full px-3  focus:border-l-4 focus:bg-[#433fa2] mt-2 text-white py-2'><FaGear/><h1>Setting</h1></button>
      </div>
      <div className='flex justify-between items-center gap-1 px-4'>
        
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className='w-12 h-12' />
        <p className='text-white relative bottom-0'>{data.name}</p>
      </div>
    </div>
  )
}

export default Sidebar;
