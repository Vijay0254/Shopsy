import React from 'react'
import logoImg from "../assets/logo.png"
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='footer-background-sm md:footer-background-md pt-10 pb-44 gap-10 md:gap-0 md:pb-32 px-5 md:px-20 text-white flex md:flex-row flex-col justify-evenly'>
        <div>
          <div className='flex items-center gap-4'>
            <img src={logoImg} alt="logo" className='w-12' />
            <h1 className='text-3xl font-bold'>Shopsy</h1>
          </div> 
          <p className='pt-3 md:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure, fuga optio reiciendis perspiciatis laborum.</p>
        </div>
        <div className='flex gap-12'>
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-xl pb-1'>Important Links</h2>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Home</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>About</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Contact</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Blog</h5>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-xl pb-1'>Links</h2>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Home</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>About</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Contact</h5>
            <h5 className='cursor-pointer hover:text-primary hover:scale-110 hover:translate-x-3 duration-300'>Blog</h5>
          </div>
        </div>
        <div>
          <div className='flex gap-4 pb-4'>
            <LuInstagram className='size-7 cursor-pointer' />
            <FaFacebook className='size-7 cursor-pointer' />
            <FaLinkedin  className='size-7 cursor-pointer' />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <FaLocationArrow className='size-5' />
              <h5>Noida, Uttar Pradesh</h5>
            </div>
            <div className='flex gap-2 items-center'>
              <IoIosPhonePortrait className='size-5' />
              <h5>+91 123456789</h5>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer