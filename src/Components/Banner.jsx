import React from 'react'
import product2Img from "../assets/product2.png"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
   <section className='md:pl-44 md:pr-16 pb-20 flex items-center md:flex-row flex-col justify-between'>
        <div className='pb-10'>
            <img src={product2Img} alt="banner" className='md:h-[350px] md:w-[400px] w-[330px] h-[330px] shadow-xl shadow-black object-cover' />
        </div>
        <div className='flex flex-col gap-5 pl-5'>
            <h1 className='text-3xl font-bold'>Winter Sale upto 50% Off</h1>
            <p className='pt-3 pb-5 font-light text-wrap md:w-[650px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga accusamus dignissimos earum nulla reiciendis sint quo similique suscipit at.</p>
            <div className='flex gap-5 items-center'>
                <GrSecure className='rounded-full dark:text-black p-4 size-12 bg-violet-100' />
                <h3>Quality Products</h3>
            </div>
            <div className='flex gap-5 items-center'>
                <IoFastFood className='rounded-full p-4 dark:text-black size-12 bg-yellow-100' />
                <h3>Quality Products</h3>
            </div>
            <div className='flex gap-5 items-center'>
                <GiFoodTruck className='rounded-full p-4 dark:text-black size-12 bg-blue-100' />
                <h3>Quality Products</h3>
            </div>
            <div className='flex gap-5 items-center'>
                <GiFoodTruck className='rounded-full p-4 dark:text-black size-12 bg-yellow-100' />
                <h3>Quality Products</h3>
            </div>
        </div>
   </section>
  )
}

export default Banner