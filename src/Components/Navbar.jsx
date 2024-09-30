import React, { useState } from 'react'
import logoImg from "../assets/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from './Darkmode';

const Navbar = ({orderPopup,setorderPopup}) => {
    const [orderCart,setorderCart] = useState(false)
  return (
    <header className='px-2 pr-12 flex md:px-32 py-3 items-center shadow-md bg-[#fea928]/40 justify-between'>
        <div className='flex gap-2 justify-center items-center'>
            <img className='md:w-7 w-6' src={logoImg} alt="logo" />
            <h1 className='font-bold text-base md:text-2xl'>Shopsy</h1>
        </div>
        <div className='flex gap-2 md:gap-5'>
            <div className='relative'>
                <input type="text" placeholder='Search' className='border-2 text-xs md:text-base rounded-full border-gray-300 w-28 dark:bg-gray-900 dark:border-0 hover:w-32 focus:w-32 md:w-60 md:hover:w-72 md:focus:w-72 focus:border-[#fea928] focus:outline-none transition-all duration-500 px-2 py-1' />
                <FaSearch className='absolute right-2 h-3 md:h-auto md:right-4 bottom-2 md:bottom-2.5 text-gray-400 hover:text-[#fea928]' />
            </div>
            <button className='md:px-4 px-3 text-xs md:text-sm font-semibold md:font-bold py-1 text-white bg-[#fea928] flex items-center gap-2 rounded-full'>
                {orderCart && <span onClick={() =>setorderPopup(!orderPopup)}>Order</span>}
                <FaCartShopping className='md:my-1 h-3' onClick={() =>setorderCart(!orderCart)} />
            </button>
            <Darkmode />
        </div>
    </header>
  )
}

export default Navbar