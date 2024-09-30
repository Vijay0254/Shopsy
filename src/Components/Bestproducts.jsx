import React from 'react'
import bestProduct1Img from "../assets/bestProduct1.png"
import bestProduct2Img from "../assets/bestProduct2.png"
import bestProduct3Img from "../assets/bestProduct3.png"
import { FaStar } from "react-icons/fa";

const Bestproducts = ({orderPopup,setorderPopup}) => {
    const bestProductItem = [
        {
            id: 1,
            img: bestProduct1Img,
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque."
        },
        {
            id: 2,
            img: bestProduct2Img,
            title: "Printed Shirt",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque."
        },
        {
            id: 3,
            img: bestProduct3Img,
            title: "Women Shirt",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque."
        }
    ]
  return (
    <section className='px-10 pb-16 md:pb-24'>
        <div className='py-24'>
            <h5 className='text-primary text-sm'>Top Selling Products for you</h5>
            <h1 className='font-bold text-3xl'>Best Products</h1>
            <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, consequatur.</p>
        </div>
        <div className='flex flex-col items-center gap-y-28 md:flex-row justify-evenly'>
            {
                bestProductItem.map((element) => (
                    <div key={element.id} className='p-7 relative w-[280px] hover:bg-gray-900 rounded-md hover:text-white duration-500 shadow-md shadow-gray-400 flex flex-col items-center'>
                        <img src={element.img} alt="best product" className='h-44 absolute -top-20 hover:scale-110  duration-500' />
                        <span className='flex gap-1 pt-20'>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                            <FaStar className='text-primary'/>
                        </span>
                        <h1 className='font-bold text-xl'>{element.title}</h1>
                        <p className='text-center text-sm pb-5'>{element.description}</p>
                        <button onClick={() =>setorderPopup(!orderPopup)} className='md:px-4 px-3 text-xs md:text-sm font-semibold py-2 hover:bg-white hover:text-primary hover:scale-110 duration-300 bg-[#fea928] text-white rounded-full'>Order Now</button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Bestproducts
